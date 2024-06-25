

R = e => {
    let {
        isMobile: t,
        threadId: r,
        type: n,
        uid: o
    } = e;
    console.log("genMessageId params", {
        type: n,
        isMobile: t,
        uid: o,
        threadId: r
    });
    let {
        day: i,
        hour: a,
        minute: s,
        month: c,
        second: u,
        year: l
    } = O(), f = A(o, r), d = E(2);
    return "".concat(n).concat(f).concat(l).concat(c).concat(i).concat(a).concat(s).concat(u).concat(t ? "w" : "p").concat(d)
}

O = e => {
    let {
        day: t,
        month: r,
        year: n
    } = x(e = e || new Date);
    return {
        year: n,
        month: r,
        day: t,
        hour: l(e.getHours()),
        minute: l(e.getMinutes()),
        second: l(e.getSeconds())
    }
}

x = e => {
    let t = l((e = e || new Date).getFullYear() - 2023);
    return {
        year: t = 2 > (0, fdp)(t) ? "0".concat(t) : t,
        month: l(e.getMonth() + 1),
        day: l(e.getDate())
    }
}

fdp = e=>Array.isArray(e) || "string" == typeof e ? e.length : "object" == typeof e && null !== e ? Object.keys(e).length : 0

let l = e => {

    let t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        r = t.length,
        n = +e,
        o = [];
    do {
        let e = n % r;
        n = (n - e) / r, o.unshift(t[e])
    } while (n);
    return o.join("")
}

function u(e) {
    let t = [];
    for (let e = 0; e < 256; e++) {
        let r = e;
        for (let e = 0; e < 8; e++) r = 1 & r ? r >> 1 ^ 40961 : r >> 1;
        t[e] = r
    }
    let r = 65535;
    for (let n = 0; n < e.length; n++) {
        let o = (r ^ e.charCodeAt(n)) & 255;
        r = r >> 8 ^ t[o]
    }
    return r
}

A = (e, t) => {
    console.log("ttt: ", t)
    let r = Date.now(),
        n = (0, B5)({
            start: 0,
            end: 1e5
        });
    return u("".concat(e).concat(t).concat(r).concat(n)).toString(16).toLowerCase()
}

function B5() {
    return c
}

function c() {
    let {
        end: e = 100,
        start: t = 0
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return Math.floor(t + Math.random() * (e - t))
}

E = e => l(Math.floor(Math.random() * 62 ** e))


console.log(R({
    type: "U",
    isMobile: false,
    threadId: null,
    uid: '189373'
}))
