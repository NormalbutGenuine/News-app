import React from "react";
import { Card, Button } from "react-bootstrap";

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

export default ScrapList