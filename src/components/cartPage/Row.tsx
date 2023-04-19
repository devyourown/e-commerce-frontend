import React, {ChangeEvent, useState} from 'react';
import {ItemOrderType} from "../../types/ItemTypes";
import {useDispatch, useSelector} from "react-redux";
import {RootState, SetOrderCountType} from "../../types/stateTypes";
import useTranslate from "../../hooks/useTranslate";
import {setOrderCount} from "../../store/userSlice";
import {Form} from "react-bootstrap";
import {ButtonStyles, CountButtonStyles} from "../styles/Button.styles";

function Row({order, i} : {order : ItemOrderType, i :number }) {
    const userInfo = useSelector((state : RootState) => state.userInfo);
    const translate = useTranslate();
    const dispatch = useDispatch();

    const handleCountIncrease = () => {
        const info : SetOrderCountType = {id : order.id, count : order.count + 1};
        dispatch(setOrderCount(info))

    }

    const handleCountDecrease = () => {
        if (order.count === 0) return;
        const info : SetOrderCountType = {id : order.id, count : order.count - 1};
        dispatch(setOrderCount(info))
    }

    const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
        const inputValue: string = e.target.value;
        const numericValue: number = isNaN(Number(inputValue)) ? 1 : Number(inputValue);
        e.target.value = numericValue.toString();

        if (numericValue === 0) return;
        const info : SetOrderCountType = {id : order.id, count : numericValue};
        dispatch(setOrderCount(info))
    }

    return (
        <tr key={order.id}>
            <td>{order.id}</td>
            <td><Form.Check
                type={"checkbox"}
                id={`default-checkbox`}
            /></td>
            <td className={"item"}>
                <div className={"item-img"} ><img src={"/product.jpg"}/></div>
                <div className={"item-content"}>
                    <div>{order.item.title}</div>
                    <div className={"item-color"}>{translate("color")} : {order.color}</div>
                </div>
            </td>
            <td className={"size center"}>{order.size}</td>
            <td className={"count center"}>
                <CountButtonStyles onClick={handleCountDecrease}>-</CountButtonStyles>
                <input type={"text"} className={"input center"} value={order.count} onChange={handleInputChange}/>
                <CountButtonStyles onClick={handleCountIncrease}>+</CountButtonStyles>
            </td>
            <td><ButtonStyles>{translate("delete")}</ButtonStyles></td>
        </tr>
    )
}

export default Row;