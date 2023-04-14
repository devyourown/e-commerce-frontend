import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {ItemType, RootState} from "../../store/store";
import {Col, Container, Nav, Row} from "react-bootstrap";
import Tab from "./Tab"
import useFade from "../../hooks/useFade";
import DivStyles from "../styles/Div.styles";
import {ButtonStyles} from "../styles/Button.styles";
import LabelStyles from "../styles/Label.styles";



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
                <Col className="content-info col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <div style={{paddingTop : "10px", paddingBottom : "20px"}}>
                        <LabelStyles>컬러 : </LabelStyles>
                    </div>
                    <ButtonStyles style={{width : "100%"}}>주문</ButtonStyles>
                </Col>
            </Row>
            <Row>
                <Tab/>
            </Row>
        </Container>
    );
}

export default DetailPage;