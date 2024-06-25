
function call_FridaActivity3() {
    Java.perform(
        function(){
            var session = Java.use("com.xunmeng.basiccomponent.titan.api.helper.ApiNetChannelSelector");
            if (session !== undefined) {
                console.log(`------>定位到类名: ${session}`);
                session.canUseLongLink.implementation = function(titanApiRequest, atomicInteger){
                    console.log(`------>修改: canUseLongLink 返回结果 为 false`);
                    return false;
                }
            }
        }
    )
}



function hook_token() {

    Java.perform(function () {
        // 找到目标类
        // var MainActivity = Java.use("com.xunmeng.pinduoduo.secure.v");
        var MainActivity = Java.use("com.xunmeng.pinduoduo.secure.v");

        if (MainActivity !== undefined) {
            console.log("2. find class");
            MainActivity.new().f.implementation = function (args1, args2) {
                var res = this.f(args1, args2);
                console.log("计算result:" + res);
                return res;
            }
        }
    });
}

function enum_all_class() {
    Java.perform(function() {
        var packagename = "com.xunmeng.pinduoduo.secure";
        console.log("\n[*] enumerating classes...");
        Java.enumerateLoadedClasses({
            onMatch: function(_className) {
                if (_className.startsWith(packagename)) {
                    console.log("[*] found class: " + _className);
                }
            },
            onComplete: function() {
                console.log("[*] class enuemration complete");
            }
        });
    });
};

function enum_all_classloader() {
    Java.perform(function() {
        Java.enumerateClassLoaders({
            "onMatch": function(loader) {
                try {
                    if (loader.findClass('com.xunmeng.pinduoduo.secure.v')) {
                        console.log('ight loader ---------')
                    }
                    // java.classFactory.loader = loader;
                    // java.use('com.xunmeng.pinduoduo.secure.v')
                    // console.log("right loader ---------", loader)
                } catch (e) {

                }
                console.log("classloader ~~~~~~: ", loader);
            },
            "onComplete": function() {
                console.log("success");
            }
        });
    });
}




// enum_all_classloader()
// changeClassLoader()
// setImmediate(enum_all_class)
// enum_all_class()

call_FridaActivity3()  // 执行 js 后在终端执行函数
hook_token()
// loader()