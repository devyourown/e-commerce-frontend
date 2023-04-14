import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {ItemType, RootState} from "../../store/store";
import {Col, Container, Nav, Row} from "react-bootstrap";
import Tab from "./Tab"
import useFade from "../../hooks/useFade";



function DetailPage() {
    const {fade} = useFade("");
    const items = useSelector((state : RootState) => state.items);
    let {id} = useParams() as {id : string};
    const item = items.find(i => i.id === +id) as ItemType;
    const url = `/product.jpg`;

    return (
        <Container className={"content start " + fade}>
            <Row style={{paddingTop : "10px"}}>
                <Col className="col-md-6">
                    <img src={url} width="100%"/>
                </Col>
                <Col className="col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <button className="btn btn-danger" >주문하기</button>
                </Col>
            </Row>
            <Row>
                <Tab/>
            </Row>
        </Container>
    );
}

export default DetailPage;