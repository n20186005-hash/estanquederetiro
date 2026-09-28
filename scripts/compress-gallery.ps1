# Reduces every JPEG in public/gallery so no single asset exceeds the
# Cloudflare Workers 25 MiB per-file limit.
# Usage: powershell -NoProfile -ExecutionPolicy Bypass -File scripts\compress-gallery.ps1
Add-Type -AssemblyName System.Drawing

$maxSide = 1600          # longest edge in pixels
$quality = 82L           # JPEG encoder quality (0-100)
$sizeLimitBytes = 1MB    # re-encode anything above this
$dir = Join-Path $PSScriptRoot "..\public\gallery"

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' } | Select-Object -First 1
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, $quality)

Get-ChildItem -Path $dir -Filter *.jpg | ForEach-Object {
    $file = $_
    if ($file.Length -le $sizeLimitBytes) {
        Write-Output ("skip  {0}  {1} MB" -f $file.Name, [math]::Round($file.Length / 1MB, 2))
        return
    }

    $tmp = Join-Path $dir ($file.BaseName + ".tmp.jpg")
    $img = [System.Drawing.Image]::FromFile($file.FullName)
    try {
        $ratio = [math]::Min($maxSide / $img.Width, $maxSide / $img.Height)
        $ratio = [math]::Min($ratio, 1.0)
        $w = [int][math]::Round($img.Width * $ratio)
        $h = [int][math]::Round($img.Height * $ratio)

        $bmp = New-Object System.Drawing.Bitmap($w, $h)
        try {
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            try {
                $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
                $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
                $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
                $g.DrawImage($img, 0, 0, $w, $h)
            }
            finally { $g.Dispose() }
            $bmp.Save($tmp, $codec, $encoderParams)
        }
        finally { $bmp.Dispose() }
    }
    finally { $img.Dispose() }

    Move-Item -Path $tmp -Destination $file.FullName -Force
    $after = (Get-Item $file.FullName).Length
    Write-Output ("done  {0}  {1} MB -> {2} MB  ({3}x{4})" -f `
        $file.Name, [math]::Round($file.Length / 1MB, 2), [math]::Round($after / 1MB, 2), $w, $h)
}
