function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(typeof e + " is not iterable"); }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function removeInitialTrackingCookiesAndStorage() {
  var _document$cookie$spli, _document$cookie$spli2;
  var cookiesToRemove = ['utm_source', 'utm_content', 'utm_medium', 'utm_campaign', 'uniqueId', 'solomon_email', 'solomon_phone', 'solomon_firstName', 'solomon_lastName', 'solomon_city', 'solomon_state', 'solomon_zip', 'solomon_country'];
  var pastDate = new Date(0).toUTCString();
  var currentUtmsTrack = (_document$cookie$spli = document.cookie.split('; ').find(function (row) {
    return row.startsWith('utmsTrack=');
  })) == null ? void 0 : _document$cookie$spli.split('=')[1];
  var uniqueIdCookie = (_document$cookie$spli2 = document.cookie.split('; ').find(function (row) {
    return row.startsWith('uniqueId=');
  })) == null ? void 0 : _document$cookie$spli2.split('=')[1];
  var uniqueIdLocalStorage = null;
  try {
    uniqueIdLocalStorage = localStorage.getItem('uniqueId');
  } catch (e) {}
  var uniqueId = uniqueIdCookie || uniqueIdLocalStorage;
  if (currentUtmsTrack && uniqueId) {
    document.cookie = "utmsTrack=" + currentUtmsTrack.replace(uniqueId, '_') + "; path=/;";
  }
  cookiesToRemove.forEach(function (cookieName) {
    document.cookie = cookieName + "=; expires=" + pastDate + "; path=/;";
  });
  var localStorageKeysToRemove = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'SolomonUserInternal', 'sol_email_sent', 'uniqueId'];
  localStorageKeysToRemove.forEach(function (key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  });
  try {
    window.SolomonUser = null;
    window.solomonCustomer = null;
  } catch (e) {}
}
function waitForVtexCheckout(maxWaitTime) {
  if (maxWaitTime === void 0) {
    maxWaitTime = 5000;
  }
  return new Promise(function (resolve) {
    var _vtexjs;
    if ((_vtexjs = window.vtexjs) != null && _vtexjs.checkout) {
      return resolve(true);
    }
    var startTime = Date.now();
    var interval = setInterval(function () {
      var _vtexjs2;
      if ((_vtexjs2 = window.vtexjs) != null && _vtexjs2.checkout) {
        clearInterval(interval);
        return resolve(true);
      }
      if (Date.now() - startTime >= maxWaitTime) {
        clearInterval(interval);
        return resolve(false);
      }
    }, 100);
  });
}
function updateVtexMarketingData(_x) {
  return _updateVtexMarketingData.apply(this, arguments);
}
function _updateVtexMarketingData() {
  _updateVtexMarketingData = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee58(utms) {
    var _window$vtexjs2, _window$vtexjs3, vtexCheckoutExists, orderFormId, orderForm, currentMarketingData, customDataPayload, response, _t11;
    return _regenerator().w(function (_context59) {
      while (1) switch (_context59.n) {
        case 0:
          _context59.p = 0;
          _context59.n = 1;
          return waitForVtexCheckout(5000);
        case 1:
          vtexCheckoutExists = _context59.v;
          if (vtexCheckoutExists) {
            _context59.n = 2;
            break;
          }
          Logger.error('[NEMU] window.vtexjs.checkout não está disponível após 5 segundos. A atualização foi cancelada.');
          return _context59.a(2);
        case 2:
          orderFormId = (_window$vtexjs2 = window.vtexjs) == null || (_window$vtexjs2 = _window$vtexjs2.checkout) == null || (_window$vtexjs2 = _window$vtexjs2.orderForm) == null ? void 0 : _window$vtexjs2.orderFormId;
          _context59.n = 3;
          return window.vtexjs.checkout.getOrderForm();
        case 3:
          orderForm = _context59.v;
          currentMarketingData = orderForm.marketingData || {};
          if (orderFormId) {
            _context59.n = 4;
            break;
          }
          Logger.error('[NEMU] Não foi possível encontrar o orderFormId. A atualização foi cancelada.');
          return _context59.a(2);
        case 4:
          customDataPayload = _extends({}, currentMarketingData, {
            marketingTags: [].concat(currentMarketingData.marketingTags, [utms.utm_term])
          });
          Logger.info("[NEMU] Atualizando o marketingData:", JSON.stringify(customDataPayload, null, 2));
          _context59.n = 5;
          return (_window$vtexjs3 = window.vtexjs) == null || (_window$vtexjs3 = _window$vtexjs3.checkout) == null ? void 0 : _window$vtexjs3.sendAttachment('marketingData', customDataPayload);
        case 5:
          response = _context59.v;
          if (response) {
            Logger.info('[NEMU] marketingData da VTEX atualizado com sucesso!');
          } else {
            Logger.error("[NEMU] Falha ao atualizar o marketingData da VTEX");
          }
          _context59.n = 7;
          break;
        case 6:
          _context59.p = 6;
          _t11 = _context59.v;
          Logger.error('[NEMU] Ocorreu um erro inesperado ao tentar atualizar o marketingData da VTEX:', _t11);
        case 7:
          return _context59.a(2);
      }
    }, _callee58, null, [[0, 6]]);
  }));
  return _updateVtexMarketingData.apply(this, arguments);
}
function waitForVtexSessionId(key, platform) {
  return new Promise(function (resolve) {
    if (platform !== 'vtex') {
      return resolve(null);
    }
    var getCookieValue = function getCookieValue(cookieName) {
      var cookies = document.cookie.split(';');
      for (var _iterator = _createForOfIteratorHelperLoose(cookies), _step; !(_step = _iterator()).done;) {
        var cookie = _step.value;
        var trimmedCookie = cookie.trim();
        var equalIndex = trimmedCookie.indexOf('=');
        if (equalIndex === -1) continue;
        var name = trimmedCookie.substring(0, equalIndex);
        var value = trimmedCookie.substring(equalIndex + 1);
        if (name === cookieName && value) {
          if (value.startsWith('__ofid=')) {
            return value.substring(7);
          }
          return value;
        }
      }
      return null;
    };
    var interval = setInterval(function () {
      var _JSON$parse;
      var item = localStorage.getItem(key);
      if (item !== null && ((_JSON$parse = JSON.parse(item)) == null ? void 0 : _JSON$parse.id) !== 'default-order-form') {
        var _JSON$parse2;
        clearInterval(interval);
        clearTimeout(timeout);
        return resolve((_JSON$parse2 = JSON.parse(item)) == null ? void 0 : _JSON$parse2.id);
      }
      var cookieValue = getCookieValue('checkout.vtex.com');
      if (cookieValue) {
        clearInterval(interval);
        clearTimeout(timeout);
        return resolve(cookieValue);
      }
    }, 100);
    var timeout = setTimeout(function () {
      clearInterval(interval);
      var cookieValue = getCookieValue('checkout.vtex.com');
      resolve(cookieValue);
    }, 10000);
  });
}
function removeEmptyObjectProperties(obj) {
  if (Array.isArray(obj)) {
    return obj.filter(function (item) {
      return typeof item === 'boolean' || !!item;
    }).map(removeEmptyObjectProperties);
  } else if (obj && typeof obj === 'object') {
    return Object.entries(obj).reduce(function (accumulator, _ref) {
      var key = _ref[0],
        value = _ref[1];
      var convertedValue = removeEmptyObjectProperties(value);
      var HAS_PROPERTY_VALUE = convertedValue !== null && convertedValue !== undefined && convertedValue !== '' && (!(typeof convertedValue === 'number') || true) && (!(typeof convertedValue === 'boolean') || true) && (!Array.isArray(convertedValue) || convertedValue.length !== 0) && (typeof convertedValue !== 'object' || Object.keys(convertedValue).length !== 0);
      if (HAS_PROPERTY_VALUE) {
        accumulator[key] = convertedValue;
      } else {
        delete accumulator[key];
      }
      return accumulator;
    }, Array.isArray(obj) ? [] : {});
  } else {
    return obj;
  }
}
function generateDomain() {
  var hostname = window.location.hostname;
  var parts = hostname.split('.');
  var domain = '';
  var tld = '';
  if (parts.length >= 3) {
    tld = parts.pop();
    domain = parts.pop();
    if (tld === 'br') {
      domain = parts.pop() + '.' + domain;
    }
    domain = domain + '.' + tld;
  } else {
    tld = parts.pop();
    domain = parts.pop() || '';
    domain = !!domain ? domain + '.' + tld : tld;
  }
  domain = '.' + domain;
  return domain;
}
var Logger = /*#__PURE__*/function () {
  function Logger() {}
  Logger.error = function error() {
    for (var _len = arguments.length, message = new Array(_len), _key = 0; _key < _len; _key++) {
      message[_key] = arguments[_key];
    }
    console.error("[ERROR] Nemu Pixel ", message);
  };
  Logger.info = function info() {
    for (var _len2 = arguments.length, message = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      message[_key2] = arguments[_key2];
    }
    console.log("[INFO] Nemu Pixel ", message);
  };
  return Logger;
}();
var Storage = /*#__PURE__*/function () {
  function Storage() {}
  Storage.isJsonString = function isJsonString(value) {
    try {
      JSON.parse(value);
      return true;
    } catch (error) {
      return false;
    }
  };
  var _proto = Storage.prototype;
  _proto.setCookie = function setCookie(name, value, date) {
    var cookieValue = typeof value === 'object' ? JSON.stringify(value) : value;
    if (!!date) {
      document.cookie = name + "=" + cookieValue + "; expires=" + date.toUTCString() + "; path=/";
    } else {
      document.cookie = name + "=" + cookieValue + "; path=/";
    }
  };
  _proto.removeCookie = function removeCookie(name) {
    var pastDate = new Date(0);
    document.cookie = name + "=; expires=" + pastDate.toUTCString();
  };
  _proto.hasCookiesEnabled = function hasCookiesEnabled() {
    var isCookiesEnabled = navigator.cookieEnabled;
    if (typeof navigator.cookieEnabled === 'undefined' || !isCookiesEnabled) {
      document.cookie = 'check';
      isCookiesEnabled = document.cookie.indexOf('check') !== -1;
    }
    return isCookiesEnabled;
  };
  _proto.getCookieByName = function getCookieByName(name) {
    try {
      var cookieString = "; " + document.cookie;
      var parts = cookieString.split('; ').filter(function (part) {
        return part;
      });
      for (var _iterator2 = _createForOfIteratorHelperLoose(parts), _step2; !(_step2 = _iterator2()).done;) {
        var part = _step2.value;
        var _part$split = part.split('='),
          key = _part$split[0],
          value = _part$split[1];
        if (key === name) {
          var decodedResult = value && decodeURIComponent(value);
          return decodedResult ? Storage.isJsonString(decodedResult) ? JSON.parse(decodedResult) : decodedResult : null;
        }
      }
    } catch (error) {
      Logger.error('Error parsing cookie value:', error);
      return null;
    }
  };
  _proto.setLocalStorageItem = function setLocalStorageItem(key, value) {
    try {
      var stringValue = typeof value === 'object' ? JSON.stringify(value) : value;
      localStorage.setItem(key, stringValue);
    } catch (error) {
      Logger.error('Error setting localStorage item:', error);
    }
  };
  _proto.getLocalStorageItem = function getLocalStorageItem(key) {
    try {
      var item = localStorage.getItem(key);
      if (!item) return null;
      return Storage.isJsonString(item) ? JSON.parse(item) : item;
    } catch (error) {
      Logger.error('Error getting localStorage item:', error);
      return null;
    }
  };
  _proto.removeLocalStorageItem = function removeLocalStorageItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      Logger.error('Error removing localStorage item:', error);
    }
  };
  return Storage;
}();
var BaseService = /*#__PURE__*/function () {
  function BaseService() {
    this.MAX_PAYLOAD_SIZE_FOR_BEACON = 64 * 1024;
  }
  var _proto2 = BaseService.prototype;
  // 64KB
  _proto2.api =
  /*#__PURE__*/
  function () {
    var _api = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(url, method, options) {
      var response, data;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (method === void 0) {
              method = 'GET';
            }
            _context.n = 1;
            return fetch(url, _extends({
              method: method,
              headers: {
                'Content-Type': 'application/json'
              }
            }, options));
          case 1:
            response = _context.v;
            if (!(response.status !== 204)) {
              _context.n = 3;
              break;
            }
            _context.n = 2;
            return response.json();
          case 2:
            data = _context.v;
          case 3:
            if (response.ok) {
              _context.n = 4;
              break;
            }
            throw data;
          case 4:
            return _context.a(2, data);
        }
      }, _callee);
    }));
    function api(_x2, _x3, _x4) {
      return _api.apply(this, arguments);
    }
    return api;
  }();
  _proto2.sendBeaconOrFetch = /*#__PURE__*/function () {
    var _sendBeaconOrFetch = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(url, body) {
      var payloadSize, success, fetchOptions;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            payloadSize = new Blob([body]).size;
            console.log("[NEMU WEB PIXEL] Payload size: " + payloadSize + " bytes");
            if (!(payloadSize < this.MAX_PAYLOAD_SIZE_FOR_BEACON && navigator.sendBeacon)) {
              _context2.n = 1;
              break;
            }
            success = navigator.sendBeacon(url, body);
            if (!success) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            fetchOptions = {
              method: 'POST',
              body: body,
              headers: {
                'Content-Type': 'text/plain'
              }
            };
            if (payloadSize < this.MAX_PAYLOAD_SIZE_FOR_BEACON) {
              fetchOptions.keepalive = true;
            }
            _context2.n = 2;
            return fetch(url, fetchOptions);
          case 2:
            return _context2.a(2);
        }
      }, _callee2, this);
    }));
    function sendBeaconOrFetch(_x5, _x6) {
      return _sendBeaconOrFetch.apply(this, arguments);
    }
    return sendBeaconOrFetch;
  }();
  _proto2.apiNoContentType = /*#__PURE__*/function () {
    var _apiNoContentType = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(url, method, options) {
      var response, data;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (method === void 0) {
              method = 'GET';
            }
            _context3.n = 1;
            return fetch(url, _extends({
              method: method
            }, options));
          case 1:
            response = _context3.v;
            _context3.n = 2;
            return response.text();
          case 2:
            data = _context3.v;
            if (response.headers.get('content-type') === 'application/json') {
              try {
                data = JSON.parse(data);
              } catch (_unused) {}
            }
            if (response.ok) {
              _context3.n = 3;
              break;
            }
            throw data;
          case 3:
            return _context3.a(2, data);
        }
      }, _callee3);
    }));
    function apiNoContentType(_x7, _x8, _x9) {
      return _apiNoContentType.apply(this, arguments);
    }
    return apiNoContentType;
  }();
  return BaseService;
}();
var ClientService = /*#__PURE__*/function (_BaseService2) {
  function ClientService() {
    return _BaseService2.apply(this, arguments) || this;
  }
  _inheritsLoose(ClientService, _BaseService2);
  ClientService.create = function create() {
    return new ClientService();
  };
  var _proto3 = ClientService.prototype;
  _proto3.getClientHash = /*#__PURE__*/function () {
    var _getClientHash = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var fpLib, fp, _yield$fp$get, clientHash, _t;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.p = 0;
            _context4.n = 1;
            return import('https://openfpcdn.io/fingerprintjs/v4');
          case 1:
            fpLib = _context4.v;
            _context4.n = 2;
            return fpLib.load();
          case 2:
            fp = _context4.v;
            _context4.n = 3;
            return fp.get();
          case 3:
            _yield$fp$get = _context4.v;
            clientHash = _yield$fp$get.visitorId;
            return _context4.a(2, clientHash);
          case 4:
            _context4.p = 4;
            _t = _context4.v;
            return _context4.a(2, null);
        }
      }, _callee4, null, [[0, 4]]);
    }));
    function getClientHash() {
      return _getClientHash.apply(this, arguments);
    }
    return getClientHash;
  }();
  _proto3.getClientId = /*#__PURE__*/function () {
    var _getClientId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var firstApi, secondApi, thirdApi, clientIp, _t2;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.p = 0;
            firstApi = this.createPromiseNoContentType('https://ipinfo.io/ip');
            secondApi = this.createPromiseNoContentType('https://api.ipify.org/?format=json', 'ip');
            thirdApi = this.createPromise('https://api.bigdatacloud.net/data/client-ip', 'ipString');
            _context5.n = 1;
            return Promise.any([firstApi, secondApi, thirdApi]);
          case 1:
            clientIp = _context5.v;
            return _context5.a(2, btoa(String(clientIp)));
          case 2:
            _context5.p = 2;
            _t2 = _context5.v;
            return _context5.a(2, null);
        }
      }, _callee5, this, [[0, 2]]);
    }));
    function getClientId() {
      return _getClientId.apply(this, arguments);
    }
    return getClientId;
  }();
  _proto3.createPromise = function createPromise(url, fieldName) {
    var _this = this;
    return new Promise(function (resolve, reject) {
      _this.api(url, 'GET').then(function (response) {
        // @ts-ignore
        resolve(!!fieldName ? response[fieldName] : response);
      }).catch(function () {
        return reject(undefined);
      });
    });
  };
  _proto3.createPromiseNoContentType = function createPromiseNoContentType(url, fieldName) {
    var _this2 = this;
    return new Promise(function (resolve, reject) {
      _this2.apiNoContentType(url, 'GET').then(function (response) {
        // @ts-ignore
        resolve(!!fieldName ? response[fieldName] : response);
      }).catch(function () {
        return reject(undefined);
      });
    });
  };
  return ClientService;
}(BaseService);
var SessionHistoryService = /*#__PURE__*/function (_BaseService3) {
  function SessionHistoryService(_ref2) {
    var _this3;
    var baseURL = _ref2.baseURL;
    _this3 = _BaseService3.call(this) || this;
    _this3.baseURL = void 0;
    Object.assign(_this3, {
      baseURL: baseURL
    });
    return _this3;
  }
  _inheritsLoose(SessionHistoryService, _BaseService3);
  var _proto4 = SessionHistoryService.prototype;
  _proto4.sendInitateCheckoutEvent = /*#__PURE__*/function () {
    var _sendInitateCheckoutEvent = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(_ref3) {
      var trackingId, trackingSessionId, trackingSessionHistoryId;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            trackingId = _ref3.trackingId, trackingSessionId = _ref3.trackingSessionId, trackingSessionHistoryId = _ref3.trackingSessionHistoryId;
            _context6.n = 1;
            return this.api(this.baseURL + "/trackings/" + trackingId + "/sessions/" + trackingSessionId + "/histories/" + trackingSessionHistoryId + "/initiate_checkout", 'POST', {});
          case 1:
            return _context6.a(2, _context6.v);
        }
      }, _callee6, this);
    }));
    function sendInitateCheckoutEvent(_x0) {
      return _sendInitateCheckoutEvent.apply(this, arguments);
    }
    return sendInitateCheckoutEvent;
  }();
  _proto4.getLastBySessionId = /*#__PURE__*/function () {
    var _getLastBySessionId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(trackingId, sessionId) {
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return this.api(this.baseURL + "/trackings/" + trackingId + "/sessions/" + sessionId + "/histories/last");
          case 1:
            return _context7.a(2, _context7.v);
        }
      }, _callee7, this);
    }));
    function getLastBySessionId(_x1, _x10) {
      return _getLastBySessionId.apply(this, arguments);
    }
    return getLastBySessionId;
  }();
  _proto4.updateNuvemshopId = /*#__PURE__*/function () {
    var _updateNuvemshopId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(_ref4) {
      var trackingId, trackingSessionId, nuvemShopId, _t3;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            trackingId = _ref4.trackingId, trackingSessionId = _ref4.trackingSessionId, nuvemShopId = _ref4.nuvemShopId;
            _context8.p = 1;
            if (nuvemShopId) {
              _context8.n = 2;
              break;
            }
            return _context8.a(2);
          case 2:
            _context8.n = 3;
            return this.api(this.baseURL + "/trackings/" + trackingId + "/sessions/" + trackingSessionId + "/histories/last", 'PUT', {
              body: JSON.stringify({
                nuvemShopId: nuvemShopId,
                vtexSessionId: nuvemShopId
              })
            });
          case 3:
            return _context8.a(2, _context8.v);
          case 4:
            _context8.p = 4;
            _t3 = _context8.v;
            Logger.error(JSON.stringify(_t3));
            return _context8.a(2);
        }
      }, _callee8, this, [[1, 4]]);
    }));
    function updateNuvemshopId(_x11) {
      return _updateNuvemshopId.apply(this, arguments);
    }
    return updateNuvemshopId;
  }();
  _proto4.updateVtexSessionId = /*#__PURE__*/function () {
    var _updateVtexSessionId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(_ref5) {
      var trackingId, trackingSessionId, vtexSessionId, MAX_RETRIES, RETRY_DELAY_MS, attempt, _t4;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            trackingId = _ref5.trackingId, trackingSessionId = _ref5.trackingSessionId, vtexSessionId = _ref5.vtexSessionId;
            MAX_RETRIES = 3;
            RETRY_DELAY_MS = 500;
            attempt = 1;
          case 1:
            if (!(attempt <= MAX_RETRIES)) {
              _context9.n = 9;
              break;
            }
            _context9.p = 2;
            if (vtexSessionId) {
              _context9.n = 3;
              break;
            }
            return _context9.a(2);
          case 3:
            _context9.n = 4;
            return this.api(this.baseURL + "/trackings/" + trackingId + "/sessions/" + trackingSessionId + "/histories/last", 'PUT', {
              body: JSON.stringify({
                vtexSessionId: vtexSessionId
              })
            });
          case 4:
            return _context9.a(2, _context9.v);
          case 5:
            _context9.p = 5;
            _t4 = _context9.v;
            Logger.error("Attempt " + attempt + " failed with 500 error. Retrying in " + RETRY_DELAY_MS + "ms...");
            if (!(attempt < MAX_RETRIES)) {
              _context9.n = 7;
              break;
            }
            _context9.n = 6;
            return new Promise(function (resolve) {
              return setTimeout(resolve, RETRY_DELAY_MS);
            });
          case 6:
            _context9.n = 8;
            break;
          case 7:
            Logger.error("All " + MAX_RETRIES + " retry attempts failed.");
            return _context9.a(2);
          case 8:
            attempt++;
            _context9.n = 1;
            break;
          case 9:
            return _context9.a(2);
        }
      }, _callee9, this, [[2, 5]]);
    }));
    function updateVtexSessionId(_x12) {
      return _updateVtexSessionId.apply(this, arguments);
    }
    return updateVtexSessionId;
  }();
  _proto4.updateTraySessionId = /*#__PURE__*/function () {
    var _updateTraySessionId = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(_ref6) {
      var trackingId, trackingSessionId, traySessionId, _t5;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            trackingId = _ref6.trackingId, trackingSessionId = _ref6.trackingSessionId, traySessionId = _ref6.traySessionId;
            _context0.p = 1;
            if (traySessionId) {
              _context0.n = 2;
              break;
            }
            return _context0.a(2);
          case 2:
            _context0.n = 3;
            return this.api(this.baseURL + "/trackings/" + trackingId + "/sessions/" + trackingSessionId + "/histories/last", 'PUT', {
              body: JSON.stringify({
                traySessionId: traySessionId
              })
            });
          case 3:
            return _context0.a(2, _context0.v);
          case 4:
            _context0.p = 4;
            _t5 = _context0.v;
            Logger.error(JSON.stringify(_t5));
            return _context0.a(2);
        }
      }, _callee0, this, [[1, 4]]);
    }));
    function updateTraySessionId(_x13) {
      return _updateTraySessionId.apply(this, arguments);
    }
    return updateTraySessionId;
  }();
  _proto4.add = /*#__PURE__*/function () {
    var _add = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(_ref7) {
      var _window, _window2, _window3, _document, _document2;
      var sessionId, productData, trackingId, referrer, clientHash, clientId, facebookParams, platform, vtexSessionId, nuvemShopId, woocommerceKey, queryParams, response;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            sessionId = _ref7.sessionId, productData = _ref7.productData, trackingId = _ref7.trackingId, referrer = _ref7.referrer, clientHash = _ref7.clientHash, clientId = _ref7.clientId, facebookParams = _ref7.facebookParams, platform = _ref7.platform;
            _context1.n = 1;
            return waitForVtexSessionId('orderform', platform);
          case 1:
            vtexSessionId = _context1.v;
            nuvemShopId = (_window = window) != null && (_window = _window.LS) != null && (_window = _window.cart) != null && _window.id ? String((_window2 = window) == null || (_window2 = _window2.LS) == null || (_window2 = _window2.cart) == null ? void 0 : _window2.id) : null;
            woocommerceKey = null;
            if ((_window3 = window) != null && (_window3 = _window3.location) != null && (_window3 = _window3.pathname) != null && _window3.includes('efetuar-pagamento')) {
              queryParams = new URLSearchParams(window.location.search);
              woocommerceKey = queryParams.get('key') || null;
            }
            _context1.n = 2;
            return this.api(this.baseURL + "/trackings/" + trackingId + "/sessions/" + sessionId + "/histories", 'POST', {
              body: JSON.stringify(_extends({
                referrer: referrer,
                origin: window.location.origin,
                userAgent: navigator.userAgent,
                traySessionId: ((_document = document) == null || (_document = _document.documentElement) == null ? void 0 : _document.getAttribute('data-session')) || ((_document2 = document) == null || (_document2 = _document2.documentElement) == null ? void 0 : _document2.getAttribute('data-checkout-session_id')),
                vtexSessionId: vtexSessionId || nuvemShopId || woocommerceKey,
                nuvemShopId: nuvemShopId || woocommerceKey,
                clientId: clientId,
                clientHash: clientHash,
                productData: productData
              }, facebookParams))
            });
          case 2:
            response = _context1.v;
            return _context1.a(2, response);
        }
      }, _callee1, this);
    }));
    function add(_x14) {
      return _add.apply(this, arguments);
    }
    return add;
  }();
  return SessionHistoryService;
}(BaseService);
var SessionService = /*#__PURE__*/function (_BaseService4) {
  function SessionService(_ref8) {
    var _this4;
    var baseURL = _ref8.baseURL;
    _this4 = _BaseService4.call(this) || this;
    _this4.baseURL = void 0;
    Object.assign(_this4, {
      baseURL: baseURL
    });
    return _this4;
  }
  _inheritsLoose(SessionService, _BaseService4);
  var _proto5 = SessionService.prototype;
  _proto5.add = /*#__PURE__*/function () {
    var _add2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(_ref9) {
      var _JSON$parse3, _window4, _window5, _window6, _document3, _document4;
      var trackingId, productData, clientHash, referrer, clientId, vtexSessionId, nuvemShopId, woocommerceKey, queryParams;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            trackingId = _ref9.trackingId, productData = _ref9.productData, clientHash = _ref9.clientHash, referrer = _ref9.referrer, clientId = _ref9.clientId;
            vtexSessionId = ((_JSON$parse3 = JSON.parse(window.localStorage.getItem('orderform'))) == null ? void 0 : _JSON$parse3.id) || null;
            nuvemShopId = (_window4 = window) != null && (_window4 = _window4.LS) != null && (_window4 = _window4.cart) != null && _window4.id ? String((_window5 = window) == null || (_window5 = _window5.LS) == null || (_window5 = _window5.cart) == null ? void 0 : _window5.id) : null;
            woocommerceKey = null;
            if ((_window6 = window) != null && (_window6 = _window6.location) != null && (_window6 = _window6.pathname) != null && _window6.includes('efetuar-pagamento')) {
              queryParams = new URLSearchParams(window.location.search);
              woocommerceKey = queryParams.get('key') || null;
            }
            _context10.n = 1;
            return this.api(this.baseURL + "/trackings/" + trackingId + "/sessions", 'POST', {
              body: JSON.stringify({
                referrer: referrer,
                origin: window.location.origin,
                userAgent: navigator.userAgent,
                traySessionId: ((_document3 = document) == null || (_document3 = _document3.documentElement) == null ? void 0 : _document3.getAttribute('data-session')) || ((_document4 = document) == null || (_document4 = _document4.documentElement) == null ? void 0 : _document4.getAttribute('data-checkout-session_id')),
                vtexSessionId: vtexSessionId || nuvemShopId || woocommerceKey,
                nuvemShopId: nuvemShopId || woocommerceKey,
                clientId: clientId,
                clientHash: clientHash,
                productData: productData
              })
            });
          case 1:
            return _context10.a(2, _context10.v);
        }
      }, _callee10, this);
    }));
    function add(_x15) {
      return _add2.apply(this, arguments);
    }
    return add;
  }();
  _proto5.getBy = /*#__PURE__*/function () {
    var _getBy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(_ref0) {
      var trackingId, clientSessionId, clientHash, _t6;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            trackingId = _ref0.trackingId, clientSessionId = _ref0.clientSessionId, clientHash = _ref0.clientHash;
            _context11.p = 1;
            _context11.n = 2;
            return this.api(this.baseURL + "/trackings/" + trackingId + "/sessions?clientHash=" + clientHash + "&clientSessionId=" + clientSessionId);
          case 2:
            return _context11.a(2, _context11.v);
          case 3:
            _context11.p = 3;
            _t6 = _context11.v;
            Logger.error(_t6);
          case 4:
            return _context11.a(2);
        }
      }, _callee11, this, [[1, 3]]);
    }));
    function getBy(_x16) {
      return _getBy.apply(this, arguments);
    }
    return getBy;
  }();
  return SessionService;
}(BaseService);
var UtmScanner = /*#__PURE__*/function () {
  function UtmScanner(_ref1) {
    var _this5 = this;
    var full_url = _ref1.full_url;
    this.utmNames = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_content'];
    this.utmNamesGa4 = [].concat(this.utmNames, ['utm_term']);
    this.utmNamesNemu = ['nemu_source', 'nemu_campaign', 'nemu_medium', 'nemu_content', 'nemu_adset'];
    this.hotmartUtmNames = ['src', 'sck'];
    this.ga4Platforms = ['shopify_ga4', 'nuvemshop_ga4', 'bagy_ga4', 'tray_ga4', 'magazord_ga4', 'shopify_plus_others_ga4', 'jetecommerce', 'wake_ga4', 'woocommerce_ga4', 'uappi_ga4'];
    this.delimiters = /[|\\]/;
    this.full_url = window.location.search;
    this.paidPlatforms = ['facebook', 'google', 'pinterest', 'tiktok'];
    this.utmsDefaultMappings = {
      utm_campaign: function utm_campaign(utmName, utmParams, searchParams) {
        var utm_campaign = searchParams == null ? void 0 : searchParams.get(utmName);
        var name = '';
        var id = '';
        if ((searchParams == null ? void 0 : searchParams.get('utm_source')) === 'google') {
          var _ref10 = (utm_campaign == null ? void 0 : utm_campaign.split(/[|\\-]/)) || [];
          name = _ref10[0];
          id = _ref10[1];
        } else {
          var _ref11 = (utm_campaign == null ? void 0 : utm_campaign.split(/[|\\]/)) || [];
          name = _ref11[0];
          id = _ref11[1];
        }
        utmParams['utm_campaignName'] = name;
        utmParams['utm_campaignId'] = id;
        utmParams[utmName] = utm_campaign;
      },
      utm_medium: function utm_medium(utmName, utmParams, searchParams) {
        var _utm_medium;
        var utm_medium = searchParams == null ? void 0 : searchParams.get(utmName);
        var _ref12 = ((_utm_medium = utm_medium) == null ? void 0 : _utm_medium.split(_this5.delimiters)) || [],
          adsetName = _ref12[0],
          adsetId = _ref12[1];
        utmParams['utm_adsetName'] = adsetName;
        utmParams['utm_adsetId'] = adsetId;
        utmParams[utmName] = utm_medium;
      },
      utm_content: function utm_content(utmName, utmParams, searchParams) {
        var _utmParts;
        var utm_content = searchParams == null ? void 0 : searchParams.get(utmName);
        var utmParts = (utm_content == null ? void 0 : utm_content.split(_this5.delimiters)) || [];
        if ((_utmParts = utmParts[utmParts.length - 1]) != null && _utmParts.startsWith('nemu_')) {
          utmParts.pop();
        }
        var adId = utmParts[utmParts.length - 1];
        var adName = utmParts.slice(0, utmParts.length - 1).join('|');
        if (utmParts.length === 1) {
          adName = utmParts[0];
          adId = null;
        }
        utmParams['utm_adName'] = adName;
        utmParams['utm_adId'] = adId;
        utmParams[utmName] = adName || adId ? (adName || '') + "\\" + (adId || '') : null;
      }
    };
    this.utmsGa4Mappings = {
      utm_campaign: function utm_campaign(utmName, utmParams, searchParams) {
        var utm_campaign = searchParams == null ? void 0 : searchParams.get(utmName);
        var name = '';
        var id = '';
        if ((searchParams == null ? void 0 : searchParams.get('utm_source')) === 'google') {
          var _ref13 = (utm_campaign == null ? void 0 : utm_campaign.split(/[|\\-]/)) || [];
          name = _ref13[0];
          id = _ref13[1];
        } else {
          var _ref14 = (utm_campaign == null ? void 0 : utm_campaign.split(/[|\\]/)) || [];
          name = _ref14[0];
          id = _ref14[1];
        }
        utmParams['utm_campaignName'] = name;
        utmParams['utm_campaignId'] = id;
        utmParams[utmName] = utm_campaign;
      },
      utm_content: function utm_content(utmName, utmParams, searchParams) {
        var _utmParts2;
        var utm_content = searchParams == null ? void 0 : searchParams.get(utmName);
        var utmParts = (utm_content == null ? void 0 : utm_content.split(_this5.delimiters)) || [];
        if ((_utmParts2 = utmParts[utmParts.length - 1]) != null && _utmParts2.startsWith('nemu_')) {
          utmParts.pop();
        }
        var adId = utmParts[utmParts.length - 1];
        var adName = utmParts.slice(0, utmParts.length - 1).join('|');
        if (utmParts.length === 1) {
          adName = utmParts[0];
          adId = null;
        }
        utmParams['utm_adName'] = adName;
        utmParams['utm_adId'] = adId;
        utmParams[utmName] = adName || adId ? (adName || '') + "\\" + (adId || '') : null;
      },
      utm_medium: function utm_medium(utmName, utmParams, searchParams) {
        var utm_medium = searchParams == null ? void 0 : searchParams.get(utmName);
        if (!_this5.paidPlatforms.includes(searchParams == null ? void 0 : searchParams.get('utm_source')) && utm_medium !== 'cpc' || _this5.paidPlatforms.includes(searchParams == null ? void 0 : searchParams.get('utm_source')) && !(searchParams != null && searchParams.get('utm_term')) && utm_medium !== 'cpc') {
          var utmParts = (utm_medium == null ? void 0 : utm_medium.split(_this5.delimiters)) || [];
          var adsetId = utmParts[utmParts.length - 1] || '';
          var adsetName = utmParts.slice(0, utmParts.length - 1).join('|') || '';
          utmParams['utm_adsetName'] = adsetName;
          utmParams['utm_adsetId'] = adsetId;
          utmParams[utmName] = utm_medium;
        }
      },
      utm_term: function utm_term(utmName, utmParams, searchParams) {
        var utm_term = searchParams == null ? void 0 : searchParams.get(utmName);
        if (utmParams['utm_source'] === 'google') {
          var utmParts = (utm_term == null ? void 0 : utm_term.split('_')) || [];
          var adset = utmParts[utmParts.length - 1];
          var googleKeyword = utmParts.slice(0, utmParts.length - 1).join('_');
          if (utmParts.length === 1) {
            googleKeyword = utmParts[0];
            adset = null;
          }
          utmParams['googleKeyword'] = googleKeyword;
          utmParams['utm_medium'] = adset || null;
          utmParams['utm_adsetName'] = adset;
        } else {
          var _utmParts3 = (utm_term == null ? void 0 : utm_term.split(_this5.delimiters)) || [];
          var adsetId = _utmParts3[_utmParts3.length - 1];
          var adsetName = _utmParts3.slice(0, _utmParts3.length - 1).join('|');
          if (_utmParts3.length === 1) {
            adsetName = _utmParts3[0];
            adsetId = null;
          }
          utmParams['utm_adsetName'] = adsetName;
          utmParams['utm_adsetId'] = adsetId;
          utmParams['utm_medium'] = adsetName || adsetId ? (adsetName || '') + "|" + (adsetId || '') : null;
        }
      }
    };
    this.utmsNemuMappings = {
      nemu_campaign: function nemu_campaign(utmName, utmParams, searchParams) {
        var utm_campaign = searchParams == null ? void 0 : searchParams.get(utmName);
        var name = '';
        var id = '';
        if ((searchParams == null ? void 0 : searchParams.get('utm_source')) === 'google') {
          var _ref15 = (utm_campaign == null ? void 0 : utm_campaign.split(/[|\\-]/)) || [];
          name = _ref15[0];
          id = _ref15[1];
        } else {
          var _ref16 = (utm_campaign == null ? void 0 : utm_campaign.split(/[|\\]/)) || [];
          name = _ref16[0];
          id = _ref16[1];
        }
        utmParams['utm_campaignName'] = name;
        utmParams['utm_campaignId'] = id;
        utmParams['utm_campaign'] = utm_campaign;
      },
      nemu_medium: function nemu_medium(utmName, utmParams, searchParams) {
        var utm_medium = searchParams == null ? void 0 : searchParams.get(utmName);
        var _ref17 = (utm_medium == null ? void 0 : utm_medium.split(_this5.delimiters)) || [],
          adsetName = _ref17[0],
          adsetId = _ref17[1];
        utmParams['utm_adsetName'] = adsetName;
        utmParams['utm_adsetId'] = adsetId;
        utmParams['utm_medium'] = utm_medium;
      },
      nemu_adset: function nemu_adset(utmName, utmParams, searchParams) {
        var utm_medium = searchParams == null ? void 0 : searchParams.get(utmName);
        var _ref18 = (utm_medium == null ? void 0 : utm_medium.split(_this5.delimiters)) || [],
          adsetName = _ref18[0],
          adsetId = _ref18[1];
        utmParams['utm_adsetName'] = adsetName;
        utmParams['utm_adsetId'] = adsetId;
        utmParams['utm_medium'] = utm_medium;
      },
      nemu_content: function nemu_content(utmName, utmParams, searchParams) {
        var _utmParts4;
        var utm_content = searchParams == null ? void 0 : searchParams.get(utmName);
        var utmParts = (utm_content == null ? void 0 : utm_content.split(_this5.delimiters)) || [];
        if ((_utmParts4 = utmParts[utmParts.length - 1]) != null && _utmParts4.startsWith('nemu_')) {
          utmParts.pop();
        }
        var adId = utmParts[utmParts.length - 1];
        var adName = utmParts.slice(0, utmParts.length - 1).join('|');
        if (utmParts.length === 1) {
          adName = utmParts[0];
          adId = null;
        }
        utmParams['utm_adName'] = adName;
        utmParams['utm_adId'] = adId;
        utmParams['utm_content'] = adName || adId ? (adName || '') + "\\" + (adId || '') : null;
      },
      nemu_source: function nemu_source(utmName, utmParams, searchParams) {
        var utm_source = searchParams == null ? void 0 : searchParams.get(utmName);
        utmParams['utm_source'] = utm_source;
      }
    };
    Object.assign(this, {
      full_url: full_url
    });
  }
  var _proto6 = UtmScanner.prototype;
  _proto6.getUtmFormats = function getUtmFormats() {
    return this.utmNames.concat(this.hotmartUtmNames);
  };
  UtmScanner.extractHostname = function extractHostname(full_url) {
    try {
      return new URL(full_url).hostname;
    } catch (error) {
      return null;
    }
  };
  UtmScanner.extractOrigin = function extractOrigin(full_url) {
    try {
      var _URL;
      return (_URL = new URL(full_url)) == null ? void 0 : _URL.origin;
    } catch (error) {
      return null;
    }
  };
  _proto6.isReferrerFromInternalSource = function isReferrerFromInternalSource() {
    var referrerHostname = UtmScanner.extractHostname(document.referrer);
    if (!referrerHostname) return false;
    var normalizedReferrer = this.getMainDomainHostname(referrerHostname);
    var currentHostname = this.getMainDomainHostname(window.location.hostname);
    return normalizedReferrer === currentHostname;
  };
  _proto6.getMainDomainHostname = function getMainDomainHostname(hostname) {
    if (!hostname) return null;
    hostname = hostname.toLowerCase().trim();
    if (hostname.startsWith('www.')) {
      hostname = hostname.slice(4);
    }
    var parts = hostname.split('.');
    var knownDoubleTLDs = ['com.br', 'net.br', 'org.br', 'gov.br', 'co.uk', 'org.uk', 'com.au', 'co.jp', 'com.cn', 'com.br/', 'net.br/', 'org.br/', 'gov.br/', 'co.uk/', 'org.uk/', 'com.au/', 'co.jp/', 'com.cn/'];
    var lastTwo = parts.slice(-2).join('.');
    var lastThree = parts.slice(-3).join('.');
    if (knownDoubleTLDs.includes(lastTwo) && parts.length >= 3) {
      return parts[parts.length - 3];
    }
    return parts[parts.length - 2];
  };
  _proto6.isPageReloaded = function isPageReloaded() {
    if (typeof performance === 'undefined' || typeof performance.getEntriesByType !== 'function') {
      return this.checkLegacyNavigationType();
    }
    var navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length === 0) {
      return this.checkLegacyNavigationType();
    }
    var navigationEntry = navigationEntries[0];
    return navigationEntry.type === 'reload';
  };
  _proto6.checkLegacyNavigationType = function checkLegacyNavigationType() {
    var legacyNavigation = performance.navigation;
    return (legacyNavigation == null ? void 0 : legacyNavigation.type) === 1;
  };
  _proto6.getHotmartSourceName = function getHotmartSourceName() {
    var searchParams = new URLSearchParams(this.full_url);
    var hotmartSources = ['src', 'sck'];
    var result;
    hotmartSources.find(function (source) {
      if (searchParams.has(source)) {
        result = source;
      }
    });
    return result;
  };
  _proto6.isHotmartUtmsValid = function isHotmartUtmsValid(sourceName, full_url) {
    var _searchParams$get$spl, _searchParams$get;
    if (full_url === void 0) {
      full_url = window.location.search;
    }
    var searchParams = new URLSearchParams(full_url);
    var _ref19 = (_searchParams$get$spl = (_searchParams$get = searchParams.get(sourceName)) == null ? void 0 : _searchParams$get.split('|')) != null ? _searchParams$get$spl : [],
      utm_source = _ref19[0],
      utm_medium = _ref19[1],
      utm_campaign = _ref19[2],
      utm_content = _ref19[3];
    var parsedUtms = removeEmptyObjectProperties({
      utm_source: utm_source,
      utm_medium: utm_medium,
      utm_campaign: utm_campaign,
      utm_content: utm_content
    });
    if (!(parsedUtms != null && parsedUtms.utm_source) && !(parsedUtms != null && parsedUtms.utm_medium) && !(parsedUtms != null && parsedUtms.utm_campaign) && !(parsedUtms != null && parsedUtms.utm_content)) {
      return false;
    }
    return true;
  };
  _proto6.containsHotmartSourceInUrl = function containsHotmartSourceInUrl() {
    var sourceName = this.getHotmartSourceName();
    if (sourceName && this.isHotmartUtmsValid(sourceName, this.full_url)) {
      return true;
    }
    return false;
  };
  _proto6.containsUTMsInQueryParams = function containsUTMsInQueryParams(trackingId) {
    var searchParams = new URLSearchParams(this.full_url);
    console.log(searchParams, 'url', this.full_url);
    if (this.containsHotmartSourceInUrl()) {
      return true;
    }
    var utmNames = this.utmNames.concat(this.utmNamesNemu);
    if (Array.from(searchParams.keys()).some(function (key) {
      return utmNames.includes(key);
    })) {
      return true;
    }
    if (trackingId === 'Ss-hu8loFI') {
      var nemuTrackingSessionHistory = this.getUtmsFromCookie('nemu:utmsTrackHistory');
      if (!!nemuTrackingSessionHistory) {
        try {
          nemuTrackingSessionHistory = JSON.parse(nemuTrackingSessionHistory);
        } catch (e) {
          return false;
        }
        for (var _iterator3 = _createForOfIteratorHelperLoose(this.utmNames), _step3; !(_step3 = _iterator3()).done;) {
          var utmName = _step3.value;
          if (nemuTrackingSessionHistory[utmName]) {
            return true;
          }
        }
      }
    }
    return false;
  };
  _proto6.extractUTMsFromQueryParams = function extractUTMsFromQueryParams(platform, trackingId) {
    var _this6 = this;
    var paidPlatforms = ['facebook', 'google', 'pinterest', 'tiktok'];
    var utmParams = {};
    var searchParams = new URLSearchParams(this.full_url);
    if (this.containsHotmartSourceInUrl() && platform === 'hotmart') {
      utmParams = UtmParser.parseHotmartUTMs(this.getHotmartSourceName(), this.full_url);
    }
    var utmMappings = null;
    var utmNames = null;
    if (this.ga4Platforms.includes(platform)) {
      utmMappings = this.utmsGa4Mappings;
      utmNames = this.utmNamesGa4;
    } else {
      var urlContainsNemuParams = Array.from(searchParams.keys()).some(function (key) {
        return _this6.utmNamesNemu.includes(key);
      });
      if (urlContainsNemuParams) {
        utmMappings = this.utmsNemuMappings;
        utmNames = this.utmNamesNemu;
      } else {
        utmMappings = this.utmsDefaultMappings;
        utmNames = this.utmNames;
      }
    }
    for (var _iterator4 = _createForOfIteratorHelperLoose(utmNames), _step4; !(_step4 = _iterator4()).done;) {
      var utmName = _step4.value;
      if (searchParams.has(utmName)) {
        var _utmMappings;
        var properMapping = (_utmMappings = utmMappings) == null ? void 0 : _utmMappings[utmName];
        if (properMapping) {
          properMapping(utmName, utmParams, searchParams);
          continue;
        }
        utmParams[utmName] = searchParams.get(utmName);
      }
    }
    if (!this.ga4Platforms.includes(platform)) {
      if (utmParams['utm_source'] === 'google') {
        var term = searchParams.get('utm_term');
        utmParams['googleKeyword'] = term;
      }
    }
    if (trackingId === 'Ss-hu8loFI' && Object.keys(utmParams).length === 0) {
      var nemuTrackingSessionHistory = this.getUtmsFromCookie('nemu:utmsTrackHistory');
      if (!!nemuTrackingSessionHistory) {
        try {
          nemuTrackingSessionHistory = JSON.parse(nemuTrackingSessionHistory);
        } catch (e) {
          return utmParams;
        }
        var _loop = function _loop() {
          var utmName = _step5.value;
          if (nemuTrackingSessionHistory[utmName]) {
            var mappings = {
              utm_campaign: function utm_campaign() {
                var utm_campaign = nemuTrackingSessionHistory[utmName];
                var name = '';
                var id = '';
                if ((searchParams == null ? void 0 : searchParams.get('utm_source')) === 'google') {
                  var _ref20 = (utm_campaign == null ? void 0 : utm_campaign.split(/[|\\-]/)) || [];
                  name = _ref20[0];
                  id = _ref20[1];
                } else {
                  var _ref21 = (utm_campaign == null ? void 0 : utm_campaign.split(/[|\\]/)) || [];
                  name = _ref21[0];
                  id = _ref21[1];
                }
                utmParams['utm_campaignName'] = name;
                utmParams['utm_campaignId'] = id;
                utmParams[utmName] = utm_campaign;
              },
              utm_medium: function utm_medium() {
                var _utm_medium2;
                var utm_medium = nemuTrackingSessionHistory[utmName];
                var _ref22 = ((_utm_medium2 = utm_medium) == null ? void 0 : _utm_medium2.split(_this6.delimiters)) || [],
                  adsetName = _ref22[0],
                  adsetId = _ref22[1];
                utmParams['utm_adsetName'] = adsetName;
                utmParams['utm_adsetId'] = adsetId;
                utmParams[utmName] = utm_medium;
              },
              utm_content: function utm_content() {
                var _utmParts5;
                var utm_content = nemuTrackingSessionHistory[utmName];
                var utmParts = (utm_content == null ? void 0 : utm_content.split(_this6.delimiters)) || [];
                if ((_utmParts5 = utmParts[utmParts.length - 1]) != null && _utmParts5.startsWith('nemu_')) {
                  utmParts.pop();
                }
                var adId = utmParts[utmParts.length - 1];
                var adName = utmParts.slice(0, utmParts.length - 1).join('|');
                if (utmParts.length === 1) {
                  adName = utmParts[0];
                  adId = null;
                }
                utmParams['utm_adName'] = adName;
                utmParams['utm_adId'] = adId;
                utmParams[utmName] = adName || adId ? (adName || '') + "\\" + (adId || '') : null;
              }
            };
            var properMapping = mappings == null ? void 0 : mappings[utmName];
            if (properMapping) {
              properMapping();
              return 1; // continue
            }
            utmParams[utmName] = nemuTrackingSessionHistory[utmName];
          }
        };
        for (var _iterator5 = _createForOfIteratorHelperLoose(this.utmNames), _step5; !(_step5 = _iterator5()).done;) {
          if (_loop()) continue;
        }
        nemuTrackingSessionHistory.alreadySent = true;
        this.setUtmsFromCookie(nemuTrackingSessionHistory);
      }
    }
    return utmParams;
  };
  _proto6.getFacebookParams = function getFacebookParams(storage) {
    var searchParams = new URLSearchParams(window.location.search);
    var fbcExists = storage.getCookieByName('_fbc');
    var fbpExists = storage.getCookieByName('_fbp');
    var fbclidExists = searchParams == null ? void 0 : searchParams.get('fbclid');
    return {
      fbclid: fbclidExists,
      fbc: fbcExists,
      fbp: fbpExists,
      fbpUnix: this.generateUnix(),
      fbcUnix: this.generateUnix()
    };
  };
  _proto6.generateUnix = function generateUnix() {
    var dateInSaoPauloTimezone = new Date().toLocaleString('en-US', {
      timeZone: 'America/Sao_Paulo'
    });
    var unix = Math.floor(new Date(dateInSaoPauloTimezone).getTime() / 1000); // Convert milliseconds to seconds

    return String(unix);
  };
  _proto6.getUtmsFromCookie = function getUtmsFromCookie(cookieName) {
    var nameEQ = cookieName + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };
  _proto6.setUtmsFromCookie = function setUtmsFromCookie(cookieObject) {
    var cookieValue = JSON.stringify(cookieObject);
    var expiryDate = new Date();
    expiryDate.setTime(0);
    var expires = 'expires=' + expiryDate.toUTCString();
    var hostname = window.location.hostname;
    var parts = hostname.split('.');
    if (parts.length >= 3) {
      var tld = parts.pop();
      var domain = parts.pop();
      if (tld === 'br') {
        domain = parts.pop() + '.' + domain;
      }
      domain = domain + '.' + tld;
    } else {
      tld = parts.pop();
      domain = parts.pop();
      domain = domain + '.' + tld;
    }
    document.cookie = 'nemu:utmsTrackHistory=' + cookieValue + '; domain=' + domain + '; path=/; ' + expires;
  };
  return UtmScanner;
}();
var PlatformFilter = /*#__PURE__*/function () {
  function PlatformFilter(_ref23) {
    var platforms = _ref23.platforms;
    this.platforms = void 0;
    Object.assign(this, {
      platforms: platforms
    });
  }
  var _proto7 = PlatformFilter.prototype;
  _proto7.referrerContainsPlatform = function referrerContainsPlatform(referrer) {
    var _this$platforms;
    var foundPlatform = (_this$platforms = this.platforms) == null ? void 0 : _this$platforms.find(function (platform) {
      return referrer == null ? void 0 : referrer.includes(platform.name);
    });
    return foundPlatform ? foundPlatform.name : null;
  };
  return PlatformFilter;
}();
var UtmParser = /*#__PURE__*/function () {
  function UtmParser(_ref24) {
    var scanner = _ref24.scanner,
      platformsFilter = _ref24.platformsFilter,
      sessionHistoryService = _ref24.sessionHistoryService,
      storage = _ref24.storage;
    this.scanner = void 0;
    this.platformsFilter = void 0;
    this.sessionHistoryService = void 0;
    this.storage = void 0;
    Object.assign(this, {
      scanner: scanner,
      platformsFilter: platformsFilter,
      sessionHistoryService: sessionHistoryService,
      storage: storage
    });
  }
  var _proto8 = UtmParser.prototype;
  _proto8.parseUTMSrc = function parseUTMSrc(_ref25) {
    var _this7 = this;
    var utm_source = _ref25.utm_source;
    var organicExists = utm_source == null ? void 0 : utm_source.endsWith('_organic');
    var referrerHostname = this.scanner.getMainDomainHostname(UtmScanner.extractHostname(document.referrer));
    var isReferrerHostnameValid = referrerHostname && referrerHostname !== this.scanner.getMainDomainHostname(window.location.hostname);
    var isOrganic = function isOrganic() {
      if (!isReferrerHostnameValid || organicExists) {
        return false;
      }
      var searchParams = new URLSearchParams(document.referrer);
      var utmFormats = _this7.scanner.getUtmFormats();
      for (var _iterator6 = _createForOfIteratorHelperLoose(utmFormats), _step6; !(_step6 = _iterator6()).done;) {
        var utmFormat = _step6.value;
        if (searchParams.has(utmFormat)) {
          return false;
        }
      }
      return true;
    };
    if (!utm_source) {
      if (!isReferrerHostnameValid) {
        return 'direct';
      }
      return "" + referrerHostname + (isOrganic() ? '_organic' : '');
    }
    return utm_source;
  };
  UtmParser.parseHotmartUTMs = function parseHotmartUTMs(sourceName, full_url) {
    var _searchParams$get$spl2, _searchParams$get2;
    if (full_url === void 0) {
      full_url = window.location.search;
    }
    var searchParams = new URLSearchParams(full_url);
    var _ref26 = (_searchParams$get$spl2 = searchParams == null || (_searchParams$get2 = searchParams.get(sourceName)) == null ? void 0 : _searchParams$get2.split('|')) != null ? _searchParams$get$spl2 : [],
      utm_source = _ref26[0],
      utm_adsetName = _ref26[1],
      utm_campaignName = _ref26[2],
      utm_adName = _ref26[3],
      utm_campaignId = _ref26[4],
      utm_adsetId = _ref26[5],
      utm_adId = _ref26[6],
      utm_term = _ref26[7];
    return {
      utm_source: utm_source,
      utm_medium: (utm_adsetName || '') + "|" + (utm_adsetId || ''),
      utm_campaign: (utm_campaignName || '') + "|" + (utm_campaignId || ''),
      utm_content: (utm_adName || '') + "|" + (utm_adId || ''),
      utm_campaignId: utm_campaignId,
      utm_campaignName: utm_campaignName,
      utm_adsetId: utm_adsetId,
      utm_adsetName: utm_adsetName,
      utm_adId: utm_adId,
      utm_adName: utm_adName,
      utm_term: utm_term
    };
  };
  _proto8.parseUTMsToQueryParams = /*#__PURE__*/function () {
    var _parseUTMsToQueryParams = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee51(_ref27) {
      var _this8 = this;
      var tracking, utms, searchParams, hotmartSourceTypes, _i, _hotmartSourceTypes, hotmartSourceType, _iterator7, _step7, utmName, platformMappings, mapping;
      return _regenerator().w(function (_context52) {
        while (1) switch (_context52.n) {
          case 0:
            tracking = _ref27.tracking, utms = _ref27.utms;
            searchParams = new URLSearchParams(window.location.search);
            hotmartSourceTypes = ['src', 'sck'];
            if (searchParams.get('utm_source') !== 'google') {
              searchParams.delete('utm_term');
            }
            for (_i = 0, _hotmartSourceTypes = hotmartSourceTypes; _i < _hotmartSourceTypes.length; _i++) {
              hotmartSourceType = _hotmartSourceTypes[_i];
              if (searchParams != null && searchParams.has(hotmartSourceType)) {
                searchParams.delete(hotmartSourceType);
              }
            }
            for (_iterator7 = _createForOfIteratorHelperLoose(this.scanner.utmNames); !(_step7 = _iterator7()).done;) {
              utmName = _step7.value;
              if (searchParams != null && searchParams.has(utmName)) {
                searchParams.delete(utmName);
              }
            }
            platformMappings = {
              hotmart: function hotmart() {
                var querySource = ((utms == null ? void 0 : utms.utm_source) || '') + "|" + ((utms == null ? void 0 : utms.utm_adsetName) || '') + "|" + ((utms == null ? void 0 : utms.utm_campaignName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_campaignId) || '') + "|" + ((utms == null ? void 0 : utms.utm_adsetId) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + ((utms == null ? void 0 : utms.utm_term) || '');
                document.cookie = "utmsTrack=" + (tracking == null ? void 0 : tracking.sourceType) + "=" + querySource + "; path=/";
                searchParams.set(tracking == null ? void 0 : tracking.sourceType, querySource);
              },
              vega: function vega() {
                var vegaMappings = {
                  utm_campaign: function utm_campaign() {
                    return ((utms == null ? void 0 : utms.utm_campaignName) || '') + "\\" + ((utms == null ? void 0 : utms.utm_campaignId) || '');
                  },
                  utm_medium: function utm_medium() {
                    return ((utms == null ? void 0 : utms.utm_adsetName) || '') + "\\" + ((utms == null ? void 0 : utms.utm_adsetId) || '');
                  },
                  utm_content: function utm_content() {
                    return ((utms == null ? void 0 : utms.utm_adName) || '') + "\\" + ((utms == null ? void 0 : utms.utm_adId) || '') + "\\" + (utms == null ? void 0 : utms.utm_term);
                  }
                };
                for (var _iterator8 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames), _step8; !(_step8 = _iterator8()).done;) {
                  var utmName = _step8.value;
                  if (utmName === 'utm_content') {
                    var content = vegaMappings[utmName]();
                    searchParams.set(utmName, content);
                  } else if (utms[utmName]) {
                    var mappingExists = vegaMappings[utmName];
                    var utm = mappingExists ? mappingExists() : utms[utmName];
                    searchParams.set(utmName, utm || '');
                  }
                }
                if (utms['googleKeyword']) {
                  searchParams.set('utm_term', utms['googleKeyword'] || '');
                }
              },
              others: function others() {
                for (var _iterator9 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames), _step9; !(_step9 = _iterator9()).done;) {
                  var utmName = _step9.value;
                  if (utmName === 'utm_content') {
                    var content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                    searchParams.set(utmName, content || '');
                  } else if (utms[utmName]) {
                    searchParams.set(utmName, utms[utmName] || '');
                  }
                }
                if (utms['googleKeyword']) {
                  searchParams.set('utm_term', utms['googleKeyword'] || '');
                }
              },
              shopify_plus_others: function shopify_plus_others() {
                var getCookieByName = _this8.storage.getCookieByName;
                var sessionHistoryService = _this8.sessionHistoryService;
                function waitForShopifyCartToken() {
                  return new Promise(/*#__PURE__*/function () {
                    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(resolve) {
                      var interval;
                      return _regenerator().w(function (_context13) {
                        while (1) switch (_context13.n) {
                          case 0:
                            interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
                              var cartTokenCookie, cartTokenLocalStorage, item;
                              return _regenerator().w(function (_context12) {
                                while (1) switch (_context12.n) {
                                  case 0:
                                    cartTokenCookie = getCookieByName('cart') ? getCookieByName('cart').split('?')[0] : '';
                                    cartTokenLocalStorage = localStorage.getItem('trackedSourceId') || localStorage.getItem('cartToken');
                                    item = cartTokenCookie || cartTokenLocalStorage || null;
                                    if (!(item !== null)) {
                                      _context12.n = 2;
                                      break;
                                    }
                                    clearInterval(interval);
                                    _context12.n = 1;
                                    return sessionHistoryService.updateNuvemshopId({
                                      trackingId: tracking.id,
                                      trackingSessionId: utms.trackingSessionId,
                                      nuvemShopId: item
                                    });
                                  case 1:
                                    return _context12.a(2, resolve(true));
                                  case 2:
                                    return _context12.a(2);
                                }
                              }, _callee12);
                            })), 500);
                          case 1:
                            return _context13.a(2);
                        }
                      }, _callee13);
                    }));
                    return function (_x18) {
                      return _ref28.apply(this, arguments);
                    };
                  }());
                }
                waitForShopifyCartToken();
                for (var _iterator0 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames), _step0; !(_step0 = _iterator0()).done;) {
                  var utmName = _step0.value;
                  if (utmName === 'utm_content') {
                    var content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                    searchParams.set(utmName, content || '');
                  } else if (utms[utmName]) {
                    searchParams.set(utmName, utms[utmName] || '');
                  }
                }
                if (utms['googleKeyword']) {
                  searchParams.set('utm_term', utms['googleKeyword'] || '');
                }
              },
              shopify_plus_others_ga4: function shopify_plus_others_ga4() {
                var getCookieByName = _this8.storage.getCookieByName;
                var sessionHistoryService = _this8.sessionHistoryService;
                function waitForShopifyCartToken() {
                  return new Promise(/*#__PURE__*/function () {
                    var _ref30 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(resolve) {
                      var interval;
                      return _regenerator().w(function (_context15) {
                        while (1) switch (_context15.n) {
                          case 0:
                            interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
                              var cartTokenCookie, cartTokenLocalStorage, item;
                              return _regenerator().w(function (_context14) {
                                while (1) switch (_context14.n) {
                                  case 0:
                                    cartTokenCookie = getCookieByName('cart') ? getCookieByName('cart').split('?')[0] : '';
                                    cartTokenLocalStorage = localStorage.getItem('trackedSourceId') || localStorage.getItem('cartToken');
                                    item = cartTokenCookie || cartTokenLocalStorage || null;
                                    if (!(item !== null)) {
                                      _context14.n = 2;
                                      break;
                                    }
                                    clearInterval(interval);
                                    _context14.n = 1;
                                    return sessionHistoryService.updateNuvemshopId({
                                      trackingId: tracking.id,
                                      trackingSessionId: utms.trackingSessionId,
                                      nuvemShopId: item
                                    });
                                  case 1:
                                    return _context14.a(2, resolve(true));
                                  case 2:
                                    return _context14.a(2);
                                }
                              }, _callee14);
                            })), 500);
                          case 1:
                            return _context15.a(2);
                        }
                      }, _callee15);
                    }));
                    return function (_x19) {
                      return _ref30.apply(this, arguments);
                    };
                  }());
                }
                waitForShopifyCartToken();
                for (var _iterator1 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames), _step1; !(_step1 = _iterator1()).done;) {
                  var utmName = _step1.value;
                  if (utmName === 'utm_content') {
                    var content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '');
                    searchParams.set(utmName, content || '');
                  } else if (utms[utmName]) {
                    searchParams.set(utmName, utms[utmName] || '');
                  }
                  searchParams.set('utm_medium', 'cpc');
                  if (utms['utm_medium']) {
                    if (utms['utm_source'] === 'google') {
                      var googleKeyword = utms['googleKeyword'] || '';
                      searchParams.set('utm_term', googleKeyword + "_" + utms['utm_medium']);
                    } else {
                      searchParams.set('utm_term', utms['utm_medium']);
                    }
                  }
                }
              },
              nuvemshop: function () {
                var _nuvemshop = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
                  var _window7, _window8;
                  var NUVEMSHOP_APP_ID, _iterator10, _step10, utmName, content, params;
                  return _regenerator().w(function (_context16) {
                    while (1) switch (_context16.n) {
                      case 0:
                        NUVEMSHOP_APP_ID = '12106';
                        _context16.n = 1;
                        return _this8.sessionHistoryService.updateNuvemshopId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          //@ts-ignore
                          nuvemShopId: (_window7 = window) != null && (_window7 = _window7.LS) != null && (_window7 = _window7.cart) != null && _window7.id ? String((_window8 = window) == null || (_window8 = _window8.LS) == null || (_window8 = _window8.cart) == null ? void 0 : _window8.id) : null
                        });
                      case 1:
                        for (_iterator10 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step10 = _iterator10()).done;) {
                          utmName = _step10.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                        params = UtmProducer.extractUtmsFromQueryParams(searchParams.toString());
                        localStorage.setItem("app-" + NUVEMSHOP_APP_ID + "-nemu:utmsTrack", "" + JSON.stringify({
                          value: params
                        }));
                      case 2:
                        return _context16.a(2);
                    }
                  }, _callee16);
                }));
                function nuvemshop() {
                  return _nuvemshop.apply(this, arguments);
                }
                return nuvemshop;
              }(),
              tray: function () {
                var _tray = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
                  var _document5, _document6;
                  var _iterator11, _step11, utmName, content;
                  return _regenerator().w(function (_context17) {
                    while (1) switch (_context17.n) {
                      case 0:
                        _context17.n = 1;
                        return _this8.sessionHistoryService.updateTraySessionId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          traySessionId: ((_document5 = document) == null || (_document5 = _document5.documentElement) == null ? void 0 : _document5.getAttribute('data-session')) || ((_document6 = document) == null || (_document6 = _document6.documentElement) == null ? void 0 : _document6.getAttribute('data-checkout-session_id'))
                        });
                      case 1:
                        for (_iterator11 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step11 = _iterator11()).done;) {
                          utmName = _step11.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                      case 2:
                        return _context17.a(2);
                    }
                  }, _callee17);
                }));
                function tray() {
                  return _tray.apply(this, arguments);
                }
                return tray;
              }(),
              tray_ga4: function () {
                var _tray_ga = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
                  var _document7, _document8;
                  var _iterator12, _step12, utmName, content, googleKeyword;
                  return _regenerator().w(function (_context18) {
                    while (1) switch (_context18.n) {
                      case 0:
                        _context18.n = 1;
                        return _this8.sessionHistoryService.updateTraySessionId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          traySessionId: ((_document7 = document) == null || (_document7 = _document7.documentElement) == null ? void 0 : _document7.getAttribute('data-session')) || ((_document8 = document) == null || (_document8 = _document8.documentElement) == null ? void 0 : _document8.getAttribute('data-checkout-session_id'))
                        });
                      case 1:
                        for (_iterator12 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step12 = _iterator12()).done;) {
                          utmName = _step12.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '');
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                          searchParams.set('utm_medium', 'cpc');
                          if (utms['utm_medium']) {
                            if (utms['utm_source'] === 'google') {
                              googleKeyword = utms['googleKeyword'] || '';
                              searchParams.set('utm_term', googleKeyword + "_" + utms['utm_medium']);
                            } else {
                              searchParams.set('utm_term', utms['utm_medium']);
                            }
                          }
                        }
                      case 2:
                        return _context18.a(2);
                    }
                  }, _callee18);
                }));
                function tray_ga4() {
                  return _tray_ga.apply(this, arguments);
                }
                return tray_ga4;
              }(),
              shopify_ga4: function () {
                var _shopify_ga = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
                  var getCookieByName, sessionHistoryService, waitForShopifyCartToken, utmsCookie, _iterator13, _step13, _document$cookie$spli3, utmName, content, utmCampaign, expiryDate, currentUtmsTrack, newUtmsTrackValue, currentHasHash, newHasHash;
                  return _regenerator().w(function (_context21) {
                    while (1) switch (_context21.n) {
                      case 0:
                        waitForShopifyCartToken = function _waitForShopifyCartTo() {
                          return new Promise(/*#__PURE__*/function () {
                            var _ref32 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(resolve) {
                              var interval;
                              return _regenerator().w(function (_context20) {
                                while (1) switch (_context20.n) {
                                  case 0:
                                    interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
                                      var cartTokenCookie, cartTokenLocalStorage, item;
                                      return _regenerator().w(function (_context19) {
                                        while (1) switch (_context19.n) {
                                          case 0:
                                            cartTokenCookie = getCookieByName('cart') ? getCookieByName('cart').split('?')[0] : '';
                                            cartTokenLocalStorage = localStorage.getItem('trackedSourceId') || localStorage.getItem('cartToken');
                                            item = cartTokenCookie || cartTokenLocalStorage || null;
                                            if (!(item !== null)) {
                                              _context19.n = 2;
                                              break;
                                            }
                                            clearInterval(interval);
                                            _context19.n = 1;
                                            return sessionHistoryService.updateNuvemshopId({
                                              trackingId: tracking.id,
                                              trackingSessionId: utms.trackingSessionId,
                                              nuvemShopId: item
                                            });
                                          case 1:
                                            return _context19.a(2, resolve(true));
                                          case 2:
                                            return _context19.a(2);
                                        }
                                      }, _callee19);
                                    })), 500);
                                  case 1:
                                    return _context20.a(2);
                                }
                              }, _callee20);
                            }));
                            return function (_x20) {
                              return _ref32.apply(this, arguments);
                            };
                          }());
                        };
                        getCookieByName = _this8.storage.getCookieByName;
                        sessionHistoryService = _this8.sessionHistoryService;
                        waitForShopifyCartToken();
                        utmsCookie = new URLSearchParams();
                        for (_iterator13 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step13 = _iterator13()).done;) {
                          utmName = _step13.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '');
                            searchParams.set(utmName, content || '');
                            utmsCookie.set(utmName, content + "|" + ((utms == null ? void 0 : utms.utm_term) || '') || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                            utmsCookie.set(utmName, utms[utmName] || '');
                          }
                          if (utms['utm_medium']) {
                            if (utms['utm_source'] === 'google') {
                              utmCampaign = utms['utm_campaign'] || '';
                              searchParams.set('utm_campaign', utmCampaign + "_" + utms['utm_medium']);
                              searchParams.set('utm_medium', 'cpc');
                            } else {
                              if (['facebook', 'google', 'tiktok', 'pinterest'].includes(utms['utm_source'])) {
                                searchParams.set('utm_medium', 'cpc');
                                searchParams.set('utm_term', utms['utm_medium']);
                              } else {
                                searchParams.set('utm_medium', utms['utm_medium']);
                              }
                            }
                          }
                          if (utms['googleKeyword']) {
                            searchParams.set('utm_term', utms['googleKeyword'] || '');
                            utmsCookie.set('utm_term', utms['googleKeyword'] || '');
                          }
                          expiryDate = new Date();
                          expiryDate.setDate(expiryDate.getDate() + 30);
                          currentUtmsTrack = (_document$cookie$spli3 = document.cookie.split('; ').find(function (row) {
                            return row.startsWith('utmsTrack=');
                          })) == null ? void 0 : _document$cookie$spli3.split('=')[1];
                          newUtmsTrackValue = utmsCookie.toString();
                          currentHasHash = currentUtmsTrack == null ? void 0 : currentUtmsTrack.includes('nemu_');
                          newHasHash = newUtmsTrackValue.includes('nemu_');
                          if (!currentHasHash || newHasHash) {
                            document.cookie = "utmsTrack=" + newUtmsTrackValue + "; expires=" + expiryDate.toUTCString() + "; path=/; SameSite=Lax; Secure";
                            localStorage.setItem('nemu:utmsTrack', newUtmsTrackValue);
                          }
                        }
                      case 1:
                        return _context21.a(2);
                    }
                  }, _callee21);
                }));
                function shopify_ga4() {
                  return _shopify_ga.apply(this, arguments);
                }
                return shopify_ga4;
              }(),
              nuvemshop_ga4: function () {
                var _nuvemshop_ga = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
                  var _window9, _window0;
                  var _iterator14, _step14, utmName, content, utmCampaign;
                  return _regenerator().w(function (_context22) {
                    while (1) switch (_context22.n) {
                      case 0:
                        _context22.n = 1;
                        return _this8.sessionHistoryService.updateNuvemshopId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          //@ts-ignore
                          nuvemShopId: (_window9 = window) != null && (_window9 = _window9.LS) != null && (_window9 = _window9.cart) != null && _window9.id ? String((_window0 = window) == null || (_window0 = _window0.LS) == null || (_window0 = _window0.cart) == null ? void 0 : _window0.id) : null
                        });
                      case 1:
                        for (_iterator14 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step14 = _iterator14()).done;) {
                          utmName = _step14.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '');
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                          if (['facebook', 'google', 'tiktok', 'pinterest'].includes(utms['utm_source'])) {
                            searchParams.set('utm_medium', 'cpc');
                          }
                          if (utms['utm_medium']) {
                            if (utms['utm_source'] === 'google') {
                              utmCampaign = utms['utm_campaign'] || '';
                              searchParams.set('utm_campaign', utmCampaign + "_" + utms['utm_medium']);
                            } else {
                              searchParams.set('utm_term', utms['utm_medium']);
                            }
                          }
                          if (utms['googleKeyword']) {
                            searchParams.set('utm_term', utms['googleKeyword'] || '');
                          }
                        }
                      case 2:
                        return _context22.a(2);
                    }
                  }, _callee22);
                }));
                function nuvemshop_ga4() {
                  return _nuvemshop_ga.apply(this, arguments);
                }
                return nuvemshop_ga4;
              }(),
              bagy: function bagy() {
                var expiryDate = new Date();
                var utmsForCookie = {
                  utm_source: utms == null ? void 0 : utms.utm_source,
                  utm_campaign: utms == null ? void 0 : utms.utm_campaign,
                  utm_medium: utms == null ? void 0 : utms.utm_medium,
                  utm_content: utms == null ? void 0 : utms.utm_content,
                  utm_term: utms == null ? void 0 : utms.utm_term
                };
                for (var _iterator15 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames), _step15; !(_step15 = _iterator15()).done;) {
                  var utmName = _step15.value;
                  if (utmName === 'utm_content') {
                    var content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                    searchParams.set(utmName, content || '');
                  } else if (utms[utmName]) {
                    searchParams.set(utmName, utms[utmName] || '');
                  }
                }
                if (utms['googleKeyword']) {
                  searchParams.set('utm_term', utms['googleKeyword'] || '');
                }
                expiryDate.setDate(expiryDate.getDate() + 30);
                document.cookie = "_dc_utm_campaign=" + JSON.stringify(utmsForCookie) + "; expires=" + expiryDate.toUTCString() + "; path=/; domain=" + generateDomain();
                document.cookie = "_dc_utm_campaign=" + JSON.stringify(utmsForCookie) + "; path=/";
              },
              bagy_ga4: function () {
                var _bagy_ga = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23() {
                  var expiryDate, utmsForCookie, _iterator16, _step16, utmName, content, utmCampaign;
                  return _regenerator().w(function (_context23) {
                    while (1) switch (_context23.n) {
                      case 0:
                        expiryDate = new Date();
                        utmsForCookie = {
                          utm_source: utms == null ? void 0 : utms.utm_source,
                          utm_campaign: utms == null ? void 0 : utms.utm_campaign,
                          utm_medium: utms == null ? void 0 : utms.utm_medium,
                          utm_content: utms == null ? void 0 : utms.utm_content,
                          utm_term: utms == null ? void 0 : utms.utm_term
                        };
                        for (_iterator16 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step16 = _iterator16()).done;) {
                          utmName = _step16.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '');
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                          if (['facebook', 'google', 'tiktok', 'pinterest'].includes(utms['utm_source'])) {
                            searchParams.set('utm_medium', 'cpc');
                          }
                          if (utms['utm_medium']) {
                            if (utms['utm_source'] === 'google') {
                              utmCampaign = utms['utm_campaign'] || '';
                              searchParams.set('utm_campaign', utmCampaign + "_" + utms['utm_medium']);
                            } else {
                              searchParams.set('utm_term', utms['utm_medium']);
                            }
                          }
                          if (utms['googleKeyword']) {
                            searchParams.set('utm_term', utms['googleKeyword'] || '');
                          }
                        }
                        expiryDate.setDate(expiryDate.getDate() + 30);
                        document.cookie = "_dc_utm_campaign=" + JSON.stringify(utmsForCookie) + "; expires=" + expiryDate.toUTCString() + "; path=/; domain=" + generateDomain();
                        document.cookie = "_dc_utm_campaign=" + JSON.stringify(utmsForCookie) + "; path=/";
                      case 1:
                        return _context23.a(2);
                    }
                  }, _callee23);
                }));
                function bagy_ga4() {
                  return _bagy_ga.apply(this, arguments);
                }
                return bagy_ga4;
              }(),
              magazord: function magazord() {
                try {
                  var expiryDate = new Date();
                  var utmsForCookie = "lc=utm&utm_source=" + ((utms == null ? void 0 : utms.utm_source) || '') + "&utm_campaign=" + ((utms == null ? void 0 : utms.utm_campaign) || '') + "&utm_medium=" + ((utms == null ? void 0 : utms.utm_medium) || '') + "&utm_content=" + ((utms == null ? void 0 : utms.utm_content) || '') + "&utm_term=" + ((utms == null ? void 0 : utms.utm_term) || '');
                  var invertedStr = btoa(_this8.removeAccents(utmsForCookie.split('').reverse().join('')));
                  expiryDate.setDate(expiryDate.getDate() + 30);
                  document.cookie = "trk=" + encodeURIComponent(invertedStr) + "; expires=" + expiryDate.toUTCString() + "; path=/";
                } catch (error) {
                  Logger.error(error);
                }
                for (var _iterator17 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames), _step17; !(_step17 = _iterator17()).done;) {
                  var utmName = _step17.value;
                  if (utmName === 'utm_content') {
                    var content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                    searchParams.set(utmName, content || '');
                  } else if (utms[utmName]) {
                    searchParams.set(utmName, utms[utmName] || '');
                  }
                }
                if (['facebook', 'google', 'tiktok', 'pinterest'].includes(utms['utm_source'])) {
                  searchParams.set('utm_medium', 'cpc');
                }
                if (utms['utm_medium']) {
                  if (utms['utm_source'] === 'google') {
                    var utmCampaign = utms['utm_campaign'] || '';
                    searchParams.set('utm_campaign', utmCampaign + "_" + utms['utm_medium']);
                  } else {
                    searchParams.set('utm_term', utms['utm_medium']);
                  }
                }
                if (utms['googleKeyword']) {
                  searchParams.set('utm_term', utms['googleKeyword'] || '');
                }
              },
              magazord_ga4: function () {
                var _magazord_ga = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
                  var expiryDate, utmsForCookie, invertedStr, _iterator18, _step18, utmName, content;
                  return _regenerator().w(function (_context24) {
                    while (1) switch (_context24.n) {
                      case 0:
                        try {
                          expiryDate = new Date();
                          utmsForCookie = "lc=utm&utm_source=" + ((utms == null ? void 0 : utms.utm_source) || '') + "&utm_campaign=" + ((utms == null ? void 0 : utms.utm_campaign) || '') + "&utm_medium=" + ((utms == null ? void 0 : utms.utm_medium) || '') + "&utm_content=" + ((utms == null ? void 0 : utms.utm_content) || '') + "&utm_term=" + ((utms == null ? void 0 : utms.utm_term) || '');
                          invertedStr = btoa(_this8.removeAccents(utmsForCookie.split('').reverse().join('')));
                          expiryDate.setDate(expiryDate.getDate() + 30);
                          document.cookie = "trk=" + encodeURIComponent(invertedStr) + "; expires=" + expiryDate.toUTCString() + "; path=/";
                        } catch (error) {
                          Logger.error(error);
                        }
                        for (_iterator18 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step18 = _iterator18()).done;) {
                          utmName = _step18.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '');
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                      case 1:
                        return _context24.a(2);
                    }
                  }, _callee24);
                }));
                function magazord_ga4() {
                  return _magazord_ga.apply(this, arguments);
                }
                return magazord_ga4;
              }(),
              loja_integrada: function loja_integrada() {
                var expiryDate = new Date();
                for (var _iterator19 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames), _step19; !(_step19 = _iterator19()).done;) {
                  var utmName = _step19.value;
                  if (utmName === 'utm_content') {
                    var content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                    searchParams.set(utmName, content || '');
                  } else if (utms[utmName]) {
                    searchParams.set(utmName, utms[utmName] || '');
                  }
                }
                if (utms['googleKeyword']) {
                  searchParams.set('utm_term', utms['googleKeyword'] || '');
                }
                expiryDate.setDate(expiryDate.getDate() + 30);
                document.cookie = "utm_campaign=" + utms.trackingSessionId + "; expires=" + expiryDate.toUTCString() + "; path=/";
              },
              vtex: function () {
                var _vtex = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25() {
                  var _window$vtexjs;
                  var _iterator20, _step20, utmName, content, vtexSessionId, _t7;
                  return _regenerator().w(function (_context25) {
                    while (1) switch (_context25.n) {
                      case 0:
                        for (_iterator20 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step20 = _iterator20()).done;) {
                          utmName = _step20.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (!tracking.vtex_marketing_data_update_enabled) {
                          _context25.n = 1;
                          break;
                        }
                        _context25.n = 1;
                        return updateVtexMarketingData(utms);
                      case 1:
                        _context25.n = 2;
                        return waitForVtexSessionId('orderform', 'vtex');
                      case 2:
                        _t7 = _context25.v;
                        if (_t7) {
                          _context25.n = 3;
                          break;
                        }
                        _t7 = (_window$vtexjs = window.vtexjs) == null || (_window$vtexjs = _window$vtexjs.checkout) == null || (_window$vtexjs = _window$vtexjs.orderForm) == null ? void 0 : _window$vtexjs.orderFormId;
                      case 3:
                        vtexSessionId = _t7;
                        if (!(vtexSessionId && vtexSessionId !== (utms == null ? void 0 : utms.vtexSessionId))) {
                          _context25.n = 4;
                          break;
                        }
                        _context25.n = 4;
                        return _this8.sessionHistoryService.updateVtexSessionId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          vtexSessionId: vtexSessionId
                        });
                      case 4:
                        return _context25.a(2);
                    }
                  }, _callee25);
                }));
                function vtex() {
                  return _vtex.apply(this, arguments);
                }
                return vtex;
              }(),
              woocommerce: function () {
                var _woocommerce = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26() {
                  var _window1;
                  var queryParams, key, _iterator21, _step21, utmName, content, COOKIE_VALUE, cookieOptions, cookiesToSet, _i2, _Object$entries, _Object$entries$_i, cookieName, value;
                  return _regenerator().w(function (_context26) {
                    while (1) switch (_context26.n) {
                      case 0:
                        if (!((_window1 = window) != null && (_window1 = _window1.location) != null && _window1.pathname.includes('efetuar-pagamento'))) {
                          _context26.n = 1;
                          break;
                        }
                        queryParams = new URLSearchParams(window.location.search);
                        key = queryParams.get('key');
                        if (!key) {
                          _context26.n = 1;
                          break;
                        }
                        _context26.n = 1;
                        return _this8.sessionHistoryService.updateNuvemshopId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          nuvemShopId: key
                        });
                      case 1:
                        for (_iterator21 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step21 = _iterator21()).done;) {
                          utmName = _step21.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        COOKIE_VALUE = "typ=utm|||src=" + ((utms == null ? void 0 : utms.utm_source) || '(none)') + "|||mdm=" + ((utms == null ? void 0 : utms.utm_medium) || '(none)') + "|||cmp=" + ((utms == null ? void 0 : utms.utm_campaign) || '(none)') + "|||cnt=" + ((utms == null ? void 0 : utms.utm_content) || '(none)') + "|||trm=" + ((utms == null ? void 0 : utms.utm_term) || '(none)') + "|||id=(none)|||plt=(none)|||fmt=(none)|||tct=(none)";
                        document.cookie = "sbjs_current=" + encodeURIComponent(COOKIE_VALUE) + "; path=/; domain=" + generateDomain();
                        cookieOptions = '; path=/';
                        cookiesToSet = {
                          nemu_source: (utms == null ? void 0 : utms.utm_source) || '',
                          nemu_medium: (utms == null ? void 0 : utms.utm_medium) || '',
                          nemu_campaign: (utms == null ? void 0 : utms.utm_campaign) || '',
                          nemu_content: (utms == null ? void 0 : utms.utm_content) || '',
                          nemu_term: (utms == null ? void 0 : utms.utm_term) || ''
                        };
                        for (_i2 = 0, _Object$entries = Object.entries(cookiesToSet); _i2 < _Object$entries.length; _i2++) {
                          _Object$entries$_i = _Object$entries[_i2], cookieName = _Object$entries$_i[0], value = _Object$entries$_i[1];
                          if (value) {
                            document.cookie = cookieName + "=" + encodeURIComponent(value) + cookieOptions;
                          }
                        }
                      case 2:
                        return _context26.a(2);
                    }
                  }, _callee26);
                }));
                function woocommerce() {
                  return _woocommerce.apply(this, arguments);
                }
                return woocommerce;
              }(),
              woocommerce_ga4: function () {
                var _woocommerce_ga = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27() {
                  var _window10;
                  var queryParams, key, _iterator22, _step22, utmName, content, utmCampaign, expiryDate, cookiesToSet, _i3, _Object$entries2, _Object$entries2$_i, cookieName, value, COOKIE_VALUE;
                  return _regenerator().w(function (_context27) {
                    while (1) switch (_context27.n) {
                      case 0:
                        if (!((_window10 = window) != null && (_window10 = _window10.location) != null && _window10.pathname.includes('efetuar-pagamento'))) {
                          _context27.n = 1;
                          break;
                        }
                        queryParams = new URLSearchParams(window.location.search);
                        key = queryParams.get('key');
                        if (!key) {
                          _context27.n = 1;
                          break;
                        }
                        _context27.n = 1;
                        return _this8.sessionHistoryService.updateNuvemshopId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          nuvemShopId: key
                        });
                      case 1:
                        for (_iterator22 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step22 = _iterator22()).done;) {
                          utmName = _step22.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '');
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (['facebook', 'google', 'tiktok', 'pinterest'].includes(utms['utm_source'])) {
                          searchParams.set('utm_medium', 'cpc');
                        }
                        if (utms['utm_medium']) {
                          if (utms['utm_source'] === 'google') {
                            utmCampaign = utms['utm_campaign'] || '';
                            searchParams.set('utm_campaign', utmCampaign + "_" + utms['utm_medium']);
                          } else {
                            searchParams.set('utm_term', utms['utm_medium']);
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                        expiryDate = new Date();
                        expiryDate.setDate(expiryDate.getDate() + 30);
                        cookiesToSet = {
                          nemu_source: (utms == null ? void 0 : utms.utm_source) || '',
                          nemu_medium: (utms == null ? void 0 : utms.utm_medium) || '',
                          nemu_campaign: (utms == null ? void 0 : utms.utm_campaign) || '',
                          nemu_content: (utms == null ? void 0 : utms.utm_content) || '',
                          nemu_term: (utms == null ? void 0 : utms.utm_term) || ''
                        };
                        for (_i3 = 0, _Object$entries2 = Object.entries(cookiesToSet); _i3 < _Object$entries2.length; _i3++) {
                          _Object$entries2$_i = _Object$entries2[_i3], cookieName = _Object$entries2$_i[0], value = _Object$entries2$_i[1];
                          if (value) {
                            document.cookie = cookieName + "=" + encodeURIComponent(value) + "; path=/; expires=" + expiryDate.toUTCString();
                          }
                        }
                        COOKIE_VALUE = "typ=utm|||src=" + ((utms == null ? void 0 : utms.utm_source) || '(none)') + "|||mdm=" + ((utms == null ? void 0 : utms.utm_medium) || '(none)') + "|||cmp=" + ((utms == null ? void 0 : utms.utm_campaign) || '(none)') + "|||cnt=" + ((utms == null ? void 0 : utms.utm_content) || '(none)') + "|||trm=" + ((utms == null ? void 0 : utms.utm_term) || '(none)') + "|||id=(none)|||plt=(none)|||fmt=(none)|||tct=(none)";
                        document.cookie = "sbjs_current=" + encodeURIComponent(COOKIE_VALUE) + "; path=/; domain=" + generateDomain() + "; expires=" + expiryDate.toUTCString();
                      case 2:
                        return _context27.a(2);
                    }
                  }, _callee27);
                }));
                function woocommerce_ga4() {
                  return _woocommerce_ga.apply(this, arguments);
                }
                return woocommerce_ga4;
              }(),
              vnda: function () {
                var _vnda = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30() {
                  var getCookieByName, sessionHistoryService, waitForVndaSessionId, _iterator23, _step23, utmName, content, COOKIE_VALUE, expiryDate;
                  return _regenerator().w(function (_context30) {
                    while (1) switch (_context30.n) {
                      case 0:
                        waitForVndaSessionId = function _waitForVndaSessionId() {
                          return new Promise(/*#__PURE__*/function () {
                            var _ref34 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(resolve) {
                              var interval, timeout;
                              return _regenerator().w(function (_context29) {
                                while (1) switch (_context29.n) {
                                  case 0:
                                    interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28() {
                                      var sessionCookie, item;
                                      return _regenerator().w(function (_context28) {
                                        while (1) switch (_context28.n) {
                                          case 0:
                                            sessionCookie = getCookieByName('ahoy_visit') ? getCookieByName('ahoy_visit').split('?')[0] : '';
                                            item = sessionCookie || null;
                                            if (!(item !== null)) {
                                              _context28.n = 2;
                                              break;
                                            }
                                            clearInterval(interval);
                                            _context28.n = 1;
                                            return sessionHistoryService.updateTraySessionId({
                                              trackingId: tracking.id,
                                              trackingSessionId: utms.trackingSessionId,
                                              traySessionId: item
                                            });
                                          case 1:
                                            return _context28.a(2, resolve(true));
                                          case 2:
                                            return _context28.a(2);
                                        }
                                      }, _callee28);
                                    })), 500);
                                    timeout = setTimeout(function () {
                                      clearInterval(interval);
                                      resolve(null);
                                    }, 10000);
                                  case 1:
                                    return _context29.a(2);
                                }
                              }, _callee29);
                            }));
                            return function (_x21) {
                              return _ref34.apply(this, arguments);
                            };
                          }());
                        };
                        getCookieByName = _this8.storage.getCookieByName;
                        sessionHistoryService = _this8.sessionHistoryService;
                        _context30.n = 1;
                        return waitForVndaSessionId();
                      case 1:
                        for (_iterator23 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step23 = _iterator23()).done;) {
                          utmName = _step23.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        COOKIE_VALUE = "" + (utms == null ? void 0 : utms.utm_term);
                        expiryDate = new Date();
                        expiryDate.setDate(expiryDate.getDate() + 30);
                        document.cookie = "campaign=" + COOKIE_VALUE + "; expires=" + expiryDate.toUTCString() + "; domain=" + generateDomain() + "; path=/";
                      case 2:
                        return _context30.a(2);
                    }
                  }, _callee30);
                }));
                function vnda() {
                  return _vnda.apply(this, arguments);
                }
                return vnda;
              }(),
              wake: function () {
                var _wake = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32() {
                  var _iterator24, _step24, utmName, content, maxAttempts, attempts, sessionIdProcessed;
                  return _regenerator().w(function (_context32) {
                    while (1) switch (_context32.n) {
                      case 0:
                        for (_iterator24 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step24 = _iterator24()).done;) {
                          utmName = _step24.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                        maxAttempts = 100; // 100ms * 100 = 10s
                        attempts = 0;
                        sessionIdProcessed = false;
                        new Promise(function (resolve, reject) {
                          var interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31() {
                            var wakeClient, _wakeClient$checkout, _wakeClient$checkout2, metadataValues, checkoutId, _document$getElements, _this8$storage$getCoo, orderId, userIdCookie, sessionId, _t8;
                            return _regenerator().w(function (_context31) {
                              while (1) switch (_context31.n) {
                                case 0:
                                  if (!(typeof client !== 'undefined')) {
                                    _context31.n = 6;
                                    break;
                                  }
                                  //@ts-ignore
                                  wakeClient = client;
                                  clearInterval(interval);
                                  _context31.p = 1;
                                  metadataValues = [{
                                    key: 'utmSource',
                                    value: utms == null ? void 0 : utms.utm_source
                                  }, {
                                    key: 'utmCampaign',
                                    value: utms == null ? void 0 : utms.utm_campaign
                                  }, {
                                    key: 'utmMedium',
                                    value: utms == null ? void 0 : utms.utm_medium
                                  }, {
                                    key: 'utmContent',
                                    value: ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term)
                                  }, {
                                    key: 'utmTerm',
                                    value: (utms == null ? void 0 : utms.googleKeyword) || (utms == null ? void 0 : utms.utm_term)
                                  }];
                                  _context31.n = 2;
                                  return wakeClient == null || (_wakeClient$checkout = wakeClient.checkout) == null ? void 0 : _wakeClient$checkout.getCheckoutId();
                                case 2:
                                  checkoutId = _context31.v;
                                  _context31.n = 3;
                                  return wakeClient == null || (_wakeClient$checkout2 = wakeClient.checkout) == null ? void 0 : _wakeClient$checkout2.addCheckoutMetadata(metadataValues, checkoutId);
                                case 3:
                                  resolve(null);
                                  _context31.n = 5;
                                  break;
                                case 4:
                                  _context31.p = 4;
                                  _t8 = _context31.v;
                                  resolve(null);
                                case 5:
                                  _context31.n = 9;
                                  break;
                                case 6:
                                  if (!(++attempts >= maxAttempts)) {
                                    _context31.n = 7;
                                    break;
                                  }
                                  clearInterval(interval);
                                  resolve(null);
                                  _context31.n = 9;
                                  break;
                                case 7:
                                  if (sessionIdProcessed) {
                                    _context31.n = 9;
                                    break;
                                  }
                                  orderId = document.location.href.includes('/checkout') ? (_document$getElements = document.getElementsByClassName('order-number')) == null || (_document$getElements = _document$getElements[1]) == null ? void 0 : _document$getElements.textContent : undefined;
                                  userIdCookie = (_this8$storage$getCoo = _this8.storage.getCookieByName('t_us_id')) == null || (_this8$storage$getCoo = _this8$storage$getCoo[0]) == null ? void 0 : _this8$storage$getCoo.id;
                                  sessionId = orderId != null ? orderId : userIdCookie;
                                  if (!sessionId) {
                                    _context31.n = 8;
                                    break;
                                  }
                                  sessionIdProcessed = true;
                                  _context31.n = 8;
                                  return _this8.sessionHistoryService.updateVtexSessionId({
                                    trackingId: tracking.id,
                                    trackingSessionId: utms.trackingSessionId,
                                    vtexSessionId: sessionId.toString()
                                  });
                                case 8:
                                  clearInterval(interval);
                                  resolve(null);
                                case 9:
                                  return _context31.a(2);
                              }
                            }, _callee31, null, [[1, 4]]);
                          })), 100);
                        });
                      case 1:
                        return _context32.a(2);
                    }
                  }, _callee32);
                }));
                function wake() {
                  return _wake.apply(this, arguments);
                }
                return wake;
              }(),
              wake_ga4: function () {
                var _wake_ga = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34() {
                  var _loop2, _iterator25, _step25;
                  return _regenerator().w(function (_context35) {
                    while (1) switch (_context35.n) {
                      case 0:
                        _loop2 = /*#__PURE__*/_regenerator().m(function _loop2() {
                          var utmName, content, utmCampaign, maxAttempts, attempts;
                          return _regenerator().w(function (_context34) {
                            while (1) switch (_context34.n) {
                              case 0:
                                utmName = _step25.value;
                                if (utmName === 'utm_content') {
                                  content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                                  searchParams.set(utmName, content || '');
                                } else if (utms[utmName]) {
                                  searchParams.set(utmName, utms[utmName] || '');
                                }
                                if (['facebook', 'google', 'tiktok', 'pinterest'].includes(utms['utm_source'])) {
                                  searchParams.set('utm_medium', 'cpc');
                                }
                                if (utms['utm_medium']) {
                                  if (utms['utm_source'] === 'google') {
                                    utmCampaign = utms['utm_campaign'] || '';
                                    searchParams.set('utm_campaign', utmCampaign + "-" + utms['utm_medium']);
                                  } else {
                                    searchParams.set('utm_term', utms['utm_medium']);
                                  }
                                }
                                if (utms['googleKeyword']) {
                                  searchParams.set('utm_term', utms['googleKeyword'] || '');
                                }
                                maxAttempts = 100; // 100ms * 100 = 10s
                                attempts = 0;
                                new Promise(function (resolve, reject) {
                                  var interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33() {
                                    var wakeClient, _wakeClient$checkout3, _wakeClient$checkout4, metadataValues, checkoutId, _t9;
                                    return _regenerator().w(function (_context33) {
                                      while (1) switch (_context33.n) {
                                        case 0:
                                          if (!(typeof client !== 'undefined')) {
                                            _context33.n = 6;
                                            break;
                                          }
                                          //@ts-ignore
                                          wakeClient = client;
                                          clearInterval(interval);
                                          _context33.p = 1;
                                          metadataValues = [{
                                            key: 'utmSource',
                                            value: utms == null ? void 0 : utms.utm_source
                                          }, {
                                            key: 'utmCampaign',
                                            value: utms == null ? void 0 : utms.utm_campaign
                                          }, {
                                            key: 'utmMedium',
                                            value: utms == null ? void 0 : utms.utm_medium
                                          }, {
                                            key: 'utmContent',
                                            value: ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term)
                                          }, {
                                            key: 'utmTerm',
                                            value: (utms == null ? void 0 : utms.googleKeyword) || (utms == null ? void 0 : utms.utm_term)
                                          }];
                                          _context33.n = 2;
                                          return wakeClient == null || (_wakeClient$checkout3 = wakeClient.checkout) == null ? void 0 : _wakeClient$checkout3.getCheckoutId();
                                        case 2:
                                          checkoutId = _context33.v;
                                          _context33.n = 3;
                                          return wakeClient == null || (_wakeClient$checkout4 = wakeClient.checkout) == null ? void 0 : _wakeClient$checkout4.addCheckoutMetadata(metadataValues, checkoutId);
                                        case 3:
                                          resolve(null);
                                          _context33.n = 5;
                                          break;
                                        case 4:
                                          _context33.p = 4;
                                          _t9 = _context33.v;
                                          resolve(null);
                                        case 5:
                                          _context33.n = 7;
                                          break;
                                        case 6:
                                          if (++attempts >= maxAttempts) {
                                            clearInterval(interval);
                                            resolve(null);
                                          }
                                        case 7:
                                          return _context33.a(2);
                                      }
                                    }, _callee33, null, [[1, 4]]);
                                  })), 100);
                                });
                              case 1:
                                return _context34.a(2);
                            }
                          }, _loop2);
                        });
                        _iterator25 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames);
                      case 1:
                        if ((_step25 = _iterator25()).done) {
                          _context35.n = 3;
                          break;
                        }
                        return _context35.d(_regeneratorValues(_loop2()), 2);
                      case 2:
                        _context35.n = 1;
                        break;
                      case 3:
                        return _context35.a(2);
                    }
                  }, _callee34);
                }));
                function wake_ga4() {
                  return _wake_ga.apply(this, arguments);
                }
                return wake_ga4;
              }(),
              tutoryhub: function () {
                var _tutoryhub = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35() {
                  var url, extractOrderId, orderId, _iterator26, _step26, utmName, content;
                  return _regenerator().w(function (_context36) {
                    while (1) switch (_context36.n) {
                      case 0:
                        extractOrderId = function _extractOrderId(url) {
                          var match = url.match(/\/obrigado\/(or_[a-zA-Z0-9]+)/);
                          return match ? match[1] : null;
                        };
                        url = window.location.href;
                        orderId = extractOrderId(url);
                        if (!orderId) {
                          _context36.n = 1;
                          break;
                        }
                        _context36.n = 1;
                        return _this8.sessionHistoryService.updateNuvemshopId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          nuvemShopId: orderId
                        });
                      case 1:
                        for (_iterator26 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step26 = _iterator26()).done;) {
                          utmName = _step26.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                      case 2:
                        return _context36.a(2);
                    }
                  }, _callee35);
                }));
                function tutoryhub() {
                  return _tutoryhub.apply(this, arguments);
                }
                return tutoryhub;
              }(),
              uappi: function () {
                var _uappi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36() {
                  var _uappiClient$pedido, uappiClient, orderId, _iterator27, _step27, utmName, content;
                  return _regenerator().w(function (_context37) {
                    while (1) switch (_context37.n) {
                      case 0:
                        if (!(typeof WapStore !== 'undefined')) {
                          _context37.n = 1;
                          break;
                        }
                        //@ts-ignore
                        uappiClient = WapStore;
                        orderId = uappiClient == null || (_uappiClient$pedido = uappiClient.pedido) == null ? void 0 : _uappiClient$pedido.id;
                        if (!orderId) {
                          _context37.n = 1;
                          break;
                        }
                        _context37.n = 1;
                        return _this8.sessionHistoryService.updateNuvemshopId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          nuvemShopId: String(orderId)
                        });
                      case 1:
                        for (_iterator27 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step27 = _iterator27()).done;) {
                          utmName = _step27.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                      case 2:
                        return _context37.a(2);
                    }
                  }, _callee36);
                }));
                function uappi() {
                  return _uappi.apply(this, arguments);
                }
                return uappi;
              }(),
              uappi_ga4: function () {
                var _uappi_ga = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee37() {
                  var _uappiClient$pedido2, uappiClient, orderId, _iterator28, _step28, utmName, content, utmCampaign;
                  return _regenerator().w(function (_context38) {
                    while (1) switch (_context38.n) {
                      case 0:
                        if (!(typeof WapStore !== 'undefined')) {
                          _context38.n = 1;
                          break;
                        }
                        //@ts-ignore
                        uappiClient = WapStore;
                        orderId = uappiClient == null || (_uappiClient$pedido2 = uappiClient.pedido) == null ? void 0 : _uappiClient$pedido2.id;
                        if (!orderId) {
                          _context38.n = 1;
                          break;
                        }
                        _context38.n = 1;
                        return _this8.sessionHistoryService.updateNuvemshopId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          nuvemShopId: String(orderId)
                        });
                      case 1:
                        for (_iterator28 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step28 = _iterator28()).done;) {
                          utmName = _step28.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['utm_medium']) {
                          if (utms['utm_source'] === 'google') {
                            utmCampaign = utms['utm_campaign'] || '';
                            searchParams.set('utm_campaign', utmCampaign + "_" + utms['utm_medium']);
                          } else {
                            searchParams.set('utm_term', utms['utm_medium']);
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                      case 2:
                        return _context38.a(2);
                    }
                  }, _callee37);
                }));
                function uappi_ga4() {
                  return _uappi_ga.apply(this, arguments);
                }
                return uappi_ga4;
              }(),
              yampi: function () {
                var _yampi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee38() {
                  var _window$Yampi;
                  var token;
                  return _regenerator().w(function (_context39) {
                    while (1) switch (_context39.n) {
                      case 0:
                        token = (_window$Yampi = window.Yampi) == null ? void 0 : _window$Yampi.cart_token;
                        if (!token) {
                          _context39.n = 1;
                          break;
                        }
                        _context39.n = 1;
                        return _this8.sessionHistoryService.updateVtexSessionId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          vtexSessionId: String(token)
                        });
                      case 1:
                        return _context39.a(2);
                    }
                  }, _callee38);
                }));
                function yampi() {
                  return _yampi.apply(this, arguments);
                }
                return yampi;
              }(),
              irroba: function () {
                var _irroba = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee39() {
                  var HTML_ELEMENT_ID, orderId, _iterator29, _step29, utmName, content;
                  return _regenerator().w(function (_context40) {
                    while (1) switch (_context40.n) {
                      case 0:
                        HTML_ELEMENT_ID = 'number-order';
                        orderId = document.getElementsByClassName(HTML_ELEMENT_ID);
                        if (!(orderId.length > 0)) {
                          _context40.n = 1;
                          break;
                        }
                        _context40.n = 1;
                        return _this8.sessionHistoryService.updateNuvemshopId({
                          trackingId: tracking.id,
                          trackingSessionId: utms.trackingSessionId,
                          nuvemShopId: String(orderId[0].textContent)
                        });
                      case 1:
                        for (_iterator29 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step29 = _iterator29()).done;) {
                          utmName = _step29.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                      case 2:
                        return _context40.a(2);
                    }
                  }, _callee39);
                }));
                function irroba() {
                  return _irroba.apply(this, arguments);
                }
                return irroba;
              }(),
              shoppub: function () {
                var _shoppub = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee41() {
                  var shoppubTimer, _iterator30, _step30, utmName, content;
                  return _regenerator().w(function (_context42) {
                    while (1) switch (_context42.n) {
                      case 0:
                        shoppubTimer = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee40() {
                          var _window11;
                          var _window12;
                          return _regenerator().w(function (_context41) {
                            while (1) switch (_context41.n) {
                              case 0:
                                if (!((_window11 = window) != null && (_window11 = _window11.Shoppub) != null && (_window11 = _window11.customer) != null && _window11.id_on_store)) {
                                  _context41.n = 1;
                                  break;
                                }
                                clearInterval(shoppubTimer);
                                _context41.n = 1;
                                return _this8.sessionHistoryService.updateNuvemshopId({
                                  trackingId: tracking.id,
                                  trackingSessionId: utms.trackingSessionId,
                                  nuvemShopId: String((_window12 = window) == null || (_window12 = _window12.Shoppub) == null || (_window12 = _window12.customer) == null ? void 0 : _window12.id_on_store)
                                });
                              case 1:
                                return _context41.a(2);
                            }
                          }, _callee40);
                        })), 500);
                        for (_iterator30 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step30 = _iterator30()).done;) {
                          utmName = _step30.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                      case 1:
                        return _context42.a(2);
                    }
                  }, _callee41);
                }));
                function shoppub() {
                  return _shoppub.apply(this, arguments);
                }
                return shoppub;
              }(),
              zedy: function () {
                var _zedy = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee43() {
                  var _iterator31, _step31, utmName, content, retries, maxRetries, intervalId;
                  return _regenerator().w(function (_context44) {
                    while (1) switch (_context44.n) {
                      case 0:
                        for (_iterator31 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step31 = _iterator31()).done;) {
                          utmName = _step31.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                        if (window.location.href.includes('/cart')) {
                          retries = 0;
                          maxRetries = 60;
                          intervalId = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee42() {
                            var _window13;
                            var checkoutUrl, checkoutId, _t0;
                            return _regenerator().w(function (_context43) {
                              while (1) switch (_context43.n) {
                                case 0:
                                  console.info('[PIXEL NEMU] find checkoutId');
                                  checkoutUrl = (_window13 = window) == null ? void 0 : _window13.chtCheckoutUrl;
                                  checkoutId = checkoutUrl == null ? void 0 : checkoutUrl.split('/').filter(Boolean).pop();
                                  if (!checkoutId) {
                                    _context43.n = 4;
                                    break;
                                  }
                                  _context43.p = 1;
                                  _context43.n = 2;
                                  return _this8.sessionHistoryService.updateNuvemshopId({
                                    trackingId: tracking.id,
                                    trackingSessionId: utms.trackingSessionId,
                                    nuvemShopId: checkoutId
                                  });
                                case 2:
                                  clearInterval(intervalId);
                                  _context43.n = 4;
                                  break;
                                case 3:
                                  _context43.p = 3;
                                  _t0 = _context43.v;
                                  clearInterval(intervalId);
                                case 4:
                                  retries++;
                                  if (retries >= maxRetries) {
                                    console.info('[PIXEL NEMU] checkoutId not found after multiple attempts.');
                                    clearInterval(intervalId);
                                  }
                                case 5:
                                  return _context43.a(2);
                              }
                            }, _callee42, null, [[1, 3]]);
                          })), 1000);
                        } else {
                          console.info('[PIXEL NEMU] Page is not /cart. Skipping lookup for checkoutId.');
                        }
                      case 1:
                        return _context44.a(2);
                    }
                  }, _callee43);
                }));
                function zedy() {
                  return _zedy.apply(this, arguments);
                }
                return zedy;
              }(),
              cartpanda: function () {
                var _cartpanda = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee46() {
                  var _iterator32, _step32, utmName, content, getCookieByName, sessionHistoryService, waitForCartpandaCartToken;
                  return _regenerator().w(function (_context47) {
                    while (1) switch (_context47.n) {
                      case 0:
                        waitForCartpandaCartToken = function _waitForCartpandaCart() {
                          return new Promise(/*#__PURE__*/function () {
                            var _ref40 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee45(resolve) {
                              var interval;
                              return _regenerator().w(function (_context46) {
                                while (1) switch (_context46.n) {
                                  case 0:
                                    interval = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee44() {
                                      var cartTokenCookie, item;
                                      return _regenerator().w(function (_context45) {
                                        while (1) switch (_context45.n) {
                                          case 0:
                                            cartTokenCookie = getCookieByName('cart_token') ? getCookieByName('cart_token').split('?')[0] : '';
                                            item = cartTokenCookie || null;
                                            if (!(item !== null)) {
                                              _context45.n = 2;
                                              break;
                                            }
                                            clearInterval(interval);
                                            _context45.n = 1;
                                            return sessionHistoryService.updateNuvemshopId({
                                              trackingId: tracking.id,
                                              trackingSessionId: utms.trackingSessionId,
                                              nuvemShopId: item
                                            });
                                          case 1:
                                            return _context45.a(2, resolve(true));
                                          case 2:
                                            return _context45.a(2);
                                        }
                                      }, _callee44);
                                    })), 500);
                                  case 1:
                                    return _context46.a(2);
                                }
                              }, _callee45);
                            }));
                            return function (_x22) {
                              return _ref40.apply(this, arguments);
                            };
                          }());
                        };
                        for (_iterator32 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step32 = _iterator32()).done;) {
                          utmName = _step32.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '') + "|" + (utms == null ? void 0 : utms.utm_term);
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                        getCookieByName = _this8.storage.getCookieByName;
                        sessionHistoryService = _this8.sessionHistoryService;
                        if (window.location.href.includes('/checkout')) {
                          waitForCartpandaCartToken();
                        }
                      case 1:
                        return _context47.a(2);
                    }
                  }, _callee46);
                }));
                function cartpanda() {
                  return _cartpanda.apply(this, arguments);
                }
                return cartpanda;
              }(),
              jetecommerce: function () {
                var _jetecommerce = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee48() {
                  var _iterator33, _step33, utmName, content, utmCampaign, jetecommerceTimer;
                  return _regenerator().w(function (_context49) {
                    while (1) switch (_context49.n) {
                      case 0:
                        for (_iterator33 = _createForOfIteratorHelperLoose(_this8.scanner.utmNames); !(_step33 = _iterator33()).done;) {
                          utmName = _step33.value;
                          if (utmName === 'utm_content') {
                            content = ((utms == null ? void 0 : utms.utm_adName) || '') + "|" + ((utms == null ? void 0 : utms.utm_adId) || '');
                            searchParams.set(utmName, content || '');
                          } else if (utms[utmName]) {
                            searchParams.set(utmName, utms[utmName] || '');
                          }
                        }
                        if (utms['utm_medium']) {
                          if (utms['utm_source'] === 'google') {
                            utmCampaign = utms['utm_campaign'] || '';
                            searchParams.set('utm_campaign', utmCampaign + "_" + utms['utm_medium']);
                            searchParams.set('utm_medium', 'cpc');
                          } else {
                            if (['facebook', 'google', 'tiktok', 'pinterest'].includes(utms['utm_source'])) {
                              searchParams.set('utm_medium', 'cpc');
                              searchParams.set('utm_term', utms['utm_medium']);
                            } else {
                              searchParams.set('utm_medium', utms['utm_medium']);
                            }
                          }
                        }
                        if (utms['googleKeyword']) {
                          searchParams.set('utm_term', utms['googleKeyword'] || '');
                        }
                        jetecommerceTimer = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee47() {
                          var emailElement, email;
                          return _regenerator().w(function (_context48) {
                            while (1) switch (_context48.n) {
                              case 0:
                                emailElement = document.querySelector('.mail');
                                if (!emailElement) {
                                  _context48.n = 1;
                                  break;
                                }
                                clearInterval(jetecommerceTimer);
                                email = emailElement == null ? void 0 : emailElement.textContent;
                                _context48.n = 1;
                                return _this8.sessionHistoryService.updateNuvemshopId({
                                  trackingId: tracking.id,
                                  trackingSessionId: utms.trackingSessionId,
                                  nuvemShopId: email
                                });
                              case 1:
                                return _context48.a(2);
                            }
                          }, _callee47);
                        })), 500);
                        setTimeout(function () {
                          clearInterval(jetecommerceTimer);
                        }, 60000 * 5);
                      case 1:
                        return _context49.a(2);
                    }
                  }, _callee48);
                }));
                function jetecommerce() {
                  return _jetecommerce.apply(this, arguments);
                }
                return jetecommerce;
              }(),
              magento: function () {
                var _magento = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee50() {
                  var timer;
                  return _regenerator().w(function (_context51) {
                    while (1) switch (_context51.n) {
                      case 0:
                        timer = setInterval(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee49() {
                          var _window14, _document$querySelect, _document$querySelect2;
                          var cart, customerEmail, orderIdFromHtml, orderIdFromLabel, cartId;
                          return _regenerator().w(function (_context50) {
                            while (1) switch (_context50.n) {
                              case 0:
                                cart = JSON.parse(localStorage.getItem('ds-cart-order'));
                                customerEmail = (_window14 = window) == null || (_window14 = _window14.dataLayer) == null || (_window14 = _window14.find(function (item) {
                                  return !!item.customerEmail;
                                })) == null ? void 0 : _window14.customerEmail;
                                orderIdFromHtml = (_document$querySelect = document.querySelectorAll('.order-information .order-item span')[1]) == null ? void 0 : _document$querySelect.textContent;
                                orderIdFromLabel = (_document$querySelect2 = document.querySelector('h2.order-id-label')) == null ? void 0 : _document$querySelect2.textContent.split("Nº do pedido ")[1];
                                if (!(cart || customerEmail || orderIdFromHtml || orderIdFromLabel)) {
                                  _context50.n = 1;
                                  break;
                                }
                                clearInterval(timer);
                                cartId = (cart == null ? void 0 : cart.id) || customerEmail || orderIdFromHtml || orderIdFromLabel;
                                _context50.n = 1;
                                return _this8.sessionHistoryService.updateNuvemshopId({
                                  trackingId: tracking.id,
                                  trackingSessionId: utms.trackingSessionId,
                                  nuvemShopId: cartId
                                });
                              case 1:
                                return _context50.a(2);
                            }
                          }, _callee49);
                        })), 500);
                        setTimeout(function () {
                          clearInterval(timer);
                        }, 30000);
                      case 1:
                        return _context51.a(2);
                    }
                  }, _callee50);
                }));
                function magento() {
                  return _magento.apply(this, arguments);
                }
                return magento;
              }()
            };
            mapping = platformMappings[tracking == null ? void 0 : tracking.platform] || platformMappings['others'];
            _context52.n = 1;
            return mapping();
          case 1:
            return _context52.a(2, searchParams);
        }
      }, _callee51, this);
    }));
    function parseUTMsToQueryParams(_x17) {
      return _parseUTMsToQueryParams.apply(this, arguments);
    }
    return parseUTMsToQueryParams;
  }();
  _proto8.removeAccents = function removeAccents(input) {
    return input.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[`^~¨´]/g, '');
  };
  return UtmParser;
}();
var UtmProducer = /*#__PURE__*/function () {
  function UtmProducer(_ref44) {
    var sessionHistoryService = _ref44.sessionHistoryService,
      redirect_url = _ref44.redirect_url;
    this.sessionHistoryService = void 0;
    this.redirect_url = void 0;
    Object.assign(this, {
      redirect_url: redirect_url,
      sessionHistoryService: sessionHistoryService
    });
  }
  var _proto9 = UtmProducer.prototype;
  _proto9.redirectWithUTMs = function redirectWithUTMs(params) {
    var separator = this.redirect_url.includes('?') ? '&' : '?';
    console.log('redirectWithUTMs :>> params :>> ', params);
    window.location.href = "" + this.redirect_url + separator + params;
  };
  _proto9.loadUTMsInQueryParams = function loadUTMsInQueryParams(tracking, queryParams, url_update_enabled) {
    var newURL = "" + window.location.origin + window.location.pathname + "?" + queryParams;
    if ((tracking == null ? void 0 : tracking.accountId) !== 4417 && (tracking == null ? void 0 : tracking.platform) !== 'shopify_ga4' && (tracking == null ? void 0 : tracking.platform) !== 'shoppub' && (tracking == null ? void 0 : tracking.platform) !== 'nuvemshop_ga4' && (tracking == null ? void 0 : tracking.platform) !== 'bagy_ga4' && (tracking == null ? void 0 : tracking.platform) !== 'tray_ga4' && (tracking == null ? void 0 : tracking.platform) !== 'magazord_ga4' && (tracking == null ? void 0 : tracking.platform) !== 'uappi_ga4' && (tracking == null ? void 0 : tracking.platform) !== 'woocommerce_ga4' && (tracking == null ? void 0 : tracking.platform) !== 'jetecommerce' && url_update_enabled) {
      window.history.replaceState({
        path: newURL
      }, '', newURL);
    }
    var utms = UtmProducer.extractUtmsFromQueryParams(queryParams.toString());
    var expiryDateNemu = new Date();
    expiryDateNemu.setDate(expiryDateNemu.getDate() + 30);
    document.cookie = "nemuUtmsTrack=" + utms + "; expires=" + expiryDateNemu.toUTCString() + "; path=/; SameSite=Lax; Secure";
    localStorage.setItem('nemu:utmsTrack', "" + utms);
    if ((tracking == null ? void 0 : tracking.platform) === 'shopify_plus_others') {
      var expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30);
      document.cookie = "utmsTrack=" + utms + "; expires=" + expiryDate.toUTCString() + "; path=/; SameSite=Lax; Secure";
      localStorage.setItem('nemu:utmsTrack', "" + utms);
    }
  };
  UtmProducer.extractUtmsFromQueryParams = function extractUtmsFromQueryParams(queryParams) {
    var utmsParams = ['utm_source', 'utm_content', 'utm_medium', 'utm_campaign', 'utm_term'];
    var utms = queryParams.split('&').filter(function (param) {
      return utmsParams.includes(param.split('=')[0]);
    }).join('&');
    return utms;
  };
  _proto9.addInitiateCheckoutListener = function addInitiateCheckoutListener(tracking, trackingSessionId, trackingSessionHistoryId) {
    var _this9 = this;
    if ((tracking == null ? void 0 : tracking.initiate_checkout_detection_type) === 'selector') {
      var elements = document.querySelectorAll(tracking == null ? void 0 : tracking.initiate_checkout_detection_value);
      for (var _iterator34 = _createForOfIteratorHelperLoose(elements), _step34; !(_step34 = _iterator34()).done;) {
        var element = _step34.value;
        element.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee52() {
          return _regenerator().w(function (_context53) {
            while (1) switch (_context53.n) {
              case 0:
                _context53.n = 1;
                return _this9.sessionHistoryService.sendInitateCheckoutEvent({
                  trackingId: tracking == null ? void 0 : tracking.id,
                  trackingSessionId: trackingSessionId,
                  trackingSessionHistoryId: trackingSessionHistoryId
                });
              case 1:
                return _context53.a(2);
            }
          }, _callee52);
        })));
      }
      return;
    }
    var selectors = ['button', 'a', 'input[type=""]', 'input[type="button"]', 'input[type="submit"]', 'input[type="reset"]'];
    for (var _i4 = 0, _selectors = selectors; _i4 < _selectors.length; _i4++) {
      var selector = _selectors[_i4];
      var _elements = document.querySelectorAll(selector);
      for (var _iterator35 = _createForOfIteratorHelperLoose(_elements), _step35; !(_step35 = _iterator35()).done;) {
        var _element = _step35.value;
        var containsText = false;
        if (_element.tagName.toLowerCase() === 'button' || _element.tagName.toLowerCase() === 'a') {
          containsText = _element.textContent.includes(tracking == null ? void 0 : tracking.initiate_checkout_detection_value);
        } else if (_element.tagName.toLowerCase() === 'input') {
          containsText = _element.value.includes(tracking == null ? void 0 : tracking.initiate_checkout_detection_value);
        }
        if (containsText) {
          _element.addEventListener('click', /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee53() {
            return _regenerator().w(function (_context54) {
              while (1) switch (_context54.n) {
                case 0:
                  _context54.n = 1;
                  return this.sessionHistoryService.sendInitateCheckoutEvent({
                    trackingId: tracking == null ? void 0 : tracking.id,
                    trackingSessionId: trackingSessionId,
                    trackingSessionHistoryId: trackingSessionHistoryId
                  });
                case 1:
                  return _context54.a(2);
              }
            }, _callee53, this);
          })));
        }
      }
    }
  };
  _proto9.execute = function execute(_ref47) {
    var trackingType = _ref47.trackingType,
      queryParams = _ref47.queryParams,
      trackingSessionHistoryId = _ref47.trackingSessionHistoryId,
      tracking = _ref47.tracking,
      trackingSessionId = _ref47.trackingSessionId,
      url_update_enabled = _ref47.url_update_enabled;
    var isRedirect = trackingType && trackingType === 'redirect';
    if (isRedirect) {
      this.redirectWithUTMs(queryParams.toString());
      return;
    }
    this.loadUTMsInQueryParams(tracking, queryParams.toString(), url_update_enabled);
    if (tracking != null && tracking.initiate_checkout_enabled && !!(tracking != null && tracking.initiate_checkout_detection_value)) {
      this.addInitiateCheckoutListener(tracking, trackingSessionId, trackingSessionHistoryId);
    }
  };
  return UtmProducer;
}();
var FacebookPixelManager = /*#__PURE__*/function () {
  function FacebookPixelManager(storage) {
    this.storage = storage;
    this.fbcKey = '_fbc';
    this.fbpKey = '_fbp';
  }
  var _proto0 = FacebookPixelManager.prototype;
  _proto0.getUnixTimestamp = function getUnixTimestamp() {
    var dateInSaoPauloTimezone = new Date().toLocaleString('en-US', {
      timeZone: 'America/Sao_Paulo'
    });
    return Math.floor(new Date(dateInSaoPauloTimezone).getTime() / 1000);
  };
  _proto0.generateRandomNumber = function generateRandomNumber() {
    return Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
  };
  _proto0.getExpirationDate = function getExpirationDate() {
    return new Date(Date.now() + 1000 * 60 * 60 * 24 * 90);
  };
  _proto0.isValidFbc = function isValidFbc(fbclid) {
    var fbc = this.storage.getCookieByName(this.fbcKey);
    return !!fbc && !!fbclid && fbc.includes(fbclid);
  };
  _proto0.isValidFbp = function isValidFbp() {
    var fbp = this.storage.getCookieByName(this.fbpKey);
    return !!fbp;
  };
  _proto0.validateAndUpdateFbc = function validateAndUpdateFbc() {
    var fbclid = new URLSearchParams(window.location.search).get('fbclid');
    if (!fbclid || this.isValidFbc(fbclid)) return;
    var fbc = "fb.1." + this.getUnixTimestamp() + "." + fbclid;
    this.storage.setCookie(this.fbcKey, fbc, this.getExpirationDate());
  };
  _proto0.ensureFbpExists = function ensureFbpExists() {
    if (this.isValidFbp()) return;
    var randomPart = this.generateRandomNumber();
    var fbp = "fb.1." + this.getUnixTimestamp() + "." + randomPart;
    this.storage.setCookie(this.fbpKey, fbp, this.getExpirationDate());
  };
  _proto0.initialize = function initialize() {
    this.validateAndUpdateFbc();
    this.ensureFbpExists();
  };
  return FacebookPixelManager;
}();
var BotValidator = /*#__PURE__*/function () {
  function BotValidator() {
    this.DEFAULT_BLOCKED_UA_STRS = [
    // Random assortment of bots
    'amazonbot', 'amazonproductbot', 'app.hypefactors.com',
    // Buck, but "buck" is too short to be safe to block (https://app.hypefactors.com/media-monitoring/about.htm)
    'applebot', 'archive.org_bot', 'awariobot', 'backlinksextendedbot', 'baiduspider', 'bingbot', 'bingpreview', 'chrome-lighthouse', 'dataforseobot', 'deepscan', 'duckduckbot', 'facebookexternal', 'facebookcatalog', 'http://yandex.com/bots', 'hubspot', 'ia_archiver', 'leikibot', 'linkedinbot', 'meta-externalagent', 'mj12bot', 'msnbot', 'nessus', 'petalbot', 'pinterest', 'prerender', 'rogerbot', 'screaming frog', 'sebot-wa', 'sitebulb', 'slackbot', 'slurp', 'trendictionbot', 'turnitin', 'twitterbot', 'vercel-screenshot', 'vercelbot', 'yahoo! slurp', 'yandexbot', 'zoombot',
    // Bot-like words, maybe we should block `bot` entirely?
    'bot.htm', 'bot.php', '(bot;', 'bot/', 'crawler',
    // Ahrefs: https://ahrefs.com/seo/glossary/ahrefsbot
    'ahrefsbot', 'ahrefssiteaudit',
    // Semrush bots: https://www.semrush.com/bot/
    'semrushbot', 'siteauditbot', 'splitsignalbot',
    // AI Crawlers
    'gptbot', 'oai-searchbot', 'chatgpt-user', 'perplexitybot',
    // Uptime-like stuff
    'better uptime bot', 'sentryuptimebot', 'uptimerobot',
    // headless browsers
    'headlesschrome', 'cypress',
    // a whole bunch of goog-specific crawlers
    // https://developers.google.com/search/docs/advanced/crawling/overview-google-crawlers
    'google-hoteladsverifier', 'adsbot-google', 'apis-google', 'duplexweb-google', 'feedfetcher-google', 'google favicon', 'google web preview', 'google-read-aloud', 'googlebot', 'googleother', 'google-cloudvertexbot', 'googleweblight', 'mediapartners-google', 'storebot-google', 'google-inspectiontool', 'bytespider'];
  }
  var _proto1 = BotValidator.prototype;
  _proto1.isBlockedUA = function isBlockedUA(ua, customBlockedUserAgents) {
    if (customBlockedUserAgents === void 0) {
      customBlockedUserAgents = [];
    }
    if (!ua) {
      return false;
    }
    var uaLower = ua.toLowerCase();
    return this.DEFAULT_BLOCKED_UA_STRS.concat(customBlockedUserAgents).some(function (blockedUA) {
      var blockedUaLower = blockedUA.toLowerCase();
      return uaLower.indexOf(blockedUaLower) !== -1;
    });
  };
  return BotValidator;
}();
var RouteChangeDetector = /*#__PURE__*/function () {
  function RouteChangeDetector(onRouteChange) {
    this.lastPath = void 0;
    this.onRouteChange = void 0;
    this.lastPath = window.location.pathname;
    this.onRouteChange = onRouteChange;
  }
  var _proto10 = RouteChangeDetector.prototype;
  _proto10.handleRouteChange = function handleRouteChange() {
    var currentPath = window.location.pathname;
    if (currentPath !== this.lastPath) {
      this.lastPath = currentPath;
      this.onRouteChange();
    }
  };
  _proto10.setupListeners = function setupListeners() {
    var _this0 = this;
    var originalPushState = history.pushState;
    history.pushState = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      var result = originalPushState.apply(history, args);
      _this0.handleRouteChange();
      return result;
    };
    var originalReplaceState = history.replaceState;
    history.replaceState = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      var result = originalReplaceState.apply(history, args);
      _this0.handleRouteChange();
      return result;
    };
    window.addEventListener('popstate', function () {
      _this0.handleRouteChange();
    });
  };
  return RouteChangeDetector;
}();
var WebPixelManager = /*#__PURE__*/function (_BaseService5) {
  function WebPixelManager(storage, botValidator, trackingId, baseURL, nemuUtms) {
    var _this1;
    _this1 = _BaseService5.call(this) || this;
    _this1.storage = storage;
    _this1.botValidator = botValidator;
    _this1.trackingId = trackingId;
    _this1.baseURL = baseURL;
    _this1.nemuUtms = nemuUtms;
    _this1.STORAGE_KEY = 'nmu_wa';
    _this1.SESSION_TIMEOUT_SEC = 30 * 60;
    // 30 minutes
    _this1.QUEUE_DEBOUNCE_TIME_MS = 150;
    // 150 milliseconds
    _this1.QUEUE_MAX_WAIT_TIME_MS = 450;
    // 450 milliseconds
    _this1.SUPPORTED_EVENTS = ['page_view', 'view_item', 'add_to_cart', 'view_cart', 'begin_checkout', 'add_payment_info', 'session_start'];
    _this1.eventQueue = [];
    _this1.debounceTimer = null;
    _this1.maxWaitTimer = null;
    return _this1;
  }
  _inheritsLoose(WebPixelManager, _BaseService5);
  var _proto11 = WebPixelManager.prototype;
  _proto11.getUnixTimestamp = function getUnixTimestamp() {
    var dateInSaoPauloTimezone = new Date().toLocaleString('en-US', {
      timeZone: 'America/Sao_Paulo'
    });
    return Math.floor(new Date(dateInSaoPauloTimezone).getTime() / 1000);
  };
  _proto11.generateRandomNumber = function generateRandomNumber() {
    return Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
  };
  _proto11.generateId = function generateId() {
    var timestamp = this.getUnixTimestamp();
    if (!timestamp) {
      return null;
    }
    return "nmu." + this.getUnixTimestamp() + "." + this.generateRandomNumber();
  };
  _proto11.getDeviceType = function getDeviceType() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var maxTouchPoints = navigator.maxTouchPoints || 0;
    var mobilePattern = /Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile.*Firefox/i;
    var tabletPattern = /iPad|Android(?!.*Mobile)|Tablet|PlayBook|Silk/i;
    var isIPadOS = /Macintosh/i.test(userAgent) && maxTouchPoints > 1;
    if (isIPadOS || tabletPattern.test(userAgent)) {
      return 'tablet';
    }
    if (mobilePattern.test(userAgent)) {
      return 'mobile';
    }
    return 'desktop';
  };
  _proto11.getStoredData = function getStoredData() {
    return this.storage.getLocalStorageItem(this.STORAGE_KEY);
  };
  _proto11.setStoredData = function setStoredData(data) {
    this.storage.setLocalStorageItem(this.STORAGE_KEY, data);
  };
  _proto11.newSession = function newSession() {
    var now = this.getUnixTimestamp();
    return {
      sessionId: this.generateId(),
      startedAt: now,
      lastSentAt: null
    };
  };
  _proto11.initializeNewData = function initializeNewData() {
    var newData = {
      id: this.generateId(),
      session: this.newSession()
    };
    this.setStoredData(newData);
    return newData;
  };
  _proto11.isSessionExpired = function isSessionExpired(lastSentAt) {
    if (lastSentAt === null) {
      return true;
    }
    var now = this.getUnixTimestamp();
    return now - lastSentAt > this.SESSION_TIMEOUT_SEC;
  };
  _proto11.getOrCreateWebPixel = function getOrCreateWebPixel() {
    var storedData = this.getStoredData();
    if (!storedData) {
      return {
        webPixel: this.initializeNewData(),
        isNewSession: true
      };
    }
    var isExpired = this.isSessionExpired(storedData.session.lastSentAt);
    if (!isExpired) {
      return {
        webPixel: storedData,
        isNewSession: false
      };
    }
    storedData.session = this.newSession();
    this.setStoredData(storedData);
    return {
      webPixel: storedData,
      isNewSession: true
    };
  };
  _proto11.sendEvent = function sendEvent(event) {
    var _this10 = this;
    this.eventQueue.push(event);
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(function () {
      _this10.flushQueue();
    }, this.QUEUE_DEBOUNCE_TIME_MS);
    if (!this.maxWaitTimer) {
      this.maxWaitTimer = setTimeout(function () {
        _this10.flushQueue();
      }, this.QUEUE_MAX_WAIT_TIME_MS);
    }
  };
  _proto11.flushQueue = /*#__PURE__*/function () {
    var _flushQueue = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee54() {
      var events, storedData, url, body, _t1;
      return _regenerator().w(function (_context55) {
        while (1) switch (_context55.n) {
          case 0:
            if (!(this.eventQueue.length === 0)) {
              _context55.n = 1;
              break;
            }
            return _context55.a(2);
          case 1:
            events = [].concat(this.eventQueue);
            this.eventQueue = [];
            if (this.debounceTimer) {
              clearTimeout(this.debounceTimer);
              this.debounceTimer = null;
            }
            if (this.maxWaitTimer) {
              clearTimeout(this.maxWaitTimer);
              this.maxWaitTimer = null;
            }
            storedData = this.getStoredData();
            if (storedData) {
              storedData.session.lastSentAt = this.getUnixTimestamp();
              this.setStoredData(storedData);
            }
            _context55.p = 2;
            url = this.baseURL + "/events/" + this.trackingId;
            body = JSON.stringify({
              trackingId: this.trackingId,
              events: events
            });
            _context55.n = 3;
            return this.sendBeaconOrFetch(url, body);
          case 3:
            _context55.n = 5;
            break;
          case 4:
            _context55.p = 4;
            _t1 = _context55.v;
            console.error('[NEMU WEB PIXEL] Failed to send events', _t1);
          case 5:
            return _context55.a(2);
        }
      }, _callee54, this, [[2, 4]]);
    }));
    function flushQueue() {
      return _flushQueue.apply(this, arguments);
    }
    return flushQueue;
  }();
  _proto11.sendSessionStartEvent = function sendSessionStartEvent(webPixel) {
    var eventName = 'session_start';
    var eventTimestamp = this.getUnixTimestamp();
    var enrichedEvent = this.enrichEvent(webPixel, eventName, eventTimestamp);
    this.sendEvent(enrichedEvent);
  };
  _proto11.sendPageViewEvent = function sendPageViewEvent(webPixel) {
    var eventName = 'page_view';
    var eventTimestamp = this.getUnixTimestamp();
    var enrichedEvent = this.enrichEvent(webPixel, eventName, eventTimestamp);
    this.sendEvent(enrichedEvent);
  };
  _proto11.normalizeEventName = function normalizeEventName(eventName) {
    return this.convertToSnakeCase(eventName);
  };
  _proto11.filterSupportedEvent = function filterSupportedEvent(normalizedEventName) {
    var foundEvent = this.SUPPORTED_EVENTS.find(function (supportedEvent) {
      return normalizedEventName.includes(supportedEvent);
    });
    return foundEvent || null;
  };
  _proto11.convertToSnakeCase = function convertToSnakeCase(text) {
    return text.replace(/-/g, '_').replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  };
  _proto11.normalizeDataLayerEventName = function normalizeDataLayerEventName(eventDetail) {
    if ('0' in eventDetail && eventDetail['0'] === 'event' && '1' in eventDetail && typeof eventDetail['1'] === 'string') {
      eventDetail.event = eventDetail['1'];
    }
    var detail = eventDetail;
    if (!detail.event || typeof detail.event !== 'string') {
      return null;
    }
    var normalizedEventName = this.normalizeEventName(detail.event);
    detail.event = normalizedEventName;
    return detail;
  };
  _proto11.filterDataLayerEvent = function filterDataLayerEvent(eventDetail) {
    var supportedEvent = this.filterSupportedEvent(eventDetail.event);
    if (!supportedEvent) {
      return null;
    }
    return {
      event: supportedEvent
    };
  };
  _proto11.enrichEvent = function enrichEvent(webPixel, eventName, eventTimestamp) {
    var utms = {};
    this.nemuUtms.forEach(function (value, key) {
      if (['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_adsetName', 'utm_campaignName', 'utm_adName', 'utm_campaignId', 'utm_adsetId', 'utm_adId'].includes(key)) {
        utms[key] = value;
      }
    });
    var sessionId = webPixel.session.sessionId;
    var referrer = document.referrer;
    var hostname = window.location.hostname;
    var path = window.location.pathname;
    var userAgent = navigator.userAgent;
    return {
      nmubp: webPixel.id,
      eventId: this.generateId(),
      trackingId: this.trackingId,
      event: eventName,
      eventTimestamp: eventTimestamp,
      sessionId: sessionId,
      payload: {
        utms: utms,
        referrer: referrer,
        hostname: hostname,
        path: path,
        userAgent: userAgent,
        deviceType: this.getDeviceType()
      }
    };
  };
  _proto11.handleDataLayerEvent = function handleDataLayerEvent(webPixel, event) {
    var eventTimestamp = this.getUnixTimestamp();
    var normalizedDataLayerEvent = this.normalizeDataLayerEventName(event.detail);
    if (!normalizedDataLayerEvent) {
      return;
    }
    var filteredDataLayerEvent = this.filterDataLayerEvent(normalizedDataLayerEvent);
    if (!filteredDataLayerEvent) {
      return;
    }
    var enrichedEvent = this.enrichEvent(webPixel, filteredDataLayerEvent.event, eventTimestamp);
    this.sendEvent(enrichedEvent);
  };
  _proto11.setupDataLayerEventListener = function setupDataLayerEventListener(webPixel) {
    var _this11 = this;
    window.addEventListener('nemuDataLayerPush', function (event) {
      _this11.handleDataLayerEvent(webPixel, event);
    });
  };
  _proto11.processExistingDataLayerEvents = function processExistingDataLayerEvents() {
    if (!window.dataLayer || !Array.isArray(window.dataLayer)) {
      return;
    }
    window.dataLayer.forEach(function (event) {
      if (event && typeof event === 'object') {
        var customEvent = new CustomEvent('nemuDataLayerPush', {
          detail: _extends({}, event)
        });
        window.dispatchEvent(customEvent);
      }
    });
  };
  _proto11.setupDataLayerInterceptor = function setupDataLayerInterceptor() {
    window.dataLayer = window.dataLayer || [];
    this.processExistingDataLayerEvents();
    var originalPush = window.dataLayer.push;
    window.dataLayer.push = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      args.forEach(function (event) {
        if (event && typeof event === 'object') {
          var customEvent = new CustomEvent('nemuDataLayerPush', {
            detail: _extends({}, event)
          });
          window.dispatchEvent(customEvent);
        }
      });
      return originalPush.apply(window.dataLayer, args);
    };
  };
  _proto11.setupPageLeaveListener = function setupPageLeaveListener() {
    var _this12 = this;
    var handlePageLeave = function handlePageLeave() {
      _this12.flushQueue();
    };
    window.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'hidden') {
        handlePageLeave();
      }
    });
  };
  _proto11.setupHistoryChangeListener = function setupHistoryChangeListener(webPixel) {
    var _this13 = this;
    var routeChangeDetector = new RouteChangeDetector(function () {
      _this13.sendPageViewEvent(webPixel);
    });
    routeChangeDetector.setupListeners();
  };
  _proto11.initialize = function initialize() {
    if (this.botValidator.isBlockedUA(navigator.userAgent)) {
      console.log('[NEMU WEB PIXEL] Bot detected, skipping initialization');
      return null;
    }
    var _this$getOrCreateWebP = this.getOrCreateWebPixel(),
      webPixel = _this$getOrCreateWebP.webPixel,
      isNewSession = _this$getOrCreateWebP.isNewSession;
    if (isNewSession) {
      this.sendSessionStartEvent(webPixel);
    }
    this.sendPageViewEvent(webPixel);
    this.setupDataLayerEventListener(webPixel);
    this.setupDataLayerInterceptor();
    this.setupPageLeaveListener();
    this.setupHistoryChangeListener(webPixel);
    window.dataLayer.push({
      event: 'nmu.wp',
      'nmu.start': new Date().getTime()
    });
    return webPixel;
  };
  return WebPixelManager;
}(BaseService);
var Tracking = /*#__PURE__*/function () {
  function Tracking() {
    /* javascript-obfuscator:disable */
    this.id = 'DaRzMFcN1r';
    /* javascript-obfuscator:disable */
    this.src = 'https://trackings.nemu.com.br';
    /* javascript-obfuscator:disable */
    this.type = 'tracking';
    /* javascript-obfuscator:disable */
    this.redirect_url = '';
    /* javascript-obfuscator:disable */
    this.full_url = '';
    /* javascript-obfuscator:disable */
    this.platform = 'shopify_ga4';
    /* javascript-obfuscator:disable */
    this.platforms = '[{"id":1,"name":"facebook","createdAt":"2024-08-13T14:35:00.000Z","updatedAt":"2024-08-13T14:35:00.000Z"},{"id":2,"name":"google","createdAt":"2024-08-13T14:35:00.000Z","updatedAt":"2024-08-13T14:35:00.000Z"},{"id":3,"name":"instagram","createdAt":"2024-08-13T14:35:00.000Z","updatedAt":"2024-08-13T14:35:00.000Z"},{"id":4,"name":"pvclub","createdAt":"2025-08-28T18:13:32.000Z","updatedAt":"2025-08-28T18:13:32.000Z"}]';
    /* javascript-obfuscator:disable */
    this.url_update_enabled = 'true';
    /* javascript-obfuscator:disable */
    this.blockExternalScripts = 'true';
    this.nemuUtms = void 0;
  }
  var _proto12 = Tracking.prototype;
  _proto12.onLoad = /*#__PURE__*/function () {
    var _onLoad = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee57() {
      var _this14 = this;
      var storage, facebookPixelManager, scanner, platformsFilter, clientService, _document9, _URL2, _sessionCreated$lastH, _baseURL, sessionService, _sessionHistoryService, parser, productData, clientSessionId, clientHash, clientId, session, producer, initWebPixel, getLastSessionHistory, createTrackingSessionHistory, hasUTMs, isReferrerFromInternalSource, isPageReloaded, shouldLoadLastSession, hasLoaded, hasCreated, sessionCreated, queryParams, _error$response, _t10;
      return _regenerator().w(function (_context58) {
        while (1) switch (_context58.n) {
          case 0:
            if (this.blockExternalScripts === 'true') {
              removeInitialTrackingCookiesAndStorage();
            }
            storage = new Storage();
            facebookPixelManager = new FacebookPixelManager(storage);
            facebookPixelManager.initialize();
            console.log(this.full_url !== '' ? this.full_url : window.location.search, 'search', window.location.search);
            scanner = new UtmScanner({
              full_url: this.full_url !== '' ? this.full_url : window.location.search
            });
            platformsFilter = new PlatformFilter({
              platforms: JSON.parse(this.platforms)
            });
            clientService = new ClientService();
            _context58.p = 1;
            Logger.info(JSON.stringify({
              referrer: UtmScanner.extractOrigin((_document9 = document) == null ? void 0 : _document9.referrer),
              search: JSON.stringify(window.location.search, null, 2),
              url: JSON.stringify(window.location, null, 2)
            }));
            _baseURL = (_URL2 = new URL(this.src)) == null ? void 0 : _URL2.origin;
            if (_baseURL) {
              _context58.n = 2;
              break;
            }
            Logger.error('script element with src attribute not found.');
            return _context58.a(2);
          case 2:
            sessionService = new SessionService({
              baseURL: _baseURL
            });
            _sessionHistoryService = new SessionHistoryService({
              baseURL: _baseURL
            });
            parser = new UtmParser({
              scanner: scanner,
              platformsFilter: platformsFilter,
              sessionHistoryService: _sessionHistoryService,
              storage: storage
            });
            productData = {};
            clientSessionId = storage.getCookieByName("_nmu." + this.id);
            _context58.n = 3;
            return clientService.getClientHash();
          case 3:
            clientHash = _context58.v;
            _context58.n = 4;
            return clientService.getClientId();
          case 4:
            clientId = _context58.v;
            if (!(!!clientHash || !!clientSessionId)) {
              _context58.n = 6;
              break;
            }
            _context58.n = 5;
            return sessionService.getBy({
              trackingId: this.id,
              clientHash: clientHash,
              clientSessionId: clientSessionId
            });
          case 5:
            session = _context58.v;
          case 6:
            producer = new UtmProducer({
              sessionHistoryService: _sessionHistoryService,
              redirect_url: this.redirect_url !== '' ? this.redirect_url : null
            });
            initWebPixel = function initWebPixel() {
              var botValidator = new BotValidator();
              var webPixelManager = new WebPixelManager(storage, botValidator, _this14.id, _baseURL, _this14.nemuUtms);
              webPixelManager.initialize();
            };
            getLastSessionHistory = /*#__PURE__*/function () {
              var _ref48 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee55() {
                var lastHistory, queryParams;
                return _regenerator().w(function (_context56) {
                  while (1) switch (_context56.n) {
                    case 0:
                      _context56.n = 1;
                      return _sessionHistoryService.getLastBySessionId(_this14.id, session.id);
                    case 1:
                      lastHistory = _context56.v;
                      if (lastHistory) {
                        _context56.n = 2;
                        break;
                      }
                      storage.removeCookie("_nmu." + _this14.id);
                      return _context56.a(2, false);
                    case 2:
                      _context56.n = 3;
                      return parser.parseUTMsToQueryParams({
                        tracking: lastHistory == null ? void 0 : lastHistory.tracking,
                        utms: removeEmptyObjectProperties(lastHistory)
                      });
                    case 3:
                      queryParams = _context56.v;
                      _this14.nemuUtms = queryParams;
                      producer.execute({
                        tracking: lastHistory == null ? void 0 : lastHistory.tracking,
                        queryParams: queryParams,
                        baseURL: _baseURL,
                        trackingSessionId: session.id,
                        trackingType: _this14.type,
                        trackingSessionHistoryId: lastHistory.id,
                        url_update_enabled: _this14.url_update_enabled === 'true'
                      });
                      initWebPixel();
                      return _context56.a(2, true);
                  }
                }, _callee55);
              }));
              return function getLastSessionHistory() {
                return _ref48.apply(this, arguments);
              };
            }();
            createTrackingSessionHistory = /*#__PURE__*/function () {
              var _ref49 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee56() {
                var _history$lastHistory;
                var history, queryParams;
                return _regenerator().w(function (_context57) {
                  while (1) switch (_context57.n) {
                    case 0:
                      Object.assign(productData, _extends({
                        utm_term: "nemu_" + session.id
                      }, removeEmptyObjectProperties(scanner.extractUTMsFromQueryParams(_this14.platform, _this14.id))));
                      _context57.n = 1;
                      return _sessionHistoryService.add({
                        trackingId: _this14.id,
                        sessionId: session.id,
                        clientId: clientId,
                        clientHash: clientHash,
                        productData: removeEmptyObjectProperties(_extends({}, productData, {
                          utm_source: parser.parseUTMSrc({
                            utm_source: productData == null ? void 0 : productData.utm_source
                          })
                        })),
                        referrer: UtmScanner.extractOrigin(document.referrer),
                        facebookParams: scanner.getFacebookParams(storage),
                        platform: _this14.platform
                      });
                    case 1:
                      history = _context57.v;
                      if (history) {
                        _context57.n = 2;
                        break;
                      }
                      return _context57.a(2, false);
                    case 2:
                      _context57.n = 3;
                      return parser.parseUTMsToQueryParams({
                        tracking: history == null ? void 0 : history.tracking,
                        utms: removeEmptyObjectProperties(history)
                      });
                    case 3:
                      queryParams = _context57.v;
                      _this14.nemuUtms = queryParams;
                      producer.execute({
                        tracking: history == null ? void 0 : history.tracking,
                        queryParams: queryParams,
                        trackingType: _this14.type,
                        baseURL: _baseURL,
                        trackingSessionId: session.id,
                        trackingSessionHistoryId: history == null || (_history$lastHistory = history.lastHistory) == null ? void 0 : _history$lastHistory.id,
                        url_update_enabled: _this14.url_update_enabled === 'true'
                      });
                      initWebPixel();
                      return _context57.a(2, true);
                  }
                }, _callee56);
              }));
              return function createTrackingSessionHistory() {
                return _ref49.apply(this, arguments);
              };
            }();
            if (!session) {
              _context58.n = 10;
              break;
            }
            console.log('scanner', !scanner.containsUTMsInQueryParams(this.id));
            hasUTMs = scanner.containsUTMsInQueryParams(this.id);
            isReferrerFromInternalSource = scanner.isReferrerFromInternalSource();
            isPageReloaded = scanner.isPageReloaded();
            shouldLoadLastSession = !hasUTMs && (isReferrerFromInternalSource || isPageReloaded);
            if (!shouldLoadLastSession) {
              _context58.n = 8;
              break;
            }
            _context58.n = 7;
            return getLastSessionHistory();
          case 7:
            hasLoaded = _context58.v;
            if (!hasLoaded) {
              _context58.n = 8;
              break;
            }
            return _context58.a(2);
          case 8:
            _context58.n = 9;
            return createTrackingSessionHistory();
          case 9:
            hasCreated = _context58.v;
            if (!hasCreated) {
              _context58.n = 10;
              break;
            }
            return _context58.a(2);
          case 10:
            if (scanner.containsUTMsInQueryParams(this.id)) {
              Object.assign(productData, _extends({}, removeEmptyObjectProperties(scanner.extractUTMsFromQueryParams(this.platform, this.id))));
            }
            _context58.n = 11;
            return sessionService.add({
              trackingId: this.id,
              clientHash: clientHash,
              productData: _extends({}, productData, {
                utm_source: parser.parseUTMSrc({
                  utm_source: productData == null ? void 0 : productData.utm_source
                })
              }),
              facebookParams: scanner.getFacebookParams(storage),
              referrer: UtmScanner.extractOrigin(document.referrer),
              clientId: clientId
            });
          case 11:
            sessionCreated = _context58.v;
            if (sessionCreated) {
              storage.setCookie("_nmu." + this.id, sessionCreated.id);
            }
            _context58.n = 12;
            return parser.parseUTMsToQueryParams({
              tracking: sessionCreated == null ? void 0 : sessionCreated.tracking,
              utms: removeEmptyObjectProperties(sessionCreated == null ? void 0 : sessionCreated.lastHistory)
            });
          case 12:
            queryParams = _context58.v;
            this.nemuUtms = queryParams;
            console.log(queryParams.toString());
            producer.execute({
              tracking: sessionCreated == null ? void 0 : sessionCreated.tracking,
              queryParams: queryParams,
              trackingType: this.type,
              baseURL: _baseURL,
              trackingSessionId: sessionCreated.id,
              trackingSessionHistoryId: sessionCreated == null || (_sessionCreated$lastH = sessionCreated.lastHistory) == null ? void 0 : _sessionCreated$lastH.id,
              url_update_enabled: this.url_update_enabled === 'true'
            });
            initWebPixel();
            _context58.n = 14;
            break;
          case 13:
            _context58.p = 13;
            _t10 = _context58.v;
            if (this.id) {
              storage.removeCookie("_nmu." + this.id);
            }
            Logger.error("" + ((_t10 == null || (_error$response = _t10.response) == null || (_error$response = _error$response.data) == null ? void 0 : _error$response.message) || _t10));
          case 14:
            return _context58.a(2);
        }
      }, _callee57, this, [[1, 13]]);
    }));
    function onLoad() {
      return _onLoad.apply(this, arguments);
    }
    return onLoad;
  }();
  return Tracking;
}();
var trackingNemu = new Tracking();
trackingNemu.onLoad();