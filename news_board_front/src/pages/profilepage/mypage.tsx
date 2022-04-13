import React, {useState} from "react"
import Head from "../../layouts/Header"
import TabView from "../../components/ScrapListView"

const MyPage : React.FC = () => {

    return (
        <div>
            <Head />
            <TabView />
        </div>
    )
}

export default MyPage
