import React, {MouseEventHandler, useEffect, useState} from 'react';
import {Nav} from "react-bootstrap";
import "./DetailPage.css"
import useFade from "../../hooks/useFade";


function TabNav({setOption} : {setOption : React.Dispatch<React.SetStateAction<number>>}) {

    // const handleOnClick = (e : React.MouseEvent<HTMLAnchorElement>) => {
    //     setOption(e.currentTarget.textContent || '');
    // }

    const handleOnClick = (option : number) => {
        setOption(option);
    }

    return (
        <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link onClick={() => handleOnClick(0)} eventKey="link-0">Detail</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => handleOnClick(1)}  eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={() => handleOnClick(2)}  eventKey="link-2">Option 3</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

function TabComponent({option} : {option : number}) {
    const {fade} = useFade(option);

    let contents = [
        <div>옵션 0 내용</div>,
        <div>옵션 1 내용</div>,
        <div>옵션 2 내용</div>,
    ]

    return (
        <div className={"tab-content start " + fade}>
            {contents[option]}
        </div>
    )
}

function Tab() {
    const [option, setOption] = useState(0);


    return (
        <div className={"tab"}>
            <TabNav setOption={setOption}/>
            <TabComponent option={option}/>
        </div>
    );
}

export default Tab;