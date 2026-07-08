export type AttendanceStatus = 'attending' | 'declined';

export interface TimelineItem {
  readonly time: string;
  readonly title: string;
  readonly description: string;
}

export interface GalleryImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly height: 'tall' | 'regular' | 'wide';
}

export interface DressCodeGroup {
  readonly title: string;
  readonly note: string;
  readonly colors: readonly DressCodeColor[];
}

export interface DressCodeColor {
  readonly name: string;
  readonly hex: string;
}

export interface WishCard {
  readonly title: string;
  readonly text: string;
}

export interface RSVPFormValues {
  readonly name: string;
  readonly phone: string;
  readonly attendance: AttendanceStatus;
  readonly guests: number;
  readonly comment: string;
}

export interface ToastState {
  readonly title: string;
  readonly message: string;
  readonly tone: 'success' | 'error';
}
