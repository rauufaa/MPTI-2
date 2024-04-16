
const handleLogin = (url, data) => fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
}).then((data) => data.json())

export { handleLogin }