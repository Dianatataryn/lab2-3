const warehouse = [ 
    { id: 'ware1', company: "Decor", model: "Gel polish with sparkles", image: "media/photo_2024-05-20_11-52-32.jpg", price: "350", description: "Gel polish Reforma, GAMMA, 10 ml."},
    { id: 'ware2', company: "Devices", model: "Manicure scissors", image: "media/photo_2024-05-20_11-32-17.jpg", price: "600", description: "Professional cuticle scissors SE-50/2" },
    { id: 'ware3', company: "Decor", model: "Colored gels", image: "media/photo_2024-05-20_11-32-53.jpg", price: "400", description: "A set of colored gels" },
    { id: 'ware4', company: "Decor", model: "Color bases", image: "media/photo_2024-05-20_11-32-31.jpg", price: "550", description: "A set of color bases"},
    { id: 'ware5', company: "Devices", model: "Color palette", image: "media/photo_2024-05-20_11-32-46.jpg", price: "120", description: "Fan palette on a ring (50 tips, 13.3 cm) for demonstrating gel polishes and designs - 449" },
    { id: 'ware6', company: "Decor", model: "Nail stickers", image: "media/photo_2024-05-20_11-49-02.jpg", price: "55", description: "Stickers with which you can create a design quickly and easily"},
    { id: 'ware7', company: "Devices", model: "Nail files", image: "media/photo_2024-05-20_11-33-00.jpg", price: "200", description: "Nail file OPI half circle 180/240 pack (25 pcs)" },
    { id: 'ware8', company: "Devices", model: "Manicure cutter", image: "media/photo_2024-05-20_11-32-36.jpg", price: "5000", description: "Manicure/pedicure cutter DM-11-1/ 202 Pink"}
];



function loadWares(filter, price_from, price_to) {
    let wares = '';
    warehouse.forEach(ware => {
        if (filter === "All" || ware.company === filter) {
            
            wares += `<div class="ware-wrapper" id="${ware.id}">
                    <img src="${ware.image}">
                    <div>
                        <div class="ware-header">
                            <span>${ware.company} ${ware.model}</span>
                            <div>
                                <button class="buy" id="buy${ware.id.substr(4)}">
                                    <img class="${ware.id}" src="media/photo_2024-05-20_13-52-10.jpg" width="20px">
                                </button>
                                <span class="price">${ware.price}</span>
                            </div>
                        </div>

                        <p class="ware-description">
                            ${ware.description}
                        </p>
                    </div>
                </div>`
            let styles = `#${ware.id}:hover * {
                overflow:visible;
                white-space: normal;
                z-index: 1;
                max-height:auto;
                box-shadow: 0 0 5px 3px rgb(150, 150, 150);
                }
                `;
            let styleSheet = document.getElementsByTagName('style')[0].sheet;
            styleSheet.insertRule(styles);
            }
        
    });
    document.getElementById("wares").innerHTML += wares;
    if (price_from > 0 || price_to > 0) {
        let prices = Array.from(document.getElementsByClassName('price'));
        prices.forEach(price => {
            if (parseInt(price.textContent) > price_to || parseInt(price.textContent) < price_from) {
                price.parentElement.parentElement.parentElement.parentElement.remove();
            }
        })
    }
    Array.from(document.getElementsByClassName('buy')).forEach(button => button.addEventListener('click', addToCart));
}



function applyFilter() {
    const price_from = document.getElementById('price-from').value;
    const price_to = document.getElementById('price-to').value;
    document.getElementById("wares").innerHTML = "";
    let filters = Array.from(document.getElementsByClassName("checkbox"));
    let check=0;
    filters.forEach(checkbox => {
        if (checkbox.checked) {
            let label = checkbox.nextElementSibling.textContent;
            loadWares(label, price_from, price_to);
        }
        else 
        {
            check++;
        }
        if (check === filters.length) {
        loadWares("All", price_from, price_to);
        }
    });

}

if (window.location.pathname.substr(1) !== 'cart.html') {
    loadWares("All", 0, 0);
    document.getElementById("apply-button").addEventListener("click", applyFilter);
    document.getElementById("logo-wrapper").addEventListener("click", function() {
    window.location.href="index.html";
    });

    document.getElementById("cart").addEventListener("click", function(){
    window.location.href="cart.html";
});
}
