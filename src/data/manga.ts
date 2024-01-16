export const categories = ['Trending', 'Popular'] as const;
export const genres = ['Boys Comic', 'Youth Comic', 'Girls Comic'] as const;

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
		genre: 'Boys Comic',
		rating: 4.9,
		volume: 27,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/blue-lock.jpeg`,
  },
  {
    id: 2,
	  title: 'Jujutsu Kaisen',
		author: 'Gege Akutami',
		genre: 'Boys Comic',
		rating: 4.8,
		volume: 25,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/jujutsu-kaisen.jpeg`,
  },
  {
    id: 3,
	  title: 'One Piece',
		author: 'Eiichiro Oda',
		genre: 'Boys Comic',
		rating: 4.7,
		volume: 107,
	  category: 'Popular',
		status: false,
	  imgPath: `/images/one-piece.jpeg`,
  },
  {
    id: 4,
	  title: 'Chainsaw Man',
		author: 'Tatsuki Hujimoto',
		genre: 'Boys Comic',
		rating: 4.7,
		volume: 13,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/chainsaw-man.jpeg`,
  },
  {
    id: 5,
	  title: 'Oshi no Ko',
		author: 'Aka Akasaka',
		genre: 'Youth Comic',
		rating: 4.8,
		volume: 13,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/oshinoko.jpeg`,
  },
  {
    id: 6,
	  title: 'Slam Dunk',
		author: 'Takehiko Inoue',
		genre: 'Boys Comic',
		rating: 4.7,
		volume: 31,
	  category: 'Trending',
		status: true,
	  imgPath: `/images/slam-dunk.jpeg`,
  },
  {
    id: 7,
	  title: 'Spy x Family',
		author: 'Tatsuya Endo',
		genre: 'Boys Comic',
		rating: 4.7,
		volume: 13,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/spy-family.jpeg`,
  },
  {
    id: 8,
	  title: 'Tokyo Revengers',
		author: 'Ken Wakui',
		genre: 'Boys Comic',
		rating: 4.6,
		volume: 31,
	  category: 'Trending',
		status: true,
	  imgPath: `/images/tokyo-revengers.jpeg`,
  },
  {
    id: 9,
	  title: 'My Hero Academia',
		author: 'Horikoshi Kouhei',
		genre: 'Boys Comic',
		rating: 4.5,
		volume: 39,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/my-hero-academia.jpeg`,
  },
  {
    id: 10,
	  title: 'Kingdom',
		author: 'Yasuhisa Hara',
		genre: 'Youth Comic',
		rating: 4.6,
		volume: 70,
	  category: 'Popular',
		status: false,
	  imgPath: `/images/kingdom.jpeg`,
  },

	{
    id: 11,
	  title: 'Demon Slayer',
		author: 'Koyoharu Gotouge',
		genre: 'Boys Comic',
		rating: 4.8,
		volume: 23,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/demon-slayer.jpeg`,
  },
	{
    id: 12,
	  title: 'Detective Conan',
		author: 'Gosyo Aoyama',
		genre: 'Boys Comic',
		rating: 4.6,
		volume: 104,
	  category: 'Popular',
		status: false,
	  imgPath: `/images/detective-conan.jpeg`,
  },
	{
    id: 13,
	  title: 'Haikyuu',
		author: 'Haruichi Furudate',
		genre: 'Boys Comic',
		rating: 4.5,
		volume: 45,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/haikyuu.jpeg`,
  },
	{
    id: 14,
	  title: "Natsume's Book of Friends",
		author: 'Yuki Midorikawa',
		genre: 'Girls Comic',
		rating: 4.3,
		volume: 30,
	  category: 'Popular',
		status: false,
	  imgPath: `/images/natsume-book.jpeg`,
  },
	{
    id: 15,
	  title: 'Chihayahuru',
		author: 'Yuki Suetsugu',
		genre: 'Girls Comic',
		rating: 4.3,
		volume: 50,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/chihayahuru.jpeg`,
  },
	{
    id: 16,
	  title: 'Yowamushi Pedal',
		author: 'Wataru Watanabe',
		genre: 'Boys Comic',
		rating: 4.2,
		volume: 87,
	  category: 'Popular',
		status: false,
	  imgPath: `/images/yowamushi-pedal.jpeg`,
  },
	{
    id: 17,
	  title: 'Attack on Titan',
		author: 'Hajime Isayama',
		genre: 'Boys Comic',
		rating: 4.6,
		volume: 34,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/attack-on-titan.jpeg`,
  },
	{
    id: 18,
	  title: 'Golden Kamuy',
		author: 'Satoru Noda',
		genre: 'Youth Comic',
		rating: 4.4,
		volume: 31,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/golden-kamuy.jpeg`,
  },
	{
    id: 19,
	  title: 'Kaiju No. 8',
		author: 'Naoya Matsumoto',
		genre: 'Boys Comic',
		rating: 4.5,
		volume: 11,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/kaiju-8.jpeg`,
  },
	{
    id: 20,
	  title: 'One Punch Man',
		author: 'One, Yusuke Murata',
		genre: 'Boys Comic',
		rating: 4.6,
		volume: 29,
	  category: 'Popular',
		status: false,
	  imgPath: `/images/one-punch-man.jpeg`,
  },

	{
    id: 21,
	  title: 'Fullmetal Alchemist',
		author: 'Hiromu Arakawa',
		genre: 'Boys Comic',
		rating: 4.4,
		volume: 27,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/fullmetal-alchemist.jpeg`,
  },
	{
    id: 22,
	  title: "Frieren: Beyond Journey's End",
		author: 'Kanehito Yamada',
		genre: 'Boys Comic',
		rating: 4.6,
		volume: 12,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/frieren.jpeg`,
  },
	{
    id: 23,
	  title: 'Ranking of Kings',
		author: 'Sosuke Toka',
		genre: 'Boys Comic',
		rating: 4.4,
		volume: 18,
	  category: 'Popular',
		status: false,
	  imgPath: `/images/ranking-of-kings.jpeg`,
  },
	{
    id: 24,
	  title: 'Hunter × Hunter',
		author: 'Yoshihiro Togashi',
		genre: 'Boys Comic',
		rating: 4.6,
		volume: 37,
	  category: 'Popular',
		status: false,
	  imgPath: `/images/hunter-hunter.jpeg`,
  },
	{
    id: 25,
	  title: 'Dr. Stone',
		author: 'Riichiro Inagaki',
		genre: 'Boys Comic',
		rating: 4.5,
		volume: 26,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/dr-stone.jpeg`,
  },
	{
    id: 26,
	  title: 'Kaguya-sama: Love is War',
		author: 'Aka Akasaka',
		genre: 'Youth Comic',
		rating: 4.4,
		volume: 28,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/kaguyasama.jpeg`,
  },
	{
    id: 27,
	  title: 'Wotakoi: Love Is Hard for Otaku',
		author: 'Hujita',
		genre: 'Girls Comic',
		rating: 4.3,
		volume: 11,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/love-is-hard.jpeg`,
  },
	{
    id: 28,
	  title: 'That Time I Got Reincarnated as a Slime',
		author: 'Fuse',
		genre: 'Boys Comic',
		rating: 4.3,
		volume: 16,
	  category: 'Popular',
		status: true,
	  imgPath: `/images/reincarnate-as-a-slime.jpeg`,
  },
	{
    id: 29,
	  title: 'Nibun no Ichi Fuufu',
		author: 'Akiyo Kurosawa',
		genre: 'Girls Comic',
		rating: 4.6,
		volume: 32,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/nibun-no-ichi-fuufu.jpeg`,
  },
	{
    id: 30,
	  title: 'The Apothecary Diaries',
		author: 'Natsu Hyuga',
		genre: 'Girls Comic',
		rating: 4.5,
		volume: 12,
	  category: 'Trending',
		status: false,
	  imgPath: `/images/the-apothecary-diaries.jpeg`,
  }
] 
 
