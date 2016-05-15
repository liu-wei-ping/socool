/*
 * ! Video.js v4.3.0 Copyright 2013 Brightcove, Inc.
 * https://github.com/videojs/video.js/blob/master/LICENSE
 */(function() {
	var b = void 0, f = !0, h = null, l = !1;
	function m() {
		return function() {
		}
	}
	function p(a) {
		return function() {
			return this[a]
		}
	}
	function s(a) {
		return function() {
			return a
		}
	}
	var t;
	document.createElement("video");
	document.createElement("audio");
	document.createElement("track");
	function u(a, c, d) {
		if ("string" === typeof a) {
			0 === a.indexOf("#") && (a = a.slice(1));
			if (u.xa[a])
				return u.xa[a];
			a = u.w(a)
		}
		if (!a || !a.nodeName)
			throw new TypeError("The element or ID supplied is not valid. (videojs)");
		return a.player || new u.s(a, c, d)
	}
	var v = u;
	window.Td = window.Ud = u;
	u.Tb = "4.3";
	u.Fc = "https:" == document.location.protocol ? "https://" : "http://";
	u.options = {
		techOrder : ["html5", "flash"],
		html5 : {},
		flash : {},
		width : 300,
		height : 150,
		defaultVolume : 0,
		children : {
			mediaLoader : {},
			posterImage : {},
			textTrackDisplay : {},
			loadingSpinner : {},
			bigPlayButton : {},
			controlBar : {}
		},
		notSupportedMessage : 'Sorry, no compatible source and playback technology were found for this video. Try using another browser like <a href="http://bit.ly/ccMUEC">Chrome</a> or download the latest <a href="http://adobe.ly/mwfN1">Adobe Flash Player</a>.'
	};
	"GENERATED_CDN_VSN" !== u.Tb
			&& (v.options.flash.swf = u.Fc + "vjs.zencdn.net/" + u.Tb
					+ "/video-js.swf");
	u.xa = {};
	u.la = u.CoreObject = m();
	u.la.extend = function(a) {
		var c, d;
		a = a || {};
		c = a.init || a.i || this.prototype.init || this.prototype.i || m();
		d = function() {
			c.apply(this, arguments)
		};
		d.prototype = u.k.create(this.prototype);
		d.prototype.constructor = d;
		d.extend = u.la.extend;
		d.create = u.la.create;
		for (var e in a)
			a.hasOwnProperty(e) && (d.prototype[e] = a[e]);
		return d
	};
	u.la.create = function() {
		var a = u.k.create(this.prototype);
		this.apply(a, arguments);
		return a
	};
	u.d = function(a, c, d) {
		var e = u.getData(a);
		e.z || (e.z = {});
		e.z[c] || (e.z[c] = []);
		d.t || (d.t = u.t++);
		e.z[c].push(d);
		e.W || (e.disabled = l, e.W = function(c) {
			if (!e.disabled) {
				c = u.kc(c);
				var d = e.z[c.type];
				if (d)
					for (var d = d.slice(0), k = 0, q = d.length; k < q
							&& !c.pc(); k++)
						d[k].call(a, c)
			}
		});
		1 == e.z[c].length
				&& (document.addEventListener
						? a.addEventListener(c, e.W, l)
						: document.attachEvent && a.attachEvent("on" + c, e.W))
	};
	u.o = function(a, c, d) {
		if (u.oc(a)) {
			var e = u.getData(a);
			if (e.z)
				if (c) {
					var g = e.z[c];
					if (g) {
						if (d) {
							if (d.t)
								for (e = 0; e < g.length; e++)
									g[e].t === d.t && g.splice(e--, 1)
						} else
							e.z[c] = [];
						u.gc(a, c)
					}
				} else
					for (g in e.z)
						c = g, e.z[c] = [], u.gc(a, c)
		}
	};
	u.gc = function(a, c) {
		var d = u.getData(a);
		0 === d.z[c].length
				&& (delete d.z[c], document.removeEventListener ? a
						.removeEventListener(c, d.W, l) : document.detachEvent
						&& a.detachEvent("on" + c, d.W));
		u.Bb(d.z) && (delete d.z, delete d.W, delete d.disabled);
		u.Bb(d) && u.vc(a)
	};
	u.kc = function(a) {
		function c() {
			return f
		}
		function d() {
			return l
		}
		if (!a || !a.Cb) {
			var e = a || window.event;
			a = {};
			for (var g in e)
				"layerX" !== g && "layerY" !== g && (a[g] = e[g]);
			a.target || (a.target = a.srcElement || document);
			a.relatedTarget = a.fromElement === a.target
					? a.toElement
					: a.fromElement;
			a.preventDefault = function() {
				e.preventDefault && e.preventDefault();
				a.returnValue = l;
				a.Ab = c
			};
			a.Ab = d;
			a.stopPropagation = function() {
				e.stopPropagation && e.stopPropagation();
				a.cancelBubble = f;
				a.Cb = c
			};
			a.Cb = d;
			a.stopImmediatePropagation = function() {
				e.stopImmediatePropagation && e.stopImmediatePropagation();
				a.pc = c;
				a.stopPropagation()
			};
			a.pc = d;
			if (a.clientX != h) {
				g = document.documentElement;
				var j = document.body;
				a.pageX = a.clientX
						+ (g && g.scrollLeft || j && j.scrollLeft || 0)
						- (g && g.clientLeft || j && j.clientLeft || 0);
				a.pageY = a.clientY
						+ (g && g.scrollTop || j && j.scrollTop || 0)
						- (g && g.clientTop || j && j.clientTop || 0)
			}
			a.which = a.charCode || a.keyCode;
			a.button != h
					&& (a.button = a.button & 1 ? 0 : a.button & 4
							? 1
							: a.button & 2 ? 2 : 0)
		}
		return a
	};
	u.j = function(a, c) {
		var d = u.oc(a) ? u.getData(a) : {}, e = a.parentNode
				|| a.ownerDocument;
		"string" === typeof c && (c = {
			type : c,
			target : a
		});
		c = u.kc(c);
		d.W && d.W.call(a, c);
		if (e && !c.Cb() && c.bubbles !== l)
			u.j(e, c);
		else if (!e && !c.Ab() && (d = u.getData(c.target), c.target[c.type])) {
			d.disabled = f;
			if ("function" === typeof c.target[c.type])
				c.target[c.type]();
			d.disabled = l
		}
		return !c.Ab()
	};
	u.U = function(a, c, d) {
		function e() {
			u.o(a, c, e);
			d.apply(this, arguments)
		}
		e.t = d.t = d.t || u.t++;
		u.d(a, c, e)
	};
	var w = Object.prototype.hasOwnProperty;
	u.e = function(a, c) {
		var d, e;
		d = document.createElement(a || "div");
		for (e in c)
			w.call(c, e)
					&& (-1 !== e.indexOf("aria-") || "role" == e ? d
							.setAttribute(e, c[e]) : d[e] = c[e]);
		return d
	};
	u.$ = function(a) {
		return a.charAt(0).toUpperCase() + a.slice(1)
	};
	u.k = {};
	u.k.create = Object.create || function(a) {
		function c() {
		}
		c.prototype = a;
		return new c
	};
	u.k.ua = function(a, c, d) {
		for (var e in a)
			w.call(a, e) && c.call(d || this, e, a[e])
	};
	u.k.B = function(a, c) {
		if (!c)
			return a;
		for (var d in c)
			w.call(c, d) && (a[d] = c[d]);
		return a
	};
	u.k.ic = function(a, c) {
		var d, e, g;
		a = u.k.copy(a);
		for (d in c)
			w.call(c, d)
					&& (e = a[d], g = c[d], a[d] = u.k.qc(e) && u.k.qc(g) ? u.k
							.ic(e, g) : c[d]);
		return a
	};
	u.k.copy = function(a) {
		return u.k.B({}, a)
	};
	u.k.qc = function(a) {
		return !!a && "object" === typeof a
				&& "[object Object]" === a.toString()
				&& a.constructor === Object
	};
	u.bind = function(a, c, d) {
		function e() {
			return c.apply(a, arguments)
		}
		c.t || (c.t = u.t++);
		e.t = d ? d + "_" + c.t : c.t;
		return e
	};
	u.ra = {};
	u.t = 1;
	u.expando = "vdata" + (new Date).getTime();
	u.getData = function(a) {
		var c = a[u.expando];
		c || (c = a[u.expando] = u.t++, u.ra[c] = {});
		return u.ra[c]
	};
	u.oc = function(a) {
		a = a[u.expando];
		return !(!a || u.Bb(u.ra[a]))
	};
	u.vc = function(a) {
		var c = a[u.expando];
		if (c) {
			delete u.ra[c];
			try {
				delete a[u.expando]
			} catch (d) {
				a.removeAttribute
						? a.removeAttribute(u.expando)
						: a[u.expando] = h
			}
		}
	};
	u.Bb = function(a) {
		for (var c in a)
			if (a[c] !== h)
				return l;
		return f
	};
	u.n = function(a, c) {
		-1 == (" " + a.className + " ").indexOf(" " + c + " ")
				&& (a.className = "" === a.className ? c : a.className + " "
						+ c)
	};
	u.u = function(a, c) {
		var d, e;
		if (-1 != a.className.indexOf(c)) {
			d = a.className.split(" ");
			for (e = d.length - 1; 0 <= e; e--)
				d[e] === c && d.splice(e, 1);
			a.className = d.join(" ")
		}
	};
	u.na = u.e("video");
	u.F = navigator.userAgent;
	u.Mc = /iPhone/i.test(u.F);
	u.Lc = /iPad/i.test(u.F);
	u.Nc = /iPod/i.test(u.F);
	u.Kc = u.Mc || u.Lc || u.Nc;
	var aa = u, x;
	var y = u.F.match(/OS (\d+)_/i);
	x = y && y[1] ? y[1] : b;
	aa.Fd = x;
	u.Ic = /Android/i.test(u.F);
	var ba = u, z;
	var A = u.F.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i), B, C;
	A ? (B = A[1] && parseFloat(A[1]), C = A[2] && parseFloat(A[2]), z = B && C
			? parseFloat(A[1] + "." + A[2])
			: B ? B : h) : z = h;
	ba.Gc = z;
	u.Oc = u.Ic && /webkit/i.test(u.F) && 2.3 > u.Gc;
	u.Jc = /Firefox/i.test(u.F);
	u.Gd = /Chrome/i.test(u.F);
	u.ac = !!("ontouchstart" in window || window.Hc
			&& document instanceof window.Hc);
	u.xb = function(a) {
		var c, d, e, g;
		c = {};
		if (a && a.attributes && 0 < a.attributes.length) {
			d = a.attributes;
			for (var j = d.length - 1; 0 <= j; j--) {
				e = d[j].name;
				g = d[j].value;
				if ("boolean" === typeof a[e]
						|| -1 !== ",autoplay,controls,loop,muted,default,"
								.indexOf("," + e + ","))
					g = g !== h ? f : l;
				c[e] = g
			}
		}
		return c
	};
	u.Kd = function(a, c) {
		var d = "";
		document.defaultView && document.defaultView.getComputedStyle
				? d = document.defaultView.getComputedStyle(a, "")
						.getPropertyValue(c)
				: a.currentStyle
						&& (d = a["client" + c.substr(0, 1).toUpperCase()
								+ c.substr(1)]
								+ "px");
		return d
	};
	u.zb = function(a, c) {
		c.firstChild ? c.insertBefore(a, c.firstChild) : c.appendChild(a)
	};
	u.Pb = {};
	u.w = function(a) {
		0 === a.indexOf("#") && (a = a.slice(1));
		return document.getElementById(a)
	};
	u.La = function(a, c) {
		c = c || a;
		var d = Math.floor(a % 60), e = Math.floor(a / 60 % 60), g = Math
				.floor(a / 3600), j = Math.floor(c / 60 % 60), k = Math.floor(c
				/ 3600);
		if (isNaN(a) || Infinity === a)
			g = e = d = "-";
		g = 0 < g || 0 < k ? g + ":" : "";
		return g + (((g || 10 <= j) && 10 > e ? "0" + e : e) + ":")
				+ (10 > d ? "0" + d : d)
	};
	u.Tc = function() {
		document.body.focus();
		document.onselectstart = s(l)
	};
	u.Bd = function() {
		document.onselectstart = s(f)
	};
	u.trim = function(a) {
		return (a + "").replace(/^\s+|\s+$/g, "")
	};
	u.round = function(a, c) {
		c || (c = 0);
		return Math.round(a * Math.pow(10, c)) / Math.pow(10, c)
	};
	u.tb = function(a, c) {
		return {
			length : 1,
			start : function() {
				return a
			},
			end : function() {
				return c
			}
		}
	};
	u.get = function(a, c, d) {
		var e, g;
		"undefined" === typeof XMLHttpRequest
				&& (window.XMLHttpRequest = function() {
					try {
						return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
					} catch (a) {
					}
					try {
						return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
					} catch (c) {
					}
					try {
						return new window.ActiveXObject("Msxml2.XMLHTTP")
					} catch (d) {
					}
					throw Error("This browser does not support XMLHttpRequest.");
				});
		g = new XMLHttpRequest;
		try {
			g.open("GET", a)
		} catch (j) {
			d(j)
		}
		e = 0 === a.indexOf("file:")
				|| 0 === window.location.href.indexOf("file:")
				&& -1 === a.indexOf("http");
		g.onreadystatechange = function() {
			4 === g.readyState
					&& (200 === g.status || e && 0 === g.status
							? c(g.responseText)
							: d && d())
		};
		try {
			g.send()
		} catch (k) {
			d && d(k)
		}
	};
	u.td = function(a) {
		try {
			var c = window.localStorage || l;
			c && (c.volume = a)
		} catch (d) {
			22 == d.code || 1014 == d.code ? u.log(
					"LocalStorage Full (VideoJS)", d) : 18 == d.code ? u.log(
					"LocalStorage not allowed (VideoJS)", d) : u.log(
					"LocalStorage Error (VideoJS)", d)
		}
	};
	u.mc = function(a) {
		a.match(/^https?:\/\//) || (a = u.e("div", {
					innerHTML : '<a href="' + a + '">x</a>'
				}).firstChild.href);
		return a
	};
	u.log = function() {
		u.log.history = u.log.history || [];
		u.log.history.push(arguments);
		window.console
				&& window.console.log(Array.prototype.slice.call(arguments))
	};
	u.ad = function(a) {
		var c, d;
		a.getBoundingClientRect && a.parentNode
				&& (c = a.getBoundingClientRect());
		if (!c)
			return {
				left : 0,
				top : 0
			};
		a = document.documentElement;
		d = document.body;
		return {
			left : c.left + (window.pageXOffset || d.scrollLeft)
					- (a.clientLeft || d.clientLeft || 0),
			top : c.top + (window.pageYOffset || d.scrollTop)
					- (a.clientTop || d.clientTop || 0)
		}
	};
	u.c = u.la.extend({
				i : function(a, c, d) {
					this.b = a;
					this.g = u.k.copy(this.g);
					c = this.options(c);
					this.Q = c.id
							|| (c.el && c.el.id ? c.el.id : a.id()
									+ "_component_" + u.t++);
					this.gd = c.name || h;
					this.a = c.el || this.e();
					this.G = [];
					this.qb = {};
					this.V = {};
					if ((a = this.g) && a.children) {
						var e = this;
						u.k.ua(a.children, function(a, c) {
									c !== l && !c.loadEvent
											&& (e[a] = e.Z(a, c))
								})
					}
					this.L(d)
				}
			});
	t = u.c.prototype;
	t.D = function() {
		this.j("dispose");
		if (this.G)
			for (var a = this.G.length - 1; 0 <= a; a--)
				this.G[a].D && this.G[a].D();
		this.V = this.qb = this.G = h;
		this.o();
		this.a.parentNode && this.a.parentNode.removeChild(this.a);
		u.vc(this.a);
		this.a = h
	};
	t.b = f;
	t.K = p("b");
	t.options = function(a) {
		return a === b ? this.g : this.g = u.k.ic(this.g, a)
	};
	t.e = function(a, c) {
		return u.e(a, c)
	};
	t.w = p("a");
	t.id = p("Q");
	t.name = p("gd");
	t.children = p("G");
	t.Z = function(a, c) {
		var d, e;
		"string" === typeof a ? (e = a, c = c || {}, d = c.componentClass
				|| u.$(e), c.name = e, d = new window.videojs[d](
				this.b || this, c)) : d = a;
		this.G.push(d);
		"function" === typeof d.id && (this.qb[d.id()] = d);
		(e = e || d.name && d.name()) && (this.V[e] = d);
		"function" === typeof d.el && d.el()
				&& (this.sa || this.a).appendChild(d.el());
		return d
	};
	t.removeChild = function(a) {
		"string" === typeof a && (a = this.V[a]);
		if (a && this.G) {
			for (var c = l, d = this.G.length - 1; 0 <= d; d--)
				if (this.G[d] === a) {
					c = f;
					this.G.splice(d, 1);
					break
				}
			c
					&& (this.qb[a.id] = h, this.V[a.name] = h, (c = a.w())
							&& c.parentNode === (this.sa || this.a)
							&& (this.sa || this.a).removeChild(a.w()))
		}
	};
	t.T = s("");
	t.d = function(a, c) {
		u.d(this.a, a, u.bind(this, c));
		return this
	};
	t.o = function(a, c) {
		u.o(this.a, a, c);
		return this
	};
	t.U = function(a, c) {
		u.U(this.a, a, u.bind(this, c));
		return this
	};
	t.j = function(a, c) {
		u.j(this.a, a, c);
		return this
	};
	t.L = function(a) {
		a
				&& (this.aa
						? a.call(this)
						: (this.Sa === b && (this.Sa = []), this.Sa.push(a)));
		return this
	};
	t.Ua = function() {
		this.aa = f;
		var a = this.Sa;
		if (a && 0 < a.length) {
			for (var c = 0, d = a.length; c < d; c++)
				a[c].call(this);
			this.Sa = [];
			this.j("ready")
		}
	};
	t.n = function(a) {
		u.n(this.a, a);
		return this
	};
	t.u = function(a) {
		u.u(this.a, a);
		return this
	};
	t.show = function() {
		this.a.style.display = "block";
		return this
	};
	t.C = function() {
		this.a.style.display = "none";
		return this
	};
	function D(a) {
		a.u("vjs-lock-showing")
	}
	t.disable = function() {
		this.C();
		this.show = m()
	};
	t.width = function(a, c) {
		return E(this, "width", a, c)
	};
	t.height = function(a, c) {
		return E(this, "height", a, c)
	};
	t.Xc = function(a, c) {
		return this.width(a, f).height(c)
	};
	function E(a, c, d, e) {
		if (d !== b)
			return a.a.style[c] = -1 !== ("" + d).indexOf("%")
					|| -1 !== ("" + d).indexOf("px") ? d : "auto" === d
					? ""
					: d + "px", e || a.j("resize"), a;
		if (!a.a)
			return 0;
		d = a.a.style[c];
		e = d.indexOf("px");
		return -1 !== e ? parseInt(d.slice(0, e), 10) : parseInt(a.a["offset"
						+ u.$(c)], 10)
	}
	u.q = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c);
					var d = l;
					this.d("touchstart", function(a) {
								a.preventDefault();
								d = f
							});
					this.d("touchmove", function() {
								d = l
							});
					var e = this;
					this.d("touchend", function(a) {
								d && e.p(a);
								a.preventDefault()
							});
					this.d("click", this.p);
					this.d("focus", this.Oa);
					this.d("blur", this.Na)
				}
			});
	t = u.q.prototype;
	t.e = function(a, c) {
		c = u.k.B({
			className : this.T(),
			innerHTML : '<div class="vjs-control-content"><span class="vjs-control-text">'
					+ (this.qa || "Need Text") + "</span></div>",
			qd : "button",
			"aria-live" : "polite",
			tabIndex : 0
		}, c);
		return u.c.prototype.e.call(this, a, c)
	};
	t.T = function() {
		return "vjs-control " + u.c.prototype.T.call(this)
	};
	t.p = m();
	t.Oa = function() {
		u.d(document, "keyup", u.bind(this, this.ba))
	};
	t.ba = function(a) {
		if (32 == a.which || 13 == a.which)
			a.preventDefault(), this.p()
	};
	t.Na = function() {
		u.o(document, "keyup", u.bind(this, this.ba))
	};
	u.O = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c);
					this.Sc = this.V[this.g.barName];
					this.handle = this.V[this.g.handleName];
					a.d(this.tc, u.bind(this, this.update));
					this.d("mousedown", this.Pa);
					this.d("touchstart", this.Pa);
					this.d("focus", this.Oa);
					this.d("blur", this.Na);
					this.d("click", this.p);
					this.b.d("controlsvisible", u.bind(this, this.update));
					a.L(u.bind(this, this.update));
					this.P = {}
				}
			});
	t = u.O.prototype;
	t.e = function(a, c) {
		c = c || {};
		c.className += " vjs-slider";
		c = u.k.B({
					qd : "slider",
					"aria-valuenow" : 0,
					"aria-valuemin" : 0,
					"aria-valuemax" : 100,
					tabIndex : 0
				}, c);
		return u.c.prototype.e.call(this, a, c)
	};
	t.Pa = function(a) {
		a.preventDefault();
		u.Tc();
		this.P.move = u.bind(this, this.Hb);
		this.P.end = u.bind(this, this.Ib);
		u.d(document, "mousemove", this.P.move);
		u.d(document, "mouseup", this.P.end);
		u.d(document, "touchmove", this.P.move);
		u.d(document, "touchend", this.P.end);
		this.Hb(a)
	};
	t.Ib = function() {
		u.Bd();
		u.o(document, "mousemove", this.P.move, l);
		u.o(document, "mouseup", this.P.end, l);
		u.o(document, "touchmove", this.P.move, l);
		u.o(document, "touchend", this.P.end, l);
		this.update()
	};
	t.update = function() {
		if (this.a) {
			var a, c = this.yb(), d = this.handle, e = this.Sc;
			isNaN(c) && (c = 0);
			a = c;
			if (d) {
				a = this.a.offsetWidth;
				var g = d.w().offsetWidth;
				a = g ? g / a : 0;
				c *= 1 - a;
				a = c + a / 2;
				d.w().style.left = u.round(100 * c, 2) + "%"
			}
			e.w().style.width = u.round(100 * a, 2) + "%"
		}
	};
	function F(a, c) {
		var d, e, g, j;
		d = a.a;
		e = u.ad(d);
		j = g = d.offsetWidth;
		d = a.handle;
		if (a.g.Cd)
			return j = e.top, e = c.changedTouches
					? c.changedTouches[0].pageY
					: c.pageY, d
					&& (d = d.w().offsetHeight, j += d / 2, g -= d), Math.max(
					0, Math.min(1, (j - e + g) / g));
		g = e.left;
		e = c.changedTouches ? c.changedTouches[0].pageX : c.pageX;
		d && (d = d.w().offsetWidth, g += d / 2, j -= d);
		return Math.max(0, Math.min(1, (e - g) / j))
	}
	t.Oa = function() {
		u.d(document, "keyup", u.bind(this, this.ba))
	};
	t.ba = function(a) {
		37 == a.which ? (a.preventDefault(), this.yc()) : 39 == a.which
				&& (a.preventDefault(), this.zc())
	};
	t.Na = function() {
		u.o(document, "keyup", u.bind(this, this.ba))
	};
	t.p = function(a) {
		a.stopImmediatePropagation();
		a.preventDefault()
	};
	u.ea = u.c.extend();
	u.ea.prototype.defaultValue = 0;
	u.ea.prototype.e = function(a, c) {
		c = c || {};
		c.className += " vjs-slider-handle";
		c = u.k.B({
					innerHTML : '<span class="vjs-control-text">'
							+ this.defaultValue + "</span>"
				}, c);
		return u.c.prototype.e.call(this, "div", c)
	};
	u.ma = u.c.extend();
	function ca(a, c) {
		a.Z(c);
		c.d("click", u.bind(a, function() {
							D(this)
						}))
	}
	u.ma.prototype.e = function() {
		var a = this.options().Vc || "ul";
		this.sa = u.e(a, {
					className : "vjs-menu-content"
				});
		a = u.c.prototype.e.call(this, "div", {
					append : this.sa,
					className : "vjs-menu"
				});
		a.appendChild(this.sa);
		u.d(a, "click", function(a) {
					a.preventDefault();
					a.stopImmediatePropagation()
				});
		return a
	};
	u.N = u.q.extend({
				i : function(a, c) {
					u.q.call(this, a, c);
					this.selected(c.selected)
				}
			});
	u.N.prototype.e = function(a, c) {
		return u.q.prototype.e.call(this, "li", u.k.B({
							className : "vjs-menu-item",
							innerHTML : this.g.label
						}, c))
	};
	u.N.prototype.p = function() {
		this.selected(f)
	};
	u.N.prototype.selected = function(a) {
		a
				? (this.n("vjs-selected"), this.a.setAttribute("aria-selected",
						f))
				: (this.u("vjs-selected"), this.a.setAttribute("aria-selected",
						l))
	};
	u.R = u.q.extend({
				i : function(a, c) {
					u.q.call(this, a, c);
					this.wa = this.Ka();
					this.Z(this.wa);
					this.I && 0 === this.I.length && this.C();
					this.d("keyup", this.ba);
					this.a.setAttribute("aria-haspopup", f);
					this.a.setAttribute("role", "button")
				}
			});
	t = u.R.prototype;
	t.pa = l;
	t.Ka = function() {
		var a = new u.ma(this.b);
		this.options().title && a.w().appendChild(u.e("li", {
					className : "vjs-menu-title",
					innerHTML : u.$(this.A),
					zd : -1
				}));
		if (this.I = this.createItems())
			for (var c = 0; c < this.I.length; c++)
				ca(a, this.I[c]);
		return a
	};
	t.ta = m();
	t.T = function() {
		return this.className + " vjs-menu-button "
				+ u.q.prototype.T.call(this)
	};
	t.Oa = m();
	t.Na = m();
	t.p = function() {
		this.U("mouseout", u.bind(this, function() {
							D(this.wa);
							this.a.blur()
						}));
		this.pa ? G(this) : H(this)
	};
	t.ba = function(a) {
		a.preventDefault();
		32 == a.which || 13 == a.which
				? this.pa ? G(this) : H(this)
				: 27 == a.which && this.pa && G(this)
	};
	function H(a) {
		a.pa = f;
		a.wa.n("vjs-lock-showing");
		a.a.setAttribute("aria-pressed", f);
		a.I && 0 < a.I.length && a.I[0].w().focus()
	}
	function G(a) {
		a.pa = l;
		D(a.wa);
		a.a.setAttribute("aria-pressed", l)
	}
	u.s = u.c.extend({
		i : function(a, c, d) {
			this.M = a;
			c = u.k.B(da(a), c);
			this.v = {};
			this.uc = c.poster;
			this.sb = c.controls;
			a.controls = l;
			u.c.call(this, this, c, d);
			this.controls() ? this.n("vjs-controls-enabled") : this
					.n("vjs-controls-disabled");
			this.U("play", function(a) {
						u.j(this.a, {
									type : "firstplay",
									target : this.a
								})
								|| (a.preventDefault(), a.stopPropagation(), a
										.stopImmediatePropagation())
					});
			this.d("ended", this.hd);
			this.d("play", this.Kb);
			this.d("firstplay", this.jd);
			this.d("pause", this.Jb);
			this.d("progress", this.ld);
			this.d("durationchange", this.sc);
			this.d("error", this.Gb);
			this.d("fullscreenchange", this.kd);
			u.xa[this.Q] = this;
			c.plugins && u.k.ua(c.plugins, function(a, c) {
						this[a](c)
					}, this);
			var e, g, j, k;
			e = this.Mb;
			a = function() {
				e();
				clearInterval(g);
				g = setInterval(u.bind(this, e), 250)
			};
			c = function() {
				e();
				clearInterval(g)
			};
			this.d("mousedown", a);
			this.d("mousemove", e);
			this.d("mouseup", c);
			this.d("keydown", e);
			this.d("keyup", e);
			this.d("touchstart", a);
			this.d("touchmove", e);
			this.d("touchend", c);
			this.d("touchcancel", c);
			j = setInterval(u.bind(this, function() {
				this.ka
						&& (this.ka = l, this.ja(f), clearTimeout(k), k = setTimeout(
								u.bind(this, function() {
											this.ka || this.ja(l)
										}), 2E3))
			}), 250);
			this.d("dispose", function() {
						clearInterval(j);
						clearTimeout(k)
					})
		}
	});
	t = u.s.prototype;
	t.g = u.options;
	t.D = function() {
		this.j("dispose");
		this.o("dispose");
		u.xa[this.Q] = h;
		this.M && this.M.player && (this.M.player = h);
		this.a && this.a.player && (this.a.player = h);
		clearInterval(this.Ra);
		this.za();
		this.h && this.h.D();
		u.c.prototype.D.call(this)
	};
	function da(a) {
		var c = {
			sources : [],
			tracks : []
		};
		u.k.B(c, u.xb(a));
		if (a.hasChildNodes()) {
			var d, e, g, j;
			a = a.childNodes;
			g = 0;
			for (j = a.length; g < j; g++)
				d = a[g], e = d.nodeName.toLowerCase(), "source" === e
						? c.sources.push(u.xb(d))
						: "track" === e && c.tracks.push(u.xb(d))
		}
		return c
	}
	t.e = function() {
		var a = this.a = u.c.prototype.e.call(this, "div"), c = this.M;
		c.removeAttribute("width");
		c.removeAttribute("height");
		if (c.hasChildNodes()) {
			var d, e, g, j, k;
			d = c.childNodes;
			e = d.length;
			for (k = []; e--;)
				g = d[e], j = g.nodeName.toLowerCase(), "track" === j
						&& k.push(g);
			for (d = 0; d < k.length; d++)
				c.removeChild(k[d])
		}
		c.id = c.id || "vjs_video_" + u.t++;
		a.id = c.id;
		a.className = c.className;
		c.id += "_html5_api";
		c.className = "vjs-tech";
		c.player = a.player = this;
		this.n("vjs-paused");
		this.width(this.g.width, f);
		this.height(this.g.height, f);
		c.parentNode && c.parentNode.insertBefore(a, c);
		u.zb(c, a);
		return a
	};
	function I(a, c, d) {
		a.h ? (a.aa = l, a.h.D(), a.Eb && (a.Eb = l, clearInterval(a.Ra)), a.Fb
				&& J(a), a.h = l) : "Html5" !== c && a.M
				&& (u.l.jc(a.M), a.M = h);
		a.ia = c;
		a.aa = l;
		var e = u.k.B({
					source : d,
					parentEl : a.a
				}, a.g[c.toLowerCase()]);
		d
				&& (d.src == a.v.src && 0 < a.v.currentTime
						&& (e.startTime = a.v.currentTime), a.v.src = d.src);
		a.h = new window.videojs[c](a, e);
		a.h.L(function() {
					this.b.Ua();
					if (!this.m.progressEvents) {
						var a = this.b;
						a.Eb = f;
						a.Ra = setInterval(u.bind(a, function() {
											this.v.lb < this.buffered().end(0)
													? this.j("progress")
													: 1 == this.Ja()
															&& (clearInterval(this.Ra), this
																	.j("progress"))
										}), 500);
						a.h.U("progress", function() {
									this.m.progressEvents = f;
									var a = this.b;
									a.Eb = l;
									clearInterval(a.Ra)
								})
					}
					this.m.timeupdateEvents
							|| (a = this.b, a.Fb = f, a.d("play", a.Cc), a.d(
									"pause", a.za), a.h.U("timeupdate",
									function() {
										this.m.timeupdateEvents = f;
										J(this.b)
									}))
				})
	}
	function J(a) {
		a.Fb = l;
		a.za();
		a.o("play", a.Cc);
		a.o("pause", a.za)
	}
	t.Cc = function() {
		this.hc && this.za();
		this.hc = setInterval(u.bind(this, function() {
							this.j("timeupdate")
						}), 250)
	};
	t.za = function() {
		clearInterval(this.hc)
	};
	t.Kb = function() {
		u.u(this.a, "vjs-paused");
		u.n(this.a, "vjs-playing")
	};
	t.jd = function() {
		this.g.starttime && this.currentTime(this.g.starttime);
		this.n("vjs-has-started")
	};
	t.Jb = function() {
		u.u(this.a, "vjs-playing");
		u.n(this.a, "vjs-paused")
	};
	t.ld = function() {
		1 == this.Ja() && this.j("loadedalldata")
	};
	t.hd = function() {
		this.g.loop && (this.currentTime(0), this.play())
	};
	t.sc = function() {
		this.duration(K(this, "duration"))
	};
	t.kd = function() {
		this.H ? this.n("vjs-fullscreen") : this.u("vjs-fullscreen")
	};
	t.Gb = function(a) {
		u.log("Video Error", a)
	};
	function L(a, c, d) {
		if (a.h && !a.h.aa)
			a.h.L(function() {
						this[c](d)
					});
		else
			try {
				a.h[c](d)
			} catch (e) {
				throw u.log(e), e;
			}
	}
	function K(a, c) {
		if (a.h && a.h.aa)
			try {
				return a.h[c]()
			} catch (d) {
				throw a.h[c] === b
						? u.log("Video.js: " + c + " method not defined for "
										+ a.ia + " playback technology.", d)
						: "TypeError" == d.name
								? (u
										.log(
												"Video.js: "
														+ c
														+ " unavailable on "
														+ a.ia
														+ " playback technology element.",
												d), a.h.aa = l)
								: u.log(d), d;
			}
	}
	t.play = function() {
		L(this, "play");
		return this
	};
	t.pause = function() {
		L(this, "pause");
		return this
	};
	t.paused = function() {
		return K(this, "paused") === l ? l : f
	};
	t.currentTime = function(a) {
		return a !== b ? (this.v.rc = a, L(this, "setCurrentTime", a), this.Fb
				&& this.j("timeupdate"), this) : this.v.currentTime = K(this,
				"currentTime")
				|| 0
	};
	t.duration = function(a) {
		if (a !== b)
			return this.v.duration = parseFloat(a), this;
		this.v.duration === b && this.sc();
		return this.v.duration
	};
	t.buffered = function() {
		var a = K(this, "buffered"), c = a.length - 1, d = this.v.lb = this.v.lb
				|| 0;
		a && (0 <= c && a.end(c) !== d) && (d = a.end(c), this.v.lb = d);
		return u.tb(0, d)
	};
	t.Ja = function() {
		return this.duration() ? this.buffered().end(0) / this.duration() : 0
	};
	t.volume = function(a) {
		if (a !== b)
			return a = Math.max(0, Math.min(1, parseFloat(a))), this.v.volume = a, L(
					this, "setVolume", a), u.td(a), this;
		a = parseFloat(K(this, "volume"));
		return isNaN(a) ? 1 : a
	};
	t.muted = function(a) {
		return a !== b ? (L(this, "setMuted", a), this) : K(this, "muted") || l
	};
	t.Ta = function() {
		return K(this, "supportsFullScreen") || l
	};
	t.ya = function() {
		var a = u.Pb.ya;
		this.H = f;
		a
				? (u.d(document, a.vb, u.bind(this, function(c) {
									this.H = document[a.H];
									this.H === l
											&& u.o(document, a.vb,
													arguments.callee);
									this.j("fullscreenchange")
								})), this.a[a.wc]())
				: this.h.Ta()
						? L(this, "enterFullScreen")
						: (this.cd = f, this.Yc = document.documentElement.style.overflow, u
								.d(document, "keydown", u.bind(this, this.lc)), document.documentElement.style.overflow = "hidden", u
								.n(document.body, "vjs-full-window"), this
								.j("enterFullWindow"), this
								.j("fullscreenchange"));
		return this
	};
	t.ob = function() {
		var a = u.Pb.ya;
		this.H = l;
		if (a)
			document[a.nb]();
		else
			this.h.Ta() ? L(this, "exitFullScreen") : (M(this), this
					.j("fullscreenchange"));
		return this
	};
	t.lc = function(a) {
		27 === a.keyCode && (this.H === f ? this.ob() : M(this))
	};
	function M(a) {
		a.cd = l;
		u.o(document, "keydown", a.lc);
		document.documentElement.style.overflow = a.Yc;
		u.u(document.body, "vjs-full-window");
		a.j("exitFullWindow")
	}
	t.src = function(a) {
		if (a instanceof Array) {
			var c;
			a : {
				c = a;
				for (var d = 0, e = this.g.techOrder; d < e.length; d++) {
					var g = u.$(e[d]), j = window.videojs[g];
					if (j.isSupported())
						for (var k = 0, q = c; k < q.length; k++) {
							var n = q[k];
							if (j.canPlaySource(n)) {
								c = {
									source : n,
									h : g
								};
								break a
							}
						}
				}
				c = l
			}
			c ? (a = c.source, c = c.h, c == this.ia ? this.src(a) : I(this, c,
					a)) : this.a.appendChild(u.e("p", {
						innerHTML : this.options().notSupportedMessage
					}))
		} else
			a instanceof Object ? window.videojs[this.ia].canPlaySource(a)
					? this.src(a.src)
					: this.src([a]) : (this.v.src = a, this.aa
					? (L(this, "src", a), "auto" == this.g.preload
							&& this.load(), this.g.autoplay && this.play())
					: this.L(function() {
								this.src(a)
							}));
		return this
	};
	t.load = function() {
		L(this, "load");
		return this
	};
	t.currentSrc = function() {
		return K(this, "currentSrc") || this.v.src || ""
	};
	t.Qa = function(a) {
		return a !== b
				? (L(this, "setPreload", a), this.g.preload = a, this)
				: K(this, "preload")
	};
	t.autoplay = function(a) {
		return a !== b
				? (L(this, "setAutoplay", a), this.g.autoplay = a, this)
				: K(this, "autoplay")
	};
	t.loop = function(a) {
		return a !== b ? (L(this, "setLoop", a), this.g.loop = a, this) : K(
				this, "loop")
	};
	t.poster = function(a) {
		return a !== b ? (this.uc = a, this) : this.uc
	};
	t.controls = function(a) {
		return a !== b ? (a = !!a, this.sb !== a
				&& ((this.sb = a)
						? (this.u("vjs-controls-disabled"), this
								.n("vjs-controls-enabled"), this
								.j("controlsenabled"))
						: (this.u("vjs-controls-enabled"), this
								.n("vjs-controls-disabled"), this
								.j("controlsdisabled"))), this) : this.sb
	};
	u.s.prototype.Sb;
	t = u.s.prototype;
	t.Rb = function(a) {
		return a !== b ? (a = !!a, this.Sb !== a
				&& ((this.Sb = a) ? (this.n("vjs-using-native-controls"), this
						.j("usingnativecontrols")) : (this
						.u("vjs-using-native-controls"), this
						.j("usingcustomcontrols"))), this) : this.Sb
	};
	t.error = function() {
		return K(this, "error")
	};
	t.seeking = function() {
		return K(this, "seeking")
	};
	t.ka = f;
	t.Mb = function() {
		this.ka = f
	};
	t.Qb = f;
	t.ja = function(a) {
		return a !== b
				? (a = !!a, a !== this.Qb
						&& ((this.Qb = a)
								? (this.ka = f, this.u("vjs-user-inactive"), this
										.n("vjs-user-active"), this
										.j("useractive"))
								: (this.ka = l, this.h.U("mousemove", function(
												a) {
											a.stopPropagation();
											a.preventDefault()
										}), this.u("vjs-user-active"), this
										.n("vjs-user-inactive"), this
										.j("userinactive"))), this)
				: this.Qb
	};
	var N, O, P;
	P = document.createElement("div");
	O = {};
	P.Hd !== b
			? (O.wc = "requestFullscreen", O.nb = "exitFullscreen", O.vb = "fullscreenchange", O.H = "fullScreen")
			: (document.mozCancelFullScreen ? (N = "moz", O.H = N
					+ "FullScreen") : (N = "webkit", O.H = N + "IsFullScreen"), P[N
					+ "RequestFullScreen"]
					&& (O.wc = N + "RequestFullScreen", O.nb = N
							+ "CancelFullScreen"), O.vb = N
					+ "fullscreenchange");
	document[O.nb] && (u.Pb.ya = O);
	u.Fa = u.c.extend();
	u.Fa.prototype.g = {
		Md : "play",
		children : {
			playToggle : {},
			currentTimeDisplay : {},
			timeDivider : {},
			durationDisplay : {},
			remainingTimeDisplay : {},
			progressControl : {},
			fullscreenToggle : {},
			volumeControl : {},
			muteToggle : {}
		}
	};
	u.Fa.prototype.e = function() {
		return u.e("div", {
					className : "vjs-control-bar"
				})
	};
	u.Yb = u.q.extend({
				i : function(a, c) {
					u.q.call(this, a, c);
					a.d("play", u.bind(this, this.Kb));
					a.d("pause", u.bind(this, this.Jb))
				}
			});
	t = u.Yb.prototype;
	t.qa = "Play";
	t.T = function() {
		return "vjs-play-control " + u.q.prototype.T.call(this)
	};
	t.p = function() {
		this.b.paused() ? this.b.play() : this.b.pause()
	};
	t.Kb = function() {
		u.u(this.a, "vjs-paused");
		u.n(this.a, "vjs-playing");
		this.a.children[0].children[0].innerHTML = "Pause"
	};
	t.Jb = function() {
		u.u(this.a, "vjs-playing");
		u.n(this.a, "vjs-paused");
		this.a.children[0].children[0].innerHTML = "Play"
	};
	u.Ya = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c);
					a.d("timeupdate", u.bind(this, this.Ca))
				}
			});
	u.Ya.prototype.e = function() {
		var a = u.c.prototype.e.call(this, "div", {
					className : "vjs-current-time vjs-time-controls vjs-control"
				});
		this.content = u.e("div", {
			className : "vjs-current-time-display",
			innerHTML : '<span class="vjs-control-text">Current Time </span>0:00',
			"aria-live" : "off"
		});
		a.appendChild(u.e("div").appendChild(this.content));
		return a
	};
	u.Ya.prototype.Ca = function() {
		var a = this.b.Nb ? this.b.v.currentTime : this.b.currentTime();
		this.content.innerHTML = '<span class="vjs-control-text">Current Time </span>'
				+ u.La(a, this.b.duration())
	};
	u.Za = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c);
					a.d("timeupdate", u.bind(this, this.Ca))
				}
			});
	u.Za.prototype.e = function() {
		var a = u.c.prototype.e.call(this, "div", {
					className : "vjs-duration vjs-time-controls vjs-control"
				});
		this.content = u.e("div", {
			className : "vjs-duration-display",
			innerHTML : '<span class="vjs-control-text">Duration Time </span>0:00',
			"aria-live" : "off"
		});
		a.appendChild(u.e("div").appendChild(this.content));
		return a
	};
	u.Za.prototype.Ca = function() {
		var a = this.b.duration();
		a
				&& (this.content.innerHTML = '<span class="vjs-control-text">Duration Time </span>'
						+ u.La(a))
	};
	u.cc = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c)
				}
			});
	u.cc.prototype.e = function() {
		return u.c.prototype.e.call(this, "div", {
					className : "vjs-time-divider",
					innerHTML : "<div><span>/</span></div>"
				})
	};
	u.fb = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c);
					a.d("timeupdate", u.bind(this, this.Ca))
				}
			});
	u.fb.prototype.e = function() {
		var a = u.c.prototype.e.call(this, "div", {
					className : "vjs-remaining-time vjs-time-controls vjs-control"
				});
		this.content = u.e("div", {
			className : "vjs-remaining-time-display",
			innerHTML : '<span class="vjs-control-text">Remaining Time </span>-0:00',
			"aria-live" : "off"
		});
		a.appendChild(u.e("div").appendChild(this.content));
		return a
	};
	u.fb.prototype.Ca = function() {
		this.b.duration()
				&& (this.content.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-'
						+ u.La(this.b.duration() - this.b.currentTime()))
	};
	u.Ga = u.q.extend({
				i : function(a, c) {
					u.q.call(this, a, c)
				}
			});
	u.Ga.prototype.qa = "Fullscreen";
	u.Ga.prototype.T = function() {
		return "vjs-fullscreen-control " + u.q.prototype.T.call(this)
	};
	u.Ga.prototype.p = function() {
		this.b.H
				? (this.b.ob(), this.a.children[0].children[0].innerHTML = "Fullscreen")
				: (this.b.ya(), this.a.children[0].children[0].innerHTML = "Non-Fullscreen")
	};
	u.eb = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c)
				}
			});
	u.eb.prototype.g = {
		children : {
			seekBar : {}
		}
	};
	u.eb.prototype.e = function() {
		return u.c.prototype.e.call(this, "div", {
					className : "vjs-progress-control vjs-control"
				})
	};
	u.Zb = u.O.extend({
				i : function(a, c) {
					u.O.call(this, a, c);
					a.d("timeupdate", u.bind(this, this.Ba));
					a.L(u.bind(this, this.Ba))
				}
			});
	t = u.Zb.prototype;
	t.g = {
		children : {
			loadProgressBar : {},
			playProgressBar : {},
			seekHandle : {}
		},
		barName : "playProgressBar",
		handleName : "seekHandle"
	};
	t.tc = "timeupdate";
	t.e = function() {
		return u.O.prototype.e.call(this, "div", {
					className : "vjs-progress-holder",
					"aria-label" : "video progress bar"
				})
	};
	t.Ba = function() {
		var a = this.b.Nb ? this.b.v.currentTime : this.b.currentTime();
		this.a.setAttribute("aria-valuenow", u.round(100 * this.yb(), 2));
		this.a.setAttribute("aria-valuetext", u.La(a, this.b.duration()))
	};
	t.yb = function() {
		var a;
		"Flash" === this.b.ia && this.b.seeking() ? (a = this.b.v, a = a.rc
				? a.rc
				: this.b.currentTime()) : a = this.b.currentTime();
		return a / this.b.duration()
	};
	t.Pa = function(a) {
		u.O.prototype.Pa.call(this, a);
		this.b.Nb = f;
		this.Dd = !this.b.paused();
		this.b.pause()
	};
	t.Hb = function(a) {
		a = F(this, a) * this.b.duration();
		a == this.b.duration() && (a -= 0.1);
		this.b.currentTime(a)
	};
	t.Ib = function(a) {
		u.O.prototype.Ib.call(this, a);
		this.b.Nb = l;
		this.Dd && this.b.play()
	};
	t.zc = function() {
		this.b.currentTime(this.b.currentTime() + 5)
	};
	t.yc = function() {
		this.b.currentTime(this.b.currentTime() - 5)
	};
	u.ab = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c);
					a.d("progress", u.bind(this, this.update))
				}
			});
	u.ab.prototype.e = function() {
		return u.c.prototype.e.call(this, "div", {
					className : "vjs-load-progress",
					innerHTML : '<span class="vjs-control-text">Loaded: 0%</span>'
				})
	};
	u.ab.prototype.update = function() {
		this.a.style
				&& (this.a.style.width = u.round(100 * this.b.Ja(), 2) + "%")
	};
	u.Xb = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c)
				}
			});
	u.Xb.prototype.e = function() {
		return u.c.prototype.e.call(this, "div", {
					className : "vjs-play-progress",
					innerHTML : '<span class="vjs-control-text">Progress: 0%</span>'
				})
	};
	u.gb = u.ea.extend();
	u.gb.prototype.defaultValue = "00:00";
	u.gb.prototype.e = function() {
		return u.ea.prototype.e.call(this, "div", {
					className : "vjs-seek-handle"
				})
	};
	u.ib = u.c.extend({
		i : function(a, c) {
			u.c.call(this, a, c);
			a.h && (a.h.m && a.h.m.volumeControl === l) && this.n("vjs-hidden");
			a.d("loadstart", u.bind(this, function() {
								a.h.m && a.h.m.volumeControl === l ? this
										.n("vjs-hidden") : this.u("vjs-hidden")
							}))
		}
	});
	u.ib.prototype.g = {
		children : {
			volumeBar : {}
		}
	};
	u.ib.prototype.e = function() {
		return u.c.prototype.e.call(this, "div", {
					className : "vjs-volume-control vjs-control"
				})
	};
	u.hb = u.O.extend({
				i : function(a, c) {
					u.O.call(this, a, c);
					a.d("volumechange", u.bind(this, this.Ba));
					a.L(u.bind(this, this.Ba));
					setTimeout(u.bind(this, this.update), 0)
				}
			});
	t = u.hb.prototype;
	t.Ba = function() {
		this.a.setAttribute("aria-valuenow", u.round(100 * this.b.volume(), 2));
		this.a.setAttribute("aria-valuetext", u.round(100 * this.b.volume(), 2)
						+ "%")
	};
	t.g = {
		children : {
			volumeLevel : {},
			volumeHandle : {}
		},
		barName : "volumeLevel",
		handleName : "volumeHandle"
	};
	t.tc = "volumechange";
	t.e = function() {
		return u.O.prototype.e.call(this, "div", {
					className : "vjs-volume-bar",
					"aria-label" : "volume level"
				})
	};
	t.Hb = function(a) {
		this.b.muted() && this.b.muted(l);
		this.b.volume(F(this, a))
	};
	t.yb = function() {
		return this.b.muted() ? 0 : this.b.volume()
	};
	t.zc = function() {
		this.b.volume(this.b.volume() + 0.1)
	};
	t.yc = function() {
		this.b.volume(this.b.volume() - 0.1)
	};
	u.dc = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c)
				}
			});
	u.dc.prototype.e = function() {
		return u.c.prototype.e.call(this, "div", {
					className : "vjs-volume-level",
					innerHTML : '<span class="vjs-control-text"></span>'
				})
	};
	u.jb = u.ea.extend();
	u.jb.prototype.defaultValue = "00:00";
	u.jb.prototype.e = function() {
		return u.ea.prototype.e.call(this, "div", {
					className : "vjs-volume-handle"
				})
	};
	u.da = u.q.extend({
		i : function(a, c) {
			u.q.call(this, a, c);
			a.d("volumechange", u.bind(this, this.update));
			a.h && (a.h.m && a.h.m.volumeControl === l) && this.n("vjs-hidden");
			a.d("loadstart", u.bind(this, function() {
								a.h.m && a.h.m.volumeControl === l ? this
										.n("vjs-hidden") : this.u("vjs-hidden")
							}))
		}
	});
	u.da.prototype.e = function() {
		return u.q.prototype.e.call(this, "div", {
					className : "vjs-mute-control vjs-control",
					innerHTML : '<div><span class="vjs-control-text">Mute</span></div>'
				})
	};
	u.da.prototype.p = function() {
		this.b.muted(this.b.muted() ? l : f)
	};
	u.da.prototype.update = function() {
		var a = this.b.volume(), c = 3;
		0 === a || this.b.muted() ? c = 0 : 0.33 > a ? c = 1 : 0.67 > a
				&& (c = 2);
		this.b.muted()
				? "Unmute" != this.a.children[0].children[0].innerHTML
						&& (this.a.children[0].children[0].innerHTML = "Unmute")
				: "Mute" != this.a.children[0].children[0].innerHTML
						&& (this.a.children[0].children[0].innerHTML = "Mute");
		for (a = 0; 4 > a; a++)
			u.u(this.a, "vjs-vol-" + a);
		u.n(this.a, "vjs-vol-" + c)
	};
	u.oa = u.R.extend({
				i : function(a, c) {
					u.R.call(this, a, c);
					a.d("volumechange", u.bind(this, this.update));
					a.h && (a.h.m && a.h.m.Dc === l) && this.n("vjs-hidden");
					a.d("loadstart", u.bind(this, function() {
										a.h.m && a.h.m.Dc === l ? this
												.n("vjs-hidden") : this
												.u("vjs-hidden")
									}));
					this.n("vjs-menu-button")
				}
			});
	u.oa.prototype.Ka = function() {
		var a = new u.ma(this.b, {
					Vc : "div"
				}), c = new u.hb(this.b, u.k.B({
							Cd : f
						}, this.g.Vd));
		a.Z(c);
		return a
	};
	u.oa.prototype.p = function() {
		u.da.prototype.p.call(this);
		u.R.prototype.p.call(this)
	};
	u.oa.prototype.e = function() {
		return u.q.prototype.e.call(this, "div", {
					className : "vjs-volume-menu-button vjs-menu-button vjs-control",
					innerHTML : '<div><span class="vjs-control-text">Mute</span></div>'
				})
	};
	u.oa.prototype.update = u.da.prototype.update;
	u.cb = u.q.extend({
				i : function(a, c) {
					u.q.call(this, a, c);
					(!a.poster() || !a.controls()) && this.C();
					a.d("play", u.bind(this, this.C))
				}
			});
	u.cb.prototype.e = function() {
		var a = u.e("div", {
					className : "vjs-poster",
					tabIndex : -1
				}), c = this.b.poster();
		c
				&& ("backgroundSize" in a.style
						? a.style.backgroundImage = 'url("' + c + '")'
						: a.appendChild(u.e("img", {
									src : c
								})));
		return a
	};
	u.cb.prototype.p = function() {
		this.K().controls() && this.b.play()
	};
	u.Wb = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c);
					a.d("canplay", u.bind(this, this.C));
					a.d("canplaythrough", u.bind(this, this.C));
					a.d("playing", u.bind(this, this.C));
					a.d("seeked", u.bind(this, this.C));
					a.d("seeking", u.bind(this, this.show));
					a.d("seeked", u.bind(this, this.C));
					a.d("error", u.bind(this, this.show));
					a.d("waiting", u.bind(this, this.show))
				}
			});
	u.Wb.prototype.e = function() {
		return u.c.prototype.e.call(this, "div", {
					className : "vjs-loading-spinner"
				})
	};
	u.Wa = u.q.extend();
	u.Wa.prototype.e = function() {
		return u.q.prototype.e.call(this, "div", {
					className : "vjs-big-play-button",
					innerHTML : '<span aria-hidden="true"></span>',
					"aria-label" : "play video"
				})
	};
	u.Wa.prototype.p = function() {
		this.b.play()
	};
	u.r = u.c.extend({
		i : function(a, c, d) {
			u.c.call(this, a, c, d);
			var e, g;
			g = this;
			e = this.K();
			a = function() {
				if (e.controls() && !e.Rb()) {
					var a, c;
					g.d("mousedown", g.p);
					g.d("touchstart", function(a) {
								a.preventDefault();
								a.stopPropagation();
								c = this.b.ja()
							});
					a = function(a) {
						a.stopPropagation();
						c && this.b.Mb()
					};
					g.d("touchmove", a);
					g.d("touchleave", a);
					g.d("touchcancel", a);
					g.d("touchend", a);
					var d, n, r;
					d = 0;
					g.d("touchstart", function() {
								d = (new Date).getTime();
								r = f
							});
					a = function() {
						r = l
					};
					g.d("touchmove", a);
					g.d("touchleave", a);
					g.d("touchcancel", a);
					g.d("touchend", function() {
								r === f
										&& (n = (new Date).getTime() - d, 250 > n
												&& this.j("tap"))
							});
					g.d("tap", g.md)
				}
			};
			c = u.bind(g, g.pd);
			this.L(a);
			e.d("controlsenabled", a);
			e.d("controlsdisabled", c)
		}
	});
	u.r.prototype.pd = function() {
		this.o("tap");
		this.o("touchstart");
		this.o("touchmove");
		this.o("touchleave");
		this.o("touchcancel");
		this.o("touchend");
		this.o("click");
		this.o("mousedown")
	};
	u.r.prototype.p = function(a) {
		0 === a.button && this.K().controls()
				&& (this.K().paused() ? this.K().play() : this.K().pause())
	};
	u.r.prototype.md = function() {
		this.K().ja(!this.K().ja())
	};
	u.r.prototype.m = {
		volumeControl : f,
		fullscreenResize : l,
		progressEvents : l,
		timeupdateEvents : l
	};
	u.media = {};
	u.media.Va = "play pause paused currentTime setCurrentTime duration buffered volume setVolume muted setMuted width height supportsFullScreen enterFullScreen src load currentSrc preload setPreload autoplay setAutoplay loop setLoop error networkState readyState seeking initialTime startOffsetTime played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks defaultPlaybackRate playbackRate mediaGroup controller controls defaultMuted"
			.split(" ");
	function ea() {
		var a = u.media.Va[i];
		return function() {
			throw Error('The "'
					+ a
					+ "\" method is not available on the playback technology's API");
		}
	}
	for (var i = u.media.Va.length - 1; 0 <= i; i--)
		u.r.prototype[u.media.Va[i]] = ea();
	u.l = u.r.extend({
				i : function(a, c, d) {
					this.m.volumeControl = u.l.Uc();
					this.m.movingMediaElementInDOM = !u.Kc;
					this.m.fullscreenResize = f;
					u.r.call(this, a, c, d);
					(c = c.source) && this.a.currentSrc === c.src
							&& 0 < this.a.networkState ? a.j("loadstart") : c
							&& (this.a.src = c.src);
					if (u.ac && a.options().nativeControlsForTouch !== l) {
						var e, g, j, k;
						e = this;
						g = this.K();
						c = g.controls();
						e.a.controls = !!c;
						j = function() {
							e.a.controls = f
						};
						k = function() {
							e.a.controls = l
						};
						g.d("controlsenabled", j);
						g.d("controlsdisabled", k);
						c = function() {
							g.o("controlsenabled", j);
							g.o("controlsdisabled", k)
						};
						e.d("dispose", c);
						g.d("usingcustomcontrols", c);
						g.Rb(f)
					}
					a.L(function() {
								this.M && (this.g.autoplay && this.paused())
										&& (delete this.M.poster, this.play())
							});
					for (a = u.l.$a.length - 1; 0 <= a; a--)
						u.d(this.a, u.l.$a[a], u.bind(this.b, this.$c));
					this.Ua()
				}
			});
	t = u.l.prototype;
	t.D = function() {
		u.r.prototype.D.call(this)
	};
	t.e = function() {
		var a = this.b, c = a.M, d;
		if (!c || this.m.movingMediaElementInDOM === l)
			c ? (d = c.cloneNode(l), u.l.jc(c), c = d, a.M = h) : c = u.e(
					"video", {
						id : a.id() + "_html5_api",
						className : "vjs-tech"
					}), c.player = a, u.zb(c, a.w());
		d = ["autoplay", "preload", "loop", "muted"];
		for (var e = d.length - 1; 0 <= e; e--) {
			var g = d[e];
			a.g[g] !== h && (c[g] = a.g[g])
		}
		return c
	};
	t.$c = function(a) {
		this.j(a);
		a.stopPropagation()
	};
	t.play = function() {
		this.a.play()
	};
	t.pause = function() {
		this.a.pause()
	};
	t.paused = function() {
		return this.a.paused
	};
	t.currentTime = function() {
		return this.a.currentTime
	};
	t.sd = function(a) {
		try {
			this.a.currentTime = a
		} catch (c) {
			u.log(c, "Video is not ready. (Video.js)")
		}
	};
	t.duration = function() {
		return this.a.duration || 0
	};
	t.buffered = function() {
		return this.a.buffered
	};
	t.volume = function() {
		return this.a.volume
	};
	t.xd = function(a) {
		this.a.volume = a
	};
	t.muted = function() {
		return this.a.muted
	};
	t.vd = function(a) {
		this.a.muted = a
	};
	t.width = function() {
		return this.a.offsetWidth
	};
	t.height = function() {
		return this.a.offsetHeight
	};
	t.Ta = function() {
		return "function" == typeof this.a.webkitEnterFullScreen
				&& (/Android/.test(u.F) || !/Chrome|Mac OS X 10.5/.test(u.F))
				? f
				: l
	};
	t.src = function(a) {
		this.a.src = a
	};
	t.load = function() {
		this.a.load()
	};
	t.currentSrc = function() {
		return this.a.currentSrc
	};
	t.Qa = function() {
		return this.a.Qa
	};
	t.wd = function(a) {
		this.a.Qa = a
	};
	t.autoplay = function() {
		return this.a.autoplay
	};
	t.rd = function(a) {
		this.a.autoplay = a
	};
	t.controls = function() {
		return this.a.controls
	};
	t.loop = function() {
		return this.a.loop
	};
	t.ud = function(a) {
		this.a.loop = a
	};
	t.error = function() {
		return this.a.error
	};
	t.seeking = function() {
		return this.a.seeking
	};
	u.l.isSupported = function() {
		return !!u.na.canPlayType
	};
	u.l.mb = function(a) {
		try {
			return !!u.na.canPlayType(a.type)
		} catch (c) {
			return ""
		}
	};
	u.l.Uc = function() {
		var a = u.na.volume;
		u.na.volume = a / 2 + 0.1;
		return a !== u.na.volume
	};
	u.l.$a = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange"
			.split(" ");
	u.l.jc = function(a) {
		if (a) {
			a.player = h;
			for (a.parentNode && a.parentNode.removeChild(a); a.hasChildNodes();)
				a.removeChild(a.firstChild);
			a.removeAttribute("src");
			"function" === typeof a.load && a.load()
		}
	};
	u.Oc
			&& (document.createElement("video").constructor.prototype.canPlayType = function(
					a) {
				return a && -1 != a.toLowerCase().indexOf("video/mp4")
						? "maybe"
						: ""
			});
	u.f = u.r.extend({
		i : function(a, c, d) {
			u.r.call(this, a, c, d);
			var e = c.source;
			d = c.parentEl;
			var g = this.a = u.e("div", {
						id : a.id() + "_temp_flash"
					}), j = a.id() + "_flash_api";
			a = a.g;
			var k = u.k.B({
						readyFunction : "videojs.Flash.onReady",
						eventProxyFunction : "videojs.Flash.onEvent",
						errorEventProxyFunction : "videojs.Flash.onError",
						autoplay : a.autoplay,
						preload : a.Qa,
						loop : a.loop,
						muted : a.muted
					}, c.flashVars), q = u.k.B({
						wmode : "opaque",
						bgcolor : "#000000"
					}, c.params), n = u.k.B({
						id : j,
						name : j,
						"class" : "vjs-tech"
					}, c.attributes);
			e
					&& (e.type && u.f.ed(e.type)
							? (a = u.f.Ac(e.src), k.rtmpConnection = encodeURIComponent(a.rb), k.rtmpStream = encodeURIComponent(a.Ob))
							: k.src = encodeURIComponent(u.mc(e.src)));
			u.zb(g, d);
			c.startTime && this.L(function() {
						this.load();
						this.play();
						this.currentTime(c.startTime)
					});
			if (c.iFrameMode === f && !u.Jc) {
				var r = u.e("iframe", {
							id : j + "_iframe",
							name : j + "_iframe",
							className : "vjs-tech",
							scrolling : "no",
							marginWidth : 0,
							marginHeight : 0,
							frameBorder : 0
						});
				k.readyFunction = "ready";
				k.eventProxyFunction = "events";
				k.errorEventProxyFunction = "errors";
				u.d(r, "load", u.bind(this, function() {
									var a, d = r.contentWindow;
									a = r.contentDocument
											? r.contentDocument
											: r.contentWindow.document;
									a.write(u.f.nc(c.swf, k, q, n));
									d.player = this.b;
									d.ready = u.bind(this.b, function(c) {
												var d = this.h;
												d.a = a.getElementById(c);
												u.f.pb(d)
											});
									d.events = u.bind(this.b, function(a, c) {
												this && "flash" === this.ia
														&& this.j(c)
											});
									d.errors = u.bind(this.b, function(a, c) {
												u.log("Flash Error", c)
											})
								}));
				g.parentNode.replaceChild(r, g)
			} else
				u.f.Zc(c.swf, g, k, q, n)
		}
	});
	t = u.f.prototype;
	t.D = function() {
		u.r.prototype.D.call(this)
	};
	t.play = function() {
		this.a.vjs_play()
	};
	t.pause = function() {
		this.a.vjs_pause()
	};
	t.src = function(a) {
		u.f.dd(a) ? (a = u.f.Ac(a), this.Qd(a.rb), this.Rd(a.Ob)) : (a = u
				.mc(a), this.a.vjs_src(a));
		if (this.b.autoplay()) {
			var c = this;
			setTimeout(function() {
						c.play()
					}, 0)
		}
	};
	t.currentSrc = function() {
		var a = this.a.vjs_getProperty("currentSrc");
		if (a == h) {
			var c = this.Od(), d = this.Pd();
			c && d && (a = u.f.yd(c, d))
		}
		return a
	};
	t.load = function() {
		this.a.vjs_load()
	};
	t.poster = function() {
		this.a.vjs_getProperty("poster")
	};
	t.buffered = function() {
		return u.tb(0, this.a.vjs_getProperty("buffered"))
	};
	t.Ta = s(l);
	var Q = u.f.prototype, R = "rtmpConnection rtmpStream preload currentTime defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted"
			.split(" "), S = "error currentSrc networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks"
			.split(" ");
	function fa() {
		var a = R[T], c = a.charAt(0).toUpperCase() + a.slice(1);
		Q["set" + c] = function(c) {
			return this.a.vjs_setProperty(a, c)
		}
	}
	function U(a) {
		Q[a] = function() {
			return this.a.vjs_getProperty(a)
		}
	}
	var T;
	for (T = 0; T < R.length; T++)
		U(R[T]), fa();
	for (T = 0; T < S.length; T++)
		U(S[T]);
	u.f.isSupported = function() {
		return 10 <= u.f.version()[0]
	};
	u.f.mb = function(a) {
		if (!a.type)
			return "";
		a = a.type.replace(/;.*/, "").toLowerCase();
		if (a in u.f.bd || a in u.f.Bc)
			return "maybe"
	};
	u.f.bd = {
		"video/flv" : "FLV",
		"video/x-flv" : "FLV",
		"video/mp4" : "MP4",
		"video/m4v" : "MP4"
	};
	u.f.Bc = {
		"rtmp/mp4" : "MP4",
		"rtmp/flv" : "FLV"
	};
	u.f.onReady = function(a) {
		a = u.w(a);
		var c = a.player || a.parentNode.player, d = c.h;
		a.player = c;
		d.a = a;
		u.f.pb(d)
	};
	u.f.pb = function(a) {
		a.w().vjs_getProperty ? a.Ua() : setTimeout(function() {
					u.f.pb(a)
				}, 50)
	};
	u.f.onEvent = function(a, c) {
		u.w(a).player.j(c)
	};
	u.f.onError = function(a, c) {
		u.w(a).player.j("error");
		u.log("Flash Error", c, a)
	};
	u.f.version = function() {
		var a = "0,0,0";
		try {
			a = (new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"))
					.GetVariable("$version").replace(/\D+/g, ",")
					.match(/^,?(.+),?$/)[1]
		} catch (c) {
			try {
				navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin
						&& (a = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description
								.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
			} catch (d) {
			}
		}
		return a.split(",")
	};
	u.f.Zc = function(a, c, d, e, g) {
		a = u.f.nc(a, d, e, g);
		a = u.e("div", {
					innerHTML : a
				}).childNodes[0];
		d = c.parentNode;
		c.parentNode.replaceChild(a, c);
		var j = d.childNodes[0];
		setTimeout(function() {
					j.style.display = "block"
				}, 1E3)
	};
	u.f.nc = function(a, c, d, e) {
		var g = "", j = "", k = "";
		c && u.k.ua(c, function(a, c) {
					g += a + "=" + c + "&amp;"
				});
		d = u.k.B({
					movie : a,
					flashvars : g,
					allowScriptAccess : "always",
					allowNetworking : "all"
				}, d);
		u.k.ua(d, function(a, c) {
					j += '<param name="' + a + '" value="' + c + '" />'
				});
		e = u.k.B({
					data : a,
					width : "100%",
					height : "100%"
				}, e);
		u.k.ua(e, function(a, c) {
					k += a + '="' + c + '" '
				});
		return '<object type="application/x-shockwave-flash"' + k + ">" + j
				+ "</object>"
	};
	u.f.yd = function(a, c) {
		return a + "&" + c
	};
	u.f.Ac = function(a) {
		var c = {
			rb : "",
			Ob : ""
		};
		if (!a)
			return c;
		var d = a.indexOf("&"), e;
		-1 !== d ? e = d + 1 : (d = e = a.lastIndexOf("/") + 1, 0 === d
				&& (d = e = a.length));
		c.rb = a.substring(0, d);
		c.Ob = a.substring(e, a.length);
		return c
	};
	u.f.ed = function(a) {
		return a in u.f.Bc
	};
	u.f.Qc = /^rtmp[set]?:\/\//i;
	u.f.dd = function(a) {
		return u.f.Qc.test(a)
	};
	u.Pc = u.c.extend({
				i : function(a, c, d) {
					u.c.call(this, a, c, d);
					if (!a.g.sources || 0 === a.g.sources.length) {
						c = 0;
						for (d = a.g.techOrder; c < d.length; c++) {
							var e = u.$(d[c]), g = window.videojs[e];
							if (g && g.isSupported()) {
								I(a, e);
								break
							}
						}
					} else
						a.src(a.g.sources)
				}
			});
	function V(a) {
		a.Aa = a.Aa || [];
		return a.Aa
	}
	function W(a, c, d) {
		for (var e = a.Aa, g = 0, j = e.length, k, q; g < j; g++)
			k = e[g], k.id() === c ? (k.show(), q = k) : d
					&& (k.J() == d && 0 < k.mode()) && k.disable();
		(c = q ? q.J() : d ? d : l) && a.j(c + "trackchange")
	}
	u.X = u.c.extend({
				i : function(a, c) {
					u.c.call(this, a, c);
					this.Q = c.id || "vjs_" + c.kind + "_" + c.language + "_"
							+ u.t++;
					this.xc = c.src;
					this.Wc = c["default"] || c.dflt;
					this.Ad = c.title;
					this.Ld = c.srclang;
					this.fd = c.label;
					this.fa = [];
					this.ec = [];
					this.ga = this.ha = 0;
					this.b.d("fullscreenchange", u.bind(this, this.Rc))
				}
			});
	t = u.X.prototype;
	t.J = p("A");
	t.src = p("xc");
	t.ub = p("Wc");
	t.title = p("Ad");
	t.label = p("fd");
	t.readyState = p("ha");
	t.mode = p("ga");
	t.Rc = function() {
		this.a.style.fontSize = this.b.H ? 140
				* (screen.width / this.b.width()) + "%" : ""
	};
	t.e = function() {
		return u.c.prototype.e.call(this, "div", {
					className : "vjs-" + this.A + " vjs-text-track"
				})
	};
	t.show = function() {
		X(this);
		this.ga = 2;
		u.c.prototype.show.call(this)
	};
	t.C = function() {
		X(this);
		this.ga = 1;
		u.c.prototype.C.call(this)
	};
	t.disable = function() {
		2 == this.ga && this.C();
		this.b.o("timeupdate", u.bind(this, this.update, this.Q));
		this.b.o("ended", u.bind(this, this.reset, this.Q));
		this.reset();
		this.b.V.textTrackDisplay.removeChild(this);
		this.ga = 0
	};
	function X(a) {
		0 === a.ha && a.load();
		0 === a.ga
				&& (a.b.d("timeupdate", u.bind(a, a.update, a.Q)), a.b.d(
						"ended", u.bind(a, a.reset, a.Q)), ("captions" === a.A || "subtitles" === a.A)
						&& a.b.V.textTrackDisplay.Z(a))
	}
	t.load = function() {
		0 === this.ha
				&& (this.ha = 1, u.get(this.xc, u.bind(this, this.nd), u.bind(
								this, this.Gb)))
	};
	t.Gb = function(a) {
		this.error = a;
		this.ha = 3;
		this.j("error")
	};
	t.nd = function(a) {
		var c, d;
		a = a.split("\n");
		for (var e = "", g = 1, j = a.length; g < j; g++)
			if (e = u.trim(a[g])) {
				-1 == e.indexOf("--\x3e")
						? (c = e, e = u.trim(a[++g]))
						: c = this.fa.length;
				c = {
					id : c,
					index : this.fa.length
				};
				d = e.split(" --\x3e ");
				c.startTime = Y(d[0]);
				c.va = Y(d[1]);
				for (d = []; a[++g] && (e = u.trim(a[g]));)
					d.push(e);
				c.text = d.join("<br/>");
				this.fa.push(c)
			}
		this.ha = 2;
		this.j("loaded")
	};
	function Y(a) {
		var c = a.split(":");
		a = 0;
		var d, e, g;
		3 == c.length
				? (d = c[0], e = c[1], c = c[2])
				: (d = 0, e = c[0], c = c[1]);
		c = c.split(/\s+/);
		c = c.splice(0, 1)[0];
		c = c.split(/\.|,/);
		g = parseFloat(c[1]);
		c = c[0];
		a += 3600 * parseFloat(d);
		a += 60 * parseFloat(e);
		a += parseFloat(c);
		g && (a += g / 1E3);
		return a
	}
	t.update = function() {
		if (0 < this.fa.length) {
			var a = this.b.currentTime();
			if (this.Lb === b || a < this.Lb || this.Ma <= a) {
				var c = this.fa, d = this.b.duration(), e = 0, g = l, j = [], k, q, n, r;
				a >= this.Ma || this.Ma === b
						? r = this.wb !== b ? this.wb : 0
						: (g = f, r = this.Db !== b ? this.Db : c.length - 1);
				for (;;) {
					n = c[r];
					if (n.va <= a)
						e = Math.max(e, n.va), n.Ia && (n.Ia = l);
					else if (a < n.startTime) {
						if (d = Math.min(d, n.startTime), n.Ia && (n.Ia = l), !g)
							break
					} else
						g ? (j.splice(0, 0, n), q === b && (q = r), k = r) : (j
								.push(n), k === b && (k = r), q = r), d = Math
								.min(d, n.va), e = Math.max(e, n.startTime), n.Ia = f;
					if (g)
						if (0 === r)
							break;
						else
							r--;
					else if (r === c.length - 1)
						break;
					else
						r++
				}
				this.ec = j;
				this.Ma = d;
				this.Lb = e;
				this.wb = k;
				this.Db = q;
				a = this.ec;
				c = "";
				d = 0;
				for (e = a.length; d < e; d++)
					c += '<span class="vjs-tt-cue">' + a[d].text + "</span>";
				this.a.innerHTML = c;
				this.j("cuechange")
			}
		}
	};
	t.reset = function() {
		this.Ma = 0;
		this.Lb = this.b.duration();
		this.Db = this.wb = 0
	};
	u.Ub = u.X.extend();
	u.Ub.prototype.A = "captions";
	u.$b = u.X.extend();
	u.$b.prototype.A = "subtitles";
	u.Vb = u.X.extend();
	u.Vb.prototype.A = "chapters";
	u.bc = u.c.extend({
				i : function(a, c, d) {
					u.c.call(this, a, c, d);
					if (a.g.tracks && 0 < a.g.tracks.length) {
						c = this.b;
						a = a.g.tracks;
						var e;
						for (d = 0; d < a.length; d++) {
							e = a[d];
							var g = c, j = e.kind, k = e.label, q = e.language, n = e;
							e = g.Aa = g.Aa || [];
							n = n || {};
							n.kind = j;
							n.label = k;
							n.language = q;
							j = u.$(j || "subtitles");
							g = new window.videojs[j + "Track"](g, n);
							e.push(g)
						}
					}
				}
			});
	u.bc.prototype.e = function() {
		return u.c.prototype.e.call(this, "div", {
					className : "vjs-text-track-display"
				})
	};
	u.Y = u.N.extend({
				i : function(a, c) {
					var d = this.ca = c.track;
					c.label = d.label();
					c.selected = d.ub();
					u.N.call(this, a, c);
					this.b.d(d.J() + "trackchange", u.bind(this, this.update))
				}
			});
	u.Y.prototype.p = function() {
		u.N.prototype.p.call(this);
		W(this.b, this.ca.Q, this.ca.J())
	};
	u.Y.prototype.update = function() {
		this.selected(2 == this.ca.mode())
	};
	u.bb = u.Y.extend({
				i : function(a, c) {
					c.track = {
						J : function() {
							return c.kind
						},
						K : a,
						label : function() {
							return c.kind + " off"
						},
						ub : s(l),
						mode : s(l)
					};
					u.Y.call(this, a, c);
					this.selected(f)
				}
			});
	u.bb.prototype.p = function() {
		u.Y.prototype.p.call(this);
		W(this.b, this.ca.Q, this.ca.J())
	};
	u.bb.prototype.update = function() {
		for (var a = V(this.b), c = 0, d = a.length, e, g = f; c < d; c++)
			e = a[c], e.J() == this.ca.J() && 2 == e.mode() && (g = l);
		this.selected(g)
	};
	u.S = u.R.extend({
				i : function(a, c) {
					u.R.call(this, a, c);
					1 >= this.I.length && this.C()
				}
			});
	u.S.prototype.ta = function() {
		var a = [], c;
		a.push(new u.bb(this.b, {
					kind : this.A
				}));
		for (var d = 0; d < V(this.b).length; d++)
			c = V(this.b)[d], c.J() === this.A && a.push(new u.Y(this.b, {
						track : c
					}));
		return a
	};
	u.Da = u.S.extend({
				i : function(a, c, d) {
					u.S.call(this, a, c, d);
					this.a.setAttribute("aria-label", "Captions Menu")
				}
			});
	u.Da.prototype.A = "captions";
	u.Da.prototype.qa = "Captions";
	u.Da.prototype.className = "vjs-captions-button";
	u.Ha = u.S.extend({
				i : function(a, c, d) {
					u.S.call(this, a, c, d);
					this.a.setAttribute("aria-label", "Subtitles Menu")
				}
			});
	u.Ha.prototype.A = "subtitles";
	u.Ha.prototype.qa = "Subtitles";
	u.Ha.prototype.className = "vjs-subtitles-button";
	u.Ea = u.S.extend({
				i : function(a, c, d) {
					u.S.call(this, a, c, d);
					this.a.setAttribute("aria-label", "Chapters Menu")
				}
			});
	t = u.Ea.prototype;
	t.A = "chapters";
	t.qa = "Chapters";
	t.className = "vjs-chapters-button";
	t.ta = function() {
		for (var a = [], c, d = 0; d < V(this.b).length; d++)
			c = V(this.b)[d], c.J() === this.A && a.push(new u.Y(this.b, {
						track : c
					}));
		return a
	};
	t.Ka = function() {
		for (var a = V(this.b), c = 0, d = a.length, e, g, j = this.I = []; c < d; c++)
			if (e = a[c], e.J() == this.A && e.ub()) {
				if (2 > e.readyState()) {
					this.Id = e;
					e.d("loaded", u.bind(this, this.Ka));
					return
				}
				g = e;
				break
			}
		a = this.wa = new u.ma(this.b);
		a.a.appendChild(u.e("li", {
					className : "vjs-menu-title",
					innerHTML : u.$(this.A),
					zd : -1
				}));
		if (g) {
			e = g.fa;
			for (var k, c = 0, d = e.length; c < d; c++)
				k = e[c], k = new u.Xa(this.b, {
							track : g,
							cue : k
						}), j.push(k), a.Z(k)
		}
		0 < this.I.length && this.show();
		return a
	};
	u.Xa = u.N.extend({
				i : function(a, c) {
					var d = this.ca = c.track, e = this.cue = c.cue, g = a
							.currentTime();
					c.label = e.text;
					c.selected = e.startTime <= g && g < e.va;
					u.N.call(this, a, c);
					d.d("cuechange", u.bind(this, this.update))
				}
			});
	u.Xa.prototype.p = function() {
		u.N.prototype.p.call(this);
		this.b.currentTime(this.cue.startTime);
		this.update(this.cue.startTime)
	};
	u.Xa.prototype.update = function() {
		var a = this.cue, c = this.b.currentTime();
		this.selected(a.startTime <= c && c < a.va)
	};
	u.k.B(u.Fa.prototype.g.children, {
				subtitlesButton : {},
				captionsButton : {},
				chaptersButton : {}
			});
	if ("undefined" !== typeof window.JSON && "function" === window.JSON.parse)
		u.JSON = window.JSON;
	else {
		u.JSON = {};
		var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		u.JSON.parse = function(a, c) {
			function d(a, e) {
				var k, q, n = a[e];
				if (n && "object" === typeof n)
					for (k in n)
						Object.prototype.hasOwnProperty.call(n, k)
								&& (q = d(n, k), q !== b
										? n[k] = q
										: delete n[k]);
				return c.call(a, e, n)
			}
			var e;
			a = String(a);
			Z.lastIndex = 0;
			Z.test(a) && (a = a.replace(Z, function(a) {
						return "\\u"
								+ ("0000" + a.charCodeAt(0).toString(16))
										.slice(-4)
					}));
			if (/^[\],:{}\s]*$/
					.test(a
							.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
							.replace(
									/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
									"]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
				return e = eval("(" + a + ")"), "function" === typeof c ? d({
							"" : e
						}, "") : e;
			throw new SyntaxError("JSON.parse(): invalid or malformed JSON data");
		}
	}
	u.fc = function() {
		var a, c, d = document.getElementsByTagName("video");
		if (d && 0 < d.length)
			for (var e = 0, g = d.length; e < g; e++)
				if ((c = d[e]) && c.getAttribute)
					c.player === b
							&& (a = c.getAttribute("data-setup"), a !== h
									&& (a = u.JSON.parse(a || "{}"), v(c, a)));
				else {
					u.kb();
					break
				}
		else
			u.Ec || u.kb()
	};
	u.kb = function() {
		setTimeout(u.fc, 1)
	};
	"complete" === document.readyState ? u.Ec = f : u.U(window, "load",
			function() {
				u.Ec = f
			});
	u.kb();
	u.od = function(a, c) {
		u.s.prototype[a] = c
	};
	var ga = this;
	ga.Ed = f;
	function $(a, c) {
		var d = a.split("."), e = ga;
		!(d[0] in e) && e.execScript && e.execScript("var " + d[0]);
		for (var g; d.length && (g = d.shift());)
			!d.length && c !== b ? e[g] = c : e = e[g] ? e[g] : e[g] = {}
	};
	$("videojs", u);
	$("_V_", u);
	$("videojs.options", u.options);
	$("videojs.players", u.xa);
	$("videojs.TOUCH_ENABLED", u.ac);
	$("videojs.cache", u.ra);
	$("videojs.Component", u.c);
	u.c.prototype.player = u.c.prototype.K;
	u.c.prototype.dispose = u.c.prototype.D;
	u.c.prototype.createEl = u.c.prototype.e;
	u.c.prototype.el = u.c.prototype.w;
	u.c.prototype.addChild = u.c.prototype.Z;
	u.c.prototype.children = u.c.prototype.children;
	u.c.prototype.on = u.c.prototype.d;
	u.c.prototype.off = u.c.prototype.o;
	u.c.prototype.one = u.c.prototype.U;
	u.c.prototype.trigger = u.c.prototype.j;
	u.c.prototype.triggerReady = u.c.prototype.Ua;
	u.c.prototype.show = u.c.prototype.show;
	u.c.prototype.hide = u.c.prototype.C;
	u.c.prototype.width = u.c.prototype.width;
	u.c.prototype.height = u.c.prototype.height;
	u.c.prototype.dimensions = u.c.prototype.Xc;
	u.c.prototype.ready = u.c.prototype.L;
	u.c.prototype.addClass = u.c.prototype.n;
	u.c.prototype.removeClass = u.c.prototype.u;
	$("videojs.Player", u.s);
	u.s.prototype.dispose = u.s.prototype.D;
	u.s.prototype.requestFullScreen = u.s.prototype.ya;
	u.s.prototype.cancelFullScreen = u.s.prototype.ob;
	u.s.prototype.bufferedPercent = u.s.prototype.Ja;
	u.s.prototype.usingNativeControls = u.s.prototype.Rb;
	u.s.prototype.reportUserActivity = u.s.prototype.Mb;
	u.s.prototype.userActive = u.s.prototype.ja;
	$("videojs.MediaLoader", u.Pc);
	$("videojs.TextTrackDisplay", u.bc);
	$("videojs.ControlBar", u.Fa);
	$("videojs.Button", u.q);
	$("videojs.PlayToggle", u.Yb);
	$("videojs.FullscreenToggle", u.Ga);
	$("videojs.BigPlayButton", u.Wa);
	$("videojs.LoadingSpinner", u.Wb);
	$("videojs.CurrentTimeDisplay", u.Ya);
	$("videojs.DurationDisplay", u.Za);
	$("videojs.TimeDivider", u.cc);
	$("videojs.RemainingTimeDisplay", u.fb);
	$("videojs.Slider", u.O);
	$("videojs.ProgressControl", u.eb);
	$("videojs.SeekBar", u.Zb);
	$("videojs.LoadProgressBar", u.ab);
	$("videojs.PlayProgressBar", u.Xb);
	$("videojs.SeekHandle", u.gb);
	$("videojs.VolumeControl", u.ib);
	$("videojs.VolumeBar", u.hb);
	$("videojs.VolumeLevel", u.dc);
	$("videojs.VolumeMenuButton", u.oa);
	$("videojs.VolumeHandle", u.jb);
	$("videojs.MuteToggle", u.da);
	$("videojs.PosterImage", u.cb);
	$("videojs.Menu", u.ma);
	$("videojs.MenuItem", u.N);
	$("videojs.MenuButton", u.R);
	u.R.prototype.createItems = u.R.prototype.ta;
	u.S.prototype.createItems = u.S.prototype.ta;
	u.Ea.prototype.createItems = u.Ea.prototype.ta;
	$("videojs.SubtitlesButton", u.Ha);
	$("videojs.CaptionsButton", u.Da);
	$("videojs.ChaptersButton", u.Ea);
	$("videojs.MediaTechController", u.r);
	u.r.prototype.features = u.r.prototype.m;
	u.r.prototype.m.volumeControl = u.r.prototype.m.Dc;
	u.r.prototype.m.fullscreenResize = u.r.prototype.m.Jd;
	u.r.prototype.m.progressEvents = u.r.prototype.m.Nd;
	u.r.prototype.m.timeupdateEvents = u.r.prototype.m.Sd;
	$("videojs.Html5", u.l);
	u.l.Events = u.l.$a;
	u.l.isSupported = u.l.isSupported;
	u.l.canPlaySource = u.l.mb;
	u.l.prototype.setCurrentTime = u.l.prototype.sd;
	u.l.prototype.setVolume = u.l.prototype.xd;
	u.l.prototype.setMuted = u.l.prototype.vd;
	u.l.prototype.setPreload = u.l.prototype.wd;
	u.l.prototype.setAutoplay = u.l.prototype.rd;
	u.l.prototype.setLoop = u.l.prototype.ud;
	$("videojs.Flash", u.f);
	u.f.isSupported = u.f.isSupported;
	u.f.canPlaySource = u.f.mb;
	u.f.onReady = u.f.onReady;
	$("videojs.TextTrack", u.X);
	u.X.prototype.label = u.X.prototype.label;
	$("videojs.CaptionsTrack", u.Ub);
	$("videojs.SubtitlesTrack", u.$b);
	$("videojs.ChaptersTrack", u.Vb);
	$("videojs.autoSetup", u.fc);
	$("videojs.plugin", u.od);
	$("videojs.createTimeRange", u.tb);
})();
