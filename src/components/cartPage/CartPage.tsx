import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Container, Form, Table} from "react-bootstrap";
import useTranslate from "../../hooks/useTranslate";
import {useDispatch, useSelector} from "react-redux";
import {RootState, SetOrderCountType} from "../../types/stateTypes";
import {useNavigate} from "react-router-dom";
import {DivStyles} from "../styles/Div.styles";
import {ItemOrderType} from "../../types/ItemTypes";
import "./CartPage.css"
import Row from './Row';

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
                        <Row key={order.id} order={order} i={i} />
                    ))
                }
                </tbody>
            </Table>
        </Container>
    );
}

export default CartPage;