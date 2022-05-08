import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ProfileAndLogin from "../../components/TopButtons"
import Category from "../../components/TopRadioButtons"

const TopBar : React.FC = () => {
    
    return(
        <div>
            <ProfileAndLogin />
            <Category />
        </div>
    )
}

export default TopBar