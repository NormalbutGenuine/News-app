import React from "react";
import { Nav } from "react-bootstrap";
import cookies from "react-cookies";

function Logout() {
    let cookie = cookies.load("access token")        
    if (String(cookie).length > 10) cookies.remove("access token")
}

const ProfileAndLogin : React.FC = () => {
    return (
        <Nav style={{float: "right"}} >
            <Nav.Item>
                <Nav.Link href="mypage" id="Mypage" eventKey="mypage" style={{fontWeight: "bolder"}}>마이페이지</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login" eventKey="link" style={{fontWeight: "bolder"}} onClick={Logout}>
                    {cookies.load("access token") ? "로그아웃" : "로그인"}
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default ProfileAndLogin