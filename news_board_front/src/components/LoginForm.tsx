import React from "react";
import { Form, Button } from "react-bootstrap";
import { goRegisterPage } from "../pages/loginPage/Login";

const LoginComponent : React.FC = ()  => {
    return (
        <Form style={{margin: "10%", marginTop: "10%", width: "30%"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="info" type="button" style={{marginTop: "30px", color: "white"}}>
            로그인
        </Button>
        <Button variant="primary" type="button" onClick={goRegisterPage} style={{color: "white", marginLeft: "20px", marginTop: "30px"}}>
            회원가입
        </Button>
        </Form>
    )
}

export default LoginComponent