
function hook_java() {
    Java.perform(function (){
        const login = Java.use('com.github.lastingyang.androiddemo.Activity.LoginActivity');
        login.a.overload('java.lang.String', 'java.lang.String').implementation = function (str1, str2) {
            const res = this.a(str1, str2)
            console.log('login: ', str1, str2, res)
            return res
        }

        const activity1 = Java.use('com.github.lastingyang.androiddemo.Activity.FridaActivity1')
        activity1.a.implementation = function (arry) {
            return 'R4jSLLLLLLLLLLOrLE7/5B+Z6fsl65yj6BgC6YWz66gO6g2t65Pk6a+P65NK44NNROl0wNOLLLL='
        }

    })
}

function hook_activity2() {
    Java.perform(function (){
        const activity2 = Java.use('com.github.lastingyang.androiddemo.Activity.FridaActivity2')
        activity2.setStatic_bool_var()  // 静态方法 static 可以直接调用

        //调用非静态函数  先找到对象，然后访问对象的属性
        Java.choose('com.github.lastingyang.androiddemo.Activity.FridaActivity2', {
            onMatch: function (instance) {
                instance.setBool_var()
            },
            onComplete() {}
        });
    })
}

function hook_activity3() {
    Java.perform(function (){
        const activity3 = Java.use('com.github.lastingyang.androiddemo.Activity.FridaActivity3')
        activity3.static_bool_var.value = true  // 静态属性 static 直接赋值
        console.log(activity3.static_bool_var.value)
        //调用非静态函数  先找到对象，然后访问对象的属性
        Java.choose('com.github.lastingyang.androiddemo.Activity.FridaActivity3', {
            onMatch: function (instance) {
                instance.bool_var.value = true
                instance._same_name_bool_var.value = true  // 对象拥有同名的属性和方法的时候，需要在属性前加_来做区别
                console.log(instance.static_bool_var.value, instance._same_name_bool_var.value)
            },
            onComplete() {}
        });
    })
}

function hook_InnerClasses(){
    Java.perform(function () {
        const InnerClasses = Java.use(
            'com.github.lastingyang.androiddemo.Activity.FridaActivity4$InnerClasses')  // TODO 内部类用$链接
        console.log(InnerClasses)
        InnerClasses.check1.implementation = function() {
            console.log("InnerClasses.check1:");
            return true;
        }
        InnerClasses.check2.implementation = function () {
            return true
        }
        InnerClasses.check3.implementation = function () {
            return true
        }
        InnerClasses.check4.implementation = function () {
            return true
        }
        InnerClasses.check5.implementation = function () {
            return true
        }
        InnerClasses.check6.implementation = function () {
            return true
        }

    })
}

function hook_mul_function() {
    Java.perform(function () {
        const className = 'com.github.lastingyang.androiddemo.Activity.FridaActivity4$InnerClasses'
        const InnerClasses = Java.use(className)  // TODO 内部类用$链接
        const allMethods = InnerClasses.class.getDeclaredMethods()  // TODO 获取类的所有方法
        for (var i = 0; i <allMethods.length; i ++) {
            var method = allMethods[i].toString()
            var methodName = method.substring(method.indexOf(className) + className.length + 1, method.indexOf('('))
            console.log(methodName)
            InnerClasses[methodName].implementation = function () {
                console.log(this)
                return true
            }
        }

    })
}



hook_java()