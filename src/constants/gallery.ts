export const GALLERY_DIR = '/gallery';

const encoded = (filename: string) => `${GALLERY_DIR}/${encodeURIComponent(filename)}`;

export const GALLERY_IMAGES = {
  1: encoded('estanque-grande-del-retiro-1.jpg'),
  2: encoded('estanque-grande-del-retiro-2.jpg'),
  3: encoded('estanque-grande-del-retiro-3.jpg'),
  4: encoded('estanque-grande-del-retiro-4.jpg'),
  5: encoded('estanque-grande-del-retiro-5.jpg'),
  6: encoded('estanque-grande-del-retiro-6.jpg'),
  7: encoded('estanque-grande-del-retiro-7.jpg'),
  8: encoded('estanque-grande-del-retiro-8.jpg'),
  9: encoded('estanque-grande-del-retiro-9.jpg'),
  10: encoded('estanque-grande-del-retiro-10.jpg'),
  11: encoded('estanque-grande-del-retiro-11.jpg'),
  12: encoded('estanque-grande-del-retiro-12.jpg'),
  13: encoded('estanque-grande-del-retiro-13.jpg'),
  14: encoded('estanque-grande-del-retiro-14.jpg'),
  15: encoded('estanque-grande-del-retiro-15.jpg'),
  17: encoded('estanque-grande-del-retiro-17.jpg'),
} as const;

export const GALLERY_HERO = GALLERY_IMAGES[1];

export const getGalleryImageUrl = (baseUrl: string, index: keyof typeof GALLERY_IMAGES) =>
  `${baseUrl}${GALLERY_IMAGES[index]}`;

export const HERO_IMAGE_ABSOLUTE = (baseUrl: string) => getGalleryImageUrl(baseUrl, 1);
