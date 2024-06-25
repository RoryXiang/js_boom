function call_FridaActivity3() {
    Java.perform(
        function(){
            var session = Java.use("com.xunmeng.basiccomponent.titan.api.helper.ApiNetChannelSelector");
            if (session !== undefined) {
                session.canUseLongLink.implementation = function(titanApiRequest, atomicInteger){
                    // console.log("close long link")
                    return false;
                }
            }
        }
    )
}


function hook_token() {
    Java.perform(
        function() {
            var token = Java.use("com.xunmeng.pinduoduo.secure.v");
            console.log(token)
        }
    )
}


// call_FridaActivity3()
// hook_token()