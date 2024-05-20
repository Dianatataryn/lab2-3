
function displayCart() {
    const cart_page = document.getElementsByTagName('main')[0]
    if (localStorage.length === 0) {
    }
    else {
        let wares = '';
        for (let i=0; i < localStorage.length; i++) {
            let ware = {id: localStorage.key(i), quantity: localStorage.getItem(localStorage.key(i))}
            let cur_ware = warehouse.find(item => item.id === ware.id)
            let price = ware.quantity * cur_ware.price;
            wares += `<div class="cart-ware-wrapper" id='${cur_ware.id}'>
            <div class="img-name">
                <img src="${cur_ware.image}" height="120px">
                <p>${cur_ware.company} ${cur_ware.model}</p>
            </div>
            <div class="num-price">
                <div class="num-control">
                    <button class='decrement ${cur_ware.id}'>-</button>
                    <p>${ware.quantity}</p>
                    <button class='increment ${cur_ware.id}'>+</button>
                    
                </div>
                <span class='price ${cur_ware.id}'>${price}</span>
            </div>    
        </div>`;
        }
        cart_page.insertAdjacentHTML('afterbegin', wares);
        Array.from(document.getElementsByClassName('decrement')).forEach(button => button.addEventListener("click", Decrement));
        Array.from(document.getElementsByClassName('increment')).forEach(button => button.addEventListener("click", Increment));
    }
}
displayCart();

function countValue() {
    let value = 0;
    const prices = Array.from(document.getElementsByClassName('price'));
    prices.forEach(item => value += parseInt(item.textContent));   // 
    document.getElementById('value').innerHTML = value;
    console.log(localStorage)
}
countValue();

function Decrement(event) {
    const num = event.target.nextElementSibling;
    if (parseInt(num.textContent) > 1) {
        const value = parseInt(num.textContent) - 1;
        num.innerHTML = value;
        localStorage.setItem(event.target.classList[1], value);
        const warehouse_price = warehouse.find(item => item.id === event.target.classList[1]).price;
        document.getElementsByClassName(`price ${event.target.classList[1]}`)[0].innerHTML = value * warehouse_price;
        
    }
    else {
        document.getElementById(event.target.classList[1]).remove();
        localStorage.removeItem(event.target.classList[1]);
    }
    countValue();
    

}

function Increment(event) {
    const num = event.target.previousElementSibling;
    const value = parseInt(num.textContent) + 1;
    num.innerHTML = value;
    localStorage.setItem(event.target.classList[1], value);
    const warehouse_price = warehouse.find(item => item.id === event.target.classList[1]).price;
    document.getElementsByClassName(`price ${event.target.classList[1]}`)[0].innerHTML = value * warehouse_price;
    countValue();
    
}

document.getElementById("logo-wrapper").addEventListener("click", function() {
    window.location.href="index.html";
});