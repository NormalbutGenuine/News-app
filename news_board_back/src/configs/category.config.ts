export enum ENews_Category {
  ECONOMY = 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101',
  POLITICS = 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100',
  SOCIETY = 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=102',
  SCIENCE = 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105',
  SPORTS = 'https://sports.news.naver.com/index',
}

export const NewsCategory = {
  [ENews_Category.ECONOMY]: 'economy',
  [ENews_Category.SCIENCE]: 'science',
  [ENews_Category.SOCIETY]: 'society',
  [ENews_Category.POLITICS]: 'politics',
  [ENews_Category.SPORTS]: 'sports',
};

export type categoryParams = 'economy' | 'science' | 'society' | 'politics' | 'sports';

export const CategoryURL = {
  ["economy"]: 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101',
  ["politics"]: 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100',
  ["society"]: 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=102',
  ["science"]: 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105',
  ["sports"]: 'https://sports.news.naver.com/index',
};

export const ArticleCategory = {
  ["http://www.biotimes.co.kr/"]: "BIO",
  ["http://www.blockchaintoday.co.kr/"] : "BLOCKCHAIN",
  ["https://nano-magazine.com"] : "NANO",
  ["http://www.aitimes.kr"] : "AI",
  ["https://metaverseinsider.tech/2022/02/24/the-worlds-first-metaverse-magazine-could-be-another-piece-of-the-metaverse-arms-race/"] : "METAVERSE"
}

export const CategoryURL2 = {
  ["BIO"]: "http://www.biotimes.co.kr/",
  ["BLOCKCHAIN"]: "http://www.blockchaintoday.co.kr/",
  ["NANO"]: 'https://nano-magazine.com',
  ["AI"]: "http://www.aitimes.kr",
  ["METAVERSE"]: 'https://metaverseinsider.tech/2022/02/24/the-worlds-first-metaverse-magazine-could-be-another-piece-of-the-metaverse-arms-race/'
}