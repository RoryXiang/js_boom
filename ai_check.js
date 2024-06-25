// const md5 = requires('js-md5') ;
// import md5 from 'js-md5';
const md5 = require('js-md5')
function genSignature(secretKey, paramsJson) {
     var sorter = function(paramsJson) {
         var sortedJson = {};
         var sortedKeys = Object.keys(paramsJson).sort();
         for (var i = 0; i < sortedKeys.length; i++) {
             sortedJson[sortedKeys[i]] = paramsJson[sortedKeys[i]]
         }
         return sortedJson;

     }
     var sortedParam = sorter(paramsJson);
     var needSignatureStr = "";
     for (var key in sortedParam) {
         var value = sortedParam[key];
         needSignatureStr = needSignatureStr + key + value;
     }
     needSignatureStr += secretKey;
     // var md5er = crypto.createHash('md5');//MD5加密工具
     // md5er.update(needSignatureStr,"UTF-8");
     // return md5er.digest('hex');
     return md5(needSignatureStr);
 }


const data = {
 "content": '我是AI，你信不信我，哈哈哈',
 "type": 255,
 "version": "v1.1",
 "businessId": "0",
 "signatureMethod": "",
 "secretId" : '06488affa3467c04aac7f37f8683b9cb',
 "timestamp": 1681281192465,
 "nonce": 4051
}

 const mm = genSignature("2835c49feaad72da7458b481498c20e4", data)
 console.log(mm)

