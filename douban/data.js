

function decode(r) {
    var a = ef(r, "base64")
        , s = Math.max(Math.floor((a.length - 2 * i) / 3), 0)
        , u = a.slice(s, s + i);
    a = e.concat([a.slice(0, s), a.slice(s + i)]);
    var c = Object(o.hash)(e.concat([u, ef(t)]));
    return n((l = {}, l[c] = a, l))
}


function ef(t, e, r) {
    return a(null, t, e, r)
}

function a(t, e, r, n) {
    if ("number" == typeof e)
        throw new TypeError('"value" argument must not be a number');
    return f(t, e, r)
}

function f(t, e, r) {

    var n = 0 | y(e, r);
    t = o(t, n);
    var a = t.write(e, r);
    return a !== n && (t = t.slice(0, a)),
        t
}

function o(t, e) {
    if (n() < e)
        throw new RangeError("Invalid typed array length");
    return i.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e),
        t.__proto__ = i.prototype) : (null === t && (t = new i(e)),
        t.length = e),
        t
}

function i(t, e, r) {
    if (!(i.TYPED_ARRAY_SUPPORT || this instanceof i))
        return new i(t,e,r);
    if ("number" == typeof t) {
        if ("string" == typeof e)
            throw new Error("If encoding is specified then the first argument must be a string");
        return c(this, t)
    }
    return a(this, t, e, r)
}

function y(t, e) {
    if (i.isBuffer(t))
        return t.length;
    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
        return t.byteLength;
    "string" != typeof t && (t = "" + t);
    var r = t.length;
    if (0 === r)
        return 0;
    for (var n = !1; ; )
        switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
                return r;
            case "utf8":
            case "utf-8":
            case void 0:
                return Y(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
                return 2 * r;
            case "hex":
                return r >>> 1;
            case "base64":
                return V(t).length;
            default:
                if (n)
                    return Y(t).length;
                e = ("" + e).toLowerCase(),
                    n = !0
        }
}