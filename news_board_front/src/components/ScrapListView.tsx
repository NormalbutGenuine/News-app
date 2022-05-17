import React, {useState} from "react";
import { Tab, Nav, Row, Pagination, Col } from "react-bootstrap";
import ScrapList from "./ScrapCard";

// @ts-ignore
const TabView : React.FC = ({scrapList}) => {
    let [active, setActive] = useState(1)

    function ScrapComponent() {
        
        console.log(scrapList)
        return (
            <Tab.Pane eventKey="first" style={{ display: 'grid', gridTemplateRows: "1fr ", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}>
            
            {scrapList.map((item : any, idx : any) => {
                // @ts-ignore
                if (active === 1 && idx < 5) return <ScrapList text={item.paragraph} title={item.title} key={idx} index={idx}/>
                // active = 5 -> idx 5~9 , active = 10 -> idx 10 ~ 14
                else if (active >= 5 && idx >= active && idx < 5 + active) {
                    // @ts-ignore
                    return <ScrapList text={item.paragraph} title={item.title} key={idx} index={idx} />
                }
            })
            }
            </Tab.Pane>
        )
    }

    // @ts-ignore
    const Pagination_Component : React.FC = () => {
        let items = []
        let page_number = 0
        for (let number = 1; number < scrapList.length; number++) {
            if (number % 5 === 0 || number === 1) {
                page_number+=1
                items.push(
                    <Pagination.Item id={`page${number}`} key={number} active={number === active} onClick={() => setActive((active) => number)}>
                        {page_number}
                    </Pagination.Item>,
                );
            }
        }
        return (
            <Pagination size="lg" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>{items}</Pagination>
        )
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
                            <Pagination_Component />
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}

export default TabView