
fetch("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response);

            return response.json()
        })
        .then((data) => {
            console.log(data);

            data.forEach((el) => {

                let div = document.createElement("div");
                div.className = "main"
                
                let img = document.createElement("img");
                img.className = "img";
                img.src = el.image;

                let div2 = document.createElement("div");
                div2.className = "div2"

                let id = document.createElement("h3");
                id.textContent = "ID : " + el.id;
                id.className = "id";

                let category = document.createElement("h3");
                category.textContent = "Category : " + el.category;
                category.className = "id";

                let title = document.createElement("h3");
                title.textContent = "Title : " + el.title;
                title.className = "id";

                let price = document.createElement("h3");
                price.textContent = "Price : " + el.price;
                price.className = "id";

                let rate = document.createElement("h3");
                rate.textContent = "Rating : " + el.rating.rate;
                rate.className = "id";

                let count = document.createElement("h3");
                count.textContent = "Last month bought : " + el.rating.count + "+";
                count.className = "id";

                div2.append(id,title,category,price,rate,count)
                div.append(img,div2);
                document.body.append(div);
        
            });
        });
