//Bài 1
"use strict"
var listData = [
    {
        id: 1,
        name: "Biti's Hunter Running Orange",
        price: 30,
        quantity: 70,
        image: "https://product.hstatic.net/1000230642/product/03900cam__3__14452a21255e40998e6df82f1597086b.jpg"
    },
    {
        id: 2,
        name: "Biti's Hunter X - 2K22 - Midnight",
        price: 40,
        quantity: 50,
        image: "https://product.hstatic.net/1000230642/product/dsuh00502den__2__42dd9d32ec0e4b8eba2a14c9972c4a97.jpg"
    },
    {
        id: 3,
        name: "Biti's Hunter X Festive Frosty-White",
        price: 50,
        quantity: 80,
        image: "https://product.hstatic.net/1000230642/product/dsmh03500trg__7__d2e1b4602c6141a994ff8e628dfddd73_medium.jpg"
    },
    {
        id: 4,
        name: "Biti's Hunter X Festive Washed-Green Grey",
        price: 40,
        quantity: 80,
        image: "https://product.hstatic.net/1000230642/product/dsmh03500xam__3__c13c2efe37f34cdbac3b730acf1dbda6.jpg"
    },
    {
        id: 5,
        name: "Biti's Hunter X Cut-Out Icream",
        price: 30,
        quantity: 80,
        image: "https://product.hstatic.net/1000230642/product/h08900kem__3__b8437d29c527448ab6a6585458331829.jpg"
    },
    {
        id: 6,
        name: "Hunter X Dune Black",
        price: 40,
        quantity: 70,
        image: "https://product.hstatic.net/1000230642/product/dsmh10700den__2__abcd057d73f0459eb3332942f57e41a9.jpg"
    },
    {
        id: 7,
        name: "Biti's Hunter Street Mid Americano",
        price: 40,
        quantity: 80,
        image: "https://product.hstatic.net/1000230642/product/dsmh03600__4__dc63df475b594e8db2c004f8df7566ac.jpg"
    },
    {
        id: 8,
        name: "Biti's Hunter X 1.0 Festive Armor Brown",
        price: 40,
        quantity: 80,
        image: "https://product.hstatic.net/1000230642/product/dsmh07701nau__3__11a2a4f878bc490c942af629ecc82141.jpg"
    },
]
var keyLocalStorageListSP = "DANHSACHSP"
var keyLocalStorageItemCart = "DANHSACHITEMCART"
// Bài 2
function localStorage(keyItem,value) {
    const checkValue = function(value) {
        return (typeof value)
    }
    let listItem = new Map()
    listItem.set(keyItem,value)
    getValueOfLS(listItem.get(keyItem))
}
localStorage(keyLocalStorageListSP,listData)
//Bài 3
function getValueOfLS(values) {
    Array.from(values).forEach(function(value) {
        var html = `
        <div>
            <img width="300px" height="300px"  src="${value.image}" alt="">
            <h3>${value.name}</h3>
            <p>$${value.price}</p>
            <p>quantity: ${value.quantity}</p>
            <i class="fas fa-cart-plus"></i>
        </div>
        `
        renderList(html)
    })
    return values
}
function renderList(views) {
    
    var listStore = document.querySelector(".listStore")
    listStore.innerHTML += views
}
const getProduct = document.querySelectorAll(".fa-cart-plus")
Array.from(getProduct).forEach((btn, index) => {
    
    var count = 0
    btn.onclick =() => {
        
        document.querySelector("#header i").style.color = "red"
        setTimeout(() => {
        document.querySelector("#header i").style.color = "rgb(160, 156, 156)"
            
        }, 500);
        count += 1
        getIdProduct(count,index+1)
        // openCart()
    }
})
function getIdProduct(quantity, id) {
    
    const a = document.createElement("div")
    a.setAttribute("class",`item${id}`)
    a.setAttribute("name","item")
    a.innerHTML =  `
     <div id="info-cart">
             <div class="info">
                 <img src= "${listData[id - 1].image}" width="200px" height="180px" alt="">
                 <h2>${listData[id-1].name}</h2>
                 <p>quantity: ${listData[id - 1].quantity - quantity}</p>
             </div>
             <div class="option-quantity">
                 <p class="reduce">-</p>
                 <p class="quantity">${quantity}</p>
                 <p class="increase">+</p>
             </div>
             <p class="total">$${listData[id - 1].price}</p>
             <p class="total">$${listData[id - 1].price*quantity}</p>
             <div class="clear">
                 <i class="fa fa-times-circle" aria-hidden="true"></i>
             </div>
         </div>
         <div class="pay-product">
             <div class="pay">
                 <p>Total: $${listData[id - 1].price*quantity}</p>
                 <input type="submit" value="Buy">
             </div>
         </div>
        `
    if (quantity === 1) {
        
        document.querySelector("#cart-product").appendChild(a)

    }
    if (quantity > 1) {
        document.querySelector(`.item${id}`).innerHTML = 
        `
     <div id="info-cart">
             <div class="info">
                 <img src= "${listData[id - 1].image}" width="200px" height="180px" alt="">
                 <h2>${listData[id-1].name}</h2>
                 <p>quantity: ${listData[id - 1].quantity - quantity}</p>
             </div>
             <div class="option-quantity">
                 <p class="reduce">-</p>
                 <p class="quantity">${quantity}</p>
                 <p class="increase">+</p>
             </div>
             <p class="total">$${listData[id - 1].price}</p>
             <p class="total">$${listData[id - 1].price*quantity}</p>
             <div class="clear">
                 <i class="fa fa-times-circle" aria-hidden="true"></i>
             </div>
         </div>
         <div class="pay-product">
             <div class="pay">
                 <p>Total: $${listData[id - 1].price*quantity}</p>
                 <input type="submit" value="Buy">
             </div>
         </div>
        `
    }
    const btnAdds = document.querySelectorAll(".increase")
    Array.from(btnAdds).forEach((btnAdd,index) => {
        var itemQuantity = document.querySelectorAll("div[name = 'item'] .quantity")[index].innerHTML

        btnAdd.onclick = () => {
            
            const itemId = document.querySelectorAll("div[name = 'item']")[index].className
            itemQuantity ++
            console.log(itemQuantity)
            console.log(itemId.charAt(itemId.length - 1))
            console.log(document.querySelector(`.item${itemId.charAt(itemId.length - 1)}`))
        
            // document.querySelector("#cart-product").appendChild(document.querySelector(`.item${itemId.charAt(itemId.length - 1)}`))
        }
        })
    const sub = document.querySelectorAll(".reduce")
    
}
function openCart() {

    document.querySelector("#header i").onclick = () => {
        document.querySelector("#cart-product").style.display = "block"
        document.querySelector(".back-shop").style.display = "block"
        document.querySelector(".listStore").style.display = "none"
    }
}
openCart()
function closeCart() {
    document.querySelector("#cart-product").style.display = "none"
    document.querySelector(".back-shop").style.display = "none"
    document.querySelector(".listStore").style.display = "grid"
    document.querySelector(".empty").style.display = "none"
}
