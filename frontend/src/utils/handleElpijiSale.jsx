const getElpijiSales = (url, data) => fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify(data)
}).then((data) => data.json())

const postElpijiSales = (url, data) => fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token")
    },
    body: JSON.stringify(data)
}).then((data) => data.json())


export {
    getElpijiSales,
    postElpijiSales
}