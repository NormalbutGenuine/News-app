import React, { useState, useEffect, useCallback, useRef } from "react"
import {Card, Button, Modal, Carousel} from "react-bootstrap";
import TopBar from "./Top_Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Iinfo } from "../../types/InfoType";

const Main : React.FC = () => {
   
    const [show, setShow] = useState(false)
    let box :Iinfo[] = []

    // state
    const [infoArray, setInfoArray] = useState<Iinfo[]>([]);
    const [body, setBody] = useState<string []>([]);

    // ref
    const observerRef = useRef<IntersectionObserver>();
    const boxRef = useRef<HTMLDivElement>(null);
    // 첫 화면 렌더링시 백엔드 데이터 콜
    useEffect(() => {
        getInfo(window.location.pathname);
    }, [])
    // 무한 스크롤
    useEffect(() => {
        observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
        boxRef.current && observerRef.current.observe(boxRef.current);
    }, [infoArray])

    const getInfo = async (category : string) => {
        // enum으로 모듈화
        if (category === "/") category = "1"
        switch (category) {
            case "/2":
                category = "economy"
                break;
            
            case "/3":
                category = "society"
                break;
            
            case "/4":
                category = "science"
                break;
            
            case "/5":
                category = "sports"
                break;

            default:
                category = "politics"
                break;
        }
        // 경제 버튼 클릭 시 서버에 경제뉴스 데이터 호출
        const res = await axios.get(`http://localhost:3030/article/${category}`); // 서버에서 데이터 가져오기
        setInfoArray((curInfoArray) => [...curInfoArray, ...res.data]); // state에 추가
        box.push(res.data);
        console.log('info data add...');
        return box
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
                    <Card.Img variant="top" src={box[num.num].imgSrc} style={{objectFit: "fill"}}/>
                    <Card.Body>
                        <Card.Title>{cutText(box[num.num].title)}</Card.Title>
                        <Card.Text>
                            {box[num.num].lede}
                        </Card.Text>
                        <Button style={{width: "95%", textAlign: "center", color: "whitesmoke", padding: "3px", margin: "5px", position: "absolute", left: "2px", top: "438px"}} variant="info" onClick={() => GetBody(num.num)}>기사 보기</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    function GetBody(idx: number) {
        let sum : string = "";
        let txt : string[] = [];
        let content = infoArray[idx].body.split(/다./) 
        for (let i = 0; i < content.length; i++){
            if (sum.length < 170)  {
                sum = sum + content[i] + '다.'
            }else {
                txt.push(sum)
                sum = ""
            }
        }
        setBody((body) => [...txt])
        setShow((show) => !show)
        console.log(body)
        return body
    }
    
    // Modal은 사실 처음에 렌더링이 이미 되어있다. getBody를 누를 때 처음으로 렌더링이 되게 한다면?
    // @ts-ignore
    const CardModal : React.FC = () => {
        const [index, setIndex] = useState(0);
        const [visible, setVisible] = useState(false);
        let word : string = "Saved!";
        const handleSelect = (selectedIndex : any, e : any) => {
          setIndex(selectedIndex);
          console.log(index)
        };
        return (
            <div>
                <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            How do I Say
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{height: "500px"}}>
                    
                    <Carousel fade interval={null} activeIndex={index} onSelect={handleSelect} style={{display: "block", width:"100%", height:"100%", background: "black", opacity: "70%"}}>
                        {/* @ts-ignore */} 
                        {body.map((item, idx) => {
                            return (
                                <Carousel.Item key={idx} style={{ color: "white", display: "block", fontSize: "23px", padding: "90px", transitionProperty: "none", transform: "none"}}>
                                    {item}
                                </Carousel.Item>
                            )
                        })
                        }
                        </Carousel> 
                    </Modal.Body>
                    <Modal.Footer style={{display: "flex"}}>
                        <p style={{visibility: visible ? "visible" : "hidden"}}>{word}</p>
                        <Button variant="primary" onClick={() => setVisible((visible) => !visible)}>Scrap</Button>
                    </Modal.Footer>
                </Modal>
                  
            </div>
        )
    }

    return (
        <div>
            <TopBar />
            {/**@ts-ignore */}
            <CardModal />
            {infoArray.map((info, index) => {
                box.push(info)
                    if(infoArray.length-5 === index && index < infoArray.length - 2 && index % 3 === 0) {
                        // 관찰되는 요소가 있는 html, 아래에서 5번째에 해당하는 박스를 관찰
                        return (
                            <div ref={boxRef} key={index} style={{display: 'flex', flexDirection: 'row', flexWrap: "wrap"}}>
                                <CardList num={index}/>
                                <CardList num={index + 1}/>
                                <CardList num={index + 2}/>
                            </div>
                        )
                    } else if (infoArray.length - 2 > index && index % 3 === 0) {
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