(this["webpackJsonpens-resolver"]=this["webpackJsonpens-resolver"]||[]).push([[0],{369:function(e,n){},379:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),o=t(36),i=t.n(o),s=t(4),c=t.n(s),p=t(77),u=t(67),d=t(192),l=t(52),m=new Map([[1,{ensRegistry:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",name:"Ethereum Mainnet",type:"main"}],[4,{ensRegistry:"0x98df287b6c145399aaa709692c8d308357bc085d",name:"Ethereum Rinkeby Testnet",type:"rinkeby"}],[137,{ensRegistry:"0x3c70a0190d09f34519e6e218364451add21b7d4b",name:"Polygon Mainnet",type:"matic"}],[80001,{ensRegistry:"0x431f0eed904590b176f9ff8c36a1c4ff0ee9b982",name:"Polygon Mumbai Testnet",type:"mumbai"}],[421611,{ensRegistry:"0x206edd024d8ac4df5e8953619ea8355b91248af1",name:"Arbitrum Testnet",type:"rinkarby"}],[16667e5,{ensRegistry:"0xbc7828fa8665c637901ad5abd5c7e647c9ab140f",name:"Harmony Testnet 0",type:"harmonyTest0"}],[16666e5,{ensRegistry:"0x5d0d0212199b2c041483226b20f1e4ed6ca4a4de",name:"Harmony",type:"harmony"}]]),b=t(383),j=t(34);function h(e){var n=e.message;return Object(j.jsx)("div",{style:{color:"red",overflowWrap:"anywhere",display:"inline"},children:n})}function v(e){var n=e.provider,t=e.domain,a=e.networkType,o=Object(l.useViewport)().below,i=Object(r.useState)(""),s=Object(u.a)(i,2),d=s[0],m=s[1],b=Object(r.useState)(),v=Object(u.a)(b,2),y=v[0],f=v[1],g=o("medium");return Object(r.useEffect)((function(){var e=!1;function r(){return(r=Object(p.a)(c.a.mark((function r(){var a;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,n.resolveName(t);case 3:a=r.sent,e||m(a),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),console.log("error",r.t0),e||f(r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){e=!0}}),[n,t]),y?Object(j.jsx)(h,{message:y}):d?Object(j.jsx)(l.IdentityBadge,{shorten:g,entity:d,networkType:a}):null}var y,f=t(196),g=t(14),x=t(15),O=t(119),w=["function getVersionsCount() public view returns (uint256)","function getByVersionId(uint _versionId) public view returns (uint16[3] semanticVersion, address contractAddress, bytes contentURI)"],k=function(){function e(n){Object(g.a)(this,e),this.provider=n}return Object(x.a)(e,[{key:"getRepository",value:function(){var e=Object(p.a)(c.a.mark((function e(n){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.provider.resolveName(n);case 2:return t=e.sent,e.abrupt("return",new O.a(t,w,this.provider));case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"getAllVersions",value:function(){var e=Object(p.a)(c.a.mark((function e(n){var t,r,a,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRepository(n);case 2:return t=e.sent,e.next=5,t.getVersionsCount();case 5:for(r=e.sent,a=[],o=1;o<=r;o++)a.push(t.getByVersionId(o));return e.next=10,Promise.all(a);case 10:return i=e.sent,e.abrupt("return",i.map((function(e){var n=e.semanticVersion,t=e.contractAddress,r=e.contentURI,a=b.b.toUtf8String(r).split(/:(.+)/),o=Object(u.a)(a,2),i=o[0],s=o[1];return{version:n.join("."),contractAddress:t,content:{provider:i,location:s}}})));case 12:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()}]),e}();function T(e){var n=e.repo,t=e.provider,a=e.network,o=Object(r.useState)(null),i=Object(u.a)(o,2),s=i[0],d=i[1];return console.log("in versions",n),Object(r.useState)((function(){var e=!1;function r(){return(r=Object(p.a)(c.a.mark((function r(){var a,o;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=new k(t),r.prev=1,r.next=4,a.getAllVersions(n.domain);case 4:o=r.sent,console.log("versions",o),e||d(o.reverse()),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),console.log("error",r.t0),e||d([]);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){e=!0}}),[n,t]),s?0===s.length?Object(j.jsx)(A,{children:"No versions"}):Object(j.jsx)("div",{children:s.map((function(e){return Object(j.jsxs)(A,{children:[Object(j.jsx)(l.Tag,{mode:"new",children:e.version}),Object(j.jsxs)("div",{children:[e.content.provider,":",Object(j.jsx)(l.TextCopy,{value:e.content.location})]}),Object(j.jsx)(l.IdentityBadge,{shorten:!1,entity:e.contractAddress,networkType:a.type})]},e.version)}))}):(console.log("no version"),null)}var A=t(18).default.div(y||(y=Object(f.a)(["\n  padding: 24px;\n"])));function C(e){var n=e.apps,t=e.network,r=e.provider;return Object(j.jsx)("ol",{children:n.map((function(e,n){return Object(j.jsx)("li",{children:Object(j.jsx)(l.Field,{label:e.name,children:Object(j.jsx)(l.Accordion,{items:[[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:e.domain}),Object(j.jsx)(v,{provider:r,domain:e.domain,networkType:t.type})]}),Object(j.jsx)(T,{repo:e,network:t,provider:r})]]})})},n)}))})}var R=["function owner(bytes32 node) external view returns (address)"];function S(e){var n=e.provider,t=e.domain,a=e.networkType,o=Object(r.useState)(null),i=Object(u.a)(o,2),s=i[0],d=i[1];return Object(r.useEffect)((function(){var e=!1;function r(){return(r=Object(p.a)(c.a.mark((function r(){var o,i,s,p;return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t&&a){r.next=3;break}return d(null),r.abrupt("return");case 3:return r.prev=3,r.next=6,n.getNetwork();case 6:if((o=r.sent).ensAddress){r.next=10;break}return e||d(null),r.abrupt("return");case 10:return i=new O.a(o.ensAddress,R,n),s=b.b.namehash(t),r.next=14,i.owner(s);case 14:p=r.sent,e||d(p),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(3),e||d(null);case 21:case"end":return r.stop()}}),r,null,[[3,18]])})))).apply(this,arguments)}return function(){r.apply(this,arguments)}(),function(){e=!0}}),[n,t,a]),s?Object(j.jsx)(l.IdentityBadge,{shorten:!1,entity:s,networkType:a}):null}function I(){return Object(j.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},children:Object(j.jsx)("div",{style:{alignSelf:"center"},children:Object(j.jsx)(l.EmptyStateCard,{illustration:Object(j.jsx)("img",{width:"200px",src:"/aragon-ens-lookup/aragon-ui/48526b4ed811c6ff.png",alt:"metamask not found"}),text:"Opps! Metamask is not installed!"})})})}var V,B=[],E=Object(d.a)([{name:"Agent",domain:"agent.aragonpm.eth",type:"app"},{name:"Finance",domain:"finance.aragonpm.eth",type:"app"},{name:"Survey",domain:"survey.aragonpm.eth",type:"app"},{name:"Token Manager",domain:"token-manager.aragonpm.eth",type:"app"},{name:"Vault",domain:"vault.aragonpm.eth",type:"app"},{name:"Voting",domain:"voting.aragonpm.eth",type:"app"},{domain:"dandelion-voting.aragonpm.eth",name:"Dandelion Voting",type:"app"},{domain:"time-lock.aragonpm.eth",name:"Time Lock",type:"app"},{domain:"token-balance-oracle.aragonpm.eth",name:"Token Oracle",type:"app"},{domain:"token-request.aragonpm.eth",name:"Token Request",type:"app"},{domain:"redemptions.aragonpm.eth",name:"Redemptions",type:"app"},{domain:"address-book.aragonpm.eth",name:"Address Book",type:"app"},{domain:"allocations.aragonpm.eth",name:"Allocations",type:"app"},{domain:"discussions.aragonpm.eth",name:"Discussions",type:"app"},{domain:"dot-voting.aragonpm.eth",name:"Dot Voting",type:"app"},{domain:"projects.aragonpm.eth",name:"Projects",type:"app"},{domain:"rewards.aragonpm.eth",name:"Rewards",type:"app"},{name:"Company",domain:"company-template.aragonpm.eth",type:"template"},{name:"Membership",domain:"membership-template.aragonpm.eth",type:"template"},{name:"Reputation",domain:"reputation-template.aragonpm.eth",type:"template"},{name:"Dandelion",domain:"dandelion-org-template.aragonpm.eth",type:"template"},{name:"Open Enterprise",domain:"open-enterprise-template.aragonpm.eth",type:"template"},{name:"Fundraising",domain:"aragon-fundraising.aragonpm.eth",type:"template"}].values());try{for(E.s();!(V=E.n()).done;){var F=V.value;B.push(F)}}catch(N){E.e(N)}finally{E.f()}console.log("knownAddresses",B);var M=function(){var e=Object(r.useState)(null),n=Object(u.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)("aragonpm.eth"),i=Object(u.a)(o,2),s=i[0],d=i[1],h=Object(r.useState)({}),y=Object(u.a)(h,2),f=y[0],g=y[1];Object(r.useEffect)((function(){if(window.ethereum){var e=function(e){console.log("chainChanged",e),window.location.reload()},n=function(){var e=Object(p.a)(c.a.mark((function e(){var n,r,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new b.a.Web3Provider(window.ethereum),e.prev=1,e.next=4,n.getNetwork();case 4:r=e.sent,t||(o=r.chainId,(i=m.get(o))?(r.ensAddress=i.ensRegistry,r.name=i.name):console.log("unsupported network",r),a(new b.a.Web3Provider(window.ethereum,r)),g(i||{})),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),t=!1;return window.ethereum.on("chainChanged",e),n(),function(){t=!0,window.ethereum.removeListener&&window.ethereum.removeListener("chainChanged",e)}}}),[]);var x=Object(r.useCallback)((function(e){console.log("value",e),d(e)}),[]);return t?Object(j.jsxs)(l.Main,{children:[Object(j.jsx)(l.Header,{primary:"Aragon ENS",secondary:f.name||"Unsupported network"}),Object(j.jsxs)(l.Box,{children:[Object(j.jsx)(l.Field,{label:"Lookup ENS name",children:Object(j.jsx)(l.SearchInput,{wide:!0,value:s,onChange:x})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(l.Field,{label:"address",children:Object(j.jsx)(v,{provider:t,domain:s,networkType:f.type})}),Object(j.jsx)(l.Field,{label:"owner",children:Object(j.jsx)(S,{provider:t,domain:s,networkType:f.type})})]})]}),Object(j.jsx)(l.Box,{heading:"Known Apps:",children:Object(j.jsx)(C,{apps:B.filter((function(e){return"app"===e.type})),network:f,provider:t})}),Object(j.jsx)(l.Box,{heading:"Known Templates:",children:Object(j.jsx)(C,{apps:B.filter((function(e){return"template"===e.type})),network:f,provider:t})})]}):Object(j.jsx)(I,{})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,384)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),a(e),o(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root")),P()}},[[379,1,2]]]);
//# sourceMappingURL=main.9c6f4d01.chunk.js.map