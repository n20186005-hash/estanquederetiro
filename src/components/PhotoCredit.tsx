import type { PlacePhoto } from '@/lib/nearby';
import type { TopicLocale } from '@/lib/topics';
import { visitLabels } from '@/lib/visit';

export default function PhotoCredit({ photo, locale, archive }: { photo: PlacePhoto; locale: TopicLocale; archive?: boolean }) {
  const labels = visitLabels[locale];

  return (
    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
      {archive ? labels.archive : labels.photo}{' · '}
      <a className="underline" href={photo.source}>{photo.author}</a>{' · '}
      {photo.licenseUrl ? <a className="underline" href={photo.licenseUrl}>{photo.license}</a> : photo.license}
      {' · '}{labels.resized}
    </span>
  );
}
