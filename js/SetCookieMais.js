function SetCookieMais() {
    var customerId = 'CmZb469D';
    var subDomain = 'afiliados.littleduck.com.br';
    var expirationTime = 2592000000;
    var tagMais = false;
    var storeMais = true;
    var pageStoreMais = '/pages/loja';
    var elementStoreMais = 'maisstore'; //selector or xpath
    var randomValue = Math.floor(Math.random() * 100000);
    var scriptSrc = 'https://' + subDomain + '/customer-hub/files/script/' + customerId + '.js?id=' + randomValue;
    var queryParams = new URLSearchParams(window.location.search);
    var utmSourceMais = queryParams.get('utm_source') === 'mais';
    var pmaisCookieExists = document.cookie.split(';').some(function (item) {
        return item.trim().startsWith('pmais=');
    });
    loadScript(scriptSrc, handleScriptLoad);
    var onStorePage = storeMais && window.location.pathname === pageStoreMais;
    if (!utmSourceMais && !(tagMais && pmaisCookieExists) && !onStorePage) {
        return;
    }
    function handleScriptLoad() {
        if (!window.PixelMais) return;
        if (utmSourceMais) {
            PixelMais.startPixelMais(subDomain, queryParams, expirationTime);
        }
        if (tagMais && pmaisCookieExists) {
            PixelMais.getTagAffiliate(subDomain, elementStoreMais);
        }
        if (onStorePage) {
            PixelMais.getStoreAffiliate(subDomain, pageStoreMais, elementStoreMais);
        }
    }
    function loadScript(src, callback) {
        var js = document.createElement('script');
        js.src = src;
        js.async = true;
        js.onload = callback;
        document.head.appendChild(js);
    }
}
SetCookieMais();