import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ProfileAndLogin from "../../components/TopButtons"
import Category from "../../components/TopRadioButtons"
import axios from "axios"

const TopBar : React.FC = () => {
    
    return(
        <div>
            <ProfileAndLogin />
            <Category />
        </div>
    )
}

export default TopBar