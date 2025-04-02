(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [939],
  {
    8703: function (e, t, s) {
      "use strict";
      s.r(t);
      var n = s(7923),
        a = s(4138),
        r = s(8731),
        i = s(5893);
      t.default = function () {
        return (0, i.jsxs)(a.Z, {
          navLight: !0,
          whiteLogo: !0,
          btnCustomHover: "btn btn-skyblue tra-grey-hover last-link",
          singlePage: !0,
          children: [
            (0, i.jsxs)("section", {
              id: "content-1",
              style: { backgroundImage: "url(/images/edited_06.jpg)" },
              className:
                "content-1 wide-60 inner-page-hero content-section division trader-bg",
              children: [
                (0, i.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "row d-flex align-items-center",
                      children: [
                        (0, i.jsx)("div", {
                          className: "col-md-5 col-lg-6 order-first order-md-2",
                          children: (0, i.jsx)("div", {
                            className:
                              "rel img-block right-column wow fadeInLeft",
                            children: (0, i.jsx)("img", {
                              className: "img-fluid",
                              src: "https://res.cloudinary.com/dzxyvdq14/image/upload/v1652428331/videopeopleimage.jpg",
                              alt: "content-image",
                            }),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "col-md-7 col-lg-6 order-last order-md-2",
                          children: (0, i.jsxs)("div", {
                            className: "txt-block left-column wow fadeInRight",
                            children: [
                              (0, i.jsx)("h2", {
                                className: "h2-xs text-white",
                                children: "Our Investment Plans",
                              }),
                              (0, i.jsx)("ul", {
                                className: "simple-list text-white",
                                children: (0, i.jsx)("li", {
                                  className: "list-item",
                                  children: (0, i.jsx)("p", {
                                    className: "p-lg",
                                    children:
                                      "We have different plans to suit your pocket kindly check the packages below",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        " ",
                      ],
                    }),
                    " ",
                  ],
                }),
                " ",
              ],
            }),
            (0, i.jsx)(n.Z, {}),
            (0, i.jsx)("hr", { className: "divider" }),
            (0, i.jsx)(r.Z, {}),
          ],
        });
      };
    },
    8731: function (e, t, s) {
      "use strict";
      var n = s(2167),
        a = s(5893);
      t.Z = function () {
        return (0, a.jsxs)("section", {
          id: "cta-11",
          className: "cta-section division",
          children: [
            (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "cta-11-wrapper",
                  children: (0, a.jsxs)("div", {
                    className: "row d-flex align-items-center",
                    children: [
                      (0, a.jsx)("div", {
                        className: "col-lg-7 col-lg-7",
                        children: (0, a.jsxs)("div", {
                          className: "cta-11-txt",
                          children: [
                            (0, a.jsx)("h2", {
                              className: "h2-xs text-light",
                              children: "Ready to Join Vision Wise Asset?",
                            }),
                            (0, a.jsx)("p", {
                              className: "p-lg text-light",
                              children:
                                "We help you to seamlessly earn from the crypto market daily, taking you away from the risk of the market",
                            }),
                            (0, a.jsx)(n.default, {
                              href: "https://app.visionwiseasset.com/?a=login",
                              children: (0, a.jsx)("a", {
                                className: "btn btn-yellow tra-white-hover",
                                children: "Get Started Now",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "col-lg-5",
                        children: (0, a.jsx)("div", {
                          className: "text-end",
                          children: (0, a.jsx)("div", {
                            className: "cta-11-img text-center",
                            children: (0, a.jsx)("img", {
                              className: "img-fluid",
                              src: "https://res.cloudinary.com/dzxyvdq14/image/upload/v1645017110/trade.gif",
                              alt: "cta-image",
                              style: { height: "450px" },
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                " ",
              ],
            }),
            " ",
          ],
        });
      };
    },
    7923: function (e, t, s) {
      "use strict";
      var n = s(2809),
        a = s(7294),
        r = s(9669),
        i = s.n(r),
        c = s(5893);
      function l(e, t) {
        var s = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            s.push.apply(s, n);
        }
        return s;
      }
      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var s = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(s), !0).forEach(function (t) {
                (0, n.Z)(e, t, s[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
            : l(Object(s)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(s, t)
                );
              });
        }
        return e;
      }
      i().defaults.withCredentials = !0;
      var d = i().create({
          baseURL: "/",
          headers: { withCredentials: !0, Accept: "application/json" },
        }),
        m = function (e) {
          return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            currencySign: "accounting",
          }).format(e);
        };
      t.Z = function () {
        var e = (0, a.useState)({ list: [], investments: [], withdrawals: [] }),
          t = e[0],
          s = e[1];
        (0, a.useEffect)(
          function () {
            d.get("/api/get-plans").then(function (e) {
              if ("success" === e.data.status) {
                var n = e.data.plans,
                  a = e.data.investments;
                s(
                  o(
                    o({}, t),
                    {},
                    { list: n, investments: a, withdrawals: e.data.withdrawals }
                  )
                );
              }
            });
          },
          [t.list.length > 0]
        );
        var n = t.list;
        t.investments, t.withdrawals;
        return n.length > 0
          ? (0, c.jsxs)("div", {
              className: "container mb-8 pt-4",
              children: [
                (0, c.jsx)("div", {
                  className: "brands-title text-center",
                  children: (0, c.jsx)("h2", {
                    className: "p-xl h2 mb-4 text-white",
                    children: "OUR INVESTMENT PACKAGES",
                  }),
                }),
                (0, c.jsx)("div", {
                  className: "row",
                  children: n.map(function (e) {
                    return (0,
                    c.jsx)("div", { className: "".concat(e.id > 4 ? "col-md-4" : "col-md-3"), children: (0, c.jsxs)("div", { className: "text-center mb-4 p-3 ", style: { boxShadow: "0px 2px 2px 5px rgba(255, 178, 12, 0.97)", borderRadius: "10px" }, children: [(0, c.jsx)("div", { className: "icon text-center", children: (0, c.jsx)("img", { src: "http://pixner.net/behoof/demo/assets/images/icons/invest-calculate/1.svg", alt: "icon-image" }) }), (0, c.jsx)("h2", { className: "percentage text-center m-4 text-white", children: e.name }), (0, c.jsxs)("h5", { className: "package-name text-center grey-color m-2", children: [(0, c.jsx)("strong", { children: "Min Amount:" }), (0, c.jsx)("br", {}), " ", m(e.min_amount)] }), (0, c.jsxs)("h5", { className: "package-name text-center grey-color m-2", children: [(0, c.jsx)("strong", { children: "Max Amount:" }), " ", (0, c.jsx)("br", {}), " ", parseFloat(e.max_amount) >= 1e7 ? "UNLIMITED" : m(e.max_amount), " "] }), (0, c.jsxs)("div", { className: "package-name text-center grey-color m-2", children: [(0, c.jsx)("strong", { children: "Description:" }), " ", (0, c.jsx)("br", {}), " ", e.description, " "] }), (0, c.jsx)("a", { href: "https://app.visionwiseasset.com/?a=login", className: "btn btn-yellow tra-white-hover btn-sm ", style: { boxShadow: "0px 5px 15px 0px rgb(230 97 43 / 40%)" }, children: "invest now" })] }) }, e.id);
                  }),
                }),
              ],
            })
          : (0, c.jsx)(c.Fragment, {});
      };
    },
    9650: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pricing",
        function () {
          return s(8703);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [70, 669, 138, 774, 888, 179], function () {
      return (t = 9650), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
