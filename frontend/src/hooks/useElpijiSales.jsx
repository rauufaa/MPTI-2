import useSWR from "swr"
import { getElpijiSales } from "../utils/handleElpijiSale";


// const fetcher = (url, data) => fetch(url, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": localStorage.getItem("token")
//     },
//     body: JSON.stringify(data)
// }).then((data) => data.json())

function useElpijiSales() {
    const { data, error, isLoading, isValidating } = useSWR(["http://localhost:5000/penjualan", data], getElpijiSales);
    return {
        data, error, isLoading
    }
}

export {useElpijiSales}