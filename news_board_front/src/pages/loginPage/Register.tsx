import React from "react"
import LayoutHeader from "../../layouts/Header"
import RegistrationComponent from "../../components/RegisterForm"

const Register : React.FC = () => {
    return(
        <div>
            <LayoutHeader />
            <RegistrationComponent />
        </div>
    )
}

export default Register