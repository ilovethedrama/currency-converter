import { useEffect, useState } from "react";
import { CurrencyConversionResponseItem } from "../types/currency";

export const useFetch = (currencyCode: string = "GBP") => {
    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState<Array<CurrencyConversionResponseItem>>([]);
    const [requestError, setRequestError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`http://www.floatrates.com/daily/${currencyCode}.json`);
                const data = await response.json();
                const tranformedData = Object.keys(data).map(key => data[key])
                setData(tranformedData);
                setIsLoading(false);
            } catch(error: any) {
                setRequestError(error)
                setIsLoading(false)
            }
        };
        fetchData();
    }, [currencyCode]);

    return { loading, data, requestError };
};
