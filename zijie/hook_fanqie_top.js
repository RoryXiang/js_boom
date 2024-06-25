
var LOG = function (input, kwargs) {
    kwargs = kwargs || {};
    var logLevel = kwargs['l'] || 'log', colorPrefix = '\x1b[3', colorSuffix = 'm';
    if (typeof input === 'object')
        input = JSON.stringify(input, null, kwargs['i'] ? 2 : null);
    if (kwargs['c'])
        input = colorPrefix + kwargs['c'] + colorSuffix + input + Color.RESET;
    console[logLevel](input);
};


var Color = {
    RESET: "\x1b[39;49;00m", Black: "0;01", Blue: "4;01", Cyan: "6;01", Gray: "7;11", Green: "2;01", Purple: "5;01", Red: "1;01", Yellow: "3;01",
    Light: {
        Black: "0;11", Blue: "4;11", Cyan: "6;11", Gray: "7;01", Green: "2;11", Purple: "5;11", Red: "1;11", Yellow: "3;11"
    }
};


var so_name;
function hook_dlopen(soName = '') {
    Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"),
        {
            onEnter: function (args) {
                var pathptr = args[0];
                if (pathptr !== undefined && pathptr != null) {
                    var path = ptr(pathptr).readCString();
                    if (path.indexOf(soName) >= 0) {
                        // locate_init()
                        args[0].writeUtf8String('/system/lib64/libc.so');
                        console.log("write success");
                    }
                }
            }
        }
    );
}
// 0xb594d000
var show=true
function anti_ssl(){
    if(show){
        console.log("");
        console.log("[.] Android Cert Pinning Bypass");
        show=false
    }


    var CertificateFactory = Java.use("java.security.cert.CertificateFactory");
    var FileInputStream = Java.use("java.io.FileInputStream");
    var BufferedInputStream = Java.use("java.io.BufferedInputStream");
    var X509Certificate = Java.use("java.security.cert.X509Certificate");
    var KeyStore = Java.use("java.security.KeyStore");
    var TrustManagerFactory = Java.use("javax.net.ssl.TrustManagerFactory");
    var SSLContext = Java.use("javax.net.ssl.SSLContext");
    var X509TrustManager = Java.use('javax.net.ssl.X509TrustManager');
    //var is_android_n = 0;

    //--------
    // console.log("[.] TrustManagerImpl Android 7+ detection...");
    // Android 7+ TrustManagerImpl
    // The work in the following NCC blogpost was a great help for this hook!
    // hattip @AdriVillaB :)
    // https://www.nccgroup.trust/uk/about-us/newsroom-and-events/blogs/2017/november/bypassing-androids-network-security-configuration/
    try {
        var TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');
        // https://github.com/google/conscrypt/blob/c88f9f55a523f128f0e4dace76a34724bfa1e88c/platform/src/main/java/org/conscrypt/TrustManagerImpl.java#L650
        TrustManagerImpl.verifyChain.implementation = function(untrustedChain, trustAnchorChain, host, clientAuth, ocspData, tlsSctData) {
            // console.log("[+] (Android 7+) TrustManagerImpl verifyChain() called. Not throwing an exception.");
            // Skip all the logic and just return the chain again :P
            //is_android_n = 1;
            return untrustedChain;
        }

        PinningTrustManager.checkServerTrusted.implementation = function() {
            // console.log("[+] Appcelerator checkServerTrusted() called. Not throwing an exception.");
        }
    } catch (err) {
        // console.log("[-] TrustManagerImpl Not Found");
    }

    //if (is_android_n === 0) {
    //--------
    // console.log("[.] TrustManager Android < 7 detection...");
    // Implement a new TrustManager
    // ref: https://gist.github.com/oleavr/3ca67a173ff7d207c6b8c3b0ca65a9d8
    var TrustManager = Java.registerClass({
        name: 'com.sensepost.test.TrustManager',
        implements: [X509TrustManager],
        methods: {
            checkClientTrusted: function(chain, authType) {},
            checkServerTrusted: function(chain, authType) {},
            getAcceptedIssuers: function() {
                return [];
            }
        }
    });

    // Prepare the TrustManagers array to pass to SSLContext.init()
    var TrustManagers = [TrustManager.$new()];

    // Get a handle on the init() on the SSLContext class
    var SSLContext_init = SSLContext.init.overload(
        '[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom');

    try {
        // Override the init method, specifying our new TrustManager
        SSLContext_init.implementation = function(keyManager, trustManager, secureRandom) {
            // console.log("[+] Overriding SSLContext.init() with the custom TrustManager android < 7");
            SSLContext_init.call(this, keyManager, TrustManagers, secureRandom);
        };
    } catch (err) {
        // console.log("[-] TrustManager Not Found");
    }
    //}

    //-------
    // console.log("[.] OkHTTP 3.x detection...");
    // OkHTTP v3.x
    // Wrap the logic in a try/catch as not all applications will have
    // okhttp as part of the app.
    try {
        var CertificatePinner = Java.use('okhttp3.CertificatePinner');
        // console.log("[+] OkHTTP 3.x Found");
        CertificatePinner.check.overload('java.lang.String', 'java.util.List').implementation = function() {
            // console.log("[+] OkHTTP 3.x check() called. Not throwing an exception.");
        };
    } catch (err) {
        // If we dont have a ClassNotFoundException exception, raise the
        // problem encountered.
        // console.log("[-] OkHTTP 3.x Not Found")
    }

    //--------
    // console.log("[.] Appcelerator Titanium detection...");
    // Appcelerator Titanium PinningTrustManager
    // Wrap the logic in a try/catch as not all applications will have
    // appcelerator as part of the app.
    try {
        var PinningTrustManager = Java.use('appcelerator.https.PinningTrustManager');
        // console.log("[+] Appcelerator Titanium Found");
        PinningTrustManager.checkServerTrusted.implementation = function() {
            // console.log("[+] Appcelerator checkServerTrusted() called. Not throwing an exception.");
        }

    } catch (err) {
        // If we dont have a ClassNotFoundException exception, raise the
        // problem encountered.
        // console.log("[-] Appcelerator Titanium Not Found");
    }


}
hook_dlopen("libmsaoaidsec.so")


function retrofit_a_intercept(){
    Java.perform(function(){
        anti_ssl();

        console.log(66)
        let XhsHttpInterceptor = Java.use("com.bytedance.frameworks.baselib.network.http.retrofit.a");
        XhsHttpInterceptor["intercept"].overload('com.bytedance.retrofit2.client.Request').implementation = function (request) {
            // console.log(`XhsHttpInterceptor.intercept is called: chain=${chain}, j17=${j17}`);
            let result = this["intercept"](request);

            // 获取请求的 Headers
            let headersList = result.getHeaders();
            let headers = [];
            for (let i = 0; i < headersList.size(); i++) {
                headers.push(headersList.get(i).toString())
            }
            headers = headers.join("; ");

            let url = result.getUrl()

            LOG("====Python Code Start===", { c: Color.Gray });
            LOG("Headers: " + `: ${headers}`, { c: Color.Red });
            LOG("URL: " + url, { c: Color.Red });
            LOG("====Python Code End===", { c: Color.Gray });
            // const req = result.request()
            // const head = result.headers()
            // const rawString = head.toString()
            // const keyValuePairs = rawString.split('\n');
            // // 将键值对数组转换为字典对象
            // const dictionary = keyValuePairs.reduce((obj, keyValue) => {
            //     // 使用冒号分割每一行，得到键和值
            //     const [key, value] = keyValue.split(': ');
            //     // 将键和值添加到对象中#
            //     obj[key] = value;
            //     return obj;
            // }, {});
            // var headers = JSON.stringify(dictionary)
            // var fetch_url =result.request().url().toString()

            // 将Headers对象转换为字
            LOG("====Python Code Start===", { c: Color.Gray });
            // LOG(toPython(headers,fetch_url),{ c: Color.Red });
            LOG(url,{ c: Color.Red });
            LOG("====Python Code End===", { c: Color.Gray });
            return result;
        };

    });
}


function hook_proceed(){



    Java.perform(function(){
        anti_ssl();

        console.log(66)
        let XhsHttpInterceptor = Java.use("com.bytedance.retrofit2.intercept.RealInterceptorChain");
        XhsHttpInterceptor["proceed"].overload('com.bytedance.retrofit2.client.Request').implementation = function (request) {
            // console.log(`intercept.RealInterceptorChain.proceed is called: ---`);
            let result = this['proceed'](request)
            var url = request.getUrl();

            // Get the headers from the Request object
            var headers = request.getHeaders();
            var method = request.getMethod();
            // Convert headers to a readable format
            var headersList = [];
            for (var i = 0; i < headers.size(); i++) {
                var header = headers.get(i);
                headersList.push(headers.get(i).toString());
            }
            let headerSrt = headersList.join('; ')

            var responseBody = result.body();
            var resCode = result.code()
            var responseHeaders = result.headers();

            var responseHeadersList = [];
            for (var j = 0; j < responseHeaders.size(); j++) {
                responseHeadersList.push(responseHeaders.get(j).toString());
            }
            let resH = responseHeadersList.join('; ')
                // fileStream.write("====hook Code Start ⬇️===");
            LOG("====hook Code Start ⬇️===", { c: Color.Gray });
            console.log(responseBody.length, 22222);
            // LOG("reqHeaders: " + `: ${headerSrt}`, { c: Color.Cyan });
            // fileStream.write("reqHeaders: " + `${headerSrt}` + "\n");
            // LOG("URL: " + url, { c: Color.Green });
            // fileStream.write("URL: " + url + "\n");
            // LOG("method: " + method, { c: Color.Green });
            // fileStream.write("method: " + method + "\n");
            // LOG("resCode: " + resCode, { c: Color.Green });
            LOG("Body:" + responseBody + " | " + url + " | " + method + " | " + headerSrt + " | " + resH, { c: Color.Yellow })
            // fileStream.write("Body:" + responseBody + "\n");
            // LOG("respHeaders: " + `: ${resH}`, { c: Color.Red });
            // fileStream.write("respHeaders: " + ` ${resH}` + "\n");
            LOG("====hook Code end ⬆️===", { c: Color.Gray });
            // fileStream.write("====hook Code end ⬆️===");


            return result;
        };

    });
}


function main(){

    hook_proceed();
}

setImmediate(main)
