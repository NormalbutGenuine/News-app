import {google} from "googleapis"
import {create} from "./accessSheetsAPI"
import {configOBJ} from "../types/sheetsAPI.config.types"
import 'dotenv/config'

async function GetSheetsInstance() {
    const client = await create()
    const sheets = google.sheets( { version : "v4", auth : client } )
    return sheets
}

export async function UpdateDataToSheets(memberArray : string[], startNum: number) {
    const sheets = await GetSheetsInstance()
    const request = configOBJ(memberArray, startNum)
    console.log(memberArray.length, "line 15")
    const res = await sheets.spreadsheets.values.update(request) // update는 데이터가 있는 셀만 적용된다.
    return res
}

export async function InsertDataToSheets(memberArray : string[], startNum: number) {
    const sheets = await GetSheetsInstance()
    const request = configOBJ(memberArray, startNum)
    const res = await sheets.spreadsheets.values.append(request)
    return res
}

export async function ReadDataFromSheets() {
    const sheets = await GetSheetsInstance()
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEETS_ID,
        range: "A2:G242"
    })
    return res
}