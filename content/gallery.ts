/* Webczar Solutions team & leadership showcase.
 * Only the official team photographs provided by Webczar Solutions.
 */

export type Frame = {
  id: string;
  src: string;
  ar: number; /* true width / height */
  scale: number; /* relative height on the rail */
  y: number; /* vertical offset in px, for rhythm */
  hero?: boolean; /* the centrepieces */
};

export const FRAMES: Frame[] = [
  { id: "g01", src: "/images/gallery/g01.jpg", ar: 1.0, scale: 1.0, y: 0 },
  { id: "g02", src: "/images/gallery/g02.jpg", ar: 1.0, scale: 1.0, y: 0, hero: true },
  { id: "g03", src: "/images/gallery/g03.jpg", ar: 0.988, scale: 1.0, y: 0 },
  { id: "g04", src: "/images/gallery/g04.jpg", ar: 1.0, scale: 1.0, y: 0 },
  { id: "g05", src: "/images/gallery/g05.jpg", ar: 1.0, scale: 1.0, y: 0 },
  { id: "g06", src: "/images/gallery/g06.jpg", ar: 0.928, scale: 1.0, y: 0, hero: true },
];
