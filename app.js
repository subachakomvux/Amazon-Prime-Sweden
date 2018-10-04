$(function () {

    // 6 categories of products in website correspond to 6 arrays. There are 10 products in each array
    var prodElek = [
        { name: 'Fire TV Recast', price: 1500, id: 1, description: 'Fire TV Recast, over-the-air DVR, 500 GB, 75 hours by Amazon', picture: 'img/Elek_img1.jpg', category: 'Elektronik' },
        { name: 'PERLESMITH TV Wall Mount', price: 1755, id: 2, description: 'TV Wall Mount Bracket Full Motion Dual Articulating Arm for Most 37-70 Inch LED, LCD, OLED, Flat Screen,Plasma TVs up to 132lbs VESA 600x400mm with Tilt, Swivel and Rotation', picture: 'img/Elek_img2.jpg', category: 'Elektronik' },
        { name: 'Roku Express', price: 225, id: 3, description: 'Roku Express | 5X More Powerful HD Streaming', picture: 'img/Elek_img3.jpg', category: 'Elektronik' },
        { name: 'TV 4K-HDR', price: 2220, id: 4, description: 'TCL 55S517 55-Inch 4K Ultra HD Roku Smart LED TV (2018 Model)', picture: 'img/Elek_img4.jpg', category: 'Elektronik' },
        { name: 'Mini Projector', price: 1800, id: 5, description: 'Mini Projector, New Android 7.1 DLP Built-in Battery Wireless Airplay Miracast Screen Share Mirroring Support 1080P Movie Player Portable LED Pocket Pico Projector WiFi USB HDMI Keystone Correction', picture: 'img/Elek_img5.jpg', category: 'Elektronik' },
        { name: 'Samsung TV', price: 2000, id: 6, description: 'Samsung QN65Q7F Flat 65” QLED 4K UHD 7 Series Smart TV 2018', picture: 'img/Elek_img6.jpg0', category: 'Elektronik' },
        { name: 'Sony TV', price: 3225, id: 7, description: 'Sony XBR65X900F 65-Inch 4K Ultra HD Smart LED TV (2018 Model)', picture: 'img/Elek_img7.jpg', category: 'Elektronik' },
        { name: 'Roku Smart TV', price: 1020, id: 8, description: 'TCL 32S305 32-Inch 720p Roku Smart LED TV (2017 Model)', picture: 'img/Elek_img8.jpg', category: 'Elektronik' },
        { name: 'Sony disc player', price: 800, id: 9, description: 'Sony WIRED Streaming Blu-Ray/DVD Disc Player BDPS 1700 (Certified Refurbished)', picture: 'img/Elek_img9.jpg', category: 'Elektronik' },
        { name: 'Skrivbord', price: 2000, id: 10, description: 'desc', picture: 'img/Elek_img510.jpg', category: 'Elektronik' }
    ];
    var prodKlader = [
        { name: 'Baby Girl', price: 500, id: 1, description: 'Adorable Cute Toddler Baby Girl Clothing Mickey Mouse', picture: 'img/Klader_img1.jpg', category: 'Klader' },
        { name: 'Baby Boy', price: 755, id: 2, description: 'Adorable Cute Toddler Baby Boy', picture: 'img/Klader_img2.jpg', category: 'Klader' },
        { name: 'Kläder', price: 325, id: 3, description: 'desc', picture: 'img/Klader_img3.jpg', category: 'Klader' },
        { name: 'Kläder', price: 420, id: 4, description: '', picture: 'img/Klader_img4.jpg', category: 'Klader' },
        { name: 'Kläder ', price: 800, id: 5, description: 'desc', picture: 'img/Klader_img5.jpg', category: 'Klader' },
        { name: 'Kläder', price: 200, id: 6, description: 'desc', picture: 'img/Klader_img6.jpg', category: 'Klader' },
        { name: 'Kläder', price: 225, id: 7, description: 'desc', picture: 'img/Klader_img7.jpg', category: 'Kladert' },
        { name: 'Kläder', price: 120, id: 8, description: 'desc', picture: 'img/Klader_img8.jpg', category: 'Klader' },
        { name: 'Kläder', price: 800, id: 9, description: 'desc', picture: 'img/Klader_img9.jpg', category: 'Klader' },
        { name: 'Kläder', price: 200, id: 10, description: 'desc', picture: 'img/Klader_img10.jpg', category: 'Klader' }
    ];
    var prodLek = [
        { name: 'Lek', price: 500, id: 1, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' },
        { name: 'Lek', price: 55, id: 2, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' },
        { name: 'Lek', price: 125, id: 3, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' },
        { name: 'Lek', price: 230, id: 4, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' },
        { name: 'Lek', price: 80, id: 5, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' },
        { name: 'Lek', price: 280, id: 6, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' },
        { name: 'Lek', price: 255, id: 3, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' },
        { name: 'Lek', price: 250, id: 4, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' },
        { name: 'Lek', price: 30, id: 5, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' },
        { name: 'Lek', price: 990, id: 6, description: 'desc', picture: 'img/Lek_img1.jpg', category: 'Leksaker' }
    ];
    var  prodTel = [
        { name: 'Telefon 1', price: 100, id: 1, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' },
        { name: 'Telefon', price: 75, id: 2, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' },
        { name: 'Telefon', price: 252, id: 3, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' },
        { name: 'Telefon', price: 202, id: 4, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' },
        { name: 'Telefon', price: 85, id: 5, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' },
        { name: 'Telefon', price: 200, id: 6, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' },
        { name: 'Telefon', price: 205, id: 7, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' },
        { name: 'Telefon', price: 200, id: 8, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' },
        { name: 'Telefon', price: 800, id: 9, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' },
        { name: 'Telefon', price: 200, id: 10, description: 'desc', picture: 'img/Tel_img1.jpg', category: 'Telefoner' }
    ];
    var prodSport = [
        { name: 'Sport', price: 450, id: 1, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' },
        { name: 'Sport', price: 70, id: 2, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' },
        { name: 'Sport', price: 625, id: 3, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' },
        { name: 'Sport', price: 620, id: 4, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' },
        { name: 'Sport', price: 800, id: 5, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' },
        { name: 'Sport', price: 30, id: 6, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' },
        { name: 'Sport', price: 265, id: 7, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' },
        { name: 'Sport', price: 420, id: 8, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' },
        { name: 'Sport', price: 800, id: 9, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' },
        { name: 'Sport', price: 450, id: 10, description: 'desc', picture: 'img/Sport_img1.jpg', category: 'Sport' }
    ];
    var  prodHouse = [
        { name: 'Hushåll', price: 500, id: 1, description: 'desc', picture: 'img/House_img1.jpg', category: 'Elektronik' },
        { name: 'Hushåll', price: 55, id: 2, description: 'desc', picture: 'img/House_img1.jpg', category: 'Elektronik' },
        { name: 'Hushåll', price: 125, id: 3, description: 'desc', picture: 'img/House_img1.jpg', category: 'Hemmet' },
        { name: 'Hushåll', price: 220, id: 4, description: 'desc', picture: 'img/House_img1.jpg', category: 'Hemmet' },
        { name: 'Hushåll', price: 300, id: 5, description: 'desc', picture: 'img/House_img1.jpg', category: 'Kontor' },
        { name: 'Hushåll', price: 400, id: 6, description: 'desc', picture: 'img/House_img1.jpg', category: 'Kontor' },
        { name: 'Hushåll', price: 125, id: 7, description: 'desc', picture: 'img/House_img1.jpg', category: 'Hemmet' },
        { name: 'Hushåll', price: 370, id: 8, description: 'desc', picture: 'img/House_img1.jpg', category: 'Hemmet' },
        { name: 'Hushåll ', price: 220, id: 9, description: 'desc', picture: 'img/House_img1.jpg', category: 'Kontor' },
        { name: 'Hushåll', price: 200, id: 10, description: 'desc', picture: 'img/House_img1.jpg', category: 'Kontor' }
    ];



    // empty cart array
    var cart = [];

    // add to an array
    // appendList is a function which has 2 parameters :array and location
    var appendList = function (array, location) {
        // map is an array method
        var template = array.map(function (item, id) {
            // string interpolation ${}
            return `
                 <li class="product col-3">
                    <img src="${item.picture}" alt="${item.name}">
                    <div class="product-content">
                        <h4>
                        ${item.name} -
                        <small> ${item.price}kr</small>
                        </h4>
                        <p>${item.description}</p>
                    </div>
                    <button type="button" id="${item.id}">Köp nu</button>
                </li>            
            `;
        });

        $(location).html(template);
    };

    var addToCart = function (array, id, location) { //location .cart-list
        // look for product with specific "id"
        var a = array.find(function (i) { // The find() method returns the value of the first element in an array that pass a test (provided as a function).
            return i.id === id; // returns the product item 
        });
        // add to cart and display
        cart.push(a);
        var item = `
            <li class ="item" id="${a.id}">
            <h4>${a.name}</h4>
            <button type="button">X</button>
            `;
        $('span.amount').text(cart.length);
        $(location).append(item);
    };

    var removeFromCart = function(array, removedItem) {
       //The splice() method can be used to add new items to an array:
        // The first parameter (2) defines the position where new elements should be added (spliced in).
       //The second parameter (0) defines how many elements should be removed.
        array.splice(removedItem,1)
    };

    var populateCart = function(array,location) {
        var item = `
            <li class="item" id="${array.id}>
                <h4>${array.name}</h4>
                <button type="button">X</button>
            </li>
        `;
        $('span.amount').text(array.length);

    };
    
    // call function appendList to create product list dynamically , arguments are array name and location where list is to be displayed
    appendList(prodElek, $('.product-list-Elek'));
    appendList(prodKlader,$('.product-list-Klader'));
    appendList(prodLek,$('.product-list-Lek'));
    appendList(prodTel,$('.product-list-Tel'));
    appendList(prodSport,$('.product-list-Sport'));
    appendList(prodHouse,$('.product-list-House'));



    // when a particular product button on Elektronik product list is clicked
    $('.product-list-Elek').on('click', 'button', function (event) {
        var id = $(this).attr('id'); // pick attribute "id" of button and store in variable "id"
        //Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
        addToCart(prodElek, +id, $('.cart-list')); // +id bcoz id is a number, can use Number or parseInt methods also
    });
    // when a particular product button on Kläder product list is clicked
    $('.product-list-Klader').on('click', 'button', function (event) {
        var id = $(this).attr('id'); // pick attribute "id" of button and store in variable "id"
        //Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
        addToCart(prodKlader, +id, $('.cart-list')); // +id bcoz id is a number, can use Number or parseInt methods also
    });
    // when a particular product button on Leksaker product list is clicked
    $('.product-list-Lek').on('click', 'button', function (event) {
        var id = $(this).attr('id'); // pick attribute "id" of button and store in variable "id"
        //Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
        addToCart(prodLek, +id, $('.cart-list')); // +id bcoz id is a number, can use Number or parseInt methods also
    });
    // when a particular product button on Telefoner product list is clicked
    $('.product-list-Tel').on('click', 'button', function (event) {
        var id = $(this).attr('id'); // pick attribute "id" of button and store in variable "id"
        //Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
        addToCart(prodTel, +id, $('.cart-list')); // +id bcoz id is a number, can use Number or parseInt methods also
    });
    // when a particular product button on Sport product list is clicked
    $('.product-list-Sport').on('click', 'button', function (event) {
        var id = $(this).attr('id'); // pick attribute "id" of button and store in variable "id"
        //Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
        addToCart(prodSport, +id, $('.cart-list')); // +id bcoz id is a number, can use Number or parseInt methods also
    });
    // when a particular product button on Household product list is clicked
    $('.product-list-House').on('click', 'button', function (event) {
        var id = $(this).attr('id'); // pick attribute "id" of button and store in variable "id"
        //Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
        addToCart(prodHouse, +id, $('.cart-list')); // +id bcoz id is a number, can use Number or parseInt methods also
    });

    // take away from cart
    $('.cart-list').on('click','button',function(e) {

        // item is item i in cart
        var item = $(e.currentTarget).closest('li').remove();
        // take away from cart
        removeFromCart(cart,item);
        // add to cart again
        populateCart(cart,$('.cart-list'));

    });
});