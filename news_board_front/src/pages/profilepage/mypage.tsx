import React, {useState} from "react"
import Head from "../../layouts/Header"
import TabView from "../../components/ScrapListView"
// @ts-ignore
const MyPage : React.FC = ({cookie}) => {

    if (cookie) {
        return (
            <div>
                <Head />
                <TabView />
            </div>
        )
    } else{
        alert("로그인을 해야 접근이 가능합니다.")
        document.location.href = "/"
    }
}

export default MyPage
