function bytesToString(arr) {
  var str = '';
  arr = new Uint8Array(arr);
  for (var i in arr) {
      str += String.fromCharCode(arr[i]);
  }
  return str;
}
var Color = {
  RESET: "\x1b[39;49;00m", Black: "0;01", Blue: "4;01", Cyan: "6;01", Gray: "7;11", Green: "2;01", Purple: "5;01", Red: "1;01", Yellow: "3;01",
  Light: {
      Black: "0;11", Blue: "4;11", Cyan: "6;11", Gray: "7;01", Green: "2;11", Purple: "5;11", Red: "1;11", Yellow: "3;11"
  }
};

var LOG = function (input, kwargs) {
  kwargs = kwargs || {};
  var logLevel = kwargs['l'] || 'log', colorPrefix = '\x1b[3', colorSuffix = 'm';
  if (typeof input === 'object')
      input = JSON.stringify(input, null, kwargs['i'] ? 2 : null);
  if (kwargs['c'])
      input = colorPrefix + kwargs['c'] + colorSuffix + input + Color.RESET;
  console[logLevel](input);
};

var printStack = function () {
  Java.perform(function() {
      var android_util_Log = Java.use('android.util.Log'), java_lang_Exception = Java.use('java.lang.Exception');
      // getting stacktrace by throwing an exception
      LOG("StackTrace:\n")
      LOG(android_util_Log.getStackTraceString(java_lang_Exception.$new()), { c: Color.Gray });
  });
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

function toPython(headers,url){
    var code=`
    import requests
    def fetch():
        headers = ${headers}

        url = "${url}"

        response = requests.get(url, headers=headers)

        print(response.text)
    `
    // var file = new File(`/data/local/tmp/xhs_fetch/${url}.txt`,"w");
    // file.write(code);
    return code
}
function hook_java(){
    Java.perform(function(){
        anti_ssl();
       var Builder =Java.use("okhttp3.Request$Builder")
        // Builder.header.implementation = function(key,value){
        //     if(typeof this.build().url!="undefined"&&this.build().url().toString().indexOf("search/notes")>-1){
        //     var encryptUrl = this.build().url().toString();
        //     var devnulUrl= encryptUrl.replace("xiaohongshu.com","baidu.com");
        //     console.log("key,value:===>",key,value)
        //     return this.url(devnulUrl).header(key,value);
        
        // }
        //  return this.header(key,value)
        // }
        Builder.addHeader.implementation = function(key,value){
        // console.log("addHeader key,value:==>",key,value)
        return this.addHeader(key,value)
        }
    
        
        console.log(66)
        let XhsHttpInterceptor = Java.use("com.xingin.shield.http.XhsHttpInterceptor");
        XhsHttpInterceptor["intercept"].overload('okhttp3.Interceptor$Chain', 'long').implementation = function (chain, j17) {
            // console.log(`XhsHttpInterceptor.intercept is called: chain=${chain}, j17=${j17}`);
            let result = this["intercept"](chain, j17);
            var rawString = result.request().headers().toString()
            // 使用换行符分割字符串，得到一个数组，每个元素是一个键值对
            const keyValuePairs = rawString.split('\n');

            // 将键值对数组转换为字典对象
            const dictionary = keyValuePairs.reduce((obj, keyValue) => {
            // 使用冒号分割每一行，得到键和值
            const [key, value] = keyValue.split(': ');
            // 将键和值添加到对象中#
            obj[key] = value;
            return obj;
            }, {});
            var headers = JSON.stringify(dictionary)
            var fetch_url =result.request().url().toString()
            // console.log("======requsets start=====")
            // console.log(`====XhsHttpInterceptor.intercept===== \n headers = ${headers}`);
            //transfer result.request().headers() to dict
            // 将Headers对象转换为字
            LOG("====Python Code Start===", { c: Color.Gray });
            LOG(toPython(headers,fetch_url),{ c: Color.Red });
            LOG("====Python Code End===", { c: Color.Gray });
            // if(fetch_url.indexOf("search/notes")>-1){
            //     LOG("====Python Code Start===", { c: Color.Gray });
            //     LOG(toPython(headers,fetch_url),{ c: Color.Red });
            //     LOG("====Python Code End===", { c: Color.Gray });
            // }
            return result;
        };

        // XhsHttpInterceptor["initialize"].implementation = function (str) {
        //     console.log(`XhsHttpInterceptor.initialize is called: str=${str}`);
        //     let result = this["initialize"](str);
        //     console.log(`XhsHttpInterceptor.initialize result=${result}`);
        //     return result;
        // };
            
});
}

function main(){
    
    hook_java();
}

setImmediate(main)
