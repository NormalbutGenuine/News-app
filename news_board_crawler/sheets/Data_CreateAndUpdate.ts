import {google} from "googleapis"
import {create} from "./accessSheetsAPI"
import {configOBJ} from "../types/sheetsAPI.config.types"

async function GetSheetsInstance() {
    const client = await create()
    const sheets = google.sheets( { version : "v4", auth : client } )
    return sheets
}

export async function UpdateDataToSheets(memberArray : Array<string[]>) {
    const sheets = await GetSheetsInstance()
    const res = await sheets.spreadsheets.values.update(configOBJ(memberArray)) // update는 데이터가 있는 셀만 적용된다.
    return res
}

export async function InsertDataToSheets(memberArray : Array<string[]>) {
    const sheets = await GetSheetsInstance()
    const res = await sheets.spreadsheets.values.append(configOBJ(memberArray))
    return res
}