import React, {Dispatch, SetStateAction, useState} from 'react';
import LabelStyles from "../styles/Label.styles";
import useTranslate from "../../hooks/useTranslate";
import {Button} from "react-bootstrap";
import {SizeButtonStyles} from "../styles/Button.styles";
import {ItemOrderType} from "../../types/ItemTypes";

function Size({size, isSelected} : {size : string, isSelected : boolean}) {
    const sizeClickStyle = {
        backgroundColor : "#eeeee",
        border : isSelected ? "1px solid black" : "undefined"
    }
    const sizeNonClickStyle = {
        backgroundColor : "#eeeee",
    }

    return (
        <SizeButtonStyles style={isSelected ? sizeClickStyle : sizeNonClickStyle}>{size}</SizeButtonStyles>
    )
}

function SizeList({sizes, setOrder} : {sizes : string[], setOrder : Dispatch<SetStateAction<ItemOrderType>>}) {
    const [selectNum, setSelectNum] = useState(-1);
    const translate = useTranslate();

    const handleClick = (e : React.MouseEvent<HTMLLIElement>) => {
        const id = Number(e.currentTarget.dataset.id);
        setSelectNum(id);
        setOrder(prevState => {
            let newState : ItemOrderType;
            newState = {...prevState};
            newState["size"] = sizes[id];
            return (newState);
        })
    }

    return (
        <div style={{paddingTop : "5px", paddingBottom : "20px"}}>
            <LabelStyles>{translate("size")} : {sizes[selectNum]}</LabelStyles>
            <ul style={{marginTop : "10px", display: "flex", listStyle: "none", padding: 0 }}>
                {
                    sizes && sizes.map((size, i) => {
                        return (
                            <li key={i} style={{ display: "inline-block" }} data-id={i} onClick={handleClick} >
                                <Size isSelected={selectNum === i} size={size}></Size>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default SizeList;