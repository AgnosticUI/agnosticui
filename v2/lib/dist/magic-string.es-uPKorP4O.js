var x = 44, E = 59, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", S = new Uint8Array(64), k = new Uint8Array(128);
for (let u = 0; u < m.length; u++) {
  const t = m.charCodeAt(u);
  S[u] = t, k[t] = u;
}
function c(u, t, e) {
  let i = t - e;
  i = i < 0 ? -i << 1 | 1 : i << 1;
  do {
    let n = i & 31;
    i >>>= 5, i > 0 && (n |= 32), u.write(S[n]);
  } while (i > 0);
  return t;
}
var b = 1024 * 16, C = typeof TextDecoder < "u" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer < "u" ? {
  decode(u) {
    return Buffer.from(u.buffer, u.byteOffset, u.byteLength).toString();
  }
} : {
  decode(u) {
    let t = "";
    for (let e = 0; e < u.length; e++)
      t += String.fromCharCode(u[e]);
    return t;
  }
}, L = class {
  constructor() {
    this.pos = 0, this.out = "", this.buffer = new Uint8Array(b);
  }
  write(u) {
    const { buffer: t } = this;
    t[this.pos++] = u, this.pos === b && (this.out += C.decode(t), this.pos = 0);
  }
  flush() {
    const { buffer: u, out: t, pos: e } = this;
    return e > 0 ? t + C.decode(u.subarray(0, e)) : t;
  }
};
function R(u) {
  const t = new L();
  let e = 0, i = 0, n = 0, r = 0;
  for (let s = 0; s < u.length; s++) {
    const h = u[s];
    if (s > 0 && t.write(E), h.length === 0) continue;
    let o = 0;
    for (let l = 0; l < h.length; l++) {
      const a = h[l];
      l > 0 && t.write(x), o = c(t, a[0], o), a.length !== 1 && (e = c(t, a[1], e), i = c(t, a[2], i), n = c(t, a[3], n), a.length !== 4 && (r = c(t, a[4], r)));
    }
  }
  return t.flush();
}
class p {
  constructor(t) {
    this.bits = t instanceof p ? t.bits.slice() : [];
  }
  add(t) {
    this.bits[t >> 5] |= 1 << (t & 31);
  }
  has(t) {
    return !!(this.bits[t >> 5] & 1 << (t & 31));
  }
}
class g {
  constructor(t, e, i) {
    this.start = t, this.end = e, this.original = i, this.intro = "", this.outro = "", this.content = i, this.storeName = !1, this.edited = !1, this.previous = null, this.next = null;
  }
  appendLeft(t) {
    this.outro += t;
  }
  appendRight(t) {
    this.intro = this.intro + t;
  }
  clone() {
    const t = new g(this.start, this.end, this.original);
    return t.intro = this.intro, t.outro = this.outro, t.content = this.content, t.storeName = this.storeName, t.edited = this.edited, t;
  }
  contains(t) {
    return this.start < t && t < this.end;
  }
  eachNext(t) {
    let e = this;
    for (; e; )
      t(e), e = e.next;
  }
  eachPrevious(t) {
    let e = this;
    for (; e; )
      t(e), e = e.previous;
  }
  edit(t, e, i) {
    return this.content = t, i || (this.intro = "", this.outro = ""), this.storeName = e, this.edited = !0, this;
  }
  prependLeft(t) {
    this.outro = t + this.outro;
  }
  prependRight(t) {
    this.intro = t + this.intro;
  }
  reset() {
    this.intro = "", this.outro = "", this.edited && (this.content = this.original, this.storeName = !1, this.edited = !1);
  }
  split(t) {
    const e = t - this.start, i = this.original.slice(0, e), n = this.original.slice(e);
    this.original = i;
    const r = new g(t, this.end, n);
    return r.outro = this.outro, this.outro = "", this.end = t, this.edited ? (r.edit("", !1), this.content = "") : this.content = i, r.next = this.next, r.next && (r.next.previous = r), r.previous = this, this.next = r, r;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(t) {
    if (this.outro = this.outro.replace(t, ""), this.outro.length) return !0;
    const e = this.content.replace(t, "");
    if (e.length)
      return e !== this.content && (this.split(this.start + e.length).edit("", void 0, !0), this.edited && this.edit(e, this.storeName, !0)), !0;
    if (this.edit("", void 0, !0), this.intro = this.intro.replace(t, ""), this.intro.length) return !0;
  }
  trimStart(t) {
    if (this.intro = this.intro.replace(t, ""), this.intro.length) return !0;
    const e = this.content.replace(t, "");
    if (e.length) {
      if (e !== this.content) {
        const i = this.split(this.end - e.length);
        this.edited && i.edit(e, this.storeName, !0), this.edit("", void 0, !0);
      }
      return !0;
    } else if (this.edit("", void 0, !0), this.outro = this.outro.replace(t, ""), this.outro.length) return !0;
  }
}
function _() {
  return typeof globalThis < "u" && typeof globalThis.btoa == "function" ? (u) => globalThis.btoa(unescape(encodeURIComponent(u))) : typeof Buffer == "function" ? (u) => Buffer.from(u, "utf-8").toString("base64") : () => {
    throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
  };
}
const O = /* @__PURE__ */ _();
class N {
  constructor(t) {
    this.version = 3, this.file = t.file, this.sources = t.sources, this.sourcesContent = t.sourcesContent, this.names = t.names, this.mappings = R(t.mappings), typeof t.x_google_ignoreList < "u" && (this.x_google_ignoreList = t.x_google_ignoreList), typeof t.debugId < "u" && (this.debugId = t.debugId);
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return "data:application/json;charset=utf-8;base64," + O(this.toString());
  }
}
function I(u) {
  const t = u.split(`
`), e = t.filter((r) => /^\t+/.test(r)), i = t.filter((r) => /^ {2,}/.test(r));
  if (e.length === 0 && i.length === 0)
    return null;
  if (e.length >= i.length)
    return "	";
  const n = i.reduce((r, s) => {
    const h = /^ +/.exec(s)[0].length;
    return Math.min(h, r);
  }, 1 / 0);
  return new Array(n + 1).join(" ");
}
function A(u, t) {
  const e = u.split(/[/\\]/), i = t.split(/[/\\]/);
  for (e.pop(); e[0] === i[0]; )
    e.shift(), i.shift();
  if (e.length) {
    let n = e.length;
    for (; n--; ) e[n] = "..";
  }
  return e.concat(i).join("/");
}
const T = Object.prototype.toString;
function j(u) {
  return T.call(u) === "[object Object]";
}
function y(u) {
  const t = u.split(`
`), e = [];
  for (let i = 0, n = 0; i < t.length; i++)
    e.push(n), n += t[i].length + 1;
  return function(n) {
    let r = 0, s = e.length;
    for (; r < s; ) {
      const l = r + s >> 1;
      n < e[l] ? s = l : r = l + 1;
    }
    const h = r - 1, o = n - e[h];
    return { line: h, column: o };
  };
}
const $ = /\w/;
class U {
  constructor(t) {
    this.hires = t, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
  }
  addEdit(t, e, i, n) {
    if (e.length) {
      const r = e.length - 1;
      let s = e.indexOf(`
`, 0), h = -1;
      for (; s >= 0 && r > s; ) {
        const l = [this.generatedCodeColumn, t, i.line, i.column];
        n >= 0 && l.push(n), this.rawSegments.push(l), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, h = s, s = e.indexOf(`
`, s + 1);
      }
      const o = [this.generatedCodeColumn, t, i.line, i.column];
      n >= 0 && o.push(n), this.rawSegments.push(o), this.advance(e.slice(h + 1));
    } else this.pending && (this.rawSegments.push(this.pending), this.advance(e));
    this.pending = null;
  }
  addUneditedChunk(t, e, i, n, r) {
    let s = e.start, h = !0, o = !1;
    for (; s < e.end; ) {
      if (i[s] === `
`)
        n.line += 1, n.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, h = !0, o = !1;
      else {
        if (this.hires || h || r.has(s)) {
          const l = [this.generatedCodeColumn, t, n.line, n.column];
          this.hires === "boundary" ? $.test(i[s]) ? o || (this.rawSegments.push(l), o = !0) : (this.rawSegments.push(l), o = !1) : this.rawSegments.push(l);
        }
        n.column += 1, this.generatedCodeColumn += 1, h = !1;
      }
      s += 1;
    }
    this.pending = null;
  }
  advance(t) {
    if (!t) return;
    const e = t.split(`
`);
    if (e.length > 1) {
      for (let i = 0; i < e.length - 1; i++)
        this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += e[e.length - 1].length;
  }
}
const d = `
`, f = {
  insertLeft: !1,
  insertRight: !1,
  storeName: !1
};
class v {
  constructor(t, e = {}) {
    const i = new g(0, t.length, t);
    Object.defineProperties(this, {
      original: { writable: !0, value: t },
      outro: { writable: !0, value: "" },
      intro: { writable: !0, value: "" },
      firstChunk: { writable: !0, value: i },
      lastChunk: { writable: !0, value: i },
      lastSearchedChunk: { writable: !0, value: i },
      byStart: { writable: !0, value: {} },
      byEnd: { writable: !0, value: {} },
      filename: { writable: !0, value: e.filename },
      indentExclusionRanges: { writable: !0, value: e.indentExclusionRanges },
      sourcemapLocations: { writable: !0, value: new p() },
      storedNames: { writable: !0, value: {} },
      indentStr: { writable: !0, value: void 0 },
      ignoreList: { writable: !0, value: e.ignoreList },
      offset: { writable: !0, value: e.offset || 0 }
    }), this.byStart[0] = i, this.byEnd[t.length] = i;
  }
  addSourcemapLocation(t) {
    this.sourcemapLocations.add(t);
  }
  append(t) {
    if (typeof t != "string") throw new TypeError("outro content must be a string");
    return this.outro += t, this;
  }
  appendLeft(t, e) {
    if (t = t + this.offset, typeof e != "string") throw new TypeError("inserted content must be a string");
    this._split(t);
    const i = this.byEnd[t];
    return i ? i.appendLeft(e) : this.intro += e, this;
  }
  appendRight(t, e) {
    if (t = t + this.offset, typeof e != "string") throw new TypeError("inserted content must be a string");
    this._split(t);
    const i = this.byStart[t];
    return i ? i.appendRight(e) : this.outro += e, this;
  }
  clone() {
    const t = new v(this.original, { filename: this.filename, offset: this.offset });
    let e = this.firstChunk, i = t.firstChunk = t.lastSearchedChunk = e.clone();
    for (; e; ) {
      t.byStart[i.start] = i, t.byEnd[i.end] = i;
      const n = e.next, r = n && n.clone();
      r && (i.next = r, r.previous = i, i = r), e = n;
    }
    return t.lastChunk = i, this.indentExclusionRanges && (t.indentExclusionRanges = this.indentExclusionRanges.slice()), t.sourcemapLocations = new p(this.sourcemapLocations), t.intro = this.intro, t.outro = this.outro, t;
  }
  generateDecodedMap(t) {
    t = t || {};
    const e = 0, i = Object.keys(this.storedNames), n = new U(t.hires), r = y(this.original);
    return this.intro && n.advance(this.intro), this.firstChunk.eachNext((s) => {
      const h = r(s.start);
      s.intro.length && n.advance(s.intro), s.edited ? n.addEdit(
        e,
        s.content,
        h,
        s.storeName ? i.indexOf(s.original) : -1
      ) : n.addUneditedChunk(e, s, this.original, h, this.sourcemapLocations), s.outro.length && n.advance(s.outro);
    }), this.outro && n.advance(this.outro), {
      file: t.file ? t.file.split(/[/\\]/).pop() : void 0,
      sources: [
        t.source ? A(t.file || "", t.source) : t.file || ""
      ],
      sourcesContent: t.includeContent ? [this.original] : void 0,
      names: i,
      mappings: n.raw,
      x_google_ignoreList: this.ignoreList ? [e] : void 0
    };
  }
  generateMap(t) {
    return new N(this.generateDecodedMap(t));
  }
  _ensureindentStr() {
    this.indentStr === void 0 && (this.indentStr = I(this.original));
  }
  _getRawIndentString() {
    return this._ensureindentStr(), this.indentStr;
  }
  getIndentString() {
    return this._ensureindentStr(), this.indentStr === null ? "	" : this.indentStr;
  }
  indent(t, e) {
    const i = /^[^\r\n]/gm;
    if (j(t) && (e = t, t = void 0), t === void 0 && (this._ensureindentStr(), t = this.indentStr || "	"), t === "") return this;
    e = e || {};
    const n = {};
    e.exclude && (typeof e.exclude[0] == "number" ? [e.exclude] : e.exclude).forEach((a) => {
      for (let w = a[0]; w < a[1]; w += 1)
        n[w] = !0;
    });
    let r = e.indentStart !== !1;
    const s = (l) => r ? `${t}${l}` : (r = !0, l);
    this.intro = this.intro.replace(i, s);
    let h = 0, o = this.firstChunk;
    for (; o; ) {
      const l = o.end;
      if (o.edited)
        n[h] || (o.content = o.content.replace(i, s), o.content.length && (r = o.content[o.content.length - 1] === `
`));
      else
        for (h = o.start; h < l; ) {
          if (!n[h]) {
            const a = this.original[h];
            a === `
` ? r = !0 : a !== "\r" && r && (r = !1, h === o.start || (this._splitChunk(o, h), o = o.next), o.prependRight(t));
          }
          h += 1;
        }
      h = o.end, o = o.next;
    }
    return this.outro = this.outro.replace(i, s), this;
  }
  insert() {
    throw new Error(
      "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
    );
  }
  insertLeft(t, e) {
    return f.insertLeft || (console.warn(
      "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
    ), f.insertLeft = !0), this.appendLeft(t, e);
  }
  insertRight(t, e) {
    return f.insertRight || (console.warn(
      "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
    ), f.insertRight = !0), this.prependRight(t, e);
  }
  move(t, e, i) {
    if (t = t + this.offset, e = e + this.offset, i = i + this.offset, i >= t && i <= e) throw new Error("Cannot move a selection inside itself");
    this._split(t), this._split(e), this._split(i);
    const n = this.byStart[t], r = this.byEnd[e], s = n.previous, h = r.next, o = this.byStart[i];
    if (!o && r === this.lastChunk) return this;
    const l = o ? o.previous : this.lastChunk;
    return s && (s.next = h), h && (h.previous = s), l && (l.next = n), o && (o.previous = r), n.previous || (this.firstChunk = r.next), r.next || (this.lastChunk = n.previous, this.lastChunk.next = null), n.previous = l, r.next = o || null, l || (this.firstChunk = n), o || (this.lastChunk = r), this;
  }
  overwrite(t, e, i, n) {
    return n = n || {}, this.update(t, e, i, { ...n, overwrite: !n.contentOnly });
  }
  update(t, e, i, n) {
    if (t = t + this.offset, e = e + this.offset, typeof i != "string") throw new TypeError("replacement content must be a string");
    if (this.original.length !== 0) {
      for (; t < 0; ) t += this.original.length;
      for (; e < 0; ) e += this.original.length;
    }
    if (e > this.original.length) throw new Error("end is out of bounds");
    if (t === e)
      throw new Error(
        "Cannot overwrite a zero-length range – use appendLeft or prependRight instead"
      );
    this._split(t), this._split(e), n === !0 && (f.storeName || (console.warn(
      "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
    ), f.storeName = !0), n = { storeName: !0 });
    const r = n !== void 0 ? n.storeName : !1, s = n !== void 0 ? n.overwrite : !1;
    if (r) {
      const l = this.original.slice(t, e);
      Object.defineProperty(this.storedNames, l, {
        writable: !0,
        value: !0,
        enumerable: !0
      });
    }
    const h = this.byStart[t], o = this.byEnd[e];
    if (h) {
      let l = h;
      for (; l !== o; ) {
        if (l.next !== this.byStart[l.end])
          throw new Error("Cannot overwrite across a split point");
        l = l.next, l.edit("", !1);
      }
      h.edit(i, r, !s);
    } else {
      const l = new g(t, e, "").edit(i, r);
      o.next = l, l.previous = o;
    }
    return this;
  }
  prepend(t) {
    if (typeof t != "string") throw new TypeError("outro content must be a string");
    return this.intro = t + this.intro, this;
  }
  prependLeft(t, e) {
    if (t = t + this.offset, typeof e != "string") throw new TypeError("inserted content must be a string");
    this._split(t);
    const i = this.byEnd[t];
    return i ? i.prependLeft(e) : this.intro = e + this.intro, this;
  }
  prependRight(t, e) {
    if (t = t + this.offset, typeof e != "string") throw new TypeError("inserted content must be a string");
    this._split(t);
    const i = this.byStart[t];
    return i ? i.prependRight(e) : this.outro = e + this.outro, this;
  }
  remove(t, e) {
    if (t = t + this.offset, e = e + this.offset, this.original.length !== 0) {
      for (; t < 0; ) t += this.original.length;
      for (; e < 0; ) e += this.original.length;
    }
    if (t === e) return this;
    if (t < 0 || e > this.original.length) throw new Error("Character is out of bounds");
    if (t > e) throw new Error("end must be greater than start");
    this._split(t), this._split(e);
    let i = this.byStart[t];
    for (; i; )
      i.intro = "", i.outro = "", i.edit(""), i = e > i.end ? this.byStart[i.end] : null;
    return this;
  }
  reset(t, e) {
    if (t = t + this.offset, e = e + this.offset, this.original.length !== 0) {
      for (; t < 0; ) t += this.original.length;
      for (; e < 0; ) e += this.original.length;
    }
    if (t === e) return this;
    if (t < 0 || e > this.original.length) throw new Error("Character is out of bounds");
    if (t > e) throw new Error("end must be greater than start");
    this._split(t), this._split(e);
    let i = this.byStart[t];
    for (; i; )
      i.reset(), i = e > i.end ? this.byStart[i.end] : null;
    return this;
  }
  lastChar() {
    if (this.outro.length) return this.outro[this.outro.length - 1];
    let t = this.lastChunk;
    do {
      if (t.outro.length) return t.outro[t.outro.length - 1];
      if (t.content.length) return t.content[t.content.length - 1];
      if (t.intro.length) return t.intro[t.intro.length - 1];
    } while (t = t.previous);
    return this.intro.length ? this.intro[this.intro.length - 1] : "";
  }
  lastLine() {
    let t = this.outro.lastIndexOf(d);
    if (t !== -1) return this.outro.substr(t + 1);
    let e = this.outro, i = this.lastChunk;
    do {
      if (i.outro.length > 0) {
        if (t = i.outro.lastIndexOf(d), t !== -1) return i.outro.substr(t + 1) + e;
        e = i.outro + e;
      }
      if (i.content.length > 0) {
        if (t = i.content.lastIndexOf(d), t !== -1) return i.content.substr(t + 1) + e;
        e = i.content + e;
      }
      if (i.intro.length > 0) {
        if (t = i.intro.lastIndexOf(d), t !== -1) return i.intro.substr(t + 1) + e;
        e = i.intro + e;
      }
    } while (i = i.previous);
    return t = this.intro.lastIndexOf(d), t !== -1 ? this.intro.substr(t + 1) + e : this.intro + e;
  }
  slice(t = 0, e = this.original.length - this.offset) {
    if (t = t + this.offset, e = e + this.offset, this.original.length !== 0) {
      for (; t < 0; ) t += this.original.length;
      for (; e < 0; ) e += this.original.length;
    }
    let i = "", n = this.firstChunk;
    for (; n && (n.start > t || n.end <= t); ) {
      if (n.start < e && n.end >= e)
        return i;
      n = n.next;
    }
    if (n && n.edited && n.start !== t)
      throw new Error(`Cannot use replaced character ${t} as slice start anchor.`);
    const r = n;
    for (; n; ) {
      n.intro && (r !== n || n.start === t) && (i += n.intro);
      const s = n.start < e && n.end >= e;
      if (s && n.edited && n.end !== e)
        throw new Error(`Cannot use replaced character ${e} as slice end anchor.`);
      const h = r === n ? t - n.start : 0, o = s ? n.content.length + e - n.end : n.content.length;
      if (i += n.content.slice(h, o), n.outro && (!s || n.end === e) && (i += n.outro), s)
        break;
      n = n.next;
    }
    return i;
  }
  // TODO deprecate this? not really very useful
  snip(t, e) {
    const i = this.clone();
    return i.remove(0, t), i.remove(e, i.original.length), i;
  }
  _split(t) {
    if (this.byStart[t] || this.byEnd[t]) return;
    let e = this.lastSearchedChunk, i = e;
    const n = t > e.end;
    for (; e; ) {
      if (e.contains(t)) return this._splitChunk(e, t);
      if (e = n ? this.byStart[e.end] : this.byEnd[e.start], e === i) return;
      i = e;
    }
  }
  _splitChunk(t, e) {
    if (t.edited && t.content.length) {
      const n = y(this.original)(e);
      throw new Error(
        `Cannot split a chunk that has already been edited (${n.line}:${n.column} – "${t.original}")`
      );
    }
    const i = t.split(e);
    return this.byEnd[e] = t, this.byStart[e] = i, this.byEnd[i.end] = i, t === this.lastChunk && (this.lastChunk = i), this.lastSearchedChunk = t, !0;
  }
  toString() {
    let t = this.intro, e = this.firstChunk;
    for (; e; )
      t += e.toString(), e = e.next;
    return t + this.outro;
  }
  isEmpty() {
    let t = this.firstChunk;
    do
      if (t.intro.length && t.intro.trim() || t.content.length && t.content.trim() || t.outro.length && t.outro.trim())
        return !1;
    while (t = t.next);
    return !0;
  }
  length() {
    let t = this.firstChunk, e = 0;
    do
      e += t.intro.length + t.content.length + t.outro.length;
    while (t = t.next);
    return e;
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(t) {
    return this.trimStart(t).trimEnd(t);
  }
  trimEndAborted(t) {
    const e = new RegExp((t || "\\s") + "+$");
    if (this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
    let i = this.lastChunk;
    do {
      const n = i.end, r = i.trimEnd(e);
      if (i.end !== n && (this.lastChunk === i && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), r) return !0;
      i = i.previous;
    } while (i);
    return !1;
  }
  trimEnd(t) {
    return this.trimEndAborted(t), this;
  }
  trimStartAborted(t) {
    const e = new RegExp("^" + (t || "\\s") + "+");
    if (this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
    let i = this.firstChunk;
    do {
      const n = i.end, r = i.trimStart(e);
      if (i.end !== n && (i === this.lastChunk && (this.lastChunk = i.next), this.byEnd[i.end] = i, this.byStart[i.next.start] = i.next, this.byEnd[i.next.end] = i.next), r) return !0;
      i = i.next;
    } while (i);
    return !1;
  }
  trimStart(t) {
    return this.trimStartAborted(t), this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(t, e) {
    function i(r, s) {
      return typeof e == "string" ? e.replace(/\$(\$|&|\d+)/g, (h, o) => o === "$" ? "$" : o === "&" ? r[0] : +o < r.length ? r[+o] : `$${o}`) : e(...r, r.index, s, r.groups);
    }
    function n(r, s) {
      let h;
      const o = [];
      for (; h = r.exec(s); )
        o.push(h);
      return o;
    }
    if (t.global)
      n(t, this.original).forEach((s) => {
        if (s.index != null) {
          const h = i(s, this.original);
          h !== s[0] && this.overwrite(s.index, s.index + s[0].length, h);
        }
      });
    else {
      const r = this.original.match(t);
      if (r && r.index != null) {
        const s = i(r, this.original);
        s !== r[0] && this.overwrite(r.index, r.index + r[0].length, s);
      }
    }
    return this;
  }
  _replaceString(t, e) {
    const { original: i } = this, n = i.indexOf(t);
    return n !== -1 && (typeof e == "function" && (e = e(t, n, i)), t !== e && this.overwrite(n, n + t.length, e)), this;
  }
  replace(t, e) {
    return typeof t == "string" ? this._replaceString(t, e) : this._replaceRegexp(t, e);
  }
  _replaceAllString(t, e) {
    const { original: i } = this, n = t.length;
    for (let r = i.indexOf(t); r !== -1; r = i.indexOf(t, r + n)) {
      const s = i.slice(r, r + n);
      let h = e;
      typeof e == "function" && (h = e(s, r, i)), s !== h && this.overwrite(r, r + n, h);
    }
    return this;
  }
  replaceAll(t, e) {
    if (typeof t == "string")
      return this._replaceAllString(t, e);
    if (!t.global)
      throw new TypeError(
        "MagicString.prototype.replaceAll called with a non-global RegExp argument"
      );
    return this._replaceRegexp(t, e);
  }
}
export {
  N as SourceMap,
  v as default
};
