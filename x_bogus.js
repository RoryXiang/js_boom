function getXBogus(originalString){
    // 生成乱码字符串
    var garbledString = getGarbledString(originalString);
    var XBogus = "";
    // 依次生成七组字符串
    for (var i = 0; i <= 20; i += 3) {
        var charCodeAtNum0 = garbledString.charCodeAt(i);
        var charCodeAtNum1 = garbledString.charCodeAt(i + 1);
        var charCodeAtNum2 = garbledString.charCodeAt(i + 2);
        var baseNum = charCodeAtNum2 | charCodeAtNum1 << 8 | charCodeAtNum0 << 16;
        // 依次生成四个字符
        var str1 = short_str[(baseNum & 16515072) >> 18];
        var str2 = short_str[(baseNum & 258048) >> 12];
        var str3 = short_str[(baseNum & 4032) >> 6];
        var str4 = short_str[baseNum & 63];
        XBogus += str1 + str2 + str3 + str4;
    }
    return XBogus;
}

var md5 = require("md5");

// 字符串转换为 Uint8Array 对象，缺失的变量自行补齐
_0x5960a2 = function(a) {
    for (var c = a.length >> 1, e = c << 1, b = new Uint8Array(c), d = 0, f = 0; f < e; ) {
        b[d++] = _0x511f86[a.charCodeAt(f++)] << 4 | _0x511f86[a.charCodeAt(f++)];   // _0x1afb1d[_0x4d22bb++] = _0x19ae48[_0x260a4b['charCodeAt'](_0x2511bf++)] << 0x1a6c + 0x1025 * -0x1 + 0x1 * -0xa43 | _0x19ae48[_0x260a4b['charCodeAt'](_0x2511bf++)];
    }
    return b;
}
//
// // originalString: URL 后面的原始参数
// var uint8Array = _0x5960a2(md5(_0x5960a2(md5(originalString))));
function getGarbledString(r) {
    return  _0x5960a2(md5(_0x5960a2(md5(originalString))));
}

function _0x2f2740(a, c, e, b, d, f, t, n, o, i, r, _, x, u, s, l, v, h, g) {
    let w = new Uint8Array(19);
    return w[0] = a,
        w[1] = r,
        w[2] = c,
        w[3] = _,
        w[4] = e,
        w[5] = x,
        w[6] = b,
        w[7] = u,
        w[8] = d,
        w[9] = s,
        w[10] = f,
        w[11] = l,
        w[12] = t,
        w[13] = v,
        w[14] = n,
        w[15] = h,
        w[16] = o,
        w[17] = g,
        w[18] = i,
        String.fromCharCode.apply(null, w);
}

function _0x46fa4c(a, c) {
    let e, b = [], d = 0, f = "";
    for (let a = 0; a < 256; a++) {
        b[a] = a;
    }
    for (let c = 0; c < 256; c++) {
        d = (d + b[c] + a.charCodeAt(c % a.length)) % 256,
            e = b[c],
            b[c] = b[d],
            b[d] = e;
    }
    let t = 0;
    d = 0;
    for (let a = 0; a < c.length; a++) {
        t = (t + 1) % 256,
            d = (d + b[t]) % 256,
            e = b[t],
            b[t] = b[d],
            b[d] = e,
            f += String.fromCharCode(c.charCodeAt(a) ^ b[(b[t] + b[d]) % 256]);
    }
    return f;
}

function _0x583250(a) {
    return String.fromCharCode(a);
}

function _0x2b6720(a, c, e) {
    return _0x583250(a) + _0x583250(c) + e;
}

const originalString = "device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=7214696032289000759&cursor=245&count=5&item_type=0&rcFT=&pc_client_type=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=112.0.0.0&browser_online=true&engine_name=Blink&engine_version=112.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7221790852955227685"
const x = getXBogus(originalString)
console.log(x)