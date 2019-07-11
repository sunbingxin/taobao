import newFly from "@/utils/require.js"

export function getDetails(payload){
    return newFly.post("/product/info/1.0.0",payload)
}

export function getDefaults(payload){
    return newFly.post("/product/sku/attrs/1.0.0",payload)
}

export function getImgs(payload){
    return newFly.post("/product/detailPicture/1.0.0",payload)
}

export function getAlers(payload){
    return newFly.post("/shipping/templates/info/1.0.0",payload)
}

export function getSearchs(payload){
    return newFly.post("/product/coupon/productCouponList/1.0.0",payload)
}