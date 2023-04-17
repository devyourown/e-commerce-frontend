import React, {useState} from 'react';
import LabelStyles from "../styles/Label.styles";
import useTranslate from "../../hooks/useTranslate";
import {Button} from "react-bootstrap";
import {SizeButtonStyles} from "../styles/Button.styles";

function Size({size, isSelected} : {size : string, isSelected : boolean}) {
    return (
        <SizeButtonStyles style={{backgroundColor : "#eeeee"}}>{size}</SizeButtonStyles>
    )
}

function SizeList({sizes} : {sizes : string[]}) {
    const [selectNum, setSelectNum] = useState(-1);
    const translate = useTranslate();

    const handleClick = (e : React.MouseEvent<HTMLLIElement>) => {
        const id = Number(e.currentTarget.dataset.id);
        setSelectNum(id);
    }

    return (
        <div style={{paddingTop : "5px", paddingBottom : "20px"}}>
            <LabelStyles>{translate("size")} : {sizes[selectNum]}</LabelStyles>
            <ul style={{marginTop : "10px", display: "flex", listStyle: "none", padding: 0 }}>
                {
                    sizes && sizes.map((size, i) => {
                        return (
                            <li style={{ display: "inline-block" }} data-id={i} onClick={handleClick} >
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