import React from 'react';
import useTranslate from "../../hooks/useTranslate";
import {Container} from "react-bootstrap";

function NoMatingPage() {
    const translate = useTranslate();

    return (
        <Container>
            <h2>{translate("no matching title")}</h2>
            <span>{translate("no matching content")}</span>
        </Container>
    );
}

export default NoMatingPage;