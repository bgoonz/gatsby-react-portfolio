(this.workbox = this.workbox || {}),
  (this.workbox.strategies = (function (e, t, s, n, r) {
    "use strict";
    try {
      self["workbox:strategies:4.3.1"] && _();
    } catch (e) {}
    class i {
      constructor(e = {}) {
        (this.t = t.cacheNames.getRuntimeName(e.cacheName)),
          (this.s = e.plugins || []),
          (this.i = e.fetchOptions || null),
          (this.h = e.matchOptions || null);
      }
      async handle({ event: e, request: t }) {
        return this.makeRequest({
          event: e,
          request: t || e.request,
        });
      }
      async makeRequest({ event: e, request: t }) {
        "string" == typeof t && (t = new Request(t));
        let n,
          i = await s.cacheWrapper.match({
            cacheName: this.t,
            request: t,
            event: e,
            matchOptions: this.h,
            plugins: this.s,
          });
        if (!i)
          try {
            i = await this.u(t, e);
          } catch (e) {
            n = e;
          }
        if (!i)
          throw new r.WorkboxError("no-response", {
            url: t.url,
            error: n,
          });
        return i;
      }
      async u(e, t) {
        const r = await n.fetchWrapper.fetch({
            request: e,
            event: t,
            fetchOptions: this.i,
            plugins: this.s,
          }),
          i = r.clone(),
          h = s.cacheWrapper.put({
            cacheName: this.t,
            request: e,
            response: i,
            event: t,
            plugins: this.s,
          });
        if (t)
          try {
            t.waitUntil(h);
          } catch (e) {}
        return r;
      }
    }
    class h {
      constructor(e = {}) {
        (this.t = t.cacheNames.getRuntimeName(e.cacheName)),
          (this.s = e.plugins || []),
          (this.h = e.matchOptions || null);
      }
      async handle({ event: e, request: t }) {
        return this.makeRequest({
          event: e,
          request: t || e.request,
        });
      }
      async makeRequest({ event: e, request: t }) {
        "string" == typeof t && (t = new Request(t));
        const n = await s.cacheWrapper.match({
          cacheName: this.t,
          request: t,
          event: e,
          matchOptions: this.h,
          plugins: this.s,
        });
        if (!n)
          throw new r.WorkboxError("no-response", {
            url: t.url,
          });
        return n;
      }
    }
    const u = {
      cacheWillUpdate: ({ response: e }) =>
        200 === e.status || 0 === e.status ? e : null,
    };
    class a {
      constructor(e = {}) {
        if (((this.t = t.cacheNames.getRuntimeName(e.cacheName)), e.plugins)) {
          let t = e.plugins.some((e) => !!e.cacheWillUpdate);
          this.s = t ? e.plugins : [u, ...e.plugins];
        } else this.s = [u];
        (this.o = e.networkTimeoutSeconds),
          (this.i = e.fetchOptions || null),
          (this.h = e.matchOptions || null);
      }
      async handle({ event: e, request: t }) {
        return this.makeRequest({
          event: e,
          request: t || e.request,
        });
      }
      async makeRequest({ event: e, request: t }) {
        const s = [];
        "string" == typeof t && (t = new Request(t));
        const n = [];
        let i;
        if (this.o) {
          const { id: r, promise: h } = this.l({
            request: t,
            event: e,
            logs: s,
          });
          (i = r), n.push(h);
        }
        const h = this.q({
          timeoutId: i,
          request: t,
          event: e,
          logs: s,
        });
        n.push(h);
        let u = await Promise.race(n);
        if ((u || (u = await h), !u))
          throw new r.WorkboxError("no-response", {
            url: t.url,
          });
        return u;
      }
      l({ request: e, logs: t, event: s }) {
        let n;
        return {
          promise: new Promise((t) => {
            n = setTimeout(async () => {
              t(
                await this.p({
                  request: e,
                  event: s,
                })
              );
            }, 1e3 * this.o);
          }),
          id: n,
        };
      }
      async q({ timeoutId: e, request: t, logs: r, event: i }) {
        let h, u;
        try {
          u = await n.fetchWrapper.fetch({
            request: t,
            event: i,
            fetchOptions: this.i,
            plugins: this.s,
          });
        } catch (e) {
          h = e;
        }
        if ((e && clearTimeout(e), h || !u))
          u = await this.p({
            request: t,
            event: i,
          });
        else {
          const e = u.clone(),
            n = s.cacheWrapper.put({
              cacheName: this.t,
              request: t,
              response: e,
              event: i,
              plugins: this.s,
            });
          if (i)
            try {
              i.waitUntil(n);
            } catch (e) {}
        }
        return u;
      }
      p({ event: e, request: t }) {
        return s.cacheWrapper.match({
          cacheName: this.t,
          request: t,
          event: e,
          matchOptions: this.h,
          plugins: this.s,
        });
      }
    }
    class c {
      constructor(e = {}) {
        (this.t = t.cacheNames.getRuntimeName(e.cacheName)),
          (this.s = e.plugins || []),
          (this.i = e.fetchOptions || null);
      }
      async handle({ event: e, request: t }) {
        return this.makeRequest({
          event: e,
          request: t || e.request,
        });
      }
      async makeRequest({ event: e, request: t }) {
        let s, i;
        "string" == typeof t && (t = new Request(t));
        try {
          i = await n.fetchWrapper.fetch({
            request: t,
            event: e,
            fetchOptions: this.i,
            plugins: this.s,
          });
        } catch (e) {
          s = e;
        }
        if (!i)
          throw new r.WorkboxError("no-response", {
            url: t.url,
            error: s,
          });
        return i;
      }
    }
    class o {
      constructor(e = {}) {
        if (
          ((this.t = t.cacheNames.getRuntimeName(e.cacheName)),
          (this.s = e.plugins || []),
          e.plugins)
        ) {
          let t = e.plugins.some((e) => !!e.cacheWillUpdate);
          this.s = t ? e.plugins : [u, ...e.plugins];
        } else this.s = [u];
        (this.i = e.fetchOptions || null), (this.h = e.matchOptions || null);
      }
      async handle({ event: e, request: t }) {
        return this.makeRequest({
          event: e,
          request: t || e.request,
        });
      }
      async makeRequest({ event: e, request: t }) {
        "string" == typeof t && (t = new Request(t));
        const n = this.u({
          request: t,
          event: e,
        });
        let i,
          h = await s.cacheWrapper.match({
            cacheName: this.t,
            request: t,
            event: e,
            matchOptions: this.h,
            plugins: this.s,
          });
        if (h) {
          if (e)
            try {
              e.waitUntil(n);
            } catch (i) {}
        } else
          try {
            h = await n;
          } catch (e) {
            i = e;
          }
        if (!h)
          throw new r.WorkboxError("no-response", {
            url: t.url,
            error: i,
          });
        return h;
      }
      async u({ request: e, event: t }) {
        const r = await n.fetchWrapper.fetch({
            request: e,
            event: t,
            fetchOptions: this.i,
            plugins: this.s,
          }),
          i = s.cacheWrapper.put({
            cacheName: this.t,
            request: e,
            response: r.clone(),
            event: t,
            plugins: this.s,
          });
        if (t)
          try {
            t.waitUntil(i);
          } catch (e) {}
        return r;
      }
    }
    const l = {
        cacheFirst: i,
        cacheOnly: h,
        networkFirst: a,
        networkOnly: c,
        staleWhileRevalidate: o,
      },
      q = (e) => {
        const t = l[e];
        return (e) => new t(e);
      },
      w = q("cacheFirst"),
      p = q("cacheOnly"),
      v = q("networkFirst"),
      y = q("networkOnly"),
      m = q("staleWhileRevalidate");
    return (
      (e.CacheFirst = i),
      (e.CacheOnly = h),
      (e.NetworkFirst = a),
      (e.NetworkOnly = c),
      (e.StaleWhileRevalidate = o),
      (e.cacheFirst = w),
      (e.cacheOnly = p),
      (e.networkFirst = v),
      (e.networkOnly = y),
      (e.staleWhileRevalidate = m),
      e
    );
  })(
    {},
    workbox.core._private,
    workbox.core._private,
    workbox.core._private,
    workbox.core._private
  ));
//# sourceMappingURL=workbox-strategies.prod.js.map
