import { UpdateDataToSheets } from "./sheets/Data_CRUD"
import { menu } from "./crawler/crawlMenu"

let index : number = 4
let num : number = 250

// 주기적으로 뉴스를 크롤링해서 구글 시트에 업데이트한다.
async function main() {
    let data : any = []
    if (index < 5) index++
    else index = 1
    data = await menu(index, data)
    console.log(index, "Line 11 in main")
    await UpdateDataToSheets(data, num)
    num = num + data.length
    if (num > 300) num = 2
    console.log(num, "Line 17 in main")
}

setInterval(() => main(), 10000) // 1시간 60000*60