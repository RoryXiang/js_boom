
    window.use_fp = "1" == "1"; // �Ƿ�ɼ��豸ָ�ơ�
    var url = url || {};
    (function () {
    this.l = function (u, c) {
        try {
            var s = document.createElement("script");
            s.type = "text/javascript";
            s[document.all ? "onreadystatechange" : "onload"] = function () {

                if (document.all && this.readyState != "loaded" && this.readyState != "complete") {
                    return
                }
                this[document.all ? "onreadystatechange" : "onload"] = null;
                this.parentNode.removeChild(this);
                if (c) {
                    c()
                }
            };
            s.src = u;
            document.getElementsByTagName("head")[0].appendChild(s)
        } catch (e) {
        }
    };
}).call(url);

    var visitor_origin = function () {
    try {
    var need_restore = "1" == "1"; // �Ƿ��߻ָ��������̡�

    // �����Ҫ�߻ָ��������̣����Դ� cookie ��ȡ�û����ݡ�
    if (!need_restore || !Store.CookieHelper.get("SRF")) {

    // ����ȡʧ���ߴ����ÿ����̡�
    // ����ִ��ʱ����������� 3s��������Ϊ������
    var error_timeout = window.setTimeout("error_back()", 5000);

    tid.get(function (tid, where, confidence) {
    // ȡָ��˳����ɣ�������� timeout ��
    window.clearTimeout(error_timeout);
    incarnate(tid, where, confidence);
});
} else {
    // �û����ݴ��ڣ����Իָ��û����ݡ�
    restore();
}
} catch (e) {
    // ������
    error_back();
}
};

    var visitor_gray = function () {
    var from = "weibo";
    Store.DB.get("tid", function (v) {
    if (!v) {
    v = "";
}
    ufp.util.postData('https://' + window.location.host + '/visitor/genvisitor2', 'cb=visitor_gray_callback&tid=' + v + '&from=' + from, function (res) {
    if (res) {
    eval(res);
}
});
});
}
    // ������ڡ�
    wload(function () {
    visitor_gray();
});

    // �����ء� �ص�������
    var return_back = function (response) {

    if (response["retcode"] == 20000000) {
    back();
} else {
    // ������
    error_back(response["msg"]);
}
};

    // ��ת�س�ʼ��ַ��
    var back = function () {

    var url = "https://s.weibo.com/weibo?q=%E8%81%8C%E5%9C%BA";
    if (url != "none") {
    window.location.href = url;
}
};

    // ����㲥��
    var cross_domain = function (response) {

    var from = "weibo";
    var entry = "miniblog";
    if (response["retcode"] == 20000000) {

    var crossdomain_host = "login.sina.com.cn";
    if (crossdomain_host != "none") {

    var cross_domain_intr = window.location.protocol + "//" + crossdomain_host + "/visitor/visitor?a=crossdomain&cb=return_back&s=" +
    encodeURIComponent(response["data"]["sub"]) + "&sp=" + encodeURIComponent(response["data"]["subp"]) + "&from=" + from + "&_rand=" + Math.random() + "&entry=" + entry;
    url.l(cross_domain_intr);
} else {

    back();
}
} else {

    // ������
    error_back(response["msg"]);
}
};

    // ����㲥��
    var cross_domain2 = function (response) {

    var from = "weibo";
    var entry = "miniblog";
    if (response["retcode"] == 20000000) {

    var crossdomain_host = "login.sina.com.cn";
    if (crossdomain_host != "none") {

    var cross_domain_intr = window.location.protocol + "//" + crossdomain_host + "/visitor/visitor?a=crossdomain&s=" +
    encodeURIComponent(response["data"]["sub"]) + "&sp=" + encodeURIComponent(response["data"]["subp"]) + "&from=" + from + "&_rand=" + Math.random() + "&entry=" + entry+"&url=" + encodeURIComponent("https://s.weibo.com/weibo?q=%E8%81%8C%E5%9C%BA");
    window.location.href = cross_domain_intr;
} else {
    back();
}
} else {

    // ������
    error_back(response["msg"]);
}
};

    // Ϊ�û�����ÿ����� ��
    var incarnate = function (tid, where, conficence) {

    var gen_conf = "";
    var from = "weibo";
    var incarnate_intr = "https://" + window.location.host + "/visitor/visitor?a=incarnate&t=" +
    encodeURIComponent(tid) + "&w=" + encodeURIComponent(where) + "&c=" + encodeURIComponent(conficence) +
    "&gc=" + encodeURIComponent(gen_conf) + "&cb=cross_domain&from=" + from + "&_rand=" + Math.random();
    url.l(incarnate_intr);
};

    // �ָ��û���ʧ�����ݡ�
    var restore = function () {

    var from = "weibo";
    var restore_intr = "https://" + window.location.host +
    "/visitor/visitor?a=restore&cb=restore_back&from=" + from + "&_rand=" + Math.random();

    url.l(restore_intr);
};

    // ����ָ���ʧ�����ݡ�
    var restore_back = function (response) {

    // ���ݻָ��ɹ��߹㲥���̣������ߴ����ÿ����̡�
    if (response["retcode"] == 20000000) {

    var url = "https://s.weibo.com/weibo?q=%E8%81%8C%E5%9C%BA";
    var alt = response["data"]["alt"];
    var savestate = response["data"]["savestate"];
    if (alt != "") {
    requrl = (url == "none") ? "" : "&url=" + encodeURIComponent(url);
    var params = "entry=sso&alt=" + encodeURIComponent(alt) + "&returntype=META" +
    "&gateway=1&savestate=" + encodeURIComponent(savestate) + requrl;
    window.location.href = "https://login.sina.com.cn/sso/login.php?" + params;
} else {

    cross_domain(response);
}
} else if (response['retcode'] == 50111261 && isInIframe()) {
    //do nothing
} else {

    tid.get(function (tid, where, confidence) {
    incarnate(tid, where, confidence);
});
}
};

    // ����������ص�¼ҳ��
    var error_back = function (msg) {

    var url = "https://s.weibo.com/weibo?q=%E8%81%8C%E5%9C%BA";
    var clientType = "pc";
    if (url != "none") {

    if (url.indexOf("ssovie4c55=0") === -1) {
    url += (((url.indexOf("?") === -1) ? "?" : "&") + "ssovie4c55=0");
}
    if (clientType == "mobile") {
    window.location.href = "https://passport.weibo.cn/signin/login?r=" + url;
} else {
    window.location.href = "https://weibo.com/login.php";
}
} else {

    if (document.getElementById("message")) {
    document.getElementById("message").innerHTML = "Error occurred" + (msg ? (": " + msg) : ".");
}
}
};

    var visitor_gray_callback = function (response) {
    if (response["retcode"] === 20000000) {
    var tid = response["data"]["tid"];
    Store.DB.set('tid', tid);

    var alt = response["data"]["alt"];
    if (alt !== "") {
    var url = "https://s.weibo.com/weibo?q=%E8%81%8C%E5%9C%BA";
    var saveState = response["data"]["savestate"];
    requrl = (url === "none") ? "" : "&url=" + encodeURIComponent(url);
    var params = "entry=sso&alt=" + encodeURIComponent(alt) + "&returntype=META" +
    "&gateway=1&savestate=" + encodeURIComponent(saveState) + requrl;
    window.location.href = "https://login.sina.com.cn/sso/login.php?" + params;
} else {
    cross_domain2(response)
}
}
};

    var isInIframe = function () {
    try {
    return window.self !== window.top;
} catch (e) {
    return true;
}
}
