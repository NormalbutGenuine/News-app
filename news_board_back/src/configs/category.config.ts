export const News_Category = {
    ECONOMY: "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101",
    POLITICS: "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100",
    SOCIETY: "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=102",
    SCIENCE: "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105",
    SPORTS: "https://sports.news.naver.com/index"
}

export enum ENews_Category {
    ECONOMY = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101",
    POLITICS = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100",
    SOCIETY = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=102",
    SCIENCE = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105",
    SPORTS = "https://sports.news.naver.com/index"
}

export const NewsCategory = {
    [ENews_Category.ECONOMY]: "politics",
    [ENews_Category.SCIENCE]: "economy",
    [ENews_Category.SOCIETY]: "science",
    [ENews_Category.POLITICS]: "society",
}