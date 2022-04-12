import React, {useState} from "react"
import {ButtonGroup, ToggleButton, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TopBar : React.FC = () => {
    return(
        <div>
            <ProfileAndLogin />
            <Category />
        </div>
    )
}

const ProfileAndLogin : React.FC = () => {
    return (
        <Nav style={{float: "right"}} >
            <Nav.Item>
                <Nav.Link href="mypage" id="Mypage" eventKey="mypage" style={{fontWeight: "bolder"}}>마이페이지</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login" eventKey="link" style={{fontWeight: "bolder"}}>
                    로그인
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

const Category : React.FC = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
      { name: '정치', value: '1' },
      { name: '경제', value: '2' },
      { name: '사회', value: '3' },
      { name: '과학', value: '4' },
      { name: '스포츠', value: '5' }
    ];
  
    return (
      <>
        <ButtonGroup style={{left: "576px", top: "50px", }}>
          {radios.map((radio, idx) => (
            <ToggleButton
              style={{margin: "8px", borderRadius: "2px", fontFamily: "sans-serif"}}
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant='outline-success'
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))} 
        </ButtonGroup>
      </>
    );
}

export default TopBar