import newFly from "@/utils/require.js";
export function buyShops(payload){
    return newFly.post("/order/place/order/1.0.0",payload);
}