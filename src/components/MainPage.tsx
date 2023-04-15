import React, {useEffect, useState} from 'react';
import "./MainPage.css"
import useFade from "../hooks/useFade";
import DivStyles from "./styles/Div.styles";


function MainPage() {
    const {fade} = useFade("");



    return (
        <div className={"main-content"}>
            <DivStyles/>
            <div className={"main-bg start " + fade}></div>
            <DivStyles/>
            <div>메인페이지</div>
        </div>
    );
}

export default MainPage;