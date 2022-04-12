import React, {useState} from "react"
import Head from "../Header"
import {Row, Col, Tab, Nav, Card, Button} from "react-bootstrap"

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const ScrapList : React.FC = () => {
    return (
        <Card style={{ width: '90%', margin: "10px" }}>
        <Card.Body>
            <Card.Title>Scrap Title</Card.Title>
            <Card.Text>
                스크랩 내용 예시 입니다.
            </Card.Text>
            <Button variant="primary">보기</Button>
        </Card.Body>
        </Card>
    )
}

let counter : number = 0

const MyPage : React.FC = () => {

    const [view, setView] = useState(false)

    function OneCounter() {
        counter = 1
        console.log(counter)
        setView((view) => !view)
        return counter
    }
    
    function ZeroCounter() {
        counter = 0
        console.log(counter)
        setView((view) => !view)
        return counter
    }

    function ScrapComponent() {
        return <Tab.Pane eventKey="first" style={{ display: 'grid', gridTemplateRows: "1fr ", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}>
        {array.map((number, idx) => {
            return <ScrapList />
        })}
        </Tab.Pane>
        
    }

    return (
        <div>
            <Head />
            <h1 style={{fontWeight: "bold", textAlign: "center", marginTop: "3%"}}>MY PAGE</h1>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row style={{marginTop: "50px"}}>
                    <Col sm={3} style={{width: "17%", margin: "0px"}}>
                    <Nav variant="pills" className="flex-column" style={{cursor: "pointer", width: "70%" , textAlign: "end", padding: "0px"}}>
                        <Nav.Item>
                            <Nav.Link eventKey="first" onClick={OneCounter}>스크랩 목록</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" onClick={ZeroCounter}>게시글 목록</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9} >
                    <Tab.Content>
                        {counter ===  1 ? <ScrapComponent /> : <Tab.Pane eventKey="second">게시글 목록</Tab.Pane>}    
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default MyPage
