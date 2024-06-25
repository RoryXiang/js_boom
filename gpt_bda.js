

// const ALFCCJS = require('./local_test/111').ALFCCJS


let aF = {}, ALFCCJS = {AES: {}, config: {"format":{}}}


function createEncryptor(A, B) {
    return this.create(1, A, B);
}

function aEencrypt(A, B, D, E) {
    E = this.cfg.extend(E);
    // var F = A.createEncryptor(D, E)
    var F = createEncryptor(D, E)
        , G = F.finalize(B)
        , H = F['cfg'];
    return t['create']({
        'ciphertext': G,
        'key': D,
        'iv': H['iv'],
        'algorithm': A,
        'mode': H['mode'],
        'padding': H['padding'],
        'blockSize': A['blockSize'],
        'formatter': E['format']
    });
}

function Ginit(p, o) {
    this.sigBytes = o
    this.words = p
}


function erandom(o) {
    var  p = []
        , q = function(v) {
        var v = v,
            w = 987654321,
            x = 4294967295;
        return function() {
            w = 0x9069 * (w & 0xffff) + (w >> 0x10) & x,
                v = 0x4650 * (v & 0xffff) + (v >> 0x10) & x;
            var y = (w << 0x10) + v & x;
            return y /= 4294967296,
                y += 0.5,
            y * (Math.random() > 0.5 ? 1 : -1);
        }
            ;
    };
    for (var s = 0, t; s < o; s += 4) {
        var u = q((t || Math.random()) * 0x100000000);
        t = u() * 0x3ade67b7,
            p['push'](u() * 0x100000000 | 0x0);
    }
    return new Ginit(p, o)
    // return new g['init'](p,o);
}

function kcreate(h, j) {

        // var k = this['cfg'],
        var l = k["hasher"]["create"](),
        m = d["create"](),
        n = [],
        // n = m["words"],  // []
        // o = k["keySize"], // 12
        // p = k["iterations"];
        o = 12, // 12
        p = 1;
    while (n["length"] < o) {
        q && l["update"](q);
        var q = l['update'](h)["finalize"](j);
        l["reset"]();
        for (var r = 0x1; r < p; r += 0x1) {
            q = l["finalize"](q), l["reset"]();
        }
        m["concat"](q);
    }
    return m['sigBytes'] = o * 0x4, m;
}

function execute (A, B, D, E) {
    // A: bv + bw ua + 时间参数
    // B: 8
    // D: 4
    // E
    // E = e.random(8)
    E = erandom(8)
    var F = k.create({
        'keySize': B + D
    })['compute'](A, E)
        , G = e['create'](F['words']['slice'](B), D * 4);
    return F['sigBytes'] = B * 4,
        t['create']({
            'key': F,
            'iv': G,
            'salt': E
        });
}

function AE(A, B, D, E) {
    //A
    //B： bx,  浏览器参数
    //D: bv + bw ua + 时间参数
    //E：ALFCCJS.config
    var F = execute(D, 8, 4);  // 计算出 key ， iv ； F 中包含 iv key
    E['iv'] = F['iv'];
    return aEencrypt(A, B, F['key'], E)
}

ALFCCJS.AES.encrypt = function(D, E, F) {
    // D： bx,  浏览器参数
    // E: bv + bw ua + 时间参数
    // F： ALFCCJS.config
    // return A(E)['encrypt'](B, D, E, F);
    var B = {keySize: 8, blockSize: 4}
    return AE(B, D, E, F)
},

ALFCCJS['encrypt'] = function(a, b) {
    // a : bx,  浏览器参数
    // b: bv + bw  ua + 时间参数
    return ALFCCJS.AES.encrypt(
        a.toString(), b, ALFCCJS.config
    ).toString();
}

aF['encode'] = function(aZ, b0) {
    var ds = bU;
    b0 = false
    var b1, b2, b3, b4, b5, b6, b7, b8, b9 = [], ba = '', bb, bc, bd, be = aF[ds(f_a_ia.b)];
    bc = aZ,
        bb = bc.length % 0x3;
    if (bb > 0x0)
        while (bb++ < 0x3) {
            ba += '=',
                bc += '\x00';
        }
    for (bb = 0x0; bb < bc.length; bb += 0x3) {
        b1 = bc["charCodeAt"](bb),
            b2 = bc["charCodeAt"](bb + 0x1),
            b3 = bc["charCodeAt"](bb + 0x2),
            b4 = b1 << 0x10 | b2 << 0x8 | b3,
            b5 = b4 >> 0x12 & 0x3f,
            b6 = b4 >> 0xc & 0x3f,
            b7 = b4 >> 0x6 & 0x3f,
            b8 = b4 & 0x3f,
            b9[bb / 0x3] = be['charAt'](b5) + be['charAt'](b6) + be['charAt'](b7) + be['charAt'](b8);
    }
    return bd = b9['join'](''),
        bd = bd['slice'](0x0, bd['length'] - ba['length']) + ba,
        bd;
}

var bg = {
    'navigator_connection_downlink': 'float',
    'navigator_connection_downlink_max': 'float'
}

let fe = ["DNT:unknown", "L:en-US", "D:24", "PR:1", "S:1920,975", "AS:1920,935", "TO:-120",
    "SS:true", "LS:true", "IDB:true", "B:false", "ODB:true", "CPUC:unknown",
    "PK:Win32", "CFP:990181251", "FR:false", "FOS:false", "FB:false",
    "JSF:Andale Mono,Arial,Arial Black,Arial Hebrew,Arial Narrow,Arial Rounded MT Bold,Arial Unicode MS,Comic Sans MS,Courier,Courier New,Geneva,Georgia,Helvetica,Helvetica Neue,Impact,LUCIDA GRANDE,Microsoft Sans Serif,Monaco,Palatino,Tahoma,Times,Times New Roman,Trebuchet MS,Verdana,Wingdings,Wingdings 2,Wingdings 3",
    "P:Chrome PDF Plugin", "T:0,false,false", "H:8", "SWF:false"]

const enhanced_fp = [{"key":"webgl_extensions","value":"ANGLE_instanced_arrays;EXT_blend_minmax;EXT_color_buffer_half_float;EXT_disjoint_timer_query;EXT_float_blend;EXT_frag_depth;EXT_shader_texture_lod;EXT_texture_compression_rgtc;EXT_texture_filter_anisotropic;EXT_sRGB;KHR_parallel_shader_compile;OES_element_index_uint;OES_fbo_render_mipmap;OES_standard_derivatives;OES_texture_float;OES_texture_float_linear;OES_texture_half_float;OES_texture_half_float_linear;OES_vertex_array_object;WEBGL_color_buffer_float;WEBGL_compressed_texture_s3tc;WEBGL_compressed_texture_s3tc_srgb;WEBGL_debug_renderer_info;WEBGL_debug_shaders;WEBGL_depth_texture;WEBGL_draw_buffers;WEBGL_lose_context;WEBGL_multi_draw"},
    {"key":"webgl_extensions_hash","value":"35ad3898c88cfee4e1fa2c22596062e5"},
    {"key":"webgl_renderer","value":"WebKit WebGL"},
    {"key":"webgl_vendor","value":"WebKit"},
    {"key":"webgl_version","value":"WebGL 1.0 (OpenGL ES 2.0 Chromium)"},
    {"key":"webgl_shading_language_version","value":"WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)"},
    {"key":"webgl_aliased_line_width_range","value":"[1, 1]"},
    {"key":"webgl_aliased_point_size_range","value":"[1, 64]"},
    {"key":"webgl_antialiasing","value":"yes"},
    {"key":"webgl_bits","value":"8,8,24,8,8,0"},
    {"key":"webgl_max_params","value":"16,32,16384,1024,16384,16,16384,31,16,16,1024"},
    {"key":"webgl_max_viewport_dims","value":"[16384, 16384]"},
    {"key":"webgl_unmasked_vendor","value":"Google Inc. (Apple)"},
    {"key":"webgl_unmasked_renderer","value":"ANGLE (Apple, Apple M1, OpenGL 4.1)"},
    {"key":"webgl_vsf_params","value":"23,127,127,23,127,127,23,127,127"},
    {"key":"webgl_vsi_params","value":"0,31,30,0,31,30,0,31,30"},
    {"key":"webgl_fsf_params","value":"23,127,127,23,127,127,23,127,127"},
    {"key":"webgl_fsi_params","value":"0,31,30,0,31,30,0,31,30"},
    {"key":"webgl_hash_webgl","value":"f3447e8adc3fe5dff2dbe38e5d2e700d"},
    {"key":"user_agent_data_brands","value":"Not.A/Brand,Chromium,Google Chrome"},
    {"key":"user_agent_data_mobile","value":false},
    {"key":"navigator_connection_downlink","value":1.5},
    {"key":"navigator_connection_downlink_max","value":""},
    {"key":"network_info_rtt","value":350},
    {"key":"network_info_save_data","value":false},
    {"key":"network_info_rtt_type","value":"None"},
    {"key":"screen_pixel_depth","value":24},
    {"key":"navigator_device_memory","value":8},
    {"key":"navigator_languages","value":"zh-CN,zh,en"},
    {"key":"window_inner_width","value":0},
    {"key":"window_inner_height","value":0},
    {"key":"window_outer_width","value":1920},
    {"key":"window_outer_height","value":1055},
    {"key":"browser_detection_firefox","value":false},
    {"key":"browser_detection_brave","value":false},
    {"key":"audio_codecs","value":{"ogg":"probably","mp3":"probably","wav":"probably","m4a":"maybe","aac":"probably"}},
    {"key":"video_codecs","value":{"ogg":"probably","h264":"probably","webm":"probably","mpeg4v":"","mpeg4a":"","theora":""}},
    {"key":"media_query_dark_mode","value":false},
    {"key":"headless_browser_phantom","value":false},
    {"key":"headless_browser_selenium","value":false},
    {"key":"headless_browser_nightmare_js","value":false},
    {"key":"document__referrer","value":""},
    {"key":"window__ancestor_origins","value":["https://chat.openai.com"]},
    {"key":"window__tree_index","value":[2]},
    {"key":"window__tree_structure","value":"[[],[],[]]"},
    {"key":"window__location_href","value":"https://tcr9i.chat.openai.com/v2/1.5.4/enforcement.cd12da708fe6cbe6e068918c38de2ad9.html#35536E1E-65B4-4D96-9D97-6ADB7EFF8147"},
    {"key":"client_config__sitedata_location_href","value":"https://chat.openai.com/"},
    {"key":"client_config__surl","value":"https://tcr9i.chat.openai.com"},
    {"key":"mobile_sdk__is_sdk"},{"key":"client_config__language","value":"None"},
    {"key":"navigator_battery_charging","value":true},
    {"key":"audio_fingerprint","value":"124.04344968475198"}]

const now = new Date()['getTime']()

const b64_now = Buffer.from(Math.floor(new Date()['getTime']() / 1000).toString()).toString('base64')

var b5 = [
    {"key": "api_type", "value": "js"},
    {"key": "p", "value": 1},  // constant
    {"key": "f", "value": '2be9f4149fdef4b3a4e4e013e89638ed'},  // browser instance ID
    {"key": "n", "value": b64_now},  // base64 encoding of time.now()
    {"key": "wh", "value": "04422442121a388db7bf68f6ce3ae8ca|72627afbfd19a741c7da1732218301ac"},  // WindowHandle ID
    {"key": "enhanced_fp", "value":enhanced_fp},  //
    {"key": "fe", "value": fe},  // browser properties
    {"key": "ife_hash", "value": "bd680f7469bc8b90f130c6fb1a8435fb"},  // hash of browser properties
    {"key": "cs", "value": 1},  // canvas supported 0/1
    {"key": "jsbd", "value": '{"HL":6,"NCE":true,"DMTO":1,"DOTO":1}'}
    ]

var bt = new Date()['getTime']() / 1000
    , bu = 21600
    , bv = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    , bw = Math.round(bt - bt % bu)
    // , bx = stringifyWithFloat(b5, bg)
    , bx = JSON.stringify(b5)
    , by = ALFCCJS.encrypt(bx, bv + bw);  //

// const tmp = aF['encode'](by)  //
//     // b3[dK(f_a_ir.m)] = aF['encode'](by)

const tmp = erandom(8)


console.log(tmp)