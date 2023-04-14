import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState, ItemType} from "../../store/store";
import "./Items.css"
import {NavLink} from "react-router-dom";
import useFade from "../../hooks/useFade";

type ItemProps = {
    item : ItemType
}

function getLinkStyle() {
    return {
        color : "black",
        textDecoration: "none",
    }
}



function Item({item} : ItemProps){

    return (
        <>
            <div className={"col-md-4 item"} style={{textAlign : "center"}}>
                <NavLink to={`/item/${item.id}`} style={getLinkStyle()}>
                <div>
                    <img src={process.env.PUBLIC_URL + `/product.jpg`} width={"100%"} />
                </div>
                <div >
                    <div className={"title"}><span>{item.title}</span></div>
                    <div className={"content"}><span>{item.content}</span></div>
                    <div className={"price"}><span>{item.price}</span></div>
                </div>
                </NavLink>
            </div>
        </>
    )
}

function Items(props : any) {
    const items: ItemType[] = useSelector((state: RootState) => state.items);
    const {fade} = useFade(items);

    return (
        <div className={"row start "+fade} >
            {items.map(item => <Item key={item.id} item={item}/>)}
        </div>
    );
}

export default Items;