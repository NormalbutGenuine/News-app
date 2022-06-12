import React,{useState} from "react";
import { ButtonGroup, ToggleButton} from "react-bootstrap";
import { CategoryNumber } from "../request/CategoryChange";

let categoryNumber = new CategoryNumber()

const Category : React.FC = () => {
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
      { name: '바이오', value: '1' },
      { name: '나노', value: '2' },
      { name: '블록체인', value: '3' },
      { name: '인공지능', value: '4' },
      { name: '메타버스', value: '5' }
    ];
  
    return (
      <>
        <ButtonGroup style={{left: "537px", top: "50px", zIndex: "2"}}>
          {radios.map((radio, idx) => (
            <ToggleButton
              style={{margin: "8px", borderRadius: "2px", fontFamily: "sans-serif"}}
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant='outline-success'
              name="radio"
              value={radio.value}
              checked={Number(radio.value) === 1 ? true : Number(radio.value) === Number(window.location.pathname.substring(1,2))}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              onClick={() => categoryNumber.setCategoryNum(radio.value)}
            >
              <div id="#editor-container"></div>
              {radio.name}
            </ToggleButton>
          ))} 
        </ButtonGroup>
      </>
    );
}

export default Category