
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.CgsWKOqO.js","/cdn/shopifycloud/checkout-web/assets/c1/app.BV1dErA5.js","/cdn/shopifycloud/checkout-web/assets/c1/vendor.bdI-yeR3.js","/cdn/shopifycloud/checkout-web/assets/c1/browser.DJv8lLUT.js","/cdn/shopifycloud/checkout-web/assets/c1/FullScreenBackground.DRJfIoKg.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-discount-offer.BKHg5aPi.js","/cdn/shopifycloud/checkout-web/assets/c1/alternativePaymentCurrency.CCVxQV6l.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal.DSHwCQTA.js","/cdn/shopifycloud/checkout-web/assets/c1/ButtonWithRegisterWebPixel.CxPk0Xu8.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-pt-BR.DuHZ5gMx.js","/cdn/shopifycloud/checkout-web/assets/c1/page-Information.BFp45uKm.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DnuAjCS3.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.7d_0AqQs.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour.BKYrJngV.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.DMo0pdv0.js","/cdn/shopifycloud/checkout-web/assets/c1/useForceShopPayUrl.CE6E9KIF.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.Bu6Anib3.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.DlBE1w0_.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.CcRaSssW.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummary.72Uvc6Wf.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.BzI_bRGl.js","/cdn/shopifycloud/checkout-web/assets/c1/PickupPointCarrierLogo.CbArtW9V.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks.DacpQOqW.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.yssCGFqR.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.DflZ3Pm4.js","/cdn/shopifycloud/checkout-web/assets/c1/rendering-extension-targets.CwOmabi8.js","/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-options.CksJIZLR.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.BiGvlfAH.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.D7EkV1ZR.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/FullScreenBackground.B_iZlQze.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ButtonWithRegisterWebPixel.C255G1T7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.BhtheElV.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NoAddressLocationFullDetour.D14orovx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OffsitePaymentFailed.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayLogo.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PickupPointCarrierLogo.DuZuWHqZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.V0VYEO4K.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0566/0298/4497/files/Ativo_1_x320.png?v=1738152529"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  