

function hook_sign() {

    Java.perform(function () {
        // 找到目标类
        var MainActivity = Java.use("com.tencent.tbs.qimei.m.a");

        if (MainActivity !== undefined) {
            console.log("2. find class");
            MainActivity.b.implementation = function (args1) {
                var res = this.f(args1);
                console.log("计算result:" + res);
                return res;
            }
        }
    });
}

// hook_sign()

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