! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function (e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 3)
}([function (t, e, n) {
    "use strict";
    (function (e) {
        function n(t) {
            var e, n, i, o, s, a, c = Object.create(null);
            if (this[u] = c, t)
                if ("string" == typeof t)
                    for ("?" === t.charAt(0) && (t = t.slice(1)), s = 0, a = (o = t.split("&")).length; s < a; s++) - 1 < (e = (i = o[s]).indexOf("=")) ? l(c, h(i.slice(0, e)), h(i.slice(e + 1))) : i.length && l(c, h(i), "");
                else if (r(t))
                    for (s = 0, a = t.length; s < a; s++) l(c, (i = t[s])[0], i[1]);
                else
                    for (n in t) l(c, n, t[n])
        }
        var r = Array.isArray,
            i = n.prototype,
            o = /[!'\(\)~]|%20|%00/g,
            s = /\+/g,
            a = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            },
            c = function (t) {
                return a[t]
            },
            u = "__URLSearchParams__:" + Math.random();

        function l(t, e, n) {
            e in t ? t[e].push("" + n) : t[e] = r(n) ? n : ["" + n]
        }

        function h(t) {
            return decodeURIComponent(t.replace(s, " "))
        }

        function f(t) {
            return encodeURIComponent(t).replace(o, c)
        }
        i.append = function (t, e) {
            l(this[u], t, e)
        }, i.delete = function (t) {
            delete this[u][t]
        }, i.get = function (t) {
            var e = this[u];
            return t in e ? e[t][0] : null
        }, i.getAll = function (t) {
            var e = this[u];
            return t in e ? e[t].slice(0) : []
        }, i.has = function (t) {
            return t in this[u]
        }, i.set = function (t, e) {
            this[u][t] = ["" + e]
        }, i.forEach = function (t, e) {
            var n = this[u];
            Object.getOwnPropertyNames(n).forEach(function (r) {
                n[r].forEach(function (n) {
                    t.call(e, n, r, this)
                }, this)
            }, this)
        }, i.toJSON = function () {
            return {}
        }, i.toString = function () {
            var t, e, n, r, i = this[u],
                o = [];
            for (e in i)
                for (n = f(e), t = 0, r = i[e]; t < r.length; t++) o.push(n + "=" + f(r[t]));
            return o.join("&")
        },
            function (t) {
                var e = function () {
                    try {
                        return !!Symbol.iterator
                    } catch (t) {
                        return !1
                    }
                }();
                "forEach" in t || (t.forEach = function (t, e) {
                    var n = Object.create(null);
                    this.toString().replace(/=[\s\S]*?(?:&|$)/g, "=").split("=").forEach(function (r) {
                        !r.length || r in n || (n[r] = this.getAll(r)).forEach(function (n) {
                            t.call(e, n, r, this)
                        }, this)
                    }, this)
                }), "keys" in t || (t.keys = function () {
                    var t = [];
                    this.forEach(function (e, n) {
                        t.push(n)
                    });
                    var n = {
                        next: function () {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return e && (n[Symbol.iterator] = function () {
                        return n
                    }), n
                }), "values" in t || (t.values = function () {
                    var t = [];
                    this.forEach(function (e) {
                        t.push(e)
                    });
                    var n = {
                        next: function () {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return e && (n[Symbol.iterator] = function () {
                        return n
                    }), n
                }), "entries" in t || (t.entries = function () {
                    var t = [];
                    this.forEach(function (e, n) {
                        t.push([n, e])
                    });
                    var n = {
                        next: function () {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return e && (n[Symbol.iterator] = function () {
                        return n
                    }), n
                }), !e || Symbol.iterator in t || (t[Symbol.iterator] = t.entries), "sort" in t || (t.sort = function () {
                    for (var t, e, n, r = this.entries(), i = r.next(), o = i.done, s = [], a = Object.create(null); !o;) e = (n = i.value)[0], s.push(e), e in a || (a[e] = []), a[e].push(n[1]), o = (i = r.next()).done;
                    for (s.sort(), t = 0; t < s.length; t++) this.delete(s[t]);
                    for (t = 0; t < s.length; t++) e = s[t], this.append(e, a[e].shift())
                })
            }((n = t.exports = e.URLSearchParams || n).prototype)
    }).call(this, n(1))
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e) {
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
        var e = this;
        do {
            if (e.matches(t)) return e;
            e = e.parentElement || e.parentNode
        } while (null !== e && 1 === e.nodeType);
        return null
    })
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(0),
        i = n.n(r);
    const o = "URLSearchParams" in window ? window.URLSearchParams : i.a,
        s = (t, e, n) => {
            if (e.addEventListener) e.addEventListener(t, n, !1);
            else {
                if (e.attachEvent) return e.attachEvent("on" + t, n);
                e["on" + t] = n
            }
        };
    n(2);
    const a = /^(((http|https|ftp):\/\/)|\/)/;
    e.default = new class {
        constructor(t) {
            this.events = {}, this.interceptor = t, "complete" === document.readyState ? this.windowLoad() : s("load", window, this.windowLoad.bind(this))
        }
        on(t, e) {
            this.events[t] = this.events[t] || [], this.events[t].push(e)
        }
        getHtmlLinks() {
            this.links = document.getElementsByTagName("a"), this.trigger("getLinks", this.links)
        }
        trigger(t, ...e) {
            (this.events[t] || []).forEach(t => {
                t.apply(this, e)
            })
        }
        setHtmlLinks() {
            for (const t of this.links) this.updateSearchOfElement(t);
            this.trigger("setLinks", this.links)
        }
        updateSearchOfElement(t) {

            var utm_content = "utm_content";
            var paramToRemove = "";
            var paramValueToRemove = "";
            //if (t.hasAttribute("href") && t.getAttribute("href").match(a)) {
            let e = new o(t.search);
            this.params.forEach((t, n) => {
                if (n == utm_content) {
                    paramToRemove = n;
                    paramValueToRemove = this.params.getAll(n)
                }
                e.set(n, "" != e.getAll(n) ? e.getAll(n) : this.params.getAll(n))

            });
            let n = e.toString();
            n.length > 3 && (t.search = n), t.href = t.href.replace(/\?$/, "").replace(paramToRemove, "").replace(paramValueToRemove, "").replace("&=", "");
            //}
        }
        interceptAllLinks() {
            s("click", window, t => {
                const e = t.target.closest("a");
                e && this.updateSearchOfElement(e)
            })
        }
        parseURL() {
            this.params = new o(location.search)
        }
        windowLoad() {
            this.parseURL(), this.getHtmlLinks(), this.setHtmlLinks(), this.interceptor && this.interceptAllLinks()
        }
    }(!0)
}]);