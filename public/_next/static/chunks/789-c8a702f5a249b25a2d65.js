"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [789],
  {
    1158: function (s, e, a) {
      var i = a(2809),
        r = a(6066),
        l = a(5893);
      function t(s, e) {
        var a = Object.keys(s);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(s);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(s, e).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function c(s) {
        for (var e = 1; e < arguments.length; e++) {
          var a = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? t(Object(a), !0).forEach(function (e) {
                (0, i.Z)(s, e, a[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
            : t(Object(a)).forEach(function (e) {
                Object.defineProperty(
                  s,
                  e,
                  Object.getOwnPropertyDescriptor(a, e)
                );
              });
        }
        return s;
      }
      e.Z = function () {
        return (0, l.jsx)("section", {
          id: "reviews-1",
          className: " wide-100 reviews-section division slickmargin",
          children: (0, l.jsxs)("div", {
            className: "container ",
            children: [
              (0, l.jsx)("div", {
                className: "row justify-content-center",
                children: (0, l.jsx)("div", {
                  className: "col-lg-10 col-xl-8",
                  children: (0, l.jsxs)("div", {
                    className: "section-title title-01 mb-70",
                    children: [
                      (0, l.jsx)("h2", {
                        className: "h2-md text-white",
                        children: "Stories From Our Customers",
                      }),
                      (0, l.jsx)("p", {
                        className: "p-xl",
                        children:
                          "We are community of positive minded people, working harder to give our users a better future.",
                      }),
                    ],
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: "row",
                children: (0, l.jsx)("div", {
                  className: "col",
                  children: (0, l.jsx)("div", {
                    className: "owl-carousel owl-theme reviews-1-wrapper",
                    children: (0, l.jsxs)(
                      r.Z,
                      c(
                        c(
                          {},
                          {
                            dots: !0,
                            infinite: !0,
                            arrows: !1,
                            autoPlay: !0,
                            speed: 500,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            responsive: [
                              {
                                breakpoint: 767,
                                settings: {
                                  slidesToShow: 1,
                                  slidesToScroll: 1,
                                },
                              },
                              {
                                breakpoint: 991,
                                settings: {
                                  slidesToShow: 2,
                                  slidesToScroll: 2,
                                },
                              },
                            ],
                          }
                        ),
                        {},
                        {
                          children: [
                            (0, l.jsxs)("div", {
                              className: "review-1",
                              style: {
                                boxShadow:
                                  "0px 2px 2px 5px rgba(255, 178, 12, 0.97) !important",
                                borderRadius: "10px",
                              },
                              children: [
                                (0, l.jsx)("div", {
                                  className: "review-1-ico ico-25",
                                  children: (0, l.jsx)("span", {
                                    className: "flaticon-left-quote",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "review-1-txt",
                                  children: [
                                    (0, l.jsx)("p", {
                                      className: "p-lg text-dark",
                                      children:
                                        "This is the most reliable  investment company I have ever seen.",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "author-data clearfix",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "review-avatar",
                                          children: (0, l.jsx)("img", {
                                            src: "/images/review-author-1.jpg",
                                            alt: "review-avatar",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "review-author",
                                          children: [
                                            (0, l.jsx)("h6", {
                                              className: "h6-xl text-dark",
                                              children: "Scott Boxer",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "p-md",
                                              children: "@scott_boxer",
                                            }),
                                            (0, l.jsxs)("div", {
                                              className:
                                                "review-rating ico-15 yellow-color",
                                              children: [
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className:
                                                    "flaticon-star-half-empty",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "review-1",
                              style: {
                                boxShadow:
                                  "0px 10px 20px 0px rgb(27 3 132 / 40%)",
                                borderRadius: "10px",
                              },
                              children: [
                                (0, l.jsx)("div", {
                                  className: "review-1-ico ico-25",
                                  children: (0, l.jsx)("span", {
                                    className: "flaticon-left-quote",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "review-1-txt",
                                  children: [
                                    (0, l.jsx)("p", {
                                      className: "p-lg text-dark",
                                      children:
                                        "I love the transparency of the system as we are able to monitor how the daily trading activities.",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "author-data clearfix",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "review-avatar",
                                          children: (0, l.jsx)("img", {
                                            src: "/images/review-author-2.jpg",
                                            alt: "review-avatar",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "review-author",
                                          children: [
                                            (0, l.jsx)("h6", {
                                              className: "h6-xl text-dark",
                                              children: "Joel Peterson",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "p-md",
                                              children: "Internet Surfer",
                                            }),
                                            (0, l.jsxs)("div", {
                                              className:
                                                "review-rating ico-15 yellow-color",
                                              children: [
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className:
                                                    "flaticon-star-half-empty",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "review-1",
                              style: {
                                boxShadow:
                                  "0px 10px 20px 0px rgb(27 3 132 / 40%)",
                                borderRadius: "10px",
                              },
                              children: [
                                (0, l.jsx)("div", {
                                  className: "review-1-ico ico-25",
                                  children: (0, l.jsx)("span", {
                                    className: "flaticon-left-quote",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "review-1-txt",
                                  children: [
                                    (0, l.jsx)("p", {
                                      className: "p-lg text-dark",
                                      children:
                                        "All thanks to Vision Wise Asset, I made my first million this year already with your help.",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "author-data clearfix",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "review-avatar",
                                          children: (0, l.jsx)("img", {
                                            src: "/images/review-author-3.jpg",
                                            alt: "review-avatar",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "review-author",
                                          children: [
                                            (0, l.jsx)("h6", {
                                              className: "h6-xl text-dark",
                                              children: "Marisol19",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "p-md",
                                              children: "@marisol19",
                                            }),
                                            (0, l.jsxs)("div", {
                                              className:
                                                "review-rating ico-15 yellow-color",
                                              children: [
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className:
                                                    "flaticon-star-half-empty",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "review-1",
                              style: {
                                boxShadow:
                                  "0px 10px 20px 0px rgb(27 3 132 / 40%)",
                                borderRadius: "10px",
                              },
                              children: [
                                (0, l.jsx)("div", {
                                  className: "review-1-ico ico-25",
                                  children: (0, l.jsx)("span", {
                                    className: "flaticon-left-quote",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "review-1-txt",
                                  children: [
                                    (0, l.jsx)("p", {
                                      className: "p-lg text-dark",
                                      children:
                                        "I love your support system always available to help anytime. I love you guys",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "author-data clearfix",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "review-avatar",
                                          children: (0, l.jsx)("img", {
                                            src: "/images/review-author-4.jpg",
                                            alt: "review-avatar",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "review-author",
                                          children: [
                                            (0, l.jsx)("h6", {
                                              className: "h6-xl text-dark",
                                              children: "Leslie D.",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "p-md",
                                              children: "Investor",
                                            }),
                                            (0, l.jsxs)("div", {
                                              className:
                                                "review-rating ico-15 yellow-color",
                                              children: [
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className:
                                                    "flaticon-star-half-empty",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "review-1",
                              style: {
                                boxShadow:
                                  "0px 10px 20px 0px rgb(27 3 132 / 40%)",
                                borderRadius: "10px",
                              },
                              children: [
                                (0, l.jsx)("div", {
                                  className: "review-1-ico ico-25",
                                  children: (0, l.jsx)("span", {
                                    className: "flaticon-left-quote",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "review-1-txt",
                                  children: [
                                    (0, l.jsx)("p", {
                                      className: "p-lg text-dark",
                                      children:
                                        "I love the performance of your traders, they are truly professionals. I love this platform.",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "author-data clearfix",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "review-avatar",
                                          children: (0, l.jsx)("img", {
                                            src: "/images/review-author-5.jpg",
                                            alt: "review-avatar",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "review-author",
                                          children: [
                                            (0, l.jsx)("h6", {
                                              className: "h6-xl text-dark",
                                              children: "Jennifer Harper",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "p-md",
                                              children: "User",
                                            }),
                                            (0, l.jsxs)("div", {
                                              className:
                                                "review-rating ico-15 yellow-color",
                                              children: [
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className:
                                                    "flaticon-star-half-empty",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "review-1",
                              style: {
                                boxShadow:
                                  "0px 10px 20px 0px rgb(27 3 132 / 40%)",
                                borderRadius: "10px",
                              },
                              children: [
                                (0, l.jsx)("div", {
                                  className: "review-1-ico ico-25",
                                  children: (0, l.jsx)("span", {
                                    className: "flaticon-left-quote",
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: "review-1-txt",
                                  children: [
                                    (0, l.jsx)("p", {
                                      className: "p-lg text-dark",
                                      children:
                                        "Thank you Vision Wise Asset for all you do. I got my payment today.",
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "author-data clearfix",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "review-avatar",
                                          children: (0, l.jsx)("img", {
                                            src: "/images/review-author-6.jpg",
                                            alt: "review-avatar",
                                          }),
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "review-author",
                                          children: [
                                            (0, l.jsx)("h6", {
                                              className: "h6-xl text-dark",
                                              children: "Jonathan Barnes",
                                            }),
                                            (0, l.jsx)("p", {
                                              className: "p-md",
                                              children: " Programmer",
                                            }),
                                            (0, l.jsxs)("div", {
                                              className:
                                                "review-rating ico-15 yellow-color",
                                              children: [
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "flaticon-star-1",
                                                }),
                                                (0, l.jsx)("span", {
                                                  className:
                                                    "flaticon-star-half-empty",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }
                      )
                    ),
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    597: function (s, e, a) {
      a.d(e, {
        kY: function () {
          return t;
        },
        g6: function () {
          return n;
        },
        IW: function () {
          return c;
        },
      });
      var i = a(7294),
        r = a(8173),
        l = a(5893),
        t = function (s) {
          var e = s.id,
            a = s.img,
            t = s.extraClass,
            c = (0, i.useContext)(r.l).showVideo;
          return (0, l.jsxs)(i.Fragment, {
            children: [
              (0, l.jsx)("a", {
                className: "video-popup1",
                href: "#",
                onClick: function () {
                  return c(e || "Fu0zeXt_nIU");
                },
                children: (0, l.jsx)("div", {
                  className: t || "video-btn video-btn-xl bg-orange-red ico-90",
                  children: (0, l.jsx)("div", {
                    className: "video-block-wrapper",
                    children: (0, l.jsx)("span", {
                      className: "flaticon-play-button",
                    }),
                  }),
                }),
              }),
              (0, l.jsx)("img", {
                className: "img-fluid",
                src: a || "images/video-user.png",
                alt: "video-preview",
              }),
            ],
          });
        },
        c = function (s) {
          var e = s.id,
            a = s.img,
            t = s.extraClass,
            c = (0, i.useContext)(r.l).showVideo;
          return (0, l.jsxs)(i.Fragment, {
            children: [
              (0, l.jsx)("a", {
                className: "video-popup1",
                href: "#",
                onClick: function () {
                  return c(e || "8t5i1loXyQY");
                },
                children: (0, l.jsx)("div", {
                  className: t || "video-btn video-btn-xl bg-orange-red ico-90",
                  children: (0, l.jsx)("div", {
                    className: "video-block-wrapper",
                    children: (0, l.jsx)("span", {
                      className: "flaticon-play-button",
                    }),
                  }),
                }),
              }),
              (0, l.jsx)("img", {
                className: "img-fluid",
                src: a || "images/video-user.png",
                alt: "video-preview",
              }),
            ],
          });
        },
        n = function (s) {
          var e = s.id,
            a = s.extraClass,
            t = s.defText,
            c = (0, i.useContext)(r.l).showVideo;
          return (0, l.jsxs)("a", {
            href: "#",
            className:
              a || "video-popup2 btn btn-md btn-transparent ico-20 ico-left",
            onClick: function () {
              return c(e || "5_cyE10Ljms");
            },
            children: [
              (0, l.jsx)("span", { className: "flaticon-play" }),
              " ",
              t || "See how it works",
            ],
          });
        };
    },
    8731: function (s, e, a) {
      var i = a(2167),
        r = a(5893);
      e.Z = function () {
        return (0, r.jsxs)("section", {
          id: "cta-11",
          className: "cta-section division",
          children: [
            (0, r.jsxs)("div", {
              className: "container",
              children: [
                (0, r.jsx)("div", {
                  className: "cta-11-wrapper",
                  children: (0, r.jsxs)("div", {
                    className: "row d-flex align-items-center",
                    children: [
                      (0, r.jsx)("div", {
                        className: "col-lg-7 col-lg-7",
                        children: (0, r.jsxs)("div", {
                          className: "cta-11-txt",
                          children: [
                            (0, r.jsx)("h2", {
                              className: "h2-xs text-light",
                              children: "Ready to Join Vision Wise Asset?",
                            }),
                            (0, r.jsx)("p", {
                              className: "p-lg text-light",
                              children:
                                "We help you to seamlessly earn from the crypto market daily, taking you away from the risk of the market",
                            }),
                            (0, r.jsx)(i.default, {
                              href: "https://app.visionwiseasset.com/?a=login",
                              children: (0, r.jsx)("a", {
                                className: "btn btn-yellow tra-white-hover",
                                children: "Get Started Now",
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "col-lg-5",
                        children: (0, r.jsx)("div", {
                          className: "text-end",
                          children: (0, r.jsx)("div", {
                            className: "cta-11-img text-center",
                            children: (0, r.jsx)("img", {
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
  },
]);
