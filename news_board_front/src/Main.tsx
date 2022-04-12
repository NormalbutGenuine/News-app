import React, { useState, useEffect, useCallback, useRef } from "react"
import {Card, Button, Modal, Carousel} from "react-bootstrap";
import { useInView } from "react-intersection-observer"
import TopBar from "./Top_Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"

interface Iinfo {
    first: string;
    second: string;
    third: string;
}

const Main : React.FC = () => {
    const src : string = `https://source.unsplash.com/random/1000x650`
    let content_text : string = "Some quick example text to build on the card title and make up the bulk ofthe card's content. I'm free to be whatever I, Whatever I choose and I'll sing the blues if I want."
    const [show, setShow] = useState(false)

    // state
    const [infoArray, setInfoArray] = useState<Iinfo[]>([]);

    // ref
    const observerRef = useRef<IntersectionObserver>();
    const boxRef = useRef<HTMLDivElement>(null);

    // useEffect
    useEffect(() => {
        getInfo();
    }, [])

    useEffect(() => {
        observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
        boxRef.current && observerRef.current.observe(boxRef.current);
    }, [infoArray])

    // function
    const getInfo = async () => {
        const res = await axios.get('http://localhost:3050/go'); // 서버에서 데이터 가져오기
        setInfoArray((curInfoArray) => [...curInfoArray, ...res.data]); // state에 추가

        console.log('info data add...');
    }

    // IntersectionObserver 설정
    const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) { // 관찰하고 있는 entry가 화면에 보여지는 경우
                io.unobserve(entry.target); // entry 관찰 해제
                getInfo(); // 데이터 가져오기
            }
        })
    }

    if (content_text.length > 139) content_text = content_text.substring(0, 139) + "..."

    function CardList(){
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Card style={{ width: '21rem', height: "27.5rem", left: "175px", top: "95px" , padding: "5px", margin: "30px"}}>
                    <Card.Img variant="top" src={src} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {content_text}
                        </Card.Text>
                        <Button style={{width: "100%" /**상대 너비로 해야 카드 크기가 작아질 때 버튼도 같이 작아진다. */, textAlign: "center", color: "whitesmoke"}} variant="info" onClick={() => setShow(true)}>기사 보기</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '21rem', height: "27.5rem", left: "175px", top: "95px" , padding: "5px", margin: "30px"}}>
                    <Card.Img variant="top" src={src} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {content_text}
                        </Card.Text>
                        <Button style={{width: "100%", textAlign: "center", color: "whitesmoke"}} variant="info" onClick={() => setShow(true)}>기사 보기</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '21rem', height: "27.5rem", left: "175px", top: "95px", padding: "5px", margin: "30px"}}>
                    <Card.Img variant="top" src={src} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {content_text}
                        </Card.Text>
                        <Button style={{width: "100%", textAlign: "center", color: "whitesmoke", objectFit: "contain"}} variant="info" onClick={() => setShow(true)}>기사 보기</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    return (
        <div>
            <TopBar />
            <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{height: "500px"}}>
                    <Carousel style={{display: "block", width:"100%", height:"100%", background: "black", opacity: "70%"}}>
                        <Carousel.Item style={{ color: "white", display: "block", fontSize: "23px", padding: "90px"}}>
                        신 변호사는 6일 자신의 페이스북에 '조국 교수 일가의 수난을 바라보며'라는 내용의 글을 올렸다. 
                        그는 "조 교수의 경우 본인은 말할 것도 없고, 부인은 지금 영어의 몸이 되었으며, 
                        금쪽같은 딸이 의전원 입학취소의 날벼락을 맞았다"고 했다. 그러면서 "지금 조 교수는 살아도 살지 않은 것이요, 
                        한 인간이 겪을 수 있는 가장 큰 고통의 불 한가운데서 몸 전체가 타고 있는 셈"이라며 연민을 드러냈다.
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
            {infoArray.map((info, index) => {
                console.log(info)
                    if(infoArray.length-3 === index) {
                        // 관찰되는 요소가 있는 html, 아래에서 5번째에 해당하는 박스를 관찰
                        return (
                            <div ref={boxRef} key={index}>
                                <CardList />
                            </div>
                        )
                    } else {
                        // 관찰되는 요소가 없는 html
                        return (
                            <div key={index}>
                                <CardList />
                            </div>
                        )
                    }
                })}

        </div>
    )
}

export default Main;