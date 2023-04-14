import { useEffect, useState } from "react";

function useFade(option: any) {
    const [fade, setFade] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade('end');
        }, 500);
        return () => {
            clearTimeout(timer);
            setFade('');
        };
    }, [option]);

    return { fade };
}

export default useFade;