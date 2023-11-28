/*
Fetch learning - web dev simplified

fetch('https://regres.in/api/users{
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name: "User 1"
    })
}) 
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))

 */

// This function is similar to "sending data via postman to a specific route"
const button = document.querySelector("button")
button.addEventListener("click", () => {
    fetch("https://localhost:3000/create-checkout-session", {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : [
            { id : 1, quantity : 3},
            { id : 2, quantity : 1}
        ],
    }),
})
.then(res => {
    if(res.ok)
        return res.json();
    else 
        return res.json().then(jsonData => Promise.reject(jsonData));
})
.then(({ url}) => {
    window.location = url;
})
.catch((error) => {
    console.log(error);
})