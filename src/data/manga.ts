export const categories = ['trending', 'popular'] as const;
export const genres = ['boys comic', 'youth comic', 'girls comic'] as const;

export type Category = (typeof categories)[number] & string;
export type Genres = (typeof genres)[number] & string;

export type Manga = {
  id: number;
  title: string;
	author: string;
	genre: Genres;
	rating: number;
	volume: number;
  category: Category;
	status: boolean;
  imgPath: `/${string}.jpeg`,
}

export const mangas: Manga[] = [
  {
    id: 1,
	  title: 'Blue Lock',
		author: 'Muneyuki Kaneshiro',
		genre: 'boys comic',
		rating: 4.9,
		volume: 27,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
  {
    id: 2,
	  title: 'Jujutsu Kaisen',
		author: 'Gege Akutami',
		genre: 'boys comic',
		rating: 4.8,
		volume: 25,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
  {
    id: 3,
	  title: 'One Piece',
		author: 'Eiichiro Oda',
		genre: 'boys comic',
		rating: 4.7,
		volume: 107,
	  category: 'popular',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
  {
    id: 4,
	  title: 'Chainsaw Man',
		author: 'Tatsuki Hujimoto',
		genre: 'boys comic',
		rating: 4.7,
		volume: 13,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
  {
    id: 5,
	  title: 'Oshi no Ko',
		author: 'Aka Akasaka',
		genre: 'youth comic',
		rating: 4.8,
		volume: 13,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
  {
    id: 6,
	  title: 'Slam Dunk',
		author: 'Takehiko Inoue',
		genre: 'boys comic',
		rating: 4.7,
		volume: 31,
	  category: 'trending',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
  {
    id: 7,
	  title: 'Spy x Family',
		author: 'Tatsuya Endo',
		genre: 'boys comic',
		rating: 4.7,
		volume: 13,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
  {
    id: 8,
	  title: 'Tokyo Revengers',
		author: 'Ken Wakui',
		genre: 'boys comic',
		rating: 4.6,
		volume: 31,
	  category: 'trending',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
  {
    id: 9,
	  title: 'My Hero Academia',
		author: 'Horikoshi Kouhei',
		genre: 'boys comic',
		rating: 4.5,
		volume: 39,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
  {
    id: 10,
	  title: 'Kingdom',
		author: 'Yasuhisa Hara',
		genre: 'youth comic',
		rating: 4.6,
		volume: 70,
	  category: 'popular',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },

	{
    id: 11,
	  title: 'Demon Slayer',
		author: 'Koyoharu Gotouge',
		genre: 'boys comic',
		rating: 4.8,
		volume: 23,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 12,
	  title: 'Detective Conan',
		author: 'Gosyo Aoyama',
		genre: 'boys comic',
		rating: 4.6,
		volume: 104,
	  category: 'popular',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 13,
	  title: 'Haikyuu',
		author: 'Haruichi Furudate',
		genre: 'boys comic',
		rating: 4.5,
		volume: 45,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 14,
	  title: "Natsume's Book of Friends",
		author: 'Yuki Midorikawa',
		genre: 'girls comic',
		rating: 4.3,
		volume: 30,
	  category: 'popular',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 15,
	  title: 'Chihayahuru',
		author: 'Yuki Suetsugu',
		genre: 'girls comic',
		rating: 4.3,
		volume: 50,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 16,
	  title: 'Yowamushi Pedal',
		author: 'Wataru Watanabe',
		genre: 'boys comic',
		rating: 4.2,
		volume: 87,
	  category: 'popular',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 17,
	  title: 'Attack on Titan',
		author: 'Hajime Isayama',
		genre: 'boys comic',
		rating: 4.6,
		volume: 34,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 18,
	  title: 'Golden Kamuy',
		author: 'Satoru Noda',
		genre: 'youth comic',
		rating: 4.4,
		volume: 31,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 19,
	  title: 'Kaiju No. 8',
		author: 'Naoya Matsumoto',
		genre: 'boys comic',
		rating: 4.5,
		volume: 11,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 20,
	  title: 'One Punch Man',
		author: 'One, Yusuke Murata',
		genre: 'boys comic',
		rating: 4.6,
		volume: 29,
	  category: 'popular',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },

	{
    id: 21,
	  title: 'Fullmetal Alchemist',
		author: 'Hiromu Arakawa',
		genre: 'boys comic',
		rating: 4.4,
		volume: 27,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 22,
	  title: "Frieren: Beyond Journey's End",
		author: 'Kanehito Yamada',
		genre: 'boys comic',
		rating: 4.6,
		volume: 12,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 23,
	  title: 'Ranking of Kings',
		author: 'Sosuke Toka',
		genre: 'boys comic',
		rating: 4.4,
		volume: 18,
	  category: 'popular',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 24,
	  title: 'Hunter × Hunter',
		author: 'Yoshihiro Togashi',
		genre: 'boys comic',
		rating: 4.6,
		volume: 37,
	  category: 'popular',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 25,
	  title: 'Dr. Stone',
		author: 'Riichiro Inagaki',
		genre: 'boys comic',
		rating: 4.5,
		volume: 26,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 26,
	  title: 'Kaguya-sama: Love is War',
		author: 'Aka Akasaka',
		genre: 'youth comic',
		rating: 4.4,
		volume: 28,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 27,
	  title: 'Wotakoi: Love Is Hard for Otaku',
		author: 'Hujita',
		genre: 'girls comic',
		rating: 4.3,
		volume: 11,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 28,
	  title: 'That Time I Got Reincarnated as a Slime',
		author: 'Fuse',
		genre: 'boys comic',
		rating: 4.3,
		volume: 16,
	  category: 'popular',
		status: true,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 29,
	  title: 'Nibun no Ichi Fuufu',
		author: 'Akiyo Kurosawa',
		genre: 'girls comic',
		rating: 4.6,
		volume: 32,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  },
	{
    id: 30,
	  title: 'The Apothecary Diaries',
		author: 'Natsu Hyuga',
		genre: 'girls comic',
		rating: 4.5,
		volume: 12,
	  category: 'trending',
		status: false,
	  imgPath: `/blue-lock.jpeg`,
  }
] 
 