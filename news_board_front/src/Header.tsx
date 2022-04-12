import React from "react"
import {Nav} from "react-bootstrap"

const Head: React.FC = () => {
    return (
        <Nav.Item style={{width: "fit-content"}}>
            <Nav.Link href="/" style={{fontSize: "17.5px"}}>Home</Nav.Link>
        </Nav.Item>
    )
}

export default Head