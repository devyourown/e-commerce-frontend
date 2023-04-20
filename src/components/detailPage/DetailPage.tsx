import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Col, Container, Nav, Row} from "react-bootstrap";
import Tab from "./Tab"
import useFade from "../../hooks/useFade";
import {ButtonStyles} from "../styles/Button.styles";
import useAsync from "../../hooks/useAsync";
import {authenticateApi, getItemApi} from "../../api";
import {ItemType, RootState } from '../../types/types';
import useTranslate from "../../hooks/useTranslate";
import ColorList from "./ColorList";
import SizeList from "./SizeList";
import WishButton from "./WishButton";
import "./DetailPage.css"
import {ItemOrderType} from "../../types/ItemTypes";
import { addOrder } from '../../store/userSlice';


function DetailPage() {
    const {fade} = useFade("");
    const items = useSelector((state : RootState) => state.items);
    const userInfo = useSelector((state : RootState) => state.userInfo);
    const {id} = useParams() as {id : string};
    const translate = useTranslate();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isPending, error, getItemApiAsync] = useAsync(getItemApi);
    const [item, setItem] = useState<ItemType>({
        id: 0,
        title: "string",
        price: 0,
        content: "string",
        sizes: [],
        colors: [],
        category: "string",
        recommend: 0,
    });
    const [order, setOrder] = useState<ItemOrderType>({
        id : -1,
        item : item,
        size : "",
        color : "",
        count : 1
    });
    const url = `/product.jpg`;

    useEffect(() => {
        let result = items.find(i => i.id === +id);
        if (!result) {
            getItemApiAsync(id)
                .then((res : ItemType) => setItem(res))
                .catch((err : Error) => console.log(err));
        } else {
            setItem(result);
        }
    }, [])
    const handleCartButton = async() => {
        // TODO 방식 수정 가능.
        // const data = await authenticateApi("cart");
        const data = {success : true};
        if (!userInfo.isSignIn || !data.success) {
            alert(translate("need sign in msg"))
            navigate("/signIn");
            return ;
        }

        if (order.color === "") {
            alert(translate("set color msg"));
            return ;
        }
        if (order.size === "") {
            alert(translate("set size msg"));
            return ;
        }

        dispatch(addOrder(order));
        if (window.confirm(translate("add to cart msg"))) {
            navigate("/users/cart");
        }

    }

    return (
        <Container className={"content start " + fade}>
            <Row style={{paddingTop : "10px"}}>
                <Col className="col-md-6">
                    <img src={url} width="100%"/>
                </Col>
                <Col className="content-info col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <ColorList setOrder={setOrder}  colors={item.colors} />
                    <SizeList setOrder={setOrder} sizes={item.sizes}/>
                    <ButtonStyles style={{
                        width : "100%",
                        marginTop : "20px",
                        borderRadius: 0,
                        padding: "10px",
                    }} onClick={handleCartButton}  className={"cart-button"}>{translate("add to cart")}</ButtonStyles>
                    <WishButton>{translate("wish list")}</WishButton>
                </Col>
            </Row>
            <Row>
                <Tab/>
            </Row>
        </Container>
    );
}

export default DetailPage;