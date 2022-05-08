import React, {useState, useEffect} from "react"
import Head from "../../layouts/Header"
import TabView from "../../components/ScrapListView"
import axios from "axios"
import cookies from "react-cookies"

// @ts-ignore
const MyPage : React.FC = ({cookie}) => {
    useEffect(() => {
        GetScraps()
    }, [])
    const [scrapArr, setScrapArr] = useState([])
    let componentID = ""
    async function GetScraps() {
        const response = await axios.post("http://localhost:3030/scraps/list", {
            token: cookies.load("access token")
        })
        // @ts-ignore
        setScrapArr((scrapArr) => [...response.data])
        componentID = document.getElementsByClassName("page-link")[0].id
        console.log(document.getElementById(componentID)?.innerText)
        console.log(componentID)
        console.log(response.data)
    }
        
    if (cookie) {        
        return (
            <div>
                <Head />                
                {/* @ts-ignore */}
                <TabView scrapList = {scrapArr}/>
            </div>
        )
    } else{
        alert("로그인을 해야 접근이 가능합니다.")
        document.location.href = "/"
    }
}

export default MyPage
