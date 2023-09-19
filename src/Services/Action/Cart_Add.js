export const Cart_Add = (data) =>{
    return {
        type : "CartAdd",
        payload : data
    }
}

export const Cart_total = (t) =>{

    return {
        type :"TOTAL",
        payload: t
    }
}