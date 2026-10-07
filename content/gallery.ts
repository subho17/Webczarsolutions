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
  objectPosition?: string;
};

export const FRAMES: Frame[] = [
  {
    id: "g-office-desks",
    src: "/images/gallery/office-desks.jpg",
    ar: 0.75,
    scale: 1.0,
    y: 0,
    hero: true,
    objectPosition: "center center",
  },
  {
    id: "g-office-cabin",
    src: "/images/gallery/office-cabin.jpg",
    ar: 1.333,
    scale: 1.0,
    y: 0,
    hero: true,
    objectPosition: "center center",
  },
  {
    id: "g-office-breakout",
    src: "/images/gallery/office-breakout.jpg",
    ar: 1.038,
    scale: 1.0,
    y: 0,
    objectPosition: "center center",
  },
  {
    id: "g-office-workstations",
    src: "/images/gallery/office-workstations.jpg",
    ar: 1.172,
    scale: 1.0,
    y: 0,
    hero: true,
    objectPosition: "center center",
  },
  {
    id: "g-office-lounge",
    src: "/images/gallery/office-lounge.jpg",
    ar: 0.75,
    scale: 1.0,
    y: 0,
    objectPosition: "center center",
  },
  {
    id: "g-office-meeting",
    src: "/images/gallery/office-meeting.jpg",
    ar: 0.829,
    scale: 1.0,
    y: 0,
    objectPosition: "center center",
  },
];

