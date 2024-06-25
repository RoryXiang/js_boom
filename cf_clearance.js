const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
window = dom.window;
document = window.document;
XMLHttpRequest = window.XMLHttpRequest

(function() {
    window._cf_chl_opt = {
        cvId: '2',
        cZone: 'www.bannedbook.org',
        cType: 'managed',
        cNounce: '6146',
        cRay: '7bed9b4e2bb408c7',
        cHash: '6ea0faa1c6bd247',
        cUPMDTk: "\/bnews\/sohnews\/page\/2\/?__cf_chl_tk=R6EHPSUXXZ5e6FPWueqpgK29BYTWwRUxivztGZEKvZM-1682667097-0-gaNycGzNDFA",
        cFPWv: 'g',
        cTTimeMs: '1000',
        cMTimeMs: '0',
        cTplV: 5,
        cTplB: 'cf',
        cK: "",
        cRq: {
            ru: 'aHR0cHM6Ly93d3cuYmFubmVkYm9vay5vcmcvYm5ld3Mvc29obmV3cy9wYWdlLzIv',
            ra: 'TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExMi4wLjAuMCBTYWZhcmkvNTM3LjM2',
            rm: 'R0VU',
            d: 'dxigHgCpcfxwxvATDKwA0sQ/c69/UlTAAKK66G+/zx1M66XP9b04Ne/0EhoyVM5eYZ0S6X8NlkGXM0R2RdrPdYubWRPKBqECFLOTzTKgPAyMGYnMJSH9r18bO+6suhfTqdq3Bl+TlJBBJ0UDHZ4jyyzCi35CLZoVwZ3KIiLrCJPB3EEfxmAkDe9j5Z3gLw0pUMwo2fTeiymWiX4TOUURM5+VuM64ACzeyBHVbzjDHue9E2WVr//e9xbJ7HDzDiMZKOMYhOXUtE9vYSicwkDbHhaQnCu8GH0iAvb3rQoO8Q0AL6hYZIjzXqoJPHQYbuJXtx3hyEBt3tji4jMyavCooE7RuIpG9wztM+d2B+3hDHXqn94D7Y4YFqC07jyQnmPVTPCWU2Bsbx09fs2uYVRs77erJk+6DCrcrD0+eU5vG4b/ahGiQyRhpuSwsGv5bYwJPGrI/vW/tUfGFjIHCBLofoLbTpFWcnOss0QILACtIXt3gTf0ictBRde1f4aLpyTtzNNpwy1bUjNSUPQajmNTt+QXJfJbPsKBuj5mEqgpMmVUB2qlvpbc2VhmBsTVtmjqbCIfIkYSnHD9h9ragQvbpegQ/8eAETjZbRfJdoTkOiq2XWnl+KkQAQXMDBcO9+ug',
            t: 'MTY4MjY2NzA5Ny4zMDgwMDA=',
            m: '1iO5CWhEuUOjAqo7sWHvRZlIAO8v5f0p7MxWMIH+0uY=',
            i1: 'A8j4HmqRttE8oWJnu93JCw==',
            i2: 'dy1pKRBeXZdTTgQnEOmT9w==',
            zh: 'If/3THWHKmf7efzPlvrR0JdKXdpp9ERolDJro7WoUR0=',
            uh: 'KHK2rFuElrK5yT+xHUaUe3iPn4Ubhk37QHLDdxqPYlA=',
            hh: 'jco9E4PA2fnaNBPCfZbSl+REgu5Wv249TsivPUHkKU4=',
        }
    };
    var location = "https://www.bannedbook.org/bnews/sohnews/page/2/"
    var trkjs = document.createElement('img');
    trkjs.setAttribute('src', '/cdn-cgi/images/trace/managed/js/transparent.gif?ray=7bed9b4e2bb408c7');
    trkjs.setAttribute('alt', '');
    trkjs.setAttribute('style', 'display: none');
    document.body.appendChild(trkjs);
    var cpo = document.createElement('script');
    cpo.src = '/cdn-cgi/challenge-platform/h/g/orchestrate/managed/v1?ray=7bed9b4e2bb408c7';
    window._cf_chl_opt.cOgUHash = location.hash === '' && location.href.indexOf('#') !== -1 ? '#' : location.hash;
    window._cf_chl_opt.cOgUQuery = location.search === '' && location.href.slice(0, location.href.length - window._cf_chl_opt.cOgUHash.length).indexOf('?') !== -1 ? '?' : location.search;
    if (window.history && window.history.replaceState) {
        console.log("----location ", window.location)
        var ogU = location.pathname + window._cf_chl_opt.cOgUQuery + window._cf_chl_opt.cOgUHash;
        window.location.replaceState(null, null, "\/bnews\/sohnews\/page\/2\/?__cf_chl_rt_tk=R6EHPSUXXZ5e6FPWueqpgK29BYTWwRUxivztGZEKvZM-1682667097-0-gaNycGzNDFA" + window._cf_chl_opt.cOgUHash);
        cpo.onload = function() {
            history.replaceState(null, null, ogU);
        };
    }
    document.getElementsByTagName('head')[0].appendChild(cpo);
}());