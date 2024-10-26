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

//Delete storage



export{
    addToDb,
    getStoreCart
}