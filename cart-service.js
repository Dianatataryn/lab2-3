
function addToCart(event) {
    const add_id = event.target.classList[0];
    console.log(event.target)
    if (localStorage.getItem(add_id))
    {
        localStorage.setItem(add_id, parseInt(localStorage.getItem(add_id)) + 1);
    }
    else
    {
        localStorage.setItem(add_id, 1);
    }
    console.log(add_id)
    console.log(localStorage)
}


