import newFly from "@/utils/require.js"

export function getDetails(payload){
    return newFly.post("/api/open/product/info/1.0.0",payload)
}

export function getDefaults(payload){
    return newFly.post("/api/open/product/sku/attrs/1.0.0",payload)
}

export function getImgs(payload){
    return newFly.post("/api/open/product/detailPicture/1.0.0",payload)
}

export function getAlers(payload){
    return newFly.post("/api/open/shipping/templates/info/1.0.0",payload)
}

export function getSearchs(payload){
    return newFly.post("/api/open/product/coupon/productCouponList/1.0.0",payload)
}