import { UpdateDataToSheets, InsertDataToSheets } from "./sheets/Data_CreateAndUpdate"
import { menu } from "./crawler/crawlMenu"

let index : number = 1

// 주기적으로 뉴스를 크롤링해서 구글 시트에 업데이트한다.
async function main() {
    let data : any = []
    data = await menu(index, data)
    await UpdateDataToSheets(data)
    if (index <= 5) index++
    else index = 1
    console.log(index)
}

setInterval(() => main(), 60000*60) // 1시간