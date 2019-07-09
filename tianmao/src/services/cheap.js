import require from '../utils/require'
export function cheap(payload){
    return require.post('user/coupon/userCouponInfoList/1.0.0',{state:1})
}
export function add(payload){
    return require.post('user/auth/editBase64/1.0.0',{
        
    })
}
export function phone(payload){
    return require.post('user/auth/select/1.0.0')
}
export function address(payload){
    return require.post('user/address/addAddress/1.0.0',{
        'provinceId': 130000,
        'provinceName': 河北省,
        'cityId': 130300,
        'cityName': 秦皇岛市,
        'areaId': 130304,
        'areaName': 北戴河区,
        'address': 12312,
        'consignee': 打的,
        'consigneePhone': 18231461015,
        'addressTag': 2,
        'state': 0
    })
}