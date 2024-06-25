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


// ===================== anti frida bypass

// ===================== anti frida bypass end

function Uint8ArrayToString(fileData){    //Uint8Array转字符串
    var dataString = "";
    for (var i = 0; i < fileData.length; i++) {
        dataString += String.fromCharCode(fileData[i]);
        // console.log(dataString)
    }
    return dataString
}
function byteToHexString(uint8arr) {  //byte数组转16进制字符串
    if (!uint8arr) {
        return '';
    }
    var hexStr = '';
    for (var i = 0; i < uint8arr.length; i++) {
        var hex = (uint8arr[i] & 0xff).toString(16);
        hex = (hex.length === 1) ? '0' + hex : hex;
        hexStr += hex;
    }

    return hexStr.toUpperCase();
}



function hook_md5_old() {
        var BB = Java.use("java.security.MessageDigest");
        BB.update.overload('[B').implementation = function (args1, args2, args3, args4, args5, args6) {
            console.log('---args1: ', Uint8ArrayToString(args1))
            var args = this.update(args1)
            console.log("update", args)
            return args
        }
        BB.digest.overload().implementation = function (args1, args2, args3, args4, args5, args6) {
            var args = this.digest()
            console.log('==== result：', byteToHexString(args))
            return args
        }
    ;
}


// hook_md5_old()


// ====================== new


function hook_md5(){
    var algorithm = 'MD5';
    if(Java.available)
    {
            var MessageDigest= Java.use('java.security.MessageDigest');
            var digest1 = MessageDigest.digest.overload("[B","int","int");
            digest1.implementation=function(buf,offset,len){
                var ret = digest2.call(this,buf);
                parseIn(this,buf);
                parseOut(this,ret);
                return ret;
            }

            var digest2 = MessageDigest.digest.overload("[B");
            digest2.implementation=function(buf){
                var ret = digest2.call(this,buf);
                parseIn(this,buf);
                parseOut(this,ret);
                return ret;
            }

    }

    function parseIn(digest,input){
        var Integer= Java.use('java.lang.Integer');
        var String= Java.use('java.lang.String');
        if(digest.getAlgorithm() != algorithm){
            return;
        }
        try{
            const tmp_in = "original:"+String.$new(input)
            // console.log("original:"+String.$new(input));
            if (tmp_in.includes('chat/con')) {
                console.log(tmp_in)
                var stackTrace = Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new());
                console.log("Stack Trace: " + stackTrace);
            }

        }
        catch(e){
            console.log(parseHex(input));
        }
    }

    function parseOut(digest,ret){
        var Integer= Java.use('java.lang.Integer');
        var String= Java.use('java.lang.String');
        var result = "";
        for(var i = 0;i<ret.length;i++){
            var val = ret[i];
            if(val < 0){
                val += 256;
            }
            var str = Integer.toHexString(val);
            if(String.$new(str).length()==1){
                str = "0" + str;
            }
            result += str;
        }

        if(digest.getAlgorithm()==algorithm){
            console.log(digest.getAlgorithm() + "(32):" + result);
            console.log(digest.getAlgorithm() + "(16):" + result.substring(8,24));
            console.log("");
        }
    }

    function parseHex(input){
        var Integer= Java.use('java.lang.Integer');
        var byte_array = "";
        for(var j = 0;j<input.length;j++){
            var hex = Integer.toHexString(input[j]);
            if(hex.length == 1){
                hex = "0" + hex;
            }
            byte_array += hex;
        }

        console.log("original(hex):");
        var pair = "";
        var hex_table = "";
        for(var k = 0;k<byte_array.length;k++){
            pair += byte_array.charAt(k);
            if((k+1)%2 == 0){
                pair += " "
                hex_table += pair;
                pair = ""
            }

            if((k+1)%32 == 0){
                hex_table += "\n"
            }
        }
        return hex_table;
    }
}

hook_md5()