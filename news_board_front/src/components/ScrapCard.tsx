import React, {useState} from "react";
import { Card, Modal, DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";
import cookies from "react-cookies";

// @ts-ignore
const ScrapList : React.FC = ({text, title}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    async function DeleteParagraph() {
        try {
            const res = await axios.delete("http://localhost:3030/scraps/delete", {
                data: {
                    email: cookies.load("access token"),
                    paragraph: document.getElementById("ScrapBody")?.innerText
                }
            })
            console.log(res)
        } catch(err) {
            console.log("ERROR IS: "+err)
        }
        document.location.href = "/mypage"
    }
    return (   
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{text}</Modal.Body>
            </Modal>
            <Card style={{ width: '200px', margin: "10px" }}>
            <Card.Body>
                <Card.Title style={{overflow: "hidden", height: "95px", wordBreak: "break-all"}}>{title}</Card.Title>
                <Card.Text id="ScrapBody" style={{overflow: "hidden", wordBreak: "break-all", height: "220px"}}>
                    {text}
                </Card.Text>
                <DropdownButton id="dropdown-item-button" title="select">
                    <Dropdown.Item as="button" onClick={handleShow}>보기</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={DeleteParagraph}>삭제</Dropdown.Item>
                </DropdownButton>
            </Card.Body>
            </Card>
        </div>
    )
}

export default ScrapList