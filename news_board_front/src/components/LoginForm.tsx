import React from "react";
import { Form, Button } from "react-bootstrap";
import { goRegisterPage } from "../pages/loginPage/Login";
import axios from "axios";
import cookies from "react-cookies";

async function Request_Login() {
    try {
        let res = await axios.post("http://localhost:3030/users/login", {
        // @ts-ignore
        email: document.getElementById("email_field").value,
        // @ts-ignore
        password: document.getElementById("password_field").value
        })
        console.log(res.data)
        cookies.save("access token", res.data.token, {
            path: "/"
        })
        document.location.href = "/"
    } catch(err){
        alert(err)
    }
}

const LoginComponent : React.FC = ()  => {
    return (
        <Form style={{margin: "10%", marginTop: "10%", width: "30%"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control id="email_field" type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control id="password_field" type="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="info" type="button" style={{marginTop: "30px", color: "white"}} onClick={Request_Login}>
            로그인
        </Button>
        <Button variant="primary" type="button" onClick={goRegisterPage} style={{color: "white", marginLeft: "20px", marginTop: "30px"}}>
            회원가입
        </Button>
        </Form>
    )
}

export default LoginComponent