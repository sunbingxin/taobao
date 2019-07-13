import require from '../utils/require'
export function cheap(payload){
    return require.post('user/coupon/userCouponInfoList/1.0.0',{state:1})
}
export function add(payload){
    return require.post('user/auth/editBase64/1.0.0',{
        'trueName': payload.trueName,
        'idNumber': payload.idNumber,
        'idReverseImgUrl':payload.idReverseImgUrl,
        'idFrontImgUrl':payload.idFrontImgUrl
    })
}
export function phone(payload){
    return require.post('user/auth/select/1.0.0')
}
export function address(payload){
    return require.post('user/address/addAddress/1.0.0',{
        'provinceId': payload.provinceId,
        'provinceName': payload.lists[0],
        'cityId': payload.cityId,
        'cityName': payload.lists[1],
        'areaId': payload.areaId,
        'areaName': payload.lists[2],
        'address': payload.address,
        'consignee': payload.people,
        'consigneePhone': payload.phone,
        'addressTag': payload.ind,
        'state': payload.open
    })
}