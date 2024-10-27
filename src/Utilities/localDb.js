import Swal from "sweetalert2";


//manage cart
const addToDb=id=>{
    let cart={};
    const storeCart=localStorage.getItem('cart');
    if(storeCart){
        cart=JSON.parse(storeCart);
    }
    if(cart[id]){
        cart[id]=cart[id]+1;
    }
    else{
        cart[id]=1;
    }
    localStorage.setItem('cart',JSON.stringify(cart));
}

//Get cart
const getStoreCart=()=>{
    let cart={};
    const storeCart=localStorage.getItem('cart');
    if(storeCart){
        cart=JSON.parse(storeCart)
    }
    return cart;
}
//Remove data
const removeFromDb = id => {
    let cart={};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart=JSON.parse(storedCart);
        }
        delete cart[id];
        localStorage.setItem('cart',JSON.stringify(cart));
    Swal.fire({
        title: "Product Removed",
        text: `You have removed your cart product`,
        icon: "info"
    });
    
        setTimeout(()=>window.location.reload(),1000);
    }

//Delete storage
const deleteShoppingCart=()=>{
    localStorage.removeItem('cart');
    window.location.reload();
}


export{
    addToDb,
    getStoreCart,
    removeFromDb,
    deleteShoppingCart
}