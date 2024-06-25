function hook_Activity() {
    Java.perform(function () {
        var LoginActivity = Java.use(
            "com.github.lastingyang.androiddemo.Activity.LoginActivity");
        //hook 一个函数
        LoginActivity.a.overload('java.lang.String', 'java.lang.String')
            .implementation = function (str, str2) {
            var result = this.a(str, str2); //调用被hook前的函数
            console.log("LoginActivity.a:", str, str2, result);
            return result;
        }

        var FridaActivity1 = Java.use(
            "com.github.lastingyang.androiddemo.Activity.FridaActivity1"
        );
        FridaActivity1.a.implementation = function (arg1) {
            console.log("FridaActivity1.arg1:", arg1);
            arg1 = this.b("Imyang");
            var result = this.a(arg1);
            console.log("FridaActivity1.a:", result);
            result = "R4jSLLLLLLLLLLOrLE7/5B+Z6fsl65yj6BgC6YWz66gO6g2t65Pk6a+P65NK44NNROl0wNOLLLL=";
            console.log("FridaActivity1.a:", result);
            return result;
        }
        console.log("hook_Activity");
    });
}

function call_FridaActivity2() {
    Java.perform(function () {
        var FridaActivity2 = Java.use(
            "com.github.lastingyang.androiddemo.Activity.FridaActivity2");
        console.log("FridaActivity2.static_bool_var:", FridaActivity2.static_bool_var.value);
        FridaActivity2.setStatic_bool_var();  //调用静态函数
        console.log("FridaActivity2.static_bool_var:", FridaActivity2.static_bool_var.value);

        //调用非静态函数
        Java.choose("com.github.lastingyang.androiddemo.Activity.FridaActivity2", {
            onMatch : function(instance) {
                console.log("FridaActivity2.bool_var:", instance.bool_var.value);
                instance.setBool_var();
                console.log("FridaActivity2.bool_var:", instance.bool_var.value);
            }, onComplete : function() {
            }
        })
    });
}

function call_FridaActivity3() {
    Java.perform(function () {
        var FridaActivity3 = Java.use("com.github.lastingyang.androiddemo.Activity.FridaActivity3");
        console.log("FridaActivity3.static_bool_var:", FridaActivity3.static_bool_var.value);
        FridaActivity3.static_bool_var.value = true;  //设置静态成员变量的值
        console.log("FridaActivity3.static_bool_var:", FridaActivity3.static_bool_var.value);

        Java.choose("com.github.lastingyang.androiddemo.Activity.FridaActivity3", {
            onMatch : function(instance) {
                console.log("FridaActivity3.bool_var:", instance.bool_var.value);
                instance.bool_var.value = true;
                console.log("FridaActivity3.bool_var:", instance.bool_var.value);

                console.log("FridaActivity3._same_name_bool_var:", instance._same_name_bool_var.value);
                instance._same_name_bool_var.value = true;
                console.log("FridaActivity3._same_name_bool_var:", instance._same_name_bool_var.value);
            }, onComplete : function() {
            }
        })
    });
}

function hook_InnerClasses() {
    Java.perform(function() {
        var InnerClasses = Java.use(
            "com.github.lastingyang.androiddemo.Activity.FridaActivity4$InnerClasses")
        InnerClasses.check1.implementation = function() {
            console.log("InnerClasses.check1:");
            return true;
        }
        InnerClasses.check2.implementation = function() {
            console.log("InnerClasses.check2:");
            return true;
        }
        InnerClasses.check3.implementation = function() {
            console.log("InnerClasses.check3:");
            return true;
        }
        InnerClasses.check4.implementation = function() {
            console.log("InnerClasses.check4:");
            return true;
        }
        InnerClasses.check5.implementation = function() {
            console.log("InnerClasses.check5:");
            return true;
        }
        InnerClasses.check1.implementation = function() {
            console.log("InnerClasses.check1:");
            return true;
        }
        console.log("hook_InnerClasses");
    });
}

function hook_dyn_dex() {
    Java.perform(function() {
        Java.enumerateClassLoaders({
            onMatch : function(loader) {
                try {
                    if (loader.findClass("com.example.androiddemo.Dynamic.DynamicCheck")) {
                        Java.classFactory.loader = loader;
                        console.log(loader);
                    }
                } catch (error) {

                }
            }, onComplete : function() {
            }
        });
        var DynamicCheck = Java.use("com.example.androiddemo.Dynamic.DynamicCheck");
        DynamicCheck.check.implementation = function() {
            var result = this.check();
            console.log("DynamicCheck.check:", result);
            return true;
        }
    })
}

function hook_frida_6() {
    Java.perform(function() {
        var Frida6Class0 = Java.use(
            "com.github.lastingyang.androiddemo.Activity.Frida6.Frida6Class0");
        Frida6Class0.check.implementation = function() {
            console.log("Frida6Class0.check:");
            return true;
        }
        var Frida6Class1 = Java.use(
            "com.github.lastingyang.androiddemo.Activity.Frida6.Frida6Class1");
        Frida6Class1.check.implementation = function() {
            console.log("Frida6Class1.check:");
            return true;
        }
        var Frida6Class2 = Java.use(
            "com.github.lastingyang.androiddemo.Activity.Frida6.Frida6Class2");
        Frida6Class2.check.implementation = function() {
            console.log("Frida6Class2.check:");
            return true;
        }
    })
}

function main() {
    hook_Activity();
    hook_InnerClasses();
    hook_dyn_dex();
    hook_frida_6();
}
setImmediate(main);