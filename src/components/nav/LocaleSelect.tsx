import React from 'react';
import {useSetLocale} from "../../contexts/LocaleContext";
import SelectStyles from "../styles/Select.styles";

function LocaleSelect() {
    const setLocale = useSetLocale();

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setLocale(e.target.value);
    }

    return (
        <SelectStyles onChange={handleChange} >
            <option value={"ko"}>한국어</option>
            <option value={"en"}>English</option>
        </SelectStyles>
    );
}

export default LocaleSelect;