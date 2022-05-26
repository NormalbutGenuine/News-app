import keys from "./credentials.json"
import {google} from "googleapis"
import * as readline from "readline"
import * as fs from "fs"

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']; // read & write permission
const TOKEN_PATH : string = 'accessToken.json'

export async function create() {
    const { client_secret, client_id, redirect_uris } = keys.installed
    const OAuth_Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0])

    // access token이 없다면 새로 생성
    if (!fs.existsSync(TOKEN_PATH)) { 
    const token = await getNewToken(OAuth_Client)
    OAuth_Client.setCredentials(token)

    fs.writeFileSync(TOKEN_PATH, JSON.stringify(token))
    console.log('Token stored to', TOKEN_PATH)

    return OAuth_Client
    }
     // access token이 있다면 바로 사용
     const token = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
     OAuth_Client.setCredentials(token);
     return OAuth_Client
}

export async function getNewToken(oAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({ // OAuth 인증 진행을 위한 URL 생성
      access_type: 'offline',
      scope: SCOPES,
    });

    console.log('다음 URL을 브라우저에서 열어 인증을 진행하세요:', authUrl);
    // 터미널에서 키보드 입력 대기
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const code = await new Promise((resolve) => {
      rl.question(
        '인증이 완료되어 발급된 코드를 여기에 붙여넣으세요: ',
        (code) => {
          resolve(code);
        },
      );
    });

    rl.close();
    // 인증 코드를 이용하여 액세스 토큰 발급
    const resp = await oAuth2Client.getToken(code);
    return resp.tokens;
}