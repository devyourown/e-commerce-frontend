import {useLocale} from "../contexts/LocaleContext";

function useExchange() {
    const locale = useLocale();
    const exchange = (value : number) : string => {
        if (locale === "ko") {
            return "" + value + " ₩";
        }
        if (locale === "en") {
            return "" + Math.floor(value * 0.00075) + " $";
        }
        return "";
    }
    return exchange;
}

export default useExchange