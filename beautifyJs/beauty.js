const fs = require('fs');
// 把js源码转成语法树
const parser = require("@babel/parser");
// 遍历语法树中的节点
const traverse = require("@babel/traverse").default;
// 提供对语法树中Node的一系列方法比如判断Node类型，辅助创建Node等
const t = require("@babel/types");
// 根据语法树生成js代码
const generator = require("@babel/generator").default;


let replaceMap = {}

function f_a_c() {
    var lw = ['Function', 'sed_line_w', 'RpDUolIGw5', 'font', 'rOrigins', 'zgwZ0QsSBc', 'ockAlgorit', 'nsions', 'MpC8C7kXWD', 'YhyASyNDJ0', 'getAsyncFP', 'Base64', 'BmkxVIVHBW', 'touch_biom', '4\x202.261-0.', 'oscpu', 'MAX_TEXTUR', 'ntext', 'QuickTime.', 'antialias', 'l7obvEe0kR', 'destinatio', 'gfct', 'Segoe\x20Prin', 'textBaseli', 'rage', 'MAWVWAGYsA', 'clone', 'ocationHre', 'querySelec', 'object', 'getWindowP', 'on=\x221.1\x22\x20x', 'firefox', 'test', 'rCInCKqcWt', 'DEPTH_TEST', 'cloneNode', 'Client-Sec', '*=funcaptc', 'Courier', 'ding:', '_webgl', 'dwriting', 'FWKdMLGdYG', 'the\x20correc', '+QQJCgAAAC', '957v-0.174', 'tReferrer', 'update', 'gwWhShRgQE', 'MAX_FRAGME', 'response', 'ect', 'iframe_hei', 'code', 'E_SIZE', 'orage', 'yASyNDJ0uI', 'tbio', '6hDISWlZpO', 'body', 'H5BAkKAAAA', '_IMAGE_UNI', 'console', 'viewport_d', 'concat', 'params', 'aliasing', 'fillRect', 'OM82XiHRLY', 'aVKp6s2nIk', 'amhnVcEwav', 'webgl_fsi_', 'E4KagNh6Bg', 'ame=\x27strin', 'Data', 'elector', 'ret', 'pad', 'Palatino', '1633634bnfwjZ', 'Arial\x20MT', 'hidden', 'by9ydh1sOS', 'precision', '_keySchedu', 'CPUC', 'paqbSKiKoq', 'audio_code', '_downlink_', 'Segoe\x20UI', 'ints', 'HIGH_FLOAT', 'POST', 'DEPTH_BITS', '=\x27true\x27]', 'QuaW5mbwAh', 'toString', '7VxF0JDyIQ', 'ight', 'hSSdRgwVo1', 'QlCIJesQXI', 'Times\x20New\x20', 'arging', 'mpGKLqzWcZ', 'ucture', 'closePath', 'tListener', '309RnHOG5g', 'x64hash128', 'rMode', 'charCodeAt', 'MAGE_UNITS', 'style', 'keyboard_b', '///wAAAMbG', 'received', 'SdnhgEoamc', 'webgl_max_', 'ABCDEFGHIJ', 'isMSIE', 'click', '__selenium', 'iterations', 'Chrome', '8G2FzUWox2', '_keyPriorR', 'target', 'dth', 'getSeleniu', 'hasFakeOS', 'Consolas', '\x2040],\x20\x0a\x20\x09\x09', 'data\x20reque', '/hpDcmVhdG', 'C7FLVxLWDB', 'log', 'vp8,\x20vorbi', 'NGUAGE_VER', 'BAp5qaKpp6', 'getSession', 'plugins', 'triangle', 'up.', 'filter', 'ity', 'setup_call', 'words', 'otropic', '_called', 'borderRadi', '4.522h-0.5', 'Arial\x20Narr', 'n/x-www-fo', 'charging', 'XIdQFSS1u6', 'Century\x20Sc', 'release', 'splice', 'sked_vendo', '$super', 'loading_sp', 'documentEl', 'isFPValidF', '1AYZ19JJOY', 'insertBefo', 'timeout', 'cdg0Zc0tTc', 'currentSty', 'audio/mpeg', '_info', 'iPOH16iZKN', 'DqXGLDaC45', 'ported', '\x20codecs=\x221', 'sigBytes', 'BuzsdiH1jC', 'Control.1', 'QAAkrQIykS', 'setRequest', '_UNIFORM_V', 'webgl', 'orbis\x22', '0.609\x205.73', 'Lucida\x20Cal', 'Iso10126', 'XZWQEximw1', 'getTimeOff', 'thkpU4mW6b', 'Encryptor', 'AES', 'ancestorOr', '4px\x2012px', 'G9nxPi5d+j', 'capi_setti', 'extend', 'getScreen', 'rNbRXlBBlL', 'crossOrigi', '_doCryptBl', '<div\x20id=\x27F', 'webgl_hash', 'ALPHA_BITS', 'sri.json', 'appendChil', 'Windows\x20Ph', 'getPhantom', 'AgControl', 'myrCInCKqc', 'FRAGMENT_S', 'PC9VCNkDWU', '37]\x20\x0a\x20\x09\x09\x09\x09', 'getCPUClas', 'BSh2GUVEIQ', 'Opera', 'HTTP', 'getLanguag', '_prevBlock', '48\x2012.522h', 'fingerprin', 'bootstrap.', 'Content-Ty', 'rAavhOMnNL', '00000000', '4,R0lGODlh', 'style_them', 'rhLSEu9MZJ', 'lRiYmZOlh4', 'apply', '53px', 'Comic\x20Sans', 'left', '_phantom', 'Bitstream\x20', 'fillStyle', 'evenodd', 'gSCjQBMVG0', 'Block', 'hGkuE5PxJN', '117i4nlLnY', 'kECQoAAAAs', 'micsCompre', 'getDarkMod', 'ceil', 'target_htm', 'browser_de', '_data', 'clear_sess', 'PoAK++G+w4', 'BLUE_BITS', '\x20id=\x27strin', 'JSF', '_cipher', 'styletheme', 'CBC', 'cleanup_ht', 'LOW_FLOAT', 'ession_tok', 'mode', 'monospace', 'text/javas', 'config', 'MD5', 'iframe_wid', 'SDARWroAIE', 'ta-pkey\x27.', 'UqnqzaciSo', 'rtt', 'createDecr', 'owser', 'ITM5VDW6XN', '166585ZAsggc', '.QuickTime', 'device_mem', '_mode', 'HQULXAS2qK', '_selenium', 'window__lo', 'ec-should-', 'data', '://www.w3.', 'olor-schem', 'dZXS7APdpB', 'abort', '2xvvFPJd+M', 'Trebuchet\x20', 'sort', 'd4Rz1ZBApn', 'LHKhwwMJBT', 'FunCaptcha', 'ror', 'Courier\x20Ne', 'GET', '*=arkosela', 'rif', 'getBattery', 'A0N9GBsEC6', 'UsJaTokqUC', 'mac', 'l-3.304-1.', '_minBuffer', 'div', 'e_filter_a', 'COLOR_BUFF', 'No2cIUB3V1', 'ptor', 'hostname', 'lSAVoVLCWk', 'devicePixe', 'IbUQRQjWBw', 'ank\x20glyphs', '<input\x20typ', 'cookieEnab', 'Internet\x20E', 'ion', 'fault_styl', 'knee', 'MAX_VIEWPO', 'fo_rtt', 'Attributes', 'sessionSto', 'ting_enabl', '5ztRLsnOk+', 'isNaN', 'Microsoft\x20', 'mZX3I2SfYI', '4xLrROZL6A', 'responseTe', 'msDoNotTra', 'ACwAAAAAIA', 'Decryptor', 'No8KsZsMZI', 'Adodb.Stre', 'nativeForE', 'canvas', 'alphabetic', 'MS\x20Outlook', 'lD4WvzAHao', 'outerHTML', 'createEven', 'BGL', '\x20exceeded.', 'mValues', 'window_out', 'formatter', '_MODE', 'ACH5BAkKAA', '.609-5.739', 'ction', 'techange', 'Verdana', 'led', 'flush', 'QCACH5BAkK', 'rgb(255,0,', 'htmare_js', '\x20id=\x27FunCa', 'AzoSfl0rVi', '5eWARmfSRQ', 'descriptio', 'getExtensi', 'dnezB+A4k8', '\x200\x200.174\x200', 'getWindowH', 'eCheck', 'guage', 'yling\x27\x20val', 'tion', 'HMAC', 'onshown', 'ingerprint', 'RQeyqUToLA', 'unknown', 'eOffset', 'pixelDepth', 'SWF', 'Lucida\x20San', 'beginPath', 'processBlo', 'all', 'WhUsJaTokq', 'AcroPDF.PD', 'xoSEhLa2tp', 'Token', 'WordArray', 'ehRww2CQLK', 'canvasFP', 'ertyNames', 'getOwnProp', 'XDomainReq', 'ineAudioCo', 'UEIFwMFBRA', '#ff1919', 'EnKxFCDhEA', 'AAygwLlJtP', 'veX\x20Contro', 'getLocalSt', 'min', 'OwmyrCInCK', 'opqrstuvwx', 'getUserAge', 'webdriver', 'gMSOFIPJft', 'query_data', 'Points', 'EWMzMCezCB', 'emory', 'IAAgAPMAAP', 'pSessionEr', 'Arial\x20Blac', 'Base', 'xplorer', 'ygsZIuNqJk', 'getDeviceM', 'iometrics', 'W6+O7wDHpI', 'mSjZR+ipsl', 'rowser_nig', 'EgfLpBtzE/', 'ath', 'ion-token\x27', '_keystream', '-spinner', 'EC/CAPI\x20Ke', 'getWebGLVS', 'IKoaTl1MRI', 'TouchEvent', '2DOqKogTB9', 'mqpLajoiW5', 'pth', 'ntom', 'execute', 'lash.Shock', 'oEdhQEfyNq', 'lback', 'WEBKIT_EXT', 'clamp', 'x2jJvqHEmG', 'getPlugins', 'client_con', 'T0VnOgSYf0', 'RVUQnZYg1a', 'JBi45soRAW', 'Control', 'Roman', '[htmlFor', '_doProcess', 'R6XB0EBkII', 'screen_pix', 'kdf', 'wXKC9gmsJX', 'getTimezon', 'lhperN52JL', 'reduce', 'script[src', 'fc_suppres', 'win', '20030107', 'jp1oJ8LyIA', 'r(tm)\x20Acti', 'fig__sited', 'c\x5c/api]', 'rangeMin', '4lbFoq+B6Q', 'sByTagName', 'ENDOR_WEBG', 'ent\x20as\x20an\x20', '\x20codecs=\x22m', 'idth_range', 'mBkSgOrBFZ', 'ec-loading', '/funcaptch', 'YUqfAhhykO', '9mIKoaTl1M', 'GQoQTNhIsF', 'ECB', 'enhanced_f', 'hJaVKp6s2n', '\x20codecs=\x22a', 'Mac', 'trident', '\x22\x20d=\x22M12.5', 'error', 'getPixelDe', 'jiuL04RGEB', 'AkkqIfxIQy', '2nIkqFZF2V', 'session_ti', 'hasOwnProp', 'utEmulatio', 'XCtrl.1', 'uest', 'NWD', 'rmocx.Real', 'WtvadL2SYh', 'getTreeStr', 'ype', 'ED_TEXTURE', 'Firefox', 'other', '43px', 'html', 'hffcgojwCF', 'phantom', '_invKeySch', 'ring', 'VENDOR', 'getPixelRa', 't6whJpGpfJ', '_evaluate', 'ER_BIT', 'set', 'ient_secre', '696\x203.478l', 'toSource', 'match', 'proceed:\x20[', 'FwJWiAAAIf', 'sole', '5-1.739-2.', '+Ho7aWW54w', 'removeChil', 'integrity', '.739\x200.174', 'getPlatfor', 'Ctl', 'then', 'connect', 'keys', 'itySetting', 'getAudioFi', 'back', 'RealPlayer', 't\x20www.arko', 'X+BP0XJLAP', '_hash', 'rted', 'battery_ch', 'taInput', 'blic\x20key\x20a', 'ght', 'DownlinkMa', 'Mono', 'userAgentD', 'canvasSupp', 'ioContext', 'iUd6GGl6No', '-0.348c0.6', 'sked_rende', 'audio_fing', 'ShockwaveF', 'outerHeigh', '3\x200.522-2.', 'indexedDB', 'callPhanto', 'ositeOpera', 'ock', 'encode', 'webgl_shad', 'window_inn', 'IkekKGQkWy', 'erprint', 'igins', 'st\x20timeout', '0.522v3.82', 'RKIHQtaLCw', 'eset', 'DtuetcaBPn', 'etrics', 'fo_rtt_typ', 'V543tzjgGc', 'eConcrun', 'tor', 'callback', 'pCUJBagDBX', 'webgl_exte', 'orSuppress', 'Book\x20Antiq', 'y8vB4eHgQE', 'A14E0UvuAK', 'Vera\x20Sans\x20', 'ontimeout', 'a_api', 'byteLength', 'postMessag', 'QGubVEcxOP', 'receiveMes', 'function', 'async_fing', 'NT_UNIFORM', 'Hasher', 'arc', 'FC_SCRIPT_', 'Storage', 'oVLCWk6JKl', 'EACcUGkIgF', 'NoqgOgN4gk', 'getBehavio', 'rowser_sel', 'getOuterHe', '89+/=', 'ge_version', 'sMo6WnM562', 'isArray', 'NAAL19DARd', 'qcWtvadL2S', 'ChCwUJjoWM', 'MEDIUM_INT', '5,0)', 'Windows', 'AAAAAAAAAA', 'ALIASED_LI', 'IAAABOcQyE', 'pTJT4iowNS', 'padding', 'webgl_unma', 'title', 'ken\x27\x20name=', 'capi_versi', 'PaGqDKanna', 'split', 'xtYksjh2NL', '043-6.087-', 'server\x20set', 'KLMNOPQRST', 'UVWXYZabcd', '7D1zZ/V/nm', 'inject_boo', 'Size', 'fp_vals', 'VQoLgQReZh', 'AABPAQyElp', 'get_target', 'AOIAmsfB3u', 'lineHeight', '_VECTORS', 'UTF-8\x20data', 'ymbol', 'Client-Id', 'fallbackTy', 'name', 'yes', 'SHADING_LA', 'tection_fi', 'oncomplete', 'android', 'opic', '_iv', 'TwKCdFjyPH', 'emibold', 'rotoChainH', 't7gHiRpFaL', '\x20MS', 'absolute', 'capiVersio', 'WNHAULCwOL', 'script', 'connection', '_DEC_XFORM', 'IParams', 'StreamCiph', 'uIiRMDjI0F', 'g-table\x27\x20n', 'colorDepth', 'device_lis', 'headless', '8edZPK+M6h', 'vals', 'VNB0AlcvcA', '17-0.174-6', 'GREEN_BITS', 'valuate', 'RmitkAYDYR', '_xformMode', 'g1RAAAOwAA', 'get_outer_', 'OTROPY_EXT', 'getInnerHe', '0wpgqZE7NK', 'nisotropic', 'api-script', 'plete', 'attachEven', 'Header', 'video/x-ma', 'hardwareCo', 'safari', 'C7kTBaixUY', '11pt\x20no-re', '~~~', 'Dictionary', 'selenium', '/fc/api/', 'KK9y1ZrqYK', 'IoZCHQMMQg', 'unCaptcha\x27', 'async', '\x20been\x20set.', 'ENDERER_WE', 'href', '\x27verificat', '_sri', 'hasSwfObj', 'al-font-12', 'oading_gam', 'getPrototy', 'NE_WIDTH_R', '/CZSg7GSE0', 'script[ec-', 'ctionalInp', 'MVVPMt1ECZ', 'deviceMemo', '#f60', 'url_cdn', 'getChannel', 'a-Token', 'find_onloa', '56628vcWbQA', 'VkIHdpdGgg', 'olution', 'floor', 'JKhWRdlSAV', 'number', 'Um+FNRPIhj', 'JRzChi9CRl', 't\x20format.\x20', 'port', 'float', 'round', 'ntMobile', 'fontSize', 'Check', 'NDE', 'format', 'inner', 'fo_save_da', '__nightmar', 'GgQDA8NdHz', 'turned\x20on\x20', 'innerHTML', '6CwO1cRdCQ', 'mixIn', 'Key', 'Pkcs7', 'F8gIQSNeF1', 'getEnhance', 'ciphertext', 'doNotTrack', 'onerror', 'unpad', 'saRsGGMMAx', 'l5o4CUKXOw', '?onload=', 'Helvetica\x20', 'iK9SaVK5Gg', 'n\x27\x20name=\x27f', 'r_unwrappe', 'history', '\x20the\x20\x27arko', 'BUFFER_SIZ', 'A70AWxQIH1', 'android_ve', '+vsYMDAzZQ', 'surl', 'IFA6SlnJ87', 'ligraphy', 'Cambria\x20Ma', 'ntBrands', 'sKgbfgIGep', 'navigator_', 'cript', 'msMatchesS', 'encrypt', 'location', 'linux', 'Lucida\x20Fax', 'ghAgAh+QQJ', 'ertyDescri', 'tton', 'downlinkMa', 'hQ9wVhHCwC', 'efghijklmn', 'OpenSSL', '2257443pLtyCS', 'KhKP1oZmAD', 'wiUK4UfLzO', 'erprints', 'dLiIlHehhp', 'capi_mode', 'readyState', 'meout', 'create', 'one', 'HmacMD5', 'DER', 'ipad', 'MAX_VARYIN', 'ngs', 'Arial\x20Unic', 'erer', '(32-bit)', '609-3.826-', 'video_code', 'reJS', 'HgPKdEQAAC', 'EvpKDF', '_nDataByte', 'getNetwork', 'fromCharCo', 'getOpenDB', 'ratio', 'ach', 'MS\x20Sans\x20Se', 'dEAAAh+QQJ', 'Document', 'user', 'FlashPaper', 'ATgJhkPJMg', 'eaEDAIMxYF', 'cloudflare', 'createDyna', 'bind', '_reverseMa', ',\x20mp4a.40.', 'UN3eCA51C1', 'ent', 'session_fa', 'webgl_vend', ',\x20😃', 'IDB', 'onsuppress', 'onreadysta', 'manager-st', 'SaveData', 'window__tr', '52ZUTigj', 'skxTBDAZwu', 'Utf8', 'u8DsrEyqnW', 'aTmzswadEq', 'NggY0KtEBA', 'rN5zFHNWRd', 'now', '-Token', 'windows\x20ph', 'tstrap_scr', 'YV8ccwR5HW', 'addEventLi', 'per', '2.609-6.08', 'canPlayTyp', 'LdRAmZX3I2', 'siteData', 'Data\x20reque', 'unc', 'kbio', 'public_key', 'g_renderer', 'GzTkAuAOqb', 'webgl_alia', '\x20codecs=\x22v', '-action', 'keyboard', 'sans-serif', '09\x205.739\x201', 'CrOS', 'map', 'random', 'isSDK', 'enium', 't=\x2232\x22\x20vie', 'l\x20(32-bit)', 'video/ogg;', 'BAaqqoZ1XB', 'ShpkVRWqqQ', 'fc_api_ser', 'fontFamily', 'appName', 'createStyl', 'Wingdings', 'fp_result', 'faked', 'vadL2SYhyA', 'cfg', 'device', 'HIGH_INT', 'sage', 'video/webm', 'Skype.Dete', 'xture_filt', 'search', 'd30/iI2UA5', 'KkRAAAIfkE', 'ing_langua', 'gH1KwA4UBv', '-0.174\x200-0', '[212,\x20204,', '2aQOE+G+cD', 'maskedValu', 'send', '1px\x20solid\x20', 'MAX_COMBIN', 'hasher', 'margin', 'rangeMax', 'finalize', 'nwrapped', 'verificati', 'getContext', 'protocol', 'iOS', 'max', '\x09\x09\x09\x09down:\x20', 'buffer', 'cpuClass', 'defineProp', 'onload_ret', 'normal', 'MS\x20Gothic', '826z\x22></pa', 'ggQwgHuQsH', 'Ah+QQJCgAA', '6l10.609-5', 'hasFakeRes', '4zM12.87\x202', '~end~float', 'ue=\x27', 'getNightma', 'nsions_has', 'getAttribu', 'yptor', 'constructo', 'UNMASKED_V', 'Garamond', 'saveData', 'call', 'GSS5UDj2l6', 'pENRg7eAML', 'DMaAFdTESJ', 'WIRLAgMDOR', 'audio/ogg;', 'gamepadInp', 'tXQlkUhziY', 'ce\x20Sans\x20Se', 'age', 'getAudioCo', 'dNqW5uaRxk', 'inotype', 'high', 'B5wlCZ9Po6', 'dd\x20this\x20to', 'brands', 'length', 'FOS', '0.174-1.91', '4wAwEAAAAh', 'message', 'lzsJsqwiJw', 'ptcha-Toke', 'gins', 'mobile', 'getShaderP', 'https://ar', 'getTreeInd', 'globalComp', 'Malformed\x20', 'Type', 'isPointInP', 'inject_scr', 'RUMoyUakyE', 'RT_DIMS', 'Roman\x20PS', 'enableDire', '_downlink', 'ing', 'hBQBFvAQSD', 'get_html', 'substr', '0-4.522-1.', 'Android', 'RENDERER', 'PQSqpbgGBq', 'ilter_anis', 'SWlSqerNpy', 'ejaIjzh9eo', 'fillText', '83\x205.565\x201', '__webdrive', '18pt\x20Arial', 'MNAZKYUZCi', 'ThGvAmhVlt', 'Arial', '96-1.565\x201', 'open', 'refox', '[213,\x20206,', '-9999px', 'VlycXIg7CQ', 'parse', '__driver_e', 'browserLan', '22\x203.304c0', 'MEDIUM_FLO', 'AALAAAAAAg', 'ipod', 'documentMo', 'site', 'blic_key/', 'ient_id', 'lper', 'ic\x20key\x20has', 'url_cdn_sr', 'MAX_VERTEX', 'PasswordBa', 'AAAAACAAIA', '(((.+)+)+)', 'recisionFo', 'ode\x20MS', 'ngerprint', 'Monaco', 'stringify', '9-5.739v3.', 'CgAAACwAAA', 'fig__langu', 'v5KMCXqfyU', 'ata', 'https://fu', 'productSub', '_key', '_process', 'AsAAAAACAA', 'prototype', 'ZeroPaddin', 'Wingdings\x20', 'languages', 'start', ',\x2038],\x20\x0a\x20\x09', 'funcaptcha', 'createEncr', 'video/mp4;', 'userAgent', '22c-2.261\x20', 'on-token', 'Netscape', 'http', 'RealVideo(', 'orted', 'fc-script', 'rer', 'callSeleni', 'th></svg>', 'onSessionS', 'userbrowse', 'CwVPI0UJe0', 'arrowKeyBi', 'parent', 'XMLHttpReq', 'Tahoma', 'decode', 'e8PTPCATW9', 'fallback_t', 'msie', 'me=\x27style-', '_map', 'kSBNqITT3x', 'qFZF2VIBWh', 'AgControl.', 'BcY1UN4g0/', 'chrome', 'BO4QyEkpKq', 'selabs.com', 'ver', 'LJpQg484en', '\x204.87\x200\x208.', 'BlockCiphe', 'ivSize', 'WEBGL_debu', 'construct_', 'webgl_bits', 'yz01234567', '-0.174\x200.1', 'load', 'url', 'JSdSnJ0TDK', 'aV+oJY7V7m', 'RIl5o4CUKX', 'position', 'EMhJaVKp6s', 'getBraveBr', 'ipt_integr', '://', 'shown_call', 'nJ1xCYp0Y5', 'openDataba', '1SRQeyqUTo', 'CQoAAAAsAA', 'getLANG', 'brand', 'erty', 'OUjY+Yip9D', 'payload', 'value', 'YHRyZPdEQF', 'removeRule', 'WBsJColTMA', 'ash', 'getElement', 'DMTO', 'getWebGLUn', 'sin', 'AAIAAgAAAE', '\x20You\x20can\x20g', 'api_target', '255)', 'sTmsM4xHiK', 'getInnerWi', 'ById', 'toDataURL', 'replace', 'WebGLRende', '204,\x200,\x200.', '922326lsEXwv', '3666681tYABqg', 'ess=1', 'NoPadding', 'detachEven', 'qAbWAAnIA4', 'serif', '.co', '\x20vext\x20quiz', 'network_in', '_events', 'Player\x20G2\x20', 'init', 'r_script_f', 'Lucida\x20Bri', 'sed_point_', '_ENC_XFORM', 'bx+4Erq7BY', 'we60smQUB3', 'frequency', 'R5YluZRwur', 'abs', 'reset', '4ntpWkZQj1', 'ault', 'gIemy7xZtJ', 'fc_hard_re', 'Other', 'VERTEX_SHA', 'VkXVUMFaFS', 'AqAavhO9Uk', 'troska;\x20co', 'llator', '7\x200-1.043\x20', 'ECTORS', 'matchMedia', '__creator', 'passValues', 'rNpyJKhWRd', 'ication-to', 'OJkwmRpnqk', 'fc_shown', 'sortPlugin', 'SyNDJ0uIiU', '_doFinaliz', 'document', 'p4v.20.240', 'webgl_vers', 'qrOUaNW4E4', 'ITS', '\x0a\x20\x09\x09\x09\x09\x09up:', 'CF-Access-', 'ata_locati', 'et\x20your\x20pu', 'decryptBlo', 'uPZKGIJQIG', 'Andale\x20Mon', 'Safari', 'cros', 'uQAPUS7bxL', 'browser', 'AnsiX923', 'ipt', 'userLangua', 'renderedBu', 'setAPIInpu', 'BMN4zRMIVI', 'hSiVoVLHsp', 'Check.1', 'failed_cal', ';\x20codecs=\x22', 'T_TIMEOUT', 'sed', 'data[', 'Msxml2.DOM', 'torAll', 'getFirefox', 'salt', '\x20{\x20\x0a\x20\x09\x09\x09\x09\x09', '23xWBhklAn', 'toLowerCas', 'ncaptcha.c', '_append', 'ERROR', 'sZuXO1aWQy', 'thic', '_unwrapped', 'ACAAAATwEM', 'getOuterWi', 'MLCwVDfRgb', 'lH6KmyWFOg', 'Shell.UIHe', 'token', 'forEach', 'JIiZIogDFF', 'oDBgYHTKJi', 'styleTheme', 'isInteger', 'algo', 'createElem', '8KAwOAuTYY', 'onload', '_access_cl', 'language', 'T_ERROR', '.\x20Please\x20a', 'Segoe\x20Scri', 'TDCCtl.TDC', 'AgAAAE6BDI', 'disable_de', 'er_height', 'RTT', 'canvas\x20win', 'handleSetu', 'setWebGLKe', 'original_s', 'MAX_RENDER', 'ActiveXObj', 'availHeigh', 'charAt', 'EgULe0NJax', 'data_reque', 'platform', 'IkqFZF2VIB', 'swfobject', 'QwXUBxPqVD', 'webgl_vsi_', 'qamjY2NlZW', 'border', 'addRule', 'HADER', 'msg', 'JSON', 'bda', 'fzFVTzLdRA', 'loadedWith', 'origin', 'Keycodes\x20a', '.174\x200\x200\x200', 'Downlink', 'fill:#f00;', 'decs', 'er_width', 'codecs', 'ave', 'ncurrency', '8Gm5yToAaZ', 'inline-blo', '5B0CBnUMOx', '25\x2032\x22><pa', 'waveFlash', 'Neue', 'width', 's\x20Typewrit', 'finished_l', 'height', 'd6GAULDJCR', '.Macromedi', 'koselabs.c', 'undefined', '_texture_f', 'Linux', '2.348\x2012.3', 'UNMASKED_R', '2.609-1.56', 're\x20not\x20in\x20', 'X\x20Control\x20', 'FParams', 'decrypt', 'Cm5B8TgRwS', 'ing_enable', 'BINFMxS4DK', 'availWidth', 'cache_', 'EwbLA4hJtO', 'ement', 'CJEonXPN2r', 'audio/wav;', 'Palatino\x20L', 'catch', 'AAACAAIAAA', 'user_agent', 'tio', '\x20codecs=\x22t', 'AAAE5xDISW', 'hasFakeBro', 'msMaxTouch', '__driver_u', 'tyling\x27\x20na', 'Latin1', 'iXo1CpGXDJ', 'attack', 'rgba(102,\x20', 'join', 'on_href', '\x201.043-5.2', 'dMkpMTBpaX', 'd\x20Style', '_createHel', 'localStora', 'cdn', 'FCN6HAAIKg', 'insertAdja', 'evr0N1gH4A', 'data_respo', 'MS\x20Referen', 'getTouch', 'capiMode', 'CFP', 'refresh_se', '_Selenium_', 'rebuild_bu', 'Msxml2.XML', 'h/MVVPMt1E', 'AgACAAAATr', 'data:image', 'e:\x20dark)', 'rl.DevalVR', 'IBWhUsJaTo', 'getFP', '9v-4.522h0', 'canvas\x20fp:', '91-0.87\x202.', 'aDSTtfhhx0', 'outerWidth', 'lfcjZJ9mIK', 'ANGE', '195,\x2013],\x20', 'capiSettin', 'idpQuhopmm', 'string', 'decs=\x22theo', 'Browser', 'stener', '\x20id=\x27style', 'haOUqjkDgC', 'complete', '.696\x200\x206.7', '.739-10.60', 'wser', 'getAncesto', '12BkE9kjAJ', 'Gwi7w5h+Kr', 'webgl_fsf_', 'arkoselabs', 'innerHeigh', 'MS\x20PGothic', 'ObYcCXaiBV', 'DevalVRXCt', 'window__an', 'jqzScpRaVk', 'enc', 'push', 'gTwJhFuiW4', 'fill', 'indexOf', 'getIndexed', 'mbio', 'NCE', '_nRounds', 'getTime', 'slice', 'BufferedBl', 'disconnect', 'MCenoCfTCE', 'proceed', 'etupRespon', 'Bookman\x20Ol', '/fc/gt2/pu', '(prefers-c', 'reduction', 'key', '40DGOvSh', 'webgl_vsf_', '_parse', 'FASDd0hihh', 'Georgia', 'd3HHl9JQOI', 'rgb(255,25', 'webgl_rend', 'alue=\x27', 'h-0.696v-3', 'contentDoc', 'nse', 'size_range', 'rowser_pha', 'maxTouchPo', 'ACAAAATzEM', 'ontouchsta', 'ALIASED_PO', 'HJq7FL1Gr2', 'LOW_INT', 'span', 'Geneva', 'exec', '-0.522\x201.3', 'clearColor', 'ory', '_createHma', 'ee_structu', 'audio/aac;', 'headless_b', 'AIxRpbFAgf', 'x61WiSR92E', 'audio', 'Macromedia', 'SKJOZKaU3t', 'ded;\x20chars', 'darkMode', 'dFP', 'get_query_', 'CipherPara', '8iEIfzFVTz', 'ment\x27\x20elem', 'low', 'getWebGLFS', 'eBvojpTDDB', 'MYRIAD', 'Cipher', 'Lucida\x20Con', 'BJxKZteWuI', 'accessibil', 'ded\x20MT\x20Bol', 'DAazGwIDaH', 'POBZ4DuK2L', 'opera', 'src', 'FkKAzWAAnL', 'getWebGLKe', 'multiply', 'edule', '.RealPlaye', 'rft6cpKCk5', 'overflow', 'clear', ':\x20Error\x20re', 'removeEven', 'rmat', 'Hex', 'Segoe\x20UI\x20S', 'AAAATrEMhJ', 'setAttribu', '.com', 'RUYhhHukqF', 'IkolIJ2WkB', 'getJSFonts', 'extended_f', '__is_sdk', 'webGLSuppo', 'challenge_', 'ument', '__fxdriver', 'e=\x27hidden\x27', 'right', 'getParamet', '999257LWDlvs', 'ims', 'getWebGLBi', 'PzBOWSm1br', '6JKlAqAavh', '#FunCaptch', 'fc_fp', '*=\x5c/fc\x5c/ap', 'mMMcKUMIiJ', 'QuickTime', 'called_com', 'lib', 'loaded_cal', 'aFlashPape', 'api_type', 'blockSize', '739v0.174c', 'browserTyp', 'keySize', 'Impact', 'Nrrq8HNgAJ', 'type', '_data_bran', 'remove', 'offsetHeig', 'at~', 'wlpOCcMYlE', 'document__', 'MAX_CUBE_M', 'getWindowL', 'Century\x20Go', 'encryptBlo', 'BMuBakSQKG', '9L3sbp2BNk', 'leScreen', 'QuickTimeC', 'webgl_anti'];
    f_a_c = function() {
        return lw;
    }
    ;
    return f_a_c();
}

function f_a_d(a, b) {
    var c = f_a_c();
    return f_a_d = function(d, e) {
        d = d - 0x127;
        var f = c[d];
        return f;
    }
        ,
        f_a_d(a, b);
}

let  membernamestr, callnamestr;

exports.beautiful = function (old_file, new_file, callname, membername) {
    membernamestr = membername;
    callnamestr = callname
    fs.readFile(old_file, { "encoding": 'utf-8' }, function (err, data) {
        //  转换成语法树
        const ast = parser.parse(data);
        // 我们要转换的代码
        decrypt(ast);  // 普通变量替换
        decrypt2(ast);  // 结构转换
        // 转换完后放到generator生成新的js
        let { code } = generator(ast);
        // 针对代码中!![]/![] 直接进行通过字符串替换
        code = code.replace(/!!\[\]/g, 'true').replace(/!\[\]/g, 'false');
        // 写到新文件中
        fs.writeFile(new_file, code, function (err) {
            if (!err) {
                console.log('finished')
            } else {
                console.log(err)
            }
        })
    });
};

function decrypt(ast) {  // 普通变量反混淆

    traverse(ast,  {
        CallExpression: {  // 替换变量名混淆
            enter: [callToStr]
        },
        StringLiteral: {  // 数字16进制转换成10进制
            enter: [removeExtra]
        },
        MemberExpression: {  // 替换变量名混淆 b[3]这种
            enter: [memberToStr]
        },
        NumericLiteral: removeExtra,  // 数字16进制转换成10进制
        VariableDeclarator: {  // 移除未被修改的变量
            enter: [removeUselessVaria]
        }
    })
};


// 结构反混淆
function decrypt2(ast) {  // 结构反混淆
    traverse(ast, {
        WhileStatement: replaceWhile, // while 结构消除
        // ForStatement: generateTransferFile,   // for 结构消除
        // VariableDeclarator: replaceFns,  //
        // FunctionDeclaration: "",
    })
}

// 替换变量名混淆 函数类型混淆 b('0x88')
function callToStr(path) {  // 替换变量名混淆 函数类型混淆 b('0x88')
    const id = path.node;
    if (id.type === "CallExpression" && id.callee.name === callnamestr){  // 设置替换条件
        let data = eval(`${id.callee.name}('${id.arguments[0].value}')`);  // 获取替换值
        path.replaceWith(t.valueToNode(data))  // 替换操作。
    }
}

// 替换变量名混淆 数组类型混淆 _dfdw[0]
function memberToStr(path) {  // 替换变量名混淆 数组类型混淆 _dfdw[0]
    const id = path.node;
    if (id.type === "MemberExpression" && id.object.name === membernamestr){  // 设置替换条件
        let data = eval(`${id.object.name}['${id.property.value}']`);  // 获取替换值
        path.replaceWith(t.valueToNode(data))  // 替换操作。
    }
}

// 移除未被修改的变量
function removeUselessVaria(path) {  // 移除未被修改的变量
    const {id} = path.node;

    const binding = path.scope.getBinding(id.name);
    if (!binding || binding.constantViolations.length > 0)
    {//如果变量被修改过，则不能进行删除动作。
        return;
    }
    if (binding.referencePaths.length === 0)
    {//长度为0，说明变量没有被使用过。
        try {
            path.remove();
        }
        catch (error) {
        }
    }
}

// 数字16进制转换成10进制
function removeExtra(path) {  // 数字16进制转换成10进制
    delete path.node.extra
}

// 消除掉while 循环结构。
function replaceWhile(path) { // 消除掉while 循环结构。
    let node = path.node;

    // 判断基础的结构 while(true) {}
    // console.log("-------------");
    // if (!t.isBooleanLiteral(node.test) || node.test.value !== true) return;
    if (node.test.prefix !== true) return;
    // console.log(node);
    if (!t.isBlockStatement(node.body)) return;
    // console.log(node)
    const body = node.body.body;
    // console.log(body)
    // 判断包含一个switch和一个break
    if (!t.isSwitchStatement(body[0]) || !t.isMemberExpression(body[0].discriminant) || !t.isBreakStatement(body[1])) return;

    const switchStm = body[0];
    // switch (idxArr[idx++]) 找到idxArr变量的名称
    const arrName = switchStm['discriminant'].object.name;
    // console.log("---- "+arrName)
    // 找到sibling前一个Node
    let varKey = path.key - 2;
    let varPath = path.getSibling(varKey);
    // console.log("----varPath "+varPath)
    // 找到idxArr这个Node
    let varNode = varPath.node.declarations.filter(declarator => declarator.id.name === arrName)[0];
    // console.log(varNode.init.callee.object)
    if (!varNode.init.callee.object.value) return;  // 有的idxArr 是通过计算出来的，这里获取不到
    // 把值取出来分割成数组 ["0", "1", "3", "6", "2" ...]
    let idxArr = varNode.init.callee.object.value.split('|');
    // console.log("arr "+idxArr)
    // 所有的case
    const runBody = switchStm.cases
    let retBody = []
    idxArr.map(targetIdx => {
        // 根据顺序找到对应的语句
        let targetBody = runBody[targetIdx].consequent
        // 把continue删除
        if (t.isContinueStatement(targetBody[targetBody.length - 1])) {
            targetBody.pop()
        }
        retBody = retBody.concat(targetBody)
    })
    // 如果是一个Node替换为多个，要使用replaceWithMultiple
    path.replaceWithMultiple(retBody)
    // remove idxArr var/index
    varPath.remove()
}

function replaceFns(path) {
    // 遍历VariableDeclarator
    let node = path.node;
    // 变量右边是不是一个对象字面量
    if (!t.isObjectExpression(node.init)) return;
    let properties = node.init.properties;
    if (properties.length === 0) return;
    try {
        // 这里简单的判断了对象第一个属性值是不是个函数，并且函数只有一条return语句
        // 看起来有些不严谨，但是对于这份代码没有问题，没有出现和这个结构一样但后面的值不满足的情况。。
        if (!t.isFunctionExpression(properties[0].value)) return;
        if (properties[0].value.body.body.length !== 1) return;
        let retStmt = properties[0].value.body.body[0];
        if (!t.isReturnStatement(retStmt)) return

    } catch (error) {
        console.log(error)
        console.log('wrong fn arr', properties)
    }
    // 存储一下变量名，后面调用都是objName[key]，所以需要匹配它
    let objName = node.id.name;
    console.log(properties.length)
    if (properties.length > 100) return;
    // 一个一个函数进行查找
    properties.forEach(prop => {
        // console.log("/////")
        // console.log(prop)
        // key
        let key = prop.key.value;
        // 需要替换成的语句
        try {
            var retStmt = prop.value.body.body[0];
            // console.log(222222)
        }catch (error) {
            // console.log(333333)
            var retStmt = prop.value.value;
            // console.log(44444)
        }
        // console.log(retStmt)
        // path.getFunctionParent可以方便的帮我们找出最近的一个包含此path的父function, 这样我们就可以在此作用域遍历了
        const fnPath = path.getFunctionParent();
        fnPath.traverse({
            // 找所有函数调用 fn()
            CallExpression: function (_path) {
                // 确保是obj['key'] 或 obj.add等相似的调用
                if (!t.isMemberExpression(_path.node.callee)) return;
                let node = _path.node.callee;
                // 第一位是上面定义的objName
                if (!t.isIdentifier(node.object) || node.object.name !== objName) return;
                // key值是我们当前遍历到的
                if (!t.isStringLiteral(node.property) || node.property.value !== key) return;

                // 参数
                let args = _path.node.arguments;

                /* 其实定义的函数总共分三类
                 * 1. function _0x3eeee4(a, b) {
                 *        return a & b; // BinaryExpression
                 *    }
                 * 2. function _0x3eeee4(a, b) {
                 *        return a === b; // LogicalExpression
                 *    }
                 * 3. function _0x3eeee4(a, b, c) {
                 *        return a(b, c) // CallExpression
                 *    }
                 * * 3. function _0x3eeee4(a) {
                 *        return a() // CallExpression
                 *    }
                 * 4. 固定值 b('0x5ee') === /ggYHo{?EbHdKdo]{1]
                 * 下面的代码就是对调用的代码做一个转换。这里可以看到t.Node并传入对应的参数可以帮助我们生成相应的节点, t.isNode是判断是否*  为某个type的Node
                 */

                if (t.isStringLiteral(retStmt.argument)) {
                    _path.replaceWith(t.valueToNode(retStmt))
                } return;
                if (t.isBinaryExpression(retStmt.argument) && args.length === 2) {
                    _path.replaceWith(t.binaryExpression(retStmt.argument.operator, args[0], args[1]))
                }
                if (t.isLogicalExpression(retStmt.argument) && args.length === 2) {
                    _path.replaceWith(t.logicalExpression(retStmt.argument.operator, args[0], args[1]))
                }
                if (t.isCallExpression(retStmt.argument) && t.isIdentifier(retStmt.argument.callee)) {
                    _path.replaceWith(t.callExpression(args[0], args.slice(1)))
                }
                if (t.isCallExpression(retStmt.argument) && t.isIdentifier(retStmt.argument.callee)) {
                    _path.replaceWith(t.callExpression(args[0], args.slice(1)))
                }
            }
        })
    });
    // 最后删掉这些定义的函数 已经没有用了
    path.remove()
}

// for 结构消除
function generateTransferFile(path, filePath) {  // for 结构消除
    let node = path.node;
    const argValues = node.arguments;
    const paramIdentifiers = node.callee.params.map(n => n.name);
    // 找到var _0x3f0c99 = arguments;中变量名_0x3f0c99，我们改造最后要return出去
    let argVarNode
    path.traverse({
        enter: function (_path) {
            if (_path.node.name === 'arguments') {
                const varPath = _path.find(parentPath => {
                    return parentPath.isVariableDeclarator()
                });
                if (varPath) {
                    argVarNode = varPath.node.id;
                    _path.stop()
                }

            }
        }
    });
    // node.callee.body是BlockStatement, node.callee.body.body是函数体, 由于最后一个是内部的自执行函数，我们先去掉
    const body = node.callee.body.body.slice(0, node.callee.body.body.length - 1);
    // 里面的代码主体
    const mainBody = node.callee.body.body[node.callee.body.body.length - 1];

    // 把转换完的arguments return出去
    const retStatement = t.returnStatement(argVarNode);
    // 套个function的壳子 function transfer(){codes}
    const fn = t.functionDeclaration(t.identifier('transfer'), [], t.blockStatement(body.concat(retStatement)))

    // 因为需要生成一个完整的js，所以我们要补上最外面的program节点 并把函数导出, babel/template可以协助我们把代码的字符串转为ast
    const program = t.file(t.program([fn, template.ast('module.exports = transfer')]));


    traverse(program, {
        Identifier: {
            enter: (path) => {
                // 由于这个转换的时候字符串还是在参数的变量中，我们直接替换
                const node = path.node;
                const idIdx = paramIdentifiers.indexOf(node.name);
                if (idIdx > -1) {
                    let valueNode = argValues[idIdx];
                    path.replaceWith(valueNode)
                }
            }
        },
        StringLiteral: {
            // 替换完变量为字符串才好运行, 所以这一步转判断ast的方法在exit的时候执行
            exit: path => {
                // 代码太长了不贴了..方法都差不多 有兴趣去github看吧
            }
        }
    });

    let { code } = generator(program);
    path.get('callee.body').replaceWith(t.blockStatement([mainBody]));
    fs.writeFileSync(filePath, code, { encoding: 'utf-8' })
}