import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {RootState, ItemType} from "../../store/store";
import "./Items.css"
import {NavLink} from "react-router-dom";

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
    const [fade, setFade] = useState("");


    useEffect(() => {
        const timeout = setTimeout(() => {
            setFade("end")
        }, 50);
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <>
            <div className={"col-md-4 item start " + fade} style={{textAlign : "center"}}>
                <NavLink to={`/item/${item.id}`} style={getLinkStyle()}>
                <div>
                    <img src={process.env.PUBLIC_URL + `/product${item.id}.jpg`} width={"80%"} />
                </div>
                <div >
                    <div className={"title"}><span>{item.title}</span></div>
                    <div><span>{item.content}</span></div>
                    <div className={"price"}><span>{item.price}</span></div>
                </div>
                </NavLink>
            </div>
        </>
    )
}

function Items() {
    const items: ItemType[] = useSelector((state: RootState) => state.items);
    return (
        <div className={"row"} >
            {items.map(item => <Item key={item.id} item={item}/>)}
        </div>
    );
}

export default Items;