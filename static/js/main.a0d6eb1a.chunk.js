(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),n=c(17),r=c.n(n),s=(c(27),c(22)),o=c(21),d=c(4),l=c(5),j=c(2),h=(c(28),c(29),c(0));var b=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("nav",{id:"topBarNavContainer",children:Object(h.jsxs)("ul",{className:"nav-links",children:[Object(h.jsx)(l.b,{to:"/shopping-cart/",children:Object(h.jsx)("li",{children:"Home"})}),Object(h.jsx)(l.b,{to:"/shopping-cart/shop",children:Object(h.jsx)("li",{children:"Shop"})}),Object(h.jsx)(l.b,{to:"/shopping-cart/cart",children:Object(h.jsxs)("li",{children:["(",e.cartItems,") Cart"]})})]})})})},p=(c(39),c(40),c(19)),u=c(20),O=c.n(u),x=c.p+"static/media/EastOfEden.6358533a.jpg",m=c.p+"static/media/TheGoodEarth.ca5cc7af.png",g=c.p+"static/media/TheGrapesOfWrath.d728efbc.png",f=c.p+"static/media/InColdBlood.d14ce537.png",k=c.p+"static/media/FlowersForAlgernon.d22a4f9a.jpg",v=c.p+"static/media/1984.84bcc7fa.jpg",D=c.p+"static/media/TheHolocaust.ed25c481.jpg",y=c.p+"static/media/TheHotHouse.b47884e3.jpg",C=c.p+"static/media/TheRepublic.8928a41e.jpg",I=c.p+"static/media/TheScarletLetter.5c4442f8.jpg",w=c.p+"static/media/BraveNewWorld.318c42ea.jpg",N=c.p+"static/media/Fahrenheit451.1c2cb146.jpg",T=c.p+"static/media/AllQuietOnTheWesternFront.809c5503.jpg",S=c.p+"static/media/WarAndPeace.511e06b2.jpg",W=c.p+"static/media/TheRiseAndFall.767eeed3.jpg",B=c.p+"static/media/HistOfWesternPhil.479c373d.jpg",F=function e(t,c,i,a,n){Object(p.a)(this,e),this.image=t,this.title=c,this.genre=i,this.priceWhole=a,this.priceDecimal=n,this.id=O()()},A=["history","philosophy","dystopian","novel","trueCrime"],H=[new F(x,"East of Eden",A[3],"15","00"),new F(m,"The Good Earth",A[3],"17","99"),new F(g,"The Grapes of Wrath",A[3],"12","29"),new F(f,"In Cold Blood",A[4],"10","29"),new F(k,"Flowers for Algernon",A[3],"8","49"),new F(v,"1984",A[2],"7","48"),new F(D,"The Holocaust",A[0],"12","99"),new F(y,"The Hot House",A[4],"8","99"),new F(C,"The Republic",A[1],"10","99"),new F(I,"The Scarlett Letter",A[3],"7","20"),new F(w,"Brave New World",A[2],"11","55"),new F(N,"Fahrenheit 451",A[2],"15","99"),new F(T,"All Quiet on the Western Front",A[3],"5","04"),new F(S,"War and Peace",A[3],"13","99"),new F(W,"The Rise and Fall of the Third Reich",A[0],"7","46"),new F(B,"A History of Western Philosophy",A[1],"23","40")],E={};for(var P in H)E[H[P].id]=H[P];var q=E,R=(c(42),function(e){var t=Object(i.useRef)(null),c=Object(i.useState)(0),a=Object(d.a)(c,2),n=a[0],r=a[1];return Object(h.jsx)("div",{className:"popup-box",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("span",{className:"close-icon",onClick:e.handleClose,children:"x"}),Object(h.jsx)("h4",{id:"bookTitle",children:e.bookData.title}),Object(h.jsx)("img",{src:e.bookData.image,alt:e.bookData.title}),Object(h.jsxs)("p",{id:"price",children:[Object(h.jsx)("span",{id:"priceSymbol",children:"$"}),Object(h.jsx)("span",{id:"priceWhole",children:e.bookData.priceWhole}),Object(h.jsx)("span",{id:"priceDecimal",children:e.bookData.priceDecimal})]}),Object(h.jsxs)("form",{id:"checkOutForm",children:[Object(h.jsxs)("label",{children:["Quantity:",Object(h.jsx)("input",{id:"quantityInput",name:"quantity",type:"number",pattern:"[0-9]*",inputmode:"numeric",ref:t,onChange:function(){console.log(t.current.value),r(t.current.value)}})]}),Object(h.jsx)("button",{id:"addToCartButton",type:"button",onClick:function(){return function(t,c){e.addItem(t,c),e.handleClose()}(e.currBook,n)},children:"Add to Cart"})]})]})})});var G=function(e){var t=Object(i.useState)(""),c=Object(d.a)(t,2),a=c[0],n=c[1],r=Object(i.useState)(!1),s=Object(d.a)(r,2),o=s[0],l=s[1],j=function(e){l(!o),n(e)},b=Object.keys(e.bookData).map((function(e){return Object(h.jsxs)("div",{className:"bookContainer",onClick:function(){return j(q[e].id)},children:[Object(h.jsx)("img",{src:q[e].image,alt:q[e].title}),Object(h.jsx)("h4",{id:"bookTitle",children:q[e].title}),Object(h.jsxs)("p",{id:"price",children:[Object(h.jsx)("span",{id:"priceSymbol",children:"$"}),Object(h.jsx)("span",{id:"priceWhole",children:q[e].priceWhole}),Object(h.jsx)("span",{id:"priceDecimal",children:q[e].priceDecimal})]})]},q[e].id)}));return Object(h.jsxs)("div",{id:"bookDisplayContainer",children:[b,o&&Object(h.jsx)(R,{handleClose:j,currBook:a,addItem:e.addItem,bookData:e.bookData[a]})]})};var Q=function(e){var t={},c={},i={},a={},n={};for(var r in e.bookData)"history"===e.bookData[r].genre?t[r]=e.bookData[r]:"philosophy"===e.bookData[r].genre?c[r]=e.bookData[r]:"dystopian"===e.bookData[r].genre?i[r]=e.bookData[r]:"novel"===e.bookData[r].genre?a[r]=e.bookData[r]:"trueCrime"===e.bookData[r].genre&&(n[r]=e.bookData[r]);return Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{id:"shopContainer",children:[Object(h.jsx)("nav",{id:"shopNavBarContainer",children:Object(h.jsxs)("ul",{id:"shopnav-links",children:[Object(h.jsx)(l.b,{to:"/shopping-cart/shop",children:Object(h.jsx)("li",{children:"All Books"})}),Object(h.jsx)(l.b,{to:"/shopping-cart/shop/history",children:Object(h.jsx)("li",{children:"History"})}),Object(h.jsx)(l.b,{to:"/shopping-cart/shop/philosophy",children:Object(h.jsx)("li",{children:"Philosophy"})}),Object(h.jsx)(l.b,{to:"/shopping-cart/shop/dystopian",children:Object(h.jsx)("li",{children:"Dystopian"})}),Object(h.jsx)(l.b,{to:"/shopping-cart/shop/trueCrime",children:Object(h.jsx)("li",{children:"True Crime"})}),Object(h.jsx)(l.b,{to:"/shopping-cart/shop/novel",children:Object(h.jsx)("li",{children:"Novel"})})]})}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/shopping-cart/shop",children:Object(h.jsx)(G,{addItem:e.addItem,bookData:e.bookData})}),Object(h.jsx)(j.a,{exact:!0,path:"/shopping-cart/shop/history",children:Object(h.jsx)(G,{addItem:e.addItem,bookData:t})}),Object(h.jsx)(j.a,{exact:!0,path:"/shopping-cart/shop/philosophy",children:Object(h.jsx)(G,{addItem:e.addItem,bookData:c})}),Object(h.jsx)(j.a,{exact:!0,path:"/shopping-cart/shop/dystopian",children:Object(h.jsx)(G,{addItem:e.addItem,bookData:i})}),Object(h.jsx)(j.a,{exact:!0,path:"/shopping-cart/shop/novel",children:Object(h.jsx)(G,{addItem:e.addItem,bookData:a})}),Object(h.jsx)(j.a,{exact:!0,path:"/shopping-cart/shop/trueCrime",children:Object(h.jsx)(G,{addItem:e.addItem,bookData:n})})]})]})})};c(43);var $=function(e,t){var c=t.interval,a=void 0===c?3e3:c,n=Object(i.useState)([]),r=Object(d.a)(n,2),s=r[0],o=r[1],l=Object(i.useState)({}),j=Object(d.a)(l,2),b=j[0],p=j[1],u=Object(i.useState)(0),O=Object(d.a)(u,2),x=O[0],m=O[1],g=Object(i.useState)({}),f=Object(d.a)(g,2),k=f[0],v=f[1],D=Object(i.useState)({}),y=Object(d.a)(D,2),C=y[0],I=y[1],w=Object(i.useState)(Object.keys(e.bookData).map((function(e){return q[e].image}))),N=Object(d.a)(w,1)[0];return Object(i.useEffect)((function(){o(N),I({backgroundImage:"url('"+N[x]+"')"}),p(x>0?{backgroundImage:"url('"+N[x-1]+"')"}:{backgroundImage:"url('"+N[N.length-1]+"')"}),x===N.length-1?v({backgroundImage:"url('"+N[0]+"')"}):v({backgroundImage:"url('"+N[x+1]+"')"});var e=setInterval((function(){x===N.length-1?m(0):m(x+1)}),a);return function(){return clearInterval(e)}}),[N,x,a]),Object(h.jsxs)("div",{id:"slideShowContainer",children:[Object(h.jsx)("div",{id:"titleContainer",children:Object(h.jsx)("h1",{id:"title",children:"BookStore"})}),Object(h.jsxs)("section",{className:"slideshow",children:[Object(h.jsxs)("div",{className:"slide-holder",children:[Object(h.jsx)("section",{className:"slide previous-slide",children:Object(h.jsx)("div",{style:b,className:"slide-thumbnail"})}),Object(h.jsx)("section",{className:"slide current-slide",children:Object(h.jsx)("div",{style:C,className:"slide-thumbnail"})}),Object(h.jsx)("section",{className:"slide next-slide",children:Object(h.jsx)("div",{style:k,className:"slide-thumbnail"})})]}),Object(h.jsxs)("div",{className:"slideshow-controller",children:[Object(h.jsx)("span",{onClick:function(){m(x>0?x-1:s.length-1)},children:"Previous"}),Object(h.jsx)("span",{onClick:function(){x===s.length-1?m(0):m(x+1)},children:"Next"})]})]})]})};c(44);var J=function(e){var t,c=e.cart.map((function(e){return Object(h.jsxs)("div",{className:"cartItemContainer",children:[Object(h.jsx)("img",{src:e.image,alt:e.title}),Object(h.jsxs)("p",{id:"price",children:[e.title,": ",Object(h.jsx)("span",{id:"priceSymbol",children:"$"}),Object(h.jsx)("span",{id:"priceWhole",children:e.priceWhole}),Object(h.jsx)("span",{id:"priceDecimal",children:e.priceDecimal})," X ",e.quantity]})]},e.id)})),i=e.cart.map((function(e){return Number("".concat(e.priceWhole,".").concat(e.priceDecimal))*e.quantity})).reduce((function(e,t){return e+t}),0),a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return i&&(t=Object(h.jsx)("p",{id:"checkOutText",children:"Proceed to Checkout?"})),Object(h.jsxs)("div",{id:"cartContainer",children:[Object(h.jsx)("div",{id:"cartItemsContainer",children:c}),Object(h.jsx)("div",{id:"totalPriceContainer",children:Object(h.jsxs)("p",{id:"totalText",children:["Total: ",a.format(i)]})}),Object(h.jsx)("div",{id:"checkOutContainer",children:t})]})};function L(){var e=Object(i.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(i.useState)({}),r=Object(d.a)(n,2),p=r[0],u=r[1],O=function(e,t){if(p[e])q[e].quantity=q[e].quantity+t;else{q[e].quantity=t,a((function(t){return[].concat(Object(o.a)(t),[q[e]])}));var c=Object(s.a)({},p);c[e]=q[e],u(c)}};return Object(h.jsx)(l.a,{children:Object(h.jsxs)("div",{id:"AppContainer",children:[Object(h.jsx)(b,{cartItems:c.length}),Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{exact:!0,path:"/shopping-cart/",render:function(){return Object(h.jsx)($,{bookData:q})}}),Object(h.jsx)(j.a,{path:"/shopping-cart/shop",render:function(){return Object(h.jsx)(Q,{addItem:O,bookData:q})}}),Object(h.jsx)(j.a,{path:"/shopping-cart/cart",render:function(){return Object(h.jsx)(J,{cart:c,bookData:q})}})]})]})})}r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a0d6eb1a.chunk.js.map