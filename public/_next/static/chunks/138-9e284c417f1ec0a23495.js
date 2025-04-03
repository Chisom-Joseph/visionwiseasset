"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [138],
  {
    4138: function (e, s, l) {
      l.d(s, {
        Z: function () {
          return h;
        },
      });
      var n = l(7294),
        r = l(8173),
        c = l(5893),
        a = function () {
          var e = (0, n.useContext)(r.l),
            s = e.video,
            l = e.hideVideo,
            a = (function (e) {
              var s = (0, n.useRef)();
              return (
                (0, n.useEffect)(function () {
                  var l = function (l) {
                    s.current.contains(l.target) || e();
                  };
                  return (
                    document.addEventListener("mousedown", l),
                    function () {
                      document.removeEventListener("mousedown", l);
                    }
                  );
                }),
                s
              );
            })(function () {
              l();
            });
          return (0, c.jsxs)(n.Fragment, {
            children: [
              (0, c.jsx)("div", {
                className: "mfp-bg mfp-ready",
                onClick: function () {
                  return l();
                },
              }),
              (0, c.jsx)("div", {
                className:
                  "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: { overflow: "hidden auto" },
                children: (0, c.jsxs)("div", {
                  className: "mfp-container mfp-s-ready mfp-iframe-holder",
                  children: [
                    (0, c.jsx)("div", {
                      className: "mfp-content",
                      ref: a,
                      children: (0, c.jsxs)("div", {
                        className: "mfp-iframe-scaler",
                        children: [
                          (0, c.jsx)("button", {
                            title: "Close (Esc)",
                            type: "button",
                            className: "mfp-close",
                            onClick: function () {
                              return l();
                            },
                            children: "\xd7",
                          }),
                          (0, c.jsx)("iframe", {
                            className: "mfp-iframe",
                            src: s.id
                              ? "//www.youtube.com/embed/".concat(
                                  s.id,
                                  "?autoplay=1"
                                )
                              : "//www.youtube.com/embed/z_35FuqCVkE?autoplay=1",
                            frameBorder: 0,
                            allowFullScreen: !0,
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)("div", {
                      className: "mfp-preloader",
                      children: "Loading...",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        i = l(9164),
        t = l(1664),
        o = function () {
          return (0, c.jsx)("footer", {
            id: "footer-1",
            className: "footer division",
            style: { backgroundColor: "rgba(8, 8, 8, 0.99)" },
            children: (0, c.jsxs)("div", {
              className: "container",
              children: [
                (0, c.jsxs)("div", {
                  className: "row",
                  children: [
                    (0, c.jsx)("div", {
                      className: "col-lg-4",
                      children: (0, c.jsxs)("div", {
                        className: "footer-info mb-40",
                        children: [
                          (0, c.jsx)("img", {
                            className: "footer-logo mb-25",
                            src: "/images/whitelogo.png",
                            alt: "footer-logo",
                          }),
                          (0, c.jsx)("p", {
                            className: "p-md",
                            children:
                              "Invest with us today let's help you grow your money the right way.",
                          }),
                          (0, c.jsx)("p", {
                            children: (0, c.jsxs)("ul", {
                              children: [
                                (0, c.jsx)("li", {
                                  className: "mt-3",
                                  children: (0, c.jsxs)("a", {
                                    href: "",
                                    className: "",
                                    children: [
                                      (0, c.jsx)("span", {
                                        className: "flaticon-map",
                                      }),
                                      " ",
                                      (0, c.jsx)("span", {
                                        className: "ml-5 font-weight-bold",
                                        children:
                                          "Office 9, 4th Floor, Congress House, 14 Lyon Road, Harrow, United Kingdom, HA1 2EN",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, c.jsx)("li", {
                                  className: "mt-3",
                                  children: (0, c.jsxs)("a", {
                                    href: "mailto:support@visionwiseasset.com",
                                    className: "",
                                    children: [
                                      (0, c.jsx)("span", {
                                        className: "flaticon-email",
                                      }),
                                      (0, c.jsx)("span", {
                                        className: "ml-5 font-weight-bold",
                                        children: "support@visionwiseasset.com",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)("div", {
                      className: "col-sm-6 col-md-3 col-lg-2",
                      children: (0, c.jsxs)("div", {
                        className: "footer-links mb-40",
                        children: [
                          (0, c.jsx)("h6", {
                            className: "h6-xl text-white",
                            children: "Company",
                          }),
                          (0, c.jsxs)("ul", {
                            className: "foo-links text-secondary clearfix",
                            children: [
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("p", {
                                  className: "p-md",
                                  children: (0, c.jsx)(t.default, {
                                    href: "/about",
                                    children: "About Us",
                                  }),
                                }),
                              }),
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("p", {
                                  className: "p-md",
                                  children: (0, c.jsx)(t.default, {
                                    href: "/terms",
                                    children: "company",
                                  }),
                                }),
                              }),
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("p", {
                                  className: "p-md",
                                  children: (0, c.jsx)(t.default, {
                                    href: "/contacts",
                                    children: "Contact Us",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)("div", {
                      className: "col-sm-6 col-md-3 col-lg-2",
                      children: (0, c.jsxs)("div", {
                        className: "footer-links mb-40",
                        children: [
                          (0, c.jsx)("h6", {
                            className: "h6-xl text-white",
                            children: "Discover",
                          }),
                          (0, c.jsxs)("ul", {
                            className: "foo-links text-secondary clearfix",
                            children: [
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("p", {
                                  className: "p-md",
                                  children: (0, c.jsx)(t.default, {
                                    href: "/features",
                                    children: "Career",
                                  }),
                                }),
                              }),
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("p", {
                                  className: "p-md",
                                  children: (0, c.jsx)(t.default, {
                                    href: "/pricing",
                                    children: "Plans & Pricing",
                                  }),
                                }),
                              }),
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("p", {
                                  className: "p-md",
                                  children: (0, c.jsx)(t.default, {
                                    href: "/terms",
                                    children: "Company Terms",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)("div", {
                      className: "col-sm-6 col-md-3 col-lg-2",
                      children: (0, c.jsxs)("div", {
                        className: "footer-links mb-40",
                        children: [
                          (0, c.jsx)("h6", {
                            className: "h6-xl text-white",
                            children: "Legal",
                          }),
                          (0, c.jsxs)("ul", {
                            className: "foo-links text-secondary clearfix",
                            children: [
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("p", {
                                  className: "p-md",
                                  children: (0, c.jsx)(t.default, {
                                    href: "/terms",
                                    children: "Terms of Use",
                                  }),
                                }),
                              }),
                              (0, c.jsx)("li", {
                                children: (0, c.jsx)("p", {
                                  className: "p-md",
                                  children: (0, c.jsx)(t.default, {
                                    href: "/terms",
                                    children: "Privacy Policy",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)("div", {
                      className: "col-sm-6 col-md-3 col-lg-2",
                      children: (0, c.jsxs)("div", {
                        className: "footer-links mb-40",
                        children: [
                          (0, c.jsx)("h6", {
                            className: "h6-xl text-white",
                            children: "Support",
                          }),
                          (0, c.jsx)("ul", {
                            className: "foo-links text-secondary clearfix",
                            children: (0, c.jsx)("li", {
                              children: (0, c.jsx)("p", {
                                className: "p-md",
                                children: (0, c.jsx)(t.default, {
                                  href: "/faqs",
                                  children: "FAQs",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, c.jsx)("hr", {}),
                (0, c.jsx)("div", {
                  className: "bottom-footer",
                  children: (0, c.jsxs)("div", {
                    className:
                      "row row-cols-1 row-cols-md-2 d-flex align-items-center",
                    children: [
                      (0, c.jsx)("div", {
                        className: "col",
                        children: (0, c.jsx)("div", {
                          className: "footer-copyright",
                          children: (0, c.jsxs)("p", {
                            children: [
                              "\xa9 ",
                              new Date().getFullYear(),
                              "VISION WISE ASSET. All Rights Reserved",
                            ],
                          }),
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className: "col",
                        children: (0, c.jsxs)("ul", {
                          className:
                            "bottom-footer-list text-secondary text-end",
                          children: [
                            (0, c.jsx)("li", {
                              className: "first-li",
                              children: (0, c.jsx)("p", {
                                children: (0, c.jsx)(t.default, {
                                  href: "#",
                                  children: "Facebook",
                                }),
                              }),
                            }),
                            (0, c.jsx)("li", {
                              children: (0, c.jsx)("p", {
                                children: (0, c.jsx)(t.default, {
                                  href: "#",
                                  children: "Twitter",
                                }),
                              }),
                            }),
                            (0, c.jsx)("li", {
                              children: (0, c.jsx)("p", {
                                children: (0, c.jsx)(t.default, {
                                  href: "#",
                                  children: "LinkedIn",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        d = function (e) {
          var s = e.navLight,
            l = (e.whiteLogo, e.getStartText),
            r = e.btnCustomHover,
            a = e.navHoverColor,
            o = e.singlePage;
          (0, n.useEffect)(function () {
            window.addEventListener("scroll", i.AR);
          }, []);
          var d = (0, n.useState)(!1),
            m = d[0],
            h = d[1],
            u = (0, n.useState)(""),
            f =
              (u[0],
              u[1],
              function () {
                h(!m),
                  document.querySelector("body").classList.toggle("wsactive");
              });
          return (0, c.jsx)("header", {
            id: "header",
            className: "header tra-menu ".concat(
              s ? "navbar-light" : "navbar-dark"
            ),
            children: (0, c.jsxs)("div", {
              className: "header-wrapper",
              children: [
                (0, c.jsxs)("div", {
                  className: "wsmobileheader clearfix",
                  children: [
                    (0, c.jsx)("span", {
                      className: "smllogo",
                      children: (0, c.jsx)("img", {
                        src: "/images/darklogo.png",
                        alt: "mobile-logo",
                      }),
                    }),
                    (0, c.jsx)("a", {
                      id: "wsnavtoggle",
                      onClick: function () {
                        return f();
                      },
                      className: "wsanimated-arrow",
                      children: (0, c.jsx)("span", {}),
                    }),
                  ],
                }),
                (0, c.jsx)("div", {
                  className: "wsmainfull menu clearfix",
                  children: (0, c.jsxs)("div", {
                    className: "wsmainwp clearfix",
                    children: [
                      (0, c.jsx)("div", {
                        className: "desktoplogo",
                        children: (0, c.jsx)(t.default, {
                          href: "/",
                          children: (0, c.jsx)("a", {
                            className: "logo-black",
                            children: (0, c.jsx)("img", {
                              src: "/images/darklogo.png",
                              alt: "header-logo",
                            }),
                          }),
                        }),
                      }),
                      (0, c.jsx)("div", {
                        className: "desktoplogo",
                        children: (0, c.jsx)(t.default, {
                          href: "/",
                          children: (0, c.jsx)("a", {
                            className: "logo-white",
                            children: (0, c.jsx)("img", {
                              src: "".concat("/images/whitelogo.png"),
                              alt: "header-logo",
                            }),
                          }),
                        }),
                      }),
                      (0, c.jsxs)("nav", {
                        className: "wsmenu clearfix",
                        children: [
                          (0, c.jsx)("div", {
                            className: "overlapblackbg",
                            onClick: function () {
                              return f();
                            },
                          }),
                          (0, c.jsxs)("ul", {
                            className: "wsmenu-list ".concat(
                              a || "nav-skyblue-hover"
                            ),
                            children: [
                              (0, c.jsx)("li", {
                                onClick: function () {
                                  return f();
                                },
                                className: "nl-simple",
                                children: (0, c.jsx)(t.default, {
                                  href: "/",
                                  children: "Home",
                                }),
                              }),
                              (0, c.jsx)("li", {
                                onClick: function () {
                                  return f();
                                },
                                className: "nl-simple",
                                children: (0, c.jsx)(t.default, {
                                  href: "/pricing",
                                  children: "Pricing",
                                }),
                              }),
                              (0, c.jsx)("li", {
                                onClick: function () {
                                  return f();
                                },
                                className: "nl-simple",
                                children: (0, c.jsx)(t.default, {
                                  href: "/about",
                                  children: (0, c.jsx)("a", {
                                    children: "About",
                                  }),
                                }),
                              }),
                              (0, c.jsx)("li", {
                                onClick: function () {
                                  return f();
                                },
                                className: "nl-simple",
                                children: (0, c.jsx)(t.default, {
                                  href: "".concat(
                                    o ? "/contacts" : "#features-8"
                                  ),
                                  children: "Contact",
                                }),
                              }),
                              (0, c.jsx)("li", {
                                onClick: function () {
                                  return f();
                                },
                                className: "nl-simple",
                                children: (0, c.jsx)(t.default, {
                                  href: "".concat(o ? "/faqs" : "#faqs-2"),
                                  children: "FAQs",
                                }),
                              }),
                              (0, c.jsx)("li", {
                                onClick: function () {
                                  return f();
                                },
                                className: "nl-simple",
                                children: (0, c.jsx)(t.default, {
                                  href: "/terms",
                                  children: "Legals",
                                }),
                              }),
                              (0, c.jsx)("li", {
                                className: "nl-simple",
                                children: (0, c.jsx)(t.default, {
                                  href: "https://app.visionwiseasset.com/?a=login/",
                                  children: (0, c.jsx)("a", {
                                    className: "btn ".concat(
                                      r || "btn-tra-white orange-red-hover",
                                      " last-link"
                                    ),
                                    children: l
                                      ? "Get Started"
                                      : "Register now",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        m = function () {
          var e = (0, n.useState)(!1),
            s = e[0],
            l = e[1];
          (0, n.useEffect)(function () {
            window.addEventListener("scroll", r);
          }, []);
          var r = function () {
            var e = window.scrollY;
            document.getElementById("scrollUp") && l(e > 300);
          };
          return (0, c.jsx)("a", {
            id: "scrollUp",
            href: "#top",
            title: "",
            style: {
              position: "fixed",
              zIndex: 2147483647,
              display: s ? "block" : "none",
            },
          });
        },
        h = function (e) {
          var s = e.children,
            l = e.navLight,
            t = e.whiteLogo,
            h = e.getStartText,
            u = e.btnCustomHover,
            f = e.navHoverColor,
            x = e.singlePage,
            j = (0, n.useContext)(r.l).video;
          return (
            (0, n.useEffect)(function () {
              (0, i.jd)();
            }, []),
            (0, c.jsxs)(n.Fragment, {
              children: [
                j.show && (0, c.jsx)(a, {}),
                (0, c.jsxs)("div", {
                  id: "page",
                  className: "page",
                  style: { backgroundColor: "rgba(12, 13, 13, 0.99)" },
                  children: [
                    (0, c.jsx)(d, {
                      navLight: l,
                      whiteLogo: t,
                      getStartText: h,
                      btnCustomHover: u,
                      navHoverColor: f,
                      singlePage: x,
                    }),
                    s,
                    (0, c.jsx)(o, {}),
                  ],
                }),
                (0, c.jsx)(m, {}),
              ],
            })
          );
        };
    },
    9164: function (e, s, l) {
      l.d(s, {
        AR: function () {
          return n;
        },
        jd: function () {
          return r;
        },
        nd: function () {
          return c;
        },
        oA: function () {
          return a;
        },
        ot: function () {
          return i;
        },
      });
      var n = function () {
          var e = window.scrollY,
            s = document.querySelector(".wsmainfull");
          s &&
            (e > 80 ? s.classList.add("scroll") : s.classList.remove("scroll"));
        },
        r = function () {
          for (
            var e = document.querySelectorAll("[href='#']"), s = 0;
            s < e.length;
            s++
          ) {
            e[s].addEventListener("click", function (e) {
              e.preventDefault();
            });
          }
        },
        c = function (e, s) {
          setTimeout(function () {
            new (l(3391))(e || ".grid-loaded", {
              itemSelector: s || ".project-details",
              percentPosition: !0,
              masonry: { columnWidth: s || ".project-details" },
            });
          }, 1e3);
        },
        a = function (e, s, l) {
          for (var n = document.querySelectorAll(e), r = 0; r < n.length; r++) {
            var c = n[r];
            1 === l
              ? r < s
                ? c.classList.remove("d-none")
                : c.classList.add("d-none")
              : r >= (l - 1) * s && r < l * s
              ? c.classList.remove("d-none")
              : c.classList.add("d-none");
          }
        },
        i = function (e, s) {
          return new Array(Math.ceil(e / s)).fill().map(function (e, s) {
            return s + 1;
          });
        };
    },
  },
]);
