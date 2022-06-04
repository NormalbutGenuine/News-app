import 'dotenv/config'

export const configOBJ = (memberArray : string[], startNum : number) => {
    console.log(memberArray.length, "Line 4")
    const req = {
        spreadsheetId : process.env.SHEETS_ID ,
        range : `A${startNum}:G${startNum + memberArray.length}`,
        valueInputOption : "USER_ENTERED",
        resource : {values : memberArray}
    }
    return req
}