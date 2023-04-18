import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Col, Container, Nav, Row} from "react-bootstrap";
import Tab from "./Tab"
import useFade from "../../hooks/useFade";
import {ButtonStyles} from "../styles/Button.styles";
import useAsync from "../../hooks/useAsync";
import {getItemApi} from "../../api";
import {ItemType, RootState } from '../../types/types';
import useTranslate from "../../hooks/useTranslate";
import ColorList from "./ColorList";
import SizeList from "./SizeList";
import WishButton from "./WishButton";



function DetailPage() {
    const {fade} = useFade("");
    const items = useSelector((state : RootState) => state.items);
    const {id} = useParams() as {id : string};
    const translate = useTranslate();
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
                    <ColorList  colors={item.colors} />
                    <SizeList sizes={item.sizes}/>
                    <ButtonStyles style={{width : "100%", marginTop : "20px", borderRadius: "0", padding: "10px"}}>{translate("add to cart")}</ButtonStyles>
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