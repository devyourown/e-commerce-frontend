import React from 'react';
import MoonLoader from "react-spinners/MoonLoader";

function Loading() {
    return (
        <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}>
            <MoonLoader color="#5caad9" />
        </div>
    );
}

export default Loading;