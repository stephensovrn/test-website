import {getBidIdParameter, getUniqueIdentifierStr} as utils from 'src/utils';
import { registerBidder } from 'src/adapters/bidderFactory';
import { BANNER } from 'src/mediaTypes';
import { REPO_AND_VERSION } from 'src/constants';

export const spec = {
  code: 'sovrn',
  supportedMediaTypes: [BANNER],

  /**
   * Check if the bid is a valid zone ID in either number or string form
   * @param {object} bid the Sovrn bid to validate
   * @return boolean for whether or not a bid is valid
   */
  isBidRequestValid: bid => !!(bid.params.tagid && !isNaN(parseFloat(bid.params.tagid)) && isFinite(bid.params.tagid))
  },

  /**
   * Format the bid request object for our endpoint
   * @param {BidRequest[]} bidRequests Array of Sovrn bidders
   * @return object of parameters for Prebid AJAX request
   */
buildRequests: bidReqs => {
	const sovrnImps = bidReqs.map(({id, params}) => {
		return {
			id,
			banner: {w:1, h:1},
			tagid: getBidIdParameter('tagid', params),
			bidFloor: getBidIdParameter('bidfloor', params)
		}
	})

	const sovrnBidReq = {
		id: getUniqueIdentifierStr(),
		imp: sovrnImps,
		site: {
			domain: window.location.host,
			page: window.location.pathname + location.search + location.hash
		}
	}

	return {
	  method: 'POST',
	  url: `//ap.lijit.com/rtb/bid?src=${REPO_AND_VERSION}`,
	  data: JSON.stringify(sovrnBidReq),
	  options: {contentType: 'text/plain'}
	};    
 },

  /**
   * Format Sovrn responses as Prebid bid responses
   * @param {*} sovrnResponse A successful response from Sovrn.
   * @return {Bid[]} An array of formatted bids.
  */
  interpretResponse: ({id, seatbid}) => {
    if (id && 
      seatbid && 
      seatbid.length !== 0 &&
      seatbid[0].bid && 
      seatbid[0].bid.length !== 0) {
    return seatbid[0].bid.map(({impid, price, w, h, id, ealId, adm, nurl}) => {
      return {
        requestId: impid,
        bidderCode: spec.code,
        cpm: parseFloat(price),
        width: parseInt(w),
        height: parseInt(h),
        creativeId: id,
        dealId: dealId || null,
        currency: 'USD',
        netRevenue: true,
        mediaType: BANNER,
        ad: decodeURIComponent(`${adm}<img src=${nurl}>`),
        ttl: 60000
      }
    })
  }
};

registerBidder(spec);