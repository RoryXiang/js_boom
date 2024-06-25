function UID() {
    var o = (new Date).getTime();
    return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (o + 16 * Math.random()) % 16 | 0;
            return o = Math.floor(o / 16),
                ("x" === e ? t : 3 & t | 8).toString(16)
        })
}

const uid = UID()
console.log(uid)
