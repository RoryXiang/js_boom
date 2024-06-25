function hookHttp() {
    Java.perform(
        function(){
            console.log("############################ Frida 开启 ############################");
            var session = Java.use("mtopsdk.mtop.global.SwitchConfig");
            if (session != undefined) {
                console.log(`------>定位到类名: ${session}`);
                session.C.implementation = function(){
                    console.log(`------>定位到函数: is_enableSpdy`);
                    return false;
                }
            };
        }
    )
}


function hookXSing() {
    Java.perform(function () {
        var main = Java.use('com.alibaba.wireless.security.open.securityguardaccsadapter.usertrack.UserTrackUFWrapper');
        console.log("----找到类----------")
        main.getUFInMainProcess.implementation = function () {
            var res = this.getUFInChannelProcess()
            console.log("getUFInMainProcess 获取到结果～～～～～： ", JSON.stringify(res))
            return res
        }
    })
}


hookHttp()
hookXSing()