import React, { useState, useEffect, useCallback, useRef } from "react"
import {Card, Button, Modal, Carousel} from "react-bootstrap";
import TopBar from "./Top_Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Iinfo } from "../../types/InfoType";
import {CategoryNumber} from "../../request/apiCall"

let categoryNumber = new CategoryNumber()

console.log(window.location.pathname)

const Main : React.FC = () => {
    
    const [show, setShow] = useState(false)
    const [title, setTitle] = useState(false)
    let box :Iinfo[] = []

    // state
    const [infoArray, setInfoArray] = useState<Iinfo[]>([]);

    // ref
    const observerRef = useRef<IntersectionObserver>();
    const boxRef = useRef<HTMLDivElement>(null);

    // useEffect
    useEffect(() => {
        getInfo(window.location.pathname);
    }, [])

    useEffect(() => {
        observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
        boxRef.current && observerRef.current.observe(boxRef.current);
    }, [infoArray])

    // function
    const getInfo = async (category : string) => {
        if (category === "/") category = "1"
        switch (category) {
            case "/2":
                category = "2"
                break;
            
            case "/3":
                category = "3"
                break;
            
            case "/4":
                category = "4"
                break;
            
            case "/5":
                category = "5"
                break;

            default:
                category = "1"
                break;
        }
        // 경제 버튼 클릭 시 서버에 경제뉴스 데이터 호출
        const res = await axios.get(`http://localhost:3030/article/${category}`); // 서버에서 데이터 가져오기
        setInfoArray((curInfoArray) => [...curInfoArray, ...res.data]); // state에 추가
        box.push(res.data);
        console.log('info data add...');
    }

    // IntersectionObserver 설정
    const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) { // 관찰하고 있는 entry가 화면에 보여지는 경우
                io.unobserve(entry.target); // entry 관찰 해제
                getInfo(window.location.pathname); // 데이터 가져오기
            }
        })
    }

    function cutText(txt:string) :string {
        if (txt.length > 139) txt = txt.substring(0, 139) + "..."
        return txt
    }
    // @ts-ignore
    function CardList(num){
        console.log(num.num)
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap" }}>
                <Card style={{ width: '21rem', height: "31rem", left: "175px", top: "95px" , padding: "5px", margin: "30px", position: "relative"}}>
                    <Card.Img variant="top" src={box[num.num].img} style={{objectFit: "fill"}}/>
                    <Card.Body>
                        <Card.Title>{cutText(box[num.num].headLine)}</Card.Title>
                        <Card.Text>
                            {box[num.num].content}
                        </Card.Text>
                        <Button style={{width: "95%", textAlign: "center", color: "whitesmoke", padding: "3px", margin: "5px", position: "absolute", left: "2px", top: "438px"}} variant="info" onClick={() => setShow(true)}>기사 보기</Button>
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
                box.push(info)
                console.log(infoArray.length)
                    if(infoArray.length-5 === index && index < infoArray.length - 2 && index%3 === 0) {
                        // 관찰되는 요소가 있는 html, 아래에서 5번째에 해당하는 박스를 관찰
                        return (
                            <div ref={boxRef} key={index} style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap"}}>
                                <CardList num={index}/>
                                <CardList num={index + 1}/>
                                <CardList num={index + 2}/>
                            </div>
                        )
                    } else if (infoArray.length - 2 > index && index%3 === 0){
                        // 관찰되는 요소가 없는 html
                        return (
                            <div key = {index} style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap"}}>
                                <CardList num={index}/>
                                <CardList num={index + 1}/>
                                <CardList num={index + 2}/>
                            </div>
                        )
                    }
                }) 
            }
        </div>
    )
}

export default Main;