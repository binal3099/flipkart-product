const initialState = {
    cart : [],
    total : 0
}

export const Cart_Addreducer = (state = initialState, action) =>{

    switch(action.type){
        case "CartAdd" :
            return {
                ...state,
                cart : [...state.cart, action.payload],
                total : state.cart.reduce((acc, {price}) =>{
                    // console.log("price>>>>", price);
                    return acc + price
                }, 0)
            }

        case "TOTAL":
            return{
                ...state,
                total : action.payload
            }
        
        default :
            return state
}
}