parcelRequire = (function (e, r, n, t) {
  function i(n, t) {
    function o(e) {
      return i(o.resolve(e))
    }
    function c(r) {
      return e[n][1][r] || r
    }
    if (!r[n]) {
      if (!e[n]) {
        var l = "function" == typeof parcelRequire && parcelRequire
        if (!t && l) return l(n, !0)
        if (u) return u(n, !0)
        if (f && "string" == typeof n) return f(n)
        var p = new Error("Cannot find module '" + n + "'")
        throw ((p.code = "MODULE_NOT_FOUND"), p)
      }
      o.resolve = c
      var a = (r[n] = new i.Module(n))
      e[n][0].call(a.exports, o, a, a.exports, this)
    }
    return r[n].exports
  }
  function o(e) {
    ;(this.id = e), (this.bundle = i), (this.exports = {})
  }
  var u = "function" == typeof parcelRequire && parcelRequire,
    f = "function" == typeof require && require
  ;(i.isParcelRequire = !0),
    (i.Module = o),
    (i.modules = e),
    (i.cache = r),
    (i.parent = u)
  for (var c = 0; c < n.length; c++) i(n[c])
  if (n.length) {
    var l = i(n[n.length - 1])
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l
        })
      : t && (this[t] = l)
  }
  return i
})(
  {
    9: [
      function (require, module, exports) {
        "use strict"
        function e(e, n) {
          for (var t = [], r = [], o = arguments.length; o-- > 2; )
            t.push(arguments[o])
          for (; t.length; ) {
            var u = t.pop()
            if (u && u.pop) for (o = u.length; o--; ) t.push(u[o])
            else null != u && !0 !== u && !1 !== u && r.push(u)
          }
          return "function" == typeof e
            ? e(n || {}, r)
            : { nodeName: e, attributes: n || {}, children: r, key: n && n.key }
        }
        function n(e, n, t, r) {
          var o,
            u = [].map,
            l = (r && r.children[0]) || null,
            i =
              l &&
              (function e(n) {
                return {
                  nodeName: n.nodeName.toLowerCase(),
                  attributes: {},
                  children: u.call(n.childNodes, function (n) {
                    return 3 === n.nodeType ? n.nodeValue : e(n)
                  }),
                }
              })(l),
            a = [],
            f = !0,
            c = p(e),
            s = (function e(n, t, r) {
              for (var o in r)
                "function" == typeof r[o]
                  ? (function (e, o) {
                      r[e] = function (e) {
                        var u = o(e)
                        return (
                          "function" == typeof u && (u = u(g(n, c), r)),
                          u &&
                            u !== (t = g(n, c)) &&
                            !u.then &&
                            h((c = m(n, p(t, u), c))),
                          u
                        )
                      }
                    })(o, r[o])
                  : e(n.concat(o), (t[o] = p(t[o])), (r[o] = p(r[o])))
              return r
            })([], c, p(n))
          return h(), s
          function v(e) {
            return "function" == typeof e ? v(e(c, s)) : null != e ? e : ""
          }
          function d() {
            o = !o
            var e = v(t)
            for (
              r &&
                !o &&
                (l = (function e(n, t, r, o, u) {
                  if (o === r);
                  else if (null == r || r.nodeName !== o.nodeName) {
                    var l = (function e(n, t) {
                      var r =
                        "string" == typeof n || "number" == typeof n
                          ? document.createTextNode(n)
                          : (t = t || "svg" === n.nodeName)
                          ? document.createElementNS(
                              "http://www.w3.org/2000/svg",
                              n.nodeName
                            )
                          : document.createElement(n.nodeName)
                      var o = n.attributes
                      if (o) {
                        o.oncreate &&
                          a.push(function () {
                            o.oncreate(r)
                          })
                        for (var u = 0; u < n.children.length; u++)
                          r.appendChild(
                            e((n.children[u] = v(n.children[u])), t)
                          )
                        for (var l in o) b(r, l, o[l], null, t)
                      }
                      return r
                    })(o, u)
                    n.insertBefore(l, t), null != r && k(n, t, r), (t = l)
                  } else if (null == r.nodeName) t.nodeValue = o
                  else {
                    !(function (e, n, t, r) {
                      for (var o in p(n, t))
                        t[o] !==
                          ("value" === o || "checked" === o ? e[o] : n[o]) &&
                          b(e, o, t[o], n[o], r)
                      var u = f ? t.oncreate : t.onupdate
                      u &&
                        a.push(function () {
                          u(e, n)
                        })
                    })(
                      t,
                      r.attributes,
                      o.attributes,
                      (u = u || "svg" === o.nodeName)
                    )
                    for (
                      var i = {},
                        c = {},
                        s = [],
                        d = r.children,
                        h = o.children,
                        m = 0;
                      m < d.length;
                      m++
                    ) {
                      s[m] = t.childNodes[m]
                      var g = y(d[m])
                      null != g && (i[g] = [s[m], d[m]])
                    }
                    for (var m = 0, N = 0; N < h.length; ) {
                      var g = y(d[m]),
                        w = y((h[N] = v(h[N])))
                      if (c[g]) m++
                      else if (null == w || w !== y(d[m + 1]))
                        if (null == w || f)
                          null == g && (e(t, s[m], d[m], h[N], u), N++), m++
                        else {
                          var x = i[w] || []
                          g === w
                            ? (e(t, x[0], x[1], h[N], u), m++)
                            : x[0]
                            ? e(t, t.insertBefore(x[0], s[m]), x[1], h[N], u)
                            : e(t, s[m], null, h[N], u),
                            (c[w] = h[N]),
                            N++
                        }
                      else null == g && k(t, s[m], d[m]), m++
                    }
                    for (; m < d.length; )
                      null == y(d[m]) && k(t, s[m], d[m]), m++
                    for (var m in i) c[m] || k(t, i[m][0], i[m][1])
                  }
                  return t
                })(r, l, i, (i = e))),
                f = !1;
              a.length;

            )
              a.pop()()
          }
          function h() {
            o || ((o = !0), setTimeout(d))
          }
          function p(e, n) {
            var t = {}
            for (var r in e) t[r] = e[r]
            for (var r in n) t[r] = n[r]
            return t
          }
          function m(e, n, t) {
            var r = {}
            return e.length
              ? ((r[e[0]] = e.length > 1 ? m(e.slice(1), n, t[e[0]]) : n),
                p(t, r))
              : n
          }
          function g(e, n) {
            for (var t = 0; t < e.length; ) n = n[e[t++]]
            return n
          }
          function y(e) {
            return e ? e.key : null
          }
          function N(e) {
            return e.currentTarget.events[e.type](e)
          }
          function b(e, n, t, r, o) {
            if ("key" === n);
            else if ("style" === n)
              for (var u in p(r, t)) {
                var l = null == t || null == t[u] ? "" : t[u]
                "-" === u[0] ? e[n].setProperty(u, l) : (e[n][u] = l)
              }
            else
              "o" === n[0] && "n" === n[1]
                ? ((n = n.slice(2)),
                  e.events ? r || (r = e.events[n]) : (e.events = {}),
                  (e.events[n] = t),
                  t
                    ? r || e.addEventListener(n, N)
                    : e.removeEventListener(n, N))
                : n in e && "list" !== n && !o
                ? (e[n] = null == t ? "" : t)
                : null != t && !1 !== t && e.setAttribute(n, t),
                (null != t && !1 !== t) || e.removeAttribute(n)
          }
          function k(e, n, t) {
            function r() {
              e.removeChild(
                (function e(n, t) {
                  var r = t.attributes
                  if (r) {
                    for (var o = 0; o < t.children.length; o++)
                      e(n.childNodes[o], t.children[o])
                    r.ondestroy && r.ondestroy(n)
                  }
                  return n
                })(n, t)
              )
            }
            var o = t.attributes && t.attributes.onremove
            o ? o(n, r) : r()
          }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.h = e),
          (exports.app = n)
      },
      {},
    ],
    10: [
      function (require, module, exports) {
        var define
        var e
        !(function (t, n) {
          "object" == typeof exports && "undefined" != typeof module
            ? n()
            : "function" == typeof e && e.amd
            ? e(n)
            : n()
        })(0, function () {
          "use strict"
          "undefined" != typeof document &&
            (function (e) {
              var t
              function n() {
                t || ((t = !0), e())
              }
              "complete" === document.readyState
                ? e()
                : ((t = !1),
                  document.addEventListener("DOMContentLoaded", n, !1),
                  window.addEventListener("load", n, !1))
            })(function () {
              var e = !0,
                t = !1,
                n = null,
                o = {
                  text: !0,
                  search: !0,
                  url: !0,
                  tel: !0,
                  email: !0,
                  password: !0,
                  number: !0,
                  date: !0,
                  month: !0,
                  week: !0,
                  time: !0,
                  datetime: !0,
                  "datetime-local": !0,
                }
              function d(e) {
                return !(
                  !e ||
                  e === document ||
                  "HTML" === e.nodeName ||
                  "BODY" === e.nodeName
                )
              }
              function i(e) {
                e.classList.contains("focus-visible") ||
                  (e.classList.add("focus-visible"),
                  e.setAttribute("data-focus-visible-added", ""))
              }
              function u(t) {
                e = !1
              }
              function s() {
                document.addEventListener("mousemove", c),
                  document.addEventListener("mousedown", c),
                  document.addEventListener("mouseup", c),
                  document.addEventListener("pointermove", c),
                  document.addEventListener("pointerdown", c),
                  document.addEventListener("pointerup", c),
                  document.addEventListener("touchmove", c),
                  document.addEventListener("touchstart", c),
                  document.addEventListener("touchend", c)
              }
              function c(t) {
                "html" !== t.target.nodeName.toLowerCase() &&
                  ((e = !1),
                  document.removeEventListener("mousemove", c),
                  document.removeEventListener("mousedown", c),
                  document.removeEventListener("mouseup", c),
                  document.removeEventListener("pointermove", c),
                  document.removeEventListener("pointerdown", c),
                  document.removeEventListener("pointerup", c),
                  document.removeEventListener("touchmove", c),
                  document.removeEventListener("touchstart", c),
                  document.removeEventListener("touchend", c))
              }
              document.addEventListener(
                "keydown",
                function (t) {
                  d(document.activeElement) && i(document.activeElement),
                    (e = !0)
                },
                !0
              ),
                document.addEventListener("mousedown", u, !0),
                document.addEventListener("pointerdown", u, !0),
                document.addEventListener("touchstart", u, !0),
                document.addEventListener(
                  "focus",
                  function (t) {
                    var n, u, s
                    d(t.target) &&
                      (e ||
                        ((n = t.target),
                        (u = n.type),
                        ("INPUT" == (s = n.tagName) && o[u] && !n.readonly) ||
                          ("TEXTAREA" == s && !n.readonly) ||
                          "true" == n.contentEditable)) &&
                      (i(t.target), (e = !1))
                  },
                  !0
                ),
                document.addEventListener(
                  "blur",
                  function (e) {
                    var o
                    d(e.target) &&
                      e.target.classList.contains("focus-visible") &&
                      ((t = !0),
                      window.clearTimeout(n),
                      (n = window.setTimeout(function () {
                        ;(t = !1), window.clearTimeout(n)
                      }, 100)),
                      (o = e.target).hasAttribute("data-focus-visible-added") &&
                        (o.classList.remove("focus-visible"),
                        o.removeAttribute("data-focus-visible-added")))
                  },
                  !0
                ),
                document.addEventListener(
                  "visibilitychange",
                  function (n) {
                    "hidden" == document.visibilityState && (t && (e = !0), s())
                  },
                  !0
                ),
                s(),
                document.body.classList.add("js-focus-visible")
            })
        })
      },
      {},
    ],
    4: [
      function (require, module, exports) {},
      {
        "./../../node_modules/modern-normalize/modern-normalize.css": [
          ["modern-normalize.1ceaea8e.css", 19],
          19,
        ],
        "./../../node_modules/prismjs/themes/prism.css": [
          ["prism.610ed272.css", 20],
          20,
        ],
        "./../img/header.svg": [["header.f710438d.svg", 18], 18],
      },
    ],
    12: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e
                },
          t = (exports.cc = function (t) {
            var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : t,
              n = Object.keys(o).reduce(function (e, t) {
                return e + (o[t] ? " " + t : "")
              }, "")
            return "object" === (void 0 === t ? "undefined" : e(t)) ? n : t + n
          }),
          o = (exports.scrollToTop = (function () {
            var e = !1,
              t = void 0
            return (
              addEventListener(
                "wheel",
                function () {
                  ;(e = !0),
                    clearTimeout(t),
                    (t = setTimeout(function () {
                      e = !1
                    }, 100))
                },
                { passive: !0 }
              ),
              function () {
                var t =
                  document.documentElement.scrollTop || document.body.scrollTop
                !e &&
                  t > 0 &&
                  (requestAnimationFrame(o), scrollTo(0, t - t / 8))
              }
            )
          })()),
          n = (exports.nextValInObj = function (e, t) {
            var o = Object.keys(e),
              n = Object.values(e).indexOf(t)
            return void 0 === (-1 !== n && o[n + 1] && e[o[n + 1]])
              ? Object.values(e)[0]
              : -1 !== n && o[n + 1] && e[o[n + 1]]
          }),
          r = (exports.EXPERTISE_STRINGS = ["easy", "intermediate", "hard"]),
          c = (exports.TAG_NAMES = {
            javascript: "JavaScript",
            html: "HTML",
            css: "CSS",
            node: "Node",
            security: "Security",
            react: "React",
            all: "all",
          }),
          u = (exports.onUserInputChange = function (e) {
            var t = "mouse",
              o = 0,
              n = function n() {
                var r = performance.now()
                r - o < 20 &&
                  (e((t = "mouse")),
                  document.removeEventListener("mousemove", n)),
                  (o = r)
              }
            document.addEventListener("touchstart", function () {
              "touch" !== t &&
                (e((t = "touch")), document.addEventListener("mousemove", n))
            })
          })
      },
      {},
    ],
    7: [
      function (require, module, exports) {
        "use strict"
        var t = require("./utils"),
          e = document.documentElement.classList
        window.chrome && e.add("browser-chrome"),
          document.addEventListener("touchstart", function t() {
            ;/iPhone|iPad|iPod/.test(navigator.platform) &&
              (document.body.style.cursor = "pointer"),
              document.removeEventListener("touchstart", t)
          }),
          (0, t.onUserInputChange)(function (t) {
            e["touch" === t ? "add" : "remove"]("browser-touch")
          })
      },
      { "./utils": 12 },
    ],
    11: [
      function (require, module, exports) {
        module.exports = [
          {
            name: "alt-attribute.md",
            question: "What is the purpose of the `alt` attribute on images?",
            answer:
              "The `alt` attribute provides alternative information for an image if a user cannot view it. The `alt` attribute should be used to describe any images except those which only serve a decorative purpose, in which case it should be left empty.",
            goodToHear: [
              "Decorative images should have an empty `alt` attribute.",
              "Web crawlers use `alt` tags to understand image content, so they are considered important for Search Engine Optimization (SEO).",
              "Put the `.` at the end of `alt` tag to improve accessibility.",
            ],
            links: [
              "[A good basis for accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)",
            ],
            tags: ["html"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "async-defer-attributes.md",
            question:
              "What are `defer` and `async` attributes on a `<script>` tag?",
            answer:
              'If neither attribute is present, the script is downloaded and executed synchronously, and will halt parsing of the document until it has finished executing (default behavior). Scripts are downloaded and executed in the order\nthey are encountered.\n\nThe `defer` attribute downloads the script while the document is still parsing but waits until the document has finished parsing before executing it, equivalent to executing inside a `DOMContentLoaded` event listener. `defer` scripts will execute in order.\n\nThe `async` attribute downloads the script during parsing the document but will pause the parser to execute the script before it has fully finished parsing. `async` scripts will not necessarily execute in order.\n\nNote: both attributes must only be used if the script has a `src` attribute (i.e. not an inline script).\n\n```html\n<script src="myscript.js"></script>\n<script src="myscript.js" defer></script>\n<script src="myscript.js" async></script>\n```',
            goodToHear: [
              "Placing a `defer` script in the `<head>` allows the browser to download the script while the page is still parsing, and is therefore a better option than placing the script before the end of the body.",
              "If the scripts rely on each other, use `defer`.",
              "If the script is independent, use `async`.",
              "Use `defer` if the DOM must be ready and the contents are not placed within a `DOMContentLoaded` listener.",
            ],
            links: [
              "[async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)",
            ],
            tags: ["html"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```html\n<script src="myscript.js"></script>\n<script src="myscript.js" defer></script>\n<script src="myscript.js" async></script>\n```',
            ],
          },
          {
            name: "batches.md",
            question:
              "Create a function `batches` that returns the maximum number of whole batches that can be cooked from a recipe.\n\n```js\n/**\nIt accepts two objects as arguments: the first object is the recipe\nfor the food, while the second object is the available ingredients.\nEach ingredient's value is a number representing how many units there are.\n\n`batches(recipe, available)`\n*/\n\n// 0 batches can be made\nbatches(\n  { milk: 100, butter: 50, flour: 5 },\n  { milk: 132, butter: 48, flour: 51 }\n)\nbatches(\n  { milk: 100, flour: 4, sugar: 10, butter: 5 },\n  { milk: 1288, flour: 9, sugar: 95 }\n)\n\n// 1 batch can be made\nbatches(\n  { milk: 100, butter: 50, cheese: 10 },\n  { milk: 198, butter: 52, cheese: 10 }\n)\n\n// 2 batches can be made\nbatches(\n  { milk: 2, sugar: 40, butter: 20 },\n  { milk: 5, sugar: 120, butter: 500 }\n)\n```",
            answer:
              "We must have all ingredients of the recipe available, and in quantities that are more than or equal to the number of units required. If just one of the ingredients is not available or lower than needed, we cannot make a single batch.\n\nUse `Object.keys()` to return the ingredients of the recipe as an array, then use `Array.prototype.map()` to map each ingredient to the ratio of available units to the amount required by the recipe. If one of the ingredients required by the recipe is not available at all, the ratio will evaluate to `NaN`, so the logical OR operator can be used to fallback to `0` in this case.\n\nUse the spread `...` operator to feed the array of all the ingredient ratios into `Math.min()` to determine the lowest ratio. Passing this entire result into `Math.floor()` rounds down to return the maximum number of whole batches.\n\n```js\nconst batches = (recipe, available) =>\n  Math.floor(\n    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))\n  )\n```",
            goodToHear: [],
            links: [],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [
              "```js\n/**\nIt accepts two objects as arguments: the first object is the recipe\nfor the food, while the second object is the available ingredients.\nEach ingredient's value is a number representing how many units there are.\n\n`batches(recipe, available)`\n*/\n\n// 0 batches can be made\nbatches(\n  { milk: 100, butter: 50, flour: 5 },\n  { milk: 132, butter: 48, flour: 51 }\n)\nbatches(\n  { milk: 100, flour: 4, sugar: 10, butter: 5 },\n  { milk: 1288, flour: 9, sugar: 95 }\n)\n\n// 1 batch can be made\nbatches(\n  { milk: 100, butter: 50, cheese: 10 },\n  { milk: 198, butter: 52, cheese: 10 }\n)\n\n// 2 batches can be made\nbatches(\n  { milk: 2, sugar: 40, butter: 20 },\n  { milk: 5, sugar: 120, butter: 500 }\n)\n```",
            ],
            answerCodeBlocks: [
              "```js\nconst batches = (recipe, available) =>\n  Math.floor(\n    Math.min(...Object.keys(recipe).map(k => available[k] / recipe[k] || 0))\n  )\n```",
            ],
          },
          {
            name: "bem.md",
            question: "What is CSS BEM?",
            answer:
              'The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.\n\n```css\n/* block component */\n.block {\n}\n\n/* element */\n.block__element {\n}\n\n/* modifier */\n.block__element--modifier {\n}\n```\n\nHere is an example with the class names on markup:\n\n```html\n<nav class="navbar">\n  <a href="/" class="navbar__link navbar__link--active"></a>\n  <a href="/" class="navbar__link"></a>\n  <a href="/" class="navbar__link"></a>\n</nav>\n```\n\nIn this case, `navbar` is the Block, `navbar__link` is an Element that makes no sense outside of the `navbar` component, and `navbar__link--active` is a Modifier that indicates a different state for the `navbar__link` Element.\n\nSince Modifiers are verbose, many opt to use `is-*` flags instead as modifiers.\n\n```html\n<a href="/" class="navbar__link is-active"></a>\n```\n\nThese must be chained to the Element and never alone however, or there will be scope issues.\n\n```css\n.navbar__link.is-active {\n}\n```',
            goodToHear: [
              "Alternative solutions to scope issues like CSS-in-JS",
            ],
            links: [
              "[Writing clean and maintainable CSS](https://hackernoon.com/writing-clean-and-maintainable-css-using-bem-methodology-1dcbf810a664)",
            ],
            tags: ["css"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```css\n/* block component */\n.block {\n}\n\n/* element */\n.block__element {\n}\n\n/* modifier */\n.block__element--modifier {\n}\n```",
              '```html\n<nav class="navbar">\n  <a href="/" class="navbar__link navbar__link--active"></a>\n  <a href="/" class="navbar__link"></a>\n  <a href="/" class="navbar__link"></a>\n</nav>\n```',
              '```html\n<a href="/" class="navbar__link is-active"></a>\n```',
              "```css\n.navbar__link.is-active {\n}\n```",
            ],
          },
          {
            name: "big-o-notation.md",
            question: "What is Big O Notation?",
            answer:
              "Big O notation is used in Computer Science to describe the time complexity of an algorithm. The best algorithms will execute the fastest and have the simplest complexity.\n\nAlgorithms don't always perform the same and may vary based on the data they are supplied. While in some cases they will execute quickly, in other cases they will execute slowly, even with the same number of elements to deal with.\n\nIn these examples, the base time is 1 element = `1ms`.\n\n##### O(1)\n\n```js\narr[arr.length - 1]\n```\n\n* 1000 elements = `1ms`\n\nConstant time complexity. No matter how many elements the array has, it will theoretically take (excluding real-world variation) the same amount of time to execute.\n\n##### O(N)\n\n```js\narr.filter(fn)\n```\n\n* 1000 elements = `1000ms`\n\nLinear time complexity. The execution time will increase linearly with the number of elements the array has. If the array has 1000 elements and the function takes 1ms to execute, 7000 elements will take 7ms to execute. This is because the function must iterate through all elements of the array before returning a result.\n\n##### O([1, N])\n\n```js\narr.some(fn)\n```\n\n* 1000 elements = `1ms <= x <= 1000ms`\n\nThe execution time varies depending on the data supplied to the function, it may return very early or very late. The best case here is O(1) and the worst case is O(N).\n\n##### O(NlogN)\n\n```js\narr.sort(fn)\n```\n\n* 1000 elements ~= `10000ms`\n\nBrowsers usually implement the quicksort algorithm for the `sort()` method and the average time complexity of quicksort is O(NlgN). This is very efficient for large collections.\n\n##### O(N^2)\n\n```js\nfor (let i = 0; i < arr.length; i++) {\n  for (let j = 0; j < arr.length; j++) {\n    // ...\n  }\n}\n```\n\n* 1000 elements = `1000000ms`\n\nThe execution time rises quadratically with the number of elements. Usually the result of nesting loops.\n\n##### O(N!)\n\n```js\nconst permutations = arr => {\n  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr\n  return arr.reduce(\n    (acc, item, i) =>\n      acc.concat(\n        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [\n          item,\n          ...val\n        ])\n      ),\n    []\n  )\n}\n```\n\n* 1000 elements = `Infinity` (practically) ms\n\nThe execution time rises extremely fast with even just 1 addition to the array.",
            goodToHear: [
              "Be wary of nesting loops as execution time increases exponentially.",
            ],
            links: [
              "[Big O Notation in JavaScript](https://medium.com/cesars-tech-insights/big-o-notation-javascript-25c79f50b19b)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\narr[arr.length - 1]\n```",
              "```js\narr.filter(fn)\n```",
              "```js\narr.some(fn)\n```",
              "```js\narr.sort(fn)\n```",
              "```js\nfor (let i = 0; i < arr.length; i++) {\n  for (let j = 0; j < arr.length; j++) {\n    // ...\n  }\n}\n```",
              "```js\nconst permutations = arr => {\n  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr\n  return arr.reduce(\n    (acc, item, i) =>\n      acc.concat(\n        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [\n          item,\n          ...val\n        ])\n      ),\n    []\n  )\n}\n```",
            ],
          },
          {
            name: "bind-function.md",
            question:
              "Create a standalone function `bind` that is functionally equivalent to the method `Function.prototype.bind`.\n\n```js\nfunction example() {\n  console.log(this)\n}\nconst boundExample = bind(example, { a: true })\nboundExample.call({ b: true }) // logs { a: true }\n```",
            answer:
              "Return a function that accepts an arbitrary number of arguments by gathering them with the rest `...` operator. From that function, return the result of calling the `fn` with `Function.prototype.apply` to apply the context and the array of arguments to the function.\n\n```js\nconst bind = (fn, context) => (...args) => fn.apply(context, args)\n```",
            goodToHear: [],
            links: [],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [
              "```js\nfunction example() {\n  console.log(this)\n}\nconst boundExample = bind(example, { a: true })\nboundExample.call({ b: true }) // logs { a: true }\n```",
            ],
            answerCodeBlocks: [
              "```js\nconst bind = (fn, context) => (...args) => fn.apply(context, args)\n```",
            ],
          },
          {
            name: "cache-busting.md",
            question:
              "What is the purpose of cache busting and how can you achieve it?",
            answer:
              'Browsers have a cache to temporarily store files on websites so they don\'t need to be re-downloaded again when switching between pages or reloading the same page. The server is set up to send headers that tell the browser to store the file for a given amount of time. This greatly increases website speed and preserves bandwidth.\n\nHowever, it can cause problems when the website has been changed by developers because the user\'s cache still references old files. This can either leave them with old functionality or break a website if the cached CSS and JavaScript files are referencing elements that no longer exist, have moved or have been renamed.\n\nCache busting is the process of forcing the browser to download the new files. This is done by naming the file something different to the old file.\n\nA common technique to force the browser to re-download the file is to append a query string to the end of the file.\n\n* `src="js/script.js"` => `src="js/script.js?v=2"`\n\nThe browser considers it a different file but prevents the need to change the file name.',
            goodToHear: [],
            links: [
              "[Strategies for cache-busting CSS](https://css-tricks.com/strategies-for-cache-busting-css/)",
            ],
            tags: ["html"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "callback-hell.md",
            question:
              "How can you avoid callback hells?\n\n```js\ngetData(function(a) {\n  getMoreData(a, function(b) {\n    getMoreData(b, function(c) {\n      getMoreData(c, function(d) {\n        getMoreData(d, function(e) {\n          // ...\n        })\n      })\n    })\n  })\n})\n```",
            answer:
              "Refactoring the functions to return promises and using `async/await` is usually the best option. Instead of supplying the functions with callbacks that cause deep nesting, they return a promise that can be `await`ed and will be resolved once the data has arrived, allowing the next line of code to be evaluated in a sync-like fashion.\n\nThe above code can be restructured like so:\n\n```js\nasync function asyncAwaitVersion() {\n  const a = await getData()\n  const b = await getMoreData(a)\n  const c = await getMoreData(b)\n  const d = await getMoreData(c)\n  const e = await getMoreData(d)\n  // ...\n}\n```\n\nThere are lots of ways to solve the issue of callback hells:\n\n* Modularization: break callbacks into independent functions\n* Use a control flow library, like async\n* Use generators with Promises\n* Use async/await (from v7 on)",
            goodToHear: [
              "As an efficient JavaScript developer, you have to avoid the constantly growing indentation level, produce clean and readable code and be able to handle complex flows.",
            ],
            links: [
              "[Avoiding Callback Hell in Node.js](http://stackabuse.com/avoiding-callback-hell-in-node-js/)",
              "[Asynchronous JavaScript: From Callback Hell to Async and Await](https://blog.hellojs.org/asynchronous-javascript-from-callback-hell-to-async-and-await-9b9ceb63c8e8)",
            ],
            tags: ["node", "javascript"],
            expertise: 2,
            questionCodeBlocks: [
              "```js\ngetData(function(a) {\n  getMoreData(a, function(b) {\n    getMoreData(b, function(c) {\n      getMoreData(c, function(d) {\n        getMoreData(d, function(e) {\n          // ...\n        })\n      })\n    })\n  })\n})\n```",
            ],
            answerCodeBlocks: [
              "```js\nasync function asyncAwaitVersion() {\n  const a = await getData()\n  const b = await getMoreData(a)\n  const c = await getMoreData(b)\n  const d = await getMoreData(c)\n  const e = await getMoreData(d)\n  // ...\n}\n```",
            ],
          },
          {
            name: "callback-in-setState.md",
            question:
              "What is the purpose of callback function as an argument of `setState`?",
            answer:
              'The callback function is invoked when `setState` has finished and the component gets rendered. Since `setState` is asynchronous, the callback function is used for any post action.\n\n```js\nsetState({ name: "sudheer" }, () => {\n  console.log("The name has updated and component re-rendered")\n})\n```',
            goodToHear: [
              "The callback function is invoked after `setState` finishes and is used for any post action.",
              "It is recommended to use lifecycle method rather this callback function.",
            ],
            links: [
              "[React docs on `setState`](https://reactjs.org/docs/react-component.html#setstate)",
            ],
            tags: ["react", "javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nsetState({ name: "sudheer" }, () => {\n  console.log("The name has updated and component re-rendered")\n})\n```',
            ],
          },
          {
            name: "callback-refs-vs-finddomnode.md",
            question:
              "Which is the preferred option between callback refs and findDOMNode()?",
            answer:
              "Callback refs are preferred over the `findDOMNode()` API, due to the fact that `findDOMNode()` prevents certain improvements in React in the future.\n\n```js\n// Legacy approach using findDOMNode()\nclass MyComponent extends Component {\n  componentDidMount() {\n    findDOMNode(this).scrollIntoView()\n  }\n\n  render() {\n    return <div />\n  }\n}\n\n// Recommended approach using callback refs\nclass MyComponent extends Component {\n  componentDidMount() {\n    this.node.scrollIntoView()\n  }\n\n  render() {\n    return <div ref={node => (this.node = node)} />\n  }\n}\n```",
            goodToHear: ["Callback refs are preferred over `findDOMNode()`."],
            links: [
              "[React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html#exposing-dom-refs-to-parent-components)",
            ],
            tags: ["react", "javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\n// Legacy approach using findDOMNode()\nclass MyComponent extends Component {\n  componentDidMount() {\n    findDOMNode(this).scrollIntoView()\n  }\n\n  render() {\n    return <div />\n  }\n}\n\n// Recommended approach using callback refs\nclass MyComponent extends Component {\n  componentDidMount() {\n    this.node.scrollIntoView()\n  }\n\n  render() {\n    return <div ref={node => (this.node = node)} />\n  }\n}\n```",
            ],
          },
          {
            name: "callbacks.md",
            question: "What is a callback? Can you show an example using one?",
            answer:
              'Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.\n\nAs an example, event listeners are asynchronous callbacks that are only executed when a specific event occurs.\n\n```js\nfunction onClick() {\n  console.log("The user clicked on the page.")\n}\ndocument.addEventListener("click", onClick)\n```\n\nHowever, callbacks can also be synchronous. The following `map` function takes a callback function that is invoked synchronously for each iteration of the loop (array element).\n\n```js\nconst map = (arr, callback) => {\n  const result = []\n  for (let i = 0; i < arr.length; i++) {\n    result.push(callback(arr[i], i))\n  }\n  return result\n}\nmap([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]\n```',
            goodToHear: [
              "Functions are first-class objects in JavaScript",
              "Callbacks vs Promises",
            ],
            links: [
              "[MDN docs for callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nfunction onClick() {\n  console.log("The user clicked on the page.")\n}\ndocument.addEventListener("click", onClick)\n```',
              "```js\nconst map = (arr, callback) => {\n  const result = []\n  for (let i = 0; i < arr.length; i++) {\n    result.push(callback(arr[i], i))\n  }\n  return result\n}\nmap([1, 2, 3, 4, 5], n => n * 2) // [2, 4, 6, 8, 10]\n```",
            ],
          },
          {
            name: "children-prop.md",
            question: "What is the `children` prop?",
            answer:
              '`children` is part of the props object passed to components that allows components to be passed as data to other components, providing the ability to compose components cleanly. There are a number of methods available in the React API to work with this prop, such as `React.Children.map`, `React.Children.forEach`, `React.Children.count`, `React.Children.only` and `React.Children.toArray`. A simple usage example of the children prop is as follows:\n\n```js\nfunction GenericBox({ children }) {\n  return <div className="container">{children}</div>\n}\n\nfunction App() {\n  return (\n    <GenericBox>\n      <span>Hello</span> <span>World</span>\n    </GenericBox>\n  )\n}\n```',
            goodToHear: [
              "Children is a prop that allows components to be passed as data to other components.",
              "The React API provides methods to work with this prop.",
            ],
            links: [
              "[React docs on Children](https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx)",
            ],
            tags: ["react", "javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nfunction GenericBox({ children }) {\n  return <div className="container">{children}</div>\n}\n\nfunction App() {\n  return (\n    <GenericBox>\n      <span>Hello</span> <span>World</span>\n    </GenericBox>\n  )\n}\n```',
            ],
          },
          {
            name: "class-name.md",
            question:
              "Why does React use `className` instead of `class` like in HTML?",
            answer:
              'React\'s philosophy in the beginning was to align with the browser DOM API rather than HTML, since that more closely represents how elements are created. Setting a `class` on an element meant using the `className` API:\n\n```js\nconst element = document.createElement("div")\nelement.className = "hello"\n```\n\nAdditionally, before ES5, reserved words could not be used in objects:\n\n```js\nconst element = {\n  attributes: {\n    class: "hello"\n  }\n}\n```\n\nIn IE8, this will throw an error.\n\nIn modern environments, destructuring will throw an error if trying to assign to a variable:\n\n```js\nconst { class } = this.props // Error\nconst { className } = this.props // All good\nconst { class: className } = this.props // All good, but cumbersome!\n```\n\nHowever, `class` _can_ be used as a prop without problems, as seen in other libraries like Preact. React currently allows you to use `class`, but will throw a warning and convert it to `className` under the hood. There is currently an open thread (as of January 2019) discussing changing `className` to `class` to reduce confusion.',
            goodToHear: [],
            links: [],
            tags: ["react"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nconst element = document.createElement("div")\nelement.className = "hello"\n```',
              '```js\nconst element = {\n  attributes: {\n    class: "hello"\n  }\n}\n```',
              "```js\nconst { class } = this.props // Error\nconst { className } = this.props // All good\nconst { class: className } = this.props // All good, but cumbersome!\n```",
            ],
          },
          {
            name: "clone-object.md",
            question: "How do you clone an object in JavaScript?",
            answer:
              "Using the object spread operator `...`, the object's own enumerable properties can be copied\ninto the new object. This creates a shallow clone of the object.\n\n```js\nconst obj = { a: 1, b: 2 }\nconst shallowClone = { ...obj }\n```\n\nWith this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.\n\nOther alternatives include:\n\n* `JSON.parse(JSON.stringify(obj))` can be used to deep-clone a simple object, but it is CPU-intensive and only accepts valid JSON (therefore it strips functions and does not allow circular references).\n* `Object.assign({}, obj)` is another alternative.\n* `Object.keys(obj).reduce((acc, key) => (acc[key] = obj[key], acc), {})` is another more verbose alternative that shows the concept in greater depth.",
            goodToHear: [
              "JavaScript passes objects by reference, meaning that nested objects get their references copied, instead of their values.",
              "The same method can be used to merge two objects.",
            ],
            links: [
              "[MDN docs for Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)",
              "[Clone an object in vanilla JS](http://voidcanvas.com/clone-an-object-in-vanilla-js-in-depth/)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst obj = { a: 1, b: 2 }\nconst shallowClone = { ...obj }\n```",
            ],
          },
          {
            name: "closures.md",
            question:
              "What is a closure? Can you give a useful example of one?",
            answer:
              "A closure is a function defined inside another function and has access to its lexical scope even when it is executing outside its lexical scope. The closure has access to variables in three scopes:\n\n* Variables declared in its own scope\n* Variables declared in the scope of the parent function\n* Variables declared in the global scope\n\nIn JavaScript, all functions are closures because they have access to the outer scope, but most functions don't utilise the usefulness of closures: the persistence of state. Closures are also sometimes called stateful functions because of this.\n\nIn addition, closures are the only way to store private data that can't be accessed from the outside in JavaScript. They are the key to the UMD (Universal Module Definition) pattern, which is frequently used in libraries that only expose a public API but keep the implementation details private, preventing name collisions with other libraries or the user's own code.",
            goodToHear: [
              "Closures are useful because they let you associate data with a function that operates on that data.",
              "A closure can substitute an object with only a single method.",
              "Closures can be used to emulate private properties and methods.",
            ],
            links: [
              "[MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
              "[What is a closure](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)",
              "[I never understood JavaScript closures](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "comparing-objects.md",
            question: "How do you compare two objects in JavaScript?",
            answer:
              'Even though two different objects can have the same properties with equal values, they are not considered equal when compared using `==` or `===`. This is because they are being compared by their reference (location in memory), unlike primitive values which are compared by value.\n\nIn order to test if two objects are equal in structure, a helper function is required. It will\niterate through the own properties of each object to test if they have the same values, including nested objects.\nOptionally, the prototypes of the objects may also be tested for equivalence by passing `true` as the 3rd argument.\n\nNote: this technique does not attempt to test equivalence of data structures other than\nplain objects, arrays, functions, dates and primitive values.\n\n```js\nfunction isDeepEqual(obj1, obj2, testPrototypes = false) {\n  if (obj1 === obj2) {\n    return true\n  }\n\n  if (typeof obj1 === "function" && typeof obj2 === "function") {\n    return obj1.toString() === obj2.toString()\n  }\n\n  if (obj1 instanceof Date && obj2 instanceof Date) {\n    return obj1.getTime() === obj2.getTime()\n  }\n\n  if (\n    Object.prototype.toString.call(obj1) !==\n      Object.prototype.toString.call(obj2) ||\n    typeof obj1 !== "object"\n  ) {\n    return false\n  }\n\n  const prototypesAreEqual = testPrototypes\n    ? isDeepEqual(\n        Object.getPrototypeOf(obj1),\n        Object.getPrototypeOf(obj2),\n        true\n      )\n    : true\n\n  const obj1Props = Object.getOwnPropertyNames(obj1)\n  const obj2Props = Object.getOwnPropertyNames(obj2)\n\n  return (\n    obj1Props.length === obj2Props.length &&\n    prototypesAreEqual &&\n    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))\n  )\n}\n```',
            goodToHear: [
              "Primitives like strings and numbers are compared by their value",
              "Objects on the other hand are compared by their reference (location in memory)",
            ],
            links: [
              "[Object Equality in JavaScript](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)",
              "[Deep comparison between two values](https://30secondsofcode.org/object#equals)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nfunction isDeepEqual(obj1, obj2, testPrototypes = false) {\n  if (obj1 === obj2) {\n    return true\n  }\n\n  if (typeof obj1 === "function" && typeof obj2 === "function") {\n    return obj1.toString() === obj2.toString()\n  }\n\n  if (obj1 instanceof Date && obj2 instanceof Date) {\n    return obj1.getTime() === obj2.getTime()\n  }\n\n  if (\n    Object.prototype.toString.call(obj1) !==\n      Object.prototype.toString.call(obj2) ||\n    typeof obj1 !== "object"\n  ) {\n    return false\n  }\n\n  const prototypesAreEqual = testPrototypes\n    ? isDeepEqual(\n        Object.getPrototypeOf(obj1),\n        Object.getPrototypeOf(obj2),\n        true\n      )\n    : true\n\n  const obj1Props = Object.getOwnPropertyNames(obj1)\n  const obj2Props = Object.getOwnPropertyNames(obj2)\n\n  return (\n    obj1Props.length === obj2Props.length &&\n    prototypesAreEqual &&\n    obj1Props.every(prop => isDeepEqual(obj1[prop], obj2[prop]))\n  )\n}\n```',
            ],
          },
          {
            name: "context.md",
            question: "What is context?",
            answer:
              "Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.\n\n```js\nconst { Provider, Consumer } = React.createContext(defaultValue)\n```",
            goodToHear: [
              "Context provides a way to pass data through a tree of React components, without having to manually pass props.",
              "Context is designed to share data that is considered _global_ for a tree of React components.",
            ],
            links: [
              "[React docs on Context](https://reactjs.org/docs/context.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst { Provider, Consumer } = React.createContext(defaultValue)\n```",
            ],
          },
          {
            name: "cors.md",
            question: "What is CORS?",
            answer:
              "Cross-Origin Resource Sharing or CORS is a mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin.\n\nAn example of a cross-origin request is a web application served from `http://mydomain.com` that uses AJAX to make a request for `http://yourdomain.com`.\n\nFor security reasons, browsers restrict cross-origin HTTP requests initiated by JavaScript. `XMLHttpRequest` and `fetch` follow the same-origin policy, meaning a web application using those APIs can only request HTTP resources from the same origin the application was accessed, unless the response from the other origin includes the correct CORS headers.",
            goodToHear: [
              "CORS behavior is not an error,  it’s a security mechanism to protect users.",
              "CORS is designed to prevent a malicious website that a user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will.",
            ],
            links: [
              "[MDN docs for CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "css-box-model.md",
            question:
              "Describe the layout of the CSS Box Model and briefly describe each component.",
            answer:
              "\x3c!-- Your answer goes here. --\x3e\n\n`Content`: The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions `content-box width` and `content-box height`.\n\n`Padding`: The transparent area surrounding the content. It has dimensions `padding-box width` and `padding-box height`.\n\n`Border`: The area surrounding the padding (if any) and content. It has dimensions `border-box width` and `border-box height`.\n\n_Margin_: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions `margin-box width` and `margin-box height`.\n\n![alt text](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)",
            goodToHear: [
              "This is a very common question asked during front-end interviews and while it may seem easy, it is critical you know it well!",
              "Shows a solid understanding of spacing and the DOM",
            ],
            links: [
              "[W3School's CSS Box Model Page](https://www.w3schools.com/Css/css_boxmodel.asp)",
              "[Mozilla's Intro to the CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)",
            ],
            tags: ["css"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "css-preprocessors.md",
            question: "What are the advantages of using CSS preprocessors?",
            answer:
              "CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don't Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (`lighten`, `darken`, `transparentize`, etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.",
            goodToHear: [
              "They allow us to write more maintainable and scalable CSS",
              "Some disadvantages of using CSS preprocessors (setup, re-compilation time can be slow etc.)",
            ],
            links: [
              "[CSS Preprocessors](https://medium.com/@garyfagan/css-preprocessors-6f226fa16f27)",
            ],
            tags: ["css"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "css-sibling-selectors.md",
            question:
              "What is the difference between '+' and '~' sibling selectors?.",
            answer:
              "The General Sibling Selector `~` selects all elements that are siblings of a specified element.\n\nThe following example selects all `<p>` elements that are siblings of `<div>` elements:\n\n```css\ndiv ~ p {\n  background-color: blue;\n}\n```\n\nThe Adjacent Sibling Selector `+` selects all elements that are the adjacent siblings of a specified element.\n\nThe following example will select all `<p>` elements that are placed immediately after `<div>` elements:\n\n```css\ndiv + p {\n  background-color: red;\n}\n```",
            goodToHear: [],
            links: [
              "[W3School's CSS Combinators Page](https://www.w3schools.com/css/css_combinators.asp)",
              "[Mozilla's Combinators and groups of selectors page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)",
            ],
            tags: ["css"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```css\ndiv ~ p {\n  background-color: blue;\n}\n```",
              "```css\ndiv + p {\n  background-color: red;\n}\n```",
            ],
          },
          {
            name: "css-specificity.md",
            question: "Can you describe how CSS specificity works?",
            answer:
              "Assuming the browser has already determined the set of rules for an element, each rule is assigned a matrix of values, which correspond to the following from highest to lowest specificity:\n\n* Inline rules (binary - 1 or 0)\n* Number of id selectors\n* Number of class, pseudo-class and attribute selectors\n* Number of tags and pseudo-element selectors\n\nWhen two selectors are compared, the comparison is made on a per-column basis (e.g. an id selector will always be higher than any amount of class selectors, as ids have higher specificity than classes). In cases of equal specificity between multiple rules, the rules that comes last in the page's style sheet is deemed more specific and therefore applied to the element.",
            goodToHear: [
              "Specificity matrix: [inline, id, class/pseudo-class/attribute, tag/pseudo-element]",
              "In cases of equal specificity, last rule is applied",
            ],
            links: [
              "[CSS Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)",
            ],
            tags: ["css"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "dom.md",
            question: "What is the DOM?",
            answer:
              "The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.",
            goodToHear: [
              "The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.",
              "The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the `<head>` with a `defer` attribute, or inside a `DOMContentLoaded` event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.",
              "`document.getElementById()` and `document.querySelector()` are common functions for selecting DOM nodes.",
              "Setting the `innerHTML` property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.",
            ],
            links: [
              "[MDN docs for DOM](https://developer.mozilla.org/en-US/docs/DOM)",
            ],
            tags: ["html", "javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "double-vs-triple-equals.md",
            question:
              "What is the difference between the equality operators `==` and `===`?",
            answer:
              "Triple equals (`===`) checks for strict equality, which means both the type and value must be the same. Double equals (`==`) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.",
            goodToHear: [
              "Whenever possible, use triple equals to test equality because loose equality `==` can have unintuitive results.",
              "Type coercion means the values are converted into the same type.",
              "Mention of falsy values and their comparison.",
            ],
            links: [
              "[MDN docs for comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)",
            ],
            tags: ["javascript"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "element-vs-component.md",
            question:
              "What is the difference between an element and a component in React?",
            answer:
              'An element is a plain JavaScript object that represents a DOM node or component. Elements are pure and never mutated, and are cheap to create.\n\nA component is a function or class. Components can have state and take props as input and return an element tree as output (although they can represent generic containers or wrappers and don\'t necessarily have to emit DOM). Components can initiate side effects in lifecycle methods (e.g. AJAX requests, DOM mutations, interfacing with 3rd party libraries) and may be expensive to create.\n\n```js\nconst Component = () => "Hello"\nconst componentElement = <Component />\nconst domNodeElement = <div />\n```',
            goodToHear: [
              "Elements are immutable, plain objects that describe the DOM nodes or components you want to render.",
              "Components can be either classes or functions, that take props as an input and return an element tree as the output.",
            ],
            links: [
              "[React docs on Rendering Elements](https://reactjs.org/docs/rendering-elements.html)",
              "[React docs on Components and Props](https://reactjs.org/docs/components-and-props.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nconst Component = () => "Hello"\nconst componentElement = <Component />\nconst domNodeElement = <div />\n```',
            ],
          },
          {
            name: "em-rem-difference.md",
            question: "What is the difference between `em` and `rem` units?",
            answer:
              "Both `em` and `rem` units are based on the `font-size` CSS property. The only difference is where they inherit their values from.\n\n* `em` units inherit their value from the `font-size` of the parent element\n* `rem` units inherit their value from the `font-size` of the root element (`html`)\n\nIn most browsers, the `font-size` of the root element is set to `16px` by default.",
            goodToHear: ["Benefits of using `em` and `rem` units"],
            links: [
              "[CSS units for font-size: px | em | rem](https://medium.com/code-better/css-units-for-font-size-px-em-rem-79f7e592bb97)",
            ],
            tags: ["css"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "error-boundaries.md",
            question: "What are error boundaries in React?",
            answer:
              "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.\n\nA class component becomes an error boundary if it defines a new lifecycle method called `componentDidCatch`.\n\n```js\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { hasError: false }\n  }\n\n  componentDidCatch(error, info) {\n    // Display fallback UI\n    this.setState({ hasError: true })\n    // You can also log the error to an error reporting service\n    logErrorToMyService(error, info)\n  }\n\n  render() {\n    if (this.state.hasError) {\n      // You can render any custom fallback UI\n      return <h1>Something went wrong.</h1>\n    }\n    return this.props.children\n  }\n}\n```",
            goodToHear: [],
            links: [],
            tags: ["react"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nclass ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = { hasError: false }\n  }\n\n  componentDidCatch(error, info) {\n    // Display fallback UI\n    this.setState({ hasError: true })\n    // You can also log the error to an error reporting service\n    logErrorToMyService(error, info)\n  }\n\n  render() {\n    if (this.state.hasError) {\n      // You can render any custom fallback UI\n      return <h1>Something went wrong.</h1>\n    }\n    return this.props.children\n  }\n}\n```",
            ],
          },
          {
            name: "event-delegation.md",
            question:
              "What is event delegation and why is it useful? Can you show an example of how to use it?",
            answer:
              'Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events "bubble" up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.\n\nDOM events provide useful information about the element that initiated the event via `Event.target`. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.\n\nThis provides two main benefits:\n\n* It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.\n* If elements are dynamically added to the parent, there is no need to register new event listeners for them.\n\nInstead of:\n\n```js\ndocument.querySelectorAll("button").forEach(button => {\n  button.addEventListener("click", handleButtonClick)\n})\n```\n\nEvent delegation involves using a condition to ensure the child target matches our desired element:\n\n```js\ndocument.addEventListener("click", e => {\n  if (e.target.closest("button")) {\n    handleButtonClick()\n  }\n})\n```',
            goodToHear: ["The difference between event bubbling and capturing"],
            links: [
              "[Event Delegation](https://davidwalsh.name/event-delegate)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\ndocument.querySelectorAll("button").forEach(button => {\n  button.addEventListener("click", handleButtonClick)\n})\n```',
              '```js\ndocument.addEventListener("click", e => {\n  if (e.target.closest("button")) {\n    handleButtonClick()\n  }\n})\n```',
            ],
          },
          {
            name: "event-driven-programming.md",
            question: "What is event-driven programming?",
            answer:
              'Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it.\n\nA common example of this is the pattern of elements listening to DOM events such as `click` and `mouseenter`, where a callback function is run when the event occurs.\n\n```js\ndocument.addEventListener("click", function(event) {\n  // This callback function is run when the user\n  // clicks on the document.\n})\n```\n\nWithout the context of the DOM, the pattern may look like this:\n\n```js\nconst hub = createEventHub()\nhub.on("message", function(data) {\n  console.log(`${data.username} said ${data.text}`)\n})\nhub.emit("message", {\n  username: "John",\n  text: "Hello?"\n})\n```\n\nWith this implementation, `on` is the way to _subscribe_ to an event, while `emit` is the way to _publish_ the event.',
            goodToHear: [
              "Follows a publish-subscribe pattern.",
              "Responds to events that occur by running any callback functions subscribed to the event.",
              "Show how to create a simple pub-sub implementation with JavaScript.",
            ],
            links: [
              "[MDN docs on Events and Handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers)",
              "[Understanding Node.js event-driven architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\ndocument.addEventListener("click", function(event) {\n  // This callback function is run when the user\n  // clicks on the document.\n})\n```',
              '```js\nconst hub = createEventHub()\nhub.on("message", function(data) {\n  console.log(`${data.username} said ${data.text}`)\n})\nhub.emit("message", {\n  username: "John",\n  text: "Hello?"\n})\n```',
            ],
          },
          {
            name: "expression-vs-statement.md",
            question:
              "What is the difference between an expression and a statement in JavaScript?",
            answer:
              'There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement. They are roughly summarized as:\n\n* **Expression**: produces a value\n* **Statement**: performs an action\n* **Expression statement**: produces a value and performs an action\n\nA general rule of thumb:\n\n> If you can print it or assign it to a variable, it’s an expression. If you can’t, it’s a statement.\n\n##### Statements\n\n```js\nlet x = 0\n\nfunction declaration() {}\n\nif (true) {\n}\n```\n\nStatements appear as instructions that do something but don\'t produce values.\n\n```js\n// Assign `x` to the absolute value of `y`.\nvar x\nif (y >= 0) {\n  x = y\n} else {\n  x = -y\n}\n```\n\nThe only expression in the above code is `y >= 0` which produces a value, either `true` or `false`. A value is not produced by other parts of the code.\n\n##### Expressions\n\nExpressions produce a value. They can be passed around to functions because the interpreter replaces them with the value they resolve to.\n\n```js\n5 + 5 // => 10\n\nlastCharacter("input") // => "t"\n\ntrue === true // => true\n```\n\n##### Expression statements\n\nThere is an equivalent version of the set of statements used before as an expression using the conditional operator:\n\n```js\n// Assign `x` as the absolute value of `y`.\nvar x = y >= 0 ? y : -y\n```\n\nThis is both an expression and a statement, because we are declaring a variable `x` (statement) as an evaluation (expression).',
            goodToHear: ["Function declarations vs function expressions"],
            links: [
              "[What is the difference between a statement and an expression?](https://stackoverflow.com/questions/12703214/javascript-difference-between-a-statement-and-an-expression)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nlet x = 0\n\nfunction declaration() {}\n\nif (true) {\n}\n```",
              "```js\n// Assign `x` to the absolute value of `y`.\nvar x\nif (y >= 0) {\n  x = y\n} else {\n  x = -y\n}\n```",
              '```js\n5 + 5 // => 10\n\nlastCharacter("input") // => "t"\n\ntrue === true // => true\n```',
              "```js\n// Assign `x` as the absolute value of `y`.\nvar x = y >= 0 ? y : -y\n```",
            ],
          },
          {
            name: "falsy-truthy.md",
            question: "What are truthy and falsy values in JavaScript?",
            answer:
              'A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to `true` or `false` when performing certain operations.\n\nThere are 6 falsy values in JavaScript. They are:\n\n* `false`\n* `undefined`\n* `null`\n* `""` (empty string)\n* `NaN`\n* `0` (both `+0` and `-0`)\n\nEvery other value is considered truthy.\n\nA value\'s truthiness can be examined by passing it into the `Boolean` function.\n\n```js\nBoolean("") // false\nBoolean([]) // true\n```\n\nThere is a shortcut for this using the logical NOT `!` operator. Using `!` once will convert a value to its inverse boolean equivalent (i.e. not false is true), and `!` once more will convert back, thus effectively converting the value to a boolean.\n\n```js\n!!"" // false\n!![] // true\n```',
            goodToHear: [],
            links: [
              "[Truthy on MDN](https://developer.mozilla.org/en/docs/Glossary/Truthy)",
              "[Falsy on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nBoolean("") // false\nBoolean([]) // true\n```',
              '```js\n!!"" // false\n!![] // true\n```',
            ],
          },
          {
            name: "fibonacci.md",
            question:
              "Generate an array, containing the Fibonacci sequence, up until the nth term.",
            answer:
              "Initialize an empty array of length `n`. Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.\n\n```js\nconst fibonacci = n =>\n  [...Array(n)].reduce(\n    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),\n    []\n  )\n```",
            goodToHear: [],
            links: [
              "[Similar problem](https://github.com/Chalarangelo/30-seconds-of-code/blob/master/snippets_archive/fibonacciUntilNum.md)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst fibonacci = n =>\n  [...Array(n)].reduce(\n    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),\n    []\n  )\n```",
            ],
          },
          {
            name: "flex-layout.md",
            question:
              'Using flexbox, create a 3-column layout where each column takes up a `col-{n} / 12` ratio of the container.\n\n```html\n<div class="row">\n  <div class="col-2"></div>\n  <div class="col-7"></div>\n  <div class="col-3"></div>\n</div>\n```',
            answer:
              "Set the `.row` parent to `display: flex;` and use the `flex` shorthand property to give the column classes a `flex-grow` value that corresponds to its ratio value.\n\n```css\n.row {\n  display: flex;\n}\n\n.col-2 {\n  flex: 2;\n}\n\n.col-7 {\n  flex: 7;\n}\n\n.col-3 {\n  flex: 3;\n}\n```",
            goodToHear: [],
            links: [
              "[MDN docs for basic concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)",
              "[A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)",
            ],
            tags: ["css"],
            expertise: 0,
            questionCodeBlocks: [
              '```html\n<div class="row">\n  <div class="col-2"></div>\n  <div class="col-7"></div>\n  <div class="col-3"></div>\n</div>\n```',
            ],
            answerCodeBlocks: [
              "```css\n.row {\n  display: flex;\n}\n\n.col-2 {\n  flex: 2;\n}\n\n.col-7 {\n  flex: 7;\n}\n\n.col-3 {\n  flex: 3;\n}\n```",
            ],
          },
          {
            name: "floating-point.md",
            question: "What does `0.1 + 0.2 === 0.3` evaluate to?",
            answer:
              "It evaluates to `false` because JavaScript uses the IEEE 754 standard for Math and it makes use of 64-bit floating numbers. This causes precision errors when doing decimal calculations, in short, due to computers working in Base 2 while decimal is Base 10.\n\n```js\n0.1 + 0.2 // 0.30000000000000004\n```\n\nA solution to this problem would be to use a function that determines if two numbers are approximately equal by defining an error margin (epsilon) value that the difference between two values should be less than.\n\n```js\nconst approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon\napproxEqual(0.1 + 0.2, 0.3) // true\n```",
            goodToHear: ["A simple solution to this problem"],
            links: [
              "[A simple helper function to check equality](https://github.com/Chalarangelo/30-seconds-of-code#approximatelyequal)",
              '[Fix "0.1 + 0.2 = 0.300000004" in JavaScript](http://blog.blakesimpson.co.uk/read/61-fix-0-1-0-2-0-300000004-in-javascript)',
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\n0.1 + 0.2 // 0.30000000000000004\n```",
              "```js\nconst approxEqual = (n1, n2, epsilon = 0.0001) => Math.abs(n1 - n2) < epsilon\napproxEqual(0.1 + 0.2, 0.3) // true\n```",
            ],
          },
          {
            name: "focus-ring.md",
            question:
              "What is a focus ring? What is the correct solution to handle them?",
            answer:
              "A focus ring is a visible outline given to focusable elements such as buttons and anchor tags. It varies depending on the vendor, but generally it appears as a blue outline around the element to indicate it is currently focused.\n\nIn the past, many people specified `outline: 0;` on the element to remove the focus ring. However, this causes accessibility issues for keyboard users because the focus state may not be clear. When not specified though, it causes an unappealing blue ring to appear around an element.\n\nIn recent times, frameworks like Bootstrap have opted to use a more appealing `box-shadow` outline to replace the default focus ring. However, this is still not ideal for mouse users.\n\nThe best solution is an upcoming pseudo-selector `:focus-visible` which can be polyfilled today with JavaScript. It will only show a focus ring if the user is using a keyboard and leave it hidden for mouse users. This keeps both aesthetics for mouse use and accessibility for keyboard use.",
            goodToHear: [],
            links: [
              "[:focus-visible](https://css-tricks.com/focus-visible-and-backwards-compatibility/)",
            ],
            tags: ["css"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "for-each-map.md",
            question:
              "What is the difference between the array methods `map()` and `forEach()`?",
            answer:
              "Both methods iterate through the elements of an array. `map()` maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, `forEach()` invokes the callback function for each element but does not return a new array. `forEach()` is generally used when causing a side effect on each iteration, whereas `map()` is a common functional programming technique.",
            goodToHear: [
              "Use `forEach()` if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.",
              "`map()` is the right choice to keep data immutable where each value of the original array is mapped to a new array.",
            ],
            links: [
              "[MDN docs for forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)",
              "[MDN docs for map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)",
              "[JavaScript — Map vs. ForEach](https://codeburst.io/javascript-map-vs-foreach-f38111822c0f)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "fragments.md",
            question: "What are fragments?",
            answer:
              "Fragments allow a React component to return multiple elements without a wrapper, by grouping the children without adding extra elements to the DOM. Fragments offer better performance, lower memory usage, a cleaner DOM and can help in dealing with certain CSS mechanisms (e.g. tables, Flexbox and Grid).\n\n```js\nrender() {\n  return (\n    <React.Fragment>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </React.Fragment>\n  );\n}\n\n// Short syntax supported by Babel 7\nrender() {\n  return (\n    <>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </>\n  );\n}\n```",
            goodToHear: [
              "Fragments group multiple elements returned from a component, without adding a DOM element around them.",
            ],
            links: [
              "[React docs on Fragments](https://reactjs.org/docs/fragments.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nrender() {\n  return (\n    <React.Fragment>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </React.Fragment>\n  );\n}\n\n// Short syntax supported by Babel 7\nrender() {\n  return (\n    <>\n      <ChildA />\n      <ChildB />\n      <ChildC />\n    </>\n  );\n}\n```",
            ],
          },
          {
            name: "functional-programming.md",
            question: "What is functional programming?",
            answer:
              "Functional programming is a paradigm in which programs are built in a declarative manner using pure functions that avoid shared state and mutable data. Functions that always return the same value for the same input and don't produce side effects are the pillar of functional programming. Many programmers consider this to be the best approach to software development as it reduces bugs and cognitive load.",
            goodToHear: [
              "Cleaner, more concise development experience",
              "Simple function composition",
              "Features of JavaScript that enable functional programming (`.map`, `.reduce` etc.)",
              "JavaScript is multi-paradigm programming language (Object-Oriented Programming and Functional Programming live in harmony)",
            ],
            links: [
              "[Javascript and Functional Programming: An Introduction](https://hackernoon.com/javascript-and-functional-programming-an-introduction-286aa625e26d)",
              "[Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "hoc-component.md",
            question: "What are higher-order components?",
            answer:
              "A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that is derived from React’s compositional nature. Higher-order components are like **pure components** because they accept any dynamically provided child component, but they won’t modify or copy any behavior from their input components.\n\n```js\nconst EnhancedComponent = higherOrderComponent(WrappedComponent)\n```",
            goodToHear: [
              "They can be used for state abstraction and manipulation, props manipulation, render high jacking, etc.",
            ],
            links: [],
            tags: ["react"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst EnhancedComponent = higherOrderComponent(WrappedComponent)\n```",
            ],
          },
          {
            name: "hoisting-example.md",
            question:
              "What will the console log in this example?\n\n```js\nvar foo = 1\nvar foobar = function() {\n  console.log(foo)\n  var foo = 2\n}\nfoobar()\n```",
            answer:
              "Due to hoisting, the local variable `foo` is declared before the `console.log` method is called. This means the local variable `foo` is passed as an argument to `console.log()` instead of the global one declared outside of the function. However, since the value is not hoisted with the variable declaration, the output will be `undefined`, not `2`.",
            goodToHear: [
              "Hoisting is JavaScript’s default behavior of moving declarations to the top",
              "Mention of `strict` mode",
            ],
            links: [
              "[MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [
              "```js\nvar foo = 1\nvar foobar = function() {\n  console.log(foo)\n  var foo = 2\n}\nfoobar()\n```",
            ],
            answerCodeBlocks: [],
          },
          {
            name: "hoisting.md",
            question: "How does hoisting work in JavaScript?",
            answer:
              'Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.\n\nHowever, the value is not hoisted with the declaration.\n\nThe following snippet:\n\n```js\nconsole.log(hoist)\nvar hoist = "value"\n```\n\nis equivalent to:\n\n```js\nvar hoist\nconsole.log(hoist)\nhoist = "value"\n```\n\nTherefore logging `hoist` outputs `undefined` to the console, not `"value"`.\n\nHoisting also allows you to invoke a function declaration before it appears to be declared in a program.\n\n```js\nmyFunction() // No error; logs "hello"\nfunction myFunction() {\n  console.log("hello")\n}\n```\n\nBut be wary of function expressions that are assigned to a variable:\n\n```js\nmyFunction() // Error: `myFunction` is not a function\nvar myFunction = function() {\n  console.log("hello")\n}\n```',
            goodToHear: [
              "Hoisting is JavaScript’s default behavior of moving declarations to the top",
              "Functions declarations are hoisted before variable declarations",
            ],
            links: [
              "[MDN docs for hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)",
              "[Understanding Hoisting in JavaScript](https://scotch.io/tutorials/understanding-hoisting-in-javascript)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nconsole.log(hoist)\nvar hoist = "value"\n```',
              '```js\nvar hoist\nconsole.log(hoist)\nhoist = "value"\n```',
              '```js\nmyFunction() // No error; logs "hello"\nfunction myFunction() {\n  console.log("hello")\n}\n```',
              '```js\nmyFunction() // Error: `myFunction` is not a function\nvar myFunction = function() {\n  console.log("hello")\n}\n```',
            ],
          },
          {
            name: "html-multiple-header-footers.md",
            question:
              "Can a web page contain multiple `<header>` elements? What about `<footer>` elements?",
            answer:
              'Yes to both. The W3 documents state that the tags represent the header(`<header>`) and footer(`<footer>`) areas of their nearest ancestor "section". So not only can the page `<body>` contain a header and a footer, but so can every `<article>` and `<section>` element.',
            goodToHear: [
              'W3 recommends having as many as you want, but only 1 of each for each "section" of your page, i.e. body, section etc.',
            ],
            links: [
              "[StackOverflow Using header or footer tag twice](https://stackoverflow.com/questions/4837269/html5-using-header-or-footer-tag-twice?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)",
            ],
            tags: ["html"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "html-specification-implementation.md",
            question:
              "Discuss the differences between an HTML specification and a browser’s implementation thereof.",
            answer:
              "HTML specifications such as `HTML5` define a set of rules that a document must adhere to in order to be “valid” according to that specification. In addition, a specification provides instructions on how a browser must interpret and render such a document.\n\nA browser is said to “support” a specification if it handles valid documents according to the rules of the specification. As of yet, no browser supports all aspects of the `HTML5` specification (although all of the major browser support most of it), and as a result, it is necessary for the developer to confirm whether the aspect they are making use of will be supported by all of the browsers on which they hope to display their content. This is why cross-browser support continues to be a headache for developers, despite the improved specificiations.",
            goodToHear: [
              "`HTML5` defines some rules to follow for an invalid `HTML5` document (i.e., one that contains syntactical errors)",
              "However, invalid documents may contain anything, so it's impossible for the specification to handle all possibilities comprehensively.",
              "Thus, many decisions about how to handle malformed documents are left up to the browser.",
            ],
            links: [
              "[HTML 5.2 WWW Specifications](https://www.w3.org/TR/html52/)",
            ],
            tags: ["html"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "html-vs-react-event-handling.md",
            question:
              "What is the difference between HTML and React event handling?",
            answer:
              'In HTML, the attribute name is in all lowercase and is given a string invoking a function defined somewhere:\n\n```html\n<button onclick="handleClick()"></button>\n```\n\nIn React, the attribute name is camelCase and are passed the function reference inside curly braces:\n\n```js\n<button onClick={handleClick} />\n```\n\nIn HTML, `false` can be returned to prevent default behavior, whereas in React `preventDefault` has to be called explicitly.\n\n```html\n<a href="#" onclick="console.log(\'The link was clicked.\'); return false" />\n```\n\n```js\nfunction handleClick(e) {\n  e.preventDefault()\n  console.log("The link was clicked.")\n}\n```',
            goodToHear: ["HTML uses lowercase, React uses camelCase."],
            links: [
              "[React docs on Handling Events](https://reactjs.org/docs/handling-events.html)",
            ],
            tags: ["react", "javascript", "html"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```html\n<button onclick="handleClick()"></button>\n```',
              "```js\n<button onClick={handleClick} />\n```",
              '```html\n<a href="#" onclick="console.log(\'The link was clicked.\'); return false" />\n```',
              '```js\nfunction handleClick(e) {\n  e.preventDefault()\n  console.log("The link was clicked.")\n}\n```',
            ],
          },
          {
            name: "html-vs-xhtml.md",
            question:
              "What are some differences that XHTML has compared to HTML?",
            answer:
              'Some of the key differences are:\n\n* An XHTML element must have an XHTML `<DOCTYPE>`\n* Attributes values must be enclosed in quotes\n* Attribute minimization is forbidden (e.g. one has to use `checked="checked"` instead of `checked`)\n* Elements must always be properly nested\n* Elements must always be closed\n* Special characters must be escaped',
            goodToHear: [
              "Any element can be self-closed",
              "Tags ands attributes are case-sensitive, usually lowercase",
            ],
            links: [
              "[W3Schools docs for HTML and XHTML](https://www.w3schools.com/html/html_xhtml.asp)",
            ],
            tags: ["html"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "html5-semantic-elements-usage.md",
            question:
              "Briefly describe the correct usage of the following HTML5 semantic elements: `<header>`, `<article>`,`<section>`, `<footer>`",
            answer:
              "* `<header>` is used to contain introductory and navigational information about a section of the page. This can include the section heading, the author’s name, time and date of publication, table of contents, or other navigational information.\n\n* `<article>` is meant to house a self-contained composition that can logically be independently recreated outside of the page without losing its meaning. Individual blog posts or news stories are good examples.\n\n* `<section>` is a flexible container for holding content that shares a common informational theme or purpose.\n\n* `<footer>` is used to hold information that should appear at the end of a section of content and contain additional information about the section. Author’s name, copyright information, and related links are typical examples of such content.",
            goodToHear: ["Other semantic elements are `<form>` and `<table>`"],
            links: [
              "[HTML 5 Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)",
            ],
            tags: ["html"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "html5-web-storage.md",
            question:
              "What is HTML5 Web Storage? Explain `localStorage` and `sessionStorage`.",
            answer:
              "With HTML5, web pages can store data locally within the user’s browser.\nThe data is stored in name/value pairs, and a web page can only access data stored by itself.\n\n**Differences between `localStorage` and `sessionStorage` regarding lifetime:**\n\n* Data stored through `localStorage` is permanent: it does not expire and remains stored on the user’s computer until a web app deletes it or the user asks the browser to delete it.\n* `sessionStorage` has the same lifetime as the top-level window or browser tab in which the data got stored. When the tab is permanently closed, any data stored through `sessionStorage` is deleted.\n\n**Differences between `localStorage` and `sessionStorage` regarding storage scope:**\nBoth forms of storage are scoped to the document origin so that documents with different origins will never share the stored objects.\n\n* `sessionStorage` is also scoped on a per-window basis. Two browser tabs with documents from the same origin have separate `sessionStorage` data.\n* Unlike in `localStorage`, the same scripts from the same origin can't access each other's `sessionStorage` when opened in different tabs.",
            goodToHear: [
              "Earlier, this was done with cookies.",
              "The storage limit is far larger (at least 5MB) than with cookies and its faster.",
              "The data is never transferred to the server and can only be used if the client specifically asks for it.",
            ],
            links: [
              "[W3Schools HTML5 Webstorage](https://www.w3schools.com/html/html5_webstorage.asp)",
            ],
            tags: ["html"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "iife.md",
            question:
              "What is the reason for wrapping the entire contents of a JavaScript source file in a function that is immediately invoked?",
            answer:
              "This technique is very common in JavaScript libraries. It creates a closure around the entire contents of the file which creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries. The function is immediately invoked so that the namespace (library name) is assigned the return value of the function.\n\n```js\nconst myLibrary = (function() {\n  var privateVariable = 2\n  return {\n    publicMethod: () => privateVariable\n  }\n})()\nprivateVariable // ReferenceError\nmyLibrary.publicMethod() // 2\n```",
            goodToHear: [
              "Used among many popular JavaScript libraries",
              "Creates a private namespace",
            ],
            links: [
              "[MDN docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst myLibrary = (function() {\n  var privateVariable = 2\n  return {\n    publicMethod: () => privateVariable\n  }\n})()\nprivateVariable // ReferenceError\nmyLibrary.publicMethod() // 2\n```",
            ],
          },
          {
            name: "imperative-vs-declarative.md",
            question:
              "Explain the differences between imperative and declarative programming.",
            answer:
              'These two types of programming can roughly be summarized as:\n\n* Imperative: **how** to achieve something\n* Declarative: **what** should be achieved\n\nA common example of declarative programming is CSS. The developer specifies CSS properties that describe what something should look like rather than how to achieve it. The "how" is abstracted away by the browser.\n\nOn the other hand, imperative programming involves the steps required to achieve something. In JavaScript, the differences can be contrasted like so:\n\n##### Imperative\n\n```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = []\nfor (let i = 0; i < numbers.length; i++) {\n  numbersDoubled[i] = numbers[i] * 2\n}\n```\n\nWe manually loop over the numbers of the array and assign the new index as the number doubled.\n\n##### Declarative\n\n```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = numbers.map(n => n * 2)\n```\n\nWe declare that the new array is mapped to a new one where each value is doubled.',
            goodToHear: [
              "Declarative programming often works with functions and expressions. Imperative programming frequently uses statements and relies on low-level features that cause mutations, while declarative programming has a strong focus on abstraction and purity.",
              "Declarative programming is more terse and easier to process at a glance.",
            ],
            links: [
              "[Declarative vs Imperative Programming](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = []\nfor (let i = 0; i < numbers.length; i++) {\n  numbersDoubled[i] = numbers[i] * 2\n}\n```",
              "```js\nconst numbers = [1, 2, 3, 4, 5]\nconst numbersDoubled = numbers.map(n => n * 2)\n```",
            ],
          },
          {
            name: "inline-conditional-expressions.md",
            question: "What are inline conditional expressions?",
            answer:
              "Since a JSX element tree is one large expression, you cannot embed statements inside. Conditional expressions act as a replacement for statements to use inside the tree.\n\nFor example, this won't work:\n\n\x3c!-- prettier-ignore --\x3e\n```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      if (messages.length > 0) {\n        <h2>You have {messages.length} unread messages.</h2>\n      } else {\n        <h2>You have no unread messages.</h2>\n      }\n      if (isVisible) {\n        <p>I am visible.</p>\n      }\n    </div>\n  )\n}\n```\n\nLogical AND `&&` and the ternary `? :` operator replace the `if`/`else` statements.\n\n```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      {messages.length > 0 ? (\n        <h2>You have {messages.length} unread messages.</h2>\n      ) : (\n        <h2>You have no unread messages.</h2>\n      )}\n      {isVisible && <p>I am visible.</p>}\n    </div>\n  )\n}\n```",
            goodToHear: [],
            links: [
              "[React docs on Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      if (messages.length > 0) {\n        <h2>You have {messages.length} unread messages.</h2>\n      } else {\n        <h2>You have no unread messages.</h2>\n      }\n      if (isVisible) {\n        <p>I am visible.</p>\n      }\n    </div>\n  )\n}\n```",
              "```js\nfunction App({ messages, isVisible }) {\n  return (\n    <div>\n      {messages.length > 0 ? (\n        <h2>You have {messages.length} unread messages.</h2>\n      ) : (\n        <h2>You have no unread messages.</h2>\n      )}\n      {isVisible && <p>I am visible.</p>}\n    </div>\n  )\n}\n```",
            ],
          },
          {
            name: "keys.md",
            question:
              "What is a key? What are the benefits of using it in lists?",
            answer:
              "Keys are a special string attribute that helps React identify which items have been changed, added or removed. They are used when rendering array elements to give them a stable identity. Each element's key must be unique (e.g. IDs from the data or indexes as a last resort).\n\n```js\nconst todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>)\n```\n\n* Using indexes as keys is not recommended if the order of items may change, as it might negatively impact performance and may cause issues with component state.\n* If you extract list items as a separate component then apply keys on the list component instead of the `<li>` tag.",
            goodToHear: [
              "Keys give elements in a collection a stable identity and help React identify changes.",
              "You should avoid using indexes as keys if the order of items may change.",
              "You should lift the key up to the component, instead of the `<li>` element, if you extract list items as components.",
            ],
            links: [
              "[React docs on Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>)\n```",
            ],
          },
          {
            name: "lexical-vs-dynamic-scoping.md",
            question:
              "What is the difference between lexical scoping and dynamic scoping?",
            answer:
              "Lexical scoping refers to when the location of a function's definition determines which variables you have access to. On the other hand, dynamic scoping uses the location of the function's invocation to determine which variables are available.",
            goodToHear: [
              "Lexical scoping is also known as static scoping.",
              "Lexical scoping in JavaScript allows for the concept of closures.",
              "Most languages use lexical scoping because it tends to promote source code that is more easily understood.",
            ],
            links: [
              "[Mozilla Docs Closures & Lexical Scoping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "lifecycle-methods.md",
            question: "What are the lifecycle methods in React?",
            answer:
              "`getDerivedStateFromProps`: Executed before rendering on the initial mount and all component updates. Used to update the state based on changes in props over time. Has rare use cases, like tracking component animations during the lifecycle. There are only few cases where this makes sense to use over other lifecycle methods. It expects to return an object that will be the the new state, or null to update nothing. This method does not have access to the component instance either.\n\n`componentDidMount`: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up eventListeners should occur.\n\n`shouldComponentUpdate`: Determines if the component will be updated or not. By default, it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return a false value. It is a great place to improve performance as it allows you to prevent a rerender if component receives new prop.\n\n`getSnapshotBeforeUpdate`: Invoked right after a component render happens because of an update, before `componentDidUpdate`. Any value returned from this method will be passed to `componentDidUpdate`.\n\n`componentDidUpdate`: Mostly it is used to update the DOM in response to prop or state changes.\n\n`componentWillUnmount`: It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component.\n\n`componentDidCatch`: Used in error boundaries, which are components that implement this method. It allows the component to catch JavaScript errors anywhere in the _child_ component tree (below this component), log errors, and display a UI with error information.",
            goodToHear: [],
            links: [],
            tags: ["react"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "lifecycle.md",
            question:
              "What are the different phases of the component lifecycle in React?",
            answer:
              'There are four different phases of component’s lifecycle:\n\n**Initialization**: In this phase, the component prepares setting up the initial state and default props.\n\n**Mounting**: The react component is ready to mount to the DOM. This phase covers the `getDerivedStateFromProps` and `componentDidMount` lifecycle methods.\n\n**Updating**: In this phase, the component gets updated in two ways, sending the new props and updating the state. This phase covers the `getDerivedStateFromProps`, `shouldComponentUpdate`, `getSnapshotBeforeUpdate` and `componentDidUpdate` lifecycle methods.\n\n**Unmounting**: In this last phase, the component is not needed and gets unmounted from the browser DOM. This phase includes the `componentWillUnmount` lifecycle method.\n\n**Error Handling**: In this phase, the component is called whenever there\'s an error during rendering, in a lifecycle method, or in the constructor for any child component. This phase includes the `componentDidCatch` lifecycle method.\n\n<img alt="lifecycle phases" src="https://pbs.twimg.com/media/DZ-97vzW4AAbcZj.jpg:large" style="width: 100%"/>',
            goodToHear: [],
            links: [],
            tags: ["react"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "lift-state.md",
            question: "What does lifting state up in React mean?",
            answer:
              "When several components need to share the same data, then it is recommended to lift the shared state up to their closest common ancestor. For example, if two child components share the same data, it is recommended to move the shared state to parent instead of maintaining the local state in both child components.",
            goodToHear: [],
            links: [],
            tags: ["react"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "mask.md",
            question:
              'Create a function that masks a string of characters with `#` except for the last four (4) characters.\n\n```js\nmask("123456789") // "#####6789"\n```',
            answer:
              '> There are many ways to solve this problem, this is just one one of them.\n\nUsing `String.prototype.slice()` we can grab the last 4 characters of the string by passing `-4` as an argument. Then, using `String.prototype.padStart()`, we can pad the string to the original length with the repeated mask character.\n\n```js\nconst mask = (str, maskChar = "#") =>\n  str.slice(-4).padStart(str.length, maskChar)\n```',
            goodToHear: [
              "Short, one-line functional solutions to problems should be preferred provided they are efficient",
            ],
            links: [],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [
              '```js\nmask("123456789") // "#####6789"\n```',
            ],
            answerCodeBlocks: [
              '```js\nconst mask = (str, maskChar = "#") =>\n  str.slice(-4).padStart(str.length, maskChar)\n```',
            ],
          },
          {
            name: "media-properties.md",
            question: "Can you name the four types of `@media` properties?",
            answer:
              "* `all`, which applies to all media type devices\n* `print`, which only applies to printers\n* `screen`, which only applies to screens (desktops, tablets, mobile etc.)\n* `speech`, which only applies to screenreaders",
            goodToHear: [],
            links: [
              "[MDN docs for `@media` rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)",
              "[MDN docs for using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)",
            ],
            tags: ["css"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "memoize.md",
            question: "What is memoization?",
            answer:
              "Memoization is the process of caching the output of function calls so that subsequent calls are faster. Calling the function again with the same input will return the cached output without needing to do the calculation again.\n\nA basic implementation in JavaScript looks like this:\n\n```js\nconst memoize = fn => {\n  const cache = new Map()\n  return value => {\n    const cachedResult = cache.get(value)\n    if (cachedResult !== undefined) return cachedResult\n    const result = fn(value)\n    cache.set(value, result)\n    return result\n  }\n}\n```",
            goodToHear: [
              "The above technique returns a unary function even if the function can take multiple arguments.",
              "The first function call will be slower than usual because of the overhead created by checking if a cached result exists and setting a result before returning the value.",
              "Memoization increases performance on subsequent function calls but still needs to do work on the first call.",
            ],
            links: [
              "[Implementing memoization in JavaScript](https://www.sitepoint.com/implementing-memoization-in-javascript/)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst memoize = fn => {\n  const cache = new Map()\n  return value => {\n    const cachedResult = cache.get(value)\n    if (cachedResult !== undefined) return cachedResult\n    const result = fn(value)\n    cache.set(value, result)\n    return result\n  }\n}\n```",
            ],
          },
          {
            name: "methods-context-react-classes.md",
            question:
              "How do you ensure methods have the correct `this` context in React component classes?",
            answer:
              "In JavaScript classes, the methods are not bound by default. This means that their `this` context can be changed (in the case of an event handler, to the element that is listening to the event) and will not refer to the component instance. To solve this, `Function.prototype.bind()` can be used to enforce the `this` context as the component instance.\n\n```js\nconstructor(props) {\n  super(props);\n  this.handleClick = this.handleClick.bind(this);\n}\n\nhandleClick() {\n  // Perform some logic\n}\n```\n\n* The `bind` approach can be verbose and requires defining a `constructor`, so the new public class fields syntax is generally preferred:\n\n```js\nhandleClick = () => {\n  console.log('this is:', this);\n}\n\nrender() {\n  return (\n    <button onClick={this.handleClick}>\n      Click me\n    </button>\n  );\n}\n```\n\n* You can also use an inline arrow function, because lexical `this` (referring to the component instance) is preserved:\n\n```js\n<button onClick={e => this.handleClick(e)}>Click me</button>\n```\n\nNote that extra re-rendering can occur using this technique because a new function reference is created on render, which gets passed down to child components and breaks `shouldComponentUpdate` / `PureComponent` shallow equality checks to prevent unnecessary re-renders. In cases where performance is important, it is preferred to go with `bind` in the constructor, or the public class fields syntax approach, because the function reference remains constant.",
            goodToHear: [
              "You can either bind methods to the component instance context in the constructor, use public class fields syntax, or use inline arrow functions.",
            ],
            links: [
              "[React docs on Handling Events](https://reactjs.org/docs/handling-events.html)",
              "[React docs on Passing Functions to Components](https://reactjs.org/docs/faq-functions.html#how-do-i-bind-a-function-to-a-component-instance)",
            ],
            tags: ["react", "javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconstructor(props) {\n  super(props);\n  this.handleClick = this.handleClick.bind(this);\n}\n\nhandleClick() {\n  // Perform some logic\n}\n```",
              "```js\nhandleClick = () => {\n  console.log('this is:', this);\n}\n\nrender() {\n  return (\n    <button onClick={this.handleClick}>\n      Click me\n    </button>\n  );\n}\n```",
              "```js\n<button onClick={e => this.handleClick(e)}>Click me</button>\n```",
            ],
          },
          {
            name: "mime.md",
            question: "What is a MIME type and what is it used for?",
            answer:
              "`MIME` is an acronym for `Multi-purpose Internet Mail Extensions`. It is used as a standard way of classifying file types over the Internet.",
            goodToHear: [
              "A `MIME type` actually has two parts: a type and a subtype that are separated by a slash (/). For example, the `MIME type` for Microsoft Word files is `application/msword` (i.e., type is application and the subtype is msword).",
            ],
            links: [
              "[MIME Type MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "mutable-vs-immutable.md",
            question:
              "Contrast mutable and immutable values, and mutating vs non-mutating methods.",
            answer:
              'The two terms can be contrasted as:\n\n* Mutable: subject to change\n* Immutable: cannot change\n\nIn JavaScript, objects are mutable while primitive values are immutable. This means operations performed on objects can change the original reference in some way, while operations performed on a primitive value cannot change the original value.\n\nAll `String.prototype` methods do not have an effect on the original string and return a new string. On the other hand, while some methods of `Array.prototype` do not mutate the original array reference and produce a fresh array, some cause mutations.\n\n```js\nconst myString = "hello!"\nmyString.replace("!", "") // returns a new string, cannot mutate the original value\n\nconst originalArray = [1, 2, 3]\noriginalArray.push(4) // mutates originalArray, now [1, 2, 3, 4]\noriginalArray.concat(4) // returns a new array, does not mutate the original\n```',
            goodToHear: ["List of mutating and non-mutating array methods"],
            links: [
              "[Mutating vs non-mutating array methods](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating/)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nconst myString = "hello!"\nmyString.replace("!", "") // returns a new string, cannot mutate the original value\n\nconst originalArray = [1, 2, 3]\noriginalArray.push(4) // mutates originalArray, now [1, 2, 3, 4]\noriginalArray.concat(4) // returns a new array, does not mutate the original\n```',
            ],
          },
          {
            name: "nan.md",
            question:
              "What is the only value not equal to itself in JavaScript?",
            answer:
              "`NaN` (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. `NaN` is often the result of meaningless math computations, so two `NaN` values make no sense to be considered equal.",
            goodToHear: [
              "The difference between `isNaN()` and `Number.isNaN()`",
              "`const isNaN = x => x !== x`",
            ],
            links: [
              "[MDN docs for `NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "node-error-first-callback.md",
            question:
              "NodeJS often uses a callback pattern where if an error is encountered during execution, this error is passed as the first argument to the callback. What are the advantages of this pattern?\n\n```js\nfs.readFile(filePath, function(err, data) {\n  if (err) {\n    // handle the error, the return is important here\n    // so execution stops here\n    return console.log(err)\n  }\n  // use the data object\n  console.log(data)\n})\n```",
            answer:
              'Advantages include:\n\n* Not needing to process data if there is no need to even reference it\n* Having a consistent API leads to more adoption\n* Ability to easily adapt a callback pattern that will lead to more maintainable code\n\nAs you can see from below example, the callback is called with null as its first argument if there is no error. However, if there is an error, you create an Error object, which then becomes the callback\'s only parameter. The callback function allows a user to easily know whether or not an error occurred.\n\nThis practice is also called the _Node.js error convention_, and this kind of callback implementations are called _error-first callbacks_.\n\n```js\nvar isTrue = function(value, callback) {\n  if (value === true) {\n    callback(null, "Value was true.")\n  } else {\n    callback(new Error("Value is not true!"))\n  }\n}\n\nvar callback = function(error, retval) {\n  if (error) {\n    console.log(error)\n    return\n  }\n  console.log(retval)\n}\n\nisTrue(false, callback)\nisTrue(true, callback)\n\n/*\n  { stack: [Getter/Setter],\n    arguments: undefined,\n    type: undefined,\n    message: \'Value is not true!\' }\n  Value was true.\n*/\n```',
            goodToHear: [
              "This is just a convention. However, you should stick to it.",
            ],
            links: [
              "[The Node.js Way Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)",
              "[What are the error conventions?](https://docs.nodejitsu.com/articles/errors/what-are-the-error-conventions)",
            ],
            tags: ["node", "javascript"],
            expertise: 1,
            questionCodeBlocks: [
              "```js\nfs.readFile(filePath, function(err, data) {\n  if (err) {\n    // handle the error, the return is important here\n    // so execution stops here\n    return console.log(err)\n  }\n  // use the data object\n  console.log(data)\n})\n```",
            ],
            answerCodeBlocks: [
              '```js\nvar isTrue = function(value, callback) {\n  if (value === true) {\n    callback(null, "Value was true.")\n  } else {\n    callback(new Error("Value is not true!"))\n  }\n}\n\nvar callback = function(error, retval) {\n  if (error) {\n    console.log(error)\n    return\n  }\n  console.log(retval)\n}\n\nisTrue(false, callback)\nisTrue(true, callback)\n\n/*\n  { stack: [Getter/Setter],\n    arguments: undefined,\n    type: undefined,\n    message: \'Value is not true!\' }\n  Value was true.\n*/\n```',
            ],
          },
          {
            name: "node-event-loop.md",
            question: "What is the event loop in Node.js?",
            answer:
              "The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.",
            goodToHear: [
              "The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded",
            ],
            links: [
              "[Node.js docs on event loop, timers and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)",
            ],
            tags: ["node", "javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "null-vs-undefined.md",
            question: "What is the difference between `null` and `undefined`?",
            answer:
              "In JavaScript, two values discretely represent nothing - `undefined` and `null`. The concrete difference between them is that `null` is explicit, while `undefined` is implicit. When a property does not exist or a variable has not been given a value, the value is `undefined`. `null` is set as the value to explicitly indicate “no value”. In essence, `undefined` is used when the nothing is not known, and `null` is used when the nothing is known.",
            goodToHear: [
              '`typeof undefined` evaluates to `"undefined"`.',
              '`typeof null` evaluates `"object"`. However, it is still a primitive value and this is considered an implementation bug in JavaScript.',
              "`undefined == null` evaluates to `true`.",
            ],
            links: [
              "[MDN docs for null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)",
              "[MDN docs for undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "object-creation.md",
            question:
              "Describe the different ways to create an object. When should certain ways be preferred over others?",
            answer:
              '##### Object literal\n\nOften used to store one occurrence of data.\n\n```js\nconst person = {\n  name: "John",\n  age: 50,\n  birthday() {\n    this.age++\n  }\n}\nperson.birthday() // person.age === 51\n```\n\n##### Constructor\n\nOften used when you need to create multiple instances of an object, each with their own data that other instances of the class cannot affect. The `new` operator must be used before invoking the constructor or the global object will be mutated.\n\n```js\nfunction Person(name, age) {\n  this.name = name\n  this.age = age\n}\nPerson.prototype.birthday = function() {\n  this.age++\n}\nconst person1 = new Person("John", 50)\nconst person2 = new Person("Sally", 20)\nperson1.birthday() // person1.age === 51\nperson2.birthday() // person2.age === 21\n```\n\n##### Factory function\n\nCreates a new object similar to a constructor, but can store private data using a closure. There is also no need to use `new` before invoking the function or the `this` keyword. Factory functions usually discard the idea of prototypes and keep all properties and methods as own properties of the object.\n\n```js\nconst createPerson = (name, age) => {\n  const birthday = () => person.age++\n  const person = { name, age, birthday }\n  return person\n}\nconst person = createPerson("John", 50)\nperson.birthday() // person.age === 51\n```\n\n##### `Object.create()`\n\nSets the prototype of the newly created object.\n\n```js\nconst personProto = {\n  birthday() {\n    this.age++\n  }\n}\nconst person = Object.create(personProto)\nperson.age = 50\nperson.birthday() // person.age === 51\n```\n\nA second argument can also be supplied to `Object.create()` which acts as a descriptor for the new properties to be defined.\n\n```js\nObject.create(personProto, {\n  age: {\n    value: 50,\n    writable: true,\n    enumerable: true\n  }\n})\n```',
            goodToHear: [
              "Prototypes are objects that other objects inherit properties and methods from.",
              "Factory functions offer private properties and methods through a closure but increase memory usage as a tradeoff, while classes do not have private properties or methods but reduce memory impact by reusing a single prototype object.",
            ],
            links: [],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nconst person = {\n  name: "John",\n  age: 50,\n  birthday() {\n    this.age++\n  }\n}\nperson.birthday() // person.age === 51\n```',
              '```js\nfunction Person(name, age) {\n  this.name = name\n  this.age = age\n}\nPerson.prototype.birthday = function() {\n  this.age++\n}\nconst person1 = new Person("John", 50)\nconst person2 = new Person("Sally", 20)\nperson1.birthday() // person1.age === 51\nperson2.birthday() // person2.age === 21\n```',
              '```js\nconst createPerson = (name, age) => {\n  const birthday = () => person.age++\n  const person = { name, age, birthday }\n  return person\n}\nconst person = createPerson("John", 50)\nperson.birthday() // person.age === 51\n```',
              "```js\nconst personProto = {\n  birthday() {\n    this.age++\n  }\n}\nconst person = Object.create(personProto)\nperson.age = 50\nperson.birthday() // person.age === 51\n```",
              "```js\nObject.create(personProto, {\n  age: {\n    value: 50,\n    writable: true,\n    enumerable: true\n  }\n})\n```",
            ],
          },
          {
            name: "parameter-vs-argument.md",
            question:
              "What is the difference between a parameter and an argument?",
            answer:
              'Parameters are the variable names of the function definition, while arguments are the values given to a function when it is invoked.\n\n```js\nfunction myFunction(parameter1, parameter2) {\n  console.log(arguments[0]) // "argument1"\n}\nmyFunction("argument1", "argument2")\n```',
            goodToHear: [
              "`arguments` is an array-like object containing information about the arguments supplied to an invoked function.",
              "`myFunction.length` describes the arity of a function (how many parameters it has, regardless of how many arguments it is supplied).",
            ],
            links: [],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nfunction myFunction(parameter1, parameter2) {\n  console.log(arguments[0]) // "argument1"\n}\nmyFunction("argument1", "argument2")\n```',
            ],
          },
          {
            name: "pass-by-value-reference.md",
            question: "Does JavaScript pass by value or by reference?",
            answer:
              "JavaScript always passes by value. However, with objects, the value is a reference to the object.",
            goodToHear: [
              "Difference between pass-by-value and pass-by-reference",
            ],
            links: [
              "[JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "passing-arguments-to-event-handlers.md",
            question:
              "How do you pass an argument to an event handler or callback?",
            answer:
              "You can use an arrow function to wrap around an event handler and pass arguments, which is equivalent to calling `bind`:\n\n```js\n<button onClick={() => this.handleClick(id)} />\n<button onClick={this.handleClick.bind(this, id)} />\n```",
            goodToHear: [],
            links: [
              "[React docs on Handling Events](https://reactjs.org/docs/handling-events.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\n<button onClick={() => this.handleClick(id)} />\n<button onClick={this.handleClick.bind(this, id)} />\n```",
            ],
          },
          {
            name: "pipe.md",
            question:
              "Create a function `pipe` that performs left-to-right function composition by returning a function that accepts one argument.\n\n```js\nconst square = v => v * v\nconst double = v => v * 2\nconst addOne = v => v + 1\nconst res = pipe(square, double, addOne)\nres(3) // 19; addOne(double(square(3)))\n```",
            answer:
              "Gather all supplied arguments using the rest operator `...` and return a unary function that uses `Array.prototype.reduce()` to run the value through the series of functions before returning the final value.\n\n```js\nconst pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)\n```",
            goodToHear: [
              "Function composition is the process of combining two or more functions to produce a new function.",
            ],
            links: [
              "[What is function composition?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [
              "```js\nconst square = v => v * v\nconst double = v => v * 2\nconst addOne = v => v + 1\nconst res = pipe(square, double, addOne)\nres(3) // 19; addOne(double(square(3)))\n```",
            ],
            answerCodeBlocks: [
              "```js\nconst pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x)\n```",
            ],
          },
          {
            name: "portals.md",
            question: "What are portals in React?",
            answer:
              "Portal are the recommended way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.\n\n```js\nReactDOM.createPortal(child, container)\n```\n\nThe first argument (`child`) is any renderable React child, such as an element, string, or fragment. The second argument (`container`) is a DOM element.",
            goodToHear: [],
            links: [
              "[React docs on Portals](https://reactjs.org/docs/portals.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nReactDOM.createPortal(child, container)\n```",
            ],
          },
          {
            name: "postfix-vs-prefix-increment.md",
            question:
              "What is the difference between the postfix `i++` and prefix `++i` increment operators?",
            answer:
              "Both increment the variable value by 1. The difference is what they evaluate to.\n\nThe postfix increment operator evaluates to the value _before_ it was incremented.\n\n```js\nlet i = 0\ni++ // 0\n// i === 1\n```\n\nThe prefix increment operator evaluates to the value _after_ it was incremented.\n\n```js\nlet i = 0\n++i // 1\n// i === 1\n```",
            goodToHear: [],
            links: [],
            tags: ["javascript"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nlet i = 0\ni++ // 0\n// i === 1\n```",
              "```js\nlet i = 0\n++i // 1\n// i === 1\n```",
            ],
          },
          {
            name: "promise-states.md",
            question: "In which states can a Promise be?",
            answer:
              "A `Promise` is in one of these states:\n\n* pending: initial state, neither fulfilled nor rejected.\n* fulfilled: meaning that the operation completed successfully.\n* rejected: meaning that the operation failed.\n\nA pending promise can either be fulfilled with a value, or rejected with a reason (error).\nWhen either of these options happens, the associated handlers queued up by a promise's then method are called.",
            goodToHear: [],
            links: [
              "[Official Web Docs Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)",
            ],
            tags: ["javascript"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "promises.md",
            question: "What are Promises?",
            answer:
              'The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.\nAn example can be the following snippet, which after 100ms prints out the result string to the standard output. Also, note the catch, which can be used for error handling. `Promise`s are chainable.\n\n```js\nnew Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("result")\n  }, 100)\n})\n  .then(console.log)\n  .catch(console.error)\n```',
            goodToHear: [
              "Take a look into the other questions regarding `Promise`s!",
            ],
            links: [
              "[Master the JavaScript Interview: What is a Promise?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e772618)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nnew Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("result")\n  }, 100)\n})\n  .then(console.log)\n  .catch(console.error)\n```',
            ],
          },
          {
            name: "prop-validation.md",
            question: "How to apply prop validation in React?",
            answer:
              'When the application is running in development mode, React will automatically check for all props that we set on components to make sure they are the correct data type. For incorrect data types, it will generate warning messages in the console for development mode. They are stripped in production mode due to their performance impact. Required props are defined with `isRequired`.\n\nFor example, we define `propTypes` for component as below:\n\n```js\nimport PropTypes from "prop-types"\n\nclass User extends React.Component {\n  static propTypes = {\n    name: PropTypes.string.isRequired,\n    age: PropTypes.number.isRequired\n  }\n\n  render() {\n    return (\n      <h1>Welcome, {this.props.name}</h1>\n      <h2>Age, {this.props.age}\n    )\n  }\n}\n```',
            goodToHear: [
              "We can define custom `propTypes`",
              "Using `propTypes` is not mandatory. However, it is a good practice and can reduce bugs.",
            ],
            links: [],
            tags: ["react"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nimport PropTypes from "prop-types"\n\nclass User extends React.Component {\n  static propTypes = {\n    name: PropTypes.string.isRequired,\n    age: PropTypes.number.isRequired\n  }\n\n  render() {\n    return (\n      <h1>Welcome, {this.props.name}</h1>\n      <h2>Age, {this.props.age}\n    )\n  }\n}\n```',
            ],
          },
          {
            name: "prototypal-inheritance.md",
            question:
              "How does prototypal inheritance differ from classical inheritance?",
            answer:
              "In the classical inheritance paradigm, object instances inherit their properties and functions from a class, which acts as a blueprint for the object. Object instances are typically created using a constructor and the `new` keyword.\n\nIn the prototypal inheritance paradigm, object instances inherit directly from other objects and are typically created using factory functions or `Object.create()`.",
            goodToHear: [],
            links: [
              "[MDN docs for inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "pure-functions.md",
            question: "What is a pure function?",
            answer:
              "A pure function is a function that satisfies these two conditions:\n\n* Given the same input, the function returns the same output.\n* The function doesn't cause side effects outside of the function's scope (i.e. mutate data outside the function or data supplied to the function).\n\nPure functions can mutate local data within the function as long as it satisfies the two conditions above.\n\n##### Pure\n\n```js\nconst a = (x, y) => x + y\nconst b = (arr, value) => arr.concat(value)\nconst c = arr => [...arr].sort((a, b) => a - b)\n```\n\n##### Impure\n\n```js\nconst a = (x, y) => x + y + Math.random()\nconst b = (arr, value) => (arr.push(value), arr)\nconst c = arr => arr.sort((a, b) => a - b)\n```",
            goodToHear: [
              "Pure functions are easier to reason about due to their reliability.",
              "All functions should be pure unless explicitly causing a side effect (i.e. `setInnerHTML`).",
              "If a function does not return a value, it is an indication that it is causing side effects.",
            ],
            links: [
              "[Pure functions in JavaScript](http://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst a = (x, y) => x + y\nconst b = (arr, value) => arr.concat(value)\nconst c = arr => [...arr].sort((a, b) => a - b)\n```",
              "```js\nconst a = (x, y) => x + y + Math.random()\nconst b = (arr, value) => (arr.push(value), arr)\nconst c = arr => arr.sort((a, b) => a - b)\n```",
            ],
          },
          {
            name: "react-comments.md",
            question: "How do you write comments inside a JSX tree in React?",
            answer:
              "Comments must be wrapped inside curly braces `{}` and use the `/* */` syntax.\n\n```jsx\nconst tree = (\n  <div>\n    {/* Comment */}\n    <p>Text</p>\n  </div>\n)\n```\n\n\x3c!-- tags: (react) --\x3e\n\n\x3c!-- expertise: (0) --\x3e",
            goodToHear: [],
            links: [],
            tags: ["react"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```jsx\nconst tree = (\n  <div>\n    {/* Comment */}\n    <p>Text</p>\n  </div>\n)\n```",
            ],
          },
          {
            name: "recursion.md",
            question: "What is recursion and when is it useful?",
            answer:
              'Recursion is the repeated application of a process. In JavaScript, recursion involves functions that call themselves repeatedly until they reach a base condition. The base condition breaks out of the recursion loop because otherwise the function would call itself indefinitely. Recursion is very useful when working with data structures that contain nesting where the number of levels deep is unknown.\n\nFor example, you may have a thread of comments returned from a database that exist in a flat array but need to be nested for display in the UI. Each comment is either a top-level comment (no parent) or is a reply to a parent comment. Comments can be a reply of a reply of a reply... we have no knowledge beforehand the number of levels deep a comment may be. This is where recursion can help.\n\n```js\nconst nest = (items, id = null, link = "parent_id") =>\n  items\n    .filter(item => item[link] === id)\n    .map(item => ({ ...item, children: nest(items, item.id) }))\n\nconst comments = [\n  { id: 1, parent_id: null, text: "First reply to post." },\n  { id: 2, parent_id: 1, text: "First reply to comment #1." },\n  { id: 3, parent_id: 1, text: "Second reply to comment #1." },\n  { id: 4, parent_id: 3, text: "First reply to comment #3." },\n  { id: 5, parent_id: 4, text: "First reply to comment #4." },\n  { id: 6, parent_id: null, text: "Second reply to post." }\n]\n\nnest(comments)\n/*\n[\n  { id: 1, parent_id: null, text: "First reply to post.", children: [...] },\n  { id: 6, parent_id: null, text: "Second reply to post.", children: [] }\n]\n*/\n```\n\nIn the above example, the base condition is met if `filter()` returns an empty array. The chained `map()` won\'t invoke the callback function which contains the recursive call, thereby breaking the loop.',
            goodToHear: [
              "Recursion is useful when working with data structures containing an unknown number of nested structures.",
              "Recursion must have a base condition to be met that breaks out of the loop or it will call itself indefinitely.",
            ],
            links: [
              "[In plain English, what is recursion?](https://softwareengineering.stackexchange.com/questions/25052/in-plain-english-what-is-recursion)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nconst nest = (items, id = null, link = "parent_id") =>\n  items\n    .filter(item => item[link] === id)\n    .map(item => ({ ...item, children: nest(items, item.id) }))\n\nconst comments = [\n  { id: 1, parent_id: null, text: "First reply to post." },\n  { id: 2, parent_id: 1, text: "First reply to comment #1." },\n  { id: 3, parent_id: 1, text: "Second reply to comment #1." },\n  { id: 4, parent_id: 3, text: "First reply to comment #3." },\n  { id: 5, parent_id: 4, text: "First reply to comment #4." },\n  { id: 6, parent_id: null, text: "Second reply to post." }\n]\n\nnest(comments)\n/*\n[\n  { id: 1, parent_id: null, text: "First reply to post.", children: [...] },\n  { id: 6, parent_id: null, text: "Second reply to post.", children: [] }\n]\n*/\n```',
            ],
          },
          {
            name: "reference-example.md",
            question:
              'What is the output of the following code?\n\n```js\nconst a = [1, 2, 3]\nconst b = [1, 2, 3]\nconst c = "1,2,3"\n\nconsole.log(a == c)\nconsole.log(a == b)\n```',
            answer:
              "The first `console.log` outputs `true` because JavaScript's compiler performs type conversion and therefore it compares to strings by their value. On the other hand, the second `console.log` outputs `false` because Arrays are Objects and Objects are compared by reference.",
            goodToHear: [
              "JavaScript performs automatic type conversion",
              "Objects are compared by reference",
              "Primitives are compared by value",
            ],
            links: [
              "[JavaScript Value vs Reference](https://medium.com/dailyjs/back-to-roots-javascript-value-vs-reference-8fb69d587a18)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [
              '```js\nconst a = [1, 2, 3]\nconst b = [1, 2, 3]\nconst c = "1,2,3"\n\nconsole.log(a == c)\nconsole.log(a == b)\n```',
            ],
            answerCodeBlocks: [],
          },
          {
            name: "refs.md",
            question: "What are refs in React? When should they be used?",
            answer:
              "Refs provide a way to access DOM nodes or React elements created in the render method. Refs should be used sparringly, but there are some good use cases for refs, such as:\n\n* Managing focus, text selection, or media playback.\n* Triggering imperative animations.\n* Integrating with third-party DOM libraries.\n\nRefs are created using `React.createRef()` method and attached to React elements via the `ref` attribute. In order to use refs throughout the component, assign the `ref` to the instance property within the constructor:\n\n```js\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.myRef = React.createRef()\n  }\n\n  render() {\n    return <div ref={this.myRef} />\n  }\n}\n```\n\nRefs can also be used in functional components with the help of closures.",
            goodToHear: [
              "Refs are used to return a reference to an element.",
              "Refs shouldn't be overused.",
              "You can create a ref using `React.createRef()` and attach to elements via the `ref` attribute.",
            ],
            links: [
              "[React docs on Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props)\n    this.myRef = React.createRef()\n  }\n\n  render() {\n    return <div ref={this.myRef} />\n  }\n}\n```",
            ],
          },
          {
            name: "rel-noopener.md",
            question: 'Where and why is the `rel="noopener"` attribute used?',
            answer:
              'The `rel="noopener"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a `window.opener` property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is.',
            goodToHear: [
              '`rel="noopener"` is applied to hyperlinks.',
              '`rel="noopener"` prevents opened links from manipulating the source page.',
            ],
            links: [
              '[Open external anchors using rel="noopener"](https://developers.google.com/web/tools/lighthouse/audits/noopener)',
              '[About rel="noopener"](https://mathiasbynens.github.io/rel-noopener/)',
            ],
            tags: ["html"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "rest.md",
            question: "What is REST?",
            answer:
              "REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.\n\nGenerally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like `posts`, `users`, `comments`, and a RESTful API exposes access to this data with:\n\n* An identifier for the resource. This is known as the endpoint or URL for the resource.\n* The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.\n\nHere is an example of the URL and HTTP method with a `posts` resource:\n\n* Reading: `/posts/` => GET\n* Creating: `/posts/new` => POST\n* Updating: `/posts/:id` => PUT\n* Destroying: `/posts/:id` => DELETE",
            goodToHear: ["Alternatives to this pattern like GraphQL"],
            links: [
              "  ](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)",
            ],
            tags: ["node"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "return-semicolon.md",
            question:
              'What does the following function return?\n\n```js\nfunction greet() {\n  return\n  {\n    message: "hello"\n  }\n}\n```',
            answer:
              "Because of JavaScript's automatic semicolon insertion (ASI), the compiler places a semicolon after `return` keyword and therefore it returns `undefined` without an error being thrown.",
            goodToHear: [
              "Automatic semicolon placement can lead to time-consuming bugs",
            ],
            links: [
              "[Automatic semicolon insertion in JavaScript](http://2ality.com/2011/05/semicolon-insertion.html)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [
              '```js\nfunction greet() {\n  return\n  {\n    message: "hello"\n  }\n}\n```',
            ],
            answerCodeBlocks: [],
          },
          {
            name: "semicolons.md",
            question: "Are semicolons required in JavaScript?",
            answer:
              "Sometimes. Due to JavaScript's automatic semicolon insertion, the interpreter places semicolons after most statements. This means semicolons can be omitted in most cases.\n\nHowever, there are some cases where they are required. They are not required at the beginning of a block, but are if they follow a line and:\n\n1.  The line starts with `[`\n\n```js\nconst previousLine = 3\n;[1, 2, previousLine].map(n => n * 2)\n```\n\n2.  The line starts with `(`\n\n```js\nconst previousLine = 3\n;(function() {\n  // ...\n})()\n```\n\nIn the above cases, the interpreter does not insert a semicolon after `3`, and therefore it will see the `3` as attempting object property access or being invoked as a function, which will throw errors.",
            goodToHear: [
              "Semicolons are usually optional in JavaScript but have edge cases where they are required.",
              "If you don't use semicolons, tools like Prettier will insert semicolons for you in the places where they are required on save in a text editor to prevent errors.",
            ],
            links: [],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nconst previousLine = 3\n;[1, 2, previousLine].map(n => n * 2)\n```",
              "```js\nconst previousLine = 3\n;(function() {\n  // ...\n})()\n```",
            ],
          },
          {
            name: "short-circuit-evaluation.md",
            question: "What is short-circuit evaluation in JavaScript?",
            answer:
              'Short-circuit evaluation involves logical operations evaluating from left-to-right and stopping early.\n\n```js\ntrue || false\n```\n\nIn the above sample using logical OR, JavaScript won\'t look at the second operand `false`, because the expression evaluates to `true` regardless. This is known as short-circuit evaluation.\n\nThis also works for logical AND.\n\n```js\nfalse && true\n```\n\nThis means you can have an expression that throws an error if evaluated, and it won\'t cause issues.\n\n```js\ntrue || nonexistentFunction()\nfalse && nonexistentFunction()\n```\n\nThis remains true for multiple operations because of left-to-right evaluation.\n\n```js\ntrue || nonexistentFunction() || window.nothing.wouldThrowError\ntrue || window.nothing.wouldThrowError\ntrue\n```\n\nA common use case for this behavior is setting default values. If the first operand is falsy the second operand will be evaluated.\n\n```js\nconst options = {}\nconst setting = options.setting || "default"\nsetting // "default"\n```\n\nAnother common use case is only evaluating an expression if the first operand is truthy.\n\n```js\n// Instead of:\naddEventListener("click", e => {\n  if (e.target.closest("button")) {\n    handleButtonClick(e)\n  }\n})\n\n// You can take advantage of short-circuit evaluation:\naddEventListener(\n  "click",\n  e => e.target.closest("button") && handleButtonClick(e)\n)\n```\n\nIn the above case, if `e.target` is not or does not contain an element matching the `"button"` selector, the function will not be called. This is because the first operand will be falsy, causing the second operand to not be evaluated.',
            goodToHear: [
              "Logical operations do not produce a boolean unless the operand(s) evaluate to a boolean.",
            ],
            links: [
              "[JavaScript: What is short-circuit evaluation?](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\ntrue || false\n```",
              "```js\nfalse && true\n```",
              "```js\ntrue || nonexistentFunction()\nfalse && nonexistentFunction()\n```",
              "```js\ntrue || nonexistentFunction() || window.nothing.wouldThrowError\ntrue || window.nothing.wouldThrowError\ntrue\n```",
              '```js\nconst options = {}\nconst setting = options.setting || "default"\nsetting // "default"\n```',
              '```js\n// Instead of:\naddEventListener("click", e => {\n  if (e.target.closest("button")) {\n    handleButtonClick(e)\n  }\n})\n\n// You can take advantage of short-circuit evaluation:\naddEventListener(\n  "click",\n  e => e.target.closest("button") && handleButtonClick(e)\n)\n```',
            ],
          },
          {
            name: "sprites.md",
            question:
              "What are the advantages of using CSS sprites and how are they utilized?",
            answer:
              "CSS sprites combine multiple images into one image, limiting the number of HTTP requests a browser has to make, thus improving load times. Even under the new HTTP/2 protocol, this remains true.\n\nUnder HTTP/1.1, at most one request is allowed per TCP connection. With HTTP/1.1, modern browsers open multiple parallel connections (between 2 to 8) but it is limited. With HTTP/2, all requests between the browser and the server are multiplexed on a single TCP connection. This means the cost of opening and closing multiple connections is mitigated, resulting in a better usage of the TCP connection and limits the impact of latency between the client and server. It could then become possible to load tens of images in parallel on the same TCP connection.\n\nHowever, according to [benchmark results](https://blog.octo.com/en/http2-arrives-but-sprite-sets-aint-no-dead/), although HTTP/2 offers 50% improvement over HTTP/1.1, in most cases the sprite set is still faster to load than individual images.\n\nTo utilize a spritesheet in CSS, one would use certain properties, such as `background-image`, `background-position` and `background-size` to ultimately alter the `background` of an element.",
            goodToHear: [
              "`background-image`, `background-position` and `background-size` can be used to utilize a spritesheet.",
            ],
            links: [
              "[CSS Sprites explained by CSS Tricks](https://css-tricks.com/css-sprites/)",
            ],
            tags: ["css"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "stateful-components.md",
            question: "What is a stateful component in React?",
            answer:
              "A stateful component is a component whose behavior depends on its state. This means that two separate instances of the component if given the same props will not necessarily render the same output, unlike pure function components.\n\n```js\n// Stateful class component\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n  render() {\n    // ...\n  }\n}\n\n// Stateful function component\nfunction App() {\n  const [count, setCount] = useState(0)\n  return // ...\n}\n```",
            goodToHear: [
              "Stateful components have internal state that they depend on.",
              "Stateful components are class components or function components that use stateful Hooks.",
              "Stateful components have their state initialized in the constructor or with `useState()`.",
            ],
            links: [
              "[React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\n// Stateful class component\nclass App extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { count: 0 }\n  }\n  render() {\n    // ...\n  }\n}\n\n// Stateful function component\nfunction App() {\n  const [count, setCount] = useState(0)\n  return // ...\n}\n```",
            ],
          },
          {
            name: "stateless-components.md",
            question: "What is a stateless component?",
            answer:
              "A stateless component is a component whose behavior does not depend on its state. Stateless components can be either functional or class components. Stateless functional components are easier to maintain and test since they are guaranteed to produce the same output given the same props. Stateless functional components should be preferred when lifecycle hooks don't need to be used.",
            goodToHear: [
              "Stateless components are independent of their state.",
              "Stateless components can be either class or functional components.",
              "Stateless functional components avoid the `this` keyword altogether.",
            ],
            links: [
              "[React docs on State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)",
            ],
            tags: ["react", "javascript"],
            expertise: 0,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "static-vs-instance-method.md",
            question:
              "Explain the difference between a static method and an instance method.",
            answer:
              "Static methods belong to a class and don't act on instances, while instance methods belong to the class prototype which is inherited by all instances of the class and acts on them.\n\n```js\nArray.isArray // static method of Array\nArray.prototype.push // instance method of Array\n```\n\nIn this case, the `Array.isArray` method does not make sense as an instance method of arrays because we already know the value is an array when working with it.\n\nInstance methods could technically work as static methods, but provide terser syntax:\n\n```js\nconst arr = [1, 2, 3]\narr.push(4)\nArray.push(arr, 4)\n```",
            goodToHear: [
              "How to create static and instance methods with ES2015 class syntax",
            ],
            links: [
              "[Classes on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nArray.isArray // static method of Array\nArray.prototype.push // instance method of Array\n```",
              "```js\nconst arr = [1, 2, 3]\narr.push(4)\nArray.push(arr, 4)\n```",
            ],
          },
          {
            name: "sync-vs-async.md",
            question:
              "What is the difference between synchronous and asynchronous code in JavaScript?",
            answer:
              "Synchronous means each operation must wait for the previous one to complete.\n\nAsynchronous means an operation can occur while another operation is still being processed.\n\nIn JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as `XMLHttpRequest` or `setTimeout`) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.",
            goodToHear: [
              'JavaScript has a concurrency model based on an "event loop".',
              "Functions like `alert` block the main thread so that no user input is registered until the user closes it.",
            ],
            links: [],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "this.md",
            question: "What is the `this` keyword and how does it work?",
            answer:
              'The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with the methods `call()`, `apply()` and `bind()`. Arrow functions implicitly bind `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is set explicitly with `call()`.\n\nHere are some common examples of how `this` works:\n\n##### Object literals\n\n`this` refers to the object itself inside regular functions if the object precedes the invocation of the function.\n\nProperties set as `this` do not refer to the object.\n\n```js\nvar myObject = {\n  property: this,\n  regularFunction: function() {\n    return this\n  },\n  arrowFunction: () => {\n    return this\n  },\n  iife: (function() {\n    return this\n  })()\n}\nmyObject.regularFunction() // myObject\nmyObject["regularFunction"]() // my Object\n\nmyObject.property // NOT myObject; lexical `this`\nmyObject.arrowFunction() // NOT myObject; lexical `this`\nmyObject.iife // NOT myObject; lexical `this`\nconst regularFunction = myObject.regularFunction\nregularFunction() // NOT myObject; lexical `this`\n```\n\n##### Event listeners\n\n`this` refers to the element listening to the event.\n\n```js\ndocument.body.addEventListener("click", function() {\n  console.log(this) // document.body\n})\n```\n\n##### Constructors\n\n`this` refers to the newly created object.\n\n```js\nclass Example {\n  constructor() {\n    console.log(this) // myExample\n  }\n}\nconst myExample = new Example()\n```\n\n##### Manual\n\nWith `call()` and `apply()`, `this` refers to the object passed as the first argument.\n\n```js\nvar myFunction = function() {\n  return this\n}\nmyFunction.call({ customThis: true }) // { customThis: true }\n```\n\n##### Unwanted `this`\n\nBecause `this` can change depending on the scope, it can have unexpected values when using regular functions.\n\n```js\nvar obj = {\n  arr: [1, 2, 3],\n  doubleArr() {\n    return this.arr.map(function(value) {\n      // this is now this.arr\n      return this.double(value)\n    })\n  },\n  double() {\n    return value * 2\n  }\n}\nobj.doubleArr() // Uncaught TypeError: this.double is not a function\n```',
            goodToHear: [
              "In non-strict mode, global `this` is the global object (`window` in browsers), while in strict mode global `this` is `undefined`.",
              "`Function.prototype.call` and `Function.prototype.apply` set the `this` context of an executing function as the first argument, with `call` accepting a variadic number of arguments thereafter, and `apply` accepting an array as the second argument which are fed to the function in a variadic manner.",
              "`Function.prototype.bind` returns a new function that enforces the `this` context as the first argument which cannot be changed by other functions.",
              "If a function requires its `this` context to be changed based on how it is called, you must use the `function` keyword. Use arrow functions when you want `this` to be the surrounding (lexical) context.",
            ],
            links: [
              "[`this` on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```js\nvar myObject = {\n  property: this,\n  regularFunction: function() {\n    return this\n  },\n  arrowFunction: () => {\n    return this\n  },\n  iife: (function() {\n    return this\n  })()\n}\nmyObject.regularFunction() // myObject\nmyObject["regularFunction"]() // my Object\n\nmyObject.property // NOT myObject; lexical `this`\nmyObject.arrowFunction() // NOT myObject; lexical `this`\nmyObject.iife // NOT myObject; lexical `this`\nconst regularFunction = myObject.regularFunction\nregularFunction() // NOT myObject; lexical `this`\n```',
              '```js\ndocument.body.addEventListener("click", function() {\n  console.log(this) // document.body\n})\n```',
              "```js\nclass Example {\n  constructor() {\n    console.log(this) // myExample\n  }\n}\nconst myExample = new Example()\n```",
              "```js\nvar myFunction = function() {\n  return this\n}\nmyFunction.call({ customThis: true }) // { customThis: true }\n```",
              "```js\nvar obj = {\n  arr: [1, 2, 3],\n  doubleArr() {\n    return this.arr.map(function(value) {\n      // this is now this.arr\n      return this.double(value)\n    })\n  },\n  double() {\n    return value * 2\n  }\n}\nobj.doubleArr() // Uncaught TypeError: this.double is not a function\n```",
            ],
          },
          {
            name: "typeof-typeof.md",
            question:
              "What does the following code evaluate to?\n\n```js\ntypeof typeof 0\n```",
            answer:
              'It evaluates to `"string"`.\n\n`typeof 0` evaluates to the string `"number"` and therefore `typeof "number"` evaluates to `"string"`.',
            goodToHear: [],
            links: [
              "[MDN docs for typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: ["```js\ntypeof typeof 0\n```"],
            answerCodeBlocks: [],
          },
          {
            name: "types.md",
            question: "What are JavaScript data types?",
            answer:
              "The latest ECMAScript standard defines seven data types, six of them being primitive: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` and one non-primitive data type: `Object`.",
            goodToHear: [
              "Mention of newly added `Symbol` data type",
              "`Array`, `Date` and `function` are all of type `object`",
              "Functions in JavaScript are objects with the capability of being callable",
            ],
            links: [
              "[MDN docs for data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)",
              "[Understanding Data Types in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript)",
            ],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "ui-library-framework-purpose.md",
            question:
              "What is the purpose of JavaScript UI libraries/frameworks like React, Vue, Angular, Hyperapp, etc?",
            answer:
              "The main purpose is to avoid manipulating the DOM directly and keep the state of an application\nin sync with the UI easily. Additionally, they provide the ability to create components that can be reused when they have similar functionality with minor differences, avoiding duplication which would require multiple changes whenever the structure of a component which is reused in multiple places needs to be updated.\n\nWhen working with DOM manipulation libraries like jQuery, the data of an application is generally kept in the DOM itself, often as class names or `data` attributes. Manipulating the DOM to update the UI involves many extra steps and can introduce subtle bugs over time. Keeping the state separate and letting a framework handle the UI updates when the state changes reduces cognitive load. Saying you want the UI to look a certain way when the state is a certain value is the declarative way of creating an application, instead of the imperative way of manually updating the UI to reflect the new state.",
            goodToHear: [
              "The virtual DOM is a representation of the real DOM tree in the form of plain objects, which allows a library to write code as if the entire document is thrown away and rebuilt on each change, while the real DOM only updates what needs to be changed. Comparing the new virtual DOM against the previous one leads to high efficiency as changing real DOM nodes is costly compared to recalculating the virtual DOM.",
              "JSX is an extension to JavaScript that provides XML-like syntax to create virtual DOM objects which is transformed to function calls by a transpiler. It simplifies control flow (if statements/ternary expressions) compared to tagged template literals.",
            ],
            links: [
              "[Virtual DOM in Hyperapp](https://github.com/hyperapp/hyperapp#view)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "use-strict.md",
            question:
              "What does `'use strict'` do and what are some of the key benefits to using it?",
            answer:
              "Including `'use strict'` at the beginning of your JavaScript source file enables strict mode, which enforces more strict parsing and error handling of JavaScript code. It is considered a good practice and offers a lot of benefits, such as:\n\n* Easier debugging due to eliminating silent errors.\n* Disallows variable redefinition.\n* Prevents accidental global variables.\n* Oftentimes provides increased performance over identical code that is not running in strict mode.\n* Simplifies `eval()` and `arguments`.\n* Helps make JavaScript more secure.",
            goodToHear: [
              "Eliminates `this` coercion, throwing an error when `this` references a value of `null` or `undefined`.",
              "Throws an error on invalid usage of `delete`.",
              "Prohibits some syntax likely to be defined in future versions of ECMAScript",
            ],
            links: [
              "[MDN docs for strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
          {
            name: "var-let-const.md",
            question:
              "What are the differences between `var`, `let`, `const` and no keyword statements?",
            answer:
              '##### No keyword\n\nWhen no keyword exists before a variable assignment, it is either assigning a global variable if one does not exist, or reassigns an already declared variable. In non-strict mode, if the variable has not yet been declared, it will assign the variable as a property of the global object (`window` in browsers). In strict mode, it will throw an error to prevent unwanted global variables from being created.\n\n##### var\n\n`var` was the default statement to declare a variable until ES2015. It creates a function-scoped variable that can be reassigned and redeclared. However, due to its lack of block scoping, it can cause issues if the variable is being reused in a loop that contains an asynchronous callback because the variable will continue to exist outside of the block scope.\n\nBelow, by the time the the `setTimeout` callback executes, the loop has already finished and the `i` variable is `10`, so all ten callbacks reference the same variable available in the function scope.\n\n```js\nfor (var i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs `10` ten times\n    console.log(i)\n  })\n}\n\n/* Solutions with `var` */\nfor (var i = 0; i < 10; i++) {\n  // Passed as an argument will use the value as-is in\n  // that point in time\n  setTimeout(console.log, 0, i)\n}\n\nfor (var i = 0; i < 10; i++) {\n  // Create a new function scope that will use the value\n  // as-is in that point in time\n  ;(i => {\n    setTimeout(() => {\n      console.log(i)\n    })\n  })(i)\n}\n```\n\n##### let\n\n`let` was introduced in ES2015 and is the new preferred way to declare variables that will be reassigned later. Trying to redeclare a variable again will throw an error. It is block-scoped so that using it in a loop will keep it scoped to the iteration.\n\n```js\nfor (let i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs 0, 1, 2, 3, ...\n    console.log(i)\n  })\n}\n```\n\n##### const\n\n`const` was introduced in ES2015 and is the new preferred default way to declare all variables if they won\'t be reassigned later, even for objects that will be mutated (as long as the reference to the object does not change). It is block-scoped and cannot be reassigned.\n\n```js\nconst myObject = {}\nmyObject.prop = "hello!" // No error\nmyObject = "hello" // Error\n```',
            goodToHear: [
              "All declarations are hoisted to the top of their scope.",
              "However, with `let` and `const` there is a concept called the temporal dead zone (TDZ). While the declarations are still hoisted, there is a period between entering scope and being declared where they cannot be accessed.",
              "Show a common issue with using `var` and how `let` can solve it, as well as a solution that keeps `var`.",
              "`var` should be avoided whenever possible and prefer `const` as the default declaration statement for all variables unless they will be reassigned later, then use `let` if so.",
            ],
            links: ["[`let` vs `const`](https://wesbos.com/let-vs-const/)"],
            tags: ["javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              "```js\nfor (var i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs `10` ten times\n    console.log(i)\n  })\n}\n\n/* Solutions with `var` */\nfor (var i = 0; i < 10; i++) {\n  // Passed as an argument will use the value as-is in\n  // that point in time\n  setTimeout(console.log, 0, i)\n}\n\nfor (var i = 0; i < 10; i++) {\n  // Create a new function scope that will use the value\n  // as-is in that point in time\n  ;(i => {\n    setTimeout(() => {\n      console.log(i)\n    })\n  })(i)\n}\n```",
              "```js\nfor (let i = 0; i < 10; i++) {\n  setTimeout(() => {\n    // logs 0, 1, 2, 3, ...\n    console.log(i)\n  })\n}\n```",
              '```js\nconst myObject = {}\nmyObject.prop = "hello!" // No error\nmyObject = "hello" // Error\n```',
            ],
          },
          {
            name: "virtual-dom.md",
            question:
              "What is a virtual DOM and why is it used in libraries/frameworks?",
            answer:
              'The virtual DOM (VDOM) is a representation of the real DOM in the form of plain JavaScript objects. These objects have properties to describe the real DOM nodes they represent: the node name, its attributes, and child nodes.\n\n```html\n<div class="counter">\n  <h1>0</h1>\n  <button>-</button>\n  <button>+</button>\n</div>\n```\n\nThe above markup\'s virtual DOM representation might look like this:\n\n```js\n{\n  nodeName: "div",\n  attributes: { class: "counter" },\n  children: [\n    {\n      nodeName: "h1",\n      attributes: {},\n      children: [0]\n    },\n    {\n      nodeName: "button",\n      attributes: {},\n      children: ["-"]\n    },\n    {\n      nodeName: "button",\n      attributes: {},\n      children: ["+"]\n    }\n  ]\n}\n```\n\nThe library/framework uses the virtual DOM as a means to improve performance. When the state of an application changes, the real DOM needs to be updated to reflect it. However, changing real DOM nodes is costly compared to recalculating the virtual DOM. The previous virtual DOM can be compared to the new virtual DOM very quickly in comparison.\n\nOnce the changes between the old VDOM and new VDOM have been calculated by the diffing engine of the framework, the real DOM can be patched efficiently in the least time possible to match the new state of the application.',
            goodToHear: ["Why accessing the DOM can be so costly."],
            links: [
              "[The difference between Virtual DOM and DOM](http://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)",
            ],
            tags: ["javascript"],
            expertise: 2,
            questionCodeBlocks: [],
            answerCodeBlocks: [
              '```html\n<div class="counter">\n  <h1>0</h1>\n  <button>-</button>\n  <button>+</button>\n</div>\n```',
              '```js\n{\n  nodeName: "div",\n  attributes: { class: "counter" },\n  children: [\n    {\n      nodeName: "h1",\n      attributes: {},\n      children: [0]\n    },\n    {\n      nodeName: "button",\n      attributes: {},\n      children: ["-"]\n    },\n    {\n      nodeName: "button",\n      attributes: {},\n      children: ["+"]\n    }\n  ]\n}\n```',
            ],
          },
          {
            name: "xss.md",
            question:
              "What is a cross-site scripting attack (XSS) and how do you prevent it?",
            answer:
              "XSS refers to client-side code injection where the attacker injects malicious scripts into a legitimate website or web application. This is often achieved when the application does not validate user input and freely injects dynamic HTML content.\n\nFor example, a comment system will be at risk if it does not validate or escape user input. If the comment contains unescaped HTML, the comment can inject a `<script>` tag into the website that other users will execute against their knowledge.\n\n* The malicious script has access to cookies which are often used to store session tokens. If an attacker can obtain a user’s session cookie, they can impersonate the user.\n* The script can arbitrarily manipulate the DOM of the page the script is executing in, allowing the attacker to insert pieces of content that appear to be a real part of the website.\n* The script can use AJAX to send HTTP requests with arbitrary content to arbitrary destinations.",
            goodToHear: [
              "On the client, using `textContent` instead of `innerHTML` prevents the browser from running the string through the HTML parser which would execute scripts in it.",
              "On the server, escaping HTML tags will prevent the browser from parsing the user input as actual HTML and therefore won't execute the script.",
            ],
            links: [
              "[Cross-Site Scripting Attack (XSS)](https://www.acunetix.com/websitesecurity/cross-site-scripting/)",
            ],
            tags: ["security", "javascript"],
            expertise: 1,
            questionCodeBlocks: [],
            answerCodeBlocks: [],
          },
        ]
      },
      {},
    ],
    5: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("../../data/questions.json"),
          n = o(e)
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        exports.default = {
          questions: n.default,
          filter: {
            category: "All",
            expertise: "Junior",
            sortAscending: !0,
            dropdown: {
              name: "Category",
              items: [
                { name: "All", icon: "check" },
                { name: "HTML", icon: "layout" },
                { name: "CSS", icon: "feather" },
                { name: "JavaScript", icon: "code" },
                { name: "React", icon: "globe" },
                { name: "Node", icon: "server" },
                { name: "Security", icon: "shield" },
              ],
            },
          },
        }
      },
      { "../../data/questions.json": 11 },
    ],
    6: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var n =
            Object.assign ||
            function (n) {
              for (var r = 1; r < arguments.length; r++) {
                var e = arguments[r]
                for (var t in e)
                  Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
              }
              return n
            },
          r = require("./utils")
        exports.default = {
          scrollBackToTop: r.scrollToTop,
          onAnswerButtonClick: function (r) {
            var e = r.name,
              t = r.isOpen
            return function (r) {
              return {
                questions: r.questions.map(function (r) {
                  return r.name === e ? n({}, r, { isOpen: !t }) : r
                }),
              }
            }
          },
          filter: {
            onSortDirectionChange: function () {
              return function (n) {
                return { sortAscending: !n.sortAscending }
              }
            },
            set: function (n) {
              return { category: n }
            },
          },
        }
      },
      { "./utils": 12 },
    ],
    27: [
      function (require, module, exports) {
        var define
        var global = arguments[3]
        var e,
          o = arguments[3]
        !(function (o, n) {
          "object" == typeof exports && "object" == typeof module
            ? (module.exports = n())
            : "function" == typeof e && e.amd
            ? e([], n)
            : "object" == typeof exports
            ? (exports.feather = n())
            : (o.feather = n())
        })("undefined" != typeof self ? self : this, function () {
          return (function (e) {
            var o = {}
            function n(l) {
              if (o[l]) return o[l].exports
              var i = (o[l] = { i: l, l: !1, exports: {} })
              return (
                e[l].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              )
            }
            return (
              (n.m = e),
              (n.c = o),
              (n.d = function (e, o, l) {
                n.o(e, o) ||
                  Object.defineProperty(e, o, {
                    configurable: !1,
                    enumerable: !0,
                    get: l,
                  })
              }),
              (n.r = function (e) {
                Object.defineProperty(e, "__esModule", { value: !0 })
              }),
              (n.n = function (e) {
                var o =
                  e && e.__esModule
                    ? function () {
                        return e.default
                      }
                    : function () {
                        return e
                      }
                return n.d(o, "a", o), o
              }),
              (n.o = function (e, o) {
                return Object.prototype.hasOwnProperty.call(e, o)
              }),
              (n.p = ""),
              n((n.s = 0))
            )
          })({
            "./dist/icons.json": function (e) {
              e.exports = {
                activity:
                  '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                airplay:
                  '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                "alert-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
                "alert-octagon":
                  '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
                "alert-triangle":
                  '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>',
                "align-center":
                  '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                "align-justify":
                  '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                "align-left":
                  '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                "align-right":
                  '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                anchor:
                  '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                aperture:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                archive:
                  '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                "arrow-down-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                "arrow-down-left":
                  '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                "arrow-down-right":
                  '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                "arrow-down":
                  '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                "arrow-left-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                "arrow-left":
                  '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                "arrow-right-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                "arrow-right":
                  '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                "arrow-up-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                "arrow-up-left":
                  '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                "arrow-up-right":
                  '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                "arrow-up":
                  '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                "at-sign":
                  '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                award:
                  '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                "bar-chart-2":
                  '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                "bar-chart":
                  '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                "battery-charging":
                  '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                battery:
                  '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                "bell-off":
                  '<path d="M8.56 2.9A7 7 0 0 1 19 9v4m-2 4H2a3 3 0 0 0 3-3V9a7 7 0 0 1 .78-3.22M13.73 21a2 2 0 0 1-3.46 0"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                bell: '<path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>',
                bluetooth:
                  '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                "book-open":
                  '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                bookmark:
                  '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                box: '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line>',
                briefcase:
                  '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                calendar:
                  '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                "camera-off":
                  '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                camera:
                  '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line>',
                "check-circle":
                  '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                "check-square":
                  '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                check: '<polyline points="20 6 9 17 4 12"></polyline>',
                "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                "chevron-left":
                  '<polyline points="15 18 9 12 15 6"></polyline>',
                "chevron-right":
                  '<polyline points="9 18 15 12 9 6"></polyline>',
                "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                "chevrons-down":
                  '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                "chevrons-left":
                  '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                "chevrons-right":
                  '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                "chevrons-up":
                  '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                chrome:
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                circle: '<circle cx="12" cy="12" r="10"></circle>',
                clipboard:
                  '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                clock:
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                "cloud-drizzle":
                  '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-lightning":
                  '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                "cloud-off":
                  '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "cloud-rain":
                  '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-snow":
                  '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line>',
                cloud:
                  '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                codepen:
                  '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                command:
                  '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                compass:
                  '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                "corner-down-left":
                  '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                "corner-down-right":
                  '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                "corner-left-down":
                  '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                "corner-left-up":
                  '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                "corner-right-down":
                  '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                "corner-right-up":
                  '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                "corner-up-left":
                  '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                "corner-up-right":
                  '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                "credit-card":
                  '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                crosshair:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                database:
                  '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                delete:
                  '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                "dollar-sign":
                  '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                "download-cloud":
                  '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                download:
                  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                droplet:
                  '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                "edit-2":
                  '<polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>',
                "edit-3":
                  '<polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line>',
                edit: '<path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>',
                "external-link":
                  '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                "eye-off":
                  '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                facebook:
                  '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                "fast-forward":
                  '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                feather:
                  '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17" y1="15" x2="9" y2="15"></line>',
                "file-minus":
                  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-plus":
                  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-text":
                  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                filter:
                  '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                "folder-minus":
                  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder-plus":
                  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                folder:
                  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                "git-branch":
                  '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                "git-commit":
                  '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                "git-merge":
                  '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                "git-pull-request":
                  '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                github:
                  '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                gitlab:
                  '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                globe:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                "hard-drive":
                  '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line>',
                hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                headphones:
                  '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                heart:
                  '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "help-circle":
                  '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line>',
                home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                image:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                inbox:
                  '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                instagram:
                  '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>',
                italic:
                  '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                layers:
                  '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                layout:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                "life-buoy":
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                "link-2":
                  '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                linkedin:
                  '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',
                loader:
                  '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                "log-in":
                  '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                "log-out":
                  '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                "map-pin":
                  '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                "maximize-2":
                  '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                maximize:
                  '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                "message-circle":
                  '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                "message-square":
                  '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                "mic-off":
                  '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "minimize-2":
                  '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                minimize:
                  '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                "minus-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                monitor:
                  '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                "more-horizontal":
                  '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                "more-vertical":
                  '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                music:
                  '<path d="M9 17H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm12-2h-4a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path><polyline points="9 17 9 5 21 3 21 15"></polyline>',
                "navigation-2":
                  '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                navigation:
                  '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                octagon:
                  '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                package:
                  '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line>',
                paperclip:
                  '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                "pause-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                pause:
                  '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                percent:
                  '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                "phone-call":
                  '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-forwarded":
                  '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-incoming":
                  '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-missed":
                  '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-off":
                  '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                "phone-outgoing":
                  '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                phone:
                  '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "pie-chart":
                  '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                "play-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                "plus-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                pocket:
                  '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                power:
                  '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                printer:
                  '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                radio:
                  '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                "refresh-ccw":
                  '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                "refresh-cw":
                  '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                repeat:
                  '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                rewind:
                  '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                "rotate-ccw":
                  '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                "rotate-cw":
                  '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                scissors:
                  '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                search:
                  '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                server:
                  '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line>',
                settings:
                  '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                "share-2":
                  '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                share:
                  '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                "shield-off":
                  '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                shield:
                  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                "shopping-bag":
                  '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                "shopping-cart":
                  '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                shuffle:
                  '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                sidebar:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                "skip-back":
                  '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                "skip-forward":
                  '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                slack:
                  '<path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z"></path><line x1="12.57" y1="5.99" x2="16.15" y2="16.39"></line><line x1="7.85" y1="7.61" x2="11.43" y2="18.01"></line><line x1="16.39" y1="7.85" x2="5.99" y2="11.43"></line><line x1="18.01" y1="12.57" x2="7.61" y2="16.15"></line>',
                slash:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                sliders:
                  '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                smartphone:
                  '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
                speaker:
                  '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>',
                square:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                "stop-circle":
                  '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                sunrise:
                  '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                sunset:
                  '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                tablet:
                  '<rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
                tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line>',
                target:
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                terminal:
                  '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                thermometer:
                  '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                "thumbs-down":
                  '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                "thumbs-up":
                  '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                "toggle-left":
                  '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                "toggle-right":
                  '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                "trash-2":
                  '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                trash:
                  '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                "trending-down":
                  '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                "trending-up":
                  '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                triangle:
                  '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                truck:
                  '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                twitter:
                  '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                umbrella:
                  '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                underline:
                  '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                unlock:
                  '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                "upload-cloud":
                  '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                upload:
                  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                "user-check":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                "user-minus":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-plus":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-x":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                users:
                  '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                "video-off":
                  '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                video:
                  '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                voicemail:
                  '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                "volume-1":
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-2":
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-x":
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                volume:
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                watch:
                  '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                "wifi-off":
                  '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
                wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
                wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                "x-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                youtube:
                  '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                "zap-off":
                  '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                "zoom-in":
                  '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                "zoom-out":
                  '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
              }
            },
            "./node_modules/classnames/dedupe.js": function (e, o, n) {
              var l
              !(function () {
                "use strict"
                var n = (function () {
                  function e() {}
                  function o(e, o) {
                    for (var n = o.length, l = 0; l < n; ++l) i(e, o[l])
                  }
                  e.prototype = Object.create(null)
                  var n = {}.hasOwnProperty
                  var l = /\s+/
                  function i(e, i) {
                    if (i) {
                      var t = typeof i
                      "string" === t
                        ? (function (e, o) {
                            for (
                              var n = o.split(l), i = n.length, t = 0;
                              t < i;
                              ++t
                            )
                              e[n[t]] = !0
                          })(e, i)
                        : Array.isArray(i)
                        ? o(e, i)
                        : "object" === t
                        ? (function (e, o) {
                            for (var l in o) n.call(o, l) && (e[l] = !!o[l])
                          })(e, i)
                        : "number" === t &&
                          (function (e, o) {
                            e[o] = !0
                          })(e, i)
                    }
                  }
                  return function () {
                    for (
                      var n = arguments.length, l = Array(n), i = 0;
                      i < n;
                      i++
                    )
                      l[i] = arguments[i]
                    var t = new e()
                    o(t, l)
                    var r = []
                    for (var c in t) t[c] && r.push(c)
                    return r.join(" ")
                  }
                })()
                void 0 !== e && e.exports
                  ? (e.exports = n)
                  : void 0 ===
                      (l = function () {
                        return n
                      }.apply(o, [])) || (e.exports = l)
              })()
            },
            "./node_modules/core-js/fn/array/from.js": function (e, o, n) {
              n("./node_modules/core-js/modules/es6.string.iterator.js"),
                n("./node_modules/core-js/modules/es6.array.from.js"),
                (e.exports = n(
                  "./node_modules/core-js/modules/_core.js"
                ).Array.from)
            },
            "./node_modules/core-js/modules/_a-function.js": function (e, o) {
              e.exports = function (e) {
                if ("function" != typeof e)
                  throw TypeError(e + " is not a function!")
                return e
              }
            },
            "./node_modules/core-js/modules/_an-object.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_is-object.js")
              e.exports = function (e) {
                if (!l(e)) throw TypeError(e + " is not an object!")
                return e
              }
            },
            "./node_modules/core-js/modules/_array-includes.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_to-iobject.js"),
                i = n("./node_modules/core-js/modules/_to-length.js"),
                t = n("./node_modules/core-js/modules/_to-absolute-index.js")
              e.exports = function (e) {
                return function (o, n, r) {
                  var c,
                    a = l(o),
                    s = i(a.length),
                    y = t(r, s)
                  if (e && n != n) {
                    for (; s > y; ) if ((c = a[y++]) != c) return !0
                  } else
                    for (; s > y; y++)
                      if ((e || y in a) && a[y] === n) return e || y || 0
                  return !e && -1
                }
              }
            },
            "./node_modules/core-js/modules/_classof.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_cof.js"),
                i = n("./node_modules/core-js/modules/_wks.js")("toStringTag"),
                t =
                  "Arguments" ==
                  l(
                    (function () {
                      return arguments
                    })()
                  )
              e.exports = function (e) {
                var o, n, r
                return void 0 === e
                  ? "Undefined"
                  : null === e
                  ? "Null"
                  : "string" ==
                    typeof (n = (function (e, o) {
                      try {
                        return e[o]
                      } catch (e) {}
                    })((o = Object(e)), i))
                  ? n
                  : t
                  ? l(o)
                  : "Object" == (r = l(o)) && "function" == typeof o.callee
                  ? "Arguments"
                  : r
              }
            },
            "./node_modules/core-js/modules/_cof.js": function (e, o) {
              var n = {}.toString
              e.exports = function (e) {
                return n.call(e).slice(8, -1)
              }
            },
            "./node_modules/core-js/modules/_core.js": function (e, o) {
              var n = (e.exports = { version: "2.5.3" })
              "number" == typeof __e && (__e = n)
            },
            "./node_modules/core-js/modules/_create-property.js": function (
              e,
              o,
              n
            ) {
              "use strict"
              var l = n("./node_modules/core-js/modules/_object-dp.js"),
                i = n("./node_modules/core-js/modules/_property-desc.js")
              e.exports = function (e, o, n) {
                o in e ? l.f(e, o, i(0, n)) : (e[o] = n)
              }
            },
            "./node_modules/core-js/modules/_ctx.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_a-function.js")
              e.exports = function (e, o, n) {
                if ((l(e), void 0 === o)) return e
                switch (n) {
                  case 1:
                    return function (n) {
                      return e.call(o, n)
                    }
                  case 2:
                    return function (n, l) {
                      return e.call(o, n, l)
                    }
                  case 3:
                    return function (n, l, i) {
                      return e.call(o, n, l, i)
                    }
                }
                return function () {
                  return e.apply(o, arguments)
                }
              }
            },
            "./node_modules/core-js/modules/_defined.js": function (e, o) {
              e.exports = function (e) {
                if (void 0 == e) throw TypeError("Can't call method on  " + e)
                return e
              }
            },
            "./node_modules/core-js/modules/_descriptors.js": function (
              e,
              o,
              n
            ) {
              e.exports = !n("./node_modules/core-js/modules/_fails.js")(
                function () {
                  return (
                    7 !=
                    Object.defineProperty({}, "a", {
                      get: function () {
                        return 7
                      },
                    }).a
                  )
                }
              )
            },
            "./node_modules/core-js/modules/_dom-create.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_is-object.js"),
                i = n("./node_modules/core-js/modules/_global.js").document,
                t = l(i) && l(i.createElement)
              e.exports = function (e) {
                return t ? i.createElement(e) : {}
              }
            },
            "./node_modules/core-js/modules/_enum-bug-keys.js": function (
              e,
              o
            ) {
              e.exports =
                "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
                  ","
                )
            },
            "./node_modules/core-js/modules/_export.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_global.js"),
                i = n("./node_modules/core-js/modules/_core.js"),
                t = n("./node_modules/core-js/modules/_hide.js"),
                r = n("./node_modules/core-js/modules/_redefine.js"),
                c = n("./node_modules/core-js/modules/_ctx.js"),
                a = function (e, o, n) {
                  var s,
                    y,
                    p,
                    d,
                    u = e & a.F,
                    h = e & a.G,
                    x = e & a.S,
                    m = e & a.P,
                    f = e & a.B,
                    j = h
                      ? l
                      : x
                      ? l[o] || (l[o] = {})
                      : (l[o] || {}).prototype,
                    g = h ? i : i[o] || (i[o] = {}),
                    _ = g.prototype || (g.prototype = {})
                  for (s in (h && (n = o), n))
                    (p = ((y = !u && j && void 0 !== j[s]) ? j : n)[s]),
                      (d =
                        f && y
                          ? c(p, l)
                          : m && "function" == typeof p
                          ? c(Function.call, p)
                          : p),
                      j && r(j, s, p, e & a.U),
                      g[s] != p && t(g, s, d),
                      m && _[s] != p && (_[s] = p)
                }
              ;(l.core = i),
                (a.F = 1),
                (a.G = 2),
                (a.S = 4),
                (a.P = 8),
                (a.B = 16),
                (a.W = 32),
                (a.U = 64),
                (a.R = 128),
                (e.exports = a)
            },
            "./node_modules/core-js/modules/_fails.js": function (e, o) {
              e.exports = function (e) {
                try {
                  return !!e()
                } catch (e) {
                  return !0
                }
              }
            },
            "./node_modules/core-js/modules/_global.js": function (e, o) {
              var n = (e.exports =
                "undefined" != typeof window && window.Math == Math
                  ? window
                  : "undefined" != typeof self && self.Math == Math
                  ? self
                  : Function("return this")())
              "number" == typeof __g && (__g = n)
            },
            "./node_modules/core-js/modules/_has.js": function (e, o) {
              var n = {}.hasOwnProperty
              e.exports = function (e, o) {
                return n.call(e, o)
              }
            },
            "./node_modules/core-js/modules/_hide.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_object-dp.js"),
                i = n("./node_modules/core-js/modules/_property-desc.js")
              e.exports = n("./node_modules/core-js/modules/_descriptors.js")
                ? function (e, o, n) {
                    return l.f(e, o, i(1, n))
                  }
                : function (e, o, n) {
                    return (e[o] = n), e
                  }
            },
            "./node_modules/core-js/modules/_html.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_global.js").document
              e.exports = l && l.documentElement
            },
            "./node_modules/core-js/modules/_ie8-dom-define.js": function (
              e,
              o,
              n
            ) {
              e.exports =
                !n("./node_modules/core-js/modules/_descriptors.js") &&
                !n("./node_modules/core-js/modules/_fails.js")(function () {
                  return (
                    7 !=
                    Object.defineProperty(
                      n("./node_modules/core-js/modules/_dom-create.js")("div"),
                      "a",
                      {
                        get: function () {
                          return 7
                        },
                      }
                    ).a
                  )
                })
            },
            "./node_modules/core-js/modules/_iobject.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_cof.js")
              e.exports = Object("z").propertyIsEnumerable(0)
                ? Object
                : function (e) {
                    return "String" == l(e) ? e.split("") : Object(e)
                  }
            },
            "./node_modules/core-js/modules/_is-array-iter.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_iterators.js"),
                i = n("./node_modules/core-js/modules/_wks.js")("iterator"),
                t = Array.prototype
              e.exports = function (e) {
                return void 0 !== e && (l.Array === e || t[i] === e)
              }
            },
            "./node_modules/core-js/modules/_is-object.js": function (e, o) {
              e.exports = function (e) {
                return "object" == typeof e
                  ? null !== e
                  : "function" == typeof e
              }
            },
            "./node_modules/core-js/modules/_iter-call.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_an-object.js")
              e.exports = function (e, o, n, i) {
                try {
                  return i ? o(l(n)[0], n[1]) : o(n)
                } catch (o) {
                  var t = e.return
                  throw (void 0 !== t && l(t.call(e)), o)
                }
              }
            },
            "./node_modules/core-js/modules/_iter-create.js": function (
              e,
              o,
              n
            ) {
              "use strict"
              var l = n("./node_modules/core-js/modules/_object-create.js"),
                i = n("./node_modules/core-js/modules/_property-desc.js"),
                t = n("./node_modules/core-js/modules/_set-to-string-tag.js"),
                r = {}
              n("./node_modules/core-js/modules/_hide.js")(
                r,
                n("./node_modules/core-js/modules/_wks.js")("iterator"),
                function () {
                  return this
                }
              ),
                (e.exports = function (e, o, n) {
                  ;(e.prototype = l(r, { next: i(1, n) })),
                    t(e, o + " Iterator")
                })
            },
            "./node_modules/core-js/modules/_iter-define.js": function (
              e,
              o,
              n
            ) {
              "use strict"
              var l = n("./node_modules/core-js/modules/_library.js"),
                i = n("./node_modules/core-js/modules/_export.js"),
                t = n("./node_modules/core-js/modules/_redefine.js"),
                r = n("./node_modules/core-js/modules/_hide.js"),
                c = n("./node_modules/core-js/modules/_has.js"),
                a = n("./node_modules/core-js/modules/_iterators.js"),
                s = n("./node_modules/core-js/modules/_iter-create.js"),
                y = n("./node_modules/core-js/modules/_set-to-string-tag.js"),
                p = n("./node_modules/core-js/modules/_object-gpo.js"),
                d = n("./node_modules/core-js/modules/_wks.js")("iterator"),
                u = !([].keys && "next" in [].keys()),
                h = function () {
                  return this
                }
              e.exports = function (e, o, n, x, m, f, j) {
                s(n, o, x)
                var g,
                  _,
                  v,
                  M = function (e) {
                    if (!u && e in z) return z[e]
                    switch (e) {
                      case "keys":
                      case "values":
                        return function () {
                          return new n(this, e)
                        }
                    }
                    return function () {
                      return new n(this, e)
                    }
                  },
                  w = o + " Iterator",
                  b = "values" == m,
                  k = !1,
                  z = e.prototype,
                  A = z[d] || z["@@iterator"] || (m && z[m]),
                  H = (!u && A) || M(m),
                  V = m ? (b ? M("entries") : H) : void 0,
                  O = ("Array" == o && z.entries) || A
                if (
                  (O &&
                    (v = p(O.call(new e()))) !== Object.prototype &&
                    v.next &&
                    (y(v, w, !0), l || c(v, d) || r(v, d, h)),
                  b &&
                    A &&
                    "values" !== A.name &&
                    ((k = !0),
                    (H = function () {
                      return A.call(this)
                    })),
                  (l && !j) || (!u && !k && z[d]) || r(z, d, H),
                  (a[o] = H),
                  (a[w] = h),
                  m)
                )
                  if (
                    ((g = {
                      values: b ? H : M("values"),
                      keys: f ? H : M("keys"),
                      entries: V,
                    }),
                    j)
                  )
                    for (_ in g) _ in z || t(z, _, g[_])
                  else i(i.P + i.F * (u || k), o, g)
                return g
              }
            },
            "./node_modules/core-js/modules/_iter-detect.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_wks.js")("iterator"),
                i = !1
              try {
                var t = [7][l]()
                ;(t.return = function () {
                  i = !0
                }),
                  Array.from(t, function () {
                    throw 2
                  })
              } catch (e) {}
              e.exports = function (e, o) {
                if (!o && !i) return !1
                var n = !1
                try {
                  var t = [7],
                    r = t[l]()
                  ;(r.next = function () {
                    return { done: (n = !0) }
                  }),
                    (t[l] = function () {
                      return r
                    }),
                    e(t)
                } catch (e) {}
                return n
              }
            },
            "./node_modules/core-js/modules/_iterators.js": function (e, o) {
              e.exports = {}
            },
            "./node_modules/core-js/modules/_library.js": function (e, o) {
              e.exports = !1
            },
            "./node_modules/core-js/modules/_object-create.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_an-object.js"),
                i = n("./node_modules/core-js/modules/_object-dps.js"),
                t = n("./node_modules/core-js/modules/_enum-bug-keys.js"),
                r = n("./node_modules/core-js/modules/_shared-key.js")(
                  "IE_PROTO"
                ),
                c = function () {},
                a = function () {
                  var e,
                    o = n("./node_modules/core-js/modules/_dom-create.js")(
                      "iframe"
                    ),
                    l = t.length
                  for (
                    o.style.display = "none",
                      n("./node_modules/core-js/modules/_html.js").appendChild(
                        o
                      ),
                      o.src = "javascript:",
                      (e = o.contentWindow.document).open(),
                      e.write("<script>document.F=Object</script>"),
                      e.close(),
                      a = e.F;
                    l--;

                  )
                    delete a.prototype[t[l]]
                  return a()
                }
              e.exports =
                Object.create ||
                function (e, o) {
                  var n
                  return (
                    null !== e
                      ? ((c.prototype = l(e)),
                        (n = new c()),
                        (c.prototype = null),
                        (n[r] = e))
                      : (n = a()),
                    void 0 === o ? n : i(n, o)
                  )
                }
            },
            "./node_modules/core-js/modules/_object-dp.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_an-object.js"),
                i = n("./node_modules/core-js/modules/_ie8-dom-define.js"),
                t = n("./node_modules/core-js/modules/_to-primitive.js"),
                r = Object.defineProperty
              o.f = n("./node_modules/core-js/modules/_descriptors.js")
                ? Object.defineProperty
                : function (e, o, n) {
                    if ((l(e), (o = t(o, !0)), l(n), i))
                      try {
                        return r(e, o, n)
                      } catch (e) {}
                    if ("get" in n || "set" in n)
                      throw TypeError("Accessors not supported!")
                    return "value" in n && (e[o] = n.value), e
                  }
            },
            "./node_modules/core-js/modules/_object-dps.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_object-dp.js"),
                i = n("./node_modules/core-js/modules/_an-object.js"),
                t = n("./node_modules/core-js/modules/_object-keys.js")
              e.exports = n("./node_modules/core-js/modules/_descriptors.js")
                ? Object.defineProperties
                : function (e, o) {
                    i(e)
                    for (var n, r = t(o), c = r.length, a = 0; c > a; )
                      l.f(e, (n = r[a++]), o[n])
                    return e
                  }
            },
            "./node_modules/core-js/modules/_object-gpo.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_has.js"),
                i = n("./node_modules/core-js/modules/_to-object.js"),
                t = n("./node_modules/core-js/modules/_shared-key.js")(
                  "IE_PROTO"
                ),
                r = Object.prototype
              e.exports =
                Object.getPrototypeOf ||
                function (e) {
                  return (
                    (e = i(e)),
                    l(e, t)
                      ? e[t]
                      : "function" == typeof e.constructor &&
                        e instanceof e.constructor
                      ? e.constructor.prototype
                      : e instanceof Object
                      ? r
                      : null
                  )
                }
            },
            "./node_modules/core-js/modules/_object-keys-internal.js":
              function (e, o, n) {
                var l = n("./node_modules/core-js/modules/_has.js"),
                  i = n("./node_modules/core-js/modules/_to-iobject.js"),
                  t = n("./node_modules/core-js/modules/_array-includes.js")(
                    !1
                  ),
                  r = n("./node_modules/core-js/modules/_shared-key.js")(
                    "IE_PROTO"
                  )
                e.exports = function (e, o) {
                  var n,
                    c = i(e),
                    a = 0,
                    s = []
                  for (n in c) n != r && l(c, n) && s.push(n)
                  for (; o.length > a; )
                    l(c, (n = o[a++])) && (~t(s, n) || s.push(n))
                  return s
                }
              },
            "./node_modules/core-js/modules/_object-keys.js": function (
              e,
              o,
              n
            ) {
              var l = n(
                  "./node_modules/core-js/modules/_object-keys-internal.js"
                ),
                i = n("./node_modules/core-js/modules/_enum-bug-keys.js")
              e.exports =
                Object.keys ||
                function (e) {
                  return l(e, i)
                }
            },
            "./node_modules/core-js/modules/_property-desc.js": function (
              e,
              o
            ) {
              e.exports = function (e, o) {
                return {
                  enumerable: !(1 & e),
                  configurable: !(2 & e),
                  writable: !(4 & e),
                  value: o,
                }
              }
            },
            "./node_modules/core-js/modules/_redefine.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_global.js"),
                i = n("./node_modules/core-js/modules/_hide.js"),
                t = n("./node_modules/core-js/modules/_has.js"),
                r = n("./node_modules/core-js/modules/_uid.js")("src"),
                c = Function.toString,
                a = ("" + c).split("toString")
              ;(n("./node_modules/core-js/modules/_core.js").inspectSource =
                function (e) {
                  return c.call(e)
                }),
                (e.exports = function (e, o, n, c) {
                  var s = "function" == typeof n
                  s && (t(n, "name") || i(n, "name", o)),
                    e[o] !== n &&
                      (s &&
                        (t(n, r) ||
                          i(n, r, e[o] ? "" + e[o] : a.join(String(o)))),
                      e === l
                        ? (e[o] = n)
                        : c
                        ? e[o]
                          ? (e[o] = n)
                          : i(e, o, n)
                        : (delete e[o], i(e, o, n)))
                })(Function.prototype, "toString", function () {
                  return ("function" == typeof this && this[r]) || c.call(this)
                })
            },
            "./node_modules/core-js/modules/_set-to-string-tag.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_object-dp.js").f,
                i = n("./node_modules/core-js/modules/_has.js"),
                t = n("./node_modules/core-js/modules/_wks.js")("toStringTag")
              e.exports = function (e, o, n) {
                e &&
                  !i((e = n ? e : e.prototype), t) &&
                  l(e, t, { configurable: !0, value: o })
              }
            },
            "./node_modules/core-js/modules/_shared-key.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_shared.js")("keys"),
                i = n("./node_modules/core-js/modules/_uid.js")
              e.exports = function (e) {
                return l[e] || (l[e] = i(e))
              }
            },
            "./node_modules/core-js/modules/_shared.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_global.js"),
                i = l["__core-js_shared__"] || (l["__core-js_shared__"] = {})
              e.exports = function (e) {
                return i[e] || (i[e] = {})
              }
            },
            "./node_modules/core-js/modules/_string-at.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_to-integer.js"),
                i = n("./node_modules/core-js/modules/_defined.js")
              e.exports = function (e) {
                return function (o, n) {
                  var t,
                    r,
                    c = String(i(o)),
                    a = l(n),
                    s = c.length
                  return a < 0 || a >= s
                    ? e
                      ? ""
                      : void 0
                    : (t = c.charCodeAt(a)) < 55296 ||
                      t > 56319 ||
                      a + 1 === s ||
                      (r = c.charCodeAt(a + 1)) < 56320 ||
                      r > 57343
                    ? e
                      ? c.charAt(a)
                      : t
                    : e
                    ? c.slice(a, a + 2)
                    : r - 56320 + ((t - 55296) << 10) + 65536
                }
              }
            },
            "./node_modules/core-js/modules/_to-absolute-index.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_to-integer.js"),
                i = Math.max,
                t = Math.min
              e.exports = function (e, o) {
                return (e = l(e)) < 0 ? i(e + o, 0) : t(e, o)
              }
            },
            "./node_modules/core-js/modules/_to-integer.js": function (e, o) {
              var n = Math.ceil,
                l = Math.floor
              e.exports = function (e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? l : n)(e)
              }
            },
            "./node_modules/core-js/modules/_to-iobject.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_iobject.js"),
                i = n("./node_modules/core-js/modules/_defined.js")
              e.exports = function (e) {
                return l(i(e))
              }
            },
            "./node_modules/core-js/modules/_to-length.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_to-integer.js"),
                i = Math.min
              e.exports = function (e) {
                return e > 0 ? i(l(e), 9007199254740991) : 0
              }
            },
            "./node_modules/core-js/modules/_to-object.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_defined.js")
              e.exports = function (e) {
                return Object(l(e))
              }
            },
            "./node_modules/core-js/modules/_to-primitive.js": function (
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_is-object.js")
              e.exports = function (e, o) {
                if (!l(e)) return e
                var n, i
                if (
                  o &&
                  "function" == typeof (n = e.toString) &&
                  !l((i = n.call(e)))
                )
                  return i
                if ("function" == typeof (n = e.valueOf) && !l((i = n.call(e))))
                  return i
                if (
                  !o &&
                  "function" == typeof (n = e.toString) &&
                  !l((i = n.call(e)))
                )
                  return i
                throw TypeError("Can't convert object to primitive value")
              }
            },
            "./node_modules/core-js/modules/_uid.js": function (e, o) {
              var n = 0,
                l = Math.random()
              e.exports = function (e) {
                return "Symbol(".concat(
                  void 0 === e ? "" : e,
                  ")_",
                  (++n + l).toString(36)
                )
              }
            },
            "./node_modules/core-js/modules/_wks.js": function (e, o, n) {
              var l = n("./node_modules/core-js/modules/_shared.js")("wks"),
                i = n("./node_modules/core-js/modules/_uid.js"),
                t = n("./node_modules/core-js/modules/_global.js").Symbol,
                r = "function" == typeof t
              ;(e.exports = function (e) {
                return (
                  l[e] || (l[e] = (r && t[e]) || (r ? t : i)("Symbol." + e))
                )
              }).store = l
            },
            "./node_modules/core-js/modules/core.get-iterator-method.js":
              function (e, o, n) {
                var l = n("./node_modules/core-js/modules/_classof.js"),
                  i = n("./node_modules/core-js/modules/_wks.js")("iterator"),
                  t = n("./node_modules/core-js/modules/_iterators.js")
                e.exports = n(
                  "./node_modules/core-js/modules/_core.js"
                ).getIteratorMethod = function (e) {
                  if (void 0 != e) return e[i] || e["@@iterator"] || t[l(e)]
                }
              },
            "./node_modules/core-js/modules/es6.array.from.js": function (
              e,
              o,
              n
            ) {
              "use strict"
              var l = n("./node_modules/core-js/modules/_ctx.js"),
                i = n("./node_modules/core-js/modules/_export.js"),
                t = n("./node_modules/core-js/modules/_to-object.js"),
                r = n("./node_modules/core-js/modules/_iter-call.js"),
                c = n("./node_modules/core-js/modules/_is-array-iter.js"),
                a = n("./node_modules/core-js/modules/_to-length.js"),
                s = n("./node_modules/core-js/modules/_create-property.js"),
                y = n(
                  "./node_modules/core-js/modules/core.get-iterator-method.js"
                )
              i(
                i.S +
                  i.F *
                    !n("./node_modules/core-js/modules/_iter-detect.js")(
                      function (e) {
                        Array.from(e)
                      }
                    ),
                "Array",
                {
                  from: function (e) {
                    var o,
                      n,
                      i,
                      p,
                      d = t(e),
                      u = "function" == typeof this ? this : Array,
                      h = arguments.length,
                      x = h > 1 ? arguments[1] : void 0,
                      m = void 0 !== x,
                      f = 0,
                      j = y(d)
                    if (
                      (m && (x = l(x, h > 2 ? arguments[2] : void 0, 2)),
                      void 0 == j || (u == Array && c(j)))
                    )
                      for (n = new u((o = a(d.length))); o > f; f++)
                        s(n, f, m ? x(d[f], f) : d[f])
                    else
                      for (
                        p = j.call(d), n = new u();
                        !(i = p.next()).done;
                        f++
                      )
                        s(n, f, m ? r(p, x, [i.value, f], !0) : i.value)
                    return (n.length = f), n
                  },
                }
              )
            },
            "./node_modules/core-js/modules/es6.string.iterator.js": function (
              e,
              o,
              n
            ) {
              "use strict"
              var l = n("./node_modules/core-js/modules/_string-at.js")(!0)
              n("./node_modules/core-js/modules/_iter-define.js")(
                String,
                "String",
                function (e) {
                  ;(this._t = String(e)), (this._i = 0)
                },
                function () {
                  var e,
                    o = this._t,
                    n = this._i
                  return n >= o.length
                    ? { value: void 0, done: !0 }
                    : ((e = l(o, n)),
                      (this._i += e.length),
                      { value: e, done: !1 })
                }
              )
            },
            "./src/default-attrs.json": function (e) {
              e.exports = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }
            },
            "./src/icon.js": function (e, o, n) {
              "use strict"
              Object.defineProperty(o, "__esModule", { value: !0 })
              var l =
                  Object.assign ||
                  function (e) {
                    for (var o = 1; o < arguments.length; o++) {
                      var n = arguments[o]
                      for (var l in n)
                        Object.prototype.hasOwnProperty.call(n, l) &&
                          (e[l] = n[l])
                    }
                    return e
                  },
                i = (function () {
                  function e(e, o) {
                    for (var n = 0; n < o.length; n++) {
                      var l = o[n]
                      ;(l.enumerable = l.enumerable || !1),
                        (l.configurable = !0),
                        "value" in l && (l.writable = !0),
                        Object.defineProperty(e, l.key, l)
                    }
                  }
                  return function (o, n, l) {
                    return n && e(o.prototype, n), l && e(o, l), o
                  }
                })(),
                t = c(n("./node_modules/classnames/dedupe.js")),
                r = c(n("./src/default-attrs.json"))
              function c(e) {
                return e && e.__esModule ? e : { default: e }
              }
              var a = (function () {
                function e(o, n) {
                  var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : []
                  !(function (e, o) {
                    if (!(e instanceof o))
                      throw new TypeError("Cannot call a class as a function")
                  })(this, e),
                    (this.name = o),
                    (this.contents = n),
                    (this.tags = i),
                    (this.attrs = l({}, r.default, {
                      class: "feather feather-" + o,
                    }))
                }
                return (
                  i(e, [
                    {
                      key: "toSvg",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {}
                        return (
                          "<svg " +
                          (function (e) {
                            return Object.keys(e)
                              .map(function (o) {
                                return o + '="' + e[o] + '"'
                              })
                              .join(" ")
                          })(
                            l({}, this.attrs, e, {
                              class: (0, t.default)(this.attrs.class, e.class),
                            })
                          ) +
                          ">" +
                          this.contents +
                          "</svg>"
                        )
                      },
                    },
                    {
                      key: "toString",
                      value: function () {
                        return this.contents
                      },
                    },
                  ]),
                  e
                )
              })()
              o.default = a
            },
            "./src/icons.js": function (e, o, n) {
              "use strict"
              Object.defineProperty(o, "__esModule", { value: !0 })
              var l = r(n("./src/icon.js")),
                i = r(n("./dist/icons.json")),
                t = r(n("./src/tags.json"))
              function r(e) {
                return e && e.__esModule ? e : { default: e }
              }
              o.default = Object.keys(i.default)
                .map(function (e) {
                  return new l.default(e, i.default[e], t.default[e])
                })
                .reduce(function (e, o) {
                  return (e[o.name] = o), e
                }, {})
            },
            "./src/index.js": function (e, o, n) {
              "use strict"
              var l = r(n("./src/icons.js")),
                i = r(n("./src/to-svg.js")),
                t = r(n("./src/replace.js"))
              function r(e) {
                return e && e.__esModule ? e : { default: e }
              }
              e.exports = {
                icons: l.default,
                toSvg: i.default,
                replace: t.default,
              }
            },
            "./src/replace.js": function (e, o, n) {
              "use strict"
              Object.defineProperty(o, "__esModule", { value: !0 })
              var l =
                  Object.assign ||
                  function (e) {
                    for (var o = 1; o < arguments.length; o++) {
                      var n = arguments[o]
                      for (var l in n)
                        Object.prototype.hasOwnProperty.call(n, l) &&
                          (e[l] = n[l])
                    }
                    return e
                  },
                i = r(n("./node_modules/classnames/dedupe.js")),
                t = r(n("./src/icons.js"))
              function r(e) {
                return e && e.__esModule ? e : { default: e }
              }
              o.default = function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                if ("undefined" == typeof document)
                  throw new Error(
                    "`feather.replace()` only works in a browser environment."
                  )
                var o = document.querySelectorAll("[data-feather]")
                Array.from(o).forEach(function (o) {
                  return (function (e) {
                    var o =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = (function (e) {
                        return Array.from(e.attributes).reduce(function (e, o) {
                          return (e[o.name] = o.value), e
                        }, {})
                      })(e),
                      r = n["data-feather"]
                    delete n["data-feather"]
                    var c = t.default[r].toSvg(
                        l({}, o, n, { class: (0, i.default)(o.class, n.class) })
                      ),
                      a = new DOMParser()
                        .parseFromString(c, "image/svg+xml")
                        .querySelector("svg")
                    e.parentNode.replaceChild(a, e)
                  })(o, e)
                })
              }
            },
            "./src/tags.json": function (e) {
              e.exports = {
                activity: ["pulse", "health", "action", "motion"],
                airplay: ["stream", "cast", "mirroring"],
                "alert-circle": ["warning"],
                "alert-octagon": ["warning"],
                "alert-triangle": ["warning"],
                "at-sign": ["mention"],
                award: ["achievement", "badge"],
                aperture: ["camera", "photo"],
                bell: ["alarm", "notification"],
                "bell-off": ["alarm", "notification", "silent"],
                bluetooth: ["wireless"],
                "book-open": ["read"],
                book: ["read", "dictionary", "booklet", "magazine"],
                bookmark: ["read", "clip", "marker", "tag"],
                briefcase: ["work", "bag", "baggage", "folder"],
                clipboard: ["copy"],
                clock: ["time", "watch", "alarm"],
                "cloud-drizzle": ["weather", "shower"],
                "cloud-lightning": ["weather", "bolt"],
                "cloud-rain": ["weather"],
                "cloud-snow": ["weather", "blizzard"],
                cloud: ["weather"],
                codepen: ["logo"],
                command: ["keyboard", "cmd"],
                compass: ["navigation", "safari", "travel"],
                copy: ["clone", "duplicate"],
                "corner-down-left": ["arrow"],
                "corner-down-right": ["arrow"],
                "corner-left-down": ["arrow"],
                "corner-left-up": ["arrow"],
                "corner-right-down": ["arrow"],
                "corner-right-up": ["arrow"],
                "corner-up-left": ["arrow"],
                "corner-up-right": ["arrow"],
                "credit-card": ["purchase", "payment", "cc"],
                crop: ["photo", "image"],
                crosshair: ["aim", "target"],
                database: ["storage"],
                delete: ["remove"],
                disc: ["album", "cd", "dvd", "music"],
                "dollar-sign": ["currency", "money", "payment"],
                droplet: ["water"],
                edit: ["pencil", "change"],
                "edit-2": ["pencil", "change"],
                "edit-3": ["pencil", "change"],
                eye: ["view", "watch"],
                "eye-off": ["view", "watch"],
                "external-link": ["outbound"],
                facebook: ["logo"],
                "fast-forward": ["music"],
                film: ["movie", "video"],
                "folder-minus": ["directory"],
                "folder-plus": ["directory"],
                folder: ["directory"],
                gift: ["present", "box", "birthday", "party"],
                "git-branch": ["code", "version control"],
                "git-commit": ["code", "version control"],
                "git-merge": ["code", "version control"],
                "git-pull-request": ["code", "version control"],
                github: ["logo", "version control"],
                gitlab: ["logo", "version control"],
                global: ["world", "browser", "language", "translate"],
                "hard-drive": ["computer", "server"],
                hash: ["hashtag", "number", "pound"],
                headphones: ["music", "audio"],
                heart: ["like", "love"],
                "help-circle": ["question mark"],
                home: ["house"],
                image: ["picture"],
                inbox: ["email"],
                instagram: ["logo", "camera"],
                "life-bouy": ["help", "life ring", "support"],
                linkedin: ["logo"],
                lock: ["security", "password"],
                "log-in": ["sign in", "arrow"],
                "log-out": ["sign out", "arrow"],
                mail: ["email"],
                "map-pin": ["location", "navigation", "travel", "marker"],
                map: ["location", "navigation", "travel"],
                maximize: ["fullscreen"],
                "maximize-2": ["fullscreen", "arrows"],
                menu: ["bars", "navigation", "hamburger"],
                "message-circle": ["comment", "chat"],
                "message-square": ["comment", "chat"],
                "mic-off": ["record"],
                mic: ["record"],
                minimize: ["exit fullscreen"],
                "minimize-2": ["exit fullscreen", "arrows"],
                monitor: ["tv"],
                moon: ["dark", "night"],
                "more-horizontal": ["ellipsis"],
                "more-vertical": ["ellipsis"],
                move: ["arrows"],
                navigation: ["location", "travel"],
                "navigation-2": ["location", "travel"],
                octagon: ["stop"],
                package: ["box"],
                paperclip: ["attachment"],
                pause: ["music", "stop"],
                "pause-circle": ["music", "stop"],
                play: ["music", "start"],
                "play-circle": ["music", "start"],
                plus: ["add", "new"],
                "plus-circle": ["add", "new"],
                "plus-square": ["add", "new"],
                pocket: ["logo", "save"],
                power: ["on", "off"],
                radio: ["signal"],
                rewind: ["music"],
                rss: ["feed", "subscribe"],
                save: ["floppy disk"],
                send: ["message", "mail", "paper airplane"],
                settings: ["cog", "edit", "gear", "preferences"],
                shield: ["security"],
                "shield-off": ["security"],
                "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
                "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
                shuffle: ["music"],
                "skip-back": ["music"],
                "skip-forward": ["music"],
                slash: ["ban", "no"],
                sliders: ["settings", "controls"],
                speaker: ["music"],
                star: ["bookmark", "favorite", "like"],
                sun: ["brightness", "weather", "light"],
                sunrise: ["weather"],
                sunset: ["weather"],
                tag: ["label"],
                target: ["bullseye"],
                terminal: ["code", "command line"],
                "thumbs-down": ["dislike", "bad"],
                "thumbs-up": ["like", "good"],
                "toggle-left": ["on", "off", "switch"],
                "toggle-right": ["on", "off", "switch"],
                trash: ["garbage", "delete", "remove"],
                "trash-2": ["garbage", "delete", "remove"],
                triangle: ["delta"],
                truck: ["delivery", "van", "shipping"],
                twitter: ["logo"],
                umbrella: ["rain", "weather"],
                "video-off": ["camera", "movie", "film"],
                video: ["camera", "movie", "film"],
                voicemail: ["phone"],
                volume: ["music", "sound", "mute"],
                "volume-1": ["music", "sound"],
                "volume-2": ["music", "sound"],
                "volume-x": ["music", "sound", "mute"],
                watch: ["clock", "time"],
                wind: ["weather", "air"],
                "x-circle": ["cancel", "close", "delete", "remove", "times"],
                "x-square": ["cancel", "close", "delete", "remove", "times"],
                x: ["cancel", "close", "delete", "remove", "times"],
                youtube: ["logo", "video", "play"],
                "zap-off": ["flash", "camera", "lightning"],
                zap: ["flash", "camera", "lightning"],
              }
            },
            "./src/to-svg.js": function (e, o, n) {
              "use strict"
              Object.defineProperty(o, "__esModule", { value: !0 })
              var l,
                i = n("./src/icons.js"),
                t = (l = i) && l.__esModule ? l : { default: l }
              o.default = function (e) {
                var o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {}
                if (
                  (console.warn(
                    "feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."
                  ),
                  !e)
                )
                  throw new Error(
                    "The required `key` (icon name) parameter is missing."
                  )
                if (!t.default[e])
                  throw new Error(
                    "No icon matching '" +
                      e +
                      "'. See the complete list of icons at https://feathericons.com"
                  )
                return t.default[e].toSvg(o)
              }
            },
            0: function (e, o, n) {
              n("./node_modules/core-js/fn/array/from.js"),
                (e.exports = n("./src/index.js"))
            },
          })
        })
      },
      {},
    ],
    21: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp"),
          r = require("feather-icons"),
          n = t(r)
        function t(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function u(e, r) {
          var n = {}
          for (var t in e)
            r.indexOf(t) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]))
          return n
        }
        var o = function (e) {
            return function (r) {
              r.innerHTML = e
            }
          },
          a = function (e) {
            var r = e.name,
              t = u(e, ["name"])
            return n.default.icons[r].toSvg(t)
          }
        exports.default = function (r) {
          return (0, e.h)("i", { oncreate: o(a(r)) })
        }
      },
      { hyperapp: 9, "feather-icons": 27 },
    ],
    13: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp"),
          o = require("../utils"),
          t = require("./Icon"),
          r = u(t)
        function u(e) {
          return e && e.__esModule ? e : { default: e }
        }
        exports.default = function () {
          return function (t, u) {
            return (0, e.h)(
              "button",
              {
                class: (0, o.cc)("BackToTopButton", {
                  "is-visible": t.isBackToTopButtonVisible,
                }),
                onclick: u.scrollBackToTop,
              },
              (0, e.h)(r.default, {
                name: "arrow-up",
                class: "BackToTopButton__icon",
              })
            )
          }
        }
      },
      { hyperapp: 9, "../utils": 12, "./Icon": 21 },
    ],
    15: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp"),
          r = require("./Icon"),
          t = a(r)
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        exports.default = function () {
          return (0, e.h)(
            "div",
            null,
            (0, e.h)("header", { class: "Header" }),
            (0, e.h)(
              "div",
              { class: "Header__lower" },
              (0, e.h)(
                "a",
                {
                  class: "btn Header__github",
                  href: "https://github.com/fejes713/30-seconds-of-interviews",
                  target: "_blank",
                  rel: "noopener",
                },
                (0, e.h)(t.default, {
                  class: "Header__github-star",
                  name: "star",
                }),
                "Star on GitHub"
              )
            )
          )
        }
      },
      { hyperapp: 9, "./Icon": 21 },
    ],
    26: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var r = require("hyperapp"),
          e = require("../utils"),
          t = require("./Icon"),
          n = o(t)
        function o(r) {
          return r && r.__esModule ? r : { default: r }
        }
        function a(r) {
          if (Array.isArray(r)) {
            for (var e = 0, t = Array(r.length); e < r.length; e++) t[e] = r[e]
            return t
          }
          return Array.from(r)
        }
        exports.default = function (t) {
          var o = t.name,
            u = t.icon,
            i = t.dropdown
          return function (t, s) {
            var c = e.EXPERTISE_STRINGS.indexOf(o.toLowerCase())
            return (0, r.h)(
              "button",
              {
                class: (0, e.cc)("DropdownItem is-" + o.toLowerCase(), {
                  "is-active": t.filter[i.toLowerCase()] === o,
                }),
                onclick: function () {
                  return s.filter.set(o)
                },
              },
              [].concat(a(Array(-1 === c ? 1 : c + 1))).map(function () {
                return (0,
                r.h)(n.default, { name: u, class: "DropdownItem__icon is-" + o.toLowerCase() })
              }),
              (0, r.h)("span", { class: "DropdownItem__text" }, o)
            )
          }
        }
      },
      { hyperapp: 9, "../utils": 12, "./Icon": 21 },
    ],
    22: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var n = arguments[r]
                for (var t in n)
                  Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
              }
              return e
            },
          r = require("hyperapp"),
          n = require("../utils"),
          t = require("./DropdownItem"),
          o = a(t),
          l = require("./Icon"),
          u = a(l)
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        exports.default = function (t) {
          var l = t.name,
            a = t.items,
            s = t.isOpen
          return function (t) {
            return (0, r.h)(
              "div",
              { class: "Dropdown" },
              (0, r.h)(
                "div",
                null,
                (0, r.h)("label", { class: "Dropdown__label" }, l)
              ),
              (0, r.h)(
                "button",
                { class: "btn Dropdown__button" },
                (0, r.h)("span", null, t.filter[l.toLowerCase()]),
                (0, r.h)(u.default, {
                  class: "btn__icon",
                  name: "chevron-down",
                })
              ),
              (0, r.h)(
                "ul",
                { class: (0, n.cc)("Dropdown__items", { "is-open": s }) },
                a.map(function (n) {
                  return (0,
                  r.h)("li", null, (0, r.h)(o.default, e({}, n, { dropdown: l })))
                })
              )
            )
          }
        }
      },
      { hyperapp: 9, "../utils": 12, "./DropdownItem": 26, "./Icon": 21 },
    ],
    23: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp"),
          n = require("../utils"),
          t = require("./Icon"),
          r = o(t)
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        exports.default = function () {
          return function (t, o) {
            return (0, e.h)(
              "div",
              { class: "Dropdown" },
              (0, e.h)(
                "div",
                null,
                (0, e.h)("label", { class: "Dropdown__label" }, "Sort by")
              ),
              (0, e.h)(
                "button",
                {
                  class: "btn Dropdown__button",
                  onclick: function () {
                    return o.filter.onSortDirectionChange()
                  },
                  "data-tooltip":
                    (t.filter.sortAscending ? "Ascending" : "Descending") +
                    " order",
                },
                (0, e.h)("span", null, "Expertise"),
                (0, e.h)(
                  "i",
                  {
                    class: (0, n.cc)("Dropdown__button-icon", {
                      "is-rotated": t.filter.sortAscending,
                    }),
                  },
                  (0, e.h)(r.default, {
                    class: "btn__icon",
                    name: "arrow-down",
                  })
                )
              )
            )
          }
        }
      },
      { hyperapp: 9, "../utils": 12, "./Icon": 21 },
    ],
    14: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp"),
          r = require("./Dropdown"),
          t = o(r),
          u = require("./SortButton"),
          n = o(u)
        function o(e) {
          return e && e.__esModule ? e : { default: e }
        }
        exports.default = function () {
          return function (r) {
            return (0, e.h)(
              "div",
              { class: "Filter" },
              (0, e.h)(
                "div",
                { class: "container" },
                (0, e.h)(t.default, r.filter.dropdown),
                (0, e.h)(n.default, null)
              )
            )
          }
        }
      },
      { hyperapp: 9, "./Dropdown": 22, "./SortButton": 23 },
    ],
    30: [
      function (require, module, exports) {
        var define
        var global = arguments[3]
        var e,
          t = arguments[3]
        !(function (t) {
          "use strict"
          var n = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: d,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
            nptable: d,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            table: d,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            paragraph:
              /^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,
            text: /^[^\n]+/,
          }
          function r(e) {
            ;(this.tokens = []),
              (this.tokens.links = {}),
              (this.options = e || x.defaults),
              (this.rules = n.normal),
              this.options.gfm &&
                (this.options.tables
                  ? (this.rules = n.tables)
                  : (this.rules = n.gfm))
          }
          ;(n._label = /(?:\\[\[\]]|[^\[\]])+/),
            (n._title =
              /(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/),
            (n.def = u(n.def)
              .replace("label", n._label)
              .replace("title", n._title)
              .getRegex()),
            (n.bullet = /(?:[*+-]|\d+\.)/),
            (n.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/),
            (n.item = u(n.item, "gm").replace(/bull/g, n.bullet).getRegex()),
            (n.list = u(n.list)
              .replace(/bull/g, n.bullet)
              .replace(
                "hr",
                "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
              )
              .replace("def", "\\n+(?=" + n.def.source + ")")
              .getRegex()),
            (n._tag =
              "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"),
            (n.html = u(n.html)
              .replace("comment", /<!--[\s\S]*?-->/)
              .replace("closed", /<(tag)[\s\S]+?<\/\1>/)
              .replace("closing", /<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/)
              .replace(/tag/g, n._tag)
              .getRegex()),
            (n.paragraph = u(n.paragraph)
              .replace("hr", n.hr)
              .replace("heading", n.heading)
              .replace("lheading", n.lheading)
              .replace("tag", "<" + n._tag)
              .getRegex()),
            (n.blockquote = u(n.blockquote)
              .replace("paragraph", n.paragraph)
              .getRegex()),
            (n.normal = k({}, n)),
            (n.gfm = k({}, n.normal, {
              fences:
                /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,
              paragraph: /^/,
              heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/,
            })),
            (n.gfm.paragraph = u(n.paragraph)
              .replace(
                "(?!",
                "(?!" +
                  n.gfm.fences.source.replace("\\1", "\\2") +
                  "|" +
                  n.list.source.replace("\\1", "\\3") +
                  "|"
              )
              .getRegex()),
            (n.tables = k({}, n.gfm, {
              nptable:
                /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
              table:
                /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,
            })),
            (r.rules = n),
            (r.lex = function (e, t) {
              return new r(t).lex(e)
            }),
            (r.prototype.lex = function (e) {
              return (
                (e = e
                  .replace(/\r\n|\r/g, "\n")
                  .replace(/\t/g, "    ")
                  .replace(/\u00a0/g, " ")
                  .replace(/\u2424/g, "\n")),
                this.token(e, !0)
              )
            }),
            (r.prototype.token = function (e, t) {
              var r, s, i, l, o, a, h, p, u, c, g
              for (e = e.replace(/^ +$/gm, ""); e; )
                if (
                  ((i = this.rules.newline.exec(e)) &&
                    ((e = e.substring(i[0].length)),
                    i[0].length > 1 && this.tokens.push({ type: "space" })),
                  (i = this.rules.code.exec(e)))
                )
                  (e = e.substring(i[0].length)),
                    (i = i[0].replace(/^ {4}/gm, "")),
                    this.tokens.push({
                      type: "code",
                      text: this.options.pedantic ? i : i.replace(/\n+$/, ""),
                    })
                else if ((i = this.rules.fences.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "code",
                      lang: i[2],
                      text: i[3] || "",
                    })
                else if ((i = this.rules.heading.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: i[1].length,
                      text: i[2],
                    })
                else if (t && (i = this.rules.nptable.exec(e))) {
                  for (
                    e = e.substring(i[0].length),
                      a = {
                        type: "table",
                        header: i[1]
                          .replace(/^ *| *\| *$/g, "")
                          .split(/ *\| */),
                        align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: i[3].replace(/\n$/, "").split("\n"),
                      },
                      p = 0;
                    p < a.align.length;
                    p++
                  )
                    /^ *-+: *$/.test(a.align[p])
                      ? (a.align[p] = "right")
                      : /^ *:-+: *$/.test(a.align[p])
                      ? (a.align[p] = "center")
                      : /^ *:-+ *$/.test(a.align[p])
                      ? (a.align[p] = "left")
                      : (a.align[p] = null)
                  for (p = 0; p < a.cells.length; p++)
                    a.cells[p] = a.cells[p].split(/ *\| */)
                  this.tokens.push(a)
                } else if ((i = this.rules.hr.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "hr" })
                else if ((i = this.rules.blockquote.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "blockquote_start" }),
                    (i = i[0].replace(/^ *> ?/gm, "")),
                    this.token(i, t),
                    this.tokens.push({ type: "blockquote_end" })
                else if ((i = this.rules.list.exec(e))) {
                  for (
                    e = e.substring(i[0].length),
                      g = (l = i[2]).length > 1,
                      this.tokens.push({
                        type: "list_start",
                        ordered: g,
                        start: g ? +l : "",
                      }),
                      r = !1,
                      c = (i = i[0].match(this.rules.item)).length,
                      p = 0;
                    p < c;
                    p++
                  )
                    (h = (a = i[p]).length),
                      ~(a = a.replace(/^ *([*+-]|\d+\.) +/, "")).indexOf(
                        "\n "
                      ) &&
                        ((h -= a.length),
                        (a = this.options.pedantic
                          ? a.replace(/^ {1,4}/gm, "")
                          : a.replace(
                              new RegExp("^ {1," + h + "}", "gm"),
                              ""
                            ))),
                      this.options.smartLists &&
                        p !== c - 1 &&
                        (l === (o = n.bullet.exec(i[p + 1])[0]) ||
                          (l.length > 1 && o.length > 1) ||
                          ((e = i.slice(p + 1).join("\n") + e), (p = c - 1))),
                      (s = r || /\n\n(?!\s*$)/.test(a)),
                      p !== c - 1 &&
                        ((r = "\n" === a.charAt(a.length - 1)), s || (s = r)),
                      this.tokens.push({
                        type: s ? "loose_item_start" : "list_item_start",
                      }),
                      this.token(a, !1),
                      this.tokens.push({ type: "list_item_end" })
                  this.tokens.push({ type: "list_end" })
                } else if ((i = this.rules.html.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: this.options.sanitize ? "paragraph" : "html",
                      pre:
                        !this.options.sanitizer &&
                        ("pre" === i[1] ||
                          "script" === i[1] ||
                          "style" === i[1]),
                      text: i[0],
                    })
                else if (t && (i = this.rules.def.exec(e)))
                  (e = e.substring(i[0].length)),
                    i[3] && (i[3] = i[3].substring(1, i[3].length - 1)),
                    (u = i[1].toLowerCase()),
                    this.tokens.links[u] ||
                      (this.tokens.links[u] = { href: i[2], title: i[3] })
                else if (t && (i = this.rules.table.exec(e))) {
                  for (
                    e = e.substring(i[0].length),
                      a = {
                        type: "table",
                        header: i[1]
                          .replace(/^ *| *\| *$/g, "")
                          .split(/ *\| */),
                        align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                        cells: i[3].replace(/(?: *\| *)?\n$/, "").split("\n"),
                      },
                      p = 0;
                    p < a.align.length;
                    p++
                  )
                    /^ *-+: *$/.test(a.align[p])
                      ? (a.align[p] = "right")
                      : /^ *:-+: *$/.test(a.align[p])
                      ? (a.align[p] = "center")
                      : /^ *:-+ *$/.test(a.align[p])
                      ? (a.align[p] = "left")
                      : (a.align[p] = null)
                  for (p = 0; p < a.cells.length; p++)
                    a.cells[p] = a.cells[p]
                      .replace(/^ *\| *| *\| *$/g, "")
                      .split(/ *\| */)
                  this.tokens.push(a)
                } else if ((i = this.rules.lheading.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: "=" === i[2] ? 1 : 2,
                      text: i[1],
                    })
                else if (t && (i = this.rules.paragraph.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "paragraph",
                      text:
                        "\n" === i[1].charAt(i[1].length - 1)
                          ? i[1].slice(0, -1)
                          : i[1],
                    })
                else if ((i = this.rules.text.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "text", text: i[0] })
                else if (e)
                  throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
              return this.tokens
            })
          var s = {
            escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: d,
            tag: /^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,
            link: /^!?\[(inside)\]\(href\)/,
            reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
            nolink: /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,
            strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
            em: /^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,
            code: /^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,
            br: /^ {2,}\n(?!\s*$)/,
            del: d,
            text: /^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/,
          }
          function i(e, t) {
            if (
              ((this.options = t || x.defaults),
              (this.links = e),
              (this.rules = s.normal),
              (this.renderer = this.options.renderer || new l()),
              (this.renderer.options = this.options),
              !this.links)
            )
              throw new Error("Tokens array requires a `links` property.")
            this.options.gfm
              ? this.options.breaks
                ? (this.rules = s.breaks)
                : (this.rules = s.gfm)
              : this.options.pedantic && (this.rules = s.pedantic)
          }
          function l(e) {
            this.options = e || {}
          }
          function o() {}
          function a(e) {
            ;(this.tokens = []),
              (this.token = null),
              (this.options = e || x.defaults),
              (this.options.renderer = this.options.renderer || new l()),
              (this.renderer = this.options.renderer),
              (this.renderer.options = this.options)
          }
          function h(e, t) {
            return e
              .replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;")
          }
          function p(e) {
            return e.replace(
              /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
              function (e, t) {
                return "colon" === (t = t.toLowerCase())
                  ? ":"
                  : "#" === t.charAt(0)
                  ? "x" === t.charAt(1)
                    ? String.fromCharCode(parseInt(t.substring(2), 16))
                    : String.fromCharCode(+t.substring(1))
                  : ""
              }
            )
          }
          function u(e, t) {
            return (
              (e = e.source),
              (t = t || ""),
              {
                replace: function (t, n) {
                  return (
                    (n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1")),
                    (e = e.replace(t, n)),
                    this
                  )
                },
                getRegex: function () {
                  return new RegExp(e, t)
                },
              }
            )
          }
          function c(e, t) {
            return (
              g[" " + e] ||
                (/^[^:]+:\/*[^/]*$/.test(e)
                  ? (g[" " + e] = e + "/")
                  : (g[" " + e] = e.replace(/[^/]*$/, ""))),
              (e = g[" " + e]),
              "//" === t.slice(0, 2)
                ? e.replace(/:[\s\S]*/, ":") + t
                : "/" === t.charAt(0)
                ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t
                : e + t
            )
          }
          ;(s._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
            (s._email =
              /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
            (s.autolink = u(s.autolink)
              .replace("scheme", s._scheme)
              .replace("email", s._email)
              .getRegex()),
            (s._inside = /(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/),
            (s._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/),
            (s.link = u(s.link)
              .replace("inside", s._inside)
              .replace("href", s._href)
              .getRegex()),
            (s.reflink = u(s.reflink).replace("inside", s._inside).getRegex()),
            (s.normal = k({}, s)),
            (s.pedantic = k({}, s.normal, {
              strong:
                /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
            })),
            (s.gfm = k({}, s.normal, {
              escape: u(s.escape).replace("])", "~|])").getRegex(),
              url: u(
                /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/
              )
                .replace("email", s._email)
                .getRegex(),
              _backpedal:
                /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
              del: /^~~(?=\S)([\s\S]*?\S)~~/,
              text: u(s.text)
                .replace("]|", "~]|")
                .replace(
                  "|",
                  "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|"
                )
                .getRegex(),
            })),
            (s.breaks = k({}, s.gfm, {
              br: u(s.br).replace("{2,}", "*").getRegex(),
              text: u(s.gfm.text).replace("{2,}", "*").getRegex(),
            })),
            (i.rules = s),
            (i.output = function (e, t, n) {
              return new i(t, n).output(e)
            }),
            (i.prototype.output = function (e) {
              for (var t, n, r, s, i = ""; e; )
                if ((s = this.rules.escape.exec(e)))
                  (e = e.substring(s[0].length)), (i += s[1])
                else if ((s = this.rules.autolink.exec(e)))
                  (e = e.substring(s[0].length)),
                    (r =
                      "@" === s[2]
                        ? "mailto:" + (n = h(this.mangle(s[1])))
                        : (n = h(s[1]))),
                    (i += this.renderer.link(r, null, n))
                else if (this.inLink || !(s = this.rules.url.exec(e))) {
                  if ((s = this.rules.tag.exec(e)))
                    !this.inLink && /^<a /i.test(s[0])
                      ? (this.inLink = !0)
                      : this.inLink &&
                        /^<\/a>/i.test(s[0]) &&
                        (this.inLink = !1),
                      (e = e.substring(s[0].length)),
                      (i += this.options.sanitize
                        ? this.options.sanitizer
                          ? this.options.sanitizer(s[0])
                          : h(s[0])
                        : s[0])
                  else if ((s = this.rules.link.exec(e)))
                    (e = e.substring(s[0].length)),
                      (this.inLink = !0),
                      (i += this.outputLink(s, { href: s[2], title: s[3] })),
                      (this.inLink = !1)
                  else if (
                    (s = this.rules.reflink.exec(e)) ||
                    (s = this.rules.nolink.exec(e))
                  ) {
                    if (
                      ((e = e.substring(s[0].length)),
                      (t = (s[2] || s[1]).replace(/\s+/g, " ")),
                      !(t = this.links[t.toLowerCase()]) || !t.href)
                    ) {
                      ;(i += s[0].charAt(0)), (e = s[0].substring(1) + e)
                      continue
                    }
                    ;(this.inLink = !0),
                      (i += this.outputLink(s, t)),
                      (this.inLink = !1)
                  } else if ((s = this.rules.strong.exec(e)))
                    (e = e.substring(s[0].length)),
                      (i += this.renderer.strong(this.output(s[2] || s[1])))
                  else if ((s = this.rules.em.exec(e)))
                    (e = e.substring(s[0].length)),
                      (i += this.renderer.em(this.output(s[2] || s[1])))
                  else if ((s = this.rules.code.exec(e)))
                    (e = e.substring(s[0].length)),
                      (i += this.renderer.codespan(h(s[2].trim(), !0)))
                  else if ((s = this.rules.br.exec(e)))
                    (e = e.substring(s[0].length)), (i += this.renderer.br())
                  else if ((s = this.rules.del.exec(e)))
                    (e = e.substring(s[0].length)),
                      (i += this.renderer.del(this.output(s[1])))
                  else if ((s = this.rules.text.exec(e)))
                    (e = e.substring(s[0].length)),
                      (i += this.renderer.text(h(this.smartypants(s[0]))))
                  else if (e)
                    throw new Error("Infinite loop on byte: " + e.charCodeAt(0))
                } else
                  (s[0] = this.rules._backpedal.exec(s[0])[0]),
                    (e = e.substring(s[0].length)),
                    "@" === s[2]
                      ? (r = "mailto:" + (n = h(s[0])))
                      : ((n = h(s[0])),
                        (r = "www." === s[1] ? "http://" + n : n)),
                    (i += this.renderer.link(r, null, n))
              return i
            }),
            (i.prototype.outputLink = function (e, t) {
              var n = h(t.href),
                r = t.title ? h(t.title) : null
              return "!" !== e[0].charAt(0)
                ? this.renderer.link(n, r, this.output(e[1]))
                : this.renderer.image(n, r, h(e[1]))
            }),
            (i.prototype.smartypants = function (e) {
              return this.options.smartypants
                ? e
                    .replace(/---/g, "—")
                    .replace(/--/g, "–")
                    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
                    .replace(/'/g, "’")
                    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
                    .replace(/"/g, "”")
                    .replace(/\.{3}/g, "…")
                : e
            }),
            (i.prototype.mangle = function (e) {
              if (!this.options.mangle) return e
              for (var t, n = "", r = e.length, s = 0; s < r; s++)
                (t = e.charCodeAt(s)),
                  Math.random() > 0.5 && (t = "x" + t.toString(16)),
                  (n += "&#" + t + ";")
              return n
            }),
            (l.prototype.code = function (e, t, n) {
              if (this.options.highlight) {
                var r = this.options.highlight(e, t)
                null != r && r !== e && ((n = !0), (e = r))
              }
              return t
                ? '<pre><code class="' +
                    this.options.langPrefix +
                    h(t, !0) +
                    '">' +
                    (n ? e : h(e, !0)) +
                    "\n</code></pre>\n"
                : "<pre><code>" + (n ? e : h(e, !0)) + "\n</code></pre>"
            }),
            (l.prototype.blockquote = function (e) {
              return "<blockquote>\n" + e + "</blockquote>\n"
            }),
            (l.prototype.html = function (e) {
              return e
            }),
            (l.prototype.heading = function (e, t, n) {
              return (
                "<h" +
                t +
                ' id="' +
                this.options.headerPrefix +
                n.toLowerCase().replace(/[^\w]+/g, "-") +
                '">' +
                e +
                "</h" +
                t +
                ">\n"
              )
            }),
            (l.prototype.hr = function () {
              return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
            }),
            (l.prototype.list = function (e, t, n) {
              var r = t ? "ol" : "ul"
              return (
                "<" +
                r +
                (t && 1 !== n ? ' start="' + n + '"' : "") +
                ">\n" +
                e +
                "</" +
                r +
                ">\n"
              )
            }),
            (l.prototype.listitem = function (e) {
              return "<li>" + e + "</li>\n"
            }),
            (l.prototype.paragraph = function (e) {
              return "<p>" + e + "</p>\n"
            }),
            (l.prototype.table = function (e, t) {
              return (
                "<table>\n<thead>\n" +
                e +
                "</thead>\n<tbody>\n" +
                t +
                "</tbody>\n</table>\n"
              )
            }),
            (l.prototype.tablerow = function (e) {
              return "<tr>\n" + e + "</tr>\n"
            }),
            (l.prototype.tablecell = function (e, t) {
              var n = t.header ? "th" : "td"
              return (
                (t.align
                  ? "<" + n + ' style="text-align:' + t.align + '">'
                  : "<" + n + ">") +
                e +
                "</" +
                n +
                ">\n"
              )
            }),
            (l.prototype.strong = function (e) {
              return "<strong>" + e + "</strong>"
            }),
            (l.prototype.em = function (e) {
              return "<em>" + e + "</em>"
            }),
            (l.prototype.codespan = function (e) {
              return "<code>" + e + "</code>"
            }),
            (l.prototype.br = function () {
              return this.options.xhtml ? "<br/>" : "<br>"
            }),
            (l.prototype.del = function (e) {
              return "<del>" + e + "</del>"
            }),
            (l.prototype.link = function (e, t, n) {
              if (this.options.sanitize) {
                try {
                  var r = decodeURIComponent(p(e))
                    .replace(/[^\w:]/g, "")
                    .toLowerCase()
                } catch (e) {
                  return n
                }
                if (
                  0 === r.indexOf("javascript:") ||
                  0 === r.indexOf("vbscript:") ||
                  0 === r.indexOf("data:")
                )
                  return n
              }
              this.options.baseUrl &&
                !f.test(e) &&
                (e = c(this.options.baseUrl, e))
              var s = '<a href="' + e + '"'
              return t && (s += ' title="' + t + '"'), (s += ">" + n + "</a>")
            }),
            (l.prototype.image = function (e, t, n) {
              this.options.baseUrl &&
                !f.test(e) &&
                (e = c(this.options.baseUrl, e))
              var r = '<img src="' + e + '" alt="' + n + '"'
              return (
                t && (r += ' title="' + t + '"'),
                (r += this.options.xhtml ? "/>" : ">")
              )
            }),
            (l.prototype.text = function (e) {
              return e
            }),
            (o.prototype.strong =
              o.prototype.em =
              o.prototype.codespan =
              o.prototype.del =
              o.prototype.text =
                function (e) {
                  return e
                }),
            (o.prototype.link = o.prototype.image =
              function (e, t, n) {
                return "" + n
              }),
            (o.prototype.br = function () {
              return ""
            }),
            (a.parse = function (e, t) {
              return new a(t).parse(e)
            }),
            (a.prototype.parse = function (e) {
              ;(this.inline = new i(e.links, this.options)),
                (this.inlineText = new i(
                  e.links,
                  k({}, this.options, { renderer: new o() })
                )),
                (this.tokens = e.reverse())
              for (var t = ""; this.next(); ) t += this.tok()
              return t
            }),
            (a.prototype.next = function () {
              return (this.token = this.tokens.pop())
            }),
            (a.prototype.peek = function () {
              return this.tokens[this.tokens.length - 1] || 0
            }),
            (a.prototype.parseText = function () {
              for (var e = this.token.text; "text" === this.peek().type; )
                e += "\n" + this.next().text
              return this.inline.output(e)
            }),
            (a.prototype.tok = function () {
              switch (this.token.type) {
                case "space":
                  return ""
                case "hr":
                  return this.renderer.hr()
                case "heading":
                  return this.renderer.heading(
                    this.inline.output(this.token.text),
                    this.token.depth,
                    p(this.inlineText.output(this.token.text))
                  )
                case "code":
                  return this.renderer.code(
                    this.token.text,
                    this.token.lang,
                    this.token.escaped
                  )
                case "table":
                  var e,
                    t,
                    n,
                    r,
                    s = "",
                    i = ""
                  for (n = "", e = 0; e < this.token.header.length; e++)
                    n += this.renderer.tablecell(
                      this.inline.output(this.token.header[e]),
                      { header: !0, align: this.token.align[e] }
                    )
                  for (
                    s += this.renderer.tablerow(n), e = 0;
                    e < this.token.cells.length;
                    e++
                  ) {
                    for (
                      t = this.token.cells[e], n = "", r = 0;
                      r < t.length;
                      r++
                    )
                      n += this.renderer.tablecell(this.inline.output(t[r]), {
                        header: !1,
                        align: this.token.align[r],
                      })
                    i += this.renderer.tablerow(n)
                  }
                  return this.renderer.table(s, i)
                case "blockquote_start":
                  for (i = ""; "blockquote_end" !== this.next().type; )
                    i += this.tok()
                  return this.renderer.blockquote(i)
                case "list_start":
                  i = ""
                  for (
                    var l = this.token.ordered, o = this.token.start;
                    "list_end" !== this.next().type;

                  )
                    i += this.tok()
                  return this.renderer.list(i, l, o)
                case "list_item_start":
                  for (i = ""; "list_item_end" !== this.next().type; )
                    i +=
                      "text" === this.token.type ? this.parseText() : this.tok()
                  return this.renderer.listitem(i)
                case "loose_item_start":
                  for (i = ""; "list_item_end" !== this.next().type; )
                    i += this.tok()
                  return this.renderer.listitem(i)
                case "html":
                  var a =
                    this.token.pre || this.options.pedantic
                      ? this.token.text
                      : this.inline.output(this.token.text)
                  return this.renderer.html(a)
                case "paragraph":
                  return this.renderer.paragraph(
                    this.inline.output(this.token.text)
                  )
                case "text":
                  return this.renderer.paragraph(this.parseText())
              }
            })
          var g = {},
            f = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i
          function d() {}
          function k(e) {
            for (var t, n, r = 1; r < arguments.length; r++)
              for (n in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            return e
          }
          function x(e, t, n) {
            if (void 0 === e || null === e)
              throw new Error("marked(): input parameter is undefined or null")
            if ("string" != typeof e)
              throw new Error(
                "marked(): input parameter is of type " +
                  Object.prototype.toString.call(e) +
                  ", string expected"
              )
            if (n || "function" == typeof t) {
              n || ((n = t), (t = null))
              var s,
                i,
                l = (t = k({}, x.defaults, t || {})).highlight,
                o = 0
              try {
                s = r.lex(e, t)
              } catch (e) {
                return n(e)
              }
              i = s.length
              var p = function (e) {
                if (e) return (t.highlight = l), n(e)
                var r
                try {
                  r = a.parse(s, t)
                } catch (t) {
                  e = t
                }
                return (t.highlight = l), e ? n(e) : n(null, r)
              }
              if (!l || l.length < 3) return p()
              if ((delete t.highlight, !i)) return p()
              for (; o < s.length; o++)
                !(function (e) {
                  "code" !== e.type
                    ? --i || p()
                    : l(e.text, e.lang, function (t, n) {
                        return t
                          ? p(t)
                          : null == n || n === e.text
                          ? --i || p()
                          : ((e.text = n), (e.escaped = !0), void (--i || p()))
                      })
                })(s[o])
            } else
              try {
                return t && (t = k({}, x.defaults, t)), a.parse(r.lex(e, t), t)
              } catch (e) {
                if (
                  ((e.message +=
                    "\nPlease report this to https://github.com/markedjs/marked."),
                  (t || x.defaults).silent)
                )
                  return (
                    "<p>An error occurred:</p><pre>" +
                    h(e.message + "", !0) +
                    "</pre>"
                  )
                throw e
              }
          }
          ;(d.exec = d),
            (x.options = x.setOptions =
              function (e) {
                return k(x.defaults, e), x
              }),
            (x.defaults = {
              gfm: !0,
              tables: !0,
              breaks: !1,
              pedantic: !1,
              sanitize: !1,
              sanitizer: null,
              mangle: !0,
              smartLists: !1,
              silent: !1,
              highlight: null,
              langPrefix: "lang-",
              smartypants: !1,
              headerPrefix: "",
              renderer: new l(),
              xhtml: !1,
              baseUrl: null,
            }),
            (x.Parser = a),
            (x.parser = a.parse),
            (x.Renderer = l),
            (x.TextRenderer = o),
            (x.Lexer = r),
            (x.lexer = r.lex),
            (x.InlineLexer = i),
            (x.inlineLexer = i.output),
            (x.parse = x),
            "undefined" != typeof module && "object" == typeof exports
              ? (module.exports = x)
              : "function" == typeof e && e.amd
              ? e(function () {
                  return x
                })
              : (t.marked = x)
        })(this || ("undefined" != typeof window ? window : t))
      },
      {},
    ],
    29: [
      function (require, module, exports) {
        var global = arguments[3]
        var e = arguments[3],
          t =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof WorkerGlobalScope &&
                self instanceof WorkerGlobalScope
              ? self
              : {},
          a = (function () {
            var e = /\blang(?:uage)?-([\w-]+)\b/i,
              a = 0,
              n = (t.Prism = {
                manual: t.Prism && t.Prism.manual,
                disableWorkerMessageHandler:
                  t.Prism && t.Prism.disableWorkerMessageHandler,
                util: {
                  encode: function (e) {
                    return e instanceof r
                      ? new r(e.type, n.util.encode(e.content), e.alias)
                      : "Array" === n.util.type(e)
                      ? e.map(n.util.encode)
                      : e
                          .replace(/&/g, "&amp;")
                          .replace(/</g, "&lt;")
                          .replace(/\u00a0/g, " ")
                  },
                  type: function (e) {
                    return Object.prototype.toString
                      .call(e)
                      .match(/\[object (\w+)\]/)[1]
                  },
                  objId: function (e) {
                    return (
                      e.__id ||
                        Object.defineProperty(e, "__id", { value: ++a }),
                      e.__id
                    )
                  },
                  clone: function (e, t) {
                    var a = n.util.type(e)
                    switch (((t = t || {}), a)) {
                      case "Object":
                        if (t[n.util.objId(e)]) return t[n.util.objId(e)]
                        var r = {}
                        for (var i in ((t[n.util.objId(e)] = r), e))
                          e.hasOwnProperty(i) && (r[i] = n.util.clone(e[i], t))
                        return r
                      case "Array":
                        if (t[n.util.objId(e)]) return t[n.util.objId(e)]
                        r = []
                        return (
                          (t[n.util.objId(e)] = r),
                          e.forEach(function (e, a) {
                            r[a] = n.util.clone(e, t)
                          }),
                          r
                        )
                    }
                    return e
                  },
                },
                languages: {
                  extend: function (e, t) {
                    var a = n.util.clone(n.languages[e])
                    for (var r in t) a[r] = t[r]
                    return a
                  },
                  insertBefore: function (e, t, a, r) {
                    var i = (r = r || n.languages)[e]
                    if (2 == arguments.length) {
                      for (var s in (a = arguments[1]))
                        a.hasOwnProperty(s) && (i[s] = a[s])
                      return i
                    }
                    var l = {}
                    for (var o in i)
                      if (i.hasOwnProperty(o)) {
                        if (o == t)
                          for (var s in a) a.hasOwnProperty(s) && (l[s] = a[s])
                        l[o] = i[o]
                      }
                    return (
                      n.languages.DFS(n.languages, function (t, a) {
                        a === r[e] && t != e && (this[t] = l)
                      }),
                      (r[e] = l)
                    )
                  },
                  DFS: function (e, t, a, r) {
                    for (var i in ((r = r || {}), e))
                      e.hasOwnProperty(i) &&
                        (t.call(e, i, e[i], a || i),
                        "Object" !== n.util.type(e[i]) || r[n.util.objId(e[i])]
                          ? "Array" !== n.util.type(e[i]) ||
                            r[n.util.objId(e[i])] ||
                            ((r[n.util.objId(e[i])] = !0),
                            n.languages.DFS(e[i], t, i, r))
                          : ((r[n.util.objId(e[i])] = !0),
                            n.languages.DFS(e[i], t, null, r)))
                  },
                },
                plugins: {},
                highlightAll: function (e, t) {
                  n.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function (e, t, a) {
                  var r = {
                    callback: a,
                    selector:
                      'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                  }
                  n.hooks.run("before-highlightall", r)
                  for (
                    var i,
                      s = r.elements || e.querySelectorAll(r.selector),
                      l = 0;
                    (i = s[l++]);

                  )
                    n.highlightElement(i, !0 === t, r.callback)
                },
                highlightElement: function (a, r, i) {
                  for (var s, l, o = a; o && !e.test(o.className); )
                    o = o.parentNode
                  o &&
                    ((s = (o.className.match(e) || [, ""])[1].toLowerCase()),
                    (l = n.languages[s])),
                    (a.className =
                      a.className.replace(e, "").replace(/\s+/g, " ") +
                      " language-" +
                      s),
                    a.parentNode &&
                      ((o = a.parentNode),
                      /pre/i.test(o.nodeName) &&
                        (o.className =
                          o.className.replace(e, "").replace(/\s+/g, " ") +
                          " language-" +
                          s))
                  var u = {
                    element: a,
                    language: s,
                    grammar: l,
                    code: a.textContent,
                  }
                  if (
                    (n.hooks.run("before-sanity-check", u),
                    !u.code || !u.grammar)
                  )
                    return (
                      u.code &&
                        (n.hooks.run("before-highlight", u),
                        (u.element.textContent = u.code),
                        n.hooks.run("after-highlight", u)),
                      void n.hooks.run("complete", u)
                    )
                  if ((n.hooks.run("before-highlight", u), r && t.Worker)) {
                    var g = new Worker(n.filename)
                    ;(g.onmessage = function (e) {
                      ;(u.highlightedCode = e.data),
                        n.hooks.run("before-insert", u),
                        (u.element.innerHTML = u.highlightedCode),
                        i && i.call(u.element),
                        n.hooks.run("after-highlight", u),
                        n.hooks.run("complete", u)
                    }),
                      g.postMessage(
                        JSON.stringify({
                          language: u.language,
                          code: u.code,
                          immediateClose: !0,
                        })
                      )
                  } else
                    (u.highlightedCode = n.highlight(
                      u.code,
                      u.grammar,
                      u.language
                    )),
                      n.hooks.run("before-insert", u),
                      (u.element.innerHTML = u.highlightedCode),
                      i && i.call(a),
                      n.hooks.run("after-highlight", u),
                      n.hooks.run("complete", u)
                },
                highlight: function (e, t, a) {
                  var i = { code: e, grammar: t, language: a }
                  return (
                    n.hooks.run("before-tokenize", i),
                    (i.tokens = n.tokenize(i.code, i.grammar)),
                    n.hooks.run("after-tokenize", i),
                    r.stringify(n.util.encode(i.tokens), i.language)
                  )
                },
                matchGrammar: function (e, t, a, r, i, s, l) {
                  var o = n.Token
                  for (var u in a)
                    if (a.hasOwnProperty(u) && a[u]) {
                      if (u == l) return
                      var g = a[u]
                      g = "Array" === n.util.type(g) ? g : [g]
                      for (var c = 0; c < g.length; ++c) {
                        var d = g[c],
                          p = d.inside,
                          h = !!d.lookbehind,
                          f = !!d.greedy,
                          m = 0,
                          y = d.alias
                        if (f && !d.pattern.global) {
                          var b = d.pattern.toString().match(/[imuy]*$/)[0]
                          d.pattern = RegExp(d.pattern.source, b + "g")
                        }
                        d = d.pattern || d
                        for (
                          var k = r, v = i;
                          k < t.length;
                          v += t[k].length, ++k
                        ) {
                          var w = t[k]
                          if (t.length > e.length) return
                          if (!(w instanceof o)) {
                            if (f && k != t.length - 1) {
                              if (((d.lastIndex = v), !(C = d.exec(e)))) break
                              for (
                                var F = C.index + (h ? C[1].length : 0),
                                  x = C.index + C[0].length,
                                  A = k,
                                  S = v,
                                  j = t.length;
                                A < j &&
                                (S < x || (!t[A].type && !t[A - 1].greedy));
                                ++A
                              )
                                F >= (S += t[A].length) && (++k, (v = S))
                              if (t[k] instanceof o) continue
                              ;(P = A - k), (w = e.slice(v, S)), (C.index -= v)
                            } else {
                              d.lastIndex = 0
                              var C = d.exec(w),
                                P = 1
                            }
                            if (C) {
                              h && (m = C[1] ? C[1].length : 0)
                              x = (F = C.index + m) + (C = C[0].slice(m)).length
                              var N = w.slice(0, F),
                                E = w.slice(x),
                                O = [k, P]
                              N && (++k, (v += N.length), O.push(N))
                              var $ = new o(
                                u,
                                p ? n.tokenize(C, p) : C,
                                y,
                                C,
                                f
                              )
                              if (
                                (O.push($),
                                E && O.push(E),
                                Array.prototype.splice.apply(t, O),
                                1 != P && n.matchGrammar(e, t, a, k, v, !0, u),
                                s)
                              )
                                break
                            } else if (s) break
                          }
                        }
                      }
                    }
                },
                tokenize: function (e, t, a) {
                  var r = [e],
                    i = t.rest
                  if (i) {
                    for (var s in i) t[s] = i[s]
                    delete t.rest
                  }
                  return n.matchGrammar(e, r, t, 0, 0, !1), r
                },
                hooks: {
                  all: {},
                  add: function (e, t) {
                    var a = n.hooks.all
                    ;(a[e] = a[e] || []), a[e].push(t)
                  },
                  run: function (e, t) {
                    var a = n.hooks.all[e]
                    if (a && a.length) for (var r, i = 0; (r = a[i++]); ) r(t)
                  },
                },
              }),
              r = (n.Token = function (e, t, a, n, r) {
                ;(this.type = e),
                  (this.content = t),
                  (this.alias = a),
                  (this.length = 0 | (n || "").length),
                  (this.greedy = !!r)
              })
            if (
              ((r.stringify = function (e, t, a) {
                if ("string" == typeof e) return e
                if ("Array" === n.util.type(e))
                  return e
                    .map(function (a) {
                      return r.stringify(a, t, e)
                    })
                    .join("")
                var i = {
                  type: e.type,
                  content: r.stringify(e.content, t, a),
                  tag: "span",
                  classes: ["token", e.type],
                  attributes: {},
                  language: t,
                  parent: a,
                }
                if (e.alias) {
                  var s = "Array" === n.util.type(e.alias) ? e.alias : [e.alias]
                  Array.prototype.push.apply(i.classes, s)
                }
                n.hooks.run("wrap", i)
                var l = Object.keys(i.attributes)
                  .map(function (e) {
                    return (
                      e +
                      '="' +
                      (i.attributes[e] || "").replace(/"/g, "&quot;") +
                      '"'
                    )
                  })
                  .join(" ")
                return (
                  "<" +
                  i.tag +
                  ' class="' +
                  i.classes.join(" ") +
                  '"' +
                  (l ? " " + l : "") +
                  ">" +
                  i.content +
                  "</" +
                  i.tag +
                  ">"
                )
              }),
              !t.document)
            )
              return t.addEventListener
                ? (n.disableWorkerMessageHandler ||
                    t.addEventListener(
                      "message",
                      function (e) {
                        var a = JSON.parse(e.data),
                          r = a.language,
                          i = a.code,
                          s = a.immediateClose
                        t.postMessage(n.highlight(i, n.languages[r], r)),
                          s && t.close()
                      },
                      !1
                    ),
                  t.Prism)
                : t.Prism
            var i =
              document.currentScript ||
              [].slice.call(document.getElementsByTagName("script")).pop()
            return (
              i &&
                ((n.filename = i.src),
                n.manual ||
                  i.hasAttribute("data-manual") ||
                  ("loading" !== document.readyState
                    ? window.requestAnimationFrame
                      ? window.requestAnimationFrame(n.highlightAll)
                      : window.setTimeout(n.highlightAll, 16)
                    : document.addEventListener(
                        "DOMContentLoaded",
                        n.highlightAll
                      ))),
              t.Prism
            )
          })()
        "undefined" != typeof module && module.exports && (module.exports = a),
          void 0 !== e && (e.Prism = a),
          (a.languages.markup = {
            comment: /<!--[\s\S]*?-->/,
            prolog: /<\?[\s\S]+?\?>/,
            doctype: /<!DOCTYPE[\s\S]+?>/i,
            cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
            tag: {
              pattern:
                /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
              greedy: !0,
              inside: {
                tag: {
                  pattern: /^<\/?[^\s>\/]+/i,
                  inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
                },
                "attr-value": {
                  pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                  inside: {
                    punctuation: [
                      /^=/,
                      { pattern: /(^|[^\\])["']/, lookbehind: !0 },
                    ],
                  },
                },
                punctuation: /\/?>/,
                "attr-name": {
                  pattern: /[^\s>\/]+/,
                  inside: { namespace: /^[^\s>\/:]+:/ },
                },
              },
            },
            entity: /&#?[\da-z]{1,8};/i,
          }),
          (a.languages.markup.tag.inside["attr-value"].inside.entity =
            a.languages.markup.entity),
          a.hooks.add("wrap", function (e) {
            "entity" === e.type &&
              (e.attributes.title = e.content.replace(/&amp;/, "&"))
          }),
          (a.languages.xml = a.languages.markup),
          (a.languages.html = a.languages.markup),
          (a.languages.mathml = a.languages.markup),
          (a.languages.svg = a.languages.markup),
          (a.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
              inside: { rule: /@[\w-]+/ },
            },
            url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
            selector: /[^{}\s][^{};]*?(?=\s*\{)/,
            string: {
              pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0,
            },
            property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
            important: /\B!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:]/,
          }),
          (a.languages.css.atrule.inside.rest = a.languages.css),
          a.languages.markup &&
            (a.languages.insertBefore("markup", "tag", {
              style: {
                pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
                lookbehind: !0,
                inside: a.languages.css,
                alias: "language-css",
                greedy: !0,
              },
            }),
            a.languages.insertBefore(
              "inside",
              "attr-value",
              {
                "style-attr": {
                  pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
                  inside: {
                    "attr-name": {
                      pattern: /^\s*style/i,
                      inside: a.languages.markup.tag.inside,
                    },
                    punctuation: /^\s*=\s*['"]|['"]\s*$/,
                    "attr-value": { pattern: /.+/i, inside: a.languages.css },
                  },
                  alias: "language-css",
                },
              },
              a.languages.markup.tag
            )),
          (a.languages.clike = {
            comment: [
              { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
              { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
            ],
            string: {
              pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
              greedy: !0,
            },
            "class-name": {
              pattern:
                /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
              lookbehind: !0,
              inside: { punctuation: /[.\\]/ },
            },
            keyword:
              /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
            boolean: /\b(?:true|false)\b/,
            function: /[a-z0-9_]+(?=\()/i,
            number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
            operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
            punctuation: /[{}[\];(),.:]/,
          }),
          (a.languages.javascript = a.languages.extend("clike", {
            keyword:
              /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
            number:
              /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
            operator:
              /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
          })),
          a.languages.insertBefore("javascript", "keyword", {
            regex: {
              pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
              lookbehind: !0,
              greedy: !0,
            },
            "function-variable": {
              pattern:
                /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
              alias: "function",
            },
            constant: /\b[A-Z][A-Z\d_]*\b/,
          }),
          a.languages.insertBefore("javascript", "string", {
            "template-string": {
              pattern: /`(?:\\[\s\S]|[^\\`])*`/,
              greedy: !0,
              inside: {
                interpolation: {
                  pattern: /\$\{[^}]+\}/,
                  inside: {
                    "interpolation-punctuation": {
                      pattern: /^\$\{|\}$/,
                      alias: "punctuation",
                    },
                    rest: a.languages.javascript,
                  },
                },
                string: /[\s\S]+/,
              },
            },
          }),
          a.languages.markup &&
            a.languages.insertBefore("markup", "tag", {
              script: {
                pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
                lookbehind: !0,
                inside: a.languages.javascript,
                alias: "language-javascript",
                greedy: !0,
              },
            }),
          (a.languages.js = a.languages.javascript),
          "undefined" != typeof self &&
            self.Prism &&
            self.document &&
            document.querySelector &&
            ((self.Prism.fileHighlight = function () {
              var e = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex",
              }
              Array.prototype.slice
                .call(document.querySelectorAll("pre[data-src]"))
                .forEach(function (t) {
                  for (
                    var n,
                      r = t.getAttribute("data-src"),
                      i = t,
                      s = /\blang(?:uage)?-(?!\*)([\w-]+)\b/i;
                    i && !s.test(i.className);

                  )
                    i = i.parentNode
                  if ((i && (n = (t.className.match(s) || [, ""])[1]), !n)) {
                    var l = (r.match(/\.(\w+)$/) || [, ""])[1]
                    n = e[l] || l
                  }
                  var o = document.createElement("code")
                  ;(o.className = "language-" + n),
                    (t.textContent = ""),
                    (o.textContent = "Loading…"),
                    t.appendChild(o)
                  var u = new XMLHttpRequest()
                  u.open("GET", r, !0),
                    (u.onreadystatechange = function () {
                      4 == u.readyState &&
                        (u.status < 400 && u.responseText
                          ? ((o.textContent = u.responseText),
                            a.highlightElement(o))
                          : u.status >= 400
                          ? (o.textContent =
                              "✖ Error " +
                              u.status +
                              " while fetching file: " +
                              u.statusText)
                          : (o.textContent =
                              "✖ Error: File does not exist or is empty"))
                    }),
                    t.hasAttribute("data-download-link") &&
                      a.plugins.toolbar &&
                      a.plugins.toolbar.registerButton(
                        "download-file",
                        function () {
                          var e = document.createElement("a")
                          return (
                            (e.textContent =
                              t.getAttribute("data-download-link-label") ||
                              "Download"),
                            e.setAttribute("download", ""),
                            (e.href = r),
                            e
                          )
                        }
                      ),
                    u.send(null)
                })
            }),
            document.addEventListener(
              "DOMContentLoaded",
              self.Prism.fileHighlight
            ))
      },
      {},
    ],
    28: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e =
            Object.assign ||
            function (e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r]
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            },
          r = require("hyperapp"),
          t = require("marked"),
          n = a(t),
          o = require("prismjs"),
          u = a(o)
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function i(e, r) {
          var t = {}
          for (var n in e)
            r.indexOf(n) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]))
          return t
        }
        var c = Object.create(null),
          l = function (e) {
            return function (r) {
              ;(r.innerHTML = e),
                Array.from(r.querySelectorAll("code[class^='lang']")).forEach(
                  function (e) {
                    return u.default.highlightElement(e)
                  }
                )
            }
          },
          f = function (e) {
            if (e in c) return c[e]
            var r = (0, n.default)(e)
            return (c[e] = r), r
          }
        exports.default = function (t) {
          var n = t.node,
            o = void 0 === n ? "div" : n,
            u = t.content,
            a = i(t, ["node", "content"])
          return (0, r.h)(o, e({}, a, { oncreate: l(f(u)) }))
        }
      },
      { hyperapp: 9, marked: 30, prismjs: 29 },
    ],
    25: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp"),
          n = require("../utils"),
          t = require("./Icon"),
          s = r(t),
          o = require("./Markdown"),
          i = r(o)
        function r(e) {
          return e && e.__esModule ? e : { default: e }
        }
        exports.default = function (t) {
          var o = t.name,
            r = t.question,
            u = t.tags,
            a = t.answer,
            l = t.goodToHear,
            c = t.isOpen,
            d = t.expertise
          return function (t, h) {
            return (0, e.h)(
              "li",
              {
                class: (0, n.cc)("Question-wrapper", {
                  "is-visible":
                    "all" === t.filter.category.toLowerCase() ||
                    u.includes(t.filter.category.toLowerCase()),
                }),
                key: o,
                id: o.slice(0, o.length - 3),
              },
              (0, e.h)(
                "div",
                { class: "Question__badge is-" + n.EXPERTISE_STRINGS[d] },
                n.EXPERTISE_STRINGS[d]
              ),
              (0, e.h)(
                "div",
                { class: "Question" },
                (0, e.h)("div", { class: "Question__tag is-" + u[0] }),
                (0, e.h)(i.default, {
                  class: "Question__heading",
                  content: "## " + r,
                }),
                (0, e.h)(
                  "button",
                  {
                    class: "btn Question__button",
                    onclick: function () {
                      return h.onAnswerButtonClick({ name: o, isOpen: c })
                    },
                  },
                  (0, e.h)("span", null, c ? "Hide" : "Show", " answer"),
                  (0, e.h)(
                    "i",
                    {
                      class: (0, n.cc)("Question__button-icon", {
                        "is-rotated": c,
                      }),
                    },
                    (0, e.h)(s.default, {
                      class: "btn__icon",
                      name: "chevron-down",
                    })
                  )
                ),
                (0, e.h)(
                  "div",
                  { class: (0, n.cc)("Question__answer", { "is-open": c }) },
                  (0, e.h)(i.default, { content: a }),
                  l.length > 0 && (0, e.h)("h4", null, "Good to hear"),
                  (0, e.h)(
                    "ul",
                    null,
                    l.map(function (n) {
                      return (0, e.h)(i.default, { node: "li", content: n })
                    })
                  )
                )
              )
            )
          }
        }
      },
      { hyperapp: 9, "../utils": 12, "./Icon": 21, "./Markdown": 28 },
    ],
    24: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp"),
          t = function () {
            return (0, e.h)(
              "li",
              { class: "Question-wrapper is-visible" },
              (0, e.h)(
                "div",
                { class: "Question__badge" },
                "Recommended resource"
              ),
              (0, e.h)(
                "div",
                { class: "Question" },
                (0, e.h)(
                  "h2",
                  null,
                  (0, e.h)(
                    "a",
                    {
                      href: "https://frontendmasters.com/books/front-end-handbook/2019/",
                    },
                    "Frontend Masters Handbook"
                  )
                ),
                (0, e.h)(
                  "p",
                  null,
                  "This is a guide that anyone could use to learn about the practice of front-end development. It broadly outlines and discusses the practice of front-end engineering: how to learn it and what tools are used when practicing it."
                )
              )
            )
          }
        exports.default = t
      },
      { hyperapp: 9 },
    ],
    16: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp"),
          r = require("./Question"),
          t = i(r),
          n = require("./RecommendedResource"),
          u = i(n)
        function i(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function s(e) {
          if (Array.isArray(e)) {
            for (var r = 0, t = Array(e.length); r < e.length; r++) t[r] = e[r]
            return t
          }
          return Array.from(e)
        }
        var l = function (r, n) {
          n.sort(function (e, t) {
            return r.filter.sortAscending
              ? e.expertise - t.expertise
              : t.expertise - e.expertise
          })
          var i = Math.floor(n.length / 2),
            s = n.slice(0, i),
            l = n.slice(i, n.length)
          return (0, e.h)(
            "div",
            null,
            s.map(function (r) {
              return (0, e.h)(t.default, r)
            }),
            (0, e.h)(u.default, null),
            l.map(function (r) {
              return (0, e.h)(t.default, r)
            })
          )
        }
        exports.default = function () {
          return function (r) {
            return (0, e.h)(
              "main",
              { class: "Questions" },
              (0, e.h)(
                "div",
                { class: "container" },
                (0, e.h)(
                  "ul",
                  { class: "Questions__list" },
                  l(r, [].concat(s(r.questions))),
                  (0, e.h)(u.default, null)
                )
              )
            )
          }
        }
      },
      { hyperapp: 9, "./Question": 25, "./RecommendedResource": 24 },
    ],
    17: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp")
        exports.default = function () {
          return (0, e.h)(
            "div",
            null,
            (0, e.h)(
              "footer",
              { class: "Footer" },
              (0, e.h)(
                "p",
                null,
                "Made with ❤️ using ",
                (0, e.h)("a", { href: "https://hyperapp.js.org/" }, "Hyperapp")
              )
            )
          )
        }
      },
      { hyperapp: 9 },
    ],
    8: [
      function (require, module, exports) {
        "use strict"
        Object.defineProperty(exports, "__esModule", { value: !0 })
        var e = require("hyperapp"),
          u = require("./components/BackToTopButton"),
          t = p(u),
          r = require("./components/Header"),
          n = p(r),
          l = require("./components/Filter"),
          o = p(l),
          i = require("./components/Questions"),
          s = p(i),
          a = require("./components/Footer"),
          d = p(a)
        function p(e) {
          return e && e.__esModule ? e : { default: e }
        }
        exports.default = function () {
          return (0, e.h)(
            "div",
            null,
            (0, e.h)(t.default, null),
            (0, e.h)(n.default, null),
            (0, e.h)(o.default, null),
            (0, e.h)(s.default, null),
            (0, e.h)(d.default, null)
          )
        }
      },
      {
        hyperapp: 9,
        "./components/BackToTopButton": 13,
        "./components/Header": 15,
        "./components/Filter": 14,
        "./components/Questions": 16,
        "./components/Footer": 17,
      },
    ],
    3: [
      function (require, module, exports) {
        "use strict"
        var e = require("hyperapp")
        require("focus-visible"),
          require("./css/index.scss"),
          require("./js/browser")
        var r = require("./js/state"),
          s = a(r),
          i = require("./js/actions"),
          t = a(i),
          u = require("./js/view"),
          o = a(u)
        function a(e) {
          return e && e.__esModule ? e : { default: e }
        }
        ;(0, e.app)(s.default, t.default, o.default, document.body),
          setTimeout(function () {
            var e = document.querySelector(".BackToTopButton")
            addEventListener("scroll", function () {
              e.classList[window.scrollY > 750 ? "add" : "remove"]("is-visible")
            })
          })
      },
      {
        hyperapp: 9,
        "focus-visible": 10,
        "./css/index.scss": 4,
        "./js/browser": 7,
        "./js/state": 5,
        "./js/actions": 6,
        "./js/view": 8,
      },
    ],
  },
  {},
  [3],
  null
)
//# sourceMappingURL=website.71029aa7.map
