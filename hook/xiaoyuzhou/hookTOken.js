

function hook_sign() {

    Java.perform(function () {
        // 找到目标类
        // var MainActivity = Java.use("h.a.a.b.i.a");
        Java.choose('f.i.c.q7', {
            onMatch: function (instance) {
                console.log(instance)
                // var value = instance.toString()
                // console.log("11111", value)
                // console.log(111111)
                instance.b.implementation = function (a1, a2) {
                    console.log("fb", "a1:", a1, "a2: ", a2)
                    return this.a(a1,a2)
                }
                instance.c.implementation = function (a1, a2) {
                    console.log("fc", "a1:", a1, "a2: ", a2)
                    return this.a(a1,a2)
                }
            }, onComplete: function (){}})
    });
}
//
hook_sign()


// function hook_token() {
//
//     Java.perform(function () {
//         // 找到目标类
//         var MainActivity = Java.use("h.a.a.b.i.a");
//
//         if (MainActivity !== undefined) {
//             console.log("2. find class", MainActivity);
//             // MainActivity.a.implementation = function () {
//
//                 // var res = this.a();
//                 // console.log("a1:", args1, "a2:", args2)
//                 // console.log("计算result:" + res);
//                 // if (args2.includes("Key")) {
//                 //     console.log("a1:", args1, "a2:", args2)
//                 //     console.log("计算result:" + res);
//                 // }
//
//             //     return res;
//             // }
//             var woker = new MainActivity()
//             var value = MainActivity.toString()
//             console.log("str", value)
//         }
//     });
// }
//
//
// hook_token()


function enum_all_class() {
    Java.perform(function() {
        var packagename = "com.maidu.gkld";
        console.log("\n[*] enumerating classes...");
        Java.enumerateLoadedClasses({
            onMatch: function(_className) {
                if (_className.startsWith("com.tencent.tbs.qimei.")) {
                    console.log("[*] found class: " + _className);
                }
            },
            onComplete: function() {
                console.log("[*] class enuemration complete");
            }
        });
    });
};


// enum_all_class()