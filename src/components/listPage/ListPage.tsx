import React, {useEffect} from 'react';
import Items from "./Items";
import {Container} from "react-bootstrap";
import {initItems} from "../../store/itemSlice";
import useAsync from "../../hooks/useAsync";
import {getItemsApi} from "../../api";
import {useDispatch} from "react-redux";

function ListPage() {
    const [isPending, error, getItemApiAsync] = useAsync(getItemsApi);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const items = await getItemApiAsync();
            dispatch(initItems(items));
        }
        fetchData();
    }, [])


    return (
        <Container>
            <Items/>
        </Container>
    );
}

export default ListPage;