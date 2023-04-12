import React, {useEffect, useState} from 'react';
import "./MainPage.css"


function MainPage() {
    const [fade, setFade] = useState("");


    useEffect(() => {
        const timeout = setTimeout(() => {
            setFade("end")
        }, 500);
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <>
            <div className={"main-bg start " + fade}></div>
            <div>메인페이지</div>
        </>
    );
}

export default MainPage;