// 引入Frida模块
const frida = require('frida')
// 目标进程的包名或进程ID
const targetProcessName = 'com.xunmeng.pinduoduo';

// 要Hook的函数名
const targetFunctionName = 'com.aimi.android.common.service.c.f';

// 创建一个Session
frida.attach(targetProcessName)
    .then(session => {
        console.log('[*] Attached to process');

        // 通过Session创建一个脚本
        const script = `
      // 获取要Hook的模块
      const targetModule = Process.findModuleByName('libtarget.so');

      // 获取要Hook的函数
      const targetFunction = targetModule.findExportByName('${targetFunctionName}');

      // Hook函数
      Interceptor.attach(targetFunction, {
        onEnter: function (args) {
          // 打印函数入参
          console.log('[+] Entered ${targetFunctionName}');
          console.log('[+] Arguments: ' + args[0] + ', ' + args[1] + ', ' + args[2]);
        },
        onLeave: function (retval) {
          // 打印函数出参
          console.log('[+] Left ${targetFunctionName}');
          console.log('[+] Return Value: ' + retval);
        }
      });
    `;

        // 编译并加载脚本
        session.compileScript(script)
            .then(script => {
                script.load()
                    .then(() => {
                        console.log('[*] Script loaded');
                    })
                    .catch(error => {
                        console.error('[-] Error loading script:', error);
                    });
            })
            .catch(error => {
                console.error('[-] Error compiling script:', error);
            });
    })
    .catch(error => {
        console.error('[-] Error attaching to process:', error);
    });
