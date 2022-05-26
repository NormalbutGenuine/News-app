import * as dotenv from "dotenv"
dotenv.config({path: "../.env"})

export const configOBJ = (memberArray) => {
    const req = {
        spreadsheetId : process.env.SHEETS_ID,
        range : "B3:C4",
        valueInputOption : "USER_ENTERED",
        resource : {values : memberArray}
    }
    return req
};