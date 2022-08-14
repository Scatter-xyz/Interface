"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 8019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3609);





const Navbar = ({ pageLoad ="Default" , setWalletContext  })=>{
    const { 0: wallet , 1: setWallet  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        provider: "",
        address: "",
        signer: "",
        errorCode: "",
        signedStakingContract: "",
        signedTokenAddress: "",
        loading: true
    });
    const connect = async (wallet)=>{
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(window.ethereum, "any");
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            return {
                ...wallet,
                provider: provider,
                signer: signer,
                address: address,
                loading: false,
                errorCode: null
            };
        } else {
            return {
                ...wallet,
                address: null,
                errorCode: _constants_constants__WEBPACK_IMPORTED_MODULE_4__/* .METAMASK_NOT_INSTALLED */ .pc,
                loading: false
            };
        }
    };
    const connectWallet = async (wallet)=>{
        const localwallet = await connect(wallet);
        setWallet(localwallet);
        setWalletContext(localwallet);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (![
            "Default",
            "Trade"
        ].includes(pageLoad)) {
            connectWallet(wallet);
        }
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-2 fixed top-0 border-b-2 border-emerald-900 bg-gin-50 w-full z-20 h-content",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: "flex items-center space-x-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "font-serif w-32 border-r-2 border-black px-3 py-3 text-greenKelp-500 hover:text-emerald-700 text-2xl font-bold",
                        children: "Scatter"
                    })
                }),
                [
                    [
                        "Fractionalise",
                        "/fractionalise",
                        true
                    ],
                    [
                        "Trade",
                        "/trade",
                        true
                    ],
                    [
                        "Merge",
                        "/merge",
                        true
                    ],
                    [
                        "IFOs",
                        "/ifos",
                        false
                    ], 
                ].map(([title, url, active])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: active ? url : "",
                        className: `px-3 py-3 text-l font-semibold ${active ? "hover:border-b-2 hover:border-emerald-500 text-emerald-900 text-slate-700 hover:text-slate-900" : "rounded text-zinc-400 cursor-not-allowed disabled"} ${pageLoad === title ? "border-b-2 border-emerald-500" : ""}`,
                        children: title
                    }, title)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-1",
                    children: " "
                }),
                ![
                    "Default",
                    "Trade"
                ].includes(pageLoad) ? wallet.loading ? "" : wallet.error === "METAMASK_NOT_INSTALLED" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: ()=>connectWallet(wallet),
                    className: "rounded bg-emerald-900 hover:bg-emerald-700 text-white px-3 py-3 text-slate-700 text-base font-normal",
                    children: " Connect To Metamask"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    disabled: true,
                    className: "rounded-full border-2 border-teal-800 bg-neutral-700 text-white px-8 py-2.5 font-normal text-sm",
                    children: [
                        " ",
                        wallet.address.substring(0, 6) + "..." + wallet.address.substring(wallet.address.length - 6, wallet.address.length)
                    ]
                }) : ""
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 3609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mt": () => (/* binding */ ERC_721),
/* harmony export */   "Pt": () => (/* binding */ MAX_FRACTION_COUNT),
/* harmony export */   "i9": () => (/* binding */ OPENSEA_LINK),
/* harmony export */   "pc": () => (/* binding */ METAMASK_NOT_INSTALLED),
/* harmony export */   "tm": () => (/* binding */ FRACTION_CONTRACT_ADDRESS)
/* harmony export */ });
/* unused harmony exports CHAINID_NOT_SUPPORTED, NFT_CALL_FAILED */
const METAMASK_NOT_INSTALLED = "METAMASK_NOT_INSTALLED";
const CHAINID_NOT_SUPPORTED = "CHAINID_NOT_SUPPORTED";
const NFT_CALL_FAILED = "NFT_CALL_FAILED";
//NFT 
const ERC_721 = "ERC721";
//Fraction Count
const MAX_FRACTION_COUNT = 10000;
const FRACTION_CONTRACT_ADDRESS = "0xb56088B79B55F6AEe89FE53B6d4b672e8bA2dA5F";
//Opensea Details
const OPENSEA_LINK = "https://testnets.opensea.io/assets/rinkeby/";


/***/ }),

/***/ 3678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterData": () => (/* binding */ FooterData),
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8019);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);





const Default = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full w-full relative",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "absolute top-0 left-0 ml-12 mt-28",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-white text-6xl",
                    children: "An Innovation In NFT Space"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/fractionalise",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border-2 border-white text-white px-8 py-3 text-base font-normal",
                        children: "Fractionalise >"
                    })
                })
            ]
        })
    });
};
const Fractionalise = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full w-full relative",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "absolute top-0 left-0 ml-12 mt-28",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-white text-6xl",
                    children: "Fractionalise Your NFTs"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/fractionalise",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border border-white text-white px-8 py-3 text-base font-normal",
                        children: "Fractionalise >"
                    })
                })
            ]
        })
    });
};
const Merge = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full w-full relative",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "absolute top-0 left-0 ml-12 mt-28",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-white text-6xl",
                    children: "Collect Fractions And Merge"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/merge",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border border-white text-white px-8 py-3 text-base font-normal",
                        children: "Merge >"
                    })
                })
            ]
        })
    });
};
const IFO = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full w-full relative",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "absolute top-0 left-0 ml-12 mt-28",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-white text-6xl",
                    children: "Host Initial Fraction Offering Sales"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border border-white text-white px-8 py-3 text-base font-normal cursor-not-allowed",
                    disabled: true,
                    children: "Under Development"
                })
            ]
        })
    });
};
const Trade = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full w-full relative",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "absolute top-0 left-0 ml-12 mt-28",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-white text-6xl",
                    children: "Trade On NFT Marketplaces"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/trade",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "font-mono mt-32 rounded bg-stiletto-500 hover:bg-stiletto-300 border border-white text-white px-8 py-3 text-base font-normal",
                        children: "Trade >"
                    })
                })
            ]
        })
    });
};
const FooterData = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-greenKelp-500 w-full h-60",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid place-items-center h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-sans font-normal text-white text-4xl",
                    children: "Wanna connect with us?"
                })
            })
        })
    });
};
function Home() {
    const { 0: cardSelector , 1: setCardSelector  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("FRACTIONALISE");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Scatter"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Fractionalise your NFTs for more liquidity"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full min-h-content bg-gin-50",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-screen z-0 border-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "absolute bottom-0 left-0 ml-16 mb-28 w-content",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: " font-serif text-6xl font-bold mb-4 text-greenKelp-500",
                                            children: "Scatter"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "font-sans text-l text-greenKelp-500 font-normal ",
                                            children: "A vision of truly distributed and decentralised NFT world with reduced creator fee"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-screen",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-rows-7 grid-flow-col h-5/6 border-b-2 border-t-2 border-emerald-900 min-h-[50%]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cursor-pointer col-span-2 hover:bg-seaMist-500 relative border-b-2 border-r-2 border-emerald-900",
                                            onClick: ()=>setCardSelector("FRACTIONALISE"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-full w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative grid place-items-center h-full",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "absolute font-sans font-normal text-greenKelp-500 text-4xl",
                                                        children: "Fractionalise"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cursor-pointer col-span-2 hover:bg-seaMist-500 border-r-2 border-emerald-900",
                                            onClick: ()=>setCardSelector("IFO"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-full w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative grid place-items-center h-full",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "absolute font-sans font-normal text-greenKelp-500 text-4xl",
                                                        children: "IFO"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cursor-pointer col-span-2 hover:bg-seaMist-500 border-b-2 border-emerald-900",
                                            onClick: ()=>setCardSelector("TRADE"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-full w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative grid place-items-center h-full",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "absolute font-sans font-normal text-greenKelp-500 text-4xl",
                                                        children: "Trade"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "cursor-pointer col-span-2 hover:bg-seaMist-500",
                                            onClick: ()=>setCardSelector("MERGE"),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-full w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "relative grid place-items-center h-full",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "absolute font-sans font-normal text-greenKelp-500 text-4xl",
                                                        children: "Merge"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row-span-2 col-span-3 bg-stiletto-500",
                                            children: cardSelector === "FRACTIONALISE" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Fractionalise, {}) : cardSelector === "MERGE" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Merge, {}) : cardSelector === "IFO" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IFO, {}) : cardSelector === "TRADE" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Trade, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Default, {})
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterData, {})
                ]
            })
        ]
    });
};


/***/ })

};
;