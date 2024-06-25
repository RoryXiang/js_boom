
const md5 = require('md5')

function getImgFormatConfig(tt) {

    return {
        imgKey: "7cd084941338484aae1ad9425b84077c",
        subKey: "4932caff0ff746eab6f01bf08b70ac45"
    }
}

function getKeyFromURL(tt) {
    return tt.substring(tt.lastIndexOf("/") + 1, tt.length).split(".")[0]
}

function getPictureHashKey(tt) {
    const rt = [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52]
        , Vt = [];
    return rt.forEach(Zt=>{
            tt.charAt(Zt) && Vt.push(tt.charAt(Zt))
        }
    ), Vt.join("").slice(0, 32)
}









const rt = {  // 页面的 defaultWbiKey
    "wbiImgKey": "2590160e9f5142d4a501feda0490f3bd",
    "wbiSubKey": "34ba9c5c4a824b368e9c053be34016bd"
}
const {imgKey: Vt, subKey: Zt} = getImgFormatConfig(rt);

console.log(Vt + Zt)
const Wt = getPictureHashKey(Vt + Zt)

console.log('Wt: ', Wt)

const Jt = "mode=3&pagination_str={\"offset\":\"\"}&plat=1&seek_rpid=&web_location=1315875&w_rid=a46495c00aad4004ae689f399dc4a20a&wts=1709101430"

const w_rid = md5(Jt + Wt)

console.log(w_rid)