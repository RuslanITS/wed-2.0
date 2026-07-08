import type { DressCodeGroup, GalleryImage, TimelineItem, WishCard } from '@/types/wedding';

export const weddingDate = new Date('2026-08-09T17:00:00+06:00');

export const navItems = [
  { label: 'История', href: '#story' },
  { label: 'Программа', href: '#timeline' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Локация', href: '#location' },
  { label: 'RSVP', href: '#rsvp' },
] as const;

export const heroVideoUrl =
  'https://videos.pexels.com/video-files/853909/853909-hd_1920_1080_25fps.mp4';

export const heroPosterUrl =
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=85';
import story1 from 'src/assets/images/wed-1.jpg';
import story2 from 'src/assets/images/wed-2.jpg';
export const storyImages = [
  story1,
  story2,
] as const;

export const timelineItems: readonly TimelineItem[] = [
  {
    time: '17:00',
    title: 'Сбор гостей',
    description: 'Встречаемся, обнимаемся и настраиваемся на красивый вечер.',
  },
  {
    time: '17:30',
    title: 'Церемония',
    description: 'Главные слова, которые мы произнесем в кругу самых близких.',
  },
  {
    time: '18:30',
    title: 'Банкет',
    description: 'Ужин, тосты, живая атмосфера и теплые разговоры.',
  },
  {
    time: '20:00',
    title: 'Танцы',
    description: 'Музыка, свет и вечер, который хочется запомнить.',
  },
] as const;

export const galleryImages: readonly GalleryImage[] = [
  {
    id: 'rings',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=82',
    alt: 'Обручальные кольца на светлой ткани',
    height: 'regular',
  },
  {
    id: 'table',
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=82',
    alt: 'Элегантная сервировка свадебного ужина',
    height: 'tall',
  },
  {
    id: 'bouquet',
    src: 'https://images.unsplash.com/photo-1521543269800-27ec99e4f4ff?auto=format&fit=crop&w=1000&q=82',
    alt: 'Нежный свадебный букет',
    height: 'regular',
  },
  {
    id: 'couple',
    src: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1200&q=82',
    alt: 'Пара на свадебной прогулке',
    height: 'wide',
  },
  {
    id: 'details',
    src: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=1000&q=82',
    alt: 'Свадебные детали в золотых оттенках',
    height: 'tall',
  },
  {
    id: 'dinner',
    src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1000&q=82',
    alt: 'Праздничный зал с теплым светом',
    height: 'regular',
  },
] as const;

export const dressCodeGroups: readonly DressCodeGroup[] = [
  {
    title: 'Женщины',
    note: 'Вечерние платья, шелк, сатин, мягкие линии и утонченные украшения.',
    colors: [
      { name: 'Champagne', hex: '#E8D9C5' },
      { name: 'Rose', hex: '#D9B7AA' },
      { name: 'Sage', hex: '#A9B8A4' },
      { name: 'Gold', hex: '#C8A96A' },
    ],
  },
  {
    title: 'Мужчины',
    note: 'Костюм, рубашка, спокойные природные оттенки и аккуратные детали.',
    colors: [
      { name: 'Ivory', hex: '#F2EBDD' },
      { name: 'Taupe', hex: '#A38F7A' },
      { name: 'Graphite', hex: '#424242' },
      { name: 'Olive', hex: '#7F8A6A' },
    ],
  },
] as const;

export const wishCards: readonly WishCard[] = [
  {
    title: 'Не дарить цветы',
    text: 'Вместо букетов будем благодарны за вклад в нашу семейную мечту.',
  },
  {
    title: 'Подарок в конверте',
    text: 'Если хотите порадовать нас подарком, удобнее всего будет формат конверта.',
  },
  {
    title: 'Без громких сюрпризов',
    text: 'Пожалуйста, согласуйте творческие номера заранее, чтобы вечер прошел идеально.',
  },
  {
    title: 'Будьте с нами',
    text: 'Самое важное для нас - ваше присутствие, улыбки и теплые слова.',
  },
] as const;

export const googleMapsRouteUrl =
  'https://www.google.com/maps/dir/?api=1&destination=%D0%A0%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD%20%D0%9C%D0%B8%D0%BA%20%D0%A2%D0%BE%D0%BA%D0%BC%D0%BE%D0%BA';
