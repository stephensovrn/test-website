//<![CDATA[
function r(a) {
    /in/.test(document.readyState) ? setTimeout("r(" + a + ")", 9) : a()
}
function initAdserver() {
    if (!pbjs.initAdserverSet) {
        !function() {
            var c = document.createElement("script");
            c.async = !0;
            c.type = "text/javascript";
            var b = "https:" == document.location.protocol;
            c.src = (b ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(c, a)
        }();
        pbjs.initAdserverSet = !0
    }
}
var PREBID_TIMEOUT = 1200;
window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments);
    this.console && console.log(Array.prototype.slice.call(arguments))
}
;
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
setTimeout(initAdserver, PREBID_TIMEOUT);
var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];
!function() {
    var c = document
      , b = c.createElement("script");
    c.location.protocol;
    b.type = "text/javascript";
    b.src = "//cdn.whatismyipaddress.com/js/prebid_v5.js";
    var a = document.getElementsByTagName("head")[0];
    a.insertBefore(b, a.firstChild)
}();
pbjs.que.push(function() {
    var a = [{
        code: "div-gpt-ad-1321402480744-0",
        sizes: [[160, 600]],
        bids: [{
            bidder: "appnexus",
            params: {
                placementId: 10561718
            }
        }, {
            bidder: "komoona",
            params: {
                hbid: "f5cee049e8f84262a322113e89fb34fc",
                placementId: "28dd4dfa337910d13bcfbdbfe178f663"
            }
        }, {
            bidder: "districtmDMX",
            params: {
                id: 118025
            }
        }, {
            bidder: "skindo",
            params: {
                placementId: 9902344
            }
        }, {
            bidder: "sovrn",
            params: {
                tagid: 308136
            }
        }, {
            bidder: "indexExchange",
            params: {
                id: "3",
                siteID: 183106
            }
        }, {
            bidder: "conversant",
            params: {
                site_id: "107713"
            }
        }]
    }, {
        code: "div-gpt-ad-1321402480744-1",
        sizes: [[300, 250]],
        bids: [{
            bidder: "appnexus",
            params: {
                placementId: 10561721
            }
        }, {
            bidder: "komoona",
            params: {
                hbid: "f5cee049e8f84262a322113e89fb34fc",
                placementId: "24423d13f67a2ce64619062637775fcf"
            }
        }, {
            bidder: "districtmDMX",
            params: {
                id: 118026
            }
        }, {
            bidder: "skindo",
            params: {
                placementId: 9902345
            }
        }, {
            bidder: "sovrn",
            params: {
                tagid: 308137
            }
        }, {
            bidder: "indexExchange",
            params: {
                id: "4",
                siteID: 183105
            }
        }, {
            bidder: "conversant",
            params: {
                site_id: "107713"
            }
        }]
    }, {
        code: "div-gpt-ad-1321402480744-2",
        sizes: [[728, 90]],
        bids: [{
            bidder: "appnexus",
            params: {
                placementId: 10561723
            }
        }, {
            bidder: "komoona",
            params: {
                hbid: "f5cee049e8f84262a322113e89fb34fc",
                placementId: "8c154cea2910bbacadb44d2ad34ceaf1"
            }
        }, {
            bidder: "districtmDMX",
            params: {
                id: 118022
            }
        }, {
            bidder: "skindo",
            params: {
                placementId: 9902346
            }
        }, {
            bidder: "sovrn",
            params: {
                tagid: 308138
            }
        }, {
            bidder: "indexExchange",
            params: {
                id: "6",
                siteID: 183108
            }
        }, {
            bidder: "conversant",
            params: {
                site_id: "107713"
            }
        }]
    }, {
        code: "div-gpt-ad-1321402480744-3",
        sizes: [[300, 600]],
        bids: [{
            bidder: "appnexus",
            params: {
                placementId: 10561725
            }
        }, {
            bidder: "komoona",
            params: {
                hbid: "f5cee049e8f84262a322113e89fb34fc",
                placementId: "c33bc46d9f333800265ca8bda8b2d950"
            }
        }, {
            bidder: "districtmDMX",
            params: {
                id: 120708
            }
        }, {
            bidder: "skindo",
            params: {
                placementId: 9902348
            }
        }, {
            bidder: "sovrn",
            params: {
                tagid: 368807
            }
        }, {
            bidder: "indexExchange",
            params: {
                id: "7",
                siteID: 183109
            }
        }, {
            bidder: "conversant",
            params: {
                site_id: "107713"
            }
        }]
    }];
    pbjs.addAdUnits(a);
    pbjs.aliasBidder("appnexus", "skindo");
    pbjs.addCallback("adUnitBidsBack", function(b) {
        log("ad unit bids back for : " + b)
    });
    pbjs.requestBids({
        bidsBackHandler: function(b) {
            initAdserver()
        }
    });
    pbjs.bidderSettings = {
        standard: {
            adserverTargeting: [{
                key: "hb_bidder",
                val: function(b) {
                    return b.bidderCode
                }
            }, {
                key: "hb_adid",
                val: function(b) {
                    return b.adId
                }
            }, {
                key: "hb_pb",
                val: function(b) {
                    return b.pbHg
                }
            }]
        },
        skindo: {
            bidCpmAdjustment: function(b) {
                return b * 0.75
            }
        },
        districtmDMX: {
            bidCpmAdjustment: function(c) {
                return c * 0.9
            }
        }
    }
});
window.sovrn = window.sovrn || {};
sovrn.auction = sovrn.auction || {};
beaconFlag = !1;
sovrn.auction = {
    sendBeacon: function() {
        try {
            var c, b;
            if (beaconFlag) {
                return !1
            }
            c = "sovrn_beacon";
            b = sovrn.auction.createiFrame(c, 1, 1);
            b.src = sovrn.auction.getBeaconURL();
            document.body.appendChild(b);
            beaconFlag = !0
        } catch (a) {
            log("error making beacon", a);
            return !1
        }
        return !0
    },
    createiFrame: function(f, j, q) {
        var p, m, h, d, g, k;
        p = document.createElement("iframe");
        m = p.style;
        g = {
            id: f,
            margin: "0",
            padding: "0",
            frameborder: "0",
            width: j + "",
            height: q + "",
            scrolling: "no",
            src: "about:blank"
        };
        k = {
            margin: "0px",
            padding: "0px",
            border: "0px none",
            width: j + "px",
            height: q + "px",
            overflow: "hidden"
        };
        for (h in g) {
            g.hasOwnProperty(h) && p.setAttribute(h, g[h])
        }
        for (d in k) {
            if (k.hasOwnProperty(d)) {
                try {
                    m[d] = k[d]
                } catch (b) {}
            }
        }
        return p
    },
    getBeaconURL: function() {
        urlString = "http://gslbeacon.lijit.com/beacon?viewId=whatismyipaddress_header_auction&rand=" + Math.floor(9000 * Math.random()) + "&informer=6312457&type=fpads&loc=" + window.location.host + "&v=1.2";
        return urlString
    }
};
r(function() {
    sovrn.auction.sendBeacon()
});
//]]>
