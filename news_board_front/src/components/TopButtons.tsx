import React from "react";
import { Nav } from "react-bootstrap";

const ProfileAndLogin : React.FC = () => {
    return (
        <Nav style={{float: "right"}} >
            <Nav.Item>
                <Nav.Link href="mypage" id="Mypage" eventKey="mypage" style={{fontWeight: "bolder"}}>마이페이지</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login" eventKey="link" style={{fontWeight: "bolder"}}>
                    로그인
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default ProfileAndLogin