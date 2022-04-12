import React from "react"
import Head from "../Header"
import {InputGroup, FormControl, Button, Form} from "react-bootstrap"

const Register : React.FC = () => {
    return(
        <div>
        <Head />
            <h2 style={{textAlign: "center"}}>회원가입양식</h2>
            <div style={{display: "flex", flexDirection: 'column'}}>
                <InputGroup className="mb-3" style={{width: "32%", margin: "0 auto", display: "flex", alignItems: "center", marginTop: "5.5%"}}>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Button variant="outline-secondary" id="button-addon2">
                        중복확인
                    </Button>
                </InputGroup>
                
                <div style = {{width: "32%", margin: "0 auto", display: "flex", alignItems: "center", flexDirection: 'column', marginTop: "2%"}}>
                    <Form.Label htmlFor="inputPassword5" style={{marginRight: "415px"}}>Password</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Input password"
                    aria-label="Input password"
                    aria-describedby="basic-addon2"
                    />
                    <Form.Label htmlFor="inputPassword6" style={{marginRight: "180px", width: "300px", marginTop: "20px"}}>Password confirm</Form.Label>
                    <Form.Control
                    type="password"
                    placeholder="Input password"
                    aria-label="Input password"
                    aria-describedby="basic-addon3"
                    />
                    <Form.Label htmlFor="inputPassword7" style={{marginRight: "180px", width: "300px", marginTop: "20px"}}>이름</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder="Input Name"
                    aria-label="Input Name"
                    />
                </div>
                <Button variant="success" style={{width: "30%", marginLeft: "35%", marginTop: "2%"}}>가입</Button>
            </div>
        </div>
    )
}

export default Register