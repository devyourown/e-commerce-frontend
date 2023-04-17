import React, {useState} from 'react';
import {Inner, Outer} from "../styles/Button.styles";
import LabelStyles from "../styles/Label.styles";
import useTranslate from "../../hooks/useTranslate";

function Color({color, isSelected} : {color : string, isSelected : boolean}) {

    return (
        <Outer style={isSelected ? {border : "1px solid black"} : {border : "1px solid #cccccc"}}>
            <Inner color={color}> </Inner>
        </Outer>
    )
}

function ColorList({colors} : {colors : string[]}) {
    const [selectNum, setSelectNum] = useState(-1);
    const translate = useTranslate();

    const handleClick = (e : React.MouseEvent<HTMLLIElement>) => {
        const id = Number(e.currentTarget.dataset.id);
        setSelectNum(id);
    }

    return (
        <div style={{paddingTop : "20px", paddingBottom : "20px"}}>
            <LabelStyles>{translate("color")} : {colors[selectNum]}</LabelStyles>
            <ul style={{marginTop : "10px", display: "flex", listStyle: "none", padding: 0 }}>
                {
                   colors && colors.map((color, i) => {
                        return (
                            <li style={{ display: "inline-block" }} data-id={i} onClick={handleClick} >
                                <Color isSelected={selectNum === i} color={color}></Color>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ColorList;