Java.perform(function() {
    // Function to hook is defined here
    var clz = Java.use('java.net.URL');
    var androidLogClz = Java.use("android.util.Log");
    var exceptionClz = Java.use("java.lang.Exception");
    var urlConstruct = clz.$init.overload("java.lang.String");
    urlConstruct.implementation = function(url) {
        if(url.indexOf("rank")>-1 ){
            console.log("url is:",url)
            printStacks(androidLogClz, exceptionClz, "java.net.URL.new(java.lang.String:"+ url +")");
        }
        var result = urlConstruct.call(this, url);

        return result;
    };
});