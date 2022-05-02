import React, {useState} from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import axios from "axios";

let txt : string = ""

async function SendUsersData() {
    if (txt === "") {
        alert("이메일 중복확인을 해야합니다.")
    } else {
        await axios.post("http://localhost:3030/users", {
        //@ts-ignore
        email: document.getElementById("email_field").value,
        //@ts-ignore
        password: document.getElementById("pwd_field").value,
        //@ts-ignore
        name : document.getElementById("name_field").value
    }).then((res) => {
        console.log(res)
        alert("가입 되었습니다.")
        document.location.href = "/"
    }).catch((err) => {
        console.log("ERROR IS: " + err)
    })
    }
}

const RegistrationComponent : React.FC = () => {
    const [change, setChange] = useState(false)
    async function CheckEmail() {
        try {
            const res = await axios.post("http://localhost:3030/users/exists", {
                // @ts-ignore
                email: document.getElementById("email_field").value
            })
            txt = "사용 가능한 email입니다."
            setChange((change) => !change)
        } catch(error) {
            alert(error)
        }   
    } 
    return (
        <div>
            <h2 style={{textAlign: "center"}}>회원가입양식</h2>
            <p style={{position: "absolute", left: "880px", top: "225px", color: "green"} }>{txt}</p>
            <div style={{display: "flex", flexDirection: 'column'}}>
                <InputGroup className="mb-3" style={{width: "32%", margin: "0 auto", display: "flex", alignItems: "center", marginTop: "5.5%"}}>
                    <Form.Control id="email_field" type="email" placeholder="Enter email" />
                    <Button variant="outline-secondary" id="button-addon2" onClick={() => CheckEmail()}>
                        중복확인
                    </Button>
                </InputGroup>
                <div style = {{width: "32%", margin: "0 auto", display: "flex", alignItems: "center", flexDirection: 'column', marginTop: "2%"}}>
                    <Form.Label htmlFor="inputPassword5" style={{marginRight: "415px"}}>Password</Form.Label>
                    <Form.Control
                    id="pwd_field"
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
                    id="name_field"
                    type="text"
                    placeholder="Input Name"
                    aria-label="Input Name"
                    />
                </div>
                <Button variant="success" style={{width: "30%", marginLeft: "35%", marginTop: "2%"}} onClick={SendUsersData}>가입</Button>
            </div>
        </div>
    )
}

export default RegistrationComponent