/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ var $69d0b3211cd6ff55$var$extendStatics = function(d, b) {
    $69d0b3211cd6ff55$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $69d0b3211cd6ff55$var$extendStatics(d, b);
};
function $69d0b3211cd6ff55$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $69d0b3211cd6ff55$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $69d0b3211cd6ff55$export$18ce0697a983be9b = function() {
    $69d0b3211cd6ff55$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $69d0b3211cd6ff55$export$18ce0697a983be9b.apply(this, arguments);
};
function $69d0b3211cd6ff55$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $69d0b3211cd6ff55$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $69d0b3211cd6ff55$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $69d0b3211cd6ff55$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $69d0b3211cd6ff55$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $69d0b3211cd6ff55$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $69d0b3211cd6ff55$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $69d0b3211cd6ff55$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $69d0b3211cd6ff55$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $69d0b3211cd6ff55$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $69d0b3211cd6ff55$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $69d0b3211cd6ff55$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $69d0b3211cd6ff55$export$45d3717a4c69092e(o, m, p);
}
function $69d0b3211cd6ff55$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $69d0b3211cd6ff55$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $69d0b3211cd6ff55$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($69d0b3211cd6ff55$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $69d0b3211cd6ff55$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $69d0b3211cd6ff55$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $69d0b3211cd6ff55$export$10c90e4f7922046c(v) {
    return this instanceof $69d0b3211cd6ff55$export$10c90e4f7922046c ? (this.v = v, this) : new $69d0b3211cd6ff55$export$10c90e4f7922046c(v);
}
function $69d0b3211cd6ff55$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $69d0b3211cd6ff55$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $69d0b3211cd6ff55$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $69d0b3211cd6ff55$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $69d0b3211cd6ff55$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $69d0b3211cd6ff55$export$19a8beecd37a4c45 === "function" ? $69d0b3211cd6ff55$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $69d0b3211cd6ff55$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $69d0b3211cd6ff55$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function $69d0b3211cd6ff55$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) $69d0b3211cd6ff55$export$45d3717a4c69092e(result, mod, k);
    }
    $69d0b3211cd6ff55$var$__setModuleDefault(result, mod);
    return result;
}
function $69d0b3211cd6ff55$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $69d0b3211cd6ff55$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $69d0b3211cd6ff55$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $69d0b3211cd6ff55$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $69d0b3211cd6ff55$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $69d0b3211cd6ff55$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $69d0b3211cd6ff55$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $69d0b3211cd6ff55$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while(env.stack.length){
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}
var $69d0b3211cd6ff55$export$2e2bcd8739ae039 = {
    __extends: $69d0b3211cd6ff55$export$a8ba968b8961cb8a,
    __assign: $69d0b3211cd6ff55$export$18ce0697a983be9b,
    __rest: $69d0b3211cd6ff55$export$3c9a16f847548506,
    __decorate: $69d0b3211cd6ff55$export$29e00dfd3077644b,
    __param: $69d0b3211cd6ff55$export$d5ad3fd78186038f,
    __metadata: $69d0b3211cd6ff55$export$f1db080c865becb9,
    __awaiter: $69d0b3211cd6ff55$export$1050f835b63b671e,
    __generator: $69d0b3211cd6ff55$export$67ebef60e6f28a6,
    __createBinding: $69d0b3211cd6ff55$export$45d3717a4c69092e,
    __exportStar: $69d0b3211cd6ff55$export$f33643c0debef087,
    __values: $69d0b3211cd6ff55$export$19a8beecd37a4c45,
    __read: $69d0b3211cd6ff55$export$8d051b38c9118094,
    __spread: $69d0b3211cd6ff55$export$afc72e2116322959,
    __spreadArrays: $69d0b3211cd6ff55$export$6388937ca91ccae8,
    __spreadArray: $69d0b3211cd6ff55$export$1216008129fb82ed,
    __await: $69d0b3211cd6ff55$export$10c90e4f7922046c,
    __asyncGenerator: $69d0b3211cd6ff55$export$e427f37a30a4de9b,
    __asyncDelegator: $69d0b3211cd6ff55$export$bbd80228419bb833,
    __asyncValues: $69d0b3211cd6ff55$export$e3b29a3d6162315f,
    __makeTemplateObject: $69d0b3211cd6ff55$export$4fb47efe1390b86f,
    __importStar: $69d0b3211cd6ff55$export$c21735bcef00d192,
    __importDefault: $69d0b3211cd6ff55$export$da59b14a69baef04,
    __classPrivateFieldGet: $69d0b3211cd6ff55$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $69d0b3211cd6ff55$export$d40a35129aaff81f,
    __classPrivateFieldIn: $69d0b3211cd6ff55$export$81fdc39f203e4e04,
    __addDisposableResource: $69d0b3211cd6ff55$export$88ac25d8e944e405,
    __disposeResources: $69d0b3211cd6ff55$export$8f076105dc360e92
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $8b70d0323444ddea$var$t = globalThis, $8b70d0323444ddea$export$b4d10f6001c083c2 = $8b70d0323444ddea$var$t.ShadowRoot && (void 0 === $8b70d0323444ddea$var$t.ShadyCSS || $8b70d0323444ddea$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $8b70d0323444ddea$var$s = Symbol(), $8b70d0323444ddea$var$o = new WeakMap;
class $8b70d0323444ddea$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $8b70d0323444ddea$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($8b70d0323444ddea$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $8b70d0323444ddea$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $8b70d0323444ddea$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $8b70d0323444ddea$export$8d80f9cac07cdb3 = (t)=>new $8b70d0323444ddea$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $8b70d0323444ddea$var$s), $8b70d0323444ddea$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $8b70d0323444ddea$export$505d1e8739bad805(o, t, $8b70d0323444ddea$var$s);
}, $8b70d0323444ddea$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($8b70d0323444ddea$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $8b70d0323444ddea$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $8b70d0323444ddea$export$ee69dfd951e24778 = $8b70d0323444ddea$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $8b70d0323444ddea$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $b746db33a10fb587$var$i, defineProperty: $b746db33a10fb587$var$e, getOwnPropertyDescriptor: $b746db33a10fb587$var$r, getOwnPropertyNames: $b746db33a10fb587$var$h, getOwnPropertySymbols: $b746db33a10fb587$var$o, getPrototypeOf: $b746db33a10fb587$var$n } = Object, $b746db33a10fb587$var$a = globalThis, $b746db33a10fb587$var$c = $b746db33a10fb587$var$a.trustedTypes, $b746db33a10fb587$var$l = $b746db33a10fb587$var$c ? $b746db33a10fb587$var$c.emptyScript : "", $b746db33a10fb587$var$p = $b746db33a10fb587$var$a.reactiveElementPolyfillSupport, $b746db33a10fb587$var$d = (t, s)=>t, $b746db33a10fb587$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $b746db33a10fb587$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $b746db33a10fb587$export$53a6892c50694894 = (t, s)=>!$b746db33a10fb587$var$i(t, s), $b746db33a10fb587$var$y = {
    attribute: !0,
    type: String,
    converter: $b746db33a10fb587$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $b746db33a10fb587$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $b746db33a10fb587$var$a.litPropertyMetadata ??= new WeakMap;
class $b746db33a10fb587$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $b746db33a10fb587$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $b746db33a10fb587$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $b746db33a10fb587$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $b746db33a10fb587$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($b746db33a10fb587$var$d("elementProperties"))) return;
        const t = $b746db33a10fb587$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($b746db33a10fb587$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($b746db33a10fb587$var$d("properties"))) {
            const t = this.properties, s = [
                ...$b746db33a10fb587$var$h(t),
                ...$b746db33a10fb587$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $8b70d0323444ddea$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $8b70d0323444ddea$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $8b70d0323444ddea$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $b746db33a10fb587$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $b746db33a10fb587$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $b746db33a10fb587$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$b746db33a10fb587$export$c7c07a37856565d.elementStyles = [], $b746db33a10fb587$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $b746db33a10fb587$export$c7c07a37856565d[$b746db33a10fb587$var$d("elementProperties")] = new Map, $b746db33a10fb587$export$c7c07a37856565d[$b746db33a10fb587$var$d("finalized")] = new Map, $b746db33a10fb587$var$p?.({
    ReactiveElement: $b746db33a10fb587$export$c7c07a37856565d
}), ($b746db33a10fb587$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $3046cc7e4ff866d4$var$n = globalThis, $3046cc7e4ff866d4$var$c = $3046cc7e4ff866d4$var$n.trustedTypes, $3046cc7e4ff866d4$var$h = $3046cc7e4ff866d4$var$c ? $3046cc7e4ff866d4$var$c.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $3046cc7e4ff866d4$var$f = "$lit$", $3046cc7e4ff866d4$var$v = `lit$${Math.random().toFixed(9).slice(2)}$`, $3046cc7e4ff866d4$var$m = "?" + $3046cc7e4ff866d4$var$v, $3046cc7e4ff866d4$var$_ = `<${$3046cc7e4ff866d4$var$m}>`, $3046cc7e4ff866d4$var$w = document, $3046cc7e4ff866d4$var$lt = ()=>$3046cc7e4ff866d4$var$w.createComment(""), $3046cc7e4ff866d4$var$st = (t)=>null === t || "object" != typeof t && "function" != typeof t, $3046cc7e4ff866d4$var$g = Array.isArray, $3046cc7e4ff866d4$var$$ = (t)=>$3046cc7e4ff866d4$var$g(t) || "function" == typeof t?.[Symbol.iterator], $3046cc7e4ff866d4$var$x = "[ 	\n\f\r]", $3046cc7e4ff866d4$var$T = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $3046cc7e4ff866d4$var$E = /-->/g, $3046cc7e4ff866d4$var$k = />/g, $3046cc7e4ff866d4$var$O = RegExp(`>|${$3046cc7e4ff866d4$var$x}(?:([^\\s"'>=/]+)(${$3046cc7e4ff866d4$var$x}*=${$3046cc7e4ff866d4$var$x}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $3046cc7e4ff866d4$var$S = /'/g, $3046cc7e4ff866d4$var$j = /"/g, $3046cc7e4ff866d4$var$M = /^(?:script|style|textarea|title)$/i, $3046cc7e4ff866d4$var$P = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $3046cc7e4ff866d4$export$c0bb0b647f701bb5 = $3046cc7e4ff866d4$var$P(1), $3046cc7e4ff866d4$export$7ed1367e7fa1ad68 = $3046cc7e4ff866d4$var$P(2), $3046cc7e4ff866d4$export$47d5b44d225be5b4 = $3046cc7e4ff866d4$var$P(3), $3046cc7e4ff866d4$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $3046cc7e4ff866d4$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $3046cc7e4ff866d4$var$V = new WeakMap, $3046cc7e4ff866d4$var$I = $3046cc7e4ff866d4$var$w.createTreeWalker($3046cc7e4ff866d4$var$w, 129);
function $3046cc7e4ff866d4$var$N(t, i) {
    if (!$3046cc7e4ff866d4$var$g(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $3046cc7e4ff866d4$var$h ? $3046cc7e4ff866d4$var$h.createHTML(i) : i;
}
const $3046cc7e4ff866d4$var$U = (t, i)=>{
    const s = t.length - 1, e = [];
    let h, o = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", n = $3046cc7e4ff866d4$var$T;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let r, l, c = -1, a = 0;
        for(; a < s.length && (n.lastIndex = a, l = n.exec(s), null !== l);)a = n.lastIndex, n === $3046cc7e4ff866d4$var$T ? "!--" === l[1] ? n = $3046cc7e4ff866d4$var$E : void 0 !== l[1] ? n = $3046cc7e4ff866d4$var$k : void 0 !== l[2] ? ($3046cc7e4ff866d4$var$M.test(l[2]) && (h = RegExp("</" + l[2], "g")), n = $3046cc7e4ff866d4$var$O) : void 0 !== l[3] && (n = $3046cc7e4ff866d4$var$O) : n === $3046cc7e4ff866d4$var$O ? ">" === l[0] ? (n = h ?? $3046cc7e4ff866d4$var$T, c = -1) : void 0 === l[1] ? c = -2 : (c = n.lastIndex - l[2].length, r = l[1], n = void 0 === l[3] ? $3046cc7e4ff866d4$var$O : '"' === l[3] ? $3046cc7e4ff866d4$var$j : $3046cc7e4ff866d4$var$S) : n === $3046cc7e4ff866d4$var$j || n === $3046cc7e4ff866d4$var$S ? n = $3046cc7e4ff866d4$var$O : n === $3046cc7e4ff866d4$var$E || n === $3046cc7e4ff866d4$var$k ? n = $3046cc7e4ff866d4$var$T : (n = $3046cc7e4ff866d4$var$O, h = void 0);
        const u = n === $3046cc7e4ff866d4$var$O && t[i + 1].startsWith("/>") ? " " : "";
        o += n === $3046cc7e4ff866d4$var$T ? s + $3046cc7e4ff866d4$var$_ : c >= 0 ? (e.push(r), s.slice(0, c) + $3046cc7e4ff866d4$var$f + s.slice(c) + $3046cc7e4ff866d4$var$v + u) : s + $3046cc7e4ff866d4$var$v + (-2 === c ? i : u);
    }
    return [
        $3046cc7e4ff866d4$var$N(t, o + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class $3046cc7e4ff866d4$var$B {
    constructor({ strings: t, _$litType$: i }, s){
        let e;
        this.parts = [];
        let h = 0, o = 0;
        const n = t.length - 1, r = this.parts, [l, a] = $3046cc7e4ff866d4$var$U(t, i);
        if (this.el = $3046cc7e4ff866d4$var$B.createElement(l, s), $3046cc7e4ff866d4$var$I.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (e = $3046cc7e4ff866d4$var$I.nextNode()) && r.length < n;){
            if (1 === e.nodeType) {
                if (e.hasAttributes()) for (const t of e.getAttributeNames())if (t.endsWith($3046cc7e4ff866d4$var$f)) {
                    const i = a[o++], s = e.getAttribute(t).split($3046cc7e4ff866d4$var$v), n = /([.?@])?(.*)/.exec(i);
                    r.push({
                        type: 1,
                        index: h,
                        name: n[2],
                        strings: s,
                        ctor: "." === n[1] ? $3046cc7e4ff866d4$var$Y : "?" === n[1] ? $3046cc7e4ff866d4$var$Z : "@" === n[1] ? $3046cc7e4ff866d4$var$q : $3046cc7e4ff866d4$var$G
                    }), e.removeAttribute(t);
                } else t.startsWith($3046cc7e4ff866d4$var$v) && (r.push({
                    type: 6,
                    index: h
                }), e.removeAttribute(t));
                if ($3046cc7e4ff866d4$var$M.test(e.tagName)) {
                    const t = e.textContent.split($3046cc7e4ff866d4$var$v), i = t.length - 1;
                    if (i > 0) {
                        e.textContent = $3046cc7e4ff866d4$var$c ? $3046cc7e4ff866d4$var$c.emptyScript : "";
                        for(let s = 0; s < i; s++)e.append(t[s], $3046cc7e4ff866d4$var$lt()), $3046cc7e4ff866d4$var$I.nextNode(), r.push({
                            type: 2,
                            index: ++h
                        });
                        e.append(t[i], $3046cc7e4ff866d4$var$lt());
                    }
                }
            } else if (8 === e.nodeType) {
                if (e.data === $3046cc7e4ff866d4$var$m) r.push({
                    type: 2,
                    index: h
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = e.data.indexOf($3046cc7e4ff866d4$var$v, t + 1));)r.push({
                        type: 7,
                        index: h
                    }), t += $3046cc7e4ff866d4$var$v.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = $3046cc7e4ff866d4$var$w.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $3046cc7e4ff866d4$var$z(t, i, s = t, e) {
    if (i === $3046cc7e4ff866d4$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s.o?.[e] : s.l;
    const o = $3046cc7e4ff866d4$var$st(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s.o ??= [])[e] = h : s.l = h), void 0 !== h && (i = $3046cc7e4ff866d4$var$z(t, h._$AS(t, i.values), h, e)), i;
}
class $3046cc7e4ff866d4$var$F {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $3046cc7e4ff866d4$var$w).importNode(i, !0);
        $3046cc7e4ff866d4$var$I.currentNode = e;
        let h = $3046cc7e4ff866d4$var$I.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new $3046cc7e4ff866d4$var$et(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new $3046cc7e4ff866d4$var$K(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== r?.index && (h = $3046cc7e4ff866d4$var$I.nextNode(), o++);
        }
        return $3046cc7e4ff866d4$var$I.currentNode = $3046cc7e4ff866d4$var$w, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $3046cc7e4ff866d4$var$et {
    get _$AU() {
        return this._$AM?._$AU ?? this.v;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $3046cc7e4ff866d4$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this.v = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $3046cc7e4ff866d4$var$z(this, t, i), $3046cc7e4ff866d4$var$st(t) ? t === $3046cc7e4ff866d4$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $3046cc7e4ff866d4$export$45b790e32b2810ee && this._$AR(), this._$AH = $3046cc7e4ff866d4$export$45b790e32b2810ee) : t !== this._$AH && t !== $3046cc7e4ff866d4$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $3046cc7e4ff866d4$var$$(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $3046cc7e4ff866d4$export$45b790e32b2810ee && $3046cc7e4ff866d4$var$st(this._$AH) ? this._$AA.nextSibling.data = t : this.T($3046cc7e4ff866d4$var$w.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $3046cc7e4ff866d4$var$B.createElement($3046cc7e4ff866d4$var$N(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $3046cc7e4ff866d4$var$F(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $3046cc7e4ff866d4$var$V.get(t.strings);
        return void 0 === i && $3046cc7e4ff866d4$var$V.set(t.strings, i = new $3046cc7e4ff866d4$var$B(t)), i;
    }
    k(t) {
        $3046cc7e4ff866d4$var$g(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $3046cc7e4ff866d4$var$et(this.O($3046cc7e4ff866d4$var$lt()), this.O($3046cc7e4ff866d4$var$lt()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this.v = t, this._$AP?.(t));
    }
}
class $3046cc7e4ff866d4$var$G {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $3046cc7e4ff866d4$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $3046cc7e4ff866d4$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $3046cc7e4ff866d4$var$z(this, t, i, 0), o = !$3046cc7e4ff866d4$var$st(t) || t !== this._$AH && t !== $3046cc7e4ff866d4$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $3046cc7e4ff866d4$var$z(this, e[s + n], i, n), r === $3046cc7e4ff866d4$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$3046cc7e4ff866d4$var$st(r) || r !== this._$AH[n], r === $3046cc7e4ff866d4$export$45b790e32b2810ee ? t = $3046cc7e4ff866d4$export$45b790e32b2810ee : t !== $3046cc7e4ff866d4$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $3046cc7e4ff866d4$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $3046cc7e4ff866d4$var$Y extends $3046cc7e4ff866d4$var$G {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $3046cc7e4ff866d4$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $3046cc7e4ff866d4$var$Z extends $3046cc7e4ff866d4$var$G {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $3046cc7e4ff866d4$export$45b790e32b2810ee);
    }
}
class $3046cc7e4ff866d4$var$q extends $3046cc7e4ff866d4$var$G {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $3046cc7e4ff866d4$var$z(this, t, i, 0) ?? $3046cc7e4ff866d4$export$45b790e32b2810ee) === $3046cc7e4ff866d4$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $3046cc7e4ff866d4$export$45b790e32b2810ee && s !== $3046cc7e4ff866d4$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $3046cc7e4ff866d4$export$45b790e32b2810ee && (s === $3046cc7e4ff866d4$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $3046cc7e4ff866d4$var$K {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $3046cc7e4ff866d4$var$z(this, t);
    }
}
const $3046cc7e4ff866d4$export$8613d1ca9052b22e = {
    M: $3046cc7e4ff866d4$var$f,
    P: $3046cc7e4ff866d4$var$v,
    A: $3046cc7e4ff866d4$var$m,
    C: 1,
    L: $3046cc7e4ff866d4$var$U,
    R: $3046cc7e4ff866d4$var$F,
    D: $3046cc7e4ff866d4$var$$,
    V: $3046cc7e4ff866d4$var$z,
    I: $3046cc7e4ff866d4$var$et,
    H: $3046cc7e4ff866d4$var$G,
    N: $3046cc7e4ff866d4$var$Z,
    U: $3046cc7e4ff866d4$var$q,
    B: $3046cc7e4ff866d4$var$Y,
    F: $3046cc7e4ff866d4$var$K
}, $3046cc7e4ff866d4$var$Re = $3046cc7e4ff866d4$var$n.litHtmlPolyfillSupport;
$3046cc7e4ff866d4$var$Re?.($3046cc7e4ff866d4$var$B, $3046cc7e4ff866d4$var$et), ($3046cc7e4ff866d4$var$n.litHtmlVersions ??= []).push("3.2.0");
const $3046cc7e4ff866d4$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $3046cc7e4ff866d4$var$et(i.insertBefore($3046cc7e4ff866d4$var$lt(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $7e21dc7b5ad8cb11$export$3f2f9f5909897157 extends (0, $b746db33a10fb587$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this.o = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const e = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this.o = (0, $3046cc7e4ff866d4$export$b3890eb0ae9dca99)(e, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this.o?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.o?.setConnected(!1);
    }
    render() {
        return 0, $3046cc7e4ff866d4$export$9c068ae9cc5db4e8;
    }
}
$7e21dc7b5ad8cb11$export$3f2f9f5909897157._$litElement$ = !0, $7e21dc7b5ad8cb11$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $7e21dc7b5ad8cb11$export$3f2f9f5909897157
});
const $7e21dc7b5ad8cb11$var$f = globalThis.litElementPolyfillSupport;
$7e21dc7b5ad8cb11$var$f?.({
    LitElement: $7e21dc7b5ad8cb11$export$3f2f9f5909897157
});
const $7e21dc7b5ad8cb11$export$f5c524615a7708d6 = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.0");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $303864d0c51ecf22$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $b291dcacc5787077$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $63995b5a8f5ed880$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $b746db33a10fb587$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $b746db33a10fb587$export$53a6892c50694894)
}, $63995b5a8f5ed880$export$8d623b1670eb40f4 = (t = $63995b5a8f5ed880$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.P(o, void 0, t), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $63995b5a8f5ed880$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $63995b5a8f5ed880$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, r ? {
                ...t,
                wrapped: !0
            } : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $de0279ad1f91739c$export$ca000e230c0caa3e(r) {
    return (0, $63995b5a8f5ed880$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $5240cd340e293411$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7aa57e17da662763$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $0fae4d23ad433d36$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $7aa57e17da662763$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $7aa57e17da662763$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $10cacb3edc9c9319$var$e;
function $10cacb3edc9c9319$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $7aa57e17da662763$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($10cacb3edc9c9319$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $bd6d0d5fc1dc6430$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $7aa57e17da662763$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $8b25fc6846882a95$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $7aa57e17da662763$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $dd6ad9a379dc635a$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $7aa57e17da662763$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}




/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $e723a6ede290d350$export$a55877ca9db47377(n, r, t) {
    return n ? r(n) : t?.(n);
}





var $120c5a859c012378$export$2e2bcd8739ae039 = (0, $8b70d0323444ddea$export$dbf350e5966cf602)``;


const $a399cc6bbb0eb26a$var$UNKNOWN_AREA_ICON = "mdi:help-circle";
const $a399cc6bbb0eb26a$var$UNKNOWN_AREA_NAME = "Unknown";
class $a399cc6bbb0eb26a$export$179268f6da4a88b9 extends (0, $7e21dc7b5ad8cb11$export$3f2f9f5909897157) {
    #config;
    static{
        this.styles = (0, $120c5a859c012378$export$2e2bcd8739ae039);
    }
    setConfig(config) {
        if (!config.area) throw new Error("You need to define an area.");
        this.#config = config;
        this.refreshState();
    }
    refreshState() {
        if (!this.#config || !this.hass) return;
        const area = this.hass.areas[this.#config.area];
        this.icon = area?.icon || $a399cc6bbb0eb26a$var$UNKNOWN_AREA_ICON;
        this.name = area?.name || $a399cc6bbb0eb26a$var$UNKNOWN_AREA_NAME;
        this.picture = area?.picture || null;
    }
    getCardSize() {
        return 6;
    }
    getLayoutOptions() {
        return {
            grid_rows: 6,
            grid_columns: 5,
            grid_min_rows: 6,
            grid_max_rows: 6
        };
    }
    render() {
        return (0, $3046cc7e4ff866d4$export$c0bb0b647f701bb5)`
      <ha-card>
        <div class="card-content">
          <ha-icon .icon="${this.icon}"></ha-icon>
          ${this.name}

          ${(0, $e723a6ede290d350$export$a55877ca9db47377)(this.picture, ()=>(0, $3046cc7e4ff866d4$export$c0bb0b647f701bb5)`<hui-image .hass=${this.hass} .image="${this.picture}"></ha-icon>`)}
        </div>
      </ha-card>
    `;
    }
    constructor(...args){
        super(...args);
        this.icon = $a399cc6bbb0eb26a$var$UNKNOWN_AREA_ICON;
        this.name = $a399cc6bbb0eb26a$var$UNKNOWN_AREA_NAME;
        this.picture = null;
        this.#config = null;
    }
}
(0, $69d0b3211cd6ff55$export$29e00dfd3077644b)([
    (0, $63995b5a8f5ed880$export$d541bacb2bda4494)({
        attribute: false
    })
], $a399cc6bbb0eb26a$export$179268f6da4a88b9.prototype, "hass", void 0);
(0, $69d0b3211cd6ff55$export$29e00dfd3077644b)([
    (0, $de0279ad1f91739c$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$179268f6da4a88b9.prototype, "icon", void 0);
(0, $69d0b3211cd6ff55$export$29e00dfd3077644b)([
    (0, $de0279ad1f91739c$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$179268f6da4a88b9.prototype, "name", void 0);
(0, $69d0b3211cd6ff55$export$29e00dfd3077644b)([
    (0, $de0279ad1f91739c$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$179268f6da4a88b9.prototype, "picture", void 0);
$a399cc6bbb0eb26a$export$179268f6da4a88b9 = (0, $69d0b3211cd6ff55$export$29e00dfd3077644b)([
    (0, $b291dcacc5787077$export$da64fc29f17f9d0e)("area-card")
], $a399cc6bbb0eb26a$export$179268f6da4a88b9);


window.customCards = window.customCards || [];
window.customCards.push({
    type: "area-card",
    name: "Turn an entity on and off",
    description: "A pretty card with everything related to an area."
});


//# sourceMappingURL=area-card.js.map
