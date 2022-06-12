import 'dotenv/config'

export const configOBJ = () => {
    const req = {
        spreadsheetId : process.env.SHEETS_ID ,
        range : `A2:G300`
    }
    return req
}