import React from "react"
import LayoutHeader from "../../layouts/Header"
import LoginComponent from "../../components/LoginForm"
import SlideComponent from "../../components/SlideImage"

export function goRegisterPage(): void {
    document.location.href = "/register"
}

const Login : React.FC = () => {

    return (
        <div>
            <LayoutHeader />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <LoginComponent />
                <SlideComponent />
        </div>
      </div>
    )
}

export default Login