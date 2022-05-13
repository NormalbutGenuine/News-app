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
