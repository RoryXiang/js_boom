let Library = "libjiagu_64.so";
let Arm64Pattern = "00 03 3f d6 a0 06 00 a9";
let PackageName = ProcessName();


function ProcessName() {
    let openPtr = Module.getExportByName('libc.so', 'open');
    let open = new NativeFunction(openPtr, 'int', ['pointer', 'int']);
    let readPtr = Module.getExportByName('libc.so', 'read');
    let read = new NativeFunction(readPtr, 'int', ['int', 'pointer', 'int']);
    let closePtr = Module.getExportByName('libc.so', 'close');
    let close = new NativeFunction(closePtr, 'int', ['int']);
    let path = Memory.allocUtf8String('/proc/self/cmdline');
    let fd = open(path, 0);
    if (fd != -1) {
        let buffer = Memory.alloc(0x1000);
        let result = read(fd, buffer, 0x1000);
        close(fd);
        result = ptr(buffer).readCString();
        return result;
    }
    return -1;
}
Interceptor.attach(Module.getExportByName(null, "android_dlopen_ext"), {
    onEnter: function(args) {
        let AllLib = args[0].readCString();
        if (AllLib.indexOf(Library) != -1) {
            this.HookJiagu = true;
        }
    },
    onLeave: function(args) {
        if (this.HookJiagu) {
            let Jiagu = Process.findModuleByName(Library);
            Memory.scan(Jiagu.base, Jiagu.size, Arm64Pattern, {
                onMatch: function(found, sizes) {
                    Interceptor.attach(found, function(args) {
                        Memory.protect(this.context.x0, Process.pointerSize, 'rwx');
                        try {
                            let arg0 = this.context.x0.readCString()
                            if (arg0 && (arg0.indexOf("/proc/") != -1 && arg0.indexOf("/maps") != -1)) {
                                this.context.x0.writeUtf8String("/proc/self/cmdline")
                            }
                        } catch (e) {}
                    })
                },
                onComplete: function(msg) {
                    console.log("Frida Detection Bypassed");
                }
            })
        }
    }
})


function hookSign() {
    Java.perform(function () {
        var main = Java.use('com.pengda.mobile.hhjz.api.o');
        console.log(`----找到类---------`)
        // var methods = main.class.getDeclaredMethods();
        // for(var j = 0; j < methods.length; j++){
        //     var methodName = methods[j].getName();
        //     if (methodName.includes("e")) {
        //         console.log('------------------meth', methodName);
        //     }
        // }
        main.e.implementation = function (r2) {
            console.log("sign 计算e 的入参 r2：", r2)
            var res = this.e(r2)
            console.log("获取到结果～～～～～sign： ", JSON.stringify(res))
            return res
        }

        main.c.implementation = function (r4, r5) {
            console.log("c函数 的 入 参：r4, r5: ", r4, r5)
            var res = this.c(r4, r5)
            console.log("sign 计算e 的入惨： ", JSON.stringify(res))
            return res
        }
    })
}

//
// function


// hookSign()

// function hookNSing(classname) {
//     Java.perform(function () {
//         var main = Java.use(classname);
//         console.log(`----找到类----${classname}------`)
//         main.b.implementation = function (a1) {
//             console.log(a1)
//             var res = this.b(a1)
//             console.log("a 获取到结果～～～～～： ", JSON.stringify(res))
//             return res
//         }
//     })
// }
//
// function hookNonce() {
//     Java.perform(function () {
//         var RS3 = Java.use('RS3');
//
//         // Hook a方法
//         RS3.a.implementation = function(rs3, str, j, j2, i) {
//             console.log('[*] RS3.a called');
//
//             // 获取参数值
//             var rs3Instance = rs3;
//             var strValue = str.toString();
//             var jValue = j.toNumber();
//             var j2Value = j2.toNumber();
//             var iValue = i.toNumber();
//
//             console.log('Parameters:');
//             console.log('rs3:', rs3Instance);
//             console.log('str:', strValue);
//             console.log('j:', jValue);
//             console.log('j2:', j2Value);
//             console.log('i:', iValue);
//
//             // 调用原始的a方法
//             var result = this.a(rs3, str, j, j2, i);
//
//             console.log('[*] Result:', result);
//
//             return result;
//         }
//     })
// }
//
//
// // hookHttp()
// // hookXSing()
//
// function enum_all_class() {
//     Java.perform(function() {
//         // var packagename = "com.pengda.mobile.hhjz";
//         console.log("\n[*] enumerating classes...");
//         Java.enumerateLoadedClasses({
//             onMatch: function(_className) {
//                 if (_className.includes("Eq1")) {
//                     console.log("[*] found class: " + _className);
//
//                 }
//             },
//             onComplete: function() {
//                 console.log("[*] class enuemration complete");
//             }
//         });
//     });
// };
//
function enum_all_classloader() {
    Java.perform(function() {
        // var packagename = "com.pengda.mobile.hhjz";
        console.log("\n[-----] enumerating classloader...");
        Java.enumerateClassLoaders({
            onMatch: function(loader) {
                // console.log('[****]:', loader)
                try {
                    if (loader.findClass('RS3')) {
                        Java.classFactory.loader = loader
                        console.log('======find class loader and replace=============', loader)
                    }
                }catch (e) {

                }
                // let JNICLibrary = Java.use("com.taobao.wireless.security.adapter.JNICLibrary");
                // JNICLibrary["doCommandNative"].implementation = function (i, objArr) {
                //     console.log(`JNICLibrary.doCommandNative is called: i=${i}, objArr=${objArr}`);
                //     let result = this["doCommandNative"](i, objArr);
                //     console.log(`JNICLibrary.doCommandNative result=${result}`);
                //     return result;
                // };

                // console.log(loader)
            },
            onComplete: function() {
                console.log("[*] class enuemration complete");
            }
        });
    });
};

// enum_all_classloader()
//
//
// function  tmp() {
//     // Use Frida to hook into the 'Eq1' class and the 'a' method
//     Java.perform(function () {
//         // Attempt to locate the class 'Eq1'
//         var Eq1 = Java.use('Eq1');
//
//         // Hook the 'a' method which is static and accepts an instance of 'C0274Dq1'
//         Eq1.a.implementation = function (c0274Dq1) {
//             // Log the call and arguments
//             console.log('Eq1.a called');
//             console.log('Argument a:', c0274Dq1.a.value);
//             console.log('Argument b:', c0274Dq1.b.value);
//
//             // Call the original method
//             var result = this.a(c0274Dq1);
//
//             // Log the result
//             console.log('Result:', result);
//
//             // Return the result
//             return result;
//         };
//     });
//
// }
//
//
// function  hook_nonce() {
//     Java.perform(function () {
//         // Attempt to locate the class 'Eq1'
//         var RS3 = Java.use('RS3.RS3');
//
//         // Hook a方法
//         RS3.a.implementation = function(rs3, str, j, j2, i) {
//             console.log('[*] RS3.a called');
//
//             // 获取参数值
//             var rs3Instance = rs3;
//             var strValue = str.toString();
//             var jValue = j.toNumber();
//             var j2Value = j2.toNumber();
//             var iValue = i.toNumber();
//
//             console.log('Parameters:');
//             console.log('rs3:', rs3Instance);
//             console.log('str:', strValue);
//             console.log('j:', jValue);
//             console.log('j2:', j2Value);
//             console.log('i:', iValue);
//
//             // 调用原始的a方法
//             var result = this.a(rs3, str, j, j2, i);
//
//             console.log('[*] Result:', result);
//
//             return result;
//         }
//     });
// }
//
//
