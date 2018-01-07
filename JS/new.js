function e(e) {
  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(t, function (e, t, n, i) {
    return t + t + n + n + i + i
  });
  var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return n ? { r: parseInt(n[1], 16), g: parseInt(n[2], 16), b: parseInt(n[3], 16) } : null
}
function t(e, t, n) {
  return Math.min(Math.max(e, t), n)
}
function n(e, t) {
  return t.indexOf(e) > -1
}
function i() {
  $("body").append("<div id='particles' />"), particlesJS("particles", {
    particles: {
      number: {
        value: 50,
        density: { enable: !0, value_area: 800 }
      },
      color: { value: "#dcdcdc" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#dcdcdc" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
      },
      opacity: { value: .2, random: !1, anim: { enable: !1, speed: 1, opacity_min: .1, sync: !1 } },
      size: { value: 3, random: !0, anim: { enable: !1, speed: 40, size_min: .1, sync: !1 } },
      line_linked: { enable: !0, distance: 150, color: "#68d9b5", opacity: .2, width: 1 },
      move: {
        enable: !0,
        speed: 3,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 },
      modes: {
        grab: { distance: 200, line_linked: { opacity: .2 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: .4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: !0
  })
}
function a(e) {
  var t = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", n = $("#intro"), i = $("nav"),
    r = $("#particles"), s = e.shift(), l = s[0], c = s[1], u = s[2];
  0 !== e.length ? n.text(l).addClass("animated " + c).one(t, function () {
    $(this).removeClass("animated " + c).addClass("animated " + u).one(t, function () {
      $(this).removeClass("animated " + u), a(e)
    })
  }) : n.text(l).addClass("animated " + c).one(t, function () {
    $(this).removeClass("animated " + c), r.css({ visibility: "" }), o(r, "fadeIn"), i.removeClass("hidden"), o(i, "fadeIn")
  })
}
function o(e, t, n) {
  e.addClass("animated " + t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
    $(this).removeClass("animated " + t), "function" == typeof n && n()
  })
}
function r(e) {
  o(e, "zoomIn", function () {
    $("html, body").animate({ scrollTop: e.offset().top })
  })
}
function s() {
  $("html, body").animate({ scrollTop: 0 })
}
function l(e) {
  return $("<div />").text(e).html()
}
function c(e) {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function u(e) {
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e.val())
}
function d(e) {
  return e.val().length > 2
}
function p(e) {
  return 6 === e.val().length
}
function f(e) {
  return /^[abceghjklmpqrstvABCEGHJKLMPQRSTV][a-zA-Z0-9]{4}$/.test(e.val())
}
function h(e) {
  return /^(\d{5}|\d{9})$/.test(e.val())
}
function v(e) {
  return /^\d{5}$/.test(e.val())
}
function m(e) {
  e.removeClass("valid").removeClass("invalid")
}
function g(e, t) {
  t ? e.removeClass("invalid") : e.removeClass("valid").addClass("invalid")
}
function b(e, t) {
  var n = t(e);
  return g(e, n), n || o(e, "shake", 0 === e.val().length ? function () {
    e.removeClass("invalid")
  } : null), n
}
function w(e, t) {
  e.val(e.val().trim()), 0 === e.val().length ? m(e) : g(e, t(e))
}
function x(e, t) {
  e.animatedModal({
    modalTarget: t, animatedIn: "zoomIn", animatedOut: "zoomOut", afterOpen: function () {
      C(this)
    }, beforeClose: function () {
      T()
    }, afterClose: function () {
      k()
    }
  })
}
function k() {
  var e = $(window).height() / 2, t = $("#home .company").height() / 2;
  $("#home .company").css("top", e - t)
}
function C(e) {
  $("header").hide(), $("footer").css({ visibility: "hidden" }), $("#home").hide(), $("#contact").hide(), $("#particles").css({ visibility: "hidden" });
  var t = "#" + e.modalTarget;
  $(t).css({
    position: "",
    width: "",
    height: ""
  }), $(t + " button, " + t + " input").prop("disabled", !1), history.replaceState(null, "", e.modalTarget)
}
function T() {
  $("nav").removeClass("hidden"), $("header").show(), $("footer").css({ visibility: "" }), $("#home").show(), $("#contact").show(), $("#particles").css({ visibility: "" }), $(".pricer").css({
    position: "fixed",
    width: "100%",
    height: "100%"
  }), $(".pricer button, .pricer input").prop("disabled", !0), history.replaceState(null, "Turing Inc.", "/")
}
function S() {
  var e = $("#eula");
  return e.length > 0 ? e : (e = $('<div id="eula" class="modal modal-fixed-footer">     <div class="modal-content">         <h5>End User Point and Click Agreement</h5>         <p><b>Turing Inc Disclaimer</b></p>         <p>The information provided in this document is intended for informational purposes only and is subject to change without notice. Information may be changed or updated without notice.</p>         <p>TURING INC DISCLAIMS RESPONSIBILITY FOR ANY LIABILITY ATTRIBUTABLE TO END USER USE OF THE INFORMATION IN THIS DOCUMENT. TURING INC WILL NOT BE LIABLE FOR ANY CLAIMS ATTRIBUTABLE TO ANY ERRORS, OMISSIONS, OR OTHER INACCURACIES IN THE INFORMATION OR MATERIAL CONTAINED IN THIS DOCUMENT. In no event shall Turing Inc be liable for direct, indirect, special, incidental, or consequential damages arising out of the use of such information or material.</p>         <p>Should the foregoing terms and conditions be acceptable to you, please indicate your agreement and acceptance by clicking below on the button labeled "Agree".</p>     </div>     <div class="modal-footer">         <a id="btnEulaDisagree" href="#!" class="modal-action modal-close waves-effect waves-red btn btn-flat">Disagree</a>         <a id="btnEulaAgree" href="#!" class="modal-action modal-close waves-effect waves-green btn btn-flat">Agree</a>     </div> </div>'), $("body").append(e), e.find("#btnEulaDisagree").click(function (e) {
    return e.preventDefault(), !1
  }), e.modal({
    dismissible: !0,
    opacity: .5,
    inDuration: 300,
    outDuration: 200,
    startingTop: "4%",
    endingTop: "10%",
    ready: function () {
      e.find(".modal-content").scrollTop(0)
    },
    complete: function () {
      e.find("#btnEulaAgree").off("click")
    }
  }), e)
}
function A(e) {
  var t = S();
  t.find("#btnEulaAgree").click(function (t) {
    return t.preventDefault(), "function" == typeof e && e(), !1
  }), $("input").blur(), t.trigger("openModal")
}
function E(e, t) {
  var n = $("<p class='right'></p>"),
    i = $(" <a class='btn-floating waves-effect waves-light red lighten-1'>     <i class='material-icons'>delete</i> </a>");
  return "function" == typeof t && i.click(function () {
    t(), Materialize.updateTextFields(), s(), o(e, "zoomOut", function () {
      e.remove()
    })
  }), n.append(i), n
}
function P(e, t, n, i, a, r, s) {
  var l = $('<span class="flow-text loadingPulse">{</span><span class="flow-text loadingPulse loadingPulseDelay">}</span>');
  null !== t && o(t, "zoomOut", function () {
    t.length > 0 && t.css({ visibility: "hidden", opacity: 0 })
  }), o(n, "zoomOut", function () {
    n.hide(), l.appendTo(n.parent()).promise().done(function () {
      _(e, n, i, a, r, s)
    })
  })
}
function _(e, t, n, i, a, r) {
  "function" == typeof n && n(), $.ajax({
    url: e.attr("action"),
    type: e.attr("method"),
    data: e.serialize(),
    dataType: "json",
    success: function (e) {
      var n = t.parent().find(".loadingPulse");
      if ("function" == typeof a) {
        var r = $("<div class='flow-text green-text text-lighten-2'></div>");
        r.text(a()), O(t, n, r, i, e)
      } else n.fadeOut().promise().done(function () {
        n.remove(), t.show(), o(t, "zoomIn"), "function" == typeof i && i(e)
      })
    },
    error: function (e, n, i) {
      var a = t.parent().find(".loadingPulse"), o = $("<div class='flow-text red-text text-lighten-2'></div>");
      o.text(r(e.status)), O(t, a, o)
    }
  })
}
function O(e, t, n, i, a) {
  t.fadeOut().promise().done(function () {
    t.remove(), n.appendTo(e.parent()).promise().done(function () {
      o(n, "fadeIn", function () {
        setTimeout(function () {
          o(n, "flipOutX", function () {
            n.remove(), e.show(), o(e, "zoomIn"), "function" == typeof i && i(a)
          })
        }, 2e3)
      })
    })
  })
}
!function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document)throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t) {
    var n = (t = t || ne).createElement("script");
    n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
  }

  function i(e) {
    var t = !!e && "length" in e && e.length, n = he.type(e);
    return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
  }

  function a(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }

  function o(e, t, n) {
    return he.isFunction(t) ? he.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n
    }) : t.nodeType ? he.grep(e, function (e) {
      return e === t !== n
    }) : "string" != typeof t ? he.grep(e, function (e) {
      return se.call(t, e) > -1 !== n
    }) : Te.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function (e) {
      return se.call(t, e) > -1 !== n && 1 === e.nodeType
    }))
  }

  function r(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);
    return e
  }

  function s(e) {
    var t = {};
    return he.each(e.match(_e) || [], function (e, n) {
      t[n] = !0
    }), t
  }

  function l(e) {
    return e
  }

  function c(e) {
    throw e
  }

  function u(e, t, n, i) {
    var a;
    try {
      e && he.isFunction(a = e.promise) ? a.call(e).done(t).fail(n) : e && he.isFunction(a = e.then) ? a.call(e, t, n) : t.apply(void 0, [e].slice(i))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }

  function d() {
    ne.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), he.ready()
  }

  function p() {
    this.expando = he.expando + p.uid++
  }

  function f(e) {
    return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ne.test(e) ? JSON.parse(e) : e)
  }

  function h(e, t, n) {
    var i;
    if (void 0 === n && 1 === e.nodeType)if (i = "data-" + t.replace(Le, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
      try {
        n = f(n)
      } catch (e) {
      }
      qe.set(e, t, n)
    } else n = void 0;
    return n
  }

  function v(e, t, n, i) {
    var a, o = 1, r = 20, s = i ? function () {
        return i.cur()
      } : function () {
        return he.css(e, t, "")
      }, l = s(), c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
      u = (he.cssNumber[t] || "px" !== c && +l) && ze.exec(he.css(e, t));
    if (u && u[3] !== c) {
      c = c || u[3], n = n || [], u = +l || 1;
      do {
        u /= o = o || ".5", he.style(e, t, u + c)
      } while (o !== (o = s() / l) && 1 !== o && --r)
    }
    return n && (u = +u || +l || 0, a = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = a)), a
  }

  function m(e) {
    var t, n = e.ownerDocument, i = e.nodeName, a = We[i];
    return a || (t = n.body.appendChild(n.createElement(i)), a = he.css(t, "display"), t.parentNode.removeChild(t), "none" === a && (a = "block"), We[i] = a, a)
  }

  function g(e, t) {
    for (var n, i, a = [], o = 0, r = e.length; o < r; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (a[o] = Me.get(i, "display") || null, a[o] || (i.style.display = "")), "" === i.style.display && He(i) && (a[o] = m(i))) : "none" !== n && (a[o] = "none", Me.set(i, "display", n)));
    for (o = 0; o < r; o++)null != a[o] && (e[o].style.display = a[o]);
    return e
  }

  function y(e, t) {
    var n;
    return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && a(e, t) ? he.merge([e], n) : n
  }

  function b(e, t) {
    for (var n = 0, i = e.length; n < i; n++)Me.set(e[n], "globalEval", !t || Me.get(t[n], "globalEval"))
  }

  function w(e, t, n, i, a) {
    for (var o, r, s, l, c, u, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)if ((o = e[f]) || 0 === o)if ("object" === he.type(o)) he.merge(p, o.nodeType ? [o] : o); else if (Qe.test(o)) {
      for (r = r || d.appendChild(t.createElement("div")), s = (Xe.exec(o) || ["", ""])[1].toLowerCase(), l = Ye[s] || Ye._default, r.innerHTML = l[1] + he.htmlPrefilter(o) + l[2], u = l[0]; u--;)r = r.lastChild;
      he.merge(p, r.childNodes), (r = d.firstChild).textContent = ""
    } else p.push(t.createTextNode(o));
    for (d.textContent = "", f = 0; o = p[f++];)if (i && he.inArray(o, i) > -1) a && a.push(o); else if (c = he.contains(o.ownerDocument, o), r = y(d.appendChild(o), "script"), c && b(r), n)for (u = 0; o = r[u++];)Be.test(o.type || "") && n.push(o);
    return d
  }

  function x() {
    return !0
  }

  function k() {
    return !1
  }

  function C() {
    try {
      return ne.activeElement
    } catch (e) {
    }
  }

  function T(e, t, n, i, a, o) {
    var r, s;
    if ("object" == typeof t) {
      "string" != typeof n && (i = i || n, n = void 0);
      for (s in t)T(e, s, n, i, t[s], o);
      return e
    }
    if (null == i && null == a ? (a = n, i = n = void 0) : null == a && ("string" == typeof n ? (a = i, i = void 0) : (a = i, i = n, n = void 0)), !1 === a) a = k; else if (!a)return e;
    return 1 === o && (r = a, (a = function (e) {
      return he().off(e), r.apply(this, arguments)
    }).guid = r.guid || (r.guid = he.guid++)), e.each(function () {
      he.event.add(this, t, a, i, n)
    })
  }

  function S(e, t) {
    return a(e, "table") && a(11 !== t.nodeType ? t : t.firstChild, "tr") ? he(">tbody", e)[0] || e : e
  }

  function A(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function E(e) {
    var t = nt.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function P(e, t) {
    var n, i, a, o, r, s, l, c;
    if (1 === t.nodeType) {
      if (Me.hasData(e) && (o = Me.access(e), r = Me.set(t, o), c = o.events)) {
        delete r.handle, r.events = {};
        for (a in c)for (n = 0, i = c[a].length; n < i; n++)he.event.add(t, a, c[a][n])
      }
      qe.hasData(e) && (s = qe.access(e), l = he.extend({}, s), qe.set(t, l))
    }
  }

  function _(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
  }

  function O(e, t, i, a) {
    t = oe.apply([], t);
    var o, r, s, l, c, u, d = 0, p = e.length, f = p - 1, h = t[0], v = he.isFunction(h);
    if (v || p > 1 && "string" == typeof h && !fe.checkClone && tt.test(h))return e.each(function (n) {
      var o = e.eq(n);
      v && (t[0] = h.call(this, n, o.html())), O(o, t, i, a)
    });
    if (p && (o = w(t, e[0].ownerDocument, !1, e, a), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || a)) {
      for (l = (s = he.map(y(o, "script"), A)).length; d < p; d++)c = o, d !== f && (c = he.clone(c, !0, !0), l && he.merge(s, y(c, "script"))), i.call(e[d], c, d);
      if (l)for (u = s[s.length - 1].ownerDocument, he.map(s, E), d = 0; d < l; d++)c = s[d], Be.test(c.type || "") && !Me.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(it, ""), u))
    }
    return e
  }

  function $(e, t, n) {
    for (var i, a = t ? he.filter(t, e) : e, o = 0; null != (i = a[o]); o++)n || 1 !== i.nodeType || he.cleanData(y(i)), i.parentNode && (n && he.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
    return e
  }

  function D(e, t, n) {
    var i, a, o, r, s = e.style;
    return (n = n || rt(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (r = he.style(e, t)), !fe.pixelMarginRight() && ot.test(r) && at.test(t) && (i = s.width, a = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = r, r = n.width, s.width = i, s.minWidth = a, s.maxWidth = o)), void 0 !== r ? r + "" : r
  }

  function I(e, t) {
    return {
      get: function () {
        if (!e())return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }

  function M(e) {
    if (e in pt)return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)if ((e = dt[n] + t) in pt)return e
  }

  function q(e) {
    var t = he.cssProps[e];
    return t || (t = he.cssProps[e] = M(e) || e), t
  }

  function N(e, t, n) {
    var i = ze.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
  }

  function L(e, t, n, i, a) {
    var o, r = 0;
    for (o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2)"margin" === n && (r += he.css(e, n + Fe[o], !0, a)), i ? ("content" === n && (r -= he.css(e, "padding" + Fe[o], !0, a)), "margin" !== n && (r -= he.css(e, "border" + Fe[o] + "Width", !0, a))) : (r += he.css(e, "padding" + Fe[o], !0, a), "padding" !== n && (r += he.css(e, "border" + Fe[o] + "Width", !0, a)));
    return r
  }

  function j(e, t, n) {
    var i, a = rt(e), o = D(e, t, a), r = "border-box" === he.css(e, "boxSizing", !1, a);
    return ot.test(o) ? o : (i = r && (fe.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + L(e, t, n || (r ? "border" : "content"), i, a) + "px")
  }

  function z(e, t, n, i, a) {
    return new z.prototype.init(e, t, n, i, a)
  }

  function F() {
    ht && (!1 === ne.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(F) : e.setTimeout(F, he.fx.interval), he.fx.tick())
  }

  function H() {
    return e.setTimeout(function () {
      ft = void 0
    }), ft = he.now()
  }

  function R(e, t) {
    var n, i = 0, a = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)a["margin" + (n = Fe[i])] = a["padding" + n] = e;
    return t && (a.opacity = a.width = e), a
  }

  function W(e, t, n) {
    for (var i, a = (B.tweeners[t] || []).concat(B.tweeners["*"]), o = 0, r = a.length; o < r; o++)if (i = a[o].call(n, t, e))return i
  }

  function V(e, t, n) {
    var i, a, o, r, s, l, c, u, d = "width" in t || "height" in t, p = this, f = {}, h = e.style,
      v = e.nodeType && He(e), m = Me.get(e, "fxshow");
    n.queue || (null == (r = he._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, s = r.empty.fire, r.empty.fire = function () {
      r.unqueued || s()
    }), r.unqueued++, p.always(function () {
      p.always(function () {
        r.unqueued--, he.queue(e, "fx").length || r.empty.fire()
      })
    }));
    for (i in t)if (a = t[i], vt.test(a)) {
      if (delete t[i], o = o || "toggle" === a, a === (v ? "hide" : "show")) {
        if ("show" !== a || !m || void 0 === m[i])continue;
        v = !0
      }
      f[i] = m && m[i] || he.style(e, i)
    }
    if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(f)) {
      d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (c = m && m.display) && (c = Me.get(e, "display")), "none" === (u = he.css(e, "display")) && (c ? u = c : (g([e], !0), c = e.style.display || c, u = he.css(e, "display"), g([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (p.done(function () {
        h.display = c
      }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
      })), l = !1;
      for (i in f)l || (m ? "hidden" in m && (v = m.hidden) : m = Me.access(e, "fxshow", { display: c }), o && (m.hidden = !v), v && g([e], !0), p.done(function () {
        v || g([e]), Me.remove(e, "fxshow");
        for (i in f)he.style(e, i, f[i])
      })), l = W(v ? m[i] : 0, i, p), i in m || (m[i] = l.start, v && (l.end = l.start, l.start = 0))
    }
  }

  function X(e, t) {
    var n, i, a, o, r;
    for (n in e)if (i = he.camelCase(n), a = t[i], o = e[n], Array.isArray(o) && (a = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (r = he.cssHooks[i]) && "expand" in r) {
      o = r.expand(o), delete e[i];
      for (n in o)n in e || (e[n] = o[n], t[n] = a)
    } else t[i] = a
  }

  function B(e, t, n) {
    var i, a, o = 0, r = B.prefilters.length, s = he.Deferred().always(function () {
      delete l.elem
    }), l = function () {
      if (a)return !1;
      for (var t = ft || H(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++)c.tweens[o].run(i);
      return s.notifyWith(e, [c, i, n]), i < 1 && r ? n : (r || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
    }, c = s.promise({
      elem: e,
      props: he.extend({}, t),
      opts: he.extend(!0, { specialEasing: {}, easing: he.easing._default }, n),
      originalProperties: t,
      originalOptions: n,
      startTime: ft || H(),
      duration: n.duration,
      tweens: [],
      createTween: function (t, n) {
        var i = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
        return c.tweens.push(i), i
      },
      stop: function (t) {
        var n = 0, i = t ? c.tweens.length : 0;
        if (a)return this;
        for (a = !0; n < i; n++)c.tweens[n].run(1);
        return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
      }
    }), u = c.props;
    for (X(u, c.opts.specialEasing); o < r; o++)if (i = B.prefilters[o].call(c, e, u, c.opts))return he.isFunction(i.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(i.stop, i)), i;
    return he.map(u, W, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), he.fx.timer(he.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c
  }

  function Y(e) {
    return (e.match(_e) || []).join(" ")
  }

  function Q(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function U(e, t, n, i) {
    var a;
    if (Array.isArray(t)) he.each(t, function (t, a) {
      n || At.test(e) ? i(e, a) : U(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, n, i)
    }); else if (n || "object" !== he.type(t)) i(e, t); else for (a in t)U(e + "[" + a + "]", t[a], n, i)
  }

  function G(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");
      var i, a = 0, o = t.toLowerCase().match(_e) || [];
      if (he.isFunction(n))for (; i = o[a++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
    }
  }

  function Z(e, t, n, i) {
    function a(s) {
      var l;
      return o[s] = !0, he.each(e[s] || [], function (e, s) {
        var c = s(t, n, i);
        return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
      }), l
    }

    var o = {}, r = e === jt;
    return a(t.dataTypes[0]) || !o["*"] && a("*")
  }

  function J(e, t) {
    var n, i, a = he.ajaxSettings.flatOptions || {};
    for (n in t)void 0 !== t[n] && ((a[n] ? e : i || (i = {}))[n] = t[n]);
    return i && he.extend(!0, e, i), e
  }

  function K(e, t, n) {
    for (var i, a, o, r, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)for (a in s)if (s[a] && s[a].test(i)) {
      l.unshift(a);
      break
    }
    if (l[0] in n) o = l[0]; else {
      for (a in n) {
        if (!l[0] || e.converters[a + " " + l[0]]) {
          o = a;
          break
        }
        r || (r = a)
      }
      o = o || r
    }
    if (o)return o !== l[0] && l.unshift(o), n[o]
  }

  function ee(e, t, n, i) {
    var a, o, r, s, l, c = {}, u = e.dataTypes.slice();
    if (u[1])for (r in e.converters)c[r.toLowerCase()] = e.converters[r];
    for (o = u.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())if ("*" === o) o = l; else if ("*" !== l && l !== o) {
      if (!(r = c[l + " " + o] || c["* " + o]))for (a in c)if ((s = a.split(" "))[1] === o && (r = c[l + " " + s[0]] || c["* " + s[0]])) {
        !0 === r ? r = c[a] : !0 !== c[a] && (o = s[0], u.unshift(s[1]));
        break
      }
      if (!0 !== r)if (r && e.throws) t = r(t); else try {
        t = r(t)
      } catch (e) {
        return { state: "parsererror", error: r ? e : "No conversion from " + l + " to " + o }
      }
    }
    return { state: "success", data: t }
  }

  var te = [], ne = e.document, ie = Object.getPrototypeOf, ae = te.slice, oe = te.concat, re = te.push,
    se = te.indexOf, le = {}, ce = le.toString, ue = le.hasOwnProperty, de = ue.toString, pe = de.call(Object), fe = {},
    he = function (e, t) {
      return new he.fn.init(e, t)
    }, ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, me = /^-ms-/, ge = /-([a-z])/g, ye = function (e, t) {
      return t.toUpperCase()
    };
  he.fn = he.prototype = {
    jquery: "3.2.1", constructor: he, length: 0, toArray: function () {
      return ae.call(this)
    }, get: function (e) {
      return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
    }, pushStack: function (e) {
      var t = he.merge(this.constructor(), e);
      return t.prevObject = this, t
    }, each: function (e) {
      return he.each(this, e)
    }, map: function (e) {
      return this.pushStack(he.map(this, function (t, n) {
        return e.call(t, n, t)
      }))
    }, slice: function () {
      return this.pushStack(ae.apply(this, arguments))
    }, first: function () {
      return this.eq(0)
    }, last: function () {
      return this.eq(-1)
    }, eq: function (e) {
      var t = this.length, n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
    }, end: function () {
      return this.prevObject || this.constructor()
    }, push: re, sort: te.sort, splice: te.splice
  }, he.extend = he.fn.extend = function () {
    var e, t, n, i, a, o, r = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
    for ("boolean" == typeof r && (c = r, r = arguments[s] || {}, s++), "object" == typeof r || he.isFunction(r) || (r = {}), s === l && (r = this, s--); s < l; s++)if (null != (e = arguments[s]))for (t in e)n = r[t], r !== (i = e[t]) && (c && i && (he.isPlainObject(i) || (a = Array.isArray(i))) ? (a ? (a = !1, o = n && Array.isArray(n) ? n : []) : o = n && he.isPlainObject(n) ? n : {}, r[t] = he.extend(c, o, i)) : void 0 !== i && (r[t] = i));
    return r
  }, he.extend({
    expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e)
    }, noop: function () {
    }, isFunction: function (e) {
      return "function" === he.type(e)
    }, isWindow: function (e) {
      return null != e && e === e.window
    }, isNumeric: function (e) {
      var t = he.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== ce.call(e)) && (!(t = ie(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && de.call(n) === pe)
    }, isEmptyObject: function (e) {
      var t;
      for (t in e)return !1;
      return !0
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
    }, globalEval: function (e) {
      n(e)
    }, camelCase: function (e) {
      return e.replace(me, "ms-").replace(ge, ye)
    }, each: function (e, t) {
      var n, a = 0;
      if (i(e))for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++); else for (a in e)if (!1 === t.call(e[a], a, e[a]))break;
      return e
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(ve, "")
    }, makeArray: function (e, t) {
      var n = t || [];
      return null != e && (i(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)), n
    }, inArray: function (e, t, n) {
      return null == t ? -1 : se.call(t, e, n)
    }, merge: function (e, t) {
      for (var n = +t.length, i = 0, a = e.length; i < n; i++)e[a++] = t[i];
      return e.length = a, e
    }, grep: function (e, t, n) {
      for (var i = [], a = 0, o = e.length, r = !n; a < o; a++)!t(e[a], a) !== r && i.push(e[a]);
      return i
    }, map: function (e, t, n) {
      var a, o, r = 0, s = [];
      if (i(e))for (a = e.length; r < a; r++)null != (o = t(e[r], r, n)) && s.push(o); else for (r in e)null != (o = t(e[r], r, n)) && s.push(o);
      return oe.apply([], s)
    }, guid: 1, proxy: function (e, t) {
      var n, i, a;
      if ("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e))return i = ae.call(arguments, 2), a = function () {
        return e.apply(t || this, i.concat(ae.call(arguments)))
      }, a.guid = e.guid = e.guid || he.guid++, a
    }, now: Date.now, support: fe
  }), "function" == typeof Symbol && (he.fn[Symbol.iterator] = te[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    le["[object " + t + "]"] = t.toLowerCase()
  });
  var be = function (e) {
    function t(e, t, n, i) {
      var a, o, r, s, l, u, p, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
      if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)return n;
      if (!i && ((t ? t.ownerDocument || t : z) !== $ && O(t), t = t || $, I)) {
        if (11 !== h && (l = ve.exec(e)))if (a = l[1]) {
          if (9 === h) {
            if (!(r = t.getElementById(a)))return n;
            if (r.id === a)return n.push(r), n
          } else if (f && (r = f.getElementById(a)) && L(t, r) && r.id === a)return n.push(r), n
        } else {
          if (l[2])return G.apply(n, t.getElementsByTagName(e)), n;
          if ((a = l[3]) && w.getElementsByClassName && t.getElementsByClassName)return G.apply(n, t.getElementsByClassName(a)), n
        }
        if (w.qsa && !V[e + " "] && (!M || !M.test(e))) {
          if (1 !== h) f = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
            for ((s = t.getAttribute("id")) ? s = s.replace(be, we) : t.setAttribute("id", s = j), o = (u = T(e)).length; o--;)u[o] = "#" + s + " " + d(u[o]);
            p = u.join(","), f = me.test(e) && c(t.parentNode) || t
          }
          if (p)try {
            return G.apply(n, f.querySelectorAll(p)), n
          } catch (e) {
          } finally {
            s === j && t.removeAttribute("id")
          }
        }
      }
      return A(e.replace(oe, "$1"), t, n, i)
    }

    function n() {
      function e(n, i) {
        return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
      }

      var t = [];
      return e
    }

    function i(e) {
      return e[j] = !0, e
    }

    function a(e) {
      var t = $.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function o(e, t) {
      for (var n = e.split("|"), i = n.length; i--;)x.attrHandle[n[i]] = t
    }

    function r(e, t) {
      var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (i)return i;
      if (n)for (; n = n.nextSibling;)if (n === t)return -1;
      return e ? 1 : -1
    }

    function s(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
      }
    }

    function l(e) {
      return i(function (t) {
        return t = +t, i(function (n, i) {
          for (var a, o = e([], n.length, t), r = o.length; r--;)n[a = o[r]] && (n[a] = !(i[a] = n[a]))
        })
      })
    }

    function c(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }

    function u() {
    }

    function d(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++)i += e[t].value;
      return i
    }

    function p(e, t, n) {
      var i = t.dir, a = t.next, o = a || i, r = n && "parentNode" === o, s = H++;
      return t.first ? function (t, n, a) {
        for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, a);
        return !1
      } : function (t, n, l) {
        var c, u, d, p = [F, s];
        if (l) {
          for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, l))return !0
        } else for (; t = t[i];)if (1 === t.nodeType || r)if (d = t[j] || (t[j] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), a && a === t.nodeName.toLowerCase()) t = t[i] || t; else {
          if ((c = u[o]) && c[0] === F && c[1] === s)return p[2] = c[2];
          if (u[o] = p, p[2] = e(t, n, l))return !0
        }
        return !1
      }
    }

    function f(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var a = e.length; a--;)if (!e[a](t, n, i))return !1;
        return !0
      } : e[0]
    }

    function h(e, n, i) {
      for (var a = 0, o = n.length; a < o; a++)t(e, n[a], i);
      return i
    }

    function v(e, t, n, i, a) {
      for (var o, r = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, a) || (r.push(o), c && t.push(s)));
      return r
    }

    function m(e, t, n, a, o, r) {
      return a && !a[j] && (a = m(a)), o && !o[j] && (o = m(o, r)), i(function (i, r, s, l) {
        var c, u, d, p = [], f = [], m = r.length, g = i || h(t || "*", s.nodeType ? [s] : s, []),
          y = !e || !i && t ? g : v(g, p, e, s, l), b = n ? o || (i ? e : m || a) ? [] : r : y;
        if (n && n(y, b, s, l), a)for (c = v(b, f), a(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[f[u]] = !(y[f[u]] = d));
        if (i) {
          if (o || e) {
            if (o) {
              for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
              o(null, b = [], c, l)
            }
            for (u = b.length; u--;)(d = b[u]) && (c = o ? J(i, d) : p[u]) > -1 && (i[c] = !(r[c] = d))
          }
        } else b = v(b === r ? b.splice(m, b.length) : b), o ? o(null, r, b, l) : G.apply(r, b)
      })
    }

    function g(e) {
      for (var t, n, i, a = e.length, o = x.relative[e[0].type], r = o || x.relative[" "], s = o ? 1 : 0, l = p(function (e) {
        return e === t
      }, r, !0), c = p(function (e) {
        return J(t, e) > -1
      }, r, !0), u = [function (e, n, i) {
        var a = !o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
        return t = null, a
      }]; s < a; s++)if (n = x.relative[e[s].type]) u = [p(f(u), n)]; else {
        if ((n = x.filter[e[s].type].apply(null, e[s].matches))[j]) {
          for (i = ++s; i < a && !x.relative[e[i].type]; i++);
          return m(s > 1 && f(u), s > 1 && d(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(oe, "$1"), n, s < i && g(e.slice(s, i)), i < a && g(e = e.slice(i)), i < a && d(e))
        }
        u.push(n)
      }
      return f(u)
    }

    function y(e, n) {
      var a = n.length > 0, o = e.length > 0, r = function (i, r, s, l, c) {
        var u, d, p, f = 0, h = "0", m = i && [], g = [], y = E, b = i || o && x.find.TAG("*", c),
          w = F += null == y ? 1 : Math.random() || .1, k = b.length;
        for (c && (E = r === $ || r || c); h !== k && null != (u = b[h]); h++) {
          if (o && u) {
            for (d = 0, r || u.ownerDocument === $ || (O(u), s = !I); p = e[d++];)if (p(u, r || $, s)) {
              l.push(u);
              break
            }
            c && (F = w)
          }
          a && ((u = !p && u) && f--, i && m.push(u))
        }
        if (f += h, a && h !== f) {
          for (d = 0; p = n[d++];)p(m, g, r, s);
          if (i) {
            if (f > 0)for (; h--;)m[h] || g[h] || (g[h] = Q.call(l));
            g = v(g)
          }
          G.apply(l, g), c && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
        }
        return c && (F = w, E = y), m
      };
      return a ? i(r) : r
    }

    var b, w, x, k, C, T, S, A, E, P, _, O, $, D, I, M, q, N, L, j = "sizzle" + 1 * new Date, z = e.document, F = 0,
      H = 0, R = n(), W = n(), V = n(), X = function (e, t) {
        return e === t && (_ = !0), 0
      }, B = {}.hasOwnProperty, Y = [], Q = Y.pop, U = Y.push, G = Y.push, Z = Y.slice, J = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++)if (e[n] === t)return n;
        return -1
      },
      K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
      ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
      ae = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
      re = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
      le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(ie),
      ue = new RegExp("^" + te + "$"), de = {
        ID: new RegExp("^#(" + te + ")"),
        CLASS: new RegExp("^\\.(" + te + ")"),
        TAG: new RegExp("^(" + te + "|[*])"),
        ATTR: new RegExp("^" + ne),
        PSEUDO: new RegExp("^" + ie),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + K + ")$", "i"),
        needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
      }, pe = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/,
      ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/,
      ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function (e, t, n) {
        var i = "0x" + t - 65536;
        return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
      }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function (e, t) {
        return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
      }, xe = function () {
        O()
      }, ke = p(function (e) {
        return !0 === e.disabled && ("form" in e || "label" in e)
      }, { dir: "parentNode", next: "legend" });
    try {
      G.apply(Y = Z.call(z.childNodes), z.childNodes), Y[z.childNodes.length].nodeType
    } catch (e) {
      G = {
        apply: Y.length ? function (e, t) {
          U.apply(e, Z.call(t))
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];);
          e.length = n - 1
        }
      }
    }
    w = t.support = {}, C = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName
    }, O = t.setDocument = function (e) {
      var t, n, i = e ? e.ownerDocument || e : z;
      return i !== $ && 9 === i.nodeType && i.documentElement ? ($ = i, D = $.documentElement, I = !C($), z !== $ && (n = $.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = a(function (e) {
        return e.className = "i", !e.getAttribute("className")
      }), w.getElementsByTagName = a(function (e) {
        return e.appendChild($.createComment("")), !e.getElementsByTagName("*").length
      }), w.getElementsByClassName = he.test($.getElementsByClassName), w.getById = a(function (e) {
        return D.appendChild(e).id = j, !$.getElementsByName || !$.getElementsByName(j).length
      }), w.getById ? (x.filter.ID = function (e) {
        var t = e.replace(ge, ye);
        return function (e) {
          return e.getAttribute("id") === t
        }
      }, x.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && I) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (x.filter.ID = function (e) {
        var t = e.replace(ge, ye);
        return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
          return n && n.value === t
        }
      }, x.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && I) {
          var n, i, a, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e)return [o];
            for (a = t.getElementsByName(e), i = 0; o = a[i++];)if ((n = o.getAttributeNode("id")) && n.value === e)return [o]
          }
          return []
        }
      }), x.find.TAG = w.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
      } : function (e, t) {
        var n, i = [], a = 0, o = t.getElementsByTagName(e);
        if ("*" === e) {
          for (; n = o[a++];)1 === n.nodeType && i.push(n);
          return i
        }
        return o
      }, x.find.CLASS = w.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && I)return t.getElementsByClassName(e)
        }, q = [], M = [], (w.qsa = he.test($.querySelectorAll)) && (a(function (e) {
        D.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || M.push("\\[" + ee + "*(?:value|" + K + ")"), e.querySelectorAll("[id~=" + j + "-]").length || M.push("~="), e.querySelectorAll(":checked").length || M.push(":checked"), e.querySelectorAll("a#" + j + "+*").length || M.push(".#.+[+~]")
      }), a(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = $.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && M.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && M.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
      })), (w.matchesSelector = he.test(N = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && a(function (e) {
        w.disconnectedMatch = N.call(e, "*"), N.call(e, "[s!='']:x"), q.push("!=", ie)
      }), M = M.length && new RegExp(M.join("|")), q = q.length && new RegExp(q.join("|")), t = he.test(D.compareDocumentPosition), L = t || he.test(D.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
      } : function (e, t) {
        if (t)for (; t = t.parentNode;)if (t === e)return !0;
        return !1
      }, X = t ? function (e, t) {
        if (e === t)return _ = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === $ || e.ownerDocument === z && L(z, e) ? -1 : t === $ || t.ownerDocument === z && L(z, t) ? 1 : P ? J(P, e) - J(P, t) : 0 : 4 & n ? -1 : 1)
      } : function (e, t) {
        if (e === t)return _ = !0, 0;
        var n, i = 0, a = e.parentNode, o = t.parentNode, s = [e], l = [t];
        if (!a || !o)return e === $ ? -1 : t === $ ? 1 : a ? -1 : o ? 1 : P ? J(P, e) - J(P, t) : 0;
        if (a === o)return r(e, t);
        for (n = e; n = n.parentNode;)s.unshift(n);
        for (n = t; n = n.parentNode;)l.unshift(n);
        for (; s[i] === l[i];)i++;
        return i ? r(s[i], l[i]) : s[i] === z ? -1 : l[i] === z ? 1 : 0
      }, $) : $
    }, t.matches = function (e, n) {
      return t(e, null, null, n)
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== $ && O(e), n = n.replace(le, "='$1']"), w.matchesSelector && I && !V[n + " "] && (!q || !q.test(n)) && (!M || !M.test(n)))try {
        var i = N.call(e, n);
        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return i
      } catch (e) {
      }
      return t(n, $, null, [e]).length > 0
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== $ && O(e), L(e, t)
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== $ && O(e);
      var n = x.attrHandle[t.toLowerCase()], i = n && B.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
      return void 0 !== i ? i : w.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }, t.escape = function (e) {
      return (e + "").replace(be, we)
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e)
    }, t.uniqueSort = function (e) {
      var t, n = [], i = 0, a = 0;
      if (_ = !w.detectDuplicates, P = !w.sortStable && e.slice(0), e.sort(X), _) {
        for (; t = e[a++];)t === e[a] && (i = n.push(a));
        for (; i--;)e.splice(n[i], 1)
      }
      return P = null, e
    }, k = t.getText = function (e) {
      var t, n = "", i = 0, a = e.nodeType;
      if (a) {
        if (1 === a || 9 === a || 11 === a) {
          if ("string" == typeof e.textContent)return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling)n += k(e)
        } else if (3 === a || 4 === a)return e.nodeValue
      } else for (; t = e[i++];)n += k(t);
      return n
    }, (x = t.selectors = {
      cacheLength: 50,
      createPseudo: i,
      match: de,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(ge, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
        }, PSEUDO: function (e) {
          var t, n = !e[6] && e[2];
          return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(ge, ye).toLowerCase();
          return "*" === e ? function () {
            return !0
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t
          }
        }, CLASS: function (e) {
          var t = R[e + " "];
          return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && R(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
        }, ATTR: function (e, n, i) {
          return function (a) {
            var o = t.attr(a, e);
            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
          }
        }, CHILD: function (e, t, n, i, a) {
          var o = "nth" !== e.slice(0, 3), r = "last" !== e.slice(-4), s = "of-type" === t;
          return 1 === i && 0 === a ? function (e) {
            return !!e.parentNode
          } : function (t, n, l) {
            var c, u, d, p, f, h, v = o !== r ? "nextSibling" : "previousSibling", m = t.parentNode,
              g = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
            if (m) {
              if (o) {
                for (; v;) {
                  for (p = t; p = p[v];)if (s ? p.nodeName.toLowerCase() === g : 1 === p.nodeType)return !1;
                  h = v = "only" === e && !h && "nextSibling"
                }
                return !0
              }
              if (h = [r ? m.firstChild : m.lastChild], r && y) {
                for (b = (f = (c = (u = (d = (p = m)[j] || (p[j] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === F && c[1]) && c[2], p = f && m.childNodes[f]; p = ++f && p && p[v] || (b = f = 0) || h.pop();)if (1 === p.nodeType && ++b && p === t) {
                  u[e] = [F, f, b];
                  break
                }
              } else if (y && (b = f = (c = (u = (d = (p = t)[j] || (p[j] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === F && c[1]), !1 === b)for (; (p = ++f && p && p[v] || (b = f = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[j] || (p[j] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [F, b]), p !== t)););
              return (b -= a) === i || b % i == 0 && b / i >= 0
            }
          }
        }, PSEUDO: function (e, n) {
          var a, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
          return o[j] ? o(n) : o.length > 1 ? (a = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
            for (var i, a = o(e, n), r = a.length; r--;)e[i = J(e, a[r])] = !(t[i] = a[r])
          }) : function (e) {
            return o(e, 0, a)
          }) : o
        }
      },
      pseudos: {
        not: i(function (e) {
          var t = [], n = [], a = S(e.replace(oe, "$1"));
          return a[j] ? i(function (e, t, n, i) {
            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
          }) : function (e, i, o) {
            return t[0] = e, a(t, null, o, n), t[0] = null, !n.pop()
          }
        }), has: i(function (e) {
          return function (n) {
            return t(e, n).length > 0
          }
        }), contains: i(function (e) {
          return e = e.replace(ge, ye), function (t) {
            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
          }
        }), lang: i(function (e) {
          return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ye).toLowerCase(), function (t) {
            var n;
            do {
              if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
            } while ((t = t.parentNode) && 1 === t.nodeType);
            return !1
          }
        }), target: function (t) {
          var n = e.location && e.location.hash;
          return n && n.slice(1) === t.id
        }, root: function (e) {
          return e === D
        }, focus: function (e) {
          return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: s(!1), disabled: s(!0), checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
          return !0
        }, parent: function (e) {
          return !x.pseudos.empty(e)
        }, header: function (e) {
          return fe.test(e.nodeName)
        }, input: function (e) {
          return pe.test(e.nodeName)
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
        }, first: l(function () {
          return [0]
        }), last: l(function (e, t) {
          return [t - 1]
        }), eq: l(function (e, t, n) {
          return [n < 0 ? n + t : n]
        }), even: l(function (e, t) {
          for (var n = 0; n < t; n += 2)e.push(n);
          return e
        }), odd: l(function (e, t) {
          for (var n = 1; n < t; n += 2)e.push(n);
          return e
        }), lt: l(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;)e.push(i);
          return e
        }), gt: l(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;)e.push(i);
          return e
        })
      }
    }).pseudos.nth = x.pseudos.eq;
    for (b in{ radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })x.pseudos[b] = function (e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }(b);
    for (b in{ submit: !0, reset: !0 })x.pseudos[b] = function (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e
      }
    }(b);
    return u.prototype = x.filters = x.pseudos, x.setFilters = new u, T = t.tokenize = function (e, n) {
      var i, a, o, r, s, l, c, u = W[e + " "];
      if (u)return n ? 0 : u.slice(0);
      for (s = e, l = [], c = x.preFilter; s;) {
        i && !(a = re.exec(s)) || (a && (s = s.slice(a[0].length) || s), l.push(o = [])), i = !1, (a = se.exec(s)) && (i = a.shift(), o.push({
          value: i,
          type: a[0].replace(oe, " ")
        }), s = s.slice(i.length));
        for (r in x.filter)!(a = de[r].exec(s)) || c[r] && !(a = c[r](a)) || (i = a.shift(), o.push({
          value: i,
          type: r,
          matches: a
        }), s = s.slice(i.length));
        if (!i)break
      }
      return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
    }, S = t.compile = function (e, t) {
      var n, i = [], a = [], o = V[e + " "];
      if (!o) {
        for (t || (t = T(e)), n = t.length; n--;)(o = g(t[n]))[j] ? i.push(o) : a.push(o);
        (o = V(e, y(a, i))).selector = e
      }
      return o
    }, A = t.select = function (e, t, n, i) {
      var a, o, r, s, l, u = "function" == typeof e && e, p = !i && T(e = u.selector || e);
      if (n = n || [], 1 === p.length) {
        if ((o = p[0] = p[0].slice(0)).length > 2 && "ID" === (r = o[0]).type && 9 === t.nodeType && I && x.relative[o[1].type]) {
          if (!(t = (x.find.ID(r.matches[0].replace(ge, ye), t) || [])[0]))return n;
          u && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        for (a = de.needsContext.test(e) ? 0 : o.length; a-- && (r = o[a], !x.relative[s = r.type]);)if ((l = x.find[s]) && (i = l(r.matches[0].replace(ge, ye), me.test(o[0].type) && c(t.parentNode) || t))) {
          if (o.splice(a, 1), !(e = i.length && d(o)))return G.apply(n, i), n;
          break
        }
      }
      return (u || S(e, p))(i, t, !I, n, !t || me.test(e) && c(t.parentNode) || t), n
    }, w.sortStable = j.split("").sort(X).join("") === j, w.detectDuplicates = !!_, O(), w.sortDetached = a(function (e) {
      return 1 & e.compareDocumentPosition($.createElement("fieldset"))
    }), a(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || o("type|href|height|width", function (e, t, n) {
      if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), w.attributes && a(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || o("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
    }), a(function (e) {
      return null == e.getAttribute("disabled")
    }) || o(K, function (e, t, n) {
      var i;
      if (!n)return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
    }), t
  }(e);
  he.find = be, he.expr = be.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = be.uniqueSort, he.text = be.getText, he.isXMLDoc = be.isXML, he.contains = be.contains, he.escapeSelector = be.escape;
  var we = function (e, t, n) {
      for (var i = [], a = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
        if (a && he(e).is(n))break;
        i.push(e)
      }
      return i
    }, xe = function (e, t) {
      for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
      return n
    }, ke = he.expr.match.needsContext, Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    Te = /^.[^:#\[\.,]*$/;
  he.filter = function (e, t, n) {
    var i = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? he.find.matchesSelector(i, e) ? [i] : [] : he.find.matches(e, he.grep(t, function (e) {
      return 1 === e.nodeType
    }))
  }, he.fn.extend({
    find: function (e) {
      var t, n, i = this.length, a = this;
      if ("string" != typeof e)return this.pushStack(he(e).filter(function () {
        for (t = 0; t < i; t++)if (he.contains(a[t], this))return !0
      }));
      for (n = this.pushStack([]), t = 0; t < i; t++)he.find(e, a[t], n);
      return i > 1 ? he.uniqueSort(n) : n
    }, filter: function (e) {
      return this.pushStack(o(this, e || [], !1))
    }, not: function (e) {
      return this.pushStack(o(this, e || [], !0))
    }, is: function (e) {
      return !!o(this, "string" == typeof e && ke.test(e) ? he(e) : e || [], !1).length
    }
  });
  var Se, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (he.fn.init = function (e, t, n) {
    var i, a;
    if (!e)return this;
    if (n = n || Se, "string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || !i[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Ce.test(i[1]) && he.isPlainObject(t))for (i in t)he.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (a = ne.getElementById(i[2])) && (this[0] = a, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
  }).prototype = he.fn, Se = he(ne);
  var Ee = /^(?:parents|prev(?:Until|All))/, Pe = { children: !0, contents: !0, next: !0, prev: !0 };
  he.fn.extend({
    has: function (e) {
      var t = he(e, this), n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++)if (he.contains(this, t[e]))return !0
      })
    }, closest: function (e, t) {
      var n, i = 0, a = this.length, o = [], r = "string" != typeof e && he(e);
      if (!ke.test(e))for (; i < a; i++)for (n = this[i]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
        o.push(n);
        break
      }
      return this.pushStack(o.length > 1 ? he.uniqueSort(o) : o)
    }, index: function (e) {
      return e ? "string" == typeof e ? se.call(he(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
      return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), he.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
      return we(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
      return we(e, "parentNode", n)
    }, next: function (e) {
      return r(e, "nextSibling")
    }, prev: function (e) {
      return r(e, "previousSibling")
    }, nextAll: function (e) {
      return we(e, "nextSibling")
    }, prevAll: function (e) {
      return we(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
      return we(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
      return we(e, "previousSibling", n)
    }, siblings: function (e) {
      return xe((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
      return xe(e.firstChild)
    }, contents: function (e) {
      return a(e, "iframe") ? e.contentDocument : (a(e, "template") && (e = e.content || e), he.merge([], e.childNodes))
    }
  }, function (e, t) {
    he.fn[e] = function (n, i) {
      var a = he.map(this, t, n);
      return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (a = he.filter(i, a)), this.length > 1 && (Pe[e] || he.uniqueSort(a), Ee.test(e) && a.reverse()), this.pushStack(a)
    }
  });
  var _e = /[^\x20\t\r\n\f]+/g;
  he.Callbacks = function (e) {
    e = "string" == typeof e ? s(e) : he.extend({}, e);
    var t, n, i, a, o = [], r = [], l = -1, c = function () {
      for (a = a || e.once, i = t = !0; r.length; l = -1)for (n = r.shift(); ++l < o.length;)!1 === o[l].apply(n[0], n[1]) && e.stopOnFalse && (l = o.length, n = !1);
      e.memory || (n = !1), t = !1, a && (o = n ? [] : "")
    }, u = {
      add: function () {
        return o && (n && !t && (l = o.length - 1, r.push(n)), function t(n) {
          he.each(n, function (n, i) {
            he.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== he.type(i) && t(i)
          })
        }(arguments), n && !t && c()), this
      }, remove: function () {
        return he.each(arguments, function (e, t) {
          for (var n; (n = he.inArray(t, o, n)) > -1;)o.splice(n, 1), n <= l && l--
        }), this
      }, has: function (e) {
        return e ? he.inArray(e, o) > -1 : o.length > 0
      }, empty: function () {
        return o && (o = []), this
      }, disable: function () {
        return a = r = [], o = n = "", this
      }, disabled: function () {
        return !o
      }, lock: function () {
        return a = r = [], n || t || (o = n = ""), this
      }, locked: function () {
        return !!a
      }, fireWith: function (e, n) {
        return a || (n = [e, (n = n || []).slice ? n.slice() : n], r.push(n), t || c()), this
      }, fire: function () {
        return u.fireWith(this, arguments), this
      }, fired: function () {
        return !!i
      }
    };
    return u
  }, he.extend({
    Deferred: function (t) {
      var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]],
        i = "pending", a = {
          state: function () {
            return i
          }, always: function () {
            return o.done(arguments).fail(arguments), this
          }, catch: function (e) {
            return a.then(null, e)
          }, pipe: function () {
            var e = arguments;
            return he.Deferred(function (t) {
              he.each(n, function (n, i) {
                var a = he.isFunction(e[i[4]]) && e[i[4]];
                o[i[1]](function () {
                  var e = a && a.apply(this, arguments);
                  e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, a ? [e] : arguments)
                })
              }), e = null
            }).promise()
          }, then: function (t, i, a) {
            function o(t, n, i, a) {
              return function () {
                var s = this, u = arguments, d = function () {
                  var e, d;
                  if (!(t < r)) {
                    if ((e = i.apply(s, u)) === n.promise())throw new TypeError("Thenable self-resolution");
                    d = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(d) ? a ? d.call(e, o(r, n, l, a), o(r, n, c, a)) : (r++, d.call(e, o(r, n, l, a), o(r, n, c, a), o(r, n, l, n.notifyWith))) : (i !== l && (s = void 0, u = [e]), (a || n.resolveWith)(s, u))
                  }
                }, p = a ? d : function () {
                  try {
                    d()
                  } catch (e) {
                    he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= r && (i !== c && (s = void 0, u = [e]), n.rejectWith(s, u))
                  }
                };
                t ? p() : (he.Deferred.getStackHook && (p.stackTrace = he.Deferred.getStackHook()), e.setTimeout(p))
              }
            }

            var r = 0;
            return he.Deferred(function (e) {
              n[0][3].add(o(0, e, he.isFunction(a) ? a : l, e.notifyWith)), n[1][3].add(o(0, e, he.isFunction(t) ? t : l)), n[2][3].add(o(0, e, he.isFunction(i) ? i : c))
            }).promise()
          }, promise: function (e) {
            return null != e ? he.extend(e, a) : a
          }
        }, o = {};
      return he.each(n, function (e, t) {
        var r = t[2], s = t[5];
        a[t[1]] = r.add, s && r.add(function () {
          i = s
        }, n[3 - e][2].disable, n[0][2].lock), r.add(t[3].fire), o[t[0]] = function () {
          return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
        }, o[t[0] + "With"] = r.fireWith
      }), a.promise(o), t && t.call(o, o), o
    }, when: function (e) {
      var t = arguments.length, n = t, i = Array(n), a = ae.call(arguments), o = he.Deferred(), r = function (e) {
        return function (n) {
          i[e] = this, a[e] = arguments.length > 1 ? ae.call(arguments) : n, --t || o.resolveWith(i, a)
        }
      };
      if (t <= 1 && (u(e, o.done(r(n)).resolve, o.reject, !t), "pending" === o.state() || he.isFunction(a[n] && a[n].then)))return o.then();
      for (; n--;)u(a[n], r(n), o.reject);
      return o.promise()
    }
  });
  var Oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  he.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && Oe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
  }, he.readyException = function (t) {
    e.setTimeout(function () {
      throw t
    })
  };
  var $e = he.Deferred();
  he.fn.ready = function (e) {
    return $e.then(e).catch(function (e) {
      he.readyException(e)
    }), this
  }, he.extend({
    isReady: !1, readyWait: 1, ready: function (e) {
      (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0, !0 !== e && --he.readyWait > 0 || $e.resolveWith(ne, [he]))
    }
  }), he.ready.then = $e.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(he.ready) : (ne.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
  var De = function (e, t, n, i, a, o, r) {
    var s = 0, l = e.length, c = null == n;
    if ("object" === he.type(n)) {
      a = !0;
      for (s in n)De(e, t, s, n[s], !0, o, r)
    } else if (void 0 !== i && (a = !0, he.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
        return c.call(he(e), n)
      })), t))for (; s < l; s++)t(e[s], n, r ? i : i.call(e[s], s, t(e[s], n)));
    return a ? e : c ? t.call(e) : l ? t(e[0], n) : o
  }, Ie = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };
  p.uid = 1, p.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    }, set: function (e, t, n) {
      var i, a = this.cache(e);
      if ("string" == typeof t) a[he.camelCase(t)] = n; else for (i in t)a[he.camelCase(i)] = t[i];
      return a
    }, get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
    }, access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    }, remove: function (e, t) {
      var n, i = e[this.expando];
      if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(he.camelCase) : (t = he.camelCase(t)) in i ? [t] : t.match(_e) || []).length;
          for (; n--;)delete i[t[n]]
        }
        (void 0 === t || he.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    }, hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !he.isEmptyObject(t)
    }
  };
  var Me = new p, qe = new p, Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Le = /[A-Z]/g;
  he.extend({
    hasData: function (e) {
      return qe.hasData(e) || Me.hasData(e)
    }, data: function (e, t, n) {
      return qe.access(e, t, n)
    }, removeData: function (e, t) {
      qe.remove(e, t)
    }, _data: function (e, t, n) {
      return Me.access(e, t, n)
    }, _removeData: function (e, t) {
      Me.remove(e, t)
    }
  }), he.fn.extend({
    data: function (e, t) {
      var n, i, a, o = this[0], r = o && o.attributes;
      if (void 0 === e) {
        if (this.length && (a = qe.get(o), 1 === o.nodeType && !Me.get(o, "hasDataAttrs"))) {
          for (n = r.length; n--;)r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = he.camelCase(i.slice(5)), h(o, i, a[i]));
          Me.set(o, "hasDataAttrs", !0)
        }
        return a
      }
      return "object" == typeof e ? this.each(function () {
        qe.set(this, e)
      }) : De(this, function (t) {
        var n;
        if (o && void 0 === t) {
          if (void 0 !== (n = qe.get(o, e)))return n;
          if (void 0 !== (n = h(o, e)))return n
        } else this.each(function () {
          qe.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    }, removeData: function (e) {
      return this.each(function () {
        qe.remove(this, e)
      })
    }
  }), he.extend({
    queue: function (e, t, n) {
      var i;
      if (e)return t = (t || "fx") + "queue", i = Me.get(e, t), n && (!i || Array.isArray(n) ? i = Me.access(e, t, he.makeArray(n)) : i.push(n)), i || []
    }, dequeue: function (e, t) {
      t = t || "fx";
      var n = he.queue(e, t), i = n.length, a = n.shift(), o = he._queueHooks(e, t), r = function () {
        he.dequeue(e, t)
      };
      "inprogress" === a && (a = n.shift(), i--), a && ("fx" === t && n.unshift("inprogress"), delete o.stop, a.call(e, r, o)), !i && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Me.get(e, n) || Me.access(e, n, {
          empty: he.Callbacks("once memory").add(function () {
            Me.remove(e, [t + "queue", n])
          })
        })
    }
  }), he.fn.extend({
    queue: function (e, t) {
      var n = 2;
      return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = he.queue(this, e, t);
        he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
      })
    }, dequeue: function (e) {
      return this.each(function () {
        he.dequeue(this, e)
      })
    }, clearQueue: function (e) {
      return this.queue(e || "fx", [])
    }, promise: function (e, t) {
      var n, i = 1, a = he.Deferred(), o = this, r = this.length, s = function () {
        --i || a.resolveWith(o, [o])
      };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(n = Me.get(o[r], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
      return s(), a.promise(t)
    }
  });
  var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ze = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
    Fe = ["Top", "Right", "Bottom", "Left"], He = function (e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
    }, Re = function (e, t, n, i) {
      var a, o, r = {};
      for (o in t)r[o] = e.style[o], e.style[o] = t[o];
      a = n.apply(e, i || []);
      for (o in t)e.style[o] = r[o];
      return a
    }, We = {};
  he.fn.extend({
    show: function () {
      return g(this, !0)
    }, hide: function () {
      return g(this)
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        He(this) ? he(this).show() : he(this).hide()
      })
    }
  });
  var Ve = /^(?:checkbox|radio)$/i, Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Be = /^$|\/(?:java|ecma)script/i, Ye = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
  var Qe = /<|&#?\w+;/;
  !function () {
    var e = ne.createDocumentFragment().appendChild(ne.createElement("div")), t = ne.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), fe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var Ue = ne.documentElement, Ge = /^key/, Ze = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Je = /^([^.]*)(?:\.(.+)|)/;
  he.event = {
    global: {}, add: function (e, t, n, i, a) {
      var o, r, s, l, c, u, d, p, f, h, v, m = Me.get(e);
      if (m)for (n.handler && (n = (o = n).handler, a = o.selector), a && he.find.matchesSelector(Ue, a), n.guid || (n.guid = he.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function (t) {
        return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
      }), c = (t = (t || "").match(_e) || [""]).length; c--;)f = v = (s = Je.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), f && (d = he.event.special[f] || {}, f = (a ? d.delegateType : d.bindType) || f, d = he.event.special[f] || {}, u = he.extend({
        type: f,
        origType: v,
        data: i,
        handler: n,
        guid: n.guid,
        selector: a,
        needsContext: a && he.expr.match.needsContext.test(a),
        namespace: h.join(".")
      }, o), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, h, r) || e.addEventListener && e.addEventListener(f, r)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), a ? p.splice(p.delegateCount++, 0, u) : p.push(u), he.event.global[f] = !0)
    }, remove: function (e, t, n, i, a) {
      var o, r, s, l, c, u, d, p, f, h, v, m = Me.hasData(e) && Me.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(_e) || [""]).length; c--;)if (s = Je.exec(t[c]) || [], f = v = s[1], h = (s[2] || "").split(".").sort(), f) {
          for (d = he.event.special[f] || {}, p = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = p.length; o--;)u = p[o], !a && v !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(o, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
          r && !p.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || he.removeEvent(e, f, m.handle), delete l[f])
        } else for (f in l)he.event.remove(e, f + t[c], n, i, !0);
        he.isEmptyObject(l) && Me.remove(e, "handle events")
      }
    }, dispatch: function (e) {
      var t, n, i, a, o, r, s = he.event.fix(e), l = new Array(arguments.length),
        c = (Me.get(this, "events") || {})[s.type] || [], u = he.event.special[s.type] || {};
      for (l[0] = s, t = 1; t < arguments.length; t++)l[t] = arguments[t];
      if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
        for (r = he.event.handlers.call(this, s, c), t = 0; (a = r[t++]) && !s.isPropagationStopped();)for (s.currentTarget = a.elem, n = 0; (o = a.handlers[n++]) && !s.isImmediatePropagationStopped();)s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((he.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, s), s.result
      }
    }, handlers: function (e, t) {
      var n, i, a, o, r, s = [], l = t.delegateCount, c = e.target;
      if (l && c.nodeType && !("click" === e.type && e.button >= 1))for (; c !== this; c = c.parentNode || this)if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
        for (o = [], r = {}, n = 0; n < l; n++)void 0 === r[a = (i = t[n]).selector + " "] && (r[a] = i.needsContext ? he(a, this).index(c) > -1 : he.find(a, this, null, [c]).length), r[a] && o.push(i);
        o.length && s.push({ elem: c, handlers: o })
      }
      return c = this, l < t.length && s.push({ elem: c, handlers: t.slice(l) }), s
    }, addProp: function (e, t) {
      Object.defineProperty(he.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: he.isFunction(t) ? function () {
          if (this.originalEvent)return t(this.originalEvent)
        } : function () {
          if (this.originalEvent)return this.originalEvent[e]
        },
        set: function (t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
        }
      })
    }, fix: function (e) {
      return e[he.expando] ? e : new he.Event(e)
    }, special: {
      load: { noBubble: !0 }, focus: {
        trigger: function () {
          if (this !== C() && this.focus)return this.focus(), !1
        }, delegateType: "focusin"
      }, blur: {
        trigger: function () {
          if (this === C() && this.blur)return this.blur(), !1
        }, delegateType: "focusout"
      }, click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && a(this, "input"))return this.click(), !1
        }, _default: function (e) {
          return a(e.target, "a")
        }
      }, beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, he.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, he.Event = function (e, t) {
    if (!(this instanceof he.Event))return new he.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : k, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), this[he.expando] = !0
  }, he.Event.prototype = {
    constructor: he.Event,
    isDefaultPrevented: k,
    isPropagationStopped: k,
    isImmediatePropagationStopped: k,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, he.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ze.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
    }
  }, he.event.addProp), he.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, t) {
    he.event.special[e] = {
      delegateType: t, bindType: t, handle: function (e) {
        var n, i = this, a = e.relatedTarget, o = e.handleObj;
        return a && (a === i || he.contains(i, a)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
      }
    }
  }), he.fn.extend({
    on: function (e, t, n, i) {
      return T(this, e, t, n, i)
    }, one: function (e, t, n, i) {
      return T(this, e, t, n, i, 1)
    }, off: function (e, t, n) {
      var i, a;
      if (e && e.preventDefault && e.handleObj)return i = e.handleObj, he(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (a in e)this.off(a, t, e[a]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = k), this.each(function () {
        he.event.remove(this, e, n, t)
      })
    }
  });
  var Ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    et = /<script|<style|<link/i, tt = /checked\s*(?:[^=]|=\s*.checked.)/i, nt = /^true\/(.*)/,
    it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  he.extend({
    htmlPrefilter: function (e) {
      return e.replace(Ke, "<$1></$2>")
    }, clone: function (e, t, n) {
      var i, a, o, r, s = e.cloneNode(!0), l = he.contains(e.ownerDocument, e);
      if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))for (r = y(s), i = 0, a = (o = y(e)).length; i < a; i++)_(o[i], r[i]);
      if (t)if (n)for (o = o || y(e), r = r || y(s), i = 0, a = o.length; i < a; i++)P(o[i], r[i]); else P(e, s);
      return (r = y(s, "script")).length > 0 && b(r, !l && y(e, "script")), s
    }, cleanData: function (e) {
      for (var t, n, i, a = he.event.special, o = 0; void 0 !== (n = e[o]); o++)if (Ie(n)) {
        if (t = n[Me.expando]) {
          if (t.events)for (i in t.events)a[i] ? he.event.remove(n, i) : he.removeEvent(n, i, t.handle);
          n[Me.expando] = void 0
        }
        n[qe.expando] && (n[qe.expando] = void 0)
      }
    }
  }), he.fn.extend({
    detach: function (e) {
      return $(this, e, !0)
    }, remove: function (e) {
      return $(this, e)
    }, text: function (e) {
      return De(this, function (e) {
        return void 0 === e ? he.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    }, append: function () {
      return O(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, e).appendChild(e)
      })
    }, prepend: function () {
      return O(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = S(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    }, before: function () {
      return O(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    }, after: function () {
      return O(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (he.cleanData(y(e, !1)), e.textContent = "");
      return this
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return he.clone(this, e, t)
      })
    }, html: function (e) {
      return De(this, function (e) {
        var t = this[0] || {}, n = 0, i = this.length;
        if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
        if ("string" == typeof e && !et.test(e) && !Ye[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = he.htmlPrefilter(e);
          try {
            for (; n < i; n++)1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {
          }
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    }, replaceWith: function () {
      var e = [];
      return O(this, arguments, function (t) {
        var n = this.parentNode;
        he.inArray(this, e) < 0 && (he.cleanData(y(this)), n && n.replaceChild(t, this))
      }, e)
    }
  }), he.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, t) {
    he.fn[e] = function (e) {
      for (var n, i = [], a = he(e), o = a.length - 1, r = 0; r <= o; r++)n = r === o ? this : this.clone(!0), he(a[r])[t](n), re.apply(i, n.get());
      return this.pushStack(i)
    }
  });
  var at = /^margin/, ot = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"), rt = function (t) {
    var n = t.ownerDocument.defaultView;
    return n && n.opener || (n = e), n.getComputedStyle(t)
  };
  !function () {
    function t() {
      if (s) {
        s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Ue.appendChild(r);
        var t = e.getComputedStyle(s);
        n = "1%" !== t.top, o = "2px" === t.marginLeft, i = "4px" === t.width, s.style.marginRight = "50%", a = "4px" === t.marginRight, Ue.removeChild(r), s = null
      }
    }

    var n, i, a, o, r = ne.createElement("div"), s = ne.createElement("div");
    s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(s), he.extend(fe, {
      pixelPosition: function () {
        return t(), n
      }, boxSizingReliable: function () {
        return t(), i
      }, pixelMarginRight: function () {
        return t(), a
      }, reliableMarginLeft: function () {
        return t(), o
      }
    }))
  }();
  var st = /^(none|table(?!-c[ea]).+)/, lt = /^--/,
    ct = { position: "absolute", visibility: "hidden", display: "block" },
    ut = { letterSpacing: "0", fontWeight: "400" }, dt = ["Webkit", "Moz", "ms"], pt = ne.createElement("div").style;
  he.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = D(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: "cssFloat" },
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var a, o, r, s = he.camelCase(t), l = lt.test(t), c = e.style;
        if (l || (t = q(s)), r = he.cssHooks[t] || he.cssHooks[s], void 0 === n)return r && "get" in r && void 0 !== (a = r.get(e, !1, i)) ? a : c[t];
        "string" === (o = typeof n) && (a = ze.exec(n)) && a[1] && (n = v(e, t, a), o = "number"), null != n && n === n && ("number" === o && (n += a && a[3] || (he.cssNumber[s] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
      }
    },
    css: function (e, t, n, i) {
      var a, o, r, s = he.camelCase(t);
      return lt.test(t) || (t = q(s)), (r = he.cssHooks[t] || he.cssHooks[s]) && "get" in r && (a = r.get(e, !0, n)), void 0 === a && (a = D(e, t, i)), "normal" === a && t in ut && (a = ut[t]), "" === n || n ? (o = parseFloat(a), !0 === n || isFinite(o) ? o || 0 : a) : a
    }
  }), he.each(["height", "width"], function (e, t) {
    he.cssHooks[t] = {
      get: function (e, n, i) {
        if (n)return !st.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? j(e, t, i) : Re(e, ct, function () {
          return j(e, t, i)
        })
      }, set: function (e, n, i) {
        var a, o = i && rt(e), r = i && L(e, t, i, "border-box" === he.css(e, "boxSizing", !1, o), o);
        return r && (a = ze.exec(n)) && "px" !== (a[3] || "px") && (e.style[t] = n, n = he.css(e, t)), N(e, n, r)
      }
    }
  }), he.cssHooks.marginLeft = I(fe.reliableMarginLeft, function (e, t) {
    if (t)return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, { marginLeft: 0 }, function () {
        return e.getBoundingClientRect().left
      })) + "px"
  }), he.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    he.cssHooks[e + t] = {
      expand: function (n) {
        for (var i = 0, a = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)a[e + Fe[i] + t] = o[i] || o[i - 2] || o[0];
        return a
      }
    }, at.test(e) || (he.cssHooks[e + t].set = N)
  }), he.fn.extend({
    css: function (e, t) {
      return De(this, function (e, t, n) {
        var i, a, o = {}, r = 0;
        if (Array.isArray(t)) {
          for (i = rt(e), a = t.length; r < a; r++)o[t[r]] = he.css(e, t[r], !1, i);
          return o
        }
        return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
      }, e, t, arguments.length > 1)
    }
  }), he.Tween = z, z.prototype = {
    constructor: z, init: function (e, t, n, i, a, o) {
      this.elem = e, this.prop = n, this.easing = a || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (he.cssNumber[n] ? "" : "px")
    }, cur: function () {
      var e = z.propHooks[this.prop];
      return e && e.get ? e.get(this) : z.propHooks._default.get(this)
    }, run: function (e) {
      var t, n = z.propHooks[this.prop];
      return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
    }
  }, z.prototype.init.prototype = z.prototype, z.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
      }, set: function (e) {
        he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, he.easing = {
    linear: function (e) {
      return e
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }, _default: "swing"
  }, he.fx = z.prototype.init, he.fx.step = {};
  var ft, ht, vt = /^(?:toggle|show|hide)$/, mt = /queueHooks$/;
  he.Animation = he.extend(B, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return v(n.elem, e, ze.exec(t), n), n
      }]
    }, tweener: function (e, t) {
      he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_e);
      for (var n, i = 0, a = e.length; i < a; i++)n = e[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
    }, prefilters: [V], prefilter: function (e, t) {
      t ? B.prefilters.unshift(e) : B.prefilters.push(e)
    }
  }), he.speed = function (e, t, n) {
    var i = e && "object" == typeof e ? he.extend({}, e) : {
      complete: n || !n && t || he.isFunction(e) && e,
      duration: e,
      easing: n && t || t && !he.isFunction(t) && t
    };
    return he.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in he.fx.speeds ? i.duration = he.fx.speeds[i.duration] : i.duration = he.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      he.isFunction(i.old) && i.old.call(this), i.queue && he.dequeue(this, i.queue)
    }, i
  }, he.fn.extend({
    fadeTo: function (e, t, n, i) {
      return this.filter(He).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i)
    }, animate: function (e, t, n, i) {
      var a = he.isEmptyObject(e), o = he.speed(t, n, i), r = function () {
        var t = B(this, he.extend({}, e), o);
        (a || Me.get(this, "finish")) && t.stop(!0)
      };
      return r.finish = r, a || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
    }, stop: function (e, t, n) {
      var i = function (e) {
        var t = e.stop;
        delete e.stop, t(n)
      };
      return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0, a = null != e && e + "queueHooks", o = he.timers, r = Me.get(this);
        if (a) r[a] && r[a].stop && i(r[a]); else for (a in r)r[a] && r[a].stop && mt.test(a) && i(r[a]);
        for (a = o.length; a--;)o[a].elem !== this || null != e && o[a].queue !== e || (o[a].anim.stop(n), t = !1, o.splice(a, 1));
        !t && n || he.dequeue(this, e)
      })
    }, finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t, n = Me.get(this), i = n[e + "queue"], a = n[e + "queueHooks"], o = he.timers, r = i ? i.length : 0;
        for (n.finish = !0, he.queue(this, e, []), a && a.stop && a.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = 0; t < r; t++)i[t] && i[t].finish && i[t].finish.call(this);
        delete n.finish
      })
    }
  }), he.each(["toggle", "show", "hide"], function (e, t) {
    var n = he.fn[t];
    he.fn[t] = function (e, i, a) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, i, a)
    }
  }), he.each({
    slideDown: R("show"),
    slideUp: R("hide"),
    slideToggle: R("toggle"),
    fadeIn: { opacity: "show" },
    fadeOut: { opacity: "hide" },
    fadeToggle: { opacity: "toggle" }
  }, function (e, t) {
    he.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i)
    }
  }), he.timers = [], he.fx.tick = function () {
    var e, t = 0, n = he.timers;
    for (ft = he.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || he.fx.stop(), ft = void 0
  }, he.fx.timer = function (e) {
    he.timers.push(e), he.fx.start()
  }, he.fx.interval = 13, he.fx.start = function () {
    ht || (ht = !0, F())
  }, he.fx.stop = function () {
    ht = null
  }, he.fx.speeds = { slow: 600, fast: 200, _default: 400 }, he.fn.delay = function (t, n) {
    return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
      var a = e.setTimeout(n, t);
      i.stop = function () {
        e.clearTimeout(a)
      }
    })
  }, function () {
    var e = ne.createElement("input"), t = ne.createElement("select").appendChild(ne.createElement("option"));
    e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = t.selected, (e = ne.createElement("input")).value = "t", e.type = "radio", fe.radioValue = "t" === e.value
  }();
  var gt, yt = he.expr.attrHandle;
  he.fn.extend({
    attr: function (e, t) {
      return De(this, he.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
      return this.each(function () {
        he.removeAttr(this, e)
      })
    }
  }), he.extend({
    attr: function (e, t, n) {
      var i, a, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === o && he.isXMLDoc(e) || (a = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : a && "get" in a && null !== (i = a.get(e, t)) ? i : (i = he.find.attr(e, t), null == i ? void 0 : i))
    }, attrHooks: {
      type: {
        set: function (e, t) {
          if (!fe.radioValue && "radio" === t && a(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    }, removeAttr: function (e, t) {
      var n, i = 0, a = t && t.match(_e);
      if (a && 1 === e.nodeType)for (; n = a[i++];)e.removeAttribute(n)
    }
  }), gt = {
    set: function (e, t, n) {
      return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, he.each(he.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = yt[t] || he.find.attr;
    yt[t] = function (e, t, i) {
      var a, o, r = t.toLowerCase();
      return i || (o = yt[r], yt[r] = a, a = null != n(e, t, i) ? r : null, yt[r] = o), a
    }
  });
  var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
  he.fn.extend({
    prop: function (e, t) {
      return De(this, he.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[he.propFix[e] || e]
      })
    }
  }), he.extend({
    prop: function (e, t, n) {
      var i, a, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o)return 1 === o && he.isXMLDoc(e) || (t = he.propFix[t] || t, a = he.propHooks[t]), void 0 !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get" in a && null !== (i = a.get(e, t)) ? i : e[t]
    }, propHooks: {
      tabIndex: {
        get: function (e) {
          var t = he.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    }, propFix: { for: "htmlFor", class: "className" }
  }), fe.optSelected || (he.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }, set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    he.propFix[this.toLowerCase()] = this
  }), he.fn.extend({
    addClass: function (e) {
      var t, n, i, a, o, r, s, l = 0;
      if (he.isFunction(e))return this.each(function (t) {
        he(this).addClass(e.call(this, t, Q(this)))
      });
      if ("string" == typeof e && e)for (t = e.match(_e) || []; n = this[l++];)if (a = Q(n), i = 1 === n.nodeType && " " + Y(a) + " ") {
        for (r = 0; o = t[r++];)i.indexOf(" " + o + " ") < 0 && (i += o + " ");
        a !== (s = Y(i)) && n.setAttribute("class", s)
      }
      return this
    }, removeClass: function (e) {
      var t, n, i, a, o, r, s, l = 0;
      if (he.isFunction(e))return this.each(function (t) {
        he(this).removeClass(e.call(this, t, Q(this)))
      });
      if (!arguments.length)return this.attr("class", "");
      if ("string" == typeof e && e)for (t = e.match(_e) || []; n = this[l++];)if (a = Q(n), i = 1 === n.nodeType && " " + Y(a) + " ") {
        for (r = 0; o = t[r++];)for (; i.indexOf(" " + o + " ") > -1;)i = i.replace(" " + o + " ", " ");
        a !== (s = Y(i)) && n.setAttribute("class", s)
      }
      return this
    }, toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function (n) {
        he(this).toggleClass(e.call(this, n, Q(this), t), t)
      }) : this.each(function () {
        var t, i, a, o;
        if ("string" === n)for (i = 0, a = he(this), o = e.match(_e) || []; t = o[i++];)a.hasClass(t) ? a.removeClass(t) : a.addClass(t); else void 0 !== e && "boolean" !== n || ((t = Q(this)) && Me.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Me.get(this, "__className__") || ""))
      })
    }, hasClass: function (e) {
      var t, n, i = 0;
      for (t = " " + e + " "; n = this[i++];)if (1 === n.nodeType && (" " + Y(Q(n)) + " ").indexOf(t) > -1)return !0;
      return !1
    }
  });
  var xt = /\r/g;
  he.fn.extend({
    val: function (e) {
      var t, n, i, a = this[0];
      {
        if (arguments.length)return i = he.isFunction(e), this.each(function (n) {
          var a;
          1 === this.nodeType && (null == (a = i ? e.call(this, n, he(this).val()) : e) ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = he.map(a, function (e) {
              return null == e ? "" : e + ""
            })), (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, a, "value") || (this.value = a))
        });
        if (a)return (t = he.valHooks[a.type] || he.valHooks[a.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(a, "value")) ? n : (n = a.value, "string" == typeof n ? n.replace(xt, "") : null == n ? "" : n)
      }
    }
  }), he.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = he.find.attr(e, "value");
          return null != t ? t : Y(he.text(e))
        }
      }, select: {
        get: function (e) {
          var t, n, i, o = e.options, r = e.selectedIndex, s = "select-one" === e.type, l = s ? null : [],
            c = s ? r + 1 : o.length;
          for (i = r < 0 ? c : s ? r : 0; i < c; i++)if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !a(n.parentNode, "optgroup"))) {
            if (t = he(n).val(), s)return t;
            l.push(t)
          }
          return l
        }, set: function (e, t) {
          for (var n, i, a = e.options, o = he.makeArray(t), r = a.length; r--;)((i = a[r]).selected = he.inArray(he.valHooks.option.get(i), o) > -1) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), he.each(["radio", "checkbox"], function () {
    he.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t))return e.checked = he.inArray(he(e).val(), t) > -1
      }
    }, fe.checkOn || (he.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var kt = /^(?:focusinfocus|focusoutblur)$/;
  he.extend(he.event, {
    trigger: function (t, n, i, a) {
      var o, r, s, l, c, u, d, p = [i || ne], f = ue.call(t, "type") ? t.type : t,
        h = ue.call(t, "namespace") ? t.namespace.split(".") : [];
      if (r = s = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !kt.test(f + he.event.triggered) && (f.indexOf(".") > -1 && (f = (h = f.split(".")).shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[he.expando] ? t : new he.Event(f, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : he.makeArray(n, [t]), d = he.event.special[f] || {}, a || !d.trigger || !1 !== d.trigger.apply(i, n))) {
        if (!a && !d.noBubble && !he.isWindow(i)) {
          for (l = d.delegateType || f, kt.test(l + f) || (r = r.parentNode); r; r = r.parentNode)p.push(r), s = r;
          s === (i.ownerDocument || ne) && p.push(s.defaultView || s.parentWindow || e)
        }
        for (o = 0; (r = p[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? l : d.bindType || f, (u = (Me.get(r, "events") || {})[t.type] && Me.get(r, "handle")) && u.apply(r, n), (u = c && r[c]) && u.apply && Ie(r) && (t.result = u.apply(r, n), !1 === t.result && t.preventDefault());
        return t.type = f, a || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Ie(i) || c && he.isFunction(i[f]) && !he.isWindow(i) && ((s = i[c]) && (i[c] = null), he.event.triggered = f, i[f](), he.event.triggered = void 0, s && (i[c] = s)), t.result
      }
    }, simulate: function (e, t, n) {
      var i = he.extend(new he.Event, n, { type: e, isSimulated: !0 });
      he.event.trigger(i, null, t)
    }
  }), he.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        he.event.trigger(e, t, this)
      })
    }, triggerHandler: function (e, t) {
      var n = this[0];
      if (n)return he.event.trigger(e, t, n, !0)
    }
  }), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    he.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
    }
  }), he.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    }
  }), fe.focusin = "onfocusin" in e, fe.focusin || he.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function (e) {
      he.event.simulate(t, e.target, he.event.fix(e))
    };
    he.event.special[t] = {
      setup: function () {
        var i = this.ownerDocument || this, a = Me.access(i, t);
        a || i.addEventListener(e, n, !0), Me.access(i, t, (a || 0) + 1)
      }, teardown: function () {
        var i = this.ownerDocument || this, a = Me.access(i, t) - 1;
        a ? Me.access(i, t, a) : (i.removeEventListener(e, n, !0), Me.remove(i, t))
      }
    }
  });
  var Ct = e.location, Tt = he.now(), St = /\?/;
  he.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t)return null;
    try {
      n = (new e.DOMParser).parseFromString(t, "text/xml")
    } catch (e) {
      n = void 0
    }
    return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
  };
  var At = /\[\]$/, Et = /\r?\n/g, Pt = /^(?:submit|button|image|reset|file)$/i,
    _t = /^(?:input|select|textarea|keygen)/i;
  he.param = function (e, t) {
    var n, i = [], a = function (e, t) {
      var n = he.isFunction(t) ? t() : t;
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
    };
    if (Array.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function () {
      a(this.name, this.value)
    }); else for (n in e)U(n, e[n], t, a);
    return i.join("&")
  }, he.fn.extend({
    serialize: function () {
      return he.param(this.serializeArray())
    }, serializeArray: function () {
      return this.map(function () {
        var e = he.prop(this, "elements");
        return e ? he.makeArray(e) : this
      }).filter(function () {
        var e = this.type;
        return this.name && !he(this).is(":disabled") && _t.test(this.nodeName) && !Pt.test(e) && (this.checked || !Ve.test(e))
      }).map(function (e, t) {
        var n = he(this).val();
        return null == n ? null : Array.isArray(n) ? he.map(n, function (e) {
          return { name: t.name, value: e.replace(Et, "\r\n") }
        }) : { name: t.name, value: n.replace(Et, "\r\n") }
      }).get()
    }
  });
  var Ot = /%20/g, $t = /#.*$/, Dt = /([?&])_=[^&]*/, It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qt = /^(?:GET|HEAD)$/, Nt = /^\/\//, Lt = {},
    jt = {}, zt = "*/".concat("*"), Ft = ne.createElement("a");
  Ft.href = Ct.href, he.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ct.href,
      type: "GET",
      isLocal: Mt.test(Ct.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": zt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
      converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": he.parseXML },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function (e, t) {
      return t ? J(J(e, he.ajaxSettings), t) : J(he.ajaxSettings, e)
    },
    ajaxPrefilter: G(Lt),
    ajaxTransport: G(jt),
    ajax: function (t, n) {
      function i(t, n, i, s) {
        var c, p, f, w, x, k = n;
        u || (u = !0, l && e.clearTimeout(l), a = void 0, r = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (w = K(h, C, i)), w = ee(h, w, C, c), c ? (h.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (he.lastModified[o] = x), (x = C.getResponseHeader("etag")) && (he.etag[o] = x)), 204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = w.state, p = w.data, c = !(f = w.error))) : (f = k, !t && k || (k = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || k) + "", c ? g.resolveWith(v, [p, k, C]) : g.rejectWith(v, [C, k, f]), C.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : f]), y.fireWith(v, [C, k]), d && (m.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
      }

      "object" == typeof t && (n = t, t = void 0), n = n || {};
      var a, o, r, s, l, c, u, d, p, f, h = he.ajaxSetup({}, n), v = h.context || h,
        m = h.context && (v.nodeType || v.jquery) ? he(v) : he.event, g = he.Deferred(),
        y = he.Callbacks("once memory"), b = h.statusCode || {}, w = {}, x = {}, k = "canceled", C = {
          readyState: 0, getResponseHeader: function (e) {
            var t;
            if (u) {
              if (!s)for (s = {}; t = It.exec(r);)s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          }, getAllResponseHeaders: function () {
            return u ? r : null
          }, setRequestHeader: function (e, t) {
            return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
          }, overrideMimeType: function (e) {
            return null == u && (h.mimeType = e), this
          }, statusCode: function (e) {
            var t;
            if (e)if (u) C.always(e[C.status]); else for (t in e)b[t] = [b[t], e[t]];
            return this
          }, abort: function (e) {
            var t = e || k;
            return a && a.abort(t), i(0, t), this
          }
        };
      if (g.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Nt, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(_e) || [""], null == h.crossDomain) {
        c = ne.createElement("a");
        try {
          c.href = h.url, c.href = c.href, h.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host
        } catch (e) {
          h.crossDomain = !0
        }
      }
      if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), Z(Lt, h, n, C), u)return C;
      (d = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qt.test(h.type), o = h.url.replace($t, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+")) : (f = h.url.slice(o.length), h.data && (o += (St.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Dt, "$1"), f = (St.test(o) ? "&" : "?") + "_=" + Tt++ + f), h.url = o + f), h.ifModified && (he.lastModified[o] && C.setRequestHeader("If-Modified-Since", he.lastModified[o]), he.etag[o] && C.setRequestHeader("If-None-Match", he.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : h.accepts["*"]);
      for (p in h.headers)C.setRequestHeader(p, h.headers[p]);
      if (h.beforeSend && (!1 === h.beforeSend.call(v, C, h) || u))return C.abort();
      if (k = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), a = Z(jt, h, n, C)) {
        if (C.readyState = 1, d && m.trigger("ajaxSend", [C, h]), u)return C;
        h.async && h.timeout > 0 && (l = e.setTimeout(function () {
          C.abort("timeout")
        }, h.timeout));
        try {
          u = !1, a.send(w, i)
        } catch (e) {
          if (u)throw e;
          i(-1, e)
        }
      } else i(-1, "No Transport");
      return C
    },
    getJSON: function (e, t, n) {
      return he.get(e, t, n, "json")
    },
    getScript: function (e, t) {
      return he.get(e, void 0, t, "script")
    }
  }), he.each(["get", "post"], function (e, t) {
    he[t] = function (e, n, i, a) {
      return he.isFunction(n) && (a = a || i, i = n, n = void 0), he.ajax(he.extend({
        url: e,
        type: t,
        dataType: a,
        data: n,
        success: i
      }, he.isPlainObject(e) && e))
    }
  }), he._evalUrl = function (e) {
    return he.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 })
  }, he.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;)e = e.firstElementChild;
        return e
      }).append(this)), this
    }, wrapInner: function (e) {
      return he.isFunction(e) ? this.each(function (t) {
        he(this).wrapInner(e.call(this, t))
      }) : this.each(function () {
        var t = he(this), n = t.contents();
        n.length ? n.wrapAll(e) : t.append(e)
      })
    }, wrap: function (e) {
      var t = he.isFunction(e);
      return this.each(function (n) {
        he(this).wrapAll(t ? e.call(this, n) : e)
      })
    }, unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        he(this).replaceWith(this.childNodes)
      }), this
    }
  }), he.expr.pseudos.hidden = function (e) {
    return !he.expr.pseudos.visible(e)
  }, he.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, he.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest
    } catch (e) {
    }
  };
  var Ht = { 0: 200, 1223: 204 }, Rt = he.ajaxSettings.xhr();
  fe.cors = !!Rt && "withCredentials" in Rt, fe.ajax = Rt = !!Rt, he.ajaxTransport(function (t) {
    var n, i;
    if (fe.cors || Rt && !t.crossDomain)return {
      send: function (a, o) {
        var r, s = t.xhr();
        if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (r in t.xhrFields)s[r] = t.xhrFields[r];
        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
        for (r in a)s.setRequestHeader(r, a[r]);
        n = function (e) {
          return function () {
            n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ht[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()))
          }
        }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function () {
          4 === s.readyState && e.setTimeout(function () {
            n && i()
          })
        }, n = n("abort");
        try {
          s.send(t.hasContent && t.data || null)
        } catch (e) {
          if (n)throw e
        }
      }, abort: function () {
        n && n()
      }
    }
  }), he.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1)
  }), he.ajaxSetup({
    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
    contents: { script: /\b(?:java|ecma)script\b/ },
    converters: {
      "text script": function (e) {
        return he.globalEval(e), e
      }
    }
  }), he.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), he.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;
      return {
        send: function (i, a) {
          t = he("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) {
            t.remove(), n = null, e && a("error" === e.type ? 404 : 200, e.type)
          }), ne.head.appendChild(t[0])
        }, abort: function () {
          n && n()
        }
      }
    }
  });
  var Wt = [], Vt = /(=)\?(?=&|$)|\?\?/;
  he.ajaxSetup({
    jsonp: "callback", jsonpCallback: function () {
      var e = Wt.pop() || he.expando + "_" + Tt++;
      return this[e] = !0, e
    }
  }), he.ajaxPrefilter("json jsonp", function (t, n, i) {
    var a, o, r,
      s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
    if (s || "jsonp" === t.dataTypes[0])return a = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Vt, "$1" + a) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + a), t.converters["script json"] = function () {
      return r || he.error(a + " was not called"), r[0]
    }, t.dataTypes[0] = "json", o = e[a], e[a] = function () {
      r = arguments
    }, i.always(function () {
      void 0 === o ? he(e).removeProp(a) : e[a] = o, t[a] && (t.jsonpCallback = n.jsonpCallback, Wt.push(a)), r && he.isFunction(o) && o(r[0]), r = o = void 0
    }), "script"
  }), fe.createHTMLDocument = function () {
    var e = ne.implementation.createHTMLDocument("").body;
    return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
  }(), he.parseHTML = function (e, t, n) {
    if ("string" != typeof e)return [];
    "boolean" == typeof t && (n = t, t = !1);
    var i, a, o;
    return t || (fe.createHTMLDocument ? ((i = (t = ne.implementation.createHTMLDocument("")).createElement("base")).href = ne.location.href, t.head.appendChild(i)) : t = ne), a = Ce.exec(e), o = !n && [], a ? [t.createElement(a[1])] : (a = w([e], t, o), o && o.length && he(o).remove(), he.merge([], a.childNodes))
  }, he.fn.load = function (e, t, n) {
    var i, a, o, r = this, s = e.indexOf(" ");
    return s > -1 && (i = Y(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (a = "POST"), r.length > 0 && he.ajax({
      url: e,
      type: a || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, r.html(i ? he("<div>").append(he.parseHTML(e)).find(i) : e)
    }).always(n && function (e, t) {
        r.each(function () {
          n.apply(this, o || [e.responseText, t, e])
        })
      }), this
  }, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    he.fn[t] = function (e) {
      return this.on(t, e)
    }
  }), he.expr.pseudos.animated = function (e) {
    return he.grep(he.timers, function (t) {
      return e === t.elem
    }).length
  }, he.offset = {
    setOffset: function (e, t, n) {
      var i, a, o, r, s, l, c = he.css(e, "position"), u = he(e), d = {};
      "static" === c && (e.style.position = "relative"), s = u.offset(), o = he.css(e, "top"), l = he.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (r = (i = u.position()).top, a = i.left) : (r = parseFloat(o) || 0, a = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (d.top = t.top - s.top + r), null != t.left && (d.left = t.left - s.left + a), "using" in t ? t.using.call(e, d) : u.css(d)
    }
  }, he.fn.extend({
    offset: function (e) {
      if (arguments.length)return void 0 === e ? this : this.each(function (t) {
        he.offset.setOffset(this, e, t)
      });
      var t, n, i, a, o = this[0];
      if (o)return o.getClientRects().length ? (i = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, a = t.defaultView, {
        top: i.top + a.pageYOffset - n.clientTop,
        left: i.left + a.pageXOffset - n.clientLeft
      }) : { top: 0, left: 0 }
    }, position: function () {
      if (this[0]) {
        var e, t, n = this[0], i = { top: 0, left: 0 };
        return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), a(e[0], "html") || (i = e.offset()), i = {
          top: i.top + he.css(e[0], "borderTopWidth", !0),
          left: i.left + he.css(e[0], "borderLeftWidth", !0)
        }), { top: t.top - i.top - he.css(n, "marginTop", !0), left: t.left - i.left - he.css(n, "marginLeft", !0) }
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === he.css(e, "position");)e = e.offsetParent;
        return e || Ue
      })
    }
  }), he.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;
    he.fn[e] = function (i) {
      return De(this, function (e, i, a) {
        var o;
        if (he.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === a)return o ? o[t] : e[i];
        o ? o.scrollTo(n ? o.pageXOffset : a, n ? a : o.pageYOffset) : e[i] = a
      }, e, i, arguments.length)
    }
  }), he.each(["top", "left"], function (e, t) {
    he.cssHooks[t] = I(fe.pixelPosition, function (e, n) {
      if (n)return n = D(e, t), ot.test(n) ? he(e).position()[t] + "px" : n
    })
  }), he.each({ Height: "height", Width: "width" }, function (e, t) {
    he.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      he.fn[i] = function (a, o) {
        var r = arguments.length && (n || "boolean" != typeof a), s = n || (!0 === a || !0 === o ? "margin" : "border");
        return De(this, function (t, n, a) {
          var o;
          return he.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === a ? he.css(t, n, s) : he.style(t, n, a, s)
        }, t, r ? a : void 0, r)
      }
    })
  }), he.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n)
    }, unbind: function (e, t) {
      return this.off(e, null, t)
    }, delegate: function (e, t, n, i) {
      return this.on(t, e, n, i)
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }
  }), he.holdReady = function (e) {
    e ? he.readyWait++ : he.ready(!0)
  }, he.isArray = Array.isArray, he.parseJSON = JSON.parse, he.nodeName = a, "function" == typeof define && define.amd && define("jquery", [], function () {
    return he
  });
  var Xt = e.jQuery, Bt = e.$;
  return he.noConflict = function (t) {
    return e.$ === he && (e.$ = Bt), t && e.jQuery === he && (e.jQuery = Xt), he
  }, t || (e.jQuery = e.$ = he), he
});
var D = function (i, a) {
  var o = document.querySelector("#" + i + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: o, w: o.offsetWidth, h: o.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 }
      },
      opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } },
      size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } },
      line_linked: { enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1 },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: .4 },
        repulse: { distance: 200, duration: .4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {}
  };
  var r = this.pJS;
  a && Object.deepExtend(r, a), r.tmp.obj = {
    size_value: r.particles.size.value,
    size_anim_speed: r.particles.size.anim.speed,
    move_speed: r.particles.move.speed,
    line_linked_distance: r.particles.line_linked.distance,
    line_linked_width: r.particles.line_linked.width,
    mode_grab_distance: r.interactivity.modes.grab.distance,
    mode_bubble_distance: r.interactivity.modes.bubble.distance,
    mode_bubble_size: r.interactivity.modes.bubble.size,
    mode_repulse_distance: r.interactivity.modes.repulse.distance
  }, r.fn.retinaInit = function () {
    r.retina_detect && window.devicePixelRatio > 1 ? (r.canvas.pxratio = window.devicePixelRatio, r.tmp.retina = !0) : (r.canvas.pxratio = 1, r.tmp.retina = !1), r.canvas.w = r.canvas.el.offsetWidth * r.canvas.pxratio, r.canvas.h = r.canvas.el.offsetHeight * r.canvas.pxratio, r.particles.size.value = r.tmp.obj.size_value * r.canvas.pxratio, r.particles.size.anim.speed = r.tmp.obj.size_anim_speed * r.canvas.pxratio, r.particles.move.speed = r.tmp.obj.move_speed * r.canvas.pxratio, r.particles.line_linked.distance = r.tmp.obj.line_linked_distance * r.canvas.pxratio, r.interactivity.modes.grab.distance = r.tmp.obj.mode_grab_distance * r.canvas.pxratio, r.interactivity.modes.bubble.distance = r.tmp.obj.mode_bubble_distance * r.canvas.pxratio, r.particles.line_linked.width = r.tmp.obj.line_linked_width * r.canvas.pxratio, r.interactivity.modes.bubble.size = r.tmp.obj.mode_bubble_size * r.canvas.pxratio, r.interactivity.modes.repulse.distance = r.tmp.obj.mode_repulse_distance * r.canvas.pxratio
  }, r.fn.canvasInit = function () {
    r.canvas.ctx = r.canvas.el.getContext("2d")
  }, r.fn.canvasSize = function () {
    r.canvas.el.width = r.canvas.w, r.canvas.el.height = r.canvas.h, r && r.interactivity.events.resize && window.addEventListener("resize", function () {
      r.canvas.w = r.canvas.el.offsetWidth, r.canvas.h = r.canvas.el.offsetHeight, r.tmp.retina && (r.canvas.w *= r.canvas.pxratio, r.canvas.h *= r.canvas.pxratio), r.canvas.el.width = r.canvas.w, r.canvas.el.height = r.canvas.h, r.particles.move.enable || (r.fn.particlesEmpty(), r.fn.particlesCreate(), r.fn.particlesDraw(), r.fn.vendors.densityAutoParticles()), r.fn.vendors.densityAutoParticles()
    })
  }, r.fn.canvasPaint = function () {
    r.canvas.ctx.fillRect(0, 0, r.canvas.w, r.canvas.h)
  }, r.fn.canvasClear = function () {
    r.canvas.ctx.clearRect(0, 0, r.canvas.w, r.canvas.h)
  }, r.fn.particle = function (t, n, i) {
    if (this.radius = (r.particles.size.random ? Math.random() : 1) * r.particles.size.value, r.particles.size.anim.enable && (this.size_status = !1, this.vs = r.particles.size.anim.speed / 100, r.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * r.canvas.w, this.y = i ? i.y : Math.random() * r.canvas.h, this.x > r.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > r.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), r.particles.move.bounce && r.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof t.value)if (t.value instanceof Array) {
      var a = t.value[Math.floor(Math.random() * r.particles.color.value.length)];
      this.color.rgb = e(a)
    } else void 0 != t.value.r && void 0 != t.value.g && void 0 != t.value.b && (this.color.rgb = {
      r: t.value.r,
      g: t.value.g,
      b: t.value.b
    }), void 0 != t.value.h && void 0 != t.value.s && void 0 != t.value.l && (this.color.hsl = {
      h: t.value.h,
      s: t.value.s,
      l: t.value.l
    }); else"random" == t.value ? this.color.rgb = {
      r: Math.floor(256 * Math.random()) + 0,
      g: Math.floor(256 * Math.random()) + 0,
      b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof t.value && (this.color = t, this.color.rgb = e(this.color.value));
    this.opacity = (r.particles.opacity.random ? Math.random() : 1) * r.particles.opacity.value, r.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = r.particles.opacity.anim.speed / 100, r.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var o = {};
    switch (r.particles.move.direction) {
      case"top":
        o = { x: 0, y: -1 };
        break;
      case"top-right":
        o = { x: .5, y: -.5 };
        break;
      case"right":
        o = { x: 1, y: -0 };
        break;
      case"bottom-right":
        o = { x: .5, y: .5 };
        break;
      case"bottom":
        o = { x: 0, y: 1 };
        break;
      case"bottom-left":
        o = { x: -.5, y: 1 };
        break;
      case"left":
        o = { x: -1, y: 0 };
        break;
      case"top-left":
        o = { x: -.5, y: -.5 };
        break;
      default:
        o = { x: 0, y: 0 }
    }
    r.particles.move.straight ? (this.vx = o.x, this.vy = o.y, r.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5, this.vy = o.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var s = r.particles.shape.type;
    if ("object" == typeof s) {
      if (s instanceof Array) {
        var l = s[Math.floor(Math.random() * s.length)];
        this.shape = l
      }
    } else this.shape = s;
    if ("image" == this.shape) {
      var c = r.particles.shape;
      this.img = {
        src: c.image.src,
        ratio: c.image.width / c.image.height
      }, this.img.ratio || (this.img.ratio = 1), "svg" == r.tmp.img_type && void 0 != r.tmp.source_svg && (r.fn.vendors.createSvgImg(this), r.tmp.pushing && (this.img.loaded = !1))
    }
  }, r.fn.particle.prototype.draw = function () {
    var e = this;
    if (void 0 != e.radius_bubble) t = e.radius_bubble; else var t = e.radius;
    if (void 0 != e.opacity_bubble) n = e.opacity_bubble; else var n = e.opacity;
    if (e.color.rgb) i = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + n + ")"; else var i = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + n + ")";
    switch (r.canvas.ctx.fillStyle = i, r.canvas.ctx.beginPath(), e.shape) {
      case"circle":
        r.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
        break;
      case"edge":
        r.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
        break;
      case"triangle":
        r.fn.vendors.drawShape(r.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
        break;
      case"polygon":
        r.fn.vendors.drawShape(r.canvas.ctx, e.x - t / (r.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (r.particles.shape.polygon.nb_sides / 3), r.particles.shape.polygon.nb_sides, 1);
        break;
      case"star":
        r.fn.vendors.drawShape(r.canvas.ctx, e.x - 2 * t / (r.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (r.particles.shape.polygon.nb_sides / 3), r.particles.shape.polygon.nb_sides, 2);
        break;
      case"image":
        if ("svg" == r.tmp.img_type) a = e.img.obj; else var a = r.tmp.img_obj;
        a && function () {
          r.canvas.ctx.drawImage(a, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio)
        }()
    }
    r.canvas.ctx.closePath(), r.particles.shape.stroke.width > 0 && (r.canvas.ctx.strokeStyle = r.particles.shape.stroke.color, r.canvas.ctx.lineWidth = r.particles.shape.stroke.width, r.canvas.ctx.stroke()), r.canvas.ctx.fill()
  }, r.fn.particlesCreate = function () {
    for (var e = 0; e < r.particles.number.value; e++)r.particles.array.push(new r.fn.particle(r.particles.color, r.particles.opacity.value))
  }, r.fn.particlesUpdate = function () {
    for (var e = 0; e < r.particles.array.length; e++) {
      var t = r.particles.array[e];
      if (r.particles.move.enable) {
        var i = r.particles.move.speed / 2;
        t.x += t.vx * i, t.y += t.vy * i
      }
      if (r.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= r.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= r.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), r.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= r.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= r.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == r.particles.move.out_mode) a = {
        x_left: t.radius,
        x_right: r.canvas.w,
        y_top: t.radius,
        y_bottom: r.canvas.h
      }; else var a = {
        x_left: -t.radius,
        x_right: r.canvas.w + t.radius,
        y_top: -t.radius,
        y_bottom: r.canvas.h + t.radius
      };
      switch (t.x - t.radius > r.canvas.w ? (t.x = a.x_left, t.y = Math.random() * r.canvas.h) : t.x + t.radius < 0 && (t.x = a.x_right, t.y = Math.random() * r.canvas.h), t.y - t.radius > r.canvas.h ? (t.y = a.y_top, t.x = Math.random() * r.canvas.w) : t.y + t.radius < 0 && (t.y = a.y_bottom, t.x = Math.random() * r.canvas.w), r.particles.move.out_mode) {
        case"bounce":
          t.x + t.radius > r.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > r.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy)
      }
      if (n("grab", r.interactivity.events.onhover.mode) && r.fn.modes.grabParticle(t), (n("bubble", r.interactivity.events.onhover.mode) || n("bubble", r.interactivity.events.onclick.mode)) && r.fn.modes.bubbleParticle(t), (n("repulse", r.interactivity.events.onhover.mode) || n("repulse", r.interactivity.events.onclick.mode)) && r.fn.modes.repulseParticle(t), r.particles.line_linked.enable || r.particles.move.attract.enable)for (var o = e + 1; o < r.particles.array.length; o++) {
        var s = r.particles.array[o];
        r.particles.line_linked.enable && r.fn.interact.linkParticles(t, s), r.particles.move.attract.enable && r.fn.interact.attractParticles(t, s), r.particles.move.bounce && r.fn.interact.bounceParticles(t, s)
      }
    }
  }, r.fn.particlesDraw = function () {
    r.canvas.ctx.clearRect(0, 0, r.canvas.w, r.canvas.h), r.fn.particlesUpdate();
    for (var e = 0; e < r.particles.array.length; e++)r.particles.array[e].draw()
  }, r.fn.particlesEmpty = function () {
    r.particles.array = []
  }, r.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(r.fn.checkAnimFrame), cancelRequestAnimFrame(r.fn.drawAnimFrame), r.tmp.source_svg = void 0, r.tmp.img_obj = void 0, r.tmp.count_svg = 0, r.fn.particlesEmpty(), r.fn.canvasClear(), r.fn.vendors.start()
  }, r.fn.interact.linkParticles = function (e, t) {
    var n = e.x - t.x, i = e.y - t.y, a = Math.sqrt(n * n + i * i);
    if (a <= r.particles.line_linked.distance) {
      var o = r.particles.line_linked.opacity - a / (1 / r.particles.line_linked.opacity) / r.particles.line_linked.distance;
      if (o > 0) {
        var s = r.particles.line_linked.color_rgb_line;
        r.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + o + ")", r.canvas.ctx.lineWidth = r.particles.line_linked.width, r.canvas.ctx.beginPath(), r.canvas.ctx.moveTo(e.x, e.y), r.canvas.ctx.lineTo(t.x, t.y), r.canvas.ctx.stroke(), r.canvas.ctx.closePath()
      }
    }
  }, r.fn.interact.attractParticles = function (e, t) {
    var n = e.x - t.x, i = e.y - t.y;
    if (Math.sqrt(n * n + i * i) <= r.particles.line_linked.distance) {
      var a = n / (1e3 * r.particles.move.attract.rotateX), o = i / (1e3 * r.particles.move.attract.rotateY);
      e.vx -= a, e.vy -= o, t.vx += a, t.vy += o
    }
  }, r.fn.interact.bounceParticles = function (e, t) {
    var n = e.x - t.x, i = e.y - t.y;
    Math.sqrt(n * n + i * i) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy)
  }, r.fn.modes.pushParticles = function (e, t) {
    r.tmp.pushing = !0;
    for (var n = 0; n < e; n++)r.particles.array.push(new r.fn.particle(r.particles.color, r.particles.opacity.value, {
      x: t ? t.pos_x : Math.random() * r.canvas.w,
      y: t ? t.pos_y : Math.random() * r.canvas.h
    })), n == e - 1 && (r.particles.move.enable || r.fn.particlesDraw(), r.tmp.pushing = !1)
  }, r.fn.modes.removeParticles = function (e) {
    r.particles.array.splice(0, e), r.particles.move.enable || r.fn.particlesDraw()
  }, r.fn.modes.bubbleParticle = function (e) {
    function t() {
      e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
    }

    function i(t, n, i, a, o) {
      if (t != n)if (r.tmp.bubble_duration_end) void 0 != i && (l = t + (t - (a - p * (a - t) / r.interactivity.modes.bubble.duration)), "size" == o && (e.radius_bubble = l), "opacity" == o && (e.opacity_bubble = l)); else if (d <= r.interactivity.modes.bubble.distance) {
        if (void 0 != i) s = i; else var s = a;
        if (s != t) {
          var l = a - p * (a - t) / r.interactivity.modes.bubble.duration;
          "size" == o && (e.radius_bubble = l), "opacity" == o && (e.opacity_bubble = l)
        }
      } else"size" == o && (e.radius_bubble = void 0), "opacity" == o && (e.opacity_bubble = void 0)
    }

    if (r.interactivity.events.onhover.enable && n("bubble", r.interactivity.events.onhover.mode)) {
      var a = e.x - r.interactivity.mouse.pos_x, o = e.y - r.interactivity.mouse.pos_y,
        s = 1 - (d = Math.sqrt(a * a + o * o)) / r.interactivity.modes.bubble.distance;
      if (d <= r.interactivity.modes.bubble.distance) {
        if (s >= 0 && "mousemove" == r.interactivity.status) {
          if (r.interactivity.modes.bubble.size != r.particles.size.value)if (r.interactivity.modes.bubble.size > r.particles.size.value) (c = e.radius + r.interactivity.modes.bubble.size * s) >= 0 && (e.radius_bubble = c); else {
            var l = e.radius - r.interactivity.modes.bubble.size, c = e.radius - l * s;
            e.radius_bubble = c > 0 ? c : 0
          }
          if (r.interactivity.modes.bubble.opacity != r.particles.opacity.value)if (r.interactivity.modes.bubble.opacity > r.particles.opacity.value) (u = r.interactivity.modes.bubble.opacity * s) > e.opacity && u <= r.interactivity.modes.bubble.opacity && (e.opacity_bubble = u); else {
            var u = e.opacity - (r.particles.opacity.value - r.interactivity.modes.bubble.opacity) * s;
            u < e.opacity && u >= r.interactivity.modes.bubble.opacity && (e.opacity_bubble = u)
          }
        }
      } else t();
      "mouseleave" == r.interactivity.status && t()
    } else if (r.interactivity.events.onclick.enable && n("bubble", r.interactivity.events.onclick.mode)) {
      if (r.tmp.bubble_clicking) {
        var a = e.x - r.interactivity.mouse.click_pos_x, o = e.y - r.interactivity.mouse.click_pos_y,
          d = Math.sqrt(a * a + o * o), p = ((new Date).getTime() - r.interactivity.mouse.click_time) / 1e3;
        p > r.interactivity.modes.bubble.duration && (r.tmp.bubble_duration_end = !0), p > 2 * r.interactivity.modes.bubble.duration && (r.tmp.bubble_clicking = !1, r.tmp.bubble_duration_end = !1)
      }
      r.tmp.bubble_clicking && (i(r.interactivity.modes.bubble.size, r.particles.size.value, e.radius_bubble, e.radius, "size"), i(r.interactivity.modes.bubble.opacity, r.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
    }
  }, r.fn.modes.repulseParticle = function (e) {
    if (r.interactivity.events.onhover.enable && n("repulse", r.interactivity.events.onhover.mode) && "mousemove" == r.interactivity.status) {
      var i = e.x - r.interactivity.mouse.pos_x, a = e.y - r.interactivity.mouse.pos_y, o = Math.sqrt(i * i + a * a),
        s = { x: i / o, y: a / o },
        l = t(1 / (u = r.interactivity.modes.repulse.distance) * (-1 * Math.pow(o / u, 2) + 1) * u * 100, 0, 50),
        c = { x: e.x + s.x * l, y: e.y + s.y * l };
      "bounce" == r.particles.move.out_mode ? (c.x - e.radius > 0 && c.x + e.radius < r.canvas.w && (e.x = c.x), c.y - e.radius > 0 && c.y + e.radius < r.canvas.h && (e.y = c.y)) : (e.x = c.x, e.y = c.y)
    } else if (r.interactivity.events.onclick.enable && n("repulse", r.interactivity.events.onclick.mode))if (r.tmp.repulse_finish || ++r.tmp.repulse_count == r.particles.array.length && (r.tmp.repulse_finish = !0), r.tmp.repulse_clicking) {
      var u = Math.pow(r.interactivity.modes.repulse.distance / 6, 3), d = r.interactivity.mouse.click_pos_x - e.x,
        p = r.interactivity.mouse.click_pos_y - e.y, f = d * d + p * p, h = -u / f * 1;
      f <= u && function () {
        var t = Math.atan2(p, d);
        if (e.vx = h * Math.cos(t), e.vy = h * Math.sin(t), "bounce" == r.particles.move.out_mode) {
          var n = { x: e.x + e.vx, y: e.y + e.vy };
          n.x + e.radius > r.canvas.w ? e.vx = -e.vx : n.x - e.radius < 0 && (e.vx = -e.vx), n.y + e.radius > r.canvas.h ? e.vy = -e.vy : n.y - e.radius < 0 && (e.vy = -e.vy)
        }
      }()
    } else 0 == r.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
  }, r.fn.modes.grabParticle = function (e) {
    if (r.interactivity.events.onhover.enable && "mousemove" == r.interactivity.status) {
      var t = e.x - r.interactivity.mouse.pos_x, n = e.y - r.interactivity.mouse.pos_y, i = Math.sqrt(t * t + n * n);
      if (i <= r.interactivity.modes.grab.distance) {
        var a = r.interactivity.modes.grab.line_linked.opacity - i / (1 / r.interactivity.modes.grab.line_linked.opacity) / r.interactivity.modes.grab.distance;
        if (a > 0) {
          var o = r.particles.line_linked.color_rgb_line;
          r.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + a + ")", r.canvas.ctx.lineWidth = r.particles.line_linked.width, r.canvas.ctx.beginPath(), r.canvas.ctx.moveTo(e.x, e.y), r.canvas.ctx.lineTo(r.interactivity.mouse.pos_x, r.interactivity.mouse.pos_y), r.canvas.ctx.stroke(), r.canvas.ctx.closePath()
        }
      }
    }
  }, r.fn.vendors.eventsListeners = function () {
    "window" == r.interactivity.detect_on ? r.interactivity.el = window : r.interactivity.el = r.canvas.el, (r.interactivity.events.onhover.enable || r.interactivity.events.onclick.enable) && (r.interactivity.el.addEventListener("mousemove", function (e) {
      if (r.interactivity.el == window)var t = e.clientX, n = e.clientY; else var t = e.offsetX || e.clientX,
        n = e.offsetY || e.clientY;
      r.interactivity.mouse.pos_x = t, r.interactivity.mouse.pos_y = n, r.tmp.retina && (r.interactivity.mouse.pos_x *= r.canvas.pxratio, r.interactivity.mouse.pos_y *= r.canvas.pxratio), r.interactivity.status = "mousemove"
    }), r.interactivity.el.addEventListener("mouseleave", function (e) {
      r.interactivity.mouse.pos_x = null, r.interactivity.mouse.pos_y = null, r.interactivity.status = "mouseleave"
    })), r.interactivity.events.onclick.enable && r.interactivity.el.addEventListener("click", function () {
      if (r.interactivity.mouse.click_pos_x = r.interactivity.mouse.pos_x, r.interactivity.mouse.click_pos_y = r.interactivity.mouse.pos_y, r.interactivity.mouse.click_time = (new Date).getTime(), r.interactivity.events.onclick.enable)switch (r.interactivity.events.onclick.mode) {
        case"push":
          r.particles.move.enable ? r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb, r.interactivity.mouse) : 1 == r.interactivity.modes.push.particles_nb ? r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb, r.interactivity.mouse) : r.interactivity.modes.push.particles_nb > 1 && r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb);
          break;
        case"remove":
          r.fn.modes.removeParticles(r.interactivity.modes.remove.particles_nb);
          break;
        case"bubble":
          r.tmp.bubble_clicking = !0;
          break;
        case"repulse":
          r.tmp.repulse_clicking = !0, r.tmp.repulse_count = 0, r.tmp.repulse_finish = !1, setTimeout(function () {
            r.tmp.repulse_clicking = !1
          }, 1e3 * r.interactivity.modes.repulse.duration)
      }
    })
  }, r.fn.vendors.densityAutoParticles = function () {
    if (r.particles.number.density.enable) {
      var e = r.canvas.el.width * r.canvas.el.height / 1e3;
      r.tmp.retina && (e /= 2 * r.canvas.pxratio);
      var t = e * r.particles.number.value / r.particles.number.density.value_area, n = r.particles.array.length - t;
      n < 0 ? r.fn.modes.pushParticles(Math.abs(n)) : r.fn.modes.removeParticles(n)
    }
  }, r.fn.vendors.checkOverlap = function (e, t) {
    for (var n = 0; n < r.particles.array.length; n++) {
      var i = r.particles.array[n], a = e.x - i.x, o = e.y - i.y;
      Math.sqrt(a * a + o * o) <= e.radius + i.radius && (e.x = t ? t.x : Math.random() * r.canvas.w, e.y = t ? t.y : Math.random() * r.canvas.h, r.fn.vendors.checkOverlap(e))
    }
  }, r.fn.vendors.createSvgImg = function (e) {
    var t = /#([0-9A-F]{3,6})/gi, n = r.tmp.source_svg.replace(t, function (t, n, i, a) {
        if (e.color.rgb) o = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")"; else var o = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
        return o
      }), i = new Blob([n], { type: "image/svg+xml;charset=utf-8" }), a = window.URL || window.webkitURL || window,
      o = a.createObjectURL(i), s = new Image;
    s.addEventListener("load", function () {
      e.img.obj = s, e.img.loaded = !0, a.revokeObjectURL(o), r.tmp.count_svg++
    }), s.src = o
  }, r.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(r.fn.drawAnimFrame), o.remove(), pJSDom = null
  }, r.fn.vendors.drawShape = function (e, t, n, i, a, o) {
    var r = a * o, s = a / o, l = 180 * (s - 2) / s, c = Math.PI - Math.PI * l / 180;
    e.save(), e.beginPath(), e.translate(t, n), e.moveTo(0, 0);
    for (var u = 0; u < r; u++)e.lineTo(i, 0), e.translate(i, 0), e.rotate(c);
    e.fill(), e.restore()
  }, r.fn.vendors.exportImg = function () {
    window.open(r.canvas.el.toDataURL("image/png"), "_blank")
  }, r.fn.vendors.loadImg = function (e) {
    if (r.tmp.img_error = void 0, "" != r.particles.shape.image.src)if ("svg" == e) {
      var t = new XMLHttpRequest;
      t.open("GET", r.particles.shape.image.src), t.onreadystatechange = function (e) {
        4 == t.readyState && (200 == t.status ? (r.tmp.source_svg = e.currentTarget.response, r.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), r.tmp.img_error = !0))
      }, t.send()
    } else {
      var n = new Image;
      n.addEventListener("load", function () {
        r.tmp.img_obj = n, r.fn.vendors.checkBeforeDraw()
      }), n.src = r.particles.shape.image.src
    } else console.log("Error pJS - No image.src"), r.tmp.img_error = !0
  }, r.fn.vendors.draw = function () {
    "image" == r.particles.shape.type ? "svg" == r.tmp.img_type ? r.tmp.count_svg >= r.particles.number.value ? (r.fn.particlesDraw(), r.particles.move.enable ? r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw) : cancelRequestAnimFrame(r.fn.drawAnimFrame)) : r.tmp.img_error || (r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw)) : void 0 != r.tmp.img_obj ? (r.fn.particlesDraw(), r.particles.move.enable ? r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw) : cancelRequestAnimFrame(r.fn.drawAnimFrame)) : r.tmp.img_error || (r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw)) : (r.fn.particlesDraw(), r.particles.move.enable ? r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw) : cancelRequestAnimFrame(r.fn.drawAnimFrame))
  }, r.fn.vendors.checkBeforeDraw = function () {
    "image" == r.particles.shape.type ? "svg" == r.tmp.img_type && void 0 == r.tmp.source_svg ? r.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(r.tmp.checkAnimFrame), r.tmp.img_error || (r.fn.vendors.init(), r.fn.vendors.draw())) : (r.fn.vendors.init(), r.fn.vendors.draw())
  }, r.fn.vendors.init = function () {
    r.fn.retinaInit(), r.fn.canvasInit(), r.fn.canvasSize(), r.fn.canvasPaint(), r.fn.particlesCreate(), r.fn.vendors.densityAutoParticles(), r.particles.line_linked.color_rgb_line = e(r.particles.line_linked.color)
  }, r.fn.vendors.start = function () {
    n("image", r.particles.shape.type) ? (r.tmp.img_type = r.particles.shape.image.src.substr(r.particles.shape.image.src.length - 3), r.fn.vendors.loadImg(r.tmp.img_type)) : r.fn.vendors.checkBeforeDraw()
  }, r.fn.vendors.eventsListeners(), r.fn.vendors.start()
};
if (Object.deepExtend = function (e, t) {
    for (var n in t)t[n] && t[n].constructor && t[n].constructor === Object ? (e[n] = e[n] || {}, arguments.callee(e[n], t[n])) : e[n] = t[n];
    return e
  }, window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
        window.setTimeout(e, 1e3 / 60)
      }
  }(), window.cancelRequestAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
  }(), window.pJSDom = [], window.particlesJS = function (e, t) {
    "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
    var n = document.getElementById(e), i = n.getElementsByClassName("particles-js-canvas-el");
    if (i.length)for (; i.length > 0;)n.removeChild(i[0]);
    var a = document.createElement("canvas");
    a.className = "particles-js-canvas-el", a.style.width = "100%", a.style.height = "100%", null != document.getElementById(e).appendChild(a) && pJSDom.push(new D(e, t))
  }, window.particlesJS.load = function (e, t, n) {
    var i = new XMLHttpRequest;
    i.open("GET", t), i.onreadystatechange = function (t) {
      if (4 == i.readyState)if (200 == i.status) {
        var a = JSON.parse(t.currentTarget.response);
        window.particlesJS(e, a), n && n()
      } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
    }, i.send()
  }, function (e, t, n) {
    "use strict";
    var i = function (e, t) {
      var i = this;
      this.el = e, this.options = {}, Object.keys(a).forEach(function (e) {
        i.options[e] = a[e]
      }), Object.keys(t).forEach(function (e) {
        i.options[e] = t[e]
      }), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.fadeOut = this.options.fadeOut, this.fadeOutClass = this.options.fadeOutClass, this.fadeOutDelay = this.options.fadeOutDelay, n && this.options.stringsElement instanceof n ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
    };
    i.prototype = {
      constructor: i, init: function () {
        var e = this;
        e.timeout = setTimeout(function () {
          for (var t = 0; t < e.strings.length; ++t)e.sequence[t] = t;
          e.shuffle && (e.sequence = e.shuffleArray(e.sequence)), e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
        }, e.startDelay)
      }, build: function () {
        var e = this;
        !0 === this.showCursor && (this.cursor = t.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement && (this.strings = [], this.stringsElement.style.display = "none", Array.prototype.slice.apply(this.stringsElement.children).forEach(function (t) {
          e.strings.push(t.innerHTML)
        })), this.init()
      }, typewrite: function (e, t) {
        if (!0 !== this.stop) {
          this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor.classList.remove(this.fadeOutClass));
          var n = Math.round(70 * Math.random()) + this.typeSpeed, i = this;
          i.timeout = setTimeout(function () {
            var n = 0, a = e.substr(t);
            if ("^" === a.charAt(0)) {
              var o = 1;
              /^\^\d+/.test(a) && (o += (a = /\d+/.exec(a)[0]).length, n = parseInt(a)), e = e.substring(0, t) + e.substring(t + o)
            }
            if ("html" === i.contentType) {
              var r = e.substr(t).charAt(0);
              if ("<" === r || "&" === r) {
                var s = "", l = "";
                for (l = "<" === r ? ">" : ";"; e.substr(t + 1).charAt(0) !== l && (s += e.substr(t).charAt(0), !(++t + 1 > e.length)););
                t++, s += l
              }
            }
            i.timeout = setTimeout(function () {
              if (t === e.length) {
                if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, !1 === i.loop || i.curLoop === i.loopCount))return;
                i.timeout = setTimeout(function () {
                  i.backspace(e, t)
                }, i.backDelay)
              } else {
                0 === t && i.options.preStringTyped(i.arrayPos);
                var n = e.substr(0, t + 1);
                i.attr ? i.el.setAttribute(i.attr, n) : i.isInput ? i.el.value = n : "html" === i.contentType ? i.el.innerHTML = n : i.el.textContent = n, t++, i.typewrite(e, t)
              }
            }, n)
          }, n)
        }
      }, backspace: function (e, t) {
        var n = this;
        if (!0 !== this.stop)if (this.fadeOut) this.initFadeOut(); else {
          var i = Math.round(70 * Math.random()) + this.backSpeed;
          n.timeout = setTimeout(function () {
            if ("html" === n.contentType && ">" === e.substr(t).charAt(0)) {
              for (var i = ""; "<" !== e.substr(t - 1).charAt(0) && (i -= e.substr(t).charAt(0), !(--t < 0)););
              t--, i += "<"
            }
            var a = e.substr(0, t);
            n.replaceText(a), t > n.stopNum ? (t--, n.backspace(e, t)) : t <= n.stopNum && (++n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.shuffle && (n.sequence = n.shuffleArray(n.sequence)), n.init()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], t))
          }, i)
        }
      }, initFadeOut: function () {
        return self = this, this.el.className += " " + this.fadeOutClass, this.cursor.className += " " + this.fadeOutClass, setTimeout(function () {
          self.arrayPos++, self.replaceText(""), self.strings.length > self.arrayPos ? self.typewrite(self.strings[self.sequence[self.arrayPos]], 0) : (self.typewrite(self.strings[0], 0), self.arrayPos = 0)
        }, self.fadeOutDelay)
      }, replaceText: function (e) {
        this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e
      }, shuffleArray: function (e) {
        var t, n, i = e.length;
        if (i)for (; --i;)t = e[n = Math.floor(Math.random() * (i + 1))], e[n] = e[i], e[i] = t;
        return e
      }, reset: function () {
        var e = this;
        clearInterval(e.timeout);
        this.el.getAttribute("id");
        this.el.textContent = "", void 0 !== this.cursor && void 0 !== this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
      }
    }, i.new = function (e, n) {
      Array.prototype.slice.apply(t.querySelectorAll(e)).forEach(function (e) {
        var t = e._typed, a = "object" == typeof n && n;
        t && t.reset(), e._typed = t = new i(e, a), "string" == typeof n && t[n]()
      })
    }, n && (n.fn.typed = function (e) {
      return this.each(function () {
        var t = n(this), a = t.data("typed"), o = "object" == typeof e && e;
        a && a.reset(), t.data("typed", a = new i(this, o)), "string" == typeof e && a[e]()
      })
    }), e.Typed = i;
    var a = {
      strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      shuffle: !1,
      backDelay: 500,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: !1,
      showCursor: !0,
      cursorChar: "|",
      attr: null,
      contentType: "html",
      callback: function () {
      },
      preStringTyped: function () {
      },
      onStringTyped: function () {
      },
      resetCallback: function () {
      }
    }
  }(window, document, window.jQuery), void 0 === I) {
  var I;
  I = "function" == typeof require ? $ = require("jquery") : $
}
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], function (t) {
    return e(t)
  }) : "object" == typeof module && "object" == typeof module.exports ? exports = e(require("jquery")) : e(I)
}(function (e) {
  function t(e) {
    var t = 7.5625, n = 2.75;
    return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
  }

  e.easing.jswing = e.easing.swing;
  var n = Math.pow, i = Math.sqrt, a = Math.sin, o = Math.cos, r = Math.PI, s = 1.70158, l = 1.525 * s, c = 2 * r / 3,
    u = 2 * r / 4.5;
  e.extend(e.easing, {
    def: "easeOutQuad", swing: function (t) {
      return e.easing[e.easing.def](t)
    }, easeInQuad: function (e) {
      return e * e
    }, easeOutQuad: function (e) {
      return 1 - (1 - e) * (1 - e)
    }, easeInOutQuad: function (e) {
      return e < .5 ? 2 * e * e : 1 - n(-2 * e + 2, 2) / 2
    }, easeInCubic: function (e) {
      return e * e * e
    }, easeOutCubic: function (e) {
      return 1 - n(1 - e, 3)
    }, easeInOutCubic: function (e) {
      return e < .5 ? 4 * e * e * e : 1 - n(-2 * e + 2, 3) / 2
    }, easeInQuart: function (e) {
      return e * e * e * e
    }, easeOutQuart: function (e) {
      return 1 - n(1 - e, 4)
    }, easeInOutQuart: function (e) {
      return e < .5 ? 8 * e * e * e * e : 1 - n(-2 * e + 2, 4) / 2
    }, easeInQuint: function (e) {
      return e * e * e * e * e
    }, easeOutQuint: function (e) {
      return 1 - n(1 - e, 5)
    }, easeInOutQuint: function (e) {
      return e < .5 ? 16 * e * e * e * e * e : 1 - n(-2 * e + 2, 5) / 2
    }, easeInSine: function (e) {
      return 1 - o(e * r / 2)
    }, easeOutSine: function (e) {
      return a(e * r / 2)
    }, easeInOutSine: function (e) {
      return -(o(r * e) - 1) / 2
    }, easeInExpo: function (e) {
      return 0 === e ? 0 : n(2, 10 * e - 10)
    }, easeOutExpo: function (e) {
      return 1 === e ? 1 : 1 - n(2, -10 * e)
    }, easeInOutExpo: function (e) {
      return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? n(2, 20 * e - 10) / 2 : (2 - n(2, -20 * e + 10)) / 2
    }, easeInCirc: function (e) {
      return 1 - i(1 - n(e, 2))
    }, easeOutCirc: function (e) {
      return i(1 - n(e - 1, 2))
    }, easeInOutCirc: function (e) {
      return e < .5 ? (1 - i(1 - n(2 * e, 2))) / 2 : (i(1 - n(-2 * e + 2, 2)) + 1) / 2
    }, easeInElastic: function (e) {
      return 0 === e ? 0 : 1 === e ? 1 : -n(2, 10 * e - 10) * a((10 * e - 10.75) * c)
    }, easeOutElastic: function (e) {
      return 0 === e ? 0 : 1 === e ? 1 : n(2, -10 * e) * a((10 * e - .75) * c) + 1
    }, easeInOutElastic: function (e) {
      return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -n(2, 20 * e - 10) * a((20 * e - 11.125) * u) / 2 : n(2, -20 * e + 10) * a((20 * e - 11.125) * u) / 2 + 1
    }, easeInBack: function (e) {
      return 2.70158 * e * e * e - s * e * e
    }, easeOutBack: function (e) {
      return 1 + 2.70158 * n(e - 1, 3) + s * n(e - 1, 2)
    }, easeInOutBack: function (e) {
      return e < .5 ? n(2 * e, 2) * (7.189819 * e - l) / 2 : (n(2 * e - 2, 2) * ((l + 1) * (2 * e - 2) + l) + 2) / 2
    }, easeInBounce: function (e) {
      return 1 - t(1 - e)
    }, easeOutBounce: t, easeInOutBounce: function (e) {
      return e < .5 ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2
    }
  })
}), I.extend(I.easing, {
  easeInOutMaterial: function (e, t, n, i, a) {
    return (t /= a / 2) < 1 ? i / 2 * t * t + n : i / 4 * ((t -= 2) * t * t + 2) + n
  }
}), I.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function (e) {
  function t(e) {
    var t = e.length, i = n.type(e);
    return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
  }

  if (!e.jQuery) {
    var n = function (e, t) {
      return new n.fn.init(e, t)
    };
    n.isWindow = function (e) {
      return null != e && e == e.window
    }, n.type = function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[r.call(e)] || "object" : typeof e
    }, n.isArray = Array.isArray || function (e) {
        return "array" === n.type(e)
      }, n.isPlainObject = function (e) {
      var t;
      if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e))return !1;
      try {
        if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf"))return !1
      } catch (e) {
        return !1
      }
      for (t in e);
      return void 0 === t || o.call(e, t)
    }, n.each = function (e, n, i) {
      var a = 0, o = e.length, r = t(e);
      if (i) {
        if (r)for (; o > a && !1 !== n.apply(e[a], i); a++); else for (a in e)if (!1 === n.apply(e[a], i))break
      } else if (r)for (; o > a && !1 !== n.call(e[a], a, e[a]); a++); else for (a in e)if (!1 === n.call(e[a], a, e[a]))break;
      return e
    }, n.data = function (e, t, a) {
      if (void 0 === a) {
        var o = (r = e[n.expando]) && i[r];
        if (void 0 === t)return o;
        if (o && t in o)return o[t]
      } else if (void 0 !== t) {
        var r = e[n.expando] || (e[n.expando] = ++n.uuid);
        return i[r] = i[r] || {}, i[r][t] = a, a
      }
    }, n.removeData = function (e, t) {
      var a = e[n.expando], o = a && i[a];
      o && n.each(t, function (e, t) {
        delete o[t]
      })
    }, n.extend = function () {
      var e, t, i, a, o, r, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
      for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== n.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)if (null != (o = arguments[l]))for (a in o)e = s[a], i = o[a], s !== i && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, r = e && n.isArray(e) ? e : []) : r = e && n.isPlainObject(e) ? e : {}, s[a] = n.extend(u, r, i)) : void 0 !== i && (s[a] = i));
      return s
    }, n.queue = function (e, i, a) {
      if (e) {
        i = (i || "fx") + "queue";
        var o = n.data(e, i);
        return a ? (!o || n.isArray(a) ? o = n.data(e, i, function (e, n) {
          var i = n || [];
          return null != e && (t(Object(e)) ? function (e, t) {
            for (var n = +t.length, i = 0, a = e.length; n > i;)e[a++] = t[i++];
            if (n !== n)for (; void 0 !== t[i];)e[a++] = t[i++];
            e.length = a
          }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
        }(a)) : o.push(a), o) : o || []
      }
    }, n.dequeue = function (e, t) {
      n.each(e.nodeType ? [e] : e, function (e, i) {
        t = t || "fx";
        var a = n.queue(i, t), o = a.shift();
        "inprogress" === o && (o = a.shift()), o && ("fx" === t && a.unshift("inprogress"), o.call(i, function () {
          n.dequeue(i, t)
        }))
      })
    }, n.fn = n.prototype = {
      init: function (e) {
        if (e.nodeType)return this[0] = e, this;
        throw new Error("Not a DOM node.")
      }, offset: function () {
        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };
        return {
          top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
          left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
        }
      }, position: function () {
        function e() {
          for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;)e = e.offsetParent;
          return e || document
        }

        var t = this[0], e = e.apply(t), i = this.offset(),
          a = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : n(e).offset();
        return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0, a.left += parseFloat(e.style.borderLeftWidth) || 0), {
          top: i.top - a.top,
          left: i.left - a.left
        }
      }
    };
    var i = {};
    n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
    for (var a = {}, o = a.hasOwnProperty, r = a.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)a["[object " + s[l] + "]"] = s[l].toLowerCase();
    n.fn.init.prototype = n.fn, e.Velocity = { Utilities: n }
  }
}(window), function (e) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function () {
  return function (e, t, n, i) {
    function a(e) {
      for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
        var a = e[t];
        a && i.push(a)
      }
      return i
    }

    function o(e) {
      return v.isWrapped(e) ? e = [].slice.call(e) : v.isNode(e) && (e = [e]), e
    }

    function r(e) {
      var t = p.data(e, "velocity");
      return null === t ? i : t
    }

    function s(e) {
      return function (t) {
        return Math.round(t * e) * (1 / e)
      }
    }

    function l(e, n, i, a) {
      function o(e, t) {
        return 1 - 3 * t + 3 * e
      }

      function r(e, t) {
        return 3 * t - 6 * e
      }

      function s(e) {
        return 3 * e
      }

      function l(e, t, n) {
        return ((o(t, n) * e + r(t, n)) * e + s(t)) * e
      }

      function c(e, t, n) {
        return 3 * o(t, n) * e * e + 2 * r(t, n) * e + s(t)
      }

      function u(t, n) {
        for (var a = 0; v > a; ++a) {
          var o = c(n, e, i);
          if (0 === o)return n;
          n -= (l(n, e, i) - t) / o
        }
        return n
      }

      function d() {
        for (var t = 0; b > t; ++t)C[t] = l(t * w, e, i)
      }

      function p(t, n, a) {
        var o, r, s = 0;
        do {
          r = n + (a - n) / 2, o = l(r, e, i) - t, o > 0 ? a = r : n = r
        } while (Math.abs(o) > g && ++s < y);
        return r
      }

      function f(t) {
        for (var n = 0, a = 1, o = b - 1; a != o && C[a] <= t; ++a)n += w;
        var r = n + (t - C[--a]) / (C[a + 1] - C[a]) * w, s = c(r, e, i);
        return s >= m ? u(t, r) : 0 == s ? r : p(t, n, n + w)
      }

      function h() {
        T = !0, (e != n || i != a) && d()
      }

      var v = 4, m = .001, g = 1e-7, y = 10, b = 11, w = 1 / (b - 1), x = "Float32Array" in t;
      if (4 !== arguments.length)return !1;
      for (var k = 0; 4 > k; ++k)if ("number" != typeof arguments[k] || isNaN(arguments[k]) || !isFinite(arguments[k]))return !1;
      e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
      var C = x ? new Float32Array(b) : new Array(b), T = !1, S = function (t) {
        return T || h(), e === n && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : l(f(t), n, a)
      };
      S.getControlPoints = function () {
        return [{ x: e, y: n }, { x: i, y: a }]
      };
      var A = "generateBezier(" + [e, n, i, a] + ")";
      return S.toString = function () {
        return A
      }, S
    }

    function c(e, t) {
      var n = e;
      return v.isString(e) ? b.Easings[e] || (n = !1) : n = v.isArray(e) && 1 === e.length ? s.apply(null, e) : v.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : !(!v.isArray(e) || 4 !== e.length) && l.apply(null, e), !1 === n && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y), n
    }

    function u(e) {
      if (e) {
        var t = (new Date).getTime(), n = b.State.calls.length;
        n > 1e4 && (b.State.calls = a(b.State.calls));
        for (var o = 0; n > o; o++)if (b.State.calls[o]) {
          var s = b.State.calls[o], l = s[0], c = s[2], f = s[3], h = !!f, m = null;
          f || (f = b.State.calls[o][3] = t - 16);
          for (var g = Math.min((t - f) / c.duration, 1), y = 0, w = l.length; w > y; y++) {
            var k = l[y], T = k.element;
            if (r(T)) {
              var S = !1;
              if (c.display !== i && null !== c.display && "none" !== c.display) {
                if ("flex" === c.display) {
                  var A = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                  p.each(A, function (e, t) {
                    x.setPropertyValue(T, "display", t)
                  })
                }
                x.setPropertyValue(T, "display", c.display)
              }
              c.visibility !== i && "hidden" !== c.visibility && x.setPropertyValue(T, "visibility", c.visibility);
              for (var E in k)if ("element" !== E) {
                var P, _ = k[E], O = v.isString(_.easing) ? b.Easings[_.easing] : _.easing;
                if (1 === g) P = _.endValue; else {
                  var $ = _.endValue - _.startValue;
                  if (P = _.startValue + $ * O(g, c, $), !h && P === _.currentValue)continue
                }
                if (_.currentValue = P, "tween" === E) m = P; else {
                  if (x.Hooks.registered[E]) {
                    var D = x.Hooks.getRoot(E), I = r(T).rootPropertyValueCache[D];
                    I && (_.rootPropertyValue = I)
                  }
                  var M = x.setPropertyValue(T, E, _.currentValue + (0 === parseFloat(P) ? "" : _.unitType), _.rootPropertyValue, _.scrollData);
                  x.Hooks.registered[E] && (r(T).rootPropertyValueCache[D] = x.Normalizations.registered[D] ? x.Normalizations.registered[D]("extract", null, M[1]) : M[1]), "transform" === M[0] && (S = !0)
                }
              }
              c.mobileHA && r(T).transformCache.translate3d === i && (r(T).transformCache.translate3d = "(0px, 0px, 0px)", S = !0), S && x.flushTransformCache(T)
            }
          }
          c.display !== i && "none" !== c.display && (b.State.calls[o][2].display = !1), c.visibility !== i && "hidden" !== c.visibility && (b.State.calls[o][2].visibility = !1), c.progress && c.progress.call(s[1], s[1], g, Math.max(0, f + c.duration - t), f, m), 1 === g && d(o)
        }
      }
      b.State.isTicking && C(u)
    }

    function d(e, t) {
      if (!b.State.calls[e])return !1;
      for (var n = b.State.calls[e][0], a = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, c = 0, u = n.length; u > c; c++) {
        var d = n[c].element;
        if (t || o.loop || ("none" === o.display && x.setPropertyValue(d, "display", o.display), "hidden" === o.visibility && x.setPropertyValue(d, "visibility", o.visibility)), !0 !== o.loop && (p.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && r(d)) {
          r(d).isAnimating = !1, r(d).rootPropertyValueCache = {};
          var f = !1;
          p.each(x.Lists.transforms3D, function (e, t) {
            var n = /^scale/.test(t) ? 1 : 0, a = r(d).transformCache[t];
            r(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(a) && (f = !0, delete r(d).transformCache[t])
          }), o.mobileHA && (f = !0, delete r(d).transformCache.translate3d), f && x.flushTransformCache(d), x.Values.removeClass(d, "velocity-animating")
        }
        if (!t && o.complete && !o.loop && c === u - 1)try {
          o.complete.call(a, a)
        } catch (e) {
          setTimeout(function () {
            throw e
          }, 1)
        }
        s && !0 !== o.loop && s(a), r(d) && !0 === o.loop && !t && (p.each(r(d).tweensContainer, function (e, t) {
          /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
        }), b(d, "reverse", { loop: !0, delay: o.delay })), !1 !== o.queue && p.dequeue(d, o.queue)
      }
      b.State.calls[e] = !1;
      for (var h = 0, v = b.State.calls.length; v > h; h++)if (!1 !== b.State.calls[h]) {
        l = !0;
        break
      }
      !1 === l && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = [])
    }

    var p, f = function () {
      if (n.documentMode)return n.documentMode;
      for (var e = 7; e > 4; e--) {
        var t = n.createElement("div");
        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length)return t = null, e
      }
      return i
    }(), h = function () {
      var e = 0;
      return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
          var n, i = (new Date).getTime();
          return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function () {
            t(i + n)
          }, n)
        }
    }(), v = {
      isString: function (e) {
        return "string" == typeof e
      }, isArray: Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }, isFunction: function (e) {
        return "[object Function]" === Object.prototype.toString.call(e)
      }, isNode: function (e) {
        return e && e.nodeType
      }, isNodeList: function (e) {
        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
      }, isWrapped: function (e) {
        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
      }, isSVG: function (e) {
        return t.SVGElement && e instanceof t.SVGElement
      }, isEmptyObject: function (e) {
        for (var t in e)return !1;
        return !0
      }
    }, m = !1;
    if (e.fn && e.fn.jquery ? (p = e, m = !0) : p = t.Velocity.Utilities, 8 >= f && !m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
    {
      if (!(7 >= f)) {
        var g = 400, y = "swing", b = {
          State: {
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            isAndroid: /Android/i.test(navigator.userAgent),
            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
            isChrome: t.chrome,
            isFirefox: /Firefox/i.test(navigator.userAgent),
            prefixElement: n.createElement("div"),
            prefixMatches: {},
            scrollAnchor: null,
            scrollPropertyLeft: null,
            scrollPropertyTop: null,
            isTicking: !1,
            calls: []
          },
          CSS: {},
          Utilities: p,
          Redirects: {},
          Easings: {},
          Promise: t.Promise,
          defaults: {
            queue: "",
            duration: g,
            easing: y,
            begin: i,
            complete: i,
            progress: i,
            display: i,
            visibility: i,
            loop: !1,
            delay: !1,
            mobileHA: !0,
            _cacheValues: !0
          },
          init: function (e) {
            p.data(e, "velocity", {
              isSVG: v.isSVG(e),
              isAnimating: !1,
              computedStyle: null,
              tweensContainer: null,
              rootPropertyValueCache: {},
              transformCache: {}
            })
          },
          hook: null,
          mock: !1,
          version: { major: 1, minor: 2, patch: 2 },
          debug: !1
        };
        t.pageYOffset !== i ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
        var w = function () {
          function e(e) {
            return -e.tension * e.x - e.friction * e.v
          }

          function t(t, n, i) {
            var a = { x: t.x + i.dx * n, v: t.v + i.dv * n, tension: t.tension, friction: t.friction };
            return { dx: a.v, dv: e(a) }
          }

          function n(n, i) {
            var a = { dx: n.v, dv: e(n) }, o = t(n, .5 * i, a), r = t(n, .5 * i, o), s = t(n, i, r),
              l = 1 / 6 * (a.dx + 2 * (o.dx + r.dx) + s.dx), c = 1 / 6 * (a.dv + 2 * (o.dv + r.dv) + s.dv);
            return n.x = n.x + l * i, n.v = n.v + c * i, n
          }

          return function e(t, i, a) {
            var o, r, s, l = { x: -1, v: 0, tension: null, friction: null }, c = [0], u = 0;
            for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, a = a || null, l.tension = t, l.friction = i, (o = null !== a) ? (u = e(t, i), r = u / a * .016) : r = .016; s = n(s || l, r), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
            return o ? function (e) {
              return c[e * (c.length - 1) | 0]
            } : u
          }
        }();
        b.Easings = {
          linear: function (e) {
            return e
          }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
          }, spring: function (e) {
            return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
          }
        }, p.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
          b.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = b.CSS = {
          RegEx: {
            isHex: /^#([A-f\d]{3}){1,2}$/i,
            valueUnwrap: /^[A-z]+\((.*)\)$/i,
            wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
            valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
          },
          Lists: {
            colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
            transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
            transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
          },
          Hooks: {
            templates: {
              textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
              boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
              clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
              backgroundPosition: ["X Y", "0% 0%"],
              transformOrigin: ["X Y Z", "50% 50% 0px"],
              perspectiveOrigin: ["X Y", "50% 50%"]
            }, registered: {}, register: function () {
              for (o = 0; o < x.Lists.colors.length; o++) {
                var e = "color" === x.Lists.colors[o] ? "0 0 0 1" : "255 255 255 1";
                x.Hooks.templates[x.Lists.colors[o]] = ["Red Green Blue Alpha", e]
              }
              var t, n, i;
              if (f)for (t in x.Hooks.templates) {
                i = (n = x.Hooks.templates[t])[0].split(" ");
                var a = n[1].match(x.RegEx.valueSplit);
                "Color" === i[0] && (i.push(i.shift()), a.push(a.shift()), x.Hooks.templates[t] = [i.join(" "), a.join(" ")])
              }
              for (t in x.Hooks.templates) {
                i = (n = x.Hooks.templates[t])[0].split(" ");
                for (var o in i) {
                  var r = t + i[o], s = o;
                  x.Hooks.registered[r] = [t, s]
                }
              }
            }, getRoot: function (e) {
              var t = x.Hooks.registered[e];
              return t ? t[0] : e
            }, cleanRootPropertyValue: function (e, t) {
              return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]), x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]), t
            }, extractValue: function (e, t) {
              var n = x.Hooks.registered[e];
              if (n) {
                var i = n[0], a = n[1];
                return (t = x.Hooks.cleanRootPropertyValue(i, t)).toString().match(x.RegEx.valueSplit)[a]
              }
              return t
            }, injectValue: function (e, t, n) {
              var i = x.Hooks.registered[e];
              if (i) {
                var a, o = i[0], r = i[1];
                return n = x.Hooks.cleanRootPropertyValue(o, n), a = n.toString().match(x.RegEx.valueSplit), a[r] = t, a.join(" ")
              }
              return n
            }
          },
          Normalizations: {
            registered: {
              clip: function (e, t, n) {
                switch (e) {
                  case"name":
                    return "clip";
                  case"extract":
                    var i;
                    return x.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(x.RegEx.valueUnwrap), i = i ? i[1].replace(/,(\s+)?/g, " ") : n), i;
                  case"inject":
                    return "rect(" + n + ")"
                }
              }, blur: function (e, t, n) {
                switch (e) {
                  case"name":
                    return b.State.isFirefox ? "filter" : "-webkit-filter";
                  case"extract":
                    var i = parseFloat(n);
                    if (!i && 0 !== i) {
                      var a = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                      i = a ? a[1] : 0
                    }
                    return i;
                  case"inject":
                    return parseFloat(n) ? "blur(" + n + ")" : "none"
                }
              }, opacity: function (e, t, n) {
                if (8 >= f)switch (e) {
                  case"name":
                    return "filter";
                  case"extract":
                    var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                    return n = i ? i[1] / 100 : 1;
                  case"inject":
                    return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                } else switch (e) {
                  case"name":
                    return "opacity";
                  case"extract":
                  case"inject":
                    return n
                }
              }
            }, register: function () {
              9 >= f || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
              for (e = 0; e < x.Lists.transformsBase.length; e++)!function () {
                var t = x.Lists.transformsBase[e];
                x.Normalizations.registered[t] = function (e, n, a) {
                  switch (e) {
                    case"name":
                      return "transform";
                    case"extract":
                      return r(n) === i || r(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : r(n).transformCache[t].replace(/[()]/g, "");
                    case"inject":
                      var o = !1;
                      switch (t.substr(0, t.length - 1)) {
                        case"translate":
                          o = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                          break;
                        case"scal":
                        case"scale":
                          b.State.isAndroid && r(n).transformCache[t] === i && 1 > a && (a = 1), o = !/(\d)$/i.test(a);
                          break;
                        case"skew":
                          o = !/(deg|\d)$/i.test(a);
                          break;
                        case"rotate":
                          o = !/(deg|\d)$/i.test(a)
                      }
                      return o || (r(n).transformCache[t] = "(" + a + ")"), r(n).transformCache[t]
                  }
                }
              }();
              for (var e = 0; e < x.Lists.colors.length; e++)!function () {
                var t = x.Lists.colors[e];
                x.Normalizations.registered[t] = function (e, n, a) {
                  switch (e) {
                    case"name":
                      return t;
                    case"extract":
                      var o;
                      if (x.RegEx.wrappedValueAlreadyExtracted.test(a)) o = a; else {
                        var r, s = {
                          black: "rgb(0, 0, 0)",
                          blue: "rgb(0, 0, 255)",
                          gray: "rgb(128, 128, 128)",
                          green: "rgb(0, 128, 0)",
                          red: "rgb(255, 0, 0)",
                          white: "rgb(255, 255, 255)"
                        };
                        /^[A-z]+$/i.test(a) ? r = s[a] !== i ? s[a] : s.black : x.RegEx.isHex.test(a) ? r = "rgb(" + x.Values.hexToRgb(a).join(" ") + ")" : /^rgba?\(/i.test(a) || (r = s.black), o = (r || a).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                      }
                      return 8 >= f || 3 !== o.split(" ").length || (o += " 1"), o;
                    case"inject":
                      return 8 >= f ? 4 === a.split(" ").length && (a = a.split(/\s+/).slice(0, 3).join(" ")) : 3 === a.split(" ").length && (a += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + a.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                  }
                }
              }()
            }
          },
          Names: {
            camelCase: function (e) {
              return e.replace(/-(\w)/g, function (e, t) {
                return t.toUpperCase()
              })
            }, SVGAttribute: function (e) {
              var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
              return (f || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
            }, prefixCheck: function (e) {
              if (b.State.prefixMatches[e])return [b.State.prefixMatches[e], !0];
              for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                var a;
                if (a = 0 === n ? e : t[n] + e.replace(/^\w/, function (e) {
                      return e.toUpperCase()
                    }), v.isString(b.State.prefixElement.style[a]))return b.State.prefixMatches[e] = a, [a, !0]
              }
              return [e, !1]
            }
          },
          Values: {
            hexToRgb: function (e) {
              var t, n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
              return e = e.replace(n, function (e, t, n, i) {
                return t + t + n + n + i + i
              }), t = i.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
            }, isCSSNullValue: function (e) {
              return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
            }, getUnitType: function (e) {
              return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
            }, getDisplayType: function (e) {
              var t = e && e.tagName.toString().toLowerCase();
              return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
            }, addClass: function (e, t) {
              e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
            }, removeClass: function (e, t) {
              e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
            }
          },
          getPropertyValue: function (e, n, a, o) {
            function s(e, n) {
              function a() {
                c && x.setPropertyValue(e, "display", "none")
              }

              var l = 0;
              if (8 >= f) l = p.css(e, n); else {
                var c = !1;
                if (/^(width|height)$/.test(n) && 0 === x.getPropertyValue(e, "display") && (c = !0, x.setPropertyValue(e, "display", x.Values.getDisplayType(e))), !o) {
                  if ("height" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                    var u = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                    return a(), u
                  }
                  if ("width" === n && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                    var d = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                    return a(), d
                  }
                }
                var h;
                h = r(e) === i ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : r(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === f && "filter" === n ? h.getPropertyValue(n) : h[n]) || null === l) && (l = e.style[n]), a()
              }
              if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                var v = s(e, "position");
                ("fixed" === v || "absolute" === v && /top|left/i.test(n)) && (l = p(e).position()[n] + "px")
              }
              return l
            }

            var l;
            if (x.Hooks.registered[n]) {
              var c = n, u = x.Hooks.getRoot(c);
              a === i && (a = x.getPropertyValue(e, x.Names.prefixCheck(u)[0])), x.Normalizations.registered[u] && (a = x.Normalizations.registered[u]("extract", e, a)), l = x.Hooks.extractValue(c, a)
            } else if (x.Normalizations.registered[n]) {
              var d, h;
              "transform" !== (d = x.Normalizations.registered[n]("name", e)) && (h = s(e, x.Names.prefixCheck(d)[0]), x.Values.isCSSNullValue(h) && x.Hooks.templates[n] && (h = x.Hooks.templates[n][1])), l = x.Normalizations.registered[n]("extract", e, h)
            }
            if (!/^[\d-]/.test(l))if (r(e) && r(e).isSVG && x.Names.SVGAttribute(n))if (/^(height|width)$/i.test(n))try {
              l = e.getBBox()[n]
            } catch (e) {
              l = 0
            } else l = e.getAttribute(n); else l = s(e, x.Names.prefixCheck(n)[0]);
            return x.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + n + ": " + l), l
          },
          setPropertyValue: function (e, n, i, a, o) {
            var s = n;
            if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? t.scrollTo(i, o.alternateValue) : t.scrollTo(o.alternateValue, i); else if (x.Normalizations.registered[n] && "transform" === x.Normalizations.registered[n]("name", e)) x.Normalizations.registered[n]("inject", e, i), s = "transform", i = r(e).transformCache[n]; else {
              if (x.Hooks.registered[n]) {
                var l = n, c = x.Hooks.getRoot(n);
                a = a || x.getPropertyValue(e, c), i = x.Hooks.injectValue(l, i, a), n = c
              }
              if (x.Normalizations.registered[n] && (i = x.Normalizations.registered[n]("inject", e, i), n = x.Normalizations.registered[n]("name", e)), s = x.Names.prefixCheck(n)[0], 8 >= f)try {
                e.style[s] = i
              } catch (e) {
                b.debug && console.log("Browser does not support [" + i + "] for [" + s + "]")
              } else r(e) && r(e).isSVG && x.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
              b.debug >= 2 && console.log("Set " + n + " (" + s + "): " + i)
            }
            return [s, i]
          },
          flushTransformCache: function (e) {
            function t(t) {
              return parseFloat(x.getPropertyValue(e, t))
            }

            var n = "";
            if ((f || b.State.isAndroid && !b.State.isChrome) && r(e).isSVG) {
              var i = {
                translate: [t("translateX"), t("translateY")],
                skewX: [t("skewX")],
                skewY: [t("skewY")],
                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                rotate: [t("rotateZ"), 0, 0]
              };
              p.each(r(e).transformCache, function (e) {
                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
              })
            } else {
              var a, o;
              p.each(r(e).transformCache, function (t) {
                return a = r(e).transformCache[t], "transformPerspective" === t ? (o = a, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(n += t + a + " "))
              }), o && (n = "perspective" + o + " " + n)
            }
            x.setPropertyValue(e, "transform", n)
          }
        };
        x.Hooks.register(), x.Normalizations.register(), b.hook = function (e, t, n) {
          var a = i;
          return e = o(e), p.each(e, function (e, o) {
            if (r(o) === i && b.init(o), n === i) a === i && (a = b.CSS.getPropertyValue(o, t)); else {
              var s = b.CSS.setPropertyValue(o, t, n);
              "transform" === s[0] && b.CSS.flushTransformCache(o), a = s
            }
          }), a
        };
        var k = function () {
          function e() {
            return s ? A.promise || null : l
          }

          function a() {
            function e(e) {
              function d(e, t) {
                var n = i, a = i, r = i;
                return v.isArray(e) ? (n = e[0], !v.isArray(e[1]) && /^[\d-]/.test(e[1]) || v.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? r = e[1] : (v.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || v.isArray(e[1])) && (a = t ? e[1] : c(e[1], s.duration), e[2] !== i && (r = e[2]))) : n = e, t || (a = a || s.easing), v.isFunction(n) && (n = n.call(o, T, C)), v.isFunction(r) && (r = r.call(o, T, C)), [n || 0, a, r]
              }

              function f(e, t) {
                var n, i;
                return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                  return n = e, ""
                }), n || (n = x.Values.getUnitType(e)), [i, n]
              }

              if (s.begin && 0 === T)try {
                s.begin.call(h, h)
              } catch (e) {
                setTimeout(function () {
                  throw e
                }, 1)
              }
              if ("scroll" === E) {
                var g, w, k, S = /^x$/i.test(s.axis) ? "Left" : "Top", P = parseFloat(s.offset) || 0;
                s.container ? v.isWrapped(s.container) || v.isNode(s.container) ? (s.container = s.container[0] || s.container, g = s.container["scroll" + S], k = g + p(o).position()[S.toLowerCase()] + P) : s.container = null : (g = b.State.scrollAnchor[b.State["scrollProperty" + S]], w = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]], k = p(o).offset()[S.toLowerCase()] + P), l = {
                  scroll: {
                    rootPropertyValue: !1,
                    startValue: g,
                    currentValue: g,
                    endValue: k,
                    unitType: "",
                    easing: s.easing,
                    scrollData: { container: s.container, direction: S, alternateValue: w }
                  }, element: o
                }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o)
              } else if ("reverse" === E) {
                if (!r(o).tweensContainer)return void p.dequeue(o, s.queue);
                "none" === r(o).opts.display && (r(o).opts.display = "auto"), "hidden" === r(o).opts.visibility && (r(o).opts.visibility = "visible"), r(o).opts.loop = !1, r(o).opts.begin = null, r(o).opts.complete = null, y.easing || delete s.easing, y.duration || delete s.duration, s = p.extend({}, r(o).opts, s);
                $ = p.extend(!0, {}, r(o).tweensContainer);
                for (var _ in $)if ("element" !== _) {
                  var O = $[_].startValue;
                  $[_].startValue = $[_].currentValue = $[_].endValue, $[_].endValue = O, v.isEmptyObject(y) || ($[_].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + _ + "): " + JSON.stringify($[_]), o)
                }
                l = $
              } else if ("start" === E) {
                var $;
                r(o).tweensContainer && !0 === r(o).isAnimating && ($ = r(o).tweensContainer), p.each(m, function (e, t) {
                  if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                    var n = d(t, !0), a = n[0], o = n[1], r = n[2];
                    if (x.RegEx.isHex.test(a)) {
                      for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(a), c = r ? x.Values.hexToRgb(r) : i, u = 0; u < s.length; u++) {
                        var p = [l[u]];
                        o && p.push(o), c !== i && p.push(c[u]), m[e + s[u]] = p
                      }
                      delete m[e]
                    }
                  }
                });
                for (var M in m) {
                  var q = d(m[M]), N = q[0], L = q[1], j = q[2];
                  M = x.Names.camelCase(M);
                  var z = x.Hooks.getRoot(M), F = !1;
                  if (r(o).isSVG || "tween" === z || !1 !== x.Names.prefixCheck(z)[1] || x.Normalizations.registered[z] !== i) {
                    (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(M) && !j && 0 !== N && (j = 0), s._cacheValues && $ && $[M] ? (j === i && (j = $[M].endValue + $[M].unitType), F = r(o).rootPropertyValueCache[z]) : x.Hooks.registered[M] ? j === i ? (F = x.getPropertyValue(o, z), j = x.getPropertyValue(o, M, F)) : F = x.Hooks.templates[z][1] : j === i && (j = x.getPropertyValue(o, M));
                    var H, R, W, V = !1;
                    if (H = f(M, j), j = H[0], W = H[1], H = f(M, N), N = H[0].replace(/^([+-\/*])=/, function (e, t) {
                        return V = t, ""
                      }), R = H[1], j = parseFloat(j) || 0, N = parseFloat(N) || 0, "%" === R && (/^(fontSize|lineHeight)$/.test(M) ? (N /= 100, R = "em") : /^scale/.test(M) ? (N /= 100, R = "") : /(Red|Green|Blue)$/i.test(M) && (N = N / 100 * 255, R = "")), /[\/*]/.test(V)) R = W; else if (W !== R && 0 !== j)if (0 === N) R = W; else {
                      a = a || function () {
                          var e = {
                              myParent: o.parentNode || n.body,
                              position: x.getPropertyValue(o, "position"),
                              fontSize: x.getPropertyValue(o, "fontSize")
                            }, i = e.position === D.lastPosition && e.myParent === D.lastParent,
                            a = e.fontSize === D.lastFontSize;
                          D.lastParent = e.myParent, D.lastPosition = e.position, D.lastFontSize = e.fontSize;
                          var s = 100, l = {};
                          if (a && i) l.emToPx = D.lastEmToPx, l.percentToPxWidth = D.lastPercentToPxWidth, l.percentToPxHeight = D.lastPercentToPxHeight; else {
                            var c = r(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                            b.init(c), e.myParent.appendChild(c), p.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                              b.CSS.setPropertyValue(c, t, "hidden")
                            }), b.CSS.setPropertyValue(c, "position", e.position), b.CSS.setPropertyValue(c, "fontSize", e.fontSize), b.CSS.setPropertyValue(c, "boxSizing", "content-box"), p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                              b.CSS.setPropertyValue(c, t, s + "%")
                            }), b.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = D.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = D.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = D.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                          }
                          return null === D.remToPx && (D.remToPx = parseFloat(x.getPropertyValue(n.body, "fontSize")) || 16), null === D.vwToPx && (D.vwToPx = parseFloat(t.innerWidth) / 100, D.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = D.remToPx, l.vwToPx = D.vwToPx, l.vhToPx = D.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l
                        }();
                      var X = /margin|padding|left|right|width|text|word|letter/i.test(M) || /X$/.test(M) || "x" === M ? "x" : "y";
                      switch (W) {
                        case"%":
                          j *= "x" === X ? a.percentToPxWidth : a.percentToPxHeight;
                          break;
                        case"px":
                          break;
                        default:
                          j *= a[W + "ToPx"]
                      }
                      switch (R) {
                        case"%":
                          j *= 1 / ("x" === X ? a.percentToPxWidth : a.percentToPxHeight);
                          break;
                        case"px":
                          break;
                        default:
                          j *= 1 / a[R + "ToPx"]
                      }
                    }
                    switch (V) {
                      case"+":
                        N = j + N;
                        break;
                      case"-":
                        N = j - N;
                        break;
                      case"*":
                        N *= j;
                        break;
                      case"/":
                        N = j / N
                    }
                    l[M] = {
                      rootPropertyValue: F,
                      startValue: j,
                      currentValue: j,
                      endValue: N,
                      unitType: R,
                      easing: L
                    }, b.debug && console.log("tweensContainer (" + M + "): " + JSON.stringify(l[M]), o)
                  } else b.debug && console.log("Skipping [" + z + "] due to a lack of browser support.")
                }
                l.element = o
              }
              l.element && (x.Values.addClass(o, "velocity-animating"), I.push(l), "" === s.queue && (r(o).tweensContainer = l, r(o).opts = s), r(o).isAnimating = !0, T === C - 1 ? (b.State.calls.push([I, h, s, null, A.resolver]), !1 === b.State.isTicking && (b.State.isTicking = !0, u())) : T++)
            }

            var a, o = this, s = p.extend({}, b.defaults, y), l = {};
            switch (r(o) === i && b.init(o), parseFloat(s.delay) && !1 !== s.queue && p.queue(o, s.queue, function (e) {
              b.velocityQueueEntryFlag = !0, r(o).delayTimer = {
                setTimeout: setTimeout(e, parseFloat(s.delay)),
                next: e
              }
            }), s.duration.toString().toLowerCase()) {
              case"fast":
                s.duration = 200;
                break;
              case"normal":
                s.duration = g;
                break;
              case"slow":
                s.duration = 600;
                break;
              default:
                s.duration = parseFloat(s.duration) || 1
            }
            !1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = c(s.easing, s.duration), s.begin && !v.isFunction(s.begin) && (s.begin = null), s.progress && !v.isFunction(s.progress) && (s.progress = null), s.complete && !v.isFunction(s.complete) && (s.complete = null), s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, !1 === s.queue ? s.delay ? setTimeout(e, s.delay) : e() : p.queue(o, s.queue, function (t, n) {
              return !0 === n ? (A.promise && A.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t))
            }), "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(o)[0] || p.dequeue(o)
          }

          var s, l, f, h, m, y,
            w = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
          if (v.isWrapped(this) ? (s = !1, f = 0, h = this, l = this) : (s = !0, f = 1, h = w ? arguments[0].elements || arguments[0].e : arguments[0]), h = o(h)) {
            w ? (m = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (m = arguments[f], y = arguments[f + 1]);
            var C = h.length, T = 0;
            if (!/^(stop|finish)$/i.test(m) && !p.isPlainObject(y)) {
              y = {};
              for (var S = f + 1; S < arguments.length; S++)v.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? v.isString(arguments[S]) || v.isArray(arguments[S]) ? y.easing = arguments[S] : v.isFunction(arguments[S]) && (y.complete = arguments[S]) : y.duration = arguments[S]
            }
            var A = { promise: null, resolver: null, rejecter: null };
            s && b.Promise && (A.promise = new b.Promise(function (e, t) {
              A.resolver = e, A.rejecter = t
            }));
            var E;
            switch (m) {
              case"scroll":
                E = "scroll";
                break;
              case"reverse":
                E = "reverse";
                break;
              case"finish":
              case"stop":
                p.each(h, function (e, t) {
                  r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer)
                });
                var P = [];
                return p.each(b.State.calls, function (e, t) {
                  t && p.each(t[1], function (n, a) {
                    var o = y === i ? "" : y;
                    return !0 !== o && t[2].queue !== o && (y !== i || !1 !== t[2].queue) || void p.each(h, function (n, i) {
                        i === a && ((!0 === y || v.isString(y)) && (p.each(p.queue(i, v.isString(y) ? y : ""), function (e, t) {
                          v.isFunction(t) && t(null, !0)
                        }), p.queue(i, v.isString(y) ? y : "", [])), "stop" === m ? (r(i) && r(i).tweensContainer && !1 !== o && p.each(r(i).tweensContainer, function (e, t) {
                          t.endValue = t.currentValue
                        }), P.push(e)) : "finish" === m && (t[2].duration = 1))
                      })
                  })
                }), "stop" === m && (p.each(P, function (e, t) {
                  d(t, !0)
                }), A.promise && A.resolver(h)), e();
              default:
                if (!p.isPlainObject(m) || v.isEmptyObject(m)) {
                  if (v.isString(m) && b.Redirects[m]) {
                    var _ = (q = p.extend({}, y)).duration, O = q.delay || 0;
                    return !0 === q.backwards && (h = p.extend(!0, [], h).reverse()), p.each(h, function (e, t) {
                      parseFloat(q.stagger) ? q.delay = O + parseFloat(q.stagger) * e : v.isFunction(q.stagger) && (q.delay = O + q.stagger.call(t, e, C)), q.drag && (q.duration = parseFloat(_) || (/^(callout|transition)/.test(m) ? 1e3 : g), q.duration = Math.max(q.duration * (q.backwards ? 1 - e / C : (e + 1) / C), .75 * q.duration, 200)), b.Redirects[m].call(t, t, q || {}, e, C, h, A.promise ? A : i)
                    }), e()
                  }
                  var $ = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                  return A.promise ? A.rejecter(new Error($)) : console.log($), e()
                }
                E = "start"
            }
            var D = {
              lastParent: null,
              lastPosition: null,
              lastFontSize: null,
              lastPercentToPxWidth: null,
              lastPercentToPxHeight: null,
              lastEmToPx: null,
              remToPx: null,
              vwToPx: null,
              vhToPx: null
            }, I = [];
            p.each(h, function (e, t) {
              v.isNode(t) && a.call(t)
            });
            var M, q = p.extend({}, b.defaults, y);
            if (q.loop = parseInt(q.loop), M = 2 * q.loop - 1, q.loop)for (var N = 0; M > N; N++) {
              var L = { delay: q.delay, progress: q.progress };
              N === M - 1 && (L.display = q.display, L.visibility = q.visibility, L.complete = q.complete), k(h, "reverse", L)
            }
            return e()
          }
        };
        (b = p.extend(k, b)).animate = k;
        var C = t.requestAnimationFrame || h;
        return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function () {
          n.hidden ? (C = function (e) {
            return setTimeout(function () {
              e(!0)
            }, 16)
          }, u()) : C = t.requestAnimationFrame || h
        }), e.Velocity = b, e !== t && (e.fn.velocity = k, e.fn.velocity.defaults = b.defaults), p.each(["Down", "Up"], function (e, t) {
          b.Redirects["slide" + t] = function (e, n, a, o, r, s) {
            var l = p.extend({}, n), c = l.begin, u = l.complete,
              d = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" }, f = {};
            l.display === i && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
              c && c.call(r, r);
              for (var n in d) {
                f[n] = e.style[n];
                var i = b.CSS.getPropertyValue(e, n);
                d[n] = "Down" === t ? [i, 0] : [0, i]
              }
              f.overflow = e.style.overflow, e.style.overflow = "hidden"
            }, l.complete = function () {
              for (var t in f)e.style[t] = f[t];
              u && u.call(r, r), s && s.resolver(r)
            }, b(e, d, l)
          }
        }), p.each(["In", "Out"], function (e, t) {
          b.Redirects["fade" + t] = function (e, n, a, o, r, s) {
            var l = p.extend({}, n), c = { opacity: "In" === t ? 1 : 0 }, u = l.complete;
            l.complete = a !== o - 1 ? l.begin = null : function () {
              u && u.call(r, r), s && s.resolver(r)
            }, l.display === i && (l.display = "In" === t ? "auto" : "none"), b(this, c, l)
          }
        }), b
      }
      I.fn.velocity = I.fn.animate
    }
  }(window.jQuery || window.Zepto || window, window, document)
})), function (e, t, n, i) {
  "use strict";
  function a(e, t, n) {
    return setTimeout(u(e, n), t)
  }

  function o(e, t, n) {
    return !!Array.isArray(e) && (r(e, n[t], n), !0)
  }

  function r(e, t, n) {
    var a;
    if (e)if (e.forEach) e.forEach(t, n); else if (e.length !== i)for (a = 0; a < e.length;)t.call(n, e[a], a, e), a++; else for (a in e)e.hasOwnProperty(a) && t.call(n, e[a], a, e)
  }

  function s(e, t, n) {
    for (var a = Object.keys(t), o = 0; o < a.length;)(!n || n && e[a[o]] === i) && (e[a[o]] = t[a[o]]), o++;
    return e
  }

  function l(e, t) {
    return s(e, t, !0)
  }

  function c(e, t, n) {
    var i, a = t.prototype;
    (i = e.prototype = Object.create(a)).constructor = e, i._super = a, n && s(i, n)
  }

  function u(e, t) {
    return function () {
      return e.apply(t, arguments)
    }
  }

  function d(e, t) {
    return typeof e == ue ? e.apply(t ? t[0] || i : i, t) : e
  }

  function p(e, t) {
    return e === i ? t : e
  }

  function f(e, t, n) {
    r(g(t), function (t) {
      e.addEventListener(t, n, !1)
    })
  }

  function h(e, t, n) {
    r(g(t), function (t) {
      e.removeEventListener(t, n, !1)
    })
  }

  function v(e, t) {
    for (; e;) {
      if (e == t)return !0;
      e = e.parentNode
    }
    return !1
  }

  function m(e, t) {
    return e.indexOf(t) > -1
  }

  function g(e) {
    return e.trim().split(/\s+/g)
  }

  function y(e, t, n) {
    if (e.indexOf && !n)return e.indexOf(t);
    for (var i = 0; i < e.length;) {
      if (n && e[i][n] == t || !n && e[i] === t)return i;
      i++
    }
    return -1
  }

  function b(e) {
    return Array.prototype.slice.call(e, 0)
  }

  function w(e, t, n) {
    for (var i = [], a = [], o = 0; o < e.length;) {
      var r = t ? e[o][t] : e[o];
      y(a, r) < 0 && i.push(e[o]), a[o] = r, o++
    }
    return n && (i = t ? i.sort(function (e, n) {
      return e[t] > n[t]
    }) : i.sort()), i
  }

  function x(e, t) {
    for (var n, a, o = t[0].toUpperCase() + t.slice(1), r = 0; r < le.length;) {
      if (n = le[r], (a = n ? n + o : t) in e)return a;
      r++
    }
    return i
  }

  function k() {
    return he++
  }

  function C(e) {
    var t = e.ownerDocument;
    return t.defaultView || t.parentWindow
  }

  function T(e, t) {
    var n = this;
    this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
      d(e.options.enable, [e]) && n.handler(t)
    }, this.init()
  }

  function S(e) {
    var t = e.options.inputClass;
    return new (t || (ge ? z : ye ? R : me ? V : j))(e, A)
  }

  function A(e, t, n) {
    var i = n.pointers.length, a = n.changedPointers.length, o = t & ke && 0 == i - a, r = t & (Te | Se) && 0 == i - a;
    n.isFirst = !!o, n.isFinal = !!r, o && (e.session = {}), n.eventType = t, E(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
  }

  function E(e, t) {
    var n = e.session, i = t.pointers, a = i.length;
    n.firstInput || (n.firstInput = O(t)), a > 1 && !n.firstMultiple ? n.firstMultiple = O(t) : 1 === a && (n.firstMultiple = !1);
    var o = n.firstInput, r = n.firstMultiple, s = r ? r.center : o.center, l = t.center = $(i);
    t.timeStamp = fe(), t.deltaTime = t.timeStamp - o.timeStamp, t.angle = q(s, l), t.distance = M(s, l), P(n, t), t.offsetDirection = I(t.deltaX, t.deltaY), t.scale = r ? L(r.pointers, i) : 1, t.rotation = r ? N(r.pointers, i) : 0, _(n, t);
    var c = e.element;
    v(t.srcEvent.target, c) && (c = t.srcEvent.target), t.target = c
  }

  function P(e, t) {
    var n = t.center, i = e.offsetDelta || {}, a = e.prevDelta || {}, o = e.prevInput || {};
    (t.eventType === ke || o.eventType === Te) && (a = e.prevDelta = {
      x: o.deltaX || 0,
      y: o.deltaY || 0
    }, i = e.offsetDelta = { x: n.x, y: n.y }), t.deltaX = a.x + (n.x - i.x), t.deltaY = a.y + (n.y - i.y)
  }

  function _(e, t) {
    var n, a, o, r, s = e.lastInterval || t, l = t.timeStamp - s.timeStamp;
    if (t.eventType != Se && (l > xe || s.velocity === i)) {
      var c = s.deltaX - t.deltaX, u = s.deltaY - t.deltaY, d = D(l, c, u);
      a = d.x, o = d.y, n = pe(d.x) > pe(d.y) ? d.x : d.y, r = I(c, u), e.lastInterval = t
    } else n = s.velocity, a = s.velocityX, o = s.velocityY, r = s.direction;
    t.velocity = n, t.velocityX = a, t.velocityY = o, t.direction = r
  }

  function O(e) {
    for (var t = [], n = 0; n < e.pointers.length;)t[n] = {
      clientX: de(e.pointers[n].clientX),
      clientY: de(e.pointers[n].clientY)
    }, n++;
    return { timeStamp: fe(), pointers: t, center: $(t), deltaX: e.deltaX, deltaY: e.deltaY }
  }

  function $(e) {
    var t = e.length;
    if (1 === t)return { x: de(e[0].clientX), y: de(e[0].clientY) };
    for (var n = 0, i = 0, a = 0; t > a;)n += e[a].clientX, i += e[a].clientY, a++;
    return { x: de(n / t), y: de(i / t) }
  }

  function D(e, t, n) {
    return { x: t / e || 0, y: n / e || 0 }
  }

  function I(e, t) {
    return e === t ? Ae : pe(e) >= pe(t) ? e > 0 ? Ee : Pe : t > 0 ? _e : Oe
  }

  function M(e, t, n) {
    n || (n = Me);
    var i = t[n[0]] - e[n[0]], a = t[n[1]] - e[n[1]];
    return Math.sqrt(i * i + a * a)
  }

  function q(e, t, n) {
    n || (n = Me);
    var i = t[n[0]] - e[n[0]], a = t[n[1]] - e[n[1]];
    return 180 * Math.atan2(a, i) / Math.PI
  }

  function N(e, t) {
    return q(t[1], t[0], qe) - q(e[1], e[0], qe)
  }

  function L(e, t) {
    return M(t[0], t[1], qe) / M(e[0], e[1], qe)
  }

  function j() {
    this.evEl = Le, this.evWin = je, this.allow = !0, this.pressed = !1, T.apply(this, arguments)
  }

  function z() {
    this.evEl = He, this.evWin = Re, T.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
  }

  function F() {
    this.evTarget = Ve, this.evWin = Xe, this.started = !1, T.apply(this, arguments)
  }

  function H(e, t) {
    var n = b(e.touches), i = b(e.changedTouches);
    return t & (Te | Se) && (n = w(n.concat(i), "identifier", !0)), [n, i]
  }

  function R() {
    this.evTarget = Ye, this.targetIds = {}, T.apply(this, arguments)
  }

  function W(e, t) {
    var n = b(e.touches), i = this.targetIds;
    if (t & (ke | Ce) && 1 === n.length)return i[n[0].identifier] = !0, [n, n];
    var a, o, r = b(e.changedTouches), s = [], l = this.target;
    if (o = n.filter(function (e) {
        return v(e.target, l)
      }), t === ke)for (a = 0; a < o.length;)i[o[a].identifier] = !0, a++;
    for (a = 0; a < r.length;)i[r[a].identifier] && s.push(r[a]), t & (Te | Se) && delete i[r[a].identifier], a++;
    return s.length ? [w(o.concat(s), "identifier", !0), s] : void 0
  }

  function V() {
    T.apply(this, arguments);
    var e = u(this.handler, this);
    this.touch = new R(this.manager, e), this.mouse = new j(this.manager, e)
  }

  function X(e, t) {
    this.manager = e, this.set(t)
  }

  function B(e) {
    if (m(e, Ke))return Ke;
    var t = m(e, et), n = m(e, tt);
    return t && n ? et + " " + tt : t || n ? t ? et : tt : m(e, Je) ? Je : Ze
  }

  function Y(e) {
    this.id = k(), this.manager = null, this.options = l(e || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = nt, this.simultaneous = {}, this.requireFail = []
  }

  function Q(e) {
    return e & st ? "cancel" : e & ot ? "end" : e & at ? "move" : e & it ? "start" : ""
  }

  function U(e) {
    return e == Oe ? "down" : e == _e ? "up" : e == Ee ? "left" : e == Pe ? "right" : ""
  }

  function G(e, t) {
    var n = t.manager;
    return n ? n.get(e) : e
  }

  function Z() {
    Y.apply(this, arguments)
  }

  function J() {
    Z.apply(this, arguments), this.pX = null, this.pY = null
  }

  function K() {
    Z.apply(this, arguments)
  }

  function ee() {
    Y.apply(this, arguments), this._timer = null, this._input = null
  }

  function te() {
    Z.apply(this, arguments)
  }

  function ne() {
    Z.apply(this, arguments)
  }

  function ie() {
    Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
  }

  function ae(e, t) {
    return t = t || {}, t.recognizers = p(t.recognizers, ae.defaults.preset), new oe(e, t)
  }

  function oe(e, t) {
    t = t || {}, this.options = l(t, ae.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = S(this), this.touchAction = new X(this, this.options.touchAction), re(this, !0), r(t.recognizers, function (e) {
      var t = this.add(new e[0](e[1]));
      e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
    }, this)
  }

  function re(e, t) {
    var n = e.element;
    r(e.options.cssProps, function (e, i) {
      n.style[x(n.style, i)] = t ? e : ""
    })
  }

  function se(e, n) {
    var i = t.createEvent("Event");
    i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
  }

  var le = ["", "webkit", "moz", "MS", "ms", "o"], ce = t.createElement("div"), ue = "function", de = Math.round,
    pe = Math.abs, fe = Date.now, he = 1, ve = /mobile|tablet|ip(ad|hone|od)|android/i, me = "ontouchstart" in e,
    ge = x(e, "PointerEvent") !== i, ye = me && ve.test(navigator.userAgent), be = "touch", we = "mouse", xe = 25,
    ke = 1, Ce = 2, Te = 4, Se = 8, Ae = 1, Ee = 2, Pe = 4, _e = 8, Oe = 16, $e = Ee | Pe, De = _e | Oe, Ie = $e | De,
    Me = ["x", "y"], qe = ["clientX", "clientY"];
  T.prototype = {
    handler: function () {
    }, init: function () {
      this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(C(this.element), this.evWin, this.domHandler)
    }, destroy: function () {
      this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(C(this.element), this.evWin, this.domHandler)
    }
  };
  var Ne = { mousedown: ke, mousemove: Ce, mouseup: Te }, Le = "mousedown", je = "mousemove mouseup";
  c(j, T, {
    handler: function (e) {
      var t = Ne[e.type];
      t & ke && 0 === e.button && (this.pressed = !0), t & Ce && 1 !== e.which && (t = Te), this.pressed && this.allow && (t & Te && (this.pressed = !1), this.callback(this.manager, t, {
        pointers: [e],
        changedPointers: [e],
        pointerType: we,
        srcEvent: e
      }))
    }
  });
  var ze = { pointerdown: ke, pointermove: Ce, pointerup: Te, pointercancel: Se, pointerout: Se },
    Fe = { 2: be, 3: "pen", 4: we, 5: "kinect" }, He = "pointerdown", Re = "pointermove pointerup pointercancel";
  e.MSPointerEvent && (He = "MSPointerDown", Re = "MSPointerMove MSPointerUp MSPointerCancel"), c(z, T, {
    handler: function (e) {
      var t = this.store, n = !1, i = e.type.toLowerCase().replace("ms", ""), a = ze[i],
        o = Fe[e.pointerType] || e.pointerType, r = o == be, s = y(t, e.pointerId, "pointerId");
      a & ke && (0 === e.button || r) ? 0 > s && (t.push(e), s = t.length - 1) : a & (Te | Se) && (n = !0), 0 > s || (t[s] = e, this.callback(this.manager, a, {
        pointers: t,
        changedPointers: [e],
        pointerType: o,
        srcEvent: e
      }), n && t.splice(s, 1))
    }
  });
  var We = { touchstart: ke, touchmove: Ce, touchend: Te, touchcancel: Se }, Ve = "touchstart",
    Xe = "touchstart touchmove touchend touchcancel";
  c(F, T, {
    handler: function (e) {
      var t = We[e.type];
      if (t === ke && (this.started = !0), this.started) {
        var n = H.call(this, e, t);
        t & (Te | Se) && 0 == n[0].length - n[1].length && (this.started = !1), this.callback(this.manager, t, {
          pointers: n[0],
          changedPointers: n[1],
          pointerType: be,
          srcEvent: e
        })
      }
    }
  });
  var Be = { touchstart: ke, touchmove: Ce, touchend: Te, touchcancel: Se },
    Ye = "touchstart touchmove touchend touchcancel";
  c(R, T, {
    handler: function (e) {
      var t = Be[e.type], n = W.call(this, e, t);
      n && this.callback(this.manager, t, { pointers: n[0], changedPointers: n[1], pointerType: be, srcEvent: e })
    }
  }), c(V, T, {
    handler: function (e, t, n) {
      var i = n.pointerType == be, a = n.pointerType == we;
      if (i) this.mouse.allow = !1; else if (a && !this.mouse.allow)return;
      t & (Te | Se) && (this.mouse.allow = !0), this.callback(e, t, n)
    }, destroy: function () {
      this.touch.destroy(), this.mouse.destroy()
    }
  });
  var Qe = x(ce.style, "touchAction"), Ue = Qe !== i, Ge = "compute", Ze = "auto", Je = "manipulation", Ke = "none",
    et = "pan-x", tt = "pan-y";
  X.prototype = {
    set: function (e) {
      e == Ge && (e = this.compute()), Ue && (this.manager.element.style[Qe] = e), this.actions = e.toLowerCase().trim()
    }, update: function () {
      this.set(this.manager.options.touchAction)
    }, compute: function () {
      var e = [];
      return r(this.manager.recognizers, function (t) {
        d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
      }), B(e.join(" "))
    }, preventDefaults: function (e) {
      if (!Ue) {
        var t = e.srcEvent, n = e.offsetDirection;
        if (this.manager.session.prevented)return void t.preventDefault();
        var i = this.actions, a = m(i, Ke), o = m(i, tt), r = m(i, et);
        return a || o && n & $e || r && n & De ? this.preventSrc(t) : void 0
      }
    }, preventSrc: function (e) {
      this.manager.session.prevented = !0, e.preventDefault()
    }
  };
  var nt = 1, it = 2, at = 4, ot = 8, rt = ot, st = 16;
  Y.prototype = {
    defaults: {}, set: function (e) {
      return s(this.options, e), this.manager && this.manager.touchAction.update(), this
    }, recognizeWith: function (e) {
      if (o(e, "recognizeWith", this))return this;
      var t = this.simultaneous;
      return e = G(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
    }, dropRecognizeWith: function (e) {
      return o(e, "dropRecognizeWith", this) ? this : (e = G(e, this), delete this.simultaneous[e.id], this)
    }, requireFailure: function (e) {
      if (o(e, "requireFailure", this))return this;
      var t = this.requireFail;
      return e = G(e, this), -1 === y(t, e) && (t.push(e), e.requireFailure(this)), this
    }, dropRequireFailure: function (e) {
      if (o(e, "dropRequireFailure", this))return this;
      e = G(e, this);
      var t = y(this.requireFail, e);
      return t > -1 && this.requireFail.splice(t, 1), this
    }, hasRequireFailures: function () {
      return this.requireFail.length > 0
    }, canRecognizeWith: function (e) {
      return !!this.simultaneous[e.id]
    }, emit: function (e) {
      function t(t) {
        n.manager.emit(n.options.event + (t ? Q(i) : ""), e)
      }

      var n = this, i = this.state;
      ot > i && t(!0), t(), i >= ot && t(!0)
    }, tryEmit: function (e) {
      return this.canEmit() ? this.emit(e) : void(this.state = 32)
    }, canEmit: function () {
      for (var e = 0; e < this.requireFail.length;) {
        if (!(this.requireFail[e].state & (32 | nt)))return !1;
        e++
      }
      return !0
    }, recognize: function (e) {
      var t = s({}, e);
      return d(this.options.enable, [this, t]) ? (this.state & (rt | st | 32) && (this.state = nt), this.state = this.process(t), void(this.state & (it | at | ot | st) && this.tryEmit(t))) : (this.reset(), void(this.state = 32))
    }, process: function () {
    }, getTouchAction: function () {
    }, reset: function () {
    }
  }, c(Z, Y, {
    defaults: { pointers: 1 }, attrTest: function (e) {
      var t = this.options.pointers;
      return 0 === t || e.pointers.length === t
    }, process: function (e) {
      var t = this.state, n = e.eventType, i = t & (it | at), a = this.attrTest(e);
      return i && (n & Se || !a) ? t | st : i || a ? n & Te ? t | ot : t & it ? t | at : it : 32
    }
  }), c(J, Z, {
    defaults: { event: "pan", threshold: 10, pointers: 1, direction: Ie }, getTouchAction: function () {
      var e = this.options.direction, t = [];
      return e & $e && t.push(tt), e & De && t.push(et), t
    }, directionTest: function (e) {
      var t = this.options, n = !0, i = e.distance, a = e.direction, o = e.deltaX, r = e.deltaY;
      return a & t.direction || (t.direction & $e ? (a = 0 === o ? Ae : 0 > o ? Ee : Pe, n = o != this.pX, i = Math.abs(e.deltaX)) : (a = 0 === r ? Ae : 0 > r ? _e : Oe, n = r != this.pY, i = Math.abs(e.deltaY))), e.direction = a, n && i > t.threshold && a & t.direction
    }, attrTest: function (e) {
      return Z.prototype.attrTest.call(this, e) && (this.state & it || !(this.state & it) && this.directionTest(e))
    }, emit: function (e) {
      this.pX = e.deltaX, this.pY = e.deltaY;
      var t = U(e.direction);
      t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
    }
  }), c(K, Z, {
    defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function () {
      return [Ke]
    }, attrTest: function (e) {
      return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & it)
    }, emit: function (e) {
      if (this._super.emit.call(this, e), 1 !== e.scale) {
        var t = e.scale < 1 ? "in" : "out";
        this.manager.emit(this.options.event + t, e)
      }
    }
  }), c(ee, Y, {
    defaults: { event: "press", pointers: 1, time: 500, threshold: 5 }, getTouchAction: function () {
      return [Ze]
    }, process: function (e) {
      var t = this.options, n = e.pointers.length === t.pointers, i = e.distance < t.threshold,
        o = e.deltaTime > t.time;
      if (this._input = e, !i || !n || e.eventType & (Te | Se) && !o) this.reset(); else if (e.eventType & ke) this.reset(), this._timer = a(function () {
        this.state = rt, this.tryEmit()
      }, t.time, this); else if (e.eventType & Te)return rt;
      return 32
    }, reset: function () {
      clearTimeout(this._timer)
    }, emit: function (e) {
      this.state === rt && (e && e.eventType & Te ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = fe(), this.manager.emit(this.options.event, this._input)))
    }
  }), c(te, Z, {
    defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function () {
      return [Ke]
    }, attrTest: function (e) {
      return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & it)
    }
  }), c(ne, Z, {
    defaults: { event: "swipe", threshold: 10, velocity: .65, direction: $e | De, pointers: 1 },
    getTouchAction: function () {
      return J.prototype.getTouchAction.call(this)
    },
    attrTest: function (e) {
      var t, n = this.options.direction;
      return n & ($e | De) ? t = e.velocity : n & $e ? t = e.velocityX : n & De && (t = e.velocityY), this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && pe(t) > this.options.velocity && e.eventType & Te
    },
    emit: function (e) {
      var t = U(e.direction);
      t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
    }
  }), c(ie, Y, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 2,
      posThreshold: 10
    }, getTouchAction: function () {
      return [Je]
    }, process: function (e) {
      var t = this.options, n = e.pointers.length === t.pointers, i = e.distance < t.threshold,
        o = e.deltaTime < t.time;
      if (this.reset(), e.eventType & ke && 0 === this.count)return this.failTimeout();
      if (i && o && n) {
        if (e.eventType != Te)return this.failTimeout();
        var r = !this.pTime || e.timeStamp - this.pTime < t.interval,
          s = !this.pCenter || M(this.pCenter, e.center) < t.posThreshold;
        if (this.pTime = e.timeStamp, this.pCenter = e.center, s && r ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps)return this.hasRequireFailures() ? (this._timer = a(function () {
          this.state = rt, this.tryEmit()
        }, t.interval, this), it) : rt
      }
      return 32
    }, failTimeout: function () {
      return this._timer = a(function () {
        this.state = 32
      }, this.options.interval, this), 32
    }, reset: function () {
      clearTimeout(this._timer)
    }, emit: function () {
      this.state == rt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
    }
  }), ae.VERSION = "2.0.4", ae.defaults = {
    domEvents: !1,
    touchAction: Ge,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [[te, { enable: !1 }], [K, { enable: !1 }, ["rotate"]], [ne, { direction: $e }], [J, { direction: $e }, ["swipe"]], [ie], [ie, {
      event: "doubletap",
      taps: 2
    }, ["tap"]], [ee]],
    cssProps: {
      userSelect: "default",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };
  oe.prototype = {
    set: function (e) {
      return s(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
    }, stop: function (e) {
      this.session.stopped = e ? 2 : 1
    }, recognize: function (e) {
      var t = this.session;
      if (!t.stopped) {
        this.touchAction.preventDefaults(e);
        var n, i = this.recognizers, a = t.curRecognizer;
        (!a || a && a.state & rt) && (a = t.curRecognizer = null);
        for (var o = 0; o < i.length;)n = i[o], 2 === t.stopped || a && n != a && !n.canRecognizeWith(a) ? n.reset() : n.recognize(e), !a && n.state & (it | at | ot) && (a = t.curRecognizer = n), o++
      }
    }, get: function (e) {
      if (e instanceof Y)return e;
      for (var t = this.recognizers, n = 0; n < t.length; n++)if (t[n].options.event == e)return t[n];
      return null
    }, add: function (e) {
      if (o(e, "add", this))return this;
      var t = this.get(e.options.event);
      return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
    }, remove: function (e) {
      if (o(e, "remove", this))return this;
      var t = this.recognizers;
      return e = this.get(e), t.splice(y(t, e), 1), this.touchAction.update(), this
    }, on: function (e, t) {
      var n = this.handlers;
      return r(g(e), function (e) {
        n[e] = n[e] || [], n[e].push(t)
      }), this
    }, off: function (e, t) {
      var n = this.handlers;
      return r(g(e), function (e) {
        t ? n[e].splice(y(n[e], t), 1) : delete n[e]
      }), this
    }, emit: function (e, t) {
      this.options.domEvents && se(e, t);
      var n = this.handlers[e] && this.handlers[e].slice();
      if (n && n.length) {
        t.type = e, t.preventDefault = function () {
          t.srcEvent.preventDefault()
        };
        for (var i = 0; i < n.length;)n[i](t), i++
      }
    }, destroy: function () {
      this.element && re(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
    }
  }, s(ae, {
    INPUT_START: ke,
    INPUT_MOVE: Ce,
    INPUT_END: Te,
    INPUT_CANCEL: Se,
    STATE_POSSIBLE: nt,
    STATE_BEGAN: it,
    STATE_CHANGED: at,
    STATE_ENDED: ot,
    STATE_RECOGNIZED: rt,
    STATE_CANCELLED: st,
    STATE_FAILED: 32,
    DIRECTION_NONE: Ae,
    DIRECTION_LEFT: Ee,
    DIRECTION_RIGHT: Pe,
    DIRECTION_UP: _e,
    DIRECTION_DOWN: Oe,
    DIRECTION_HORIZONTAL: $e,
    DIRECTION_VERTICAL: De,
    DIRECTION_ALL: Ie,
    Manager: oe,
    Input: T,
    TouchAction: X,
    TouchInput: R,
    MouseInput: j,
    PointerEventInput: z,
    TouchMouseInput: V,
    SingleTouchInput: F,
    Recognizer: Y,
    AttrRecognizer: Z,
    Tap: ie,
    Pan: J,
    Swipe: ne,
    Pinch: K,
    Rotate: te,
    Press: ee,
    on: f,
    off: h,
    each: r,
    merge: l,
    extend: s,
    inherit: c,
    bindFn: u,
    prefixed: x
  }), typeof define == ue && define.amd ? define(function () {
    return ae
  }) : "undefined" != typeof module && module.exports ? module.exports = ae : e.Hammer = ae
}(window, document), function (e) {
  "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(I, Hammer)
}(function (e, t) {
  function n(n, i) {
    var a = e(n);
    a.data("hammer") || a.data("hammer", new t(a[0], i))
  }

  e.fn.hammer = function (e) {
    return this.each(function () {
      n(this, e)
    })
  }, t.Manager.prototype.emit = function (t) {
    return function (n, i) {
      t.call(this, n, i), e(this.element).trigger({ type: n, gesture: i })
    }
  }(t.Manager.prototype.emit)
}), function (e) {
  e.Package ? Materialize = {} : e.Materialize = {}
}(window), function (e) {
  for (var t = 0, n = ["webkit", "moz"], i = e.requestAnimationFrame, a = e.cancelAnimationFrame, o = n.length; --o >= 0 && !i;)i = e[n[o] + "RequestAnimationFrame"], a = e[n[o] + "CancelRequestAnimationFrame"];
  i && a || (i = function (e) {
    var n = +Date.now(), i = Math.max(t + 16, n);
    return setTimeout(function () {
      e(t = i)
    }, i - n)
  }, a = clearTimeout), e.requestAnimationFrame = i, e.cancelAnimationFrame = a
}(window), Materialize.objectSelectorString = function (e) {
  return ((e.prop("tagName") || "") + (e.attr("id") || "") + (e.attr("class") || "")).replace(/\s/g, "")
}, Materialize.guid = function () {
  function e() {
    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
  }

  return function () {
    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
  }
}(), Materialize.escapeHash = function (e) {
  return e.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
}, Materialize.elementOrParentIsFixed = function (e) {
  var t = $(e), n = !1;
  return t.add(t.parents()).each(function () {
    if ("fixed" === $(this).css("position"))return n = !0, !1
  }), n
};
var M = Date.now || function () {
    return (new Date).getTime()
  };
Materialize.throttle = function (e, t, n) {
  var i, a, o, r = null, s = 0;
  n || (n = {});
  var l = function () {
    s = !1 === n.leading ? 0 : M(), r = null, o = e.apply(i, a), i = a = null
  };
  return function () {
    var c = M();
    s || !1 !== n.leading || (s = c);
    var u = t - (c - s);
    return i = this, a = arguments, u <= 0 ? (clearTimeout(r), r = null, s = c, o = e.apply(i, a), i = a = null) : r || !1 === n.trailing || (r = setTimeout(l, u)), o
  }
};
var q;
q = I ? I.Velocity : $ ? $.Velocity : Velocity, function (e) {
  e.fn.collapsible = function (t, n) {
    var i = { accordion: void 0, onOpen: void 0, onClose: void 0 }, a = t;
    return t = e.extend(i, t), this.each(function () {
      function i(t) {
        p = d.find("> li > .collapsible-header"), t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
          duration: 350,
          easing: "easeOutQuart",
          queue: !1,
          complete: function () {
            e(this).css("height", "")
          }
        }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
          duration: 350,
          easing: "easeOutQuart",
          queue: !1,
          complete: function () {
            e(this).css("height", "")
          }
        }), p.not(t).removeClass("active").parent().removeClass("active"), p.not(t).parent().children(".collapsible-body").stop(!0, !1).each(function () {
          e(this).is(":visible") && e(this).slideUp({
            duration: 350,
            easing: "easeOutQuart",
            queue: !1,
            complete: function () {
              e(this).css("height", ""), s(e(this).siblings(".collapsible-header"))
            }
          })
        })
      }

      function o(t) {
        t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
          duration: 350,
          easing: "easeOutQuart",
          queue: !1,
          complete: function () {
            e(this).css("height", "")
          }
        }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
          duration: 350,
          easing: "easeOutQuart",
          queue: !1,
          complete: function () {
            e(this).css("height", "")
          }
        })
      }

      function r(e, n) {
        n || e.toggleClass("active"), t.accordion || "accordion" === f || void 0 === f ? i(e) : o(e), s(e)
      }

      function s(e) {
        e.hasClass("active") ? "function" == typeof t.onOpen && t.onOpen.call(this, e.parent()) : "function" == typeof t.onClose && t.onClose.call(this, e.parent())
      }

      function l(e) {
        return c(e).length > 0
      }

      function c(e) {
        return e.closest("li > .collapsible-header")
      }

      function u() {
        d.off("click.collapse", "> li > .collapsible-header")
      }

      var d = e(this), p = e(this).find("> li > .collapsible-header"), f = d.data("collapsible");
      if ("destroy" !== a)if (n >= 0 && n < p.length) {
        var h = p.eq(n);
        h.length && ("open" === a || "close" === a && h.hasClass("active")) && r(h)
      } else u(), d.on("click.collapse", "> li > .collapsible-header", function (t) {
        var n = e(t.target);
        l(n) && (n = c(n)), r(n)
      }), t.accordion || "accordion" === f || void 0 === f ? r(p.filter(".active").first(), !0) : p.filter(".active").each(function () {
        r(e(this), !0)
      }); else u()
    })
  }, e(document).ready(function () {
    e(".collapsible").collapsible()
  })
}(I), function (e) {
  e.fn.scrollTo = function (t) {
    return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
  }, e.fn.dropdown = function (t) {
    var n = {
      inDuration: 300,
      outDuration: 225,
      constrainWidth: !0,
      hover: !1,
      gutter: 0,
      belowOrigin: !1,
      alignment: "left",
      stopPropagation: !1
    };
    return "open" === t ? (this.each(function () {
      e(this).trigger("open")
    }), !1) : "close" === t ? (this.each(function () {
      e(this).trigger("close")
    }), !1) : void this.each(function () {
      function i() {
        void 0 !== r.data("induration") && (s.inDuration = r.data("induration")), void 0 !== r.data("outduration") && (s.outDuration = r.data("outduration")), void 0 !== r.data("constrainwidth") && (s.constrainWidth = r.data("constrainwidth")), void 0 !== r.data("hover") && (s.hover = r.data("hover")), void 0 !== r.data("gutter") && (s.gutter = r.data("gutter")), void 0 !== r.data("beloworigin") && (s.belowOrigin = r.data("beloworigin")), void 0 !== r.data("alignment") && (s.alignment = r.data("alignment")), void 0 !== r.data("stoppropagation") && (s.stopPropagation = r.data("stoppropagation"))
      }

      function a(t) {
        "focus" === t && (l = !0), i(), c.addClass("active"), r.addClass("active"), !0 === s.constrainWidth ? c.css("width", r.outerWidth()) : c.css("white-space", "nowrap");
        var n = window.innerHeight, a = r.innerHeight(), u = r.offset().left,
          d = r.offset().top - e(window).scrollTop(), p = s.alignment, f = 0, h = 0, v = 0;
        !0 === s.belowOrigin && (v = a);
        var m = 0, g = 0, y = r.parent();
        if (y.is("body") || (y[0].scrollHeight > y[0].clientHeight && (m = y[0].scrollTop), y[0].scrollWidth > y[0].clientWidth && (g = y[0].scrollLeft)), u + c.innerWidth() > e(window).width() ? p = "right" : u - c.innerWidth() + r.innerWidth() < 0 && (p = "left"), d + c.innerHeight() > n)if (d + a - c.innerHeight() < 0) {
          var b = n - d - v;
          c.css("max-height", b)
        } else v || (v += a), v -= c.innerHeight();
        "left" === p ? (f = s.gutter, h = r.position().left + f) : "right" === p && (c.stop(!0, !0).css({
            opacity: 0,
            left: 0
          }), h = r.position().left + r.outerWidth() - c.outerWidth() + (f = -s.gutter)), c.css({
          position: "absolute",
          top: r.position().top + v + m,
          left: h + g
        }), c.slideDown({
          queue: !1, duration: s.inDuration, easing: "easeOutCubic", complete: function () {
            e(this).css("height", "")
          }
        }).animate({ opacity: 1 }, {
          queue: !1,
          duration: s.inDuration,
          easing: "easeOutSine"
        }), setTimeout(function () {
          e(document).on("click." + c.attr("id"), function (t) {
            o(), e(document).off("click." + c.attr("id"))
          })
        }, 0)
      }

      function o() {
        l = !1, c.fadeOut(s.outDuration), c.removeClass("active"), r.removeClass("active"), e(document).off("click." + c.attr("id")), setTimeout(function () {
          c.css("max-height", "")
        }, s.outDuration)
      }

      var r = e(this), s = e.extend({}, n, t), l = !1, c = e("#" + r.attr("data-activates"));
      if (i(), r.after(c), s.hover) {
        var u = !1;
        r.off("click." + r.attr("id")), r.on("mouseenter", function (e) {
          !1 === u && (a(), u = !0)
        }), r.on("mouseleave", function (t) {
          var n = t.toElement || t.relatedTarget;
          e(n).closest(".dropdown-content").is(c) || (c.stop(!0, !0), o(), u = !1)
        }), c.on("mouseleave", function (t) {
          var n = t.toElement || t.relatedTarget;
          e(n).closest(".dropdown-button").is(r) || (c.stop(!0, !0), o(), u = !1)
        })
      } else r.off("click." + r.attr("id")), r.on("click." + r.attr("id"), function (t) {
        l || (r[0] != t.currentTarget || r.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? r.hasClass("active") && (o(), e(document).off("click." + c.attr("id"))) : (t.preventDefault(), s.stopPropagation && t.stopPropagation(), a("click")))
      });
      r.on("open", function (e, t) {
        a(t)
      }), r.on("close", o)
    })
  }, e(document).ready(function () {
    e(".dropdown-button").dropdown()
  })
}(I), function (e) {
  var t = 0, n = 0, i = function () {
    return "materialize-modal-overlay-" + ++n
  }, a = {
    init: function (n) {
      var a = {
        opacity: .5,
        inDuration: 350,
        outDuration: 250,
        ready: void 0,
        complete: void 0,
        dismissible: !0,
        startingTop: "4%",
        endingTop: "10%"
      };
      return n = e.extend(a, n), this.each(function () {
        var a = e(this), o = e(this).attr("id") || "#" + e(this).data("target"), r = function () {
          var i = a.data("overlay-id"), o = e("#" + i);
          a.removeClass("open"), e("body").css({
            overflow: "",
            width: ""
          }), a.find(".modal-close").off("click.close"), e(document).off("keyup.modal" + i), o.velocity({ opacity: 0 }, {
            duration: n.outDuration,
            queue: !1,
            ease: "easeOutQuart"
          });
          var r = {
            duration: n.outDuration, queue: !1, ease: "easeOutCubic", complete: function () {
              e(this).css({ display: "none" }), "function" == typeof n.complete && n.complete.call(this, a), o.remove(), t--
            }
          };
          a.hasClass("bottom-sheet") ? a.velocity({ bottom: "-100%", opacity: 0 }, r) : a.velocity({
            top: n.startingTop,
            opacity: 0,
            scaleX: .7
          }, r)
        }, s = function (o) {
          var s = e("body"), l = s.innerWidth();
          if (s.css("overflow", "hidden"), s.width(l), !a.hasClass("open")) {
            var c = i(), u = e('<div class="modal-overlay"></div>'), d = ++t;
            u.attr("id", c).css("z-index", 1e3 + 2 * d), a.data("overlay-id", c).css("z-index", 1e3 + 2 * d + 1), a.addClass("open"), e("body").append(u), n.dismissible && (u.click(function () {
              r()
            }), e(document).on("keyup.modal" + c, function (e) {
              27 === e.keyCode && r()
            })), a.find(".modal-close").on("click.close", function (e) {
              r()
            }), u.css({ display: "block", opacity: 0 }), a.css({
              display: "block",
              opacity: 0
            }), u.velocity({ opacity: n.opacity }, {
              duration: n.inDuration,
              queue: !1,
              ease: "easeOutCubic"
            }), a.data("associated-overlay", u[0]);
            var p = {
              duration: n.inDuration, queue: !1, ease: "easeOutCubic", complete: function () {
                "function" == typeof n.ready && n.ready.call(this, a, o)
              }
            };
            a.hasClass("bottom-sheet") ? a.velocity({
              bottom: "0",
              opacity: 1
            }, p) : (e.Velocity.hook(a, "scaleX", .7), a.css({ top: n.startingTop }), a.velocity({
              top: n.endingTop,
              opacity: 1,
              scaleX: "1"
            }, p))
          }
        };
        e(document).off("click.modalTrigger", 'a[href="#' + o + '"], [data-target="' + o + '"]'), e(this).off("openModal"), e(this).off("closeModal"), e(document).on("click.modalTrigger", 'a[href="#' + o + '"], [data-target="' + o + '"]', function (t) {
          n.startingTop = (e(this).offset().top - e(window).scrollTop()) / 1.15, s(e(this)), t.preventDefault()
        }), e(this).on("openModal", function () {
          e(this).attr("href") || e(this).data("target");
          s()
        }), e(this).on("closeModal", function () {
          r()
        })
      })
    }, open: function () {
      a.init.apply(this, arguments), e(this).trigger("openModal")
    }, close: function () {
      e(this).trigger("closeModal")
    }
  };
  e.fn.modal = function (t) {
    return a[t] ? a[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.modal") : a.init.apply(this, arguments)
  }
}(I), function (e) {
  e.fn.materialbox = function () {
    return this.each(function () {
      function t() {
        o = !1;
        var t = s.parent(".material-placeholder"), i = (window.innerWidth, window.innerHeight, s.data("width")),
          l = s.data("height");
        s.velocity("stop", !0), e("#materialbox-overlay").velocity("stop", !0), e(".materialbox-caption").velocity("stop", !0), e(window).off("scroll.materialbox"), e(document).off("keyup.materialbox"), e(window).off("resize.materialbox"), e("#materialbox-overlay").velocity({ opacity: 0 }, {
          duration: r,
          queue: !1,
          easing: "easeOutQuad",
          complete: function () {
            a = !1, e(this).remove()
          }
        }), s.velocity({ width: i, height: l, left: 0, top: 0 }, {
          duration: r,
          queue: !1,
          easing: "easeOutQuad",
          complete: function () {
            t.css({
              height: "",
              width: "",
              position: "",
              top: "",
              left: ""
            }), s.removeAttr("style"), s.attr("style", c), s.removeClass("active"), o = !0, n && n.css("overflow", "")
          }
        }), e(".materialbox-caption").velocity({ opacity: 0 }, {
          duration: r,
          queue: !1,
          easing: "easeOutQuad",
          complete: function () {
            e(this).remove()
          }
        })
      }

      if (!e(this).hasClass("initialized")) {
        e(this).addClass("initialized");
        var n, i, a = !1, o = !0, r = 200, s = e(this), l = e("<div></div>").addClass("material-placeholder"),
          c = s.attr("style");
        s.wrap(l), s.on("click", function () {
          var r = s.parent(".material-placeholder"), l = window.innerWidth, c = window.innerHeight, u = s.width(),
            d = s.height();
          if (!1 === o)return t(), !1;
          if (a && !0 === o)return t(), !1;
          o = !1, s.addClass("active"), a = !0, r.css({
            width: r[0].getBoundingClientRect().width,
            height: r[0].getBoundingClientRect().height,
            position: "relative",
            top: 0,
            left: 0
          }), n = void 0, i = r[0].parentNode;
          for (; null !== i && !e(i).is(document);) {
            var p = e(i);
            "visible" !== p.css("overflow") && (p.css("overflow", "visible"), n = void 0 === n ? p : n.add(p)), i = i.parentNode
          }
          s.css({
            position: "absolute",
            "z-index": 1e3,
            "will-change": "left, top, width, height"
          }).data("width", u).data("height", d);
          var f = e('<div id="materialbox-overlay"></div>').css({ opacity: 0 }).click(function () {
            !0 === o && t()
          });
          s.before(f);
          var h = f[0].getBoundingClientRect();
          if (f.css({
              width: l,
              height: c,
              left: -1 * h.left,
              top: -1 * h.top
            }), f.velocity({ opacity: 1 }, {
              duration: 275,
              queue: !1,
              easing: "easeOutQuad"
            }), "" !== s.data("caption")) {
            var v = e('<div class="materialbox-caption"></div>');
            v.text(s.data("caption")), e("body").append(v), v.css({ display: "inline" }), v.velocity({ opacity: 1 }, {
              duration: 275,
              queue: !1,
              easing: "easeOutQuad"
            })
          }
          var m = 0, g = 0;
          u / l > d / c ? (m = .9 * l, g = .9 * l * (d / u)) : (m = .9 * c * (u / d), g = .9 * c), s.hasClass("responsive-img") ? s.velocity({
            "max-width": m,
            width: u
          }, {
            duration: 0, queue: !1, complete: function () {
              s.css({ left: 0, top: 0 }).velocity({
                height: g,
                width: m,
                left: e(document).scrollLeft() + l / 2 - s.parent(".material-placeholder").offset().left - m / 2,
                top: e(document).scrollTop() + c / 2 - s.parent(".material-placeholder").offset().top - g / 2
              }, {
                duration: 275, queue: !1, easing: "easeOutQuad", complete: function () {
                  o = !0
                }
              })
            }
          }) : s.css("left", 0).css("top", 0).velocity({
            height: g,
            width: m,
            left: e(document).scrollLeft() + l / 2 - s.parent(".material-placeholder").offset().left - m / 2,
            top: e(document).scrollTop() + c / 2 - s.parent(".material-placeholder").offset().top - g / 2
          }, {
            duration: 275, queue: !1, easing: "easeOutQuad", complete: function () {
              o = !0
            }
          }), e(window).on("scroll.materialbox", function () {
            a && t()
          }), e(window).on("resize.materialbox", function () {
            a && t()
          }), e(document).on("keyup.materialbox", function (e) {
            27 === e.keyCode && !0 === o && a && t()
          })
        })
      }
    })
  }, e(document).ready(function () {
    e(".materialboxed").materialbox()
  })
}(I), function (e) {
  e.fn.parallax = function () {
    var t = e(window).width();
    return this.each(function (n) {
      function i(n) {
        var i;
        i = t < 601 ? a.height() > 0 ? a.height() : a.children("img").height() : a.height() > 0 ? a.height() : 500;
        var o = a.children("img").first(), r = o.height() - i, s = a.offset().top + i, l = a.offset().top,
          c = e(window).scrollTop(), u = window.innerHeight, d = (c + u - l) / (i + u), p = Math.round(r * d);
        n && o.css("display", "block"), s > c && l < c + u && o.css("transform", "translate3D(-50%," + p + "px, 0)")
      }

      var a = e(this);
      a.addClass("parallax"), a.children("img").one("load", function () {
        i(!0)
      }).each(function () {
        this.complete && e(this).trigger("load")
      }), e(window).scroll(function () {
        t = e(window).width(), i(!1)
      }), e(window).resize(function () {
        t = e(window).width(), i(!1)
      })
    })
  }
}(I), function (e) {
  var t = {
    init: function (t) {
      var n = { onShow: null, swipeable: !1, responsiveThreshold: 1 / 0 };
      t = e.extend(n, t);
      var i = Materialize.objectSelectorString(e(this));
      return this.each(function (n) {
        var a, o, r, s, l, c = i + n, u = e(this), d = e(window).width(), p = u.find("li.tab a"), f = u.width(),
          h = e(), v = Math.max(f, u[0].scrollWidth) / p.length, m = prev_index = 0, g = !1, y = function (e) {
            return Math.ceil(f - e.position().left - e.outerWidth() - u.scrollLeft())
          }, b = function (e) {
            return Math.floor(e.position().left + u.scrollLeft())
          }, w = function (e) {
            m - e >= 0 ? (s.velocity({ right: y(a) }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }), s.velocity({ left: b(a) }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad",
              delay: 90
            })) : (s.velocity({ left: b(a) }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }), s.velocity({ right: y(a) }, { duration: 300, queue: !1, easing: "easeOutQuad", delay: 90 }))
          };
        t.swipeable && d > t.responsiveThreshold && (t.swipeable = !1), 0 === (a = e(p.filter('[href="' + location.hash + '"]'))).length && (a = e(this).find("li.tab a.active").first()), 0 === a.length && (a = e(this).find("li.tab a").first()), a.addClass("active"), (m = p.index(a)) < 0 && (m = 0), void 0 !== a[0] && (o = e(a[0].hash)).addClass("active"), u.find(".indicator").length || u.append('<li class="indicator"></li>'), s = u.find(".indicator"), u.append(s), u.is(":visible") && setTimeout(function () {
          s.css({ right: y(a) }), s.css({ left: b(a) })
        }, 0), e(window).off("resize.tabs-" + c).on("resize.tabs-" + c, function () {
          f = u.width(), v = Math.max(f, u[0].scrollWidth) / p.length, m < 0 && (m = 0), 0 !== v && 0 !== f && (s.css({ right: y(a) }), s.css({ left: b(a) }))
        }), t.swipeable ? (p.each(function () {
          var t = e(Materialize.escapeHash(this.hash));
          t.addClass("carousel-item"), h = h.add(t)
        }), r = h.wrapAll('<div class="tabs-content carousel"></div>'), h.css("display", ""), e(".tabs-content.carousel").carousel({
          fullWidth: !0,
          noWrap: !0,
          onCycleTo: function (e) {
            if (!g) {
              var n = m;
              m = r.index(e), a = p.eq(m), w(n), "function" == typeof t.onShow && t.onShow.call(u[0], o)
            }
          }
        })) : p.not(a).each(function () {
          e(Materialize.escapeHash(this.hash)).hide()
        }), u.off("click.tabs").on("click.tabs", "a", function (n) {
          if (e(this).parent().hasClass("disabled")) n.preventDefault(); else if (!e(this).attr("target")) {
            g = !0, f = u.width(), v = Math.max(f, u[0].scrollWidth) / p.length, a.removeClass("active");
            var i = o;
            a = e(this), o = e(Materialize.escapeHash(this.hash)), p = u.find("li.tab a");
            a.position();
            a.addClass("active"), prev_index = m, (m = p.index(e(this))) < 0 && (m = 0), t.swipeable ? h.length && h.carousel("set", m, function () {
                "function" == typeof t.onShow && t.onShow.call(u[0], o)
              }) : (void 0 !== o && (o.show(), o.addClass("active"), "function" == typeof t.onShow && t.onShow.call(this, o)), void 0 === i || i.is(o) || (i.hide(), i.removeClass("active"))), l = setTimeout(function () {
              g = !1
            }, 300), w(prev_index), n.preventDefault()
          }
        })
      })
    }, select_tab: function (e) {
      this.find('a[href="#' + e + '"]').trigger("click")
    }
  };
  e.fn.tabs = function (n) {
    return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.tabs") : t.init.apply(this, arguments)
  }, e(document).ready(function () {
    e("ul.tabs").tabs()
  })
}(I), function (e) {
  e.fn.tooltip = function (n) {
    var i = { delay: 350, tooltip: "", position: "bottom", html: !1 };
    return "remove" === n ? (this.each(function () {
      e("#" + e(this).attr("data-tooltip-id")).remove(), e(this).off("mouseenter.tooltip mouseleave.tooltip")
    }), !1) : (n = e.extend(i, n), this.each(function () {
      var i = Materialize.guid(), a = e(this);
      a.attr("data-tooltip-id") && e("#" + a.attr("data-tooltip-id")).remove(), a.attr("data-tooltip-id", i);
      var o, r, s, l, c, u, d = function () {
        o = a.attr("data-html") ? "true" === a.attr("data-html") : n.html, r = a.attr("data-delay"), r = void 0 === r || "" === r ? n.delay : r, s = a.attr("data-position"), s = void 0 === s || "" === s ? n.position : s, l = a.attr("data-tooltip"), l = void 0 === l || "" === l ? n.tooltip : l
      };
      d();
      c = function () {
        var t = e('<div class="material-tooltip"></div>');
        return l = o ? e("<span></span>").html(l) : e("<span></span>").text(l), t.append(l).appendTo(e("body")).attr("id", i), (u = e('<div class="backdrop"></div>')).appendTo(t), t
      }(), a.off("mouseenter.tooltip mouseleave.tooltip");
      var p, f = !1;
      a.on({
        "mouseenter.tooltip": function (e) {
          var n = function () {
            d(), f = !0, c.velocity("stop"), u.velocity("stop"), c.css({
              visibility: "visible",
              left: "0px",
              top: "0px"
            });
            var e, n, i, o = a.outerWidth(), r = a.outerHeight(), l = c.outerHeight(), p = c.outerWidth(), h = "0px",
              v = "0px", m = u[0].offsetWidth, g = u[0].offsetHeight, y = 8, b = 8, w = 0;
            "top" === s ? (e = a.offset().top - l - 5, n = a.offset().left + o / 2 - p / 2, i = t(n, e, p, l), h = "-10px", u.css({
              bottom: 0,
              left: 0,
              borderRadius: "14px 14px 0 0",
              transformOrigin: "50% 100%",
              marginTop: l,
              marginLeft: p / 2 - m / 2
            })) : "left" === s ? (e = a.offset().top + r / 2 - l / 2, n = a.offset().left - p - 5, i = t(n, e, p, l), v = "-10px", u.css({
              top: "-7px",
              right: 0,
              width: "14px",
              height: "14px",
              borderRadius: "14px 0 0 14px",
              transformOrigin: "95% 50%",
              marginTop: l / 2,
              marginLeft: p
            })) : "right" === s ? (e = a.offset().top + r / 2 - l / 2, n = a.offset().left + o + 5, i = t(n, e, p, l), v = "+10px", u.css({
              top: "-7px",
              left: 0,
              width: "14px",
              height: "14px",
              borderRadius: "0 14px 14px 0",
              transformOrigin: "5% 50%",
              marginTop: l / 2,
              marginLeft: "0px"
            })) : (e = a.offset().top + a.outerHeight() + 5, n = a.offset().left + o / 2 - p / 2, i = t(n, e, p, l), h = "+10px", u.css({
              top: 0,
              left: 0,
              marginLeft: p / 2 - m / 2
            })), c.css({
              top: i.y,
              left: i.x
            }), y = Math.SQRT2 * p / parseInt(m), b = Math.SQRT2 * l / parseInt(g), w = Math.max(y, b), c.velocity({
              translateY: h,
              translateX: v
            }, { duration: 350, queue: !1 }).velocity({ opacity: 1 }, {
              duration: 300,
              delay: 50,
              queue: !1
            }), u.css({ visibility: "visible" }).velocity({ opacity: 1 }, {
              duration: 55,
              delay: 0,
              queue: !1
            }).velocity({ scaleX: w, scaleY: w }, { duration: 300, delay: 0, queue: !1, easing: "easeInOutQuad" })
          };
          p = setTimeout(n, r)
        }, "mouseleave.tooltip": function () {
          f = !1, clearTimeout(p), setTimeout(function () {
            !0 !== f && (c.velocity({ opacity: 0, translateY: 0, translateX: 0 }, {
              duration: 225,
              queue: !1
            }), u.velocity({ opacity: 0, scaleX: 1, scaleY: 1 }, {
              duration: 225, queue: !1, complete: function () {
                u.css({ visibility: "hidden" }), c.css({ visibility: "hidden" }), f = !1, c.attr("style", "")
              }
            }))
          }, 225)
        }
      })
    }))
  };
  var t = function (t, n, i, a) {
    var o = t, r = n;
    return o < 0 ? o = 4 : o + i > window.innerWidth && (o -= o + i - window.innerWidth), r < 0 ? r = 4 : r + a > window.innerHeight + e(window).scrollTop && (r -= r + a - window.innerHeight), {
      x: o,
      y: r
    }
  };
  e(document).ready(function () {
    e(".tooltipped").tooltip()
  })
}(I), function (e) {
  "use strict";
  function t(e) {
    return null !== e && e === e.window
  }

  function n(e) {
    return t(e) ? e : 9 === e.nodeType && e.defaultView
  }

  function i(e) {
    var t, i, a = { top: 0, left: 0 }, o = e && e.ownerDocument;
    return t = o.documentElement, void 0 !== e.getBoundingClientRect && (a = e.getBoundingClientRect()), i = n(o), {
      top: a.top + i.pageYOffset - t.clientTop,
      left: a.left + i.pageXOffset - t.clientLeft
    }
  }

  function a(e) {
    var t = "";
    for (var n in e)e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
    return t
  }

  function o(e) {
    if (!1 === u.allowEvent(e))return null;
    for (var t = null, n = e.target || e.srcElement; null !== n.parentElement;) {
      if (!(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))) {
        t = n;
        break
      }
      if (n instanceof SVGElement); else if (-1 !== n.className.indexOf("waves-effect")) {
        t = n;
        break
      }
      n = n.parentElement
    }
    return t
  }

  function r(t) {
    var n = o(t);
    null !== n && (c.show(t, n), "ontouchstart" in e && (n.addEventListener("touchend", c.hide, !1), n.addEventListener("touchcancel", c.hide, !1)), n.addEventListener("mouseup", c.hide, !1), n.addEventListener("mouseleave", c.hide, !1))
  }

  var s = s || {}, l = document.querySelectorAll.bind(document), c = {
    duration: 750, show: function (e, t) {
      if (2 === e.button)return !1;
      var n = t || this, o = document.createElement("div");
      o.className = "waves-ripple", n.appendChild(o);
      var r = i(n), s = e.pageY - r.top, l = e.pageX - r.left, u = "scale(" + n.clientWidth / 100 * 10 + ")";
      "touches" in e && (s = e.touches[0].pageY - r.top, l = e.touches[0].pageX - r.left), o.setAttribute("data-hold", Date.now()), o.setAttribute("data-scale", u), o.setAttribute("data-x", l), o.setAttribute("data-y", s);
      var d = { top: s + "px", left: l + "px" };
      o.className = o.className + " waves-notransition", o.setAttribute("style", a(d)), o.className = o.className.replace("waves-notransition", ""), d["-webkit-transform"] = u, d["-moz-transform"] = u, d["-ms-transform"] = u, d["-o-transform"] = u, d.transform = u, d.opacity = "1", d["-webkit-transition-duration"] = c.duration + "ms", d["-moz-transition-duration"] = c.duration + "ms", d["-o-transition-duration"] = c.duration + "ms", d["transition-duration"] = c.duration + "ms", d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", o.setAttribute("style", a(d))
    }, hide: function (e) {
      u.touchup(e);
      var t = this, n = (t.clientWidth, null), i = t.getElementsByClassName("waves-ripple");
      if (!(i.length > 0))return !1;
      var o = (n = i[i.length - 1]).getAttribute("data-x"), r = n.getAttribute("data-y"),
        s = n.getAttribute("data-scale"), l = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
      l < 0 && (l = 0), setTimeout(function () {
        var e = {
          top: r + "px",
          left: o + "px",
          opacity: "0",
          "-webkit-transition-duration": c.duration + "ms",
          "-moz-transition-duration": c.duration + "ms",
          "-o-transition-duration": c.duration + "ms",
          "transition-duration": c.duration + "ms",
          "-webkit-transform": s,
          "-moz-transform": s,
          "-ms-transform": s,
          "-o-transform": s,
          transform: s
        };
        n.setAttribute("style", a(e)), setTimeout(function () {
          try {
            t.removeChild(n)
          } catch (e) {
            return !1
          }
        }, c.duration)
      }, l)
    }, wrapInput: function (e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if ("input" === n.tagName.toLowerCase()) {
          var i = n.parentNode;
          if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect"))continue;
          var a = document.createElement("i");
          a.className = n.className + " waves-input-wrapper";
          var o = n.getAttribute("style");
          o || (o = ""), a.setAttribute("style", o), n.className = "waves-button-input", n.removeAttribute("style"), i.replaceChild(a, n), a.appendChild(n)
        }
      }
    }
  }, u = {
    touches: 0, allowEvent: function (e) {
      var t = !0;
      return "touchstart" === e.type ? u.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function () {
        u.touches > 0 && (u.touches -= 1)
      }, 500) : "mousedown" === e.type && u.touches > 0 && (t = !1), t
    }, touchup: function (e) {
      u.allowEvent(e)
    }
  };
  s.displayEffect = function (t) {
    "duration" in (t = t || {}) && (c.duration = t.duration), c.wrapInput(l(".waves-effect")), "ontouchstart" in e && document.body.addEventListener("touchstart", r, !1), document.body.addEventListener("mousedown", r, !1)
  }, s.attach = function (t) {
    "input" === t.tagName.toLowerCase() && (c.wrapInput([t]), t = t.parentElement), "ontouchstart" in e && t.addEventListener("touchstart", r, !1), t.addEventListener("mousedown", r, !1)
  }, e.Waves = s, document.addEventListener("DOMContentLoaded", function () {
    s.displayEffect()
  }, !1)
}(window), Materialize.toast = function (e, t, n, i) {
  n = n || "";
  var a = document.getElementById("toast-container");
  null === a && ((a = document.createElement("div")).id = "toast-container", document.body.appendChild(a));
  var o = function (e) {
    var t = document.createElement("div");
    if (t.classList.add("toast"), n)for (var a = n.split(" "), o = 0, r = a.length; o < r; o++)t.classList.add(a[o]);
    ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) ? t.appendChild(e) : e instanceof I ? t.appendChild(e[0]) : t.innerHTML = e;
    var s = new Hammer(t, { prevent_default: !1 });
    return s.on("pan", function (e) {
      var n = e.deltaX;
      t.classList.contains("panning") || t.classList.add("panning");
      var i = 1 - Math.abs(n / 80);
      i < 0 && (i = 0), q(t, { left: n, opacity: i }, { duration: 50, queue: !1, easing: "easeOutQuad" })
    }), s.on("panend", function (e) {
      var n = e.deltaX;
      Math.abs(n) > 80 ? q(t, { marginTop: "-40px" }, {
        duration: 375,
        easing: "easeOutExpo",
        queue: !1,
        complete: function () {
          "function" == typeof i && i(), t.parentNode.removeChild(t)
        }
      }) : (t.classList.remove("panning"), q(t, { left: 0, opacity: 1 }, {
        duration: 300,
        easing: "easeOutExpo",
        queue: !1
      }))
    }), t
  }(e);
  e && a.appendChild(o), o.style.opacity = 0, q(o, { translateY: "-35px", opacity: 1 }, {
    duration: 300,
    easing: "easeOutCubic",
    queue: !1
  });
  var r, s = t;
  null != s && (r = setInterval(function () {
    null === o.parentNode && window.clearInterval(r), o.classList.contains("panning") || (s -= 20), s <= 0 && (q(o, {
      opacity: 0,
      marginTop: "-40px"
    }, {
      duration: 375, easing: "easeOutExpo", queue: !1, complete: function () {
        "function" == typeof i && i(), this[0].parentNode.removeChild(this[0])
      }
    }), window.clearInterval(r))
  }, 20))
}, function (e) {
  var t = {
    init: function (t) {
      var n = { menuWidth: 300, edge: "left", closeOnClick: !1, draggable: !0, onOpen: null, onClose: null };
      t = e.extend(n, t), e(this).each(function () {
        var n = e(this), i = n.attr("data-activates"), a = e("#" + i);
        300 != t.menuWidth && a.css("width", t.menuWidth);
        var o = e('.drag-target[data-sidenav="' + i + '"]');
        t.draggable ? (o.length && o.remove(), o = e('<div class="drag-target"></div>').attr("data-sidenav", i), e("body").append(o)) : o = e(), "left" == t.edge ? (a.css("transform", "translateX(-100%)"), o.css({ left: 0 })) : (a.addClass("right-aligned").css("transform", "translateX(100%)"), o.css({ right: 0 })), a.hasClass("fixed") && window.innerWidth > 992 && a.css("transform", "translateX(0)"), a.hasClass("fixed") && e(window).resize(function () {
          window.innerWidth > 992 ? 0 !== e("#sidenav-overlay").length && l ? r(!0) : a.css("transform", "translateX(0%)") : !1 === l && ("left" === t.edge ? a.css("transform", "translateX(-100%)") : a.css("transform", "translateX(100%)"))
        }), !0 === t.closeOnClick && a.on("click.itemclick", "a:not(.collapsible-header)", function () {
          window.innerWidth > 992 && a.hasClass("fixed") || r()
        });
        var r = function (n) {
          s = !1, l = !1, e("body").css({
            overflow: "",
            width: ""
          }), e("#sidenav-overlay").velocity({ opacity: 0 }, {
            duration: 200,
            queue: !1,
            easing: "easeOutQuad",
            complete: function () {
              e(this).remove()
            }
          }), "left" === t.edge ? (o.css({
            width: "",
            right: "",
            left: "0"
          }), a.velocity({ translateX: "-100%" }, {
            duration: 200,
            queue: !1,
            easing: "easeOutCubic",
            complete: function () {
              !0 === n && (a.removeAttr("style"), a.css("width", t.menuWidth))
            }
          })) : (o.css({ width: "", right: "0", left: "" }), a.velocity({ translateX: "100%" }, {
            duration: 200,
            queue: !1,
            easing: "easeOutCubic",
            complete: function () {
              !0 === n && (a.removeAttr("style"), a.css("width", t.menuWidth))
            }
          })), "function" == typeof t.onClose && t.onClose.call(this, a)
        }, s = !1, l = !1;
        t.draggable && (o.on("click", function () {
          l && r()
        }), o.hammer({ prevent_default: !1 }).on("pan", function (n) {
          if ("touch" == n.gesture.pointerType) {
            n.gesture.direction;
            var i = n.gesture.center.x, o = n.gesture.center.y;
            n.gesture.velocityX;
            if (0 === i && 0 === o)return;
            var s = e("body"), c = e("#sidenav-overlay"), u = s.innerWidth();
            if (s.css("overflow", "hidden"), s.width(u), 0 === c.length && ((c = e('<div id="sidenav-overlay"></div>')).css("opacity", 0).click(function () {
                r()
              }), "function" == typeof t.onOpen && t.onOpen.call(this, a), e("body").append(c)), "left" === t.edge && (i > t.menuWidth ? i = t.menuWidth : i < 0 && (i = 0)), "left" === t.edge) i < t.menuWidth / 2 ? l = !1 : i >= t.menuWidth / 2 && (l = !0), a.css("transform", "translateX(" + (i - t.menuWidth) + "px)"); else {
              i < window.innerWidth - t.menuWidth / 2 ? l = !0 : i >= window.innerWidth - t.menuWidth / 2 && (l = !1);
              var d = i - t.menuWidth / 2;
              d < 0 && (d = 0), a.css("transform", "translateX(" + d + "px)")
            }
            var p;
            "left" === t.edge ? (p = i / t.menuWidth, c.velocity({ opacity: p }, {
              duration: 10,
              queue: !1,
              easing: "easeOutQuad"
            })) : (p = Math.abs((i - window.innerWidth) / t.menuWidth), c.velocity({ opacity: p }, {
              duration: 10,
              queue: !1,
              easing: "easeOutQuad"
            }))
          }
        }).on("panend", function (n) {
          if ("touch" == n.gesture.pointerType) {
            var i = e("#sidenav-overlay"), r = n.gesture.velocityX, c = n.gesture.center.x, u = c - t.menuWidth,
              d = c - t.menuWidth / 2;
            u > 0 && (u = 0), d < 0 && (d = 0), s = !1, "left" === t.edge ? l && r <= .3 || r < -.5 ? (0 !== u && a.velocity({ translateX: [0, u] }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }), i.velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), o.css({
              width: "50%",
              right: 0,
              left: ""
            }), l = !0) : (!l || r > .3) && (e("body").css({
                overflow: "",
                width: ""
              }), a.velocity({ translateX: [-1 * t.menuWidth - 10, u] }, {
                duration: 200,
                queue: !1,
                easing: "easeOutQuad"
              }), i.velocity({ opacity: 0 }, {
                duration: 200, queue: !1, easing: "easeOutQuad", complete: function () {
                  "function" == typeof t.onClose && t.onClose.call(this, a), e(this).remove()
                }
              }), o.css({
                width: "10px",
                right: "",
                left: 0
              })) : l && r >= -.3 || r > .5 ? (0 !== d && a.velocity({ translateX: [0, d] }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }), i.velocity({ opacity: 1 }, { duration: 50, queue: !1, easing: "easeOutQuad" }), o.css({
              width: "50%",
              right: "",
              left: 0
            }), l = !0) : (!l || r < -.3) && (e("body").css({
                overflow: "",
                width: ""
              }), a.velocity({ translateX: [t.menuWidth + 10, d] }, {
                duration: 200,
                queue: !1,
                easing: "easeOutQuad"
              }), i.velocity({ opacity: 0 }, {
                duration: 200, queue: !1, easing: "easeOutQuad", complete: function () {
                  e(this).remove()
                }
              }), o.css({ width: "10px", right: 0, left: "" }))
          }
        })), n.off("click.sidenav").on("click.sidenav", function () {
          if (!0 === l) l = !1, s = !1, r(); else {
            var n = e("body"), i = e('<div id="sidenav-overlay"></div>'), c = n.innerWidth();
            n.css("overflow", "hidden"), n.width(c), e("body").append(o), "left" === t.edge ? (o.css({
              width: "50%",
              right: 0,
              left: ""
            }), a.velocity({ translateX: [0, -1 * t.menuWidth] }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            })) : (o.css({
              width: "50%",
              right: "",
              left: 0
            }), a.velocity({ translateX: [0, t.menuWidth] }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            })), i.css("opacity", 0).click(function () {
              l = !1, s = !1, r(), i.velocity({ opacity: 0 }, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad",
                complete: function () {
                  e(this).remove()
                }
              })
            }), e("body").append(i), i.velocity({ opacity: 1 }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad",
              complete: function () {
                l = !0, s = !1
              }
            }), "function" == typeof t.onOpen && t.onOpen.call(this, a)
          }
          return !1
        })
      })
    }, destroy: function () {
      var t = e("#sidenav-overlay"), n = e('.drag-target[data-sidenav="' + e(this).attr("data-activates") + '"]');
      t.trigger("click"), n.remove(), e(this).off("click"), t.remove()
    }, show: function () {
      this.trigger("click")
    }, hide: function () {
      e("#sidenav-overlay").trigger("click")
    }
  };
  e.fn.sideNav = function (n) {
    return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments)
  }
}(I), function (e) {
  function t(t, n, i, a) {
    var r = e();
    return e.each(o, function (e, o) {
      if (o.height() > 0) {
        var s = o.offset().top, l = o.offset().left, c = l + o.width(), u = s + o.height();
        !(l > n || c < a || s > i || u < t) && r.push(o)
      }
    }), r
  }

  function n(n) {
    ++l;
    var i = a.scrollTop(), o = a.scrollLeft(), s = o + a.width(), u = i + a.height(),
      d = t(i + c.top + n || 200, s + c.right, u + c.bottom, o + c.left);
    e.each(d, function (e, t) {
      "number" != typeof t.data("scrollSpy:ticks") && t.triggerHandler("scrollSpy:enter"), t.data("scrollSpy:ticks", l)
    }), e.each(r, function (e, t) {
      var n = t.data("scrollSpy:ticks");
      "number" == typeof n && n !== l && (t.triggerHandler("scrollSpy:exit"), t.data("scrollSpy:ticks", null))
    }), r = d
  }

  function i() {
    a.trigger("scrollSpy:winSize")
  }

  var a = e(window), o = [], r = [], s = !1, l = 0, c = { top: 0, right: 0, bottom: 0, left: 0 };
  e.scrollSpy = function (t, i) {
    var r = {
      throttle: 100, scrollOffset: 200, activeClass: "active", getActiveElement: function (e) {
        return 'a[href="#' + e + '"]'
      }
    };
    i = e.extend(r, i);
    var l = [];
    (t = e(t)).each(function (t, n) {
      o.push(e(n)), e(n).data("scrollSpy:id", t), e('a[href="#' + e(n).attr("id") + '"]').click(function (t) {
        t.preventDefault();
        var n = e(Materialize.escapeHash(this.hash)).offset().top + 1;
        e("html, body").animate({ scrollTop: n - i.scrollOffset }, { duration: 400, queue: !1, easing: "easeOutCubic" })
      })
    }), c.top = i.offsetTop || 0, c.right = i.offsetRight || 0, c.bottom = i.offsetBottom || 0, c.left = i.offsetLeft || 0;
    var u = Materialize.throttle(function () {
      n(i.scrollOffset)
    }, i.throttle || 100), d = function () {
      e(document).ready(u)
    };
    return s || (a.on("scroll", d), a.on("resize", d), s = !0), setTimeout(d, 0), t.on("scrollSpy:enter", function () {
      l = e.grep(l, function (e) {
        return 0 != e.height()
      });
      var t = e(this);
      l[0] ? (e(i.getActiveElement(l[0].attr("id"))).removeClass(i.activeClass), t.data("scrollSpy:id") < l[0].data("scrollSpy:id") ? l.unshift(e(this)) : l.push(e(this))) : l.push(e(this)), e(i.getActiveElement(l[0].attr("id"))).addClass(i.activeClass)
    }), t.on("scrollSpy:exit", function () {
      if ((l = e.grep(l, function (e) {
          return 0 != e.height()
        }))[0]) {
        e(i.getActiveElement(l[0].attr("id"))).removeClass(i.activeClass);
        var t = e(this);
        (l = e.grep(l, function (e) {
          return e.attr("id") != t.attr("id")
        }))[0] && e(i.getActiveElement(l[0].attr("id"))).addClass(i.activeClass)
      }
    }), t
  }, e.winSizeSpy = function (t) {
    return e.winSizeSpy = function () {
      return a
    }, t = t || { throttle: 100 }, a.on("resize", Materialize.throttle(i, t.throttle || 100))
  }, e.fn.scrollSpy = function (t) {
    return e.scrollSpy(e(this), t)
  }
}(I), function (e) {
  e(document).ready(function () {
    function t(t) {
      var n = t.css("font-family"), a = t.css("font-size"), o = t.css("line-height");
      a && i.css("font-size", a), n && i.css("font-family", n), o && i.css("line-height", o), t.data("original-height") || t.data("original-height", t.height()), "off" === t.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(t.val() + "\n");
      var r = i.html().replace(/\n/g, "<br>");
      i.html(r), t.is(":visible") ? i.css("width", t.width()) : i.css("width", e(window).width() / 2), t.data("original-height") <= i.height() ? t.css("height", i.height()) : t.val().length < t.data("previous-length") && t.css("height", t.data("original-height")), t.data("previous-length", t.val().length)
    }

    Materialize.updateTextFields = function () {
      e("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function (t, n) {
        var i = e(this);
        e(n).val().length > 0 || e(n).is(":focus") || n.autofocus || void 0 !== i.attr("placeholder") ? i.siblings("label").addClass("active") : e(n)[0].validity ? i.siblings("label").toggleClass("active", !0 === e(n)[0].validity.badInput) : i.siblings("label").removeClass("active")
      })
    };
    var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
    e(document).on("change", n, function () {
      0 === e(this).val().length && void 0 === e(this).attr("placeholder") || e(this).siblings("label").addClass("active"), validate_field(e(this))
    }), e(document).ready(function () {
      Materialize.updateTextFields()
    }), e(document).on("reset", function (t) {
      var i = e(t.target);
      i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid"), i.find(n).each(function () {
        "" === e(this).attr("value") && e(this).siblings("label").removeClass("active")
      }), i.find("select.initialized").each(function () {
        var e = i.find("option[selected]").text();
        i.siblings("input.select-dropdown").val(e)
      }))
    }), e(document).on("focus", n, function () {
      e(this).siblings("label, .prefix").addClass("active")
    }), e(document).on("blur", n, function () {
      var t = e(this), n = ".prefix";
      0 === t.val().length && !0 !== t[0].validity.badInput && void 0 === t.attr("placeholder") && (n += ", label"), t.siblings(n).removeClass("active"), validate_field(t)
    }), window.validate_field = function (e) {
      var t = void 0 !== e.attr("data-length"), n = parseInt(e.attr("data-length")), i = e.val().length;
      0 === e.val().length && !1 === e[0].validity.badInput ? e.hasClass("validate") && (e.removeClass("valid"), e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && i <= n || e.is(":valid") && !t ? (e.removeClass("invalid"), e.addClass("valid")) : (e.removeClass("valid"), e.addClass("invalid")))
    };
    e(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", function (t) {
      if (9 === t.which)return e(this).addClass("tabbed"), void e(this).one("blur", function (t) {
        e(this).removeClass("tabbed")
      })
    });
    var i = e(".hiddendiv").first();
    i.length || (i = e('<div class="hiddendiv common"></div>'), e("body").append(i));
    e(".materialize-textarea").each(function () {
      var t = e(this);
      t.data("original-height", t.height()), t.data("previous-length", t.val().length)
    }), e("body").on("keyup keydown autoresize", ".materialize-textarea", function () {
      t(e(this))
    }), e(document).on("change", '.file-field input[type="file"]', function () {
      for (var t = e(this).closest(".file-field").find("input.file-path"), n = e(this)[0].files, i = [], a = 0; a < n.length; a++)i.push(n[a].name);
      t.val(i.join(", ")), t.trigger("change")
    });
    var a = "input[type=range]", o = !1;
    e(a).each(function () {
      var t = e('<span class="thumb"><span class="value"></span></span>');
      e(this).after(t)
    });
    var r = function (e) {
      var t = -7 + parseInt(e.parent().css("padding-left")) + "px";
      e.velocity({ height: "30px", width: "30px", top: "-30px", marginLeft: t }, {
        duration: 300,
        easing: "easeOutExpo"
      })
    }, s = function (e) {
      var t = e.width() - 15, n = parseFloat(e.attr("max")), i = parseFloat(e.attr("min"));
      return (parseFloat(e.val()) - i) / (n - i) * t
    };
    e(document).on("change", a, function (t) {
      var n = e(this).siblings(".thumb");
      n.find(".value").html(e(this).val()), n.hasClass("active") || r(n);
      var i = s(e(this));
      n.addClass("active").css("left", i)
    }), e(document).on("mousedown touchstart", a, function (t) {
      var n = e(this).siblings(".thumb");
      if (n.length <= 0 && (n = e('<span class="thumb"><span class="value"></span></span>'), e(this).after(n)), n.find(".value").html(e(this).val()), o = !0, e(this).addClass("active"), n.hasClass("active") || r(n), "input" !== t.type) {
        var i = s(e(this));
        n.addClass("active").css("left", i)
      }
    }), e(document).on("mouseup touchend", ".range-field", function () {
      o = !1, e(this).removeClass("active")
    }), e(document).on("input mousemove touchmove", ".range-field", function (t) {
      var n = e(this).children(".thumb"), i = e(this).find(a);
      if (o) {
        n.hasClass("active") || r(n);
        var l = s(i);
        n.addClass("active").css("left", l), n.find(".value").html(n.siblings(a).val())
      }
    }), e(document).on("mouseout touchleave", ".range-field", function () {
      if (!o) {
        var t = e(this).children(".thumb"), n = 7 + parseInt(e(this).css("padding-left")) + "px";
        t.hasClass("active") && t.velocity({
          height: "0",
          width: "0",
          top: "10px",
          marginLeft: n
        }, { duration: 100 }), t.removeClass("active")
      }
    }), e.fn.autocomplete = function (t) {
      var n = { data: {}, limit: 1 / 0, onAutocomplete: null, minLength: 1 };
      return t = e.extend(n, t), this.each(function () {
        var n, i = e(this), a = t.data, o = 0, r = -1, s = i.closest(".input-field");
        if (!e.isEmptyObject(a)) {
          var l, c = e('<ul class="autocomplete-content dropdown-content"></ul>');
          s.length ? (l = s.children(".autocomplete-content.dropdown-content").first()).length || s.append(c) : (l = i.next(".autocomplete-content.dropdown-content")).length || i.after(c), l.length && (c = l);
          var u = function (e, t) {
            var n = t.find("img"), i = t.text().toLowerCase().indexOf("" + e.toLowerCase()), a = i + e.length - 1,
              o = t.text().slice(0, i), r = t.text().slice(i, a + 1), s = t.text().slice(a + 1);
            t.html("<span>" + o + "<span class='highlight'>" + r + "</span>" + s + "</span>"), n.length && t.prepend(n)
          }, d = function () {
            r = -1, c.find(".active").removeClass("active")
          }, p = function () {
            c.empty(), d(), n = void 0
          };
          i.off("blur.autocomplete").on("blur.autocomplete", function () {
            p()
          }), i.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function (r) {
            o = 0;
            var s = i.val().toLowerCase();
            if (13 !== r.which && 38 !== r.which && 40 !== r.which) {
              if (n !== s && (p(), s.length >= t.minLength))for (var l in a)if (a.hasOwnProperty(l) && -1 !== l.toLowerCase().indexOf(s) && l.toLowerCase() !== s) {
                if (o >= t.limit)break;
                var d = e("<li></li>");
                a[l] ? d.append('<img src="' + a[l] + '" class="right circle"><span>' + l + "</span>") : d.append("<span>" + l + "</span>"), c.append(d), u(s, d), o++
              }
              n = s
            }
          }), i.off("keydown.autocomplete").on("keydown.autocomplete", function (e) {
            var t, n = e.which, i = c.children("li").length, a = c.children(".active").first();
            13 === n && r >= 0 ? (t = c.children("li").eq(r)).length && (t.trigger("mousedown.autocomplete"), e.preventDefault()) : 38 !== n && 40 !== n || (e.preventDefault(), 38 === n && r > 0 && r--, 40 === n && r < i - 1 && r++, a.removeClass("active"), r >= 0 && c.children("li").eq(r).addClass("active"))
          }), c.on("mousedown.autocomplete touchstart.autocomplete", "li", function () {
            var n = e(this).text().trim();
            i.val(n), i.trigger("change"), p(), "function" == typeof t.onAutocomplete && t.onAutocomplete.call(this, n)
          })
        }
      })
    }
  }), e.fn.material_select = function (t) {
    function n(e, t, n) {
      var a = e.indexOf(t), o = -1 === a;
      return o ? e.push(t) : e.splice(a, 1), n.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(t).toggleClass("active"), n.find("option").eq(t).prop("selected", o), i(e, n), o
    }

    function i(e, t) {
      for (var n = "", i = 0, a = e.length; i < a; i++) {
        var o = t.find("option").eq(e[i]).text();
        n += 0 === i ? o : ", " + o
      }
      "" === n && (n = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(n)
    }

    e(this).each(function () {
      var i = e(this);
      if (!i.hasClass("browser-default")) {
        var a = !!i.attr("multiple"), o = i.data("select-id");
        if (o && (i.parent().find("span.caret").remove(), i.parent().find("input").remove(), i.unwrap(), e("ul#select-options-" + o).remove()), "destroy" !== t) {
          var r = Materialize.guid();
          i.data("select-id", r);
          var s = e('<div class="select-wrapper"></div>');
          s.addClass(i.attr("class"));
          var l = e('<ul id="select-options-' + r + '" class="dropdown-content select-dropdown ' + (a ? "multiple-select-dropdown" : "") + '"></ul>'),
            c = i.children("option, optgroup"), u = [], d = !1,
            p = i.find("option:selected").html() || i.find("option:first").html() || "", f = function (t, n, i) {
              var o = n.is(":disabled") ? "disabled " : "", r = "optgroup-option" === i ? "optgroup-option " : "",
                s = a ? '<input type="checkbox"' + o + "/><label></label>" : "", c = n.data("icon"), u = n.attr("class");
              if (c) {
                var d = "";
                return u && (d = ' class="' + u + '"'), l.append(e('<li class="' + o + r + '"><img alt="" src="' + c + '"' + d + "><span>" + s + n.html() + "</span></li>")), !0
              }
              l.append(e('<li class="' + o + r + '"><span>' + s + n.html() + "</span></li>"))
            };
          c.length && c.each(function () {
            if (e(this).is("option")) a ? f(0, e(this), "multiple") : f(0, e(this)); else if (e(this).is("optgroup")) {
              var t = e(this).children("option");
              l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each(function () {
                f(0, e(this), "optgroup-option")
              })
            }
          }), l.find("li:not(.optgroup)").each(function (o) {
            e(this).click(function (r) {
              if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                var s = !0;
                a ? (e('input[type="checkbox"]', this).prop("checked", function (e, t) {
                  return !t
                }), s = n(u, o, i), m.trigger("focus")) : (l.find("li").removeClass("active"), e(this).toggleClass("active"), m.val(e(this).text())), g(l, e(this)), i.find("option").eq(o).prop("selected", s), i.trigger("change"), void 0 !== t && t()
              }
              r.stopPropagation()
            })
          }), i.wrap(s);
          var h = e('<span class="caret">&#9660;</span>');
          i.is(":disabled") && h.addClass("disabled");
          var v = p.replace(/"/g, "&quot;"),
            m = e('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + r + '" value="' + v + '"/>');
          i.before(m), m.before(h), m.after(l), i.is(":disabled") || m.dropdown({ hover: !1 }), i.attr("tabindex") && e(m[0]).attr("tabindex", i.attr("tabindex")), i.addClass("initialized"), m.on({
            focus: function () {
              if (e("ul.select-dropdown").not(l[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                e(this).trigger("open", ["focus"]);
                var t = e(this).val();
                a && t.indexOf(",") >= 0 && (t = t.split(",")[0]);
                var n = l.find("li").filter(function () {
                  return e(this).text().toLowerCase() === t.toLowerCase()
                })[0];
                g(l, n, !0)
              }
            }, click: function (e) {
              e.stopPropagation()
            }
          }), m.on("blur", function () {
            a || e(this).trigger("close"), l.find("li.selected").removeClass("selected")
          }), l.hover(function () {
            d = !0
          }, function () {
            d = !1
          }), e(window).on({
            click: function () {
              a && (d || m.trigger("close"))
            }
          }), a && i.find("option:selected:not(:disabled)").each(function () {
            var t = e(this).index();
            n(u, t, i), l.find("li").eq(t).find(":checkbox").prop("checked", !0)
          });
          var g = function (t, n, i) {
            if (n) {
              t.find("li.selected").removeClass("selected");
              var o = e(n);
              o.addClass("selected"), a && !i || l.scrollTo(o)
            }
          }, y = [], b = function (t) {
            if (9 != t.which)if (40 != t.which || l.is(":visible")) {
              if (13 != t.which || l.is(":visible")) {
                t.preventDefault();
                var n = String.fromCharCode(t.which).toLowerCase(), i = [9, 13, 27, 38, 40];
                if (n && -1 === i.indexOf(t.which)) {
                  y.push(n);
                  var o = y.join(""), r = l.find("li").filter(function () {
                    return 0 === e(this).text().toLowerCase().indexOf(o)
                  })[0];
                  r && g(l, r)
                }
                if (13 == t.which) {
                  var s = l.find("li.selected:not(.disabled)")[0];
                  s && (e(s).trigger("click"), a || m.trigger("close"))
                }
                40 == t.which && (r = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], g(l, r)), 27 == t.which && m.trigger("close"), 38 == t.which && (r = l.find("li.selected").prev("li:not(.disabled)")[0]) && g(l, r), setTimeout(function () {
                  y = []
                }, 1e3)
              }
            } else m.trigger("open"); else m.trigger("close")
          };
          m.on("keydown", b)
        } else i.data("select-id", null).removeClass("initialized")
      }
    })
  }
}(I), function (e) {
  var t = {
    init: function (t) {
      var n = { indicators: !0, height: 400, transition: 500, interval: 6e3 };
      return t = e.extend(n, t), this.each(function () {
        function n(e, t) {
          e.hasClass("center-align") ? e.velocity({ opacity: 0, translateY: -100 }, {
            duration: t,
            queue: !1
          }) : e.hasClass("right-align") ? e.velocity({ opacity: 0, translateX: 100 }, {
            duration: t,
            queue: !1
          }) : e.hasClass("left-align") && e.velocity({ opacity: 0, translateX: -100 }, { duration: t, queue: !1 })
        }

        function i(e) {
          e >= c.length ? e = 0 : e < 0 && (e = c.length - 1), (u = l.find(".active").index()) != e && (a = c.eq(u), $caption = a.find(".caption"), a.removeClass("active"), a.velocity({ opacity: 0 }, {
            duration: t.transition,
            queue: !1,
            easing: "easeOutQuad",
            complete: function () {
              c.not(".active").velocity({ opacity: 0, translateX: 0, translateY: 0 }, { duration: 0, queue: !1 })
            }
          }), n($caption, t.transition), t.indicators && o.eq(u).removeClass("active"), c.eq(e).velocity({ opacity: 1 }, {
            duration: t.transition,
            queue: !1,
            easing: "easeOutQuad"
          }), c.eq(e).find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, {
            duration: t.transition,
            delay: t.transition,
            queue: !1,
            easing: "easeOutQuad"
          }), c.eq(e).addClass("active"), t.indicators && o.eq(e).addClass("active"))
        }

        var a, o, r, s = e(this), l = s.find("ul.slides").first(), c = l.find("> li"), u = l.find(".active").index();
        -1 != u && (a = c.eq(u)), s.hasClass("fullscreen") || (t.indicators ? s.height(t.height + 40) : s.height(t.height), l.height(t.height)), c.find(".caption").each(function () {
          n(e(this), 0)
        }), c.find("img").each(function () {
          var t = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
          e(this).attr("src") !== t && (e(this).css("background-image", 'url("' + e(this).attr("src") + '")'), e(this).attr("src", t))
        }), t.indicators && (o = e('<ul class="indicators"></ul>'), c.each(function (n) {
          var a = e('<li class="indicator-item"></li>');
          a.click(function () {
            i(l.parent().find(e(this)).index()), clearInterval(r), r = setInterval(function () {
              u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, i(u)
            }, t.transition + t.interval)
          }), o.append(a)
        }), s.append(o), o = s.find("ul.indicators").find("li.indicator-item")), a ? a.show() : (c.first().addClass("active").velocity({ opacity: 1 }, {
          duration: t.transition,
          queue: !1,
          easing: "easeOutQuad"
        }), u = 0, a = c.eq(u), t.indicators && o.eq(u).addClass("active")), a.find("img").each(function () {
          a.find(".caption").velocity({ opacity: 1, translateX: 0, translateY: 0 }, {
            duration: t.transition,
            queue: !1,
            easing: "easeOutQuad"
          })
        }), r = setInterval(function () {
          i((u = l.find(".active").index()) + 1)
        }, t.transition + t.interval);
        var d = !1, p = !1, f = !1;
        s.hammer({ prevent_default: !1 }).on("pan", function (e) {
          if ("touch" === e.gesture.pointerType) {
            clearInterval(r);
            var t = e.gesture.direction, n = e.gesture.deltaX, i = e.gesture.velocityX, a = e.gesture.velocityY;
            $curr_slide = l.find(".active"), Math.abs(i) > Math.abs(a) && $curr_slide.velocity({ translateX: n }, {
              duration: 50,
              queue: !1,
              easing: "easeOutQuad"
            }), 4 === t && (n > s.innerWidth() / 2 || i < -.65) ? f = !0 : 2 === t && (n < -1 * s.innerWidth() / 2 || i > .65) && (p = !0);
            var o;
            p && (0 === (o = $curr_slide.next()).length && (o = c.first()), o.velocity({ opacity: 1 }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            })), f && (0 === (o = $curr_slide.prev()).length && (o = c.last()), o.velocity({ opacity: 1 }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad"
            }))
          }
        }).on("panend", function (e) {
          "touch" === e.gesture.pointerType && ($curr_slide = l.find(".active"), d = !1, curr_index = l.find(".active").index(), !f && !p || c.length <= 1 ? $curr_slide.velocity({ translateX: 0 }, {
            duration: 300,
            queue: !1,
            easing: "easeOutQuad"
          }) : p ? (i(curr_index + 1), $curr_slide.velocity({ translateX: -1 * s.innerWidth() }, {
            duration: 300,
            queue: !1,
            easing: "easeOutQuad",
            complete: function () {
              $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 })
            }
          })) : f && (i(curr_index - 1), $curr_slide.velocity({ translateX: s.innerWidth() }, {
              duration: 300,
              queue: !1,
              easing: "easeOutQuad",
              complete: function () {
                $curr_slide.velocity({ opacity: 0, translateX: 0 }, { duration: 0, queue: !1 })
              }
            })), p = !1, f = !1, clearInterval(r), r = setInterval(function () {
            u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, i(u)
          }, t.transition + t.interval))
        }), s.on("sliderPause", function () {
          clearInterval(r)
        }), s.on("sliderStart", function () {
          clearInterval(r), r = setInterval(function () {
            u = l.find(".active").index(), c.length == u + 1 ? u = 0 : u += 1, i(u)
          }, t.transition + t.interval)
        }), s.on("sliderNext", function () {
          i((u = l.find(".active").index()) + 1)
        }), s.on("sliderPrev", function () {
          i((u = l.find(".active").index()) - 1)
        })
      })
    }, pause: function () {
      e(this).trigger("sliderPause")
    }, start: function () {
      e(this).trigger("sliderStart")
    }, next: function () {
      e(this).trigger("sliderNext")
    }, prev: function () {
      e(this).trigger("sliderPrev")
    }
  };
  e.fn.slider = function (n) {
    return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
  }
}(I), function (e) {
  e(document).ready(function () {
    e(document).on("click.card", ".card", function (t) {
      if (e(this).find("> .card-reveal").length) {
        var n = e(t.target).closest(".card");
        void 0 === n.data("initialOverflow") && n.data("initialOverflow", void 0 === n.css("overflow") ? "" : n.css("overflow")), e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({ translateY: 0 }, {
          duration: 225,
          queue: !1,
          easing: "easeInOutQuad",
          complete: function () {
            e(this).css({ display: "none" }), n.css("overflow", n.data("initialOverflow"))
          }
        }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && (n.css("overflow", "hidden"), e(this).find(".card-reveal").css({ display: "block" }).velocity("stop", !1).velocity({ translateY: "-100%" }, {
            duration: 300,
            queue: !1,
            easing: "easeInOutQuad"
          }))
      }
    })
  })
}(I), function (e) {
  var t = { data: [], placeholder: "", secondaryPlaceholder: "", autocompleteOptions: {} };
  e(document).ready(function () {
    e(document).on("click", ".chip .close", function (t) {
      e(this).closest(".chips").attr("data-initialized") || e(this).closest(".chip").remove()
    })
  }), e.fn.material_chip = function (n) {
    var i = this;
    if (this.$el = e(this), this.$document = e(document), this.SELS = {
        CHIPS: ".chips",
        CHIP: ".chip",
        INPUT: "input",
        DELETE: ".material-icons",
        SELECTED_CHIP: ".selected"
      }, "data" === n)return this.$el.data("chips");
    var a = e.extend({}, t, n);
    i.hasAutocomplete = !e.isEmptyObject(a.autocompleteOptions.data), this.init = function () {
      var t = 0;
      i.$el.each(function () {
        var n = e(this), o = Materialize.guid();
        i.chipId = o, a.data && a.data instanceof Array || (a.data = []), n.data("chips", a.data), n.attr("data-index", t), n.attr("data-initialized", !0), n.hasClass(i.SELS.CHIPS) || n.addClass("chips"), i.chips(n, o), t++
      })
    }, this.handleEvents = function () {
      var t = i.SELS;
      i.$document.off("click.chips-focus", t.CHIPS).on("click.chips-focus", t.CHIPS, function (n) {
        e(n.target).find(t.INPUT).focus()
      }), i.$document.off("click.chips-select", t.CHIP).on("click.chips-select", t.CHIP, function (n) {
        var a = e(n.target);
        if (a.length) {
          var o = a.hasClass("selected"), r = a.closest(t.CHIPS);
          e(t.CHIP).removeClass("selected"), o || i.selectChip(a.index(), r)
        }
      }), i.$document.off("keydown.chips").on("keydown.chips", function (n) {
        if (!e(n.target).is("input, textarea")) {
          var a, o = i.$document.find(t.CHIP + t.SELECTED_CHIP), r = o.closest(t.CHIPS), s = o.siblings(t.CHIP).length;
          if (o.length)if (8 === n.which || 46 === n.which) {
            n.preventDefault(), a = o.index(), i.deleteChip(a, r);
            var l = null;
            a + 1 < s ? l = a : a !== s && a + 1 !== s || (l = s - 1), l < 0 && (l = null), null !== l && i.selectChip(l, r), s || r.find("input").focus()
          } else if (37 === n.which) {
            if ((a = o.index() - 1) < 0)return;
            e(t.CHIP).removeClass("selected"), i.selectChip(a, r)
          } else if (39 === n.which) {
            if (a = o.index() + 1, e(t.CHIP).removeClass("selected"), a > s)return void r.find("input").focus();
            i.selectChip(a, r)
          }
        }
      }), i.$document.off("focusin.chips", t.CHIPS + " " + t.INPUT).on("focusin.chips", t.CHIPS + " " + t.INPUT, function (n) {
        var i = e(n.target).closest(t.CHIPS);
        i.addClass("focus"), i.siblings("label, .prefix").addClass("active"), e(t.CHIP).removeClass("selected")
      }), i.$document.off("focusout.chips", t.CHIPS + " " + t.INPUT).on("focusout.chips", t.CHIPS + " " + t.INPUT, function (n) {
        var i = e(n.target).closest(t.CHIPS);
        i.removeClass("focus"), void 0 !== i.data("chips") && i.data("chips").length || i.siblings("label").removeClass("active"), i.siblings(".prefix").removeClass("active")
      }), i.$document.off("keydown.chips-add", t.CHIPS + " " + t.INPUT).on("keydown.chips-add", t.CHIPS + " " + t.INPUT, function (n) {
        var a = e(n.target), o = a.closest(t.CHIPS), r = o.children(t.CHIP).length;
        if (13 === n.which) {
          if (i.hasAutocomplete && o.find(".autocomplete-content.dropdown-content").length && o.find(".autocomplete-content.dropdown-content").children().length)return;
          return n.preventDefault(), i.addChip({ tag: a.val() }, o), void a.val("")
        }
        if ((8 === n.keyCode || 37 === n.keyCode) && "" === a.val() && r)return n.preventDefault(), i.selectChip(r - 1, o), void a.blur()
      }), i.$document.off("click.chips-delete", t.CHIPS + " " + t.DELETE).on("click.chips-delete", t.CHIPS + " " + t.DELETE, function (n) {
        var a = e(n.target), o = a.closest(t.CHIPS), r = a.closest(t.CHIP);
        n.stopPropagation(), i.deleteChip(r.index(), o), o.find("input").focus()
      })
    }, this.chips = function (t, n) {
      t.empty(), t.data("chips").forEach(function (e) {
        t.append(i.renderChip(e))
      }), t.append(e('<input id="' + n + '" class="input" placeholder="">')), i.setPlaceholder(t);
      var o = t.next("label");
      o.length && (o.attr("for", n), void 0 !== t.data("chips") && t.data("chips").length && o.addClass("active"));
      var r = e("#" + n);
      i.hasAutocomplete && (a.autocompleteOptions.onAutocomplete = function (e) {
        i.addChip({ tag: e }, t), r.val(""), r.focus()
      }, r.autocomplete(a.autocompleteOptions))
    }, this.renderChip = function (t) {
      if (t.tag) {
        var n = e('<div class="chip"></div>');
        return n.text(t.tag), t.image && n.prepend(e("<img />").attr("src", t.image)), n.append(e('<i class="material-icons close">close</i>')), n
      }
    }, this.setPlaceholder = function (e) {
      void 0 !== e.data("chips") && e.data("chips").length && a.placeholder ? e.find("input").prop("placeholder", a.placeholder) : void 0 !== e.data("chips") && e.data("chips").length || !a.secondaryPlaceholder || e.find("input").prop("placeholder", a.secondaryPlaceholder)
    }, this.isValid = function (e, t) {
      for (var n = e.data("chips"), i = !1, a = 0; a < n.length; a++)if (n[a].tag === t.tag)return void(i = !0);
      return "" !== t.tag && !i
    }, this.addChip = function (e, t) {
      if (i.isValid(t, e)) {
        for (var n = i.renderChip(e), a = [], o = t.data("chips"), r = 0; r < o.length; r++)a.push(o[r]);
        a.push(e), t.data("chips", a), n.insertBefore(t.find("input")), t.trigger("chip.add", e), i.setPlaceholder(t)
      }
    }, this.deleteChip = function (e, t) {
      var n = t.data("chips")[e];
      t.find(".chip").eq(e).remove();
      for (var a = [], o = t.data("chips"), r = 0; r < o.length; r++)r !== e && a.push(o[r]);
      t.data("chips", a), t.trigger("chip.delete", n), i.setPlaceholder(t)
    }, this.selectChip = function (e, t) {
      var n = t.find(".chip").eq(e);
      n && !1 === n.hasClass("selected") && (n.addClass("selected"), t.trigger("chip.select", t.data("chips")[e]))
    }, this.getChipsElement = function (e, t) {
      return t.eq(e)
    }, this.init(), this.handleEvents()
  }
}(I), function (e) {
  e.fn.pushpin = function (t) {
    var n = { top: 0, bottom: 1 / 0, offset: 0 };
    return "remove" === t ? (this.each(function () {
      (id = e(this).data("pushpin-id")) && (e(window).off("scroll." + id), e(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))
    }), !1) : (t = e.extend(n, t), $index = 0, this.each(function () {
      function n(e) {
        e.removeClass("pin-top"), e.removeClass("pinned"), e.removeClass("pin-bottom")
      }

      function i(i, a) {
        i.each(function () {
          t.top <= a && t.bottom >= a && !e(this).hasClass("pinned") && (n(e(this)), e(this).css("top", t.offset), e(this).addClass("pinned")), a < t.top && !e(this).hasClass("pin-top") && (n(e(this)), e(this).css("top", 0), e(this).addClass("pin-top")), a > t.bottom && !e(this).hasClass("pin-bottom") && (n(e(this)), e(this).addClass("pin-bottom"), e(this).css("top", t.bottom - r))
        })
      }

      var a = Materialize.guid(), o = e(this), r = e(this).offset().top;
      e(this).data("pushpin-id", a), i(o, e(window).scrollTop()), e(window).on("scroll." + a, function () {
        var n = e(window).scrollTop() + t.offset;
        i(o, n)
      })
    }))
  }
}(I), function (e) {
  e(document).ready(function () {
    e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function (n) {
      var i = e(this);
      t(i)
    }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function (t) {
      var i = e(this);
      n(i)
    }), e(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function (i) {
      var a = e(this).parent();
      a.hasClass("active") ? n(a) : t(a)
    }), e(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function (t) {
      var n = e(this).parent();
      i(n)
    })
  }), e.fn.extend({
    openFAB: function () {
      t(e(this))
    }, closeFAB: function () {
      n(e(this))
    }, openToolbar: function () {
      i(e(this))
    }, closeToolbar: function () {
      a(e(this))
    }
  });
  var t = function (t) {
    var n = t;
    if (!1 === n.hasClass("active")) {
      var i, a;
      !0 === n.hasClass("horizontal") ? a = 40 : i = 40, n.addClass("active"), n.find("ul .btn-floating").velocity({
        scaleY: ".4",
        scaleX: ".4",
        translateY: i + "px",
        translateX: a + "px"
      }, { duration: 0 });
      var o = 0;
      n.find("ul .btn-floating").reverse().each(function () {
        e(this).velocity({ opacity: "1", scaleX: "1", scaleY: "1", translateY: "0", translateX: "0" }, {
          duration: 80,
          delay: o
        }), o += 40
      })
    }
  }, n = function (e) {
    var t, n, i = e;
    !0 === i.hasClass("horizontal") ? n = 40 : t = 40, i.removeClass("active");
    i.find("ul .btn-floating").velocity("stop", !0), i.find("ul .btn-floating").velocity({
      opacity: "0",
      scaleX: ".4",
      scaleY: ".4",
      translateY: t + "px",
      translateX: n + "px"
    }, { duration: 80 })
  }, i = function (t) {
    if ("true" !== t.attr("data-open")) {
      var n, i, o, r = window.innerWidth, s = window.innerHeight, l = t[0].getBoundingClientRect(),
        c = t.find("> a").first(), u = t.find("> ul").first(), d = e('<div class="fab-backdrop"></div>'),
        p = c.css("background-color");
      c.append(d), n = l.left - r / 2 + l.width / 2, i = s - l.bottom, o = r / d.width(), t.attr("data-origin-bottom", l.bottom), t.attr("data-origin-left", l.left), t.attr("data-origin-width", l.width), t.addClass("active"), t.attr("data-open", !0), t.css({
        "text-align": "center",
        width: "100%",
        bottom: 0,
        left: 0,
        transform: "translateX(" + n + "px)",
        transition: "none"
      }), c.css({
        transform: "translateY(" + -i + "px)",
        transition: "none"
      }), d.css({ "background-color": p }), setTimeout(function () {
        t.css({
          transform: "",
          transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
        }), c.css({ overflow: "visible", transform: "", transition: "transform .2s" }), setTimeout(function () {
          t.css({ overflow: "hidden", "background-color": p }), d.css({
            transform: "scale(" + o + ")",
            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
          }), u.find("> li > a").css({ opacity: 1 }), e(window).on("scroll.fabToolbarClose", function () {
            a(t), e(window).off("scroll.fabToolbarClose"), e(document).off("click.fabToolbarClose")
          }), e(document).on("click.fabToolbarClose", function (n) {
            e(n.target).closest(u).length || (a(t), e(window).off("scroll.fabToolbarClose"), e(document).off("click.fabToolbarClose"))
          })
        }, 100)
      }, 0)
    }
  }, a = function (e) {
    if ("true" === e.attr("data-open")) {
      var t, n, i = window.innerWidth, a = window.innerHeight, o = e.attr("data-origin-width"),
        r = e.attr("data-origin-bottom"), s = e.attr("data-origin-left"), l = e.find("> .btn-floating").first(),
        c = e.find("> ul").first(), u = e.find(".fab-backdrop"), d = l.css("background-color");
      t = s - i / 2 + o / 2, n = a - r, i / u.width(), e.removeClass("active"), e.attr("data-open", !1), e.css({
        "background-color": "transparent",
        transition: "none"
      }), l.css({ transition: "none" }), u.css({
        transform: "scale(0)",
        "background-color": d
      }), c.find("> li > a").css({ opacity: "" }), setTimeout(function () {
        u.remove(), e.css({
          "text-align": "",
          width: "",
          bottom: "",
          left: "",
          overflow: "",
          "background-color": "",
          transform: "translate3d(" + -t + "px,0,0)"
        }), l.css({ overflow: "", transform: "translate3d(0," + n + "px,0)" }), setTimeout(function () {
          e.css({
            transform: "translate3d(0,0,0)",
            transition: "transform .2s"
          }), l.css({
            transform: "translate3d(0,0,0)",
            transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
          })
        }, 20)
      }, 200)
    }
  }
}(I), function (e) {
  Materialize.fadeInImage = function (t) {
    var n;
    if ("string" == typeof t) n = e(t); else {
      if ("object" != typeof t)return;
      n = t
    }
    n.css({ opacity: 0 }), e(n).velocity({ opacity: 1 }, {
      duration: 650,
      queue: !1,
      easing: "easeOutSine"
    }), e(n).velocity({ opacity: 1 }, {
      duration: 1300, queue: !1, easing: "swing", step: function (t, n) {
        n.start = 100;
        var i = t / 100, a = 150 - (100 - t) / 1.75;
        a < 100 && (a = 100), t >= 0 && e(this).css({
          "-webkit-filter": "grayscale(" + i + ")brightness(" + a + "%)",
          filter: "grayscale(" + i + ")brightness(" + a + "%)"
        })
      }
    })
  }, Materialize.showStaggeredList = function (t) {
    var n;
    if ("string" == typeof t) n = e(t); else {
      if ("object" != typeof t)return;
      n = t
    }
    var i = 0;
    n.find("li").velocity({ translateX: "-100px" }, { duration: 0 }), n.find("li").each(function () {
      e(this).velocity({ opacity: "1", translateX: "0" }, { duration: 800, delay: i, easing: [60, 10] }), i += 120
    })
  }, e(document).ready(function () {
    var t = !1, n = !1;
    e(".dismissable").each(function () {
      e(this).hammer({ prevent_default: !1 }).on("pan", function (i) {
        if ("touch" === i.gesture.pointerType) {
          var a = e(this), o = i.gesture.direction, r = i.gesture.deltaX, s = i.gesture.velocityX;
          a.velocity({ translateX: r }, {
            duration: 50,
            queue: !1,
            easing: "easeOutQuad"
          }), 4 === o && (r > a.innerWidth() / 2 || s < -.75) && (t = !0), 2 === o && (r < -1 * a.innerWidth() / 2 || s > .75) && (n = !0)
        }
      }).on("panend", function (i) {
        if (Math.abs(i.gesture.deltaX) < e(this).innerWidth() / 2 && (n = !1, t = !1), "touch" === i.gesture.pointerType) {
          var a = e(this);
          if (t || n) {
            var o;
            o = t ? a.innerWidth() : -1 * a.innerWidth(), a.velocity({ translateX: o }, {
              duration: 100,
              queue: !1,
              easing: "easeOutQuad",
              complete: function () {
                a.css("border", "none"), a.velocity({ height: 0, padding: 0 }, {
                  duration: 200,
                  queue: !1,
                  easing: "easeOutQuad",
                  complete: function () {
                    a.remove()
                  }
                })
              }
            })
          } else a.velocity({ translateX: 0 }, { duration: 100, queue: !1, easing: "easeOutQuad" });
          t = !1, n = !1
        }
      })
    })
  })
}(I), function (e) {
  var t = !1;
  Materialize.scrollFire = function (e) {
    var n = function () {
      for (var t = window.pageYOffset + window.innerHeight, n = 0; n < e.length; n++) {
        var i = e[n], a = i.selector, o = i.offset, r = i.callback, s = document.querySelector(a);
        null !== s && t > s.getBoundingClientRect().top + window.pageYOffset + o && !0 !== i.done && ("function" == typeof r ? r.call(this, s) : "string" == typeof r && new Function(r)(s), i.done = !0)
      }
    }, i = Materialize.throttle(function () {
      n()
    }, e.throttle || 100);
    t || (window.addEventListener("scroll", i), window.addEventListener("resize", i), t = !0), setTimeout(i, 0)
  }
}(), function (e) {
  "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(I)
}(function (e) {
  function t(o, r, l, d) {
    function p() {
      return t._.node("div", t._.node("div", t._.node("div", t._.node("div", T.component.nodes(b.open), x.box), x.wrap), x.frame), x.holder)
    }

    function f() {
      k.data(r, T).addClass(x.input).attr("tabindex", -1).val(k.data("value") ? T.get("select", w.format) : o.value), w.editable || k.on("focus." + b.id + " click." + b.id, function (e) {
        e.preventDefault(), T.$root.eq(0).focus()
      }).on("keydown." + b.id, m), a(o, { haspopup: !0, expanded: !1, readonly: !1, owns: o.id + "_root" })
    }

    function h() {
      T.$root.on({
        keydown: m, focusin: function (e) {
          T.$root.removeClass(x.focused), e.stopPropagation()
        }, "mousedown click": function (t) {
          var n = t.target;
          n != T.$root.children()[0] && (t.stopPropagation(), "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(), T.$root.eq(0).focus()))
        }
      }).on({
        focus: function () {
          k.addClass(x.target)
        }, blur: function () {
          k.removeClass(x.target)
        }
      }).on("focus.toOpen", g).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
        var t = e(this), n = t.data(), i = t.hasClass(x.navDisabled) || t.hasClass(x.disabled), a = s();
        a = a && (a.type || a.href), (i || a && !e.contains(T.$root[0], a)) && T.$root.eq(0).focus(), !i && n.nav ? T.set("highlight", T.component.item.highlight, { nav: n.nav }) : !i && "pick" in n ? T.set("select", n.pick) : n.clear ? T.clear().close(!0) : n.close && T.close(!0)
      }), a(T.$root[0], "hidden", !0)
    }

    function v() {
      var t;
      !0 === w.hiddenName ? (t = o.name, o.name = "") : t = (t = ["string" == typeof w.hiddenPrefix ? w.hiddenPrefix : "", "string" == typeof w.hiddenSuffix ? w.hiddenSuffix : "_submit"])[0] + o.name + t[1], T._hidden = e('<input type=hidden name="' + t + '"' + (k.data("value") || o.value ? ' value="' + T.get("select", w.formatSubmit) + '"' : "") + ">")[0], k.on("change." + b.id, function () {
        T._hidden.value = o.value ? T.get("select", w.formatSubmit) : ""
      }), w.container ? e(w.container).append(T._hidden) : k.after(T._hidden)
    }

    function m(e) {
      var t = e.keyCode, n = /^(8|46)$/.test(t);
      if (27 == t)return T.close(), !1;
      (32 == t || n || !b.open && T.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? T.clear().close() : T.open())
    }

    function g(e) {
      e.stopPropagation(), "focus" == e.type && T.$root.addClass(x.focused), T.open()
    }

    if (!o)return t;
    var y = !1, b = { id: o.id || "P" + Math.abs(~~(Math.random() * new Date)) },
      w = l ? e.extend(!0, {}, l.defaults, d) : d || {}, x = e.extend({}, t.klasses(), w.klass), k = e(o),
      C = function () {
        return this.start()
      }, T = C.prototype = {
        constructor: C, $node: k, start: function () {
          return b && b.start ? T : (b.methods = {}, b.start = !0, b.open = !1, b.type = o.type, o.autofocus = o == s(), o.readOnly = !w.editable, o.id = o.id || b.id, "text" != o.type && (o.type = "text"), T.component = new l(T, w), T.$root = e(t._.node("div", p(), x.picker, 'id="' + o.id + '_root" tabindex="0"')), h(), w.formatSubmit && v(), f(), w.container ? e(w.container).append(T.$root) : k.after(T.$root), T.on({
            start: T.component.onStart,
            render: T.component.onRender,
            stop: T.component.onStop,
            open: T.component.onOpen,
            close: T.component.onClose,
            set: T.component.onSet
          }).on({
            start: w.onStart,
            render: w.onRender,
            stop: w.onStop,
            open: w.onOpen,
            close: w.onClose,
            set: w.onSet
          }), y = n(T.$root.children()[0]), o.autofocus && T.open(), T.trigger("start").trigger("render"))
        }, render: function (e) {
          return e ? T.$root.html(p()) : T.$root.find("." + x.box).html(T.component.nodes(b.open)), T.trigger("render")
        }, stop: function () {
          return b.start ? (T.close(), T._hidden && T._hidden.parentNode.removeChild(T._hidden), T.$root.remove(), k.removeClass(x.input).removeData(r), setTimeout(function () {
            k.off("." + b.id)
          }, 0), o.type = b.type, o.readOnly = !1, T.trigger("stop"), b.methods = {}, b.start = !1, T) : T
        }, open: function (n) {
          return b.open ? T : (k.addClass(x.active), a(o, "expanded", !0), setTimeout(function () {
            T.$root.addClass(x.opened), a(T.$root[0], "hidden", !1)
          }, 0), !1 !== n && (b.open = !0, y && u.css("overflow", "hidden").css("padding-right", "+=" + i()), T.$root.eq(0).focus(), c.on("click." + b.id + " focusin." + b.id, function (e) {
            var t = e.target;
            t != o && t != document && 3 != e.which && T.close(t === T.$root.children()[0])
          }).on("keydown." + b.id, function (n) {
            var i = n.keyCode, a = T.component.key[i], o = n.target;
            27 == i ? T.close(!0) : o != T.$root[0] || !a && 13 != i ? e.contains(T.$root[0], o) && 13 == i && (n.preventDefault(), o.click()) : (n.preventDefault(), a ? t._.trigger(T.component.key.go, T, [t._.trigger(a)]) : T.$root.find("." + x.highlighted).hasClass(x.disabled) || T.set("select", T.component.item.highlight).close())
          })), T.trigger("open"))
        }, close: function (e) {
          return e && (T.$root.off("focus.toOpen").eq(0).focus(), setTimeout(function () {
            T.$root.on("focus.toOpen", g)
          }, 0)), k.removeClass(x.active), a(o, "expanded", !1), setTimeout(function () {
            T.$root.removeClass(x.opened + " " + x.focused), a(T.$root[0], "hidden", !0)
          }, 0), b.open ? (b.open = !1, y && u.css("overflow", "").css("padding-right", "-=" + i()), c.off("." + b.id), T.trigger("close")) : T
        }, clear: function (e) {
          return T.set("clear", null, e)
        }, set: function (t, n, i) {
          var a, o, r = e.isPlainObject(t), s = r ? t : {};
          if (i = r && e.isPlainObject(n) ? n : i || {}, t) {
            r || (s[t] = n);
            for (a in s)o = s[a], a in T.component.item && (void 0 === o && (o = null), T.component.set(a, o, i)), "select" != a && "clear" != a || k.val("clear" == a ? "" : T.get(a, w.format)).trigger("change");
            T.render()
          }
          return i.muted ? T : T.trigger("set", s)
        }, get: function (e, n) {
          if (e = e || "value", null != b[e])return b[e];
          if ("valueSubmit" == e) {
            if (T._hidden)return T._hidden.value;
            e = "value"
          }
          if ("value" == e)return o.value;
          if (e in T.component.item) {
            if ("string" == typeof n) {
              var i = T.component.get(e);
              return i ? t._.trigger(T.component.formats.toString, T.component, [n, i]) : ""
            }
            return T.component.get(e)
          }
        }, on: function (t, n, i) {
          var a, o, r = e.isPlainObject(t), s = r ? t : {};
          if (t) {
            r || (s[t] = n);
            for (a in s)o = s[a], i && (a = "_" + a), b.methods[a] = b.methods[a] || [], b.methods[a].push(o)
          }
          return T
        }, off: function () {
          var e, t, n = arguments;
          for (e = 0, namesCount = n.length; e < namesCount; e += 1)(t = n[e]) in b.methods && delete b.methods[t];
          return T
        }, trigger: function (e, n) {
          var i = function (e) {
            var i = b.methods[e];
            i && i.map(function (e) {
              t._.trigger(e, T, [n])
            })
          };
          return i("_" + e), i(e), T
        }
      };
    return new C
  }

  function n(e) {
    var t;
    return e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position), "fixed" == t
  }

  function i() {
    if (u.height() <= l.height())return 0;
    var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body"), n = t[0].offsetWidth;
    t.css("overflow", "scroll");
    var i = e('<div style="width:100%" />').appendTo(t)[0].offsetWidth;
    return t.remove(), n - i
  }

  function a(t, n, i) {
    if (e.isPlainObject(n))for (var a in n)o(t, a, n[a]); else o(t, n, i)
  }

  function o(e, t, n) {
    e.setAttribute(("role" == t ? "" : "aria-") + t, n)
  }

  function r(t, n) {
    e.isPlainObject(t) || (t = { attribute: n }), n = "";
    for (var i in t) {
      var a = ("role" == i ? "" : "aria-") + i;
      n += null == t[i] ? "" : a + '="' + t[i] + '"'
    }
    return n
  }

  function s() {
    try {
      return document.activeElement
    } catch (e) {
    }
  }

  var l = e(window), c = e(document), u = e(document.documentElement);
  return t.klasses = function (e) {
    return e = e || "picker", {
      picker: e,
      opened: e + "--opened",
      focused: e + "--focused",
      input: e + "__input",
      active: e + "__input--active",
      target: e + "__input--target",
      holder: e + "__holder",
      frame: e + "__frame",
      wrap: e + "__wrap",
      box: e + "__box"
    }
  }, t._ = {
    group: function (e) {
      for (var n, i = "", a = t._.trigger(e.min, e); a <= t._.trigger(e.max, e, [a]); a += e.i)n = t._.trigger(e.item, e, [a]), i += t._.node(e.node, n[0], n[1], n[2]);
      return i
    }, node: function (t, n, i, a) {
      return n ? (n = e.isArray(n) ? n.join("") : n, i = i ? ' class="' + i + '"' : "", a = a ? " " + a : "", "<" + t + i + a + ">" + n + "</" + t + ">") : ""
    }, lead: function (e) {
      return (e < 10 ? "0" : "") + e
    }, trigger: function (e, t, n) {
      return "function" == typeof e ? e.apply(t, n || []) : e
    }, digits: function (e) {
      return /\d/.test(e[1]) ? 2 : 1
    }, isDate: function (e) {
      return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
    }, isInteger: function (e) {
      return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
    }, ariaAttr: r
  }, t.extend = function (n, i) {
    e.fn[n] = function (a, o) {
      var r = this.data(n);
      return "picker" == a ? r : r && "string" == typeof a ? t._.trigger(r[a], r, [o]) : this.each(function () {
        e(this).data(n) || new t(this, n, i, a)
      })
    }, e.fn[n].defaults = i.defaults
  }, t
}), function (e) {
  "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, I)
}(function (e, t) {
  function n(e, t) {
    var n = this, i = e.$node[0], a = i.value, o = e.$node.data("value"), r = o || a, s = o ? t.formatSubmit : t.format,
      l = function () {
        return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
      };
    n.settings = t, n.$node = e.$node, n.queue = {
      min: "measure create",
      max: "measure create",
      now: "now create",
      select: "parse create validate",
      highlight: "parse navigate create validate",
      view: "parse create validate viewset",
      disable: "deactivate",
      enable: "activate"
    }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = -function (e) {
      return !0 === e[0] ? e.shift() : -1
    }(n.item.disable), n.set("min", t.min).set("max", t.max).set("now"), r ? n.set("select", r, { format: s }) : n.set("select", null).set("highlight", n.item.now), n.key = {
      40: 7,
      38: -7,
      39: function () {
        return l() ? -1 : 1
      },
      37: function () {
        return l() ? 1 : -1
      },
      go: function (e) {
        var t = n.item.highlight, i = new Date(t.year, t.month, t.date + e);
        n.set("highlight", i, { interval: e }), this.render()
      }
    }, e.on("render", function () {
      e.$root.find("." + t.klass.selectMonth).on("change", function () {
        var n = this.value;
        n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
      }), e.$root.find("." + t.klass.selectYear).on("change", function () {
        var n = this.value;
        n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
      })
    }, 1).on("open", function () {
      var i = "";
      n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1)
    }, 1).on("close", function () {
      e.$root.find("button, select").attr("disabled", !0)
    }, 1)
  }

  var i = e._;
  n.prototype.set = function (e, t, n) {
    var i = this, a = i.item;
    return null === t ? ("clear" == e && (e = "select"), a[e] = t, i) : (a["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function (a) {
      return t = i[a](e, t, n)
    }).pop(), "select" == e ? i.set("highlight", a.select, n) : "highlight" == e ? i.set("view", a.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (a.select && i.disabled(a.select) && i.set("select", a.select, n), a.highlight && i.disabled(a.highlight) && i.set("highlight", a.highlight, n)), i)
  }, n.prototype.get = function (e) {
    return this.item[e]
  }, n.prototype.create = function (e, n, a) {
    var o, r = this;
    return n = void 0 === n ? e : n, n == -1 / 0 || n == 1 / 0 ? o = n : t.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = i.isDate(n) ? n : r.create().obj) : n = i.isInteger(n) || i.isDate(n) ? r.normalize(new Date(n), a) : r.now(e, n, a), {
      year: o || n.getFullYear(),
      month: o || n.getMonth(),
      date: o || n.getDate(),
      day: o || n.getDay(),
      obj: o || n,
      pick: o || n.getTime()
    }
  }, n.prototype.createRange = function (e, n) {
    var a = this, o = function (e) {
      return !0 === e || t.isArray(e) || i.isDate(e) ? a.create(e) : e
    };
    return i.isInteger(e) || (e = o(e)), i.isInteger(n) || (n = o(n)), i.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : i.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
      from: o(e),
      to: o(n)
    }
  }, n.prototype.withinRange = function (e, t) {
    return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
  }, n.prototype.overlapRanges = function (e, t) {
    var n = this;
    return e = n.createRange(e.from, e.to), t = n.createRange(t.from, t.to), n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
  }, n.prototype.now = function (e, t, n) {
    return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
  }, n.prototype.navigate = function (e, n, i) {
    var a, o, r, s, l = t.isArray(n), c = t.isPlainObject(n), u = this.item.view;
    if (l || c) {
      for (c ? (o = n.year, r = n.month, s = n.date) : (o = +n[0], r = +n[1], s = +n[2]), i && i.nav && u && u.month !== r && (o = u.year, r = u.month), o = (a = new Date(o, r + (i && i.nav ? i.nav : 0), 1)).getFullYear(), r = a.getMonth(); new Date(o, r, s).getMonth() !== r;)s -= 1;
      n = [o, r, s]
    }
    return n
  }, n.prototype.normalize = function (e) {
    return e.setHours(0, 0, 0, 0), e
  }, n.prototype.measure = function (e, t) {
    var n = this;
    return t ? "string" == typeof t ? t = n.parse(e, t) : i.isInteger(t) && (t = n.now(e, t, { rel: t })) : t = "min" == e ? -1 / 0 : 1 / 0, t
  }, n.prototype.viewset = function (e, t) {
    return this.create([t.year, t.month, 1])
  }, n.prototype.validate = function (e, n, a) {
    var o, r, s, l, c = this, u = n, d = a && a.interval ? a.interval : 1, p = -1 === c.item.enable, f = c.item.min,
      h = c.item.max, v = p && c.item.disable.filter(function (e) {
          if (t.isArray(e)) {
            var a = c.create(e).pick;
            a < n.pick ? o = !0 : a > n.pick && (r = !0)
          }
          return i.isInteger(e)
        }).length;
    if ((!a || !a.nav) && (!p && c.disabled(n) || p && c.disabled(n) && (v || o || r) || !p && (n.pick <= f.pick || n.pick >= h.pick)))for (p && !v && (!r && d > 0 || !o && d < 0) && (d *= -1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u, d = d > 0 ? 1 : -1), n.pick <= f.pick ? (s = !0, d = 1, n = c.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : -1)])) : n.pick >= h.pick && (l = !0, d = -1, n = c.create([h.year, h.month, h.date + (n.pick === h.pick ? 0 : 1)])), !s || !l);)n = c.create([n.year, n.month, n.date + d]);
    return n
  }, n.prototype.disabled = function (e) {
    var n = this, a = n.item.disable.filter(function (a) {
      return i.isInteger(a) ? e.day === (n.settings.firstDay ? a : a - 1) % 7 : t.isArray(a) || i.isDate(a) ? e.pick === n.create(a).pick : t.isPlainObject(a) ? n.withinRange(a, e) : void 0
    });
    return a = a.length && !a.filter(function (e) {
        return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
      }).length, -1 === n.item.enable ? !a : a || e.pick < n.item.min.pick || e.pick > n.item.max.pick
  }, n.prototype.parse = function (e, t, n) {
    var a = this, o = {};
    return t && "string" == typeof t ? (n && n.format || ((n = n || {}).format = a.settings.format), a.formats.toArray(n.format).map(function (e) {
      var n = a.formats[e], r = n ? i.trigger(n, a, [t, o]) : e.replace(/^!/, "").length;
      n && (o[e] = t.substr(0, r)), t = t.substr(r)
    }), [o.yyyy || o.yy, +(o.mm || o.m) - 1, o.dd || o.d]) : t
  }, n.prototype.formats = function () {
    function e(e, t, n) {
      var i = e.match(/\w+/)[0];
      return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
    }

    function t(e) {
      return e.match(/\w+/)[0].length
    }

    return {
      d: function (e, t) {
        return e ? i.digits(e) : t.date
      }, dd: function (e, t) {
        return e ? 2 : i.lead(t.date)
      }, ddd: function (e, n) {
        return e ? t(e) : this.settings.weekdaysShort[n.day]
      }, dddd: function (e, n) {
        return e ? t(e) : this.settings.weekdaysFull[n.day]
      }, m: function (e, t) {
        return e ? i.digits(e) : t.month + 1
      }, mm: function (e, t) {
        return e ? 2 : i.lead(t.month + 1)
      }, mmm: function (t, n) {
        var i = this.settings.monthsShort;
        return t ? e(t, i, n) : i[n.month]
      }, mmmm: function (t, n) {
        var i = this.settings.monthsFull;
        return t ? e(t, i, n) : i[n.month]
      }, yy: function (e, t) {
        return e ? 2 : ("" + t.year).slice(2)
      }, yyyy: function (e, t) {
        return e ? 4 : t.year
      }, toArray: function (e) {
        return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
      }, toString: function (e, t) {
        var n = this;
        return n.formats.toArray(e).map(function (e) {
          return i.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
        }).join("")
      }
    }
  }(), n.prototype.isDateExact = function (e, n) {
    var a = this;
    return i.isInteger(e) && i.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (i.isDate(e) || t.isArray(e)) && (i.isDate(n) || t.isArray(n)) ? a.create(e).pick === a.create(n).pick : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && (a.isDateExact(e.from, n.from) && a.isDateExact(e.to, n.to))
  }, n.prototype.isDateOverlap = function (e, n) {
    var a = this, o = a.settings.firstDay ? 1 : 0;
    return i.isInteger(e) && (i.isDate(n) || t.isArray(n)) ? (e = e % 7 + o) === a.create(n).day + 1 : i.isInteger(n) && (i.isDate(e) || t.isArray(e)) ? (n = n % 7 + o) === a.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && a.overlapRanges(e, n)
  }, n.prototype.flipEnable = function (e) {
    var t = this.item;
    t.enable = e || (-1 == t.enable ? 1 : -1)
  }, n.prototype.deactivate = function (e, n) {
    var a = this, o = a.item.disable.slice(0);
    return "flip" == n ? a.flipEnable() : !1 === n ? (a.flipEnable(1), o = []) : !0 === n ? (a.flipEnable(-1), o = []) : n.map(function (e) {
      for (var n, r = 0; r < o.length; r += 1)if (a.isDateExact(e, o[r])) {
        n = !0;
        break
      }
      n || (i.isInteger(e) || i.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && o.push(e)
    }), o
  }, n.prototype.activate = function (e, n) {
    var a = this, o = a.item.disable, r = o.length;
    return "flip" == n ? a.flipEnable() : !0 === n ? (a.flipEnable(1), o = []) : !1 === n ? (a.flipEnable(-1), o = []) : n.map(function (e) {
      var n, s, l, c;
      for (l = 0; l < r; l += 1) {
        if (s = o[l], a.isDateExact(s, e)) {
          n = o[l] = null, c = !0;
          break
        }
        if (a.isDateOverlap(s, e)) {
          t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e)[3] || n.push("inverted") : i.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
          break
        }
      }
      if (n)for (l = 0; l < r; l += 1)if (a.isDateExact(o[l], e)) {
        o[l] = null;
        break
      }
      if (c)for (l = 0; l < r; l += 1)if (a.isDateOverlap(o[l], e)) {
        o[l] = null;
        break
      }
      n && o.push(n)
    }), o.filter(function (e) {
      return null != e
    })
  }, n.prototype.nodes = function (e) {
    var t = this, n = t.settings, a = t.item, o = a.now, r = a.select, s = a.highlight, l = a.view, c = a.disable,
      u = a.min, d = a.max, p = function (e, t) {
        return n.firstDay && (e.push(e.shift()), t.push(t.shift())), i.node("thead", i.node("tr", i.group({
          min: 0,
          max: 6,
          i: 1,
          node: "th",
          item: function (i) {
            return [e[i], n.klass.weekdays, 'scope=col title="' + t[i] + '"']
          }
        })))
      }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysLetter).slice(0), n.weekdaysFull.slice(0)), f = function (e) {
        return i.node("div", " ", n.klass["nav" + (e ? "Next" : "Prev")] + (e && l.year >= d.year && l.month >= d.month || !e && l.year <= u.year && l.month <= u.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + i.ariaAttr({
            role: "button",
            controls: t.$node[0].id + "_table"
          }) + ' title="' + (e ? n.labelMonthNext : n.labelMonthPrev) + '"')
      }, h = function (a) {
        var o = n.showMonthsShort ? n.monthsShort : n.monthsFull;
        return "short_months" == a && (o = n.monthsShort), n.selectMonths && void 0 == a ? i.node("select", i.group({
          min: 0,
          max: 11,
          i: 1,
          node: "option",
          item: function (e) {
            return [o[e], 0, "value=" + e + (l.month == e ? " selected" : "") + (l.year == u.year && e < u.month || l.year == d.year && e > d.month ? " disabled" : "")]
          }
        }), n.klass.selectMonth + " browser-default", (e ? "" : "disabled") + " " + i.ariaAttr({ controls: t.$node[0].id + "_table" }) + ' title="' + n.labelMonthSelect + '"') : "short_months" == a ? null != r ? o[r.month] : o[l.month] : i.node("div", o[l.month], n.klass.month)
      }, v = function (a) {
        var o = l.year, r = !0 === n.selectYears ? 5 : ~~(n.selectYears / 2);
        if (r) {
          var s = u.year, c = d.year, p = o - r, f = o + r;
          if (s > p && (f += s - p, p = s), c < f) {
            var h = p - s, v = f - c;
            p -= h > v ? v : h, f = c
          }
          if (n.selectYears && void 0 == a)return i.node("select", i.group({
            min: p,
            max: f,
            i: 1,
            node: "option",
            item: function (e) {
              return [e, 0, "value=" + e + (o == e ? " selected" : "")]
            }
          }), n.klass.selectYear + " browser-default", (e ? "" : "disabled") + " " + i.ariaAttr({ controls: t.$node[0].id + "_table" }) + ' title="' + n.labelYearSelect + '"')
        }
        return "raw" == a ? i.node("div", o) : i.node("div", o, n.klass.year)
      };
    return createDayLabel = function () {
      return null != r ? r.date : o.date
    }, createWeekdayLabel = function () {
      var e;
      return e = null != r ? r.day : o.day, n.weekdaysShort[e]
    }, i.node("div", i.node("div", v("raw"), n.klass.year_display) + i.node("span", createWeekdayLabel() + ", ", "picker__weekday-display") + i.node("span", h("short_months") + " ", n.klass.month_display) + i.node("span", createDayLabel(), n.klass.day_display), n.klass.date_display) + i.node("div", i.node("div", i.node("div", (n.selectYears, h() + v() + f() + f(1)), n.klass.header) + i.node("table", p + i.node("tbody", i.group({
            min: 0,
            max: 5,
            i: 1,
            node: "tr",
            item: function (e) {
              var a = n.firstDay && 0 === t.create([l.year, l.month, 1]).day ? -7 : 0;
              return [i.group({
                min: 7 * e - l.day + a + 1, max: function () {
                  return this.min + 7 - 1
                }, i: 1, node: "td", item: function (e) {
                  e = t.create([l.year, l.month, e + (n.firstDay ? 1 : 0)]);
                  var a = r && r.pick == e.pick, p = s && s.pick == e.pick,
                    f = c && t.disabled(e) || e.pick < u.pick || e.pick > d.pick,
                    h = i.trigger(t.formats.toString, t, [n.format, e]);
                  return [i.node("div", e.date, function (t) {
                    return t.push(l.month == e.month ? n.klass.infocus : n.klass.outfocus), o.pick == e.pick && t.push(n.klass.now), a && t.push(n.klass.selected), p && t.push(n.klass.highlighted), f && t.push(n.klass.disabled), t.join(" ")
                  }([n.klass.day]), "data-pick=" + e.pick + " " + i.ariaAttr({
                      role: "gridcell",
                      label: h,
                      selected: !(!a || t.$node.val() !== h) || null,
                      activedescendant: !!p || null,
                      disabled: !!f || null
                    })), "", i.ariaAttr({ role: "presentation" })]
                }
              })]
            }
          })), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + i.ariaAttr({
            role: "grid",
            controls: t.$node[0].id,
            readonly: !0
          })), n.klass.calendar_container) + i.node("div", i.node("button", n.today, "btn-flat picker__today waves-effect", "type=button data-pick=" + o.pick + (e && !t.disabled(o) ? "" : " disabled") + " " + i.ariaAttr({ controls: t.$node[0].id })) + i.node("button", n.clear, "btn-flat picker__clear waves-effect", "type=button data-clear=1" + (e ? "" : " disabled") + " " + i.ariaAttr({ controls: t.$node[0].id })) + i.node("button", n.close, "btn-flat picker__close waves-effect", "type=button data-close=true " + (e ? "" : " disabled") + " " + i.ariaAttr({ controls: t.$node[0].id })), n.klass.footer), "picker__container__wrapper")
  }, n.defaults = function (e) {
    return {
      labelMonthNext: "Next month",
      labelMonthPrev: "Previous month",
      labelMonthSelect: "Select a month",
      labelYearSelect: "Select a year",
      monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
      today: "Today",
      clear: "Clear",
      close: "Ok",
      format: "d mmmm, yyyy",
      klass: {
        table: e + "table",
        header: e + "header",
        date_display: e + "date-display",
        day_display: e + "day-display",
        month_display: e + "month-display",
        year_display: e + "year-display",
        calendar_container: e + "calendar-container",
        navPrev: e + "nav--prev",
        navNext: e + "nav--next",
        navDisabled: e + "nav--disabled",
        month: e + "month",
        year: e + "year",
        selectMonth: e + "select--month",
        selectYear: e + "select--year",
        weekdays: e + "weekday",
        day: e + "day",
        disabled: e + "day--disabled",
        selected: e + "day--selected",
        highlighted: e + "day--highlighted",
        now: e + "day--today",
        infocus: e + "day--infocus",
        outfocus: e + "day--outfocus",
        footer: e + "footer",
        buttonClear: e + "button--clear",
        buttonToday: e + "button--today",
        buttonClose: e + "button--close"
      }
    }
  }(e.klasses().picker + "__"), e.extend("pickadate", n)
}), function () {
  function e(e) {
    return document.createElementNS(l, e)
  }

  function t(e) {
    return (e < 10 ? "0" : "") + e
  }

  function n(e) {
    var t = ++m + "";
    return e ? e + t : t
  }

  function i(i, r) {
    function l(e, t) {
      var n = d.offset(), i = /^touch/.test(e.type), a = n.left + g, o = n.top + g,
        l = (i ? e.originalEvent.touches[0] : e).pageX - a, c = (i ? e.originalEvent.touches[0] : e).pageY - o,
        u = Math.sqrt(l * l + c * c), p = !1;
      if (!t || !(u < y - w || u > y + w)) {
        e.preventDefault();
        var v = setTimeout(function () {
          _.popover.addClass("clockpicker-moving")
        }, 200);
        _.setHand(l, c, !t, !0), s.off(f).on(f, function (e) {
          e.preventDefault();
          var t = /^touch/.test(e.type), n = (t ? e.originalEvent.touches[0] : e).pageX - a,
            i = (t ? e.originalEvent.touches[0] : e).pageY - o;
          (p || n !== l || i !== c) && (p = !0, _.setHand(n, i, !1, !0))
        }), s.off(h).on(h, function (e) {
          s.off(h), e.preventDefault();
          var n = /^touch/.test(e.type), i = (n ? e.originalEvent.changedTouches[0] : e).pageX - a,
            u = (n ? e.originalEvent.changedTouches[0] : e).pageY - o;
          (t || p) && i === l && u === c && _.setHand(i, u), "hours" === _.currentView ? _.toggleView("minutes", k / 2) : r.autoclose && (_.minutesView.addClass("clockpicker-dial-out"), setTimeout(function () {
              _.done()
            }, k / 2)), d.prepend(q), clearTimeout(v), _.popover.removeClass("clockpicker-moving"), s.off(f)
        })
      }
    }

    var u = o(C), d = u.find(".clockpicker-plate"), v = u.find(".picker__holder"), m = u.find(".clockpicker-hours"),
      T = u.find(".clockpicker-minutes"), S = u.find(".clockpicker-am-pm-block"), A = "INPUT" === i.prop("tagName"),
      E = A ? i : i.find("input"), P = o("label[for=" + E.attr("id") + "]"), _ = this;
    this.id = n("cp"), this.element = i, this.holder = v, this.options = r, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = A, this.input = E, this.label = P, this.popover = u, this.plate = d, this.hoursView = m, this.minutesView = T, this.amPmBlock = S, this.spanHours = u.find(".clockpicker-span-hours"), this.spanMinutes = u.find(".clockpicker-span-minutes"), this.spanAmPm = u.find(".clockpicker-span-am-pm"), this.footer = u.find(".picker__footer"), this.amOrPm = "PM", r.twelvehour && (r.ampmclickable ? (this.spanAmPm.empty(), o('<div id="click-am">AM</div>').on("click", function () {
      _.spanAmPm.children("#click-am").addClass("text-primary"), _.spanAmPm.children("#click-pm").removeClass("text-primary"), _.amOrPm = "AM"
    }).appendTo(this.spanAmPm), o('<div id="click-pm">PM</div>').on("click", function () {
      _.spanAmPm.children("#click-pm").addClass("text-primary"), _.spanAmPm.children("#click-am").removeClass("text-primary"), _.amOrPm = "PM"
    }).appendTo(this.spanAmPm)) : (this.spanAmPm.empty(), o('<div id="click-am">AM</div>').appendTo(this.spanAmPm), o('<div id="click-pm">PM</div>').appendTo(this.spanAmPm))), o('<button type="button" class="btn-flat picker__clear" tabindex="' + (r.twelvehour ? "3" : "1") + '">' + r.cleartext + "</button>").click(o.proxy(this.clear, this)).appendTo(this.footer), o('<button type="button" class="btn-flat picker__close" tabindex="' + (r.twelvehour ? "3" : "1") + '">' + r.canceltext + "</button>").click(o.proxy(this.hide, this)).appendTo(this.footer), o('<button type="button" class="btn-flat picker__close" tabindex="' + (r.twelvehour ? "3" : "1") + '">' + r.donetext + "</button>").click(o.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(o.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(o.proxy(this.toggleView, this, "minutes")), E.on("focus.clockpicker click.clockpicker", o.proxy(this.show, this));
    var O, $, D, I, M = o('<div class="clockpicker-tick"></div>');
    if (r.twelvehour)for (O = 1; O < 13; O += 1)$ = M.clone(), D = O / 6 * Math.PI, I = y, $.css({
      left: g + Math.sin(D) * I - w,
      top: g - Math.cos(D) * I - w
    }), $.html(0 === O ? "00" : O), m.append($), $.on(p, l); else for (O = 0; O < 24; O += 1)$ = M.clone(), D = O / 6 * Math.PI, I = O > 0 && O < 13 ? b : y, $.css({
      left: g + Math.sin(D) * I - w,
      top: g - Math.cos(D) * I - w
    }), $.html(0 === O ? "00" : O), m.append($), $.on(p, l);
    for (O = 0; O < 60; O += 5)$ = M.clone(), D = O / 30 * Math.PI, $.css({
      left: g + Math.sin(D) * y - w,
      top: g - Math.cos(D) * y - w
    }), $.html(t(O)), T.append($), $.on(p, l);
    if (d.on(p, function (e) {
        0 === o(e.target).closest(".clockpicker-tick").length && l(e, !0)
      }), c) {
      var q = u.find(".clockpicker-canvas"), N = e("svg");
      N.setAttribute("class", "clockpicker-svg"), N.setAttribute("width", x), N.setAttribute("height", x);
      var L = e("g");
      L.setAttribute("transform", "translate(" + g + "," + g + ")");
      var j = e("circle");
      j.setAttribute("class", "clockpicker-canvas-bearing"), j.setAttribute("cx", 0), j.setAttribute("cy", 0), j.setAttribute("r", 4);
      var z = e("line");
      z.setAttribute("x1", 0), z.setAttribute("y1", 0);
      var F = e("circle");
      F.setAttribute("class", "clockpicker-canvas-bg"), F.setAttribute("r", w), L.appendChild(z), L.appendChild(F), L.appendChild(j), N.appendChild(L), q.append(N), this.hand = z, this.bg = F, this.bearing = j, this.g = L, this.canvas = q
    }
    a(this.options.init)
  }

  function a(e) {
    e && "function" == typeof e && e()
  }

  var o = window.jQuery, r = o(window), s = o(document), l = "http://www.w3.org/2000/svg",
    c = "SVGAngle" in window && function () {
        var e, t = document.createElement("div");
        return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == l, t.innerHTML = "", e
      }(), u = function () {
      var e = document.createElement("div").style;
      return "transition" in e || "WebkitTransition" in e || "MozTransition" in e || "msTransition" in e || "OTransition" in e
    }(), d = "ontouchstart" in window, p = "mousedown" + (d ? " touchstart" : ""),
    f = "mousemove.clockpicker" + (d ? " touchmove.clockpicker" : ""),
    h = "mouseup.clockpicker" + (d ? " touchend.clockpicker" : ""),
    v = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null, m = 0, g = 135, y = 105,
    b = 80, w = 20, x = 2 * g, k = u ? 350 : 1,
    C = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__container__wrapper">', '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
  i.DEFAULTS = {
    default: "",
    fromnow: 0,
    donetext: "Ok",
    cleartext: "Clear",
    canceltext: "Cancel",
    autoclose: !1,
    ampmclickable: !0,
    darktheme: !1,
    twelvehour: !0,
    vibrate: !0
  }, i.prototype.toggle = function () {
    this[this.isShown ? "hide" : "show"]()
  }, i.prototype.locate = function () {
    var e = this.element, t = this.popover;
    e.offset(), e.outerWidth(), e.outerHeight(), this.options.align;
    t.show()
  }, i.prototype.show = function (e) {
    if (!this.isShown) {
      a(this.options.beforeShow), o(":input").each(function () {
        o(this).attr("tabindex", -1)
      });
      var n = this;
      this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), o(document.body).css("overflow", "hidden");
      var i = ((this.input.prop("value") || this.options.default || "") + "").split(":");
      if (this.options.twelvehour && void 0 !== i[1] && (i[1].indexOf("AM") > 0 ? this.amOrPm = "AM" : this.amOrPm = "PM", i[1] = i[1].replace("AM", "").replace("PM", "")), "now" === i[0]) {
        var l = new Date(+new Date + this.options.fromnow);
        i = [l.getHours(), l.getMinutes()]
      }
      this.hours = +i[0] || 0, this.minutes = +i[1] || 0, this.spanHours.html(this.hours), this.spanMinutes.html(t(this.minutes)), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && ("PM" === this.amOrPm ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.spanAmPm.children("#click-am").addClass("text-primary"), this.spanAmPm.children("#click-pm").removeClass("text-primary"))), r.on("resize.clockpicker" + this.id, function () {
        n.isShown && n.locate()
      }), this.isAppended = !0), this.toggleView("hours"), this.locate(), this.isShown = !0, s.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function (e) {
        var t = o(e.target);
        0 === t.closest(n.popover.find(".picker__wrap")).length && 0 === t.closest(n.input).length && n.hide()
      }), s.on("keyup.clockpicker." + this.id, function (e) {
        27 === e.keyCode && n.hide()
      }), a(this.options.afterShow)
    }
  }, i.prototype.hide = function () {
    a(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), o(document.body).css("overflow", "visible"), this.isShown = !1, o(":input").each(function (e) {
      o(this).attr("tabindex", e + 1)
    }), s.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), s.off("keyup.clockpicker." + this.id), this.popover.hide(), a(this.options.afterHide)
  }, i.prototype.toggleView = function (e, t) {
    var n = !1;
    "minutes" === e && "visible" === o(this.hoursView).css("visibility") && (a(this.options.beforeHourSelect), n = !0);
    var i = "hours" === e, r = i ? this.hoursView : this.minutesView, s = i ? this.minutesView : this.hoursView;
    this.currentView = e, this.spanHours.toggleClass("text-primary", i), this.spanMinutes.toggleClass("text-primary", !i), s.addClass("clockpicker-dial-out"), r.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(t), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function () {
      s.css("visibility", "hidden")
    }, k), n && a(this.options.afterHourSelect)
  }, i.prototype.resetClock = function (e) {
    var t = this.currentView, n = this[t], i = "hours" === t, a = n * (Math.PI / (i ? 6 : 30)),
      o = i && n > 0 && n < 13 ? b : y, r = Math.sin(a) * o, s = -Math.cos(a) * o, l = this;
    c && e ? (l.canvas.addClass("clockpicker-canvas-out"), setTimeout(function () {
      l.canvas.removeClass("clockpicker-canvas-out"), l.setHand(r, s)
    }, e)) : this.setHand(r, s)
  }, i.prototype.setHand = function (e, n, i, a) {
    var r, s = Math.atan2(e, -n), l = "hours" === this.currentView, u = Math.PI / (l || i ? 6 : 30),
      d = Math.sqrt(e * e + n * n), p = this.options, f = l && d < (y + b) / 2, h = f ? b : y;
    if (p.twelvehour && (h = y), s < 0 && (s = 2 * Math.PI + s), r = Math.round(s / u), s = r * u, p.twelvehour ? l ? 0 === r && (r = 12) : (i && (r *= 5), 60 === r && (r = 0)) : l ? (12 === r && (r = 0), r = f ? 0 === r ? 12 : r : 0 === r ? 0 : r + 12) : (i && (r *= 5), 60 === r && (r = 0)), this[this.currentView] !== r && v && this.options.vibrate && (this.vibrateTimer || (navigator[v](10), this.vibrateTimer = setTimeout(o.proxy(function () {
        this.vibrateTimer = null
      }, this), 100))), this[this.currentView] = r, l ? this.spanHours.html(r) : this.spanMinutes.html(t(r)), c) {
      var m = Math.sin(s) * (h - w), g = -Math.cos(s) * (h - w), x = Math.sin(s) * h, k = -Math.cos(s) * h;
      this.hand.setAttribute("x2", m), this.hand.setAttribute("y2", g), this.bg.setAttribute("cx", x), this.bg.setAttribute("cy", k)
    } else this[l ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function () {
      var e = o(this);
      e.toggleClass("active", r === +e.html())
    })
  }, i.prototype.done = function () {
    a(this.options.beforeDone), this.hide(), this.label.addClass("active");
    var e = this.input.prop("value"), n = t(this.hours) + ":" + t(this.minutes);
    this.options.twelvehour && (n += this.amOrPm), this.input.prop("value", n), n !== e && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), a(this.options.afterDone)
  }, i.prototype.clear = function () {
    this.hide(), this.label.removeClass("active");
    var e = this.input.prop("value");
    this.input.prop("value", ""), "" !== e && (this.input.triggerHandler("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur")
  }, i.prototype.remove = function () {
    this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (r.off("resize.clockpicker" + this.id), this.popover.remove())
  }, o.fn.pickatime = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var n = o(this), a = n.data("clockpicker");
      if (a) "function" == typeof a[e] && a[e].apply(a, t); else {
        var r = o.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        n.data("clockpicker", new i(n, r))
      }
    })
  }
}(), function (e) {
  function t() {
    var t = +e(this).attr("data-length"), n = +e(this).val().length, i = n <= t;
    e(this).parent().find('span[class="character-counter"]').html(n + "/" + t), a(i, e(this))
  }

  function n(t) {
    var n = t.parent().find('span[class="character-counter"]');
    n.length || (n = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), t.parent().append(n))
  }

  function i() {
    e(this).parent().find('span[class="character-counter"]').html("")
  }

  function a(e, t) {
    var n = t.hasClass("invalid");
    e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
  }

  e.fn.characterCounter = function () {
    return this.each(function () {
      var a = e(this);
      a.parent().find('span[class="character-counter"]').length || void 0 !== a.attr("data-length") && (a.on("input", t), a.on("focus", t), a.on("blur", i), n(a))
    })
  }, e(document).ready(function () {
    e("input, textarea").characterCounter()
  })
}(I), function (e) {
  var t = {
    init: function (t) {
      var n = {
        duration: 200,
        dist: -100,
        shift: 0,
        padding: 0,
        fullWidth: !1,
        indicators: !1,
        noWrap: !1,
        onCycleTo: null
      };
      t = e.extend(n, t);
      var i = Materialize.objectSelectorString(e(this));
      return this.each(function (n) {
        function a(e) {
          return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
        }

        function o(e) {
          return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
        }

        function r(e) {
          return e >= C ? e % C : e < 0 ? r(C + e % C) : e
        }

        function s(n) {
          _ = !0, F.hasClass("scrolling") || F.addClass("scrolling"), null != j && window.clearTimeout(j), j = window.setTimeout(function () {
            _ = !1, F.removeClass("scrolling")
          }, t.duration);
          var i, a, o, s, l, c, u, d = w;
          if (b = "number" == typeof n ? n : b, w = Math.floor((b + k / 2) / k), o = b - w * k, s = o < 0 ? 1 : -1, l = -s * o * 2 / k, a = C >> 1, t.fullWidth ? u = "translateX(0)" : (u = "translateX(" + (F[0].clientWidth - m) / 2 + "px) ", u += "translateY(" + (F[0].clientHeight - g) / 2 + "px)"), H) {
            var p = w % C, f = L.find(".indicator-item.active");
            f.index() !== p && (f.removeClass("active"), L.find(".indicator-item").eq(p).addClass("active"))
          }
          for ((!t.noWrap || w >= 0 && w < C) && (c = v[r(w)], e(c).hasClass("active") || (F.find(".carousel-item").removeClass("active"), e(c).addClass("active")), c.style[O] = u + " translateX(" + -o / 2 + "px) translateX(" + s * t.shift * l * i + "px) translateZ(" + t.dist * l + "px)", c.style.zIndex = 0, t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l, c.style.opacity = tweenedOpacity, c.style.display = "block"), i = 1; i <= a; ++i)t.fullWidth ? (zTranslation = t.dist, tweenedOpacity = i === a && o < 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * i + l * s), tweenedOpacity = 1 - .2 * (2 * i + l * s)), (!t.noWrap || w + i < C) && ((c = v[r(w + i)]).style[O] = u + " translateX(" + (t.shift + (k * i - o) / 2) + "px) translateZ(" + zTranslation + "px)", c.style.zIndex = -i, c.style.opacity = tweenedOpacity, c.style.display = "block"), t.fullWidth ? (zTranslation = t.dist, tweenedOpacity = i === a && o > 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * i - l * s), tweenedOpacity = 1 - .2 * (2 * i - l * s)), (!t.noWrap || w - i >= 0) && ((c = v[r(w - i)]).style[O] = u + " translateX(" + (-t.shift + (-k * i - o) / 2) + "px) translateZ(" + zTranslation + "px)", c.style.zIndex = -i, c.style.opacity = tweenedOpacity, c.style.display = "block");
          if ((!t.noWrap || w >= 0 && w < C) && ((c = v[r(w)]).style[O] = u + " translateX(" + -o / 2 + "px) translateX(" + s * t.shift * l + "px) translateZ(" + t.dist * l + "px)", c.style.zIndex = 0, t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l, c.style.opacity = tweenedOpacity, c.style.display = "block"), d !== w && "function" == typeof t.onCycleTo) {
            var h = F.find(".carousel-item").eq(r(w));
            t.onCycleTo.call(this, h, M)
          }
          "function" == typeof z && (z.call(this, h, M), z = null)
        }

        function l() {
          var e, t, n;
          t = (e = Date.now()) - D, D = e, n = b - $, $ = b, P = .8 * (1e3 * n / (1 + t)) + .2 * P
        }

        function c() {
          var e, n;
          A && (e = Date.now() - D, (n = A * Math.exp(-e / t.duration)) > 2 || n < -2 ? (s(E - n), requestAnimationFrame(c)) : s(E))
        }

        function u(n) {
          if (M)return n.preventDefault(), n.stopPropagation(), !1;
          if (!t.fullWidth) {
            var i = e(n.target).closest(".carousel-item").index();
            0 !== r(w) - i && (n.preventDefault(), n.stopPropagation()), d(i)
          }
        }

        function d(e) {
          var n = w % C - e;
          t.noWrap || (n < 0 ? Math.abs(n + C) < Math.abs(n) && (n += C) : n > 0 && Math.abs(n - C) < n && (n -= C)), n < 0 ? F.trigger("carouselNext", [Math.abs(n)]) : n > 0 && F.trigger("carouselPrev", [n])
        }

        function p(e) {
          "mousedown" === e.type && e.preventDefault(), x = !0, M = !1, q = !1, T = a(e), S = o(e), P = A = 0, $ = b, D = Date.now(), clearInterval(I), I = setInterval(l, 100)
        }

        function f(e) {
          var t, n;
          if (x)if (t = a(e), y = o(e), n = T - t, Math.abs(S - y) < 30 && !q) (n > 2 || n < -2) && (M = !0, T = t, s(b + n)); else {
            if (M)return e.preventDefault(), e.stopPropagation(), !1;
            q = !0
          }
          if (M)return e.preventDefault(), e.stopPropagation(), !1
        }

        function h(e) {
          if (x)return x = !1, clearInterval(I), E = b, (P > 10 || P < -10) && (E = b + (A = .9 * P)), E = Math.round(E / k) * k, t.noWrap && (E >= k * (C - 1) ? E = k * (C - 1) : E < 0 && (E = 0)), A = E - b, D = Date.now(), requestAnimationFrame(c), M && (e.preventDefault(), e.stopPropagation()), !1
        }

        var v, m, g, b, w, x, k, C, T, S, A, E, P, _, O, $, D, I, M, q, N = i + n,
          L = e('<ul class="indicators"></ul>'), j = null, z = null, F = e(this),
          H = F.attr("data-indicators") || t.indicators;
        if (t.fullWidth && (t.dist = 0, function () {
            var t = F.find(".carousel-item img").first();
            if (t.length) t.prop("complete") ? F.css("height", t.height()) : t.on("load", function () {
              F.css("height", e(this).height())
            }); else {
              var n = F.find(".carousel-item").first().height();
              F.css("height", n)
            }
          }(), H && F.find(".carousel-fixed-item").addClass("with-indicators")), F.hasClass("initialized"))return e(window).trigger("resize"), e(this).trigger("carouselNext", [1e-6]), !0;
        F.addClass("initialized"), x = !1, b = E = 0, v = [], m = F.find(".carousel-item").first().innerWidth(), g = F.find(".carousel-item").first().innerHeight(), k = 2 * m + t.padding, F.find(".carousel-item").each(function (t) {
          if (v.push(e(this)[0]), H) {
            var n = e('<li class="indicator-item"></li>');
            0 === t && n.addClass("active"), n.click(function (t) {
              t.stopPropagation(), d(e(this).index())
            }), L.append(n)
          }
        }), H && F.append(L), C = v.length, O = "transform", ["webkit", "Moz", "O", "ms"].every(function (e) {
          var t = e + "Transform";
          return void 0 === document.body.style[t] || (O = t, !1)
        }), e(window).off("resize.carousel-" + N).on("resize.carousel-" + N, function () {
          t.fullWidth ? (m = F.find(".carousel-item").first().innerWidth(), g = F.find(".carousel-item").first().innerHeight(), k = 2 * m + t.padding, E = b = 2 * w * m) : s()
        }), function () {
          void 0 !== window.ontouchstart && (F[0].addEventListener("touchstart", p), F[0].addEventListener("touchmove", f), F[0].addEventListener("touchend", h)), F[0].addEventListener("mousedown", p), F[0].addEventListener("mousemove", f), F[0].addEventListener("mouseup", h), F[0].addEventListener("mouseleave", h), F[0].addEventListener("click", u)
        }(), s(b), e(this).on("carouselNext", function (e, t, n) {
          void 0 === t && (t = 1), "function" == typeof n && (z = n), E = k * Math.round(b / k) + k * t, b !== E && (A = E - b, D = Date.now(), requestAnimationFrame(c))
        }), e(this).on("carouselPrev", function (e, t, n) {
          void 0 === t && (t = 1), "function" == typeof n && (z = n), E = k * Math.round(b / k) - k * t, b !== E && (A = E - b, D = Date.now(), requestAnimationFrame(c))
        }), e(this).on("carouselSet", function (e, t, n) {
          void 0 === t && (t = 0), "function" == typeof n && (z = n), d(t)
        })
      })
    }, next: function (t, n) {
      e(this).trigger("carouselNext", [t, n])
    }, prev: function (t, n) {
      e(this).trigger("carouselPrev", [t, n])
    }, set: function (t, n) {
      e(this).trigger("carouselSet", [t, n])
    }
  };
  e.fn.carousel = function (n) {
    return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.carousel") : t.init.apply(this, arguments)
  }
}(I), function (e) {
  var t = {
    init: function (t) {
      return this.each(function () {
        var n = e("#" + e(this).attr("data-activates")), i = (e("body"), e(this)), a = i.parent(".tap-target-wrapper"),
          o = a.find(".tap-target-wave"), r = a.find(".tap-target-origin"), s = i.find(".tap-target-content");
        a.length || (a = i.wrap(e('<div class="tap-target-wrapper"></div>')).parent()), s.length || (s = e('<div class="tap-target-content"></div>'), i.append(s)), o.length || (o = e('<div class="tap-target-wave"></div>'), r.length || ((r = n.clone(!0, !0)).addClass("tap-target-origin"), r.removeAttr("id"), r.removeAttr("style"), o.append(r)), a.append(o));
        var l = function () {
          a.is(".open") && (a.removeClass("open"), r.off("click.tapTarget"), e(document).off("click.tapTarget"), e(window).off("resize.tapTarget"))
        }, c = function () {
          var t = "fixed" === n.css("position");
          if (!t)for (var r = n.parents(), l = 0; l < r.length && !(t = "fixed" == e(r[l]).css("position")); l++);
          var c = n.outerWidth(), u = n.outerHeight(),
            d = t ? n.offset().top - e(document).scrollTop() : n.offset().top,
            p = t ? n.offset().left - e(document).scrollLeft() : n.offset().left, f = e(window).width(),
            h = e(window).height(), v = f / 2, m = h / 2, g = p <= v, y = p > v, b = d <= m, w = d > m,
            x = p >= .25 * f && p <= .75 * f, k = i.outerWidth(), C = i.outerHeight(), T = d + u / 2 - C / 2,
            S = p + c / 2 - k / 2, A = t ? "fixed" : "absolute", E = x ? k : k / 2 + c, P = C / 2, _ = b ? C / 2 : 0,
            O = g && !x ? k / 2 - c : 0, $ = c, D = w ? "bottom" : "top", I = 2 * c, M = I, q = C / 2 - M / 2,
            N = k / 2 - I / 2, L = {};
          L.top = b ? T : "", L.right = y ? f - S - k : "", L.bottom = w ? h - T - C : "", L.left = g ? S : "", L.position = A, a.css(L), s.css({
            width: E,
            height: P,
            top: _,
            right: 0,
            bottom: 0,
            left: O,
            padding: $,
            verticalAlign: D
          }), o.css({ top: q, left: N, width: I, height: M })
        };
        "open" == t && (c(), function () {
          a.is(".open") || (a.addClass("open"), setTimeout(function () {
            r.off("click.tapTarget").on("click.tapTarget", function (e) {
              l(), r.off("click.tapTarget")
            }), e(document).off("click.tapTarget").on("click.tapTarget", function (t) {
              l(), e(document).off("click.tapTarget")
            });
            var t = Materialize.throttle(function () {
              c()
            }, 200);
            e(window).off("resize.tapTarget").on("resize.tapTarget", t)
          }, 0))
        }()), "close" == t && l()
      })
    }, open: function () {
    }, close: function () {
    }
  };
  e.fn.tapTarget = function (n) {
    if (t[n] || "object" == typeof n)return t.init.apply(this, arguments);
    e.error("Method " + n + " does not exist on jQuery.tap-target")
  }
}(I), function (e) {
  e.fn.animatedModal = function (t) {
    function n() {
      l.css({ "z-index": o.zIndexOut });
      var t = e("body").height();
      e("body").height(t + 1), e("body").height(""), o.afterClose()
    }

    function i() {
      o.afterOpen()
    }

    var a = e(this), o = e.extend({
        modalTarget: "animatedModal",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
        zIndexIn: "10",
        zIndexOut: "-10",
        opacityIn: "1",
        opacityOut: "0",
        animatedIn: "zoomIn",
        animatedOut: "zoomOut",
        animationDuration: ".6s",
        overflow: "auto",
        beforeOpen: function () {
        },
        afterOpen: function () {
        },
        beforeClose: function () {
        },
        afterClose: function () {
        }
      }, t), r = e(".close-" + o.modalTarget), s = e(a).attr("href"), l = e("body").find("#" + o.modalTarget),
      c = "#" + l.attr("id");
    l.addClass("animated"), l.addClass(o.modalTarget + "-off");
    var u = {
      position: o.position,
      width: o.width,
      height: o.height,
      top: o.top,
      left: o.left,
      "z-index": o.zIndexOut,
      opacity: o.opacityOut,
      "-webkit-animation-duration": o.animationDuration,
      "-moz-animation-duration": o.animationDuration,
      "-ms-animation-duration": o.animationDuration,
      "animation-duration": o.animationDuration
    };
    l.css(u), a.click(function (e) {
      e.preventDefault(), s == c && (l.hasClass(o.modalTarget + "-off") && (l.removeClass(o.animatedOut), l.removeClass(o.modalTarget + "-off"), l.addClass(o.modalTarget + "-on")), l.hasClass(o.modalTarget + "-on") && (o.beforeOpen(), l.css({
        opacity: o.opacityIn,
        "z-index": o.zIndexIn
      }), l.addClass(o.animatedIn), i()))
    }), r.click(function (e) {
      e.preventDefault(), o.beforeClose(), l.hasClass(o.modalTarget + "-on") && (l.removeClass(o.modalTarget + "-on"), l.addClass(o.modalTarget + "-off")), l.hasClass(o.modalTarget + "-off") && (l.removeClass(o.animatedIn), l.addClass(o.animatedOut), n())
    })
  }
}(I), $(function () {
  var e = ["fee-for-service", "hcpcs-search", "ncci-mue-lookup", "snf-pricer"], t = $("#companyName"), n = $("#intro"),
    o = $("nav"), r = "/" === window.location.pathname.toLowerCase();
  i(), k();
  var s = $("#particles");
  $(window).resize(function () {
    k()
  }), r ? (o.addClass("hidden"), s.css({ visibility: "hidden" }), t.typed({
    strings: ["^750 Turing Inc."],
    typeSpeed: 5,
    backDelay: 2e3,
    callback: function () {
      setTimeout(function () {
        a([["We write software.", "fadeIn", "fadeOut"]])
      }, 600)
    }
  })) : (t.text("Turing Inc."), t.after($("<span class='typed-cursor'>|</span>")), n.text("We write software.")), $(".scrollspy").scrollSpy(), $(".button-collapse").sideNav({
    closeOnClick: !0,
    draggable: !1
  }), $(".pricer .wrapper").removeClass("hide"), $("select").material_select(), $(".pricer button, .pricer input").prop("disabled", !0), $(".dropdown-button").dropdown({ hover: !0 });
  for (var l = 0; l < e.length; ++l) {
    var c = e[l], u = "/" + c, d = "#" + c, p = $("a[href='" + d + "']");
    x(p, c), window.location.pathname.toLowerCase() !== u && window.location.hash.toLowerCase() !== d || p.first().click()
  }
}), $(function () {
  function e() {
    g = !0, i()
  }

  function t() {
    return $("#" + m)
  }

  function n() {
    return "" !== y && y === u.val() && "" !== x && x === v.val()
  }

  function i() {
    n() || P(c, t(), p, a, o, null, l)
  }

  function a() {
    y = u.val(), x = v.val()
  }

  function o(e) {
    var n = t(), i = $("<div id='" + m + "' class='col s12'><h3>Results</h3></div>"),
      a = $("<table class='responsive-table'></table>"), o = $("<thead></thead>"), l = $("<tbody></tbody>"), c = null,
      u = "", p = -1, f = null, h = $("<span class='new badge green lighten-1' data-badge-caption=''></span>");
    if (h.attr("data-badge-caption", 1 === e.Results.length ? "match" : "matches"), h.text(e.Results.length), h.appendTo(i.find("h3")), c = $("<tr></tr>"), $.each(e.Results[0], function (e, t) {
        "Description" !== e && "Module Id" !== e && "Rural Indicator" !== e && $("<th></th>").text(e).appendTo(c)
      }), c.appendTo(o), $.each(e.Results, function (t) {
        c = $("<tr></tr>"), $.each(e.Results[t], function (e, t) {
          "Description" !== e ? "Module Id" !== e ? "Rural Indicator" !== e ? $("<td></td>").text(t).appendTo(c) : f = t : p = t : u = t
        }), c.appendTo(l)
      }), null !== f) {
      var v = "* " + x;
      v += "R" === f ? " is a rural ZIP Code." : "B" === f ? " is a super rural ZIP Code." : " is an urban ZIP Code.";
      var g = $("<p class='flow-text'></p>");
      g.text(v), g.appendTo(i)
    }
    if ("" !== u) {
      var y = $("<blockquote class='flow-text'></blockquote>");
      y.text(u), y.appendTo(i)
    }
    o.appendTo(a), l.appendTo(a), a.appendTo(i), E(i, s).appendTo(i), 0 === n.length ? i.appendTo(d).promise().done(function () {
      r(i)
    }) : n.replaceWith(i).promise().done(function () {
      r(i)
    })
  }

  function s() {
    y = "", x = "", u.val(""), v.val("")
  }

  function l(e) {
    return 404 === e ? "The requested code could not be matched." : "An error occurred. Please try again later."
  }

  var c = $("#fee-for-service form"), u = $("#procedureCode"),
    d = $("#fee-for-service .wrapper .container .row").first(), p = $("#submitFeeSearch"), v = $("#zipcode"),
    m = "resultsContainer", g = !1, y = "", x = "";
  u.blur(function () {
    w($(this), f)
  }), v.blur(function () {
    $(this).val($(this).val().trim().replace(/\D/g, "")), w($(this), h)
  }), v.on("keyup input", function () {
    !1 === $.isNumeric($(this).val()) && $(this).val($(this).val().trim().replace(/\D/g, ""))
  }), p.click(function (t) {
    t.preventDefault(), $(this).blur();
    var n = b(u, f), a = b(v, h);
    return !(!n || !a) && (g ? (i(), !1) : (A(e), !1))
  })
}), $(function () {
  function e() {
    te = !0, u()
  }

  function t(e) {
    var t = Date.parse(e.val()), n = new Date;
    return !isNaN(t) && t >= Q && t <= n
  }

  function n(e) {
    return v(e) || p(e)
  }

  function i() {
    return null != ee.dateOfService && N.val() == ee.dateOfService && null != ee.zipcode && L.val() == ee.zipcode && null != ee.locations && ee.locations.length > 0
  }

  function a() {
    return W.val() == N.val() && V.val() == L.val() && X.val() == $("input[name='snfHivIndicator']:checked").val()
  }

  function s() {
    return $("#" + ne)
  }

  function u() {
    v(L) ? i() ? (d(!1), _().trigger("openModal")) : (ee.dateOfService = N.val(), ee.locations = null, ee.zipcode = L.val(), P(H, null, z, y, f, null, h)) : a() || P(R, s(), z, m, k, null, E)
  }

  function d(e) {
    var t = $("#snfOscarOrZipcode, #" + ne + " input");
    e ? t.removeAttr("disabled") : t.attr("disabled", "disabled")
  }

  function f(e) {
    ee.locations = e.locations, D(), I(), d(!1), _().trigger("openModal")
  }

  function h(e) {
    return 404 === e ? "No facility locations found." : "An error occurred. Please try again later."
  }

  function m() {
    W.val(N.val()), V.val(L.val()), X.val($("input[name='snfHivIndicator']:checked").val())
  }

  function g() {
    var e = _().find("select option:selected");
    W.val(N.val()), V.val(e.val()), X.val($("input[name='snfHivIndicator']:checked").val())
  }

  function y() {
    B.val(N.val()), Y.val(L.val())
  }

  function x(e, t) {
    var n = $("<a class='underlineOnHover' target='_blank' rel='nofollow'></a>"),
      i = e.street + ", " + e.city + ", " + e.state + " " + e.zipcode;
    return n.text(null == t ? i : t), n.attr("href", "https://www.google.com/maps/place/" + i), n
  }

  function k(e) {
    var t = e.result.facilityLocation, n = s(), i = $("<div id='" + ne + "' class='col s12'></div>"),
      a = $("<h5></h5>");
    a.text("" === t.name ? V.val().toUpperCase() : t.name), i.append(a), "" !== t.street && "" !== t.city && "" !== t.state && "" !== t.zipcode && i.append($("<p></p>").append(x(t))), i.append($("<p>Grand Total: $ <span class='grandTotal'>0.00</span></p>")), i.append($("<div class='chipsContainer'></div>"));
    var l = $("<table class='striped'></table>"), u = $("<thead></thead>"), d = $("<tbody></tbody>"), p = null;
    p = $("<tr></tr>"), $("<th>RUG Code</th>").appendTo(p), $("<th>Price</th>").appendTo(p), $("<th>Units</th>").appendTo(p), $("<th>Total</th>").appendTo(p), p.appendTo(u), $.each(e.result.rugCodePriceMap, function (e) {
      p = $("<tr></tr>"), $("<td class='rugCode'></td>").text(e).appendTo(p), $("<td class='price'></td>").text(c(this.toFixed(2))).appendTo(p), $("<td><input class='units' value='' type='tel' maxlength='3' autocomplete='off'></input></td>").appendTo(p), $("<td class='subtotal'></td>").text("0.00").appendTo(p), p.appendTo(d)
    }), u.appendTo(l), d.appendTo(l), l.appendTo(i), 0 === n.length ? i.appendTo(q).promise().done(function () {
      o(i, "zoomIn", function () {
        $("html, body").animate({ scrollTop: i.offset().top }, 400, "linear", function () {
          d.find(".units").first().focus()
        })
      })
    }) : n.replaceWith(i).promise().done(function () {
      r(i)
    }), d.find(".units").on("keyup input", function () {
      C($(this), i)
    })
  }

  function C(e, t) {
    var n = e.parent().siblings(".subtotal"), i = n.text(),
      a = parseFloat(e.parent().siblings(".price").text().replace(/,/g, "")), o = parseInt(e.val()),
      r = $.isNumeric(e.val());
    "" == e.val().trim() ? (e.val(e.val().trim()), n.text("0.00")) : !1 === r ? e.val(e.val().trim().replace(/\D/g, "")) : n.text(r ? c((a * o).toFixed(2)) : "0.00"), i !== n.text() && (T(t), S(t))
  }

  function T(e) {
    for (var t = e.find(".grandTotal"), n = e.find(".subtotal"), i = 0, a = 0; a < n.length; ++a)i += parseFloat($(n[a]).text().trim().replace(/,/g, ""));
    t.text(i > 0 ? c(i.toFixed(2)) : "0.00")
  }

  function S(e) {
    var t = e.find(".chipsContainer"), n = e.find(".units").filter(function (e) {
      return $.isNumeric(this.value) && this.value > 0
    }), i = $("<div class='chipsContainer'></div>");
    $.each(n, function (e) {
      var t = $($(this).parent().siblings(".rugCode")).text() + " <i>(" + this.value + ")</i>";
      i.append($("<div class='chip'>" + t + "<i class='close material-icons'>close</i></div>"))
    }), 0 == t.children().length ? t.replaceWith(i.hide()).promise().done(function () {
      i.slideDown(200)
    }) : 0 == i.children().length ? t.slideUp(200, function () {
      t.replaceWith(i)
    }) : t.replaceWith(i), i.on("click.chips-delete", function (t) {
      var n = $(t.target);
      if (n.hasClass("close")) {
        var i = n.closest(".chip"), a = s().find("td[class='rugCode']").filter(function (e) {
          return $(this).text() == i.text().substring(0, 3)
        }).parent().find(".units");
        a.val(""), C(a, e)
      } else t.stopPropagation()
    })
  }

  function E(e) {
    return 404 === e ? "Provider data not found." : "An error occurred. Please try again later."
  }

  function _() {
    var e = $("#snfFacilityLocation");
    return e.length > 0 ? e : (e = $('<div id="snfFacilityLocation" class="modal modal-fixed-footer">     <div class="modal-content">         <h5>Click the drop down below to select a facility location.</h5>         <div class="input-field col s12">             <select>             </select>         </div>         <div class="address col s12"></div>     </div>     <div class="modal-footer">         <a id="btnSnfSelectFacilityLocation" class="modal-action modal-close waves-effect waves-light btn blue lighten-1" href="#!" disabled>             Select             <i class="material-icons right">room</i>        </a >     </div> </div>'), $("body").append(e), e.find("select").change(function () {
      var t = O(this.value), n = ee.locations;
      if (t >= 0) {
        e.find(".address").html("Medicare Provider# " + l(n[t].oscarId) + "<br />" + l(n[t].street) + "<br />" + l(n[t].city) + ", " + l(n[t].state) + " " + l(n[t].zipcode));
        var i = x(n[t], "Open in Google Maps");
        e.find(".address").append($("<p></p>").append(i)), $("#btnSnfSelectFacilityLocation").removeAttr("disabled")
      }
    }), e.find("#btnSnfSelectFacilityLocation").click(function (e) {
      return e.preventDefault(), !1
    }), e.modal({
      dismissible: !0,
      opacity: .5,
      inDuration: 300,
      outDuration: 200,
      startingTop: "4%",
      endingTop: "10%",
      complete: function () {
        d(!0);
        var e = _().find("select option:selected"), t = W.val() == N.val(),
          n = X.val() == $("input[name='snfHivIndicator']:checked").val(), i = V.val() == e.val();
        "" != e.val().trim() && (t && n && i || P(R, s(), z, g, k, null, E))
      }
    }), e)
  }

  function O(e) {
    for (var t = 0; t < ee.locations.length; ++t)if (ee.locations[t].oscarId == e)return t;
    return -1
  }

  function D() {
    var e = _(), t = e.find("select");
    e.find(".address").empty(), t.empty(), t.append($("<option value='' disabled selected>Select facility location...</option>")), $.each(ee.locations, function (e) {
      var n = $("<option></option>");
      n.attr("value", this.oscarId), n.text(this.name), t.append(n)
    }), t.material_select(), t.parent().find("input").css("user-select", "none"), $("#btnSnfSelectFacilityLocation").attr("disabled", "disabled")
  }

  function I() {
    var e = $("<span class='new badge green lighten-1' data-badge-caption=''></span>");
    e.attr("data-badge-caption", 1 === ee.locations.length ? "result" : "results"), e.text(ee.locations.length);
    var t = _();
    t.find("h5 span").remove(), e.appendTo(t.find("h5"))
  }

  var M = $("#snf-pricer"), q = $("#snf-pricer .wrapper .container .row").first(), N = $("#snfDateOfService"),
    L = $("#snfOscarOrZipcode"), j = $("#snfHivFalse"), z = $("#submitSnfSearch"), F = null,
    H = $("#frmGetFacilityLocations"), R = $("#frmRunSnfPricer"), W = $("#frmRunSnfPricer input[name='dateOfService']"),
    V = $("#frmRunSnfPricer input[name='oscarId']"), X = $("#frmRunSnfPricer input[name='isHivPositive']"),
    B = $("#frmGetFacilityLocations input[name='dateOfService']"),
    Y = $("#frmGetFacilityLocations input[name='zipcode']"), Q = new Date(1998, 6, 1), U = new Date(2004, 9, 1),
    G = null, Z = null, J = null, K = null, ee = { dateOfService: null, locations: null, zipcode: null }, te = !1,
    ne = "resultsContainerSnf";
  N.blur(function () {
    w($(this), t)
  }), L.blur(function () {
    w($(this), n)
  }), L.keypress(function (e) {
    13 === e.which && ($(this).blur(), z.click())
  }), z.click(function (i) {
    i.preventDefault(), $(this).blur();
    var a = b(N, t), o = b(L, n);
    return !(!a || !o) && (te ? (u(), !1) : (A(e), !1))
  }), N.pickadate({
    selectYears: 100, selectMonths: !0, min: Q, max: !0, clear: "", onClose: function () {
      Materialize.updateTextFields(), this.get().length > 0 && L.focus()
    }
  });
  var ie = function () {
    F.off("set"), F.set("select", F.get("highlight").obj);
    var e = F.get("select").obj >= U, t = $("input[name='snfHivIndicator']").siblings();
    e ? t.show() : t.hide(), F.on("set", ie)
  };
  (F = N.pickadate("picker")).set("select", F.get("max")), F.on("set", ie), function () {
    G = $(" <div class='fixed-action-btn click-to-toggle fabResultsScrubber'> \t<a class='btn-floating btn-large waves-effect waves-light blue lighten-1'> \t\t<i class='material-icons'>more_horiz</i> \t</a> \t<ul> \t\t<li> \t\t\t<a class='btn-floating waves-effect waves-light red lighten-1'> \t\t\t\t<i class='material-icons'>delete</i> \t\t\t</a> \t\t</li> \t\t<li> \t\t\t<a class='btn-floating waves-effect waves-light green lighten-1'> \t\t\t\t<i class='material-icons'>keyboard_arrow_up</i> \t\t\t</a> \t\t</li> \t\t<li> \t\t\t<a class='btn-floating waves-effect waves-light green lighten-1'> \t\t\t\t<i class='material-icons'>keyboard_arrow_down</i> \t\t\t</a> \t\t</li> \t</ul> </div>"), Z = G.find("i:contains('keyboard_arrow_up')").parent(), J = G.find("i:contains('keyboard_arrow_down')").parent(), K = G.find("i:contains('delete')").parent(), $(window).on("scroll resize", function () {
      var e = $(this), t = G.is(":visible"),
        n = z.is(":visible") && e.scrollTop() > z.offset().top && M[0].style.zIndex > 0;
      n && !t ? G.fadeIn() : !n && t && G.fadeOut()
    }), Z.click(function () {
      G.closeFAB();
      var e = s(), t = Math.abs($(document).scrollTop() - parseInt(e.offset().top));
      $("html, body").animate({ scrollTop: e.offset().top }), t <= 100 && o(e, "bounce")
    }), J.click(function () {
      G.closeFAB();
      var e = s(), t = Math.abs($(document).scrollTop() + $(window).height() - $(document).height());
      $("html, body").animate({ scrollTop: $(document).height() }), t <= 100 && o(e, "bounce")
    }), K.click(function () {
      G.closeFAB(), F.set("select", F.get("max")), L.val(""), W.val(""), V.val(""), j.prop("checked", !0), Materialize.updateTextFields(), $("html, body").animate({ scrollTop: 0 });
      var e = s();
      o(e, "zoomOut", function () {
        e.remove()
      })
    }), $(document.body).append(G)
  }()
}), $(function () {
  function e() {
    m = !0, i()
  }

  function t() {
    return $("#" + v)
  }

  function n() {
    return "" !== h && h === u.val()
  }

  function i() {
    n() || P(c, t(), p, a, o, null, l)
  }

  function a() {
    h = u.val()
  }

  function o(e) {
    var n = t(), i = $("<div id='" + v + "' class='col s12'><h3>Edits</h3></div>"),
      a = $("<table class='responsive-table'></table>"), o = $("<thead></thead>"), l = $("<tbody></tbody>"), c = null,
      u = "";
    if (c = $("<tr></tr>"), $.each(e.Edits[0], function (e, t) {
        "Description" !== e && $("<th></th>").text(e).appendTo(c)
      }), c.appendTo(o), $.each(e.Edits, function (t) {
        c = $("<tr></tr>"), $.each(e.Edits[t], function (e, t) {
          "Description" !== e ? $("<td></td>").text(t).appendTo(c) : u = t
        }), c.appendTo(l)
      }), "" !== u) {
      var p = $("<blockquote class='flow-text'></blockquote>");
      p.text(u), p.appendTo(i)
    }
    o.appendTo(a), l.appendTo(a), a.appendTo(i), E(i, s).appendTo(i), 0 === n.length ? i.appendTo(d).promise().done(function () {
      r(i)
    }) : n.replaceWith(i).promise().done(function () {
      r(i)
    })
  }

  function s() {
    h = "", u.val("")
  }

  function l(e) {
    return 404 === e ? "The requested code could not be matched." : "An error occurred. Please try again later."
  }

  var c = $("#frmGetMedicallyUnlikelyEdits"), u = $("#mueProcedureCode"),
    d = $("#ncci-mue-lookup .wrapper .container .row").first(), p = $("#submitMueSearch"), h = "",
    v = "resultsContainerMue", m = !1;
  u.blur(function () {
    w($(this), f)
  }), p.click(function (t) {
    return t.preventDefault(), $(this).blur(), !!b(u, f) && (m ? (i(), !1) : (A(e), !1))
  })
}), $(function () {
  function e() {
    z = !0, a()
  }

  function t() {
    return $("#" + L)
  }

  function n() {
    if (i())return !1;
    var e = g();
    return null === e || e === M
  }

  function i() {
    return null === j || j !== T.val().trim()
  }

  function a() {
    n() || (i() && C.val("1"), P(x, t(), S, o, u, null, b))
  }

  function o() {
    j = T.val().trim(), M = 1, q = 0, N = 0, t().find(".tooltipped").tooltip("remove")
  }

  function u(e) {
    M = e.CurrentPage, q = e.TotalPageCount, N = e.TotalResultCount;
    var n = t(), i = $("<div id='" + L + "' class='col s12'></div>"),
      a = $("<ul class='collapsible' data-collapsible='expandable'></ul>");
    i.prepend($("<div class='clearfix'></div>")), i.append($("<h3>Results</h3>").append(d())), $.each(e.Results, function (t) {
      var n = p(e.Results[t]), i = f(e.Results[t]), o = $("<li></li>").append(n).append(i);
      a.append(o)
    }), i.append(a), q > 1 && (i.append(m()), i.append($("<div class='clearfix'></div>"))), E(i, y).appendTo(i), a.collapsible(), 0 === n.length ? i.appendTo(k).promise().done(function () {
      r(i), a.collapsible("open", 0)
    }) : n.replaceWith(i).promise().done(function () {
      r(i), a.collapsible("open", 0)
    })
  }

  function d() {
    var e = $("<span class='new badge green lighten-1' data-badge-caption=''></span>");
    return e.attr("data-badge-caption", 1 === N ? "hit" : "hits"), e.text(c(N)), e
  }

  function p(e) {
    var t = $("<div class='collapsible-header truncate'></div>");
    return t.html("<span class='code'>" + w(e.Code) + "</span><span class='grey-text'>|</span><span class='shortDescription'>" + w(e.ShortDescription) + "</span>"), t
  }

  function f(e) {
    var t = $("<div class='collapsible-body'></div>");
    return t.append($("<div></div>").html(w(e.LongDescription))), t.append(h(e)), t
  }

  function h(e) {
    var t = $("<div class='table'></div>");
    return $.each(e.Groups, function (n) {
      $.each(e.Groups[n], function (e, n) {
        var i = $("<div class='table-row'></div>"), a = $("<div class='table-cell right-align'></div>"),
          o = $("<div class='table-cell padding grey-text'>=</div>"), r = $("<div class='table-cell'></div>");
        if ("object" == typeof n) {
          var s = $("<a class='tooltipped underlineOnHover' href='#'></a>");
          s.text(e), s.attr("data-tooltip", v(n.Tooltip)), s.tooltip({ delay: 50, html: !0 }), s.click(function (e) {
            return e.preventDefault(), !1
          }), a.append(s), r.html(w(n.Value))
        } else a.addClass("grey-text"), a.text(e), r.html(w(n));
        i.append(a), i.append(o), i.append(r), t.append(i)
      })
    }), t
  }

  function v(e) {
    var t = $("<div class='hcpcs left-align'></div>").text(e.Header), n = $("<div class='hcpcs table'></div>");
    return t.append(n), $.each(e.Tips, function (t) {
      var i = e.Tips[t], a = i.indexOf("="), o = i.substring(0, a).trim(), r = i.substring(a + 1).trim(),
        s = $("<div class='hcpcs table-row'></div>");
      s.append($("<div class='hcpcs table-cell right-align'></div>").text(o)), s.append($("<div class='hcpcs table-cell center-align padding'>=</div>")), s.append($("<div class='hcpcs table-cell left-align'></div>").text(r)), n.append(s)
    }), t[0].outerHTML
  }

  function m() {
    var e = $("<div class='pager right'></div>"),
      t = $("<a class='btn-flat waves-effect waves-light' href='#'><i class='material-icons'>chevron_left</i></a>"),
      i = $("<span class='labelColor totalPageCount'>Page</span>"),
      o = $("<a class='btn-flat waves-effect waves-light' href='#'><i class='material-icons'>chevron_right</i></a>"),
      r = $("<div class='input-field inline'></div>"),
      c = $("<input id='hcpcsSearchPageNumber' name='currentPage' type='tel' maxlength='3' autocomplete='off' />"),
      u = $("<span class='totalPageCount'></span>");
    return e.append(t), e.append(i), e.append(r), e.append(o), r.append(c), r.append(u), c.val(M), u.html("<span class='labelColor'>/ </span>" + l(q)), 1 === M ? t.addClass("disabled") : t.click(function (e) {
      e.preventDefault();
      var t = parseInt(c.val());
      return t = t === M && t > 1 ? t - 1 : t, c.val(t), C.val(t), s(), a(), !1
    }), M === q ? o.addClass("disabled") : o.click(function (e) {
      e.preventDefault();
      var t = parseInt(c.val());
      return t = t === M && t < q ? t + 1 : t, c.val(t), C.val(t), s(), a(), !1
    }), c.focus(function () {
      i.addClass("highlight")
    }), c.blur(function () {
      i.removeClass("highlight"), $(this).val($(this).val().trim().replace(/\D/g, ""));
      var e = $(this).val(), t = $.isNumeric(e), n = parseInt(e);
      "" === e || t && (n <= 0 || n > q) ? $(this).val(M) : t && C.val(e)
    }), c.on("input", function () {
      !1 === $.isNumeric($(this).val()) && $(this).val($(this).val().trim().replace(/\D/g, ""))
    }), c.keypress(function (e) {
      !1 === $.isNumeric($(this).val()) && $(this).val($(this).val().trim().replace(/\D/g, ""));
      var t = $(this).val(), i = $.isNumeric(t), o = parseInt(t), r = 13 === e.which && i && !n();
      r && (o <= 0 || o > q) ? $(this).val(M) : r && ($(this).blur(), C.val(t), s(), a())
    }), e
  }

  function g() {
    var e = t().find(".pager input");
    return $.isNumeric(e.val()) ? parseInt(e.val()) : null
  }

  function y() {
    j = null, T.val(""), t().find(".tooltipped").tooltip("remove")
  }

  function b(e) {
    return 404 === e ? "No results found for the given search text." : "An error occurred. Please try again later."
  }

  function w(e) {
    var t = l(e);
    return t = t.replace(D, _), t = t.replace(I, O)
  }

  var x = $("#frmHcpcsSearch"), k = $("#hcpcs-search .wrapper .container .row").first(),
    C = x.find("input[name='currentPage']"), T = $("#hcpcsSearchText"), S = $("#submitHcpcsSearch"), _ = "<b>",
    O = "</b>", D = new RegExp(l(_), "g"), I = new RegExp(l(O), "g"), M = 0, q = 0, N = 0,
    L = "resultsContainerHcpcsSearch", j = null, z = !1;
  S.click(function (t) {
    return t.preventDefault(), $(this).blur(), z ? (a(), !1) : (A(e), !1)
  })
}), $(function () {
  function e(e) {
    $("#email").val(""), $("#message").val(""), Materialize.updateTextFields(), $("#message").css("height", "")
  }

  function t() {
    return "Thanks for your message."
  }

  function n(e) {
    return "An error occurred. Please try again later."
  }

  $("#email").blur(function () {
    w($(this), u)
  }), $("#message").blur(function () {
    w($(this), d)
  }), $("#submitEmail").click(function (i) {
    i.preventDefault(), $(this).blur();
    var a = b($("#email"), u), o = b($("#message"), d);
    if (!a || !o)return !1;
    P($("#contact form"), null, $("#submitEmail"), null, e, t, n)
  })
});