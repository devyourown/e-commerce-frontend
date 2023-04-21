import React, {Dispatch, SetStateAction, useState} from 'react';
import {Inner, Outer} from "../styles/Div.styles";
import LabelStyles from "../styles/Label.styles";
import useTranslate from "../../hooks/useTranslate";
import {ItemOrderType} from "../../types/ItemTypes";
import {ItemType} from "../../types/stateTypes";

function Color({color, isSelected} : {color : string, isSelected : boolean}) {

    return (
        <Outer style={isSelected ? {border : "1px solid black"} : {border : "1px solid #cccccc"}}>
            <Inner color={color}> </Inner>
        </Outer>
    )
}

function ColorList({colors, setOrder} : {colors : string[], setOrder : Dispatch<SetStateAction<ItemOrderType>>}) {
    const [selectNum, setSelectNum] = useState(-1);
    const translate = useTranslate();

    const handleClick = (e : React.MouseEvent<HTMLLIElement>) => {
        const id = Number(e.currentTarget.dataset.id);
        setSelectNum(id);
        setOrder(prevState => {
            let newState : ItemOrderType;
            newState = {...prevState};
            newState["color"] = colors[id];
            return (newState);
        })
    }

    return (
        <div style={{paddingTop : "20px", paddingBottom : "20px"}}>
            <LabelStyles>{translate("color")} : {colors[selectNum]}</LabelStyles>
            <ul style={{marginTop : "10px", display: "flex", listStyle: "none", padding: 0 }}>
                {
                   colors && colors.map((color, i) => {
                        return (
                            <li key={i} style={{ display: "inline-block" }} data-id={i} onClick={handleClick} >
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