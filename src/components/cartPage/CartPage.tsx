import React, {useEffect, useState} from 'react';
import {Button, Container, Form, Table} from "react-bootstrap";
import useTranslate from "../../hooks/useTranslate";
import {useSelector} from "react-redux";
import {RootState} from "../../types/stateTypes";
import {useNavigate} from "react-router-dom";
import {DivStyles} from "../styles/Div.styles";
import {ItemOrderType} from "../../types/ItemTypes";
import {ButtonStyles} from "../styles/Button.styles";
import "./CartPage.css"

function Row({order, i} : {order : ItemOrderType, i :number }) {
    const translate = useTranslate();

    return (
        <tr key={i}>
            <td>{order.item.id}</td>
            <td><Form.Check
                type={"checkbox"}
                id={`default-checkbox`}
            /></td>
            <td className={"item"}>
                <div><img src={"/product.jpg"} className={"item-img"} /></div>
                <div className={"item-content"}>
                    <div>{order.item.title}</div>
                    <div className={"item-color"}>{translate("color")} : {order.color}</div>
                </div>
            </td>
            <td>{order.size}</td>
            <td>{order.count}</td>
            <td><ButtonStyles>{translate("delete")}</ButtonStyles></td>
        </tr>
    )
}

function CartPage() {

    const translate = useTranslate();
    const navigate = useNavigate();
    const userInfo = useSelector((state : RootState) => state.userInfo);
    let cart : ItemOrderType[] = userInfo.cart ;

    useEffect(() => {
        if (!userInfo.isSignIn) {
            alert(translate("need sign in meg"));
            navigate("/signIn");
        }
    }, [])

    return (
        <Container style={{paddingTop : "30px"}}>
            <h2 style={{padding : "30px"}}>{translate("cart")}</h2>
            <DivStyles />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th><Form.Check
                            type={"checkbox"}
                            id={`default-checkbox`}
                        /></th>
                        <th>{translate("item")}</th>
                        <th>{translate("size")}</th>
                        <th>{translate("count")}</th>
                        <th>{translate("delete")}</th>
                    </tr>
                </thead>
                <tbody>
                {
                    cart.length <= 0 ? <td>장바구니가 비어있습니다. </td> : cart.map((order, i) => (
                        <Row order={order} i={i}/>
                    ))
                }
                </tbody>
            </Table>
        </Container>
    );
}

export default CartPage;