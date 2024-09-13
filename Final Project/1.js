fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            displayData(json);
        });

function displayData(json) {
    document.getElementById("main").innerHTML = '';

    json.forEach((el) => {
        let div = document.createElement("div");
        div.className = "div1";

        let text = document.createElement("h1");
        text.innerHTML = el.category;
        text.className = "h1";

        let text1 = document.createElement("h3");
        text1.innerHTML = el.title;

        let text2 = document.createElement("h4");
        text2.innerHTML = "$ " + el.price;

        let img = document.createElement("img");
        img.setAttribute("src", el.image);
        img.className = "img-1";

        let input1 = document.createElement("input");
        input1.className = "input1";
        let input2 = document.createElement("input");
        input2.className = "input2";

        let btn2 = document.createElement("button");
        btn2.innerText = "Edit";
        btn2.className = "btn-edit";

        let btn3 = document.createElement("button");
        btn3.innerText = "Update";
        btn3.className = "btn-update";

        let btn4 = document.createElement("button");
        btn4.innerText = "Delete";
        btn4.className = "btn-delete";

        let btn5 = document.createElement("button");
        btn5.innerText = "Add to Cart";
        btn5.className = "btn-cart";

        div.append(text, text1, text2, img, input1, input2, btn2, btn3, btn5);
        document.getElementById("main").append(div);

        btn2.addEventListener("click", function () {
            input1.value = text1.innerText;
            input1.style.display = "block";
            btn3.style.display = "inline";

            input2.value = text2.innerText;
            input2.style.display = "block";
            btn3.style.display = "inline";
        });

        btn3.addEventListener("click", function () {
            let newValue = input1.value;
            text1.innerText = newValue;
            input1.style.display = "none";

            let newValue2 = input2.value;
            text2.innerText = "$" + newValue2;
            input2.style.display = "none";

            updateCart(el.id, newValue, newValue2);
            });

            btn4.addEventListener("click", function () {
            div.remove();
            });

            btn5.addEventListener("click", () => {
            addToCart(el);
            });
    });
}

function addToCart(item) {
    let cartItems = document.getElementById("cart-items");

    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.id = "cart-item-" + item.id;

    let itemDetails = document.createElement("span");
    itemDetails.innerHTML = `${item.title} - $${item.price}`;

    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "btn-remove";
    removeButton.onclick = function () {
        cartItem.remove();
        removeFromCart(item);
    };

    cartItem.append(itemDetails, removeButton);
    cartItems.appendChild(cartItem);

    saveToLocalStorage(item);
}

function saveToLocalStorage(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let obj = {
        id: item.id, 
        title: item.title,
        price: item.price
    };
    cart.push(obj);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(item) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(cartItem => cartItem.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart(id, newTitle, newPrice) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach(cartItem => {
        if (cartItem.id === id) {
            cartItem.title = newTitle;
            cartItem.price = newPrice;
        }
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    let cartItemElement = document.getElementById("cart-item-" + id);
    if (cartItemElement) {
        cartItemElement.querySelector("span").innerHTML = `${newTitle} - ${newPrice}`;
    }
}
