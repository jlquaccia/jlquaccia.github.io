(self.pbjsChunk=self.pbjsChunk||[]).push([[187],{60:function(e,t,r){var i=r(3324),n=r(4942),a=r(1002),o=r(4358),s=r(265),c=r(4806),d=r(5339),p=r(3193),u=r(4679),l=r(4614),m=r(5706),v=r(8640);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b="https://video-outstream.rubiconproject.com/apex-2.2.1.js",x={};p.vc.getConfig("rubicon",(function(e){(0,o.Ee)(x,e.rubicon)}));var y={1:"468x60",2:"728x90",5:"120x90",7:"125x125",8:"120x600",9:"160x600",10:"300x600",13:"200x200",14:"250x250",15:"300x250",16:"336x280",17:"240x400",19:"300x100",31:"980x120",32:"250x360",33:"180x500",35:"980x150",37:"468x400",38:"930x180",39:"750x100",40:"750x200",41:"750x300",42:"2x4",43:"320x50",44:"300x50",48:"300x300",53:"1024x768",54:"300x1050",55:"970x90",57:"970x250",58:"1000x90",59:"320x80",60:"320x150",61:"1000x1000",64:"580x500",65:"640x480",66:"930x600",67:"320x480",68:"1800x1000",72:"320x320",73:"320x160",78:"980x240",79:"980x300",80:"980x400",83:"480x300",85:"300x120",90:"548x150",94:"970x310",95:"970x100",96:"970x210",101:"480x320",102:"768x1024",103:"480x280",105:"250x800",108:"320x240",113:"1000x300",117:"320x100",125:"800x250",126:"200x600",144:"980x600",145:"980x150",152:"1000x250",156:"640x320",159:"320x250",179:"250x600",195:"600x300",198:"640x360",199:"640x200",213:"1030x590",214:"980x360",221:"1x1",229:"320x180",230:"2000x1400",232:"580x400",234:"6x6",251:"2x2",256:"480x820",257:"400x600",258:"500x200",259:"998x200",264:"970x1000",265:"1920x1080",274:"1800x200",278:"320x500",282:"320x400",288:"640x380",548:"500x1000",550:"980x480",552:"300x200",558:"640x640",562:"300x431",564:"320x431",566:"320x300",568:"300x150",570:"300x125",572:"250x350",574:"620x891",576:"610x877",578:"980x552",580:"505x656"};(0,o.yi)(y,(function(e,t){return y[e]=t}));var h={code:"rubicon",gvlid:52,supportedMediaTypes:[u.Mk,u.pX],isBidRequestValid:function(e){if("object"!==(0,a.Z)(e.params))return!1;for(var t=0,r=["accountId","siteId","zoneId"];t<r.length;t++)if(e.params[r[t]]=parseInt(e.params[r[t]]),isNaN(e.params[r[t]]))return(0,o.H)("Rubicon: wrong format of accountId or siteId or zoneId."),!1;var i=w(e,!0);return!!i&&("video"!==i||function(e){var t=!0,r=Object.prototype.toString.call([]),i=Object.prototype.toString.call(0),n={mimes:r,protocols:r,linearity:i,api:r};return Object.keys(n).forEach((function(r){Object.prototype.toString.call((0,s.Z)(e,"mediaTypes.video."+r))!==n[r]&&(t=!1,(0,o.H)("Rubicon: mediaTypes.video."+r+" is required and must be of type: "+n[r]))})),t}(e))},buildRequests:function(e,t){var r=[],i=e.filter((function(e){return"video"===w(e)})).map((function(e){e.startTime=(new Date).getTime();var r,i={id:e.transactionId,test:p.vc.getConfig("debug")?1:0,cur:["USD"],source:{tid:e.transactionId},tmax:t.timeout,imp:[{exp:p.vc.getConfig("s2sConfig.defaultTtl"),id:e.adUnitCode,secure:1,ext:(0,n.Z)({},e.bidder,e.params),video:(0,s.Z)(e,"mediaTypes.video")||{}}],ext:{prebid:{channel:{name:"pbjs",version:pbjs.version},cache:{vastxml:{returnCreative:!0===x.returnVast}},targeting:{includewinners:!0,includebidderkeys:!1,pricegranularity:(r=p.vc,{ranges:{low:[{max:5,increment:.5}],medium:[{max:20,increment:.1}],high:[{max:20,increment:.01}],auto:[{max:5,increment:.05},{min:5,max:10,increment:.1},{min:10,max:20,increment:.5}],dense:[{max:3,increment:.01},{min:3,max:8,increment:.05},{min:8,max:20,increment:.5}],custom:r.getConfig("customPriceBucket")&&r.getConfig("customPriceBucket").buckets}[r.getConfig("priceGranularity")]})},bidders:{rubicon:{integration:x.int_type||"pbjs"}}}}};"rubicon"!==e.bidder&&(i.ext.prebid.aliases=(0,n.Z)({},e.bidder,"rubicon"));var d,l,m=(0,v.R)().installedModules;if(!m||m.length&&-1===m.indexOf("rubiconAnalyticsAdapter")||(0,c.Z)(i,"ext.prebid.analytics",{rubicon:{"client-analytics":!0}}),"function"!=typeof e.getFloor||x.disableFloors)d=parseFloat((0,s.Z)(e,"params.floor"));else{var f;try{f=e.getFloor({currency:"USD",mediaType:"video",size:Z(e,"video")})}catch(e){(0,o.H)("Rubicon: getFloor threw an error: ",e)}d="object"!==(0,a.Z)(f)||"USD"!==f.currency||isNaN(parseInt(f.floor))?void 0:parseFloat(f.floor)}(isNaN(d)||(i.imp[0].bidfloor=d),"object"===(0,a.Z)(e.floorData)&&(i.ext.prebid.floors={enabled:!1}),i.imp[0].ext[e.bidder].video.size_id=function(e){var t=parseInt((0,s.Z)(e,"params.video.size_id"));if(!isNaN(t))return t;return"outstream"===(0,s.Z)(e,"mediaTypes.".concat(u.pX,".context"))?203:201}(e),function(e,t,r){if(!e)return;"object"===(0,a.Z)(p.vc.getConfig("app"))?e.app=p.vc.getConfig("app"):e.site={page:_(t,r)};"object"===(0,a.Z)(p.vc.getConfig("device"))&&(e.device=p.vc.getConfig("device"));t.params.video.language&&["site","device"].forEach((function(r){e[r]&&("site"===r?e[r].content=Object.assign({language:t.params.video.language},e[r].content):e[r]=Object.assign({language:t.params.video.language},e[r]))}))}(i,e,t),function(e,t){"object"===(0,a.Z)(e.imp[0].video)&&void 0===e.imp[0].video.skip&&(e.imp[0].video.skip=t.params.video.skip);"object"===(0,a.Z)(e.imp[0].video)&&void 0===e.imp[0].video.skipafter&&(e.imp[0].video.skipafter=t.params.video.skipdelay);"object"===(0,a.Z)(e.imp[0].video)&&void 0===e.imp[0].video.pos&&("atf"===t.params.position?e.imp[0].video.pos=1:"btf"===t.params.position&&(e.imp[0].video.pos=3));var r=Z(t,"video");e.imp[0].video.w=r[0],e.imp[0].video.h=r[1]}(i,e),t.gdprConsent)&&("boolean"==typeof t.gdprConsent.gdprApplies&&(l=t.gdprConsent.gdprApplies?1:0),(0,c.Z)(i,"regs.ext.gdpr",l),(0,c.Z)(i,"user.ext.consent",t.gdprConsent.consentString));t.uspConsent&&(0,c.Z)(i,"regs.ext.us_privacy",t.uspConsent);var g=(0,s.Z)(t,"bids.0.userIdAsEids");g&&g.length&&(0,c.Z)(i,"user.ext.eids",g);var b=p.vc.getConfig("user.id");b&&(0,c.Z)(i,"user.id",b),!0===p.vc.getConfig("coppa")&&(0,c.Z)(i,"regs.coppa",1),e.schain&&A(e.schain)&&(0,c.Z)(i,"source.ext.schain",e.schain);var y=p.vc.getConfig("multibid");return y&&(0,c.Z)(i,"ext.prebid.multibid",y.reduce((function(e,t){var r={};return Object.keys(t).forEach((function(e){r[e.toLowerCase()]=t[e]})),e.push(r),e}),[])),k(e,u.pX,i),(0,c.Z)(i.imp[0],"ext.prebid.auctiontimestamp",t.auctionStart),i.ext.prebid.storedrequest=void 0,i.imp[0].ext.prebid.storedrequest=void 0,{method:"POST",url:"https://".concat(x.videoHost||"prebid-server",".rubiconproject.com/openrtb2/auction"),data:i,bidRequest:e}}));if(!0!==x.singleRequest)r=i.concat(e.filter((function(e){return"banner"===w(e)})).map((function(e){var r=h.createSlotParams(e,t);return{method:"GET",url:"https://".concat(x.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:h.getOrderedParams(r).reduce((function(e,t){var i=r[t];return(0,o.d8)(i)&&""!==i||(0,o.hj)(i)?"".concat(e).concat(O(t,i),"&"):e}),"")+"slots=1&rand=".concat(Math.random()),bidRequest:e}})));else{var d=e.filter((function(e){return"banner"===w(e)})).reduce((function(e,t){return(e[t.params.siteId]=e[t.params.siteId]||[]).push(t),e}),{});r=i.concat(Object.keys(d).reduce((function(e,r){var i,n;return(i=d[r],n=10,i.map((function(e,t){return t%n==0?i.slice(t,t+n):null})).filter((function(e){return e}))).forEach((function(r){var i=h.combineSlotUrlParams(r.map((function(e){return h.createSlotParams(e,t)})));e.push({method:"GET",url:"https://".concat(x.bannerHost||"fastlane",".rubiconproject.com/a/api/fastlane.json"),data:h.getOrderedParams(i).reduce((function(e,t){var r=i[t];return(0,o.d8)(r)&&""!==r||(0,o.hj)(r)?"".concat(e).concat(O(t,r),"&"):e}),"")+"slots=".concat(r.length,"&rand=").concat(Math.random()),bidRequest:r})})),e}),[]))}return r},getOrderedParams:function(e){var t=/^tg_v/,r=/^tg_i/,i=/^eid_|^tpid_/,n=["account_id","site_id","zone_id","size_id","alt_size_ids","p_pos","gdpr","gdpr_consent","us_privacy","rp_schain"].concat(Object.keys(e).filter((function(e){return i.test(e)}))).concat(["x_liverampidl","ppuid","rf","p_geo.latitude","p_geo.longitude","kw"]).concat(Object.keys(e).filter((function(e){return t.test(e)}))).concat(Object.keys(e).filter((function(e){return r.test(e)}))).concat(["tk_flint","x_source.tid","l_pb_bid_id","x_source.pchain","p_screen_res","rp_floor","rp_secure","tk_user_key"]);return n.concat(Object.keys(e).filter((function(e){return-1===n.indexOf(e)})))},combineSlotUrlParams:function(e){if(1===e.length)return e[0];var t=e.reduce((function(t,r,i){return Object.keys(r).forEach((function(n){t.hasOwnProperty(n)||(t[n]=new Array(e.length)),t[n].splice(i,1,r[n])})),t}),{}),r=new RegExp("^([^;]*)(;\\1)+$");return Object.keys(t).forEach((function(e){var i=t[e].join(";"),n=i.match(r);t[e]=n?n[1]:i})),t},createSlotParams:function(e,t){e.startTime=(new Date).getTime();var r=e.params,n=Z(e,"banner"),c=r.latLong||[],d=(0,i.Z)(c,2),m=d[0],v=d[1],f={account_id:r.accountId,site_id:r.siteId,zone_id:r.zoneId,size_id:n[0],alt_size_ids:n.slice(1).join(",")||void 0,rp_floor:(r.floor=parseFloat(r.floor))>=.01?r.floor:void 0,rp_secure:"1",tk_flint:"".concat(x.int_type||"pbjs_lite","_v7.12.0-pre"),"x_source.tid":e.transactionId,l_pb_bid_id:e.bidId,"x_source.pchain":r.pchain,p_screen_res:[window.screen.width,window.screen.height].join("x"),tk_user_key:r.userId,"p_geo.latitude":isNaN(parseFloat(m))?void 0:parseFloat(m).toFixed(4),"p_geo.longitude":isNaN(parseFloat(v))?void 0:parseFloat(v).toFixed(4),"tg_fl.eid":e.code,rf:_(e,t)};if("function"==typeof e.getFloor&&!x.disableFloors){var g;try{g=e.getFloor({currency:"USD",mediaType:"banner",size:"*"})}catch(e){(0,o.H)("Rubicon: getFloor threw an error: ",e)}f.rp_hard_floor="object"!==(0,a.Z)(g)||"USD"!==g.currency||isNaN(parseInt(g.floor))?void 0:g.floor}var b={1:"atf",3:"btf"}[(0,s.Z)(e,"mediaTypes.banner.pos")]||"";f.p_pos="atf"===r.position||"btf"===r.position?r.position:b;var y=p.vc.getConfig("user.id");return y&&(f.ppuid=y),e.userIdAsEids&&e.userIdAsEids.forEach((function(e){try{if("adserver.org"===e.source?(f.tpid_tdid=e.uids[0].id,f["eid_adserver.org"]=e.uids[0].id):"liveintent.com"===e.source?(f["tpid_liveintent.com"]=e.uids[0].id,f["eid_liveintent.com"]=e.uids[0].id,e.ext&&Array.isArray(e.ext.segments)&&e.ext.segments.length&&(f["tg_v.LIseg"]=e.ext.segments.join(","))):"liveramp.com"===e.source?f.x_liverampidl=e.uids[0].id:"id5-sync.com"===e.source?f["eid_id5-sync.com"]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype,"^").concat(e.uids[0].ext&&e.uids[0].ext.linkType||""):f["eid_".concat(e.source)]="".concat(e.uids[0].id,"^").concat(e.uids[0].atype||""),!f.ppuid){var t=(0,l.sE)(e.uids,(function(e){return e.ext&&"ppuid"===e.ext.stype}));t&&t.id&&(f.ppuid=t.id)}}catch(t){(0,o.yN)("Rubicon: error reading eid:",e,t)}})),t.gdprConsent&&("boolean"==typeof t.gdprConsent.gdprApplies&&(f.gdpr=Number(t.gdprConsent.gdprApplies)),f.gdpr_consent=t.gdprConsent.consentString),t.uspConsent&&(f.us_privacy=encodeURIComponent(t.uspConsent)),f.rp_maxbids=t.bidLimit||1,k(e,u.Mk,f),!0===p.vc.getConfig("coppa")&&(f.coppa=1),e.schain&&A(e.schain)&&(f.rp_schain=h.serializeSupplyChain(e.schain)),f},serializeSupplyChain:function(e){if(!A(e))return"";var t=e.ver,r=e.complete,i=e.nodes;return"".concat(t,",").concat(r,"!").concat(h.serializeSupplyChainNodes(i))},serializeSupplyChainNodes:function(e){var t=["asi","sid","hp","rid","name","domain"];return e.map((function(e){return t.map((function(t){return encodeURIComponent(e[t]||"")})).join(",")})).join("!")},interpretResponse:function(e,t){var r=t.bidRequest;if(!(e=e.body)||"object"!==(0,a.Z)(e))return[];if(e.seatbid){var n=(0,s.Z)(e,"ext.errors.rubicon");Array.isArray(n)&&n.length>0&&(0,o.yN)("Rubicon: Error in video response");var d=[];return e.seatbid.forEach((function(t){(t.bid||[]).forEach((function(i){var n={requestId:r.bidId,currency:e.cur||"USD",creativeId:i.crid,cpm:i.price||0,bidderCode:t.seat,ttl:300,netRevenue:!1!==x.netRevenue,width:i.w||(0,s.Z)(r,"mediaTypes.video.w")||(0,s.Z)(r,"params.video.playerWidth"),height:i.h||(0,s.Z)(r,"mediaTypes.video.h")||(0,s.Z)(r,"params.video.playerHeight")};i.id&&(n.seatBidId=i.id),i.dealid&&(n.dealId=i.dealid),i.adomain&&(0,c.Z)(n,"meta.advertiserDomains",Array.isArray(i.adomain)?i.adomain:[i.adomain]),(0,s.Z)(i,"ext.bidder.rp.advid")&&(0,c.Z)(n,"meta.advertiserId",i.ext.bidder.rp.advid);var p=(0,s.Z)(e,"ext.responsetimemillis.rubicon");if(r&&p&&(r.serverResponseTimeMs=p),(0,s.Z)(i,"ext.prebid.type")===u.pX){n.mediaType=u.pX,(0,c.Z)(n,"meta.mediaType",u.pX);var l=(0,s.Z)(i,"ext.prebid.targeting");l&&"object"===(0,a.Z)(l)&&(n.adserverTargeting=l),i.ext.prebid.cache&&"object"===(0,a.Z)(i.ext.prebid.cache.vastXml)&&i.ext.prebid.cache.vastXml.cacheId&&i.ext.prebid.cache.vastXml.url?(n.videoCacheKey=i.ext.prebid.cache.vastXml.cacheId,n.vastUrl=i.ext.prebid.cache.vastXml.url):l&&l.hb_uuid&&l.hb_cache_host&&l.hb_cache_path&&(n.videoCacheKey=l.hb_uuid,n.vastUrl="https://".concat(l.hb_cache_host).concat(l.hb_cache_path,"?uuid=").concat(l.hb_uuid)),i.adm&&(n.vastXml=i.adm),i.nurl&&(n.vastUrl=i.nurl),!n.vastUrl&&i.nurl&&(n.vastUrl=i.nurl),"outstream"===(0,s.Z)(r,"mediaTypes.video.context").toLowerCase()&&(n.renderer=function(e){var t=m.Th.install({id:e.adId,url:x.rendererUrl||b,config:x.rendererConfig||{},loaded:!1,adUnitCode:e.adUnitCode});try{t.setRender(j)}catch(e){(0,o.yN)("Prebid Error calling setRender on renderer",e)}return t}(n))}else(0,o.yN)("Rubicon: video response received non-video media type");d.push(n)}))})),d}var p,l=e.ads,v=0;return"object"!==(0,a.Z)(r)||Array.isArray(r)||"video"!==w(r)||"object"!==(0,a.Z)(l)||(l=l[r.adUnitCode]),!Array.isArray(l)||l.length<1?[]:l.reduce((function(t,n,s){if(n.impression_id&&p===n.impression_id?v++:p=n.impression_id,"ok"!==n.status)return t;var c,d,l=Array.isArray(r)?r[s-v]:r;if(l&&"object"===(0,a.Z)(l)){var m={requestId:l.bidId,currency:"USD",creativeId:n.creative_id||"".concat(n.network||"","-").concat(n.advertiser||""),cpm:n.cpm||0,dealId:n.deal,ttl:300,netRevenue:!1!==x.netRevenue,rubicon:{advertiserId:n.advertiser,networkId:n.network},meta:{advertiserId:n.advertiser,networkId:n.network,mediaType:u.Mk}};if(n.creative_type&&(m.mediaType=n.creative_type),n.adomain&&(m.meta.advertiserDomains=Array.isArray(n.adomain)?n.adomain:[n.adomain]),n.creative_type===u.pX)m.width=l.params.video.playerWidth,m.height=l.params.video.playerHeight,m.vastUrl=n.creative_depot_url,m.impression_id=n.impression_id,m.videoCacheKey=n.impression_id;else{m.ad=(c=n.script,d=n.impression_id,"<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(d,"'>\n<script type='text/javascript'>").concat(c,"<\/script>\n</div>\n</body>\n</html>"));var f=y[n.size_id].split("x").map((function(e){return Number(e)})),g=(0,i.Z)(f,2);m.width=g[0],m.height=g[1]}m.rubiconTargeting=(Array.isArray(n.targeting)?n.targeting:[]).reduce((function(e,t){return e[t.key]=t.values[0],e}),{rpfl_elemid:l.adUnitCode}),t.push(m)}else(0,o.H)("Rubicon: bidRequest undefined at index position:".concat(s),r,e);return t}),[]).sort((function(e,t){return(t.cpm||0)-(e.cpm||0)}))},getUserSyncs:function(e,t,r,i){if(!S&&e.iframeEnabled){var n={};return r&&("boolean"==typeof r.gdprApplies&&(n.gdpr=Number(r.gdprApplies)),"string"==typeof r.consentString&&(n.gdpr_consent=r.consentString)),i&&(n.us_privacy=encodeURIComponent(i)),n=Object.keys(n).length?"?".concat((0,o.Yp)(n)):"",S=!0,{type:"iframe",url:"https://".concat(x.syncHost||"eus",".rubiconproject.com/usync.html")+n}}},transformBidParams:function(e,t){return(0,o.uh)({accountId:"number",siteId:"number",zoneId:"number"},e)}};function _(e,t){var r;return r=e.params.referrer?e.params.referrer:t.refererInfo.page,e.params.secure?r.replace(/^http:/i,"https:"):r}function j(e){var t,r=document.getElementById(e.adUnitCode);(t=r.querySelector("div[id^='google_ads']"))&&t.style.setProperty("display","none"),function(e){var t=e.querySelector("script[id^='sas_script']"),r=t&&t.nextSibling;r&&"iframe"===r.localName&&r.style.setProperty("display","none")}(r);var i=e.renderer.getConfig();e.renderer.push((function(){window.MagniteApex.renderAd({width:e.width,height:e.height,vastUrl:e.vastUrl,placement:{attachTo:r,align:i.align||"center",position:i.position||"append"},closeButton:i.closeButton||!1,label:i.label||void 0,collapse:i.collapse||!0})}))}function Z(e,t){var r=e.params;if("video"===t){var i=[];return r.video&&r.video.playerWidth&&r.video.playerHeight?i=[r.video.playerWidth,r.video.playerHeight]:Array.isArray((0,s.Z)(e,"mediaTypes.video.playerSize"))&&1===e.mediaTypes.video.playerSize.length?i=e.mediaTypes.video.playerSize[0]:Array.isArray(e.sizes)&&e.sizes.length>0&&Array.isArray(e.sizes[0])&&e.sizes[0].length>1&&(i=e.sizes[0]),i}var n=[];return Array.isArray(r.sizes)?n=r.sizes:void 0!==(0,s.Z)(e,"mediaTypes.banner.sizes")?n=C(e.mediaTypes.banner.sizes):Array.isArray(e.sizes)&&e.sizes.length>0?n=C(e.sizes):(0,o.yN)("Rubicon: no sizes are setup or found"),function(e){var t=[15,2,9];return e.sort((function(e,r){var i=t.indexOf(e),n=t.indexOf(r);return i>-1||n>-1?-1===i?1:-1===n?-1:i-n:e-r}))}(n)}function k(e,t,r){var i={user:{ext:{data:g({},e.params.visitor)}},site:{ext:{data:g({},e.params.inventory)}}};e.params.keywords&&(i.site.keywords=(0,o.kJ)(e.params.keywords)?e.params.keywords.join(","):e.params.keywords);var n=(0,o.Ee)({},e.ortb2||{},i),c=(0,s.Z)(e.ortb2Imp,"ext")||{},d=(0,s.Z)(e.ortb2Imp,"ext.data")||{},p=(0,s.Z)(e,"ortb2Imp.ext.gpid"),l={user:[4],site:[1,2,5,6]},m={user:"tg_v.",site:"tg_i.",adserver:"tg_i.dfp_ad_unit_code",pbadslot:"tg_i.pbadslot",keywords:"kw"},v=function(e,t,r){return"data"===t&&Array.isArray(e)?e.filter((function(e){return e.segment&&(0,s.Z)(e,"ext.segtax")&&l[r]&&-1!==l[r].indexOf((0,s.Z)(e,"ext.segtax"))})).map((function(e){var t=e.segment.filter((function(e){return e.id})).reduce((function(e,t){return e.push(t.id),e}),[]);if(t.length>0)return t.toString()})).toString():("object"!==(0,a.Z)(e)||Array.isArray(e))&&void 0!==e?Array.isArray(e)?e.filter((function(e){if("object"!==(0,a.Z)(e)&&void 0!==e)return e.toString();(0,o.yN)("Rubicon: Filtered value: ",e,"for key",t,": Expected value to be string, integer, or an array of strings/ints")})).toString():e.toString():void 0},f=function(e,t,i){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=v(e,i,t),o=m[i]&&n?"".concat(m[i]):"data"===i?"".concat(m[t],"iab"):"".concat(m[t]).concat(i);r[o]=r[o]?r[o].concat(",",a):a};t===u.Mk?(["site","user"].forEach((function(e){Object.keys(n[e]).forEach((function(t){"site"===e&&"content"===t&&n[e][t].data?f(n[e][t].data,e,"data"):"ext"!==t?f(n[e][t],e,t):n[e][t].data&&Object.keys(n[e].ext.data).forEach((function(t){f(n[e].ext.data[t],e,t,!1)}))}))})),Object.keys(d).forEach((function(e){"adserver"!==e?f(d[e],"site",e):"gam"===d[e].name&&f(d[e].adslot,name,e)})),p&&(r.p_gpid=p),r["tg_i.pbadslot"]&&delete r["tg_i.dfp_ad_unit_code"]):(Object.keys(c).length&&(0,o.Ee)(r.imp[0].ext,c),p&&(r.imp[0].ext.gpid=p),(0,o.Ee)(r,n))}function C(e){return(0,o.sF)(e).reduce((function(e,t){var r=parseInt(y[t],10);return r&&e.push(r),e}),[])}function I(e){return"object"===(0,a.Z)((0,s.Z)(e,"params.video"))&&void 0!==(0,s.Z)(e,"mediaTypes.".concat(u.pX))}function w(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return I(e)?-1===["outstream","instream"].indexOf((0,s.Z)(e,"mediaTypes.".concat(u.pX,".context")))?void(t&&(0,o.H)("Rubicon: mediaTypes.video.context must be outstream or instream")):Z(e,"video").length<2?void(t&&(0,o.H)("Rubicon: could not determine the playerSize of the video")):(t&&(0,o.ji)("Rubicon: making video request for adUnit",e.adUnitCode),"video"):0===Z(e,"banner").length?void(t&&(0,o.H)("Rubicon: could not determine the sizes for banner request")):(t&&(0,o.ji)("Rubicon: making banner request for adUnit",e.adUnitCode),"banner")}function A(e){var t=!1,r=["asi","sid","hp"];return e.nodes?((t=e.nodes.reduce((function(e,t){return e?r.every((function(e){return t.hasOwnProperty(e)})):e}),!0))||(0,o.H)("Rubicon: required schain params missing"),t):t}function O(e,t){return"rp_schain"===e?"rp_schain=".concat(t):"".concat(e,"=").concat(encodeURIComponent(t))}var S=!1;(0,d.dX)(h),window.pbjs.installedModules.push("rubiconBidAdapter")}},function(e){var t;t=60,e(e.s=t)}]);