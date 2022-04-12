import React from "react"
import {Form, Button, Carousel, Nav} from "react-bootstrap"
import Head from "../Header"
import picture1 from "../pictures/slide1.jpg"
import picture2 from "../pictures/slide2.jpg"
import picture3 from "../pictures/slide3.jpg"

function goRegisterPage(): void {
    document.location.href = "/register"
}

const Login : React.FC = () => {

    return (
        <div>
            <Head />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Form style={{margin: "10%", marginTop: "10%", width: "30%"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>이메일 주소</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Button variant="info" type="button" style={{marginTop: "30px", color: "white"}}>
                로그인
            </Button>
            <Button variant="primary" type="button" onClick={goRegisterPage} style={{color: "white", marginLeft: "20px", marginTop: "30px"}}>
                회원가입
            </Button>
            </Form>
            <Carousel style={{width: "30%", marginTop: "150px", marginBottom: "150px"}}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={picture1}
                alt="First slide"
                style={{ display: "flex"}}
            />
            <Carousel.Caption>
                <h3>Thank You!</h3>
                <p>방문해주셔서 감사합니다.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={picture2}
                alt="Second slide"
                style={{display: "flex"}}
            />
        
            <Carousel.Caption>
                <h3>Thank You!</h3>
                <p>방문해주셔서 감사합니다.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={picture3}
                alt="Third slide"
                style={{ display: "flex"}}
            />
        
            <Carousel.Caption>
                <h3>Thank You!</h3>
                <p>방문해주셔서 감사합니다.</p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
      </div>
    )
}

export default Login