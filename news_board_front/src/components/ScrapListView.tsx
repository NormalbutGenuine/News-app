import React, {useState} from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import ScrapList from "./ScrapCard";

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

let counter : number = 0
// @ts-ignore
const TabView : React.FC = ({scrapList}) => {
    const [view, setView] = useState(false)

    function ScrapComponent() {
        return <Tab.Pane eventKey="first" style={{ display: 'grid', gridTemplateRows: "1fr ", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}>
        {/* @ts-ignore */}
        {scrapList.map((item, idx) => {
            // @ts-ignore
            return <ScrapList text={item.paragraph} key={idx}/>
        })}
        </Tab.Pane>
    }

    return (
        <div>
            <h1 style={{fontWeight: "bold", textAlign: "center", marginTop: "3%"}}>MY PAGE</h1>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row style={{marginTop: "50px"}}>
                    <Col sm={3} style={{width: "17%", margin: "0px"}}>
                    <Nav variant="pills" className="flex-column" style={{cursor: "pointer", width: "70%" , textAlign: "end", padding: "0px"}}>
                        <Nav.Item>
                            <Nav.Link eventKey="first" >스크랩 목록</Nav.Link>
                        </Nav.Item>
                       
                    </Nav>
                    </Col>
                    <Col sm={9} >
                    <Tab.Content>
                        <ScrapComponent />   
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
    
}

export default TabView