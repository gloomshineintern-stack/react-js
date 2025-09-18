import { useEffect, useState } from "react";

//it requires an argument like currency variable
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`v6.exchangerate-api.com/v6/8311a7ec6c61a3bb8fc1deee/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [
        currency//any change in currency(dependency) will re-render the useEffect so its an dependency array
    ])
    console.log(data);
    return data;
}

export default useCurrencyInfo;