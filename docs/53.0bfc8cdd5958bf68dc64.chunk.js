webpackJsonp([53],{"B/xI":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=u("LMZF"),a=function(){},t=function(){function l(l,n){this.dom=l,this._el=n,this.copied=!1}return l.prototype.onClick=function(){var l=this;this.copy('<i class="'+this._el.nativeElement.children[0].className+'"></i>').then(function(){l.copied=!0,setTimeout(function(){l.copied=!1},1e3)})},l.prototype.copy=function(l){var n=this;return new Promise(function(u,o){var a=null;try{(a=n.dom.createElement("textarea")).style.height="0px",a.style.opacity="0",a.style.width="0px",n.dom.body.appendChild(a),a.value=l,a.select(),n.dom.execCommand("copy"),u(l)}finally{a&&a.parentNode&&a.parentNode.removeChild(a)}})},l}(),e=u("Un6q"),c=u("DQNQ"),i=u("AXbG"),r=function(){return function(){this._markdownCode=u("fWL8"),this._icons={direction:["step-backward","step-forward","fast-backward","fast-forward","shrink","arrows-alt","down","up","left","right","caret-up","caret-down","caret-left","caret-right","up-circle","down-circle","left-circle","right-circle","up-circle-o","down-circle-o","right-circle-o","left-circle-o","double-right","double-left","verticle-left","verticle-right","forward","backward","rollback","enter","retweet","swap","swap-left","swap-right","arrow-up","arrow-down","arrow-left","arrow-right","play-circle","play-circle-o","up-square","down-square","left-square","right-square","up-square-o","down-square-o","left-square-o","right-square-o","login","logout","menu-fold","menu-unfold"],suggestion:["question","question-circle-o","question-circle","plus","plus-circle-o","plus-circle","pause","pause-circle-o","pause-circle","minus","minus-circle-o","minus-circle","plus-square","plus-square-o","minus-square","minus-square-o","info","info-circle-o","info-circle","exclamation","exclamation-circle-o","exclamation-circle","close","close-circle","close-circle-o","close-square","close-square-o","check","check-circle","check-circle-o","check-square","check-square-o","clock-circle-o","clock-circle"],logo:["android","android-o","apple","apple-o","windows","windows-o","ie","chrome","github","aliwangwang","aliwangwang-o","dingding","dingding-o"],other:["lock","unlock","area-chart","pie-chart","bar-chart","dot-chart","bars","book","calendar","cloud","cloud-download","code","code-o","copy","credit-card","delete","desktop","download","edit","ellipsis","file","file-text","file-unknown","file-pdf","file-excel","file-jpg","file-ppt","file-add","folder","folder-open","folder-add","hdd","frown","frown-o","meh","meh-o","smile","smile-o","inbox","laptop","appstore-o","appstore","line-chart","link","mail","mobile","notification","paper-clip","picture","poweroff","reload","search","setting","share-alt","shopping-cart","tablet","tag","tag-o","tags","tags-o","to-top","upload","user","video-camera","home","loading","loading-3-quarters","cloud-upload-o","cloud-download-o","cloud-upload","cloud-o","star-o","star","heart-o","heart","environment","environment-o","eye","eye-o","camera","camera-o","save","team","solution","phone","filter","exception","export","customer-service","qrcode","scan","like","like-o","dislike","dislike-o","message","pay-circle","pay-circle-o","calculator","pushpin","pushpin-o","bulb","select","switcher","rocket","bell","disconnect","database","compass","barcode","hourglass","key","flag","layout","printer","sound","usb","skin","tool","sync","wifi","car","schedule","user-add","user-delete","usergroup-add","usergroup-delete","man","woman","shop","gift","idcard","medicine-box","red-envelope","coffee","copyright","trademark","safety","wallet","bank","trophy","contacts","global","shake","api","fork"]}}}(),s=o._5({encapsulation:0,styles:[['ul.anticons-list[_ngcontent-%COMP%]{margin:40px 0;list-style:none;overflow:hidden}ul.anticons-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;width:16.66%;text-align:center;list-style:none;cursor:pointer;height:100px;color:#555;-webkit-transition:all .3s;transition:all .3s;position:relative;margin:3px 0;border-radius:4px;background-color:#fff;overflow:hidden;padding:10px 0 0}ul.anticons-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .anticon[_ngcontent-%COMP%]{font-size:24px;margin:12px 0 16px;-webkit-transition:all .3s;transition:all .3s}ul.anticons-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .anticon-class[_ngcontent-%COMP%]{display:block;text-align:center;-webkit-transform:scale(.83);transform:scale(.83);font-family:Lucida Console,Consolas;white-space:nowrap}ul.anticons-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#108ee9;color:#fff}ul.anticons-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .anticon[_ngcontent-%COMP%]{-webkit-transform:scale(1.4);transform:scale(1.4)}ul.anticons-list[_ngcontent-%COMP%]   li.copied[_ngcontent-%COMP%]:hover{color:hsla(0,0%,100%,.2)}ul.anticons-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;height:100%;width:100%;content:"Copied!";text-align:center;line-height:110px;color:#fff;-webkit-transition:all .3s cubic-bezier(.18,.89,.32,1.28);transition:all .3s cubic-bezier(.18,.89,.32,1.28);opacity:0}ul.anticons-list[_ngcontent-%COMP%]   li.copied[_ngcontent-%COMP%]:after{opacity:1;top:-10px}']],data:{}});function _(l){return o._31(0,[(l()(),o._7(0,0,null,null,8,"li",[["nz-icon-copy",""]],[[2,"copied",null]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==o._20(l,1).onClick()&&a),a},null,null)),o._6(1,16384,null,0,t,[e.d,o.l],null,null),(l()(),o._29(-1,null,["\n        "])),(l()(),o._7(3,0,null,null,1,"i",[["class","anticon"]],null,null,null,null,null)),o._6(4,278528,null,0,e.j,[o.r,o.s,o.l,o.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),o._29(-1,null,["\n        "])),(l()(),o._7(6,0,null,null,1,"span",[["class","anticon-class"]],null,null,null,null,null)),(l()(),o._29(7,null,["",""])),(l()(),o._29(-1,null,["\n      "]))],function(l,n){l(n,4,0,"anticon","anticon-"+n.context.$implicit)},function(l,n){l(n,0,0,o._20(n,1).copied),l(n,7,0,n.context.$implicit)})}function d(l){return o._31(0,[(l()(),o._7(0,0,null,null,8,"li",[["nz-icon-copy",""]],[[2,"copied",null]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==o._20(l,1).onClick()&&a),a},null,null)),o._6(1,16384,null,0,t,[e.d,o.l],null,null),(l()(),o._29(-1,null,["\n        "])),(l()(),o._7(3,0,null,null,1,"i",[["class","anticon"]],null,null,null,null,null)),o._6(4,278528,null,0,e.j,[o.r,o.s,o.l,o.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),o._29(-1,null,["\n        "])),(l()(),o._7(6,0,null,null,1,"span",[["class","anticon-class"]],null,null,null,null,null)),(l()(),o._29(7,null,["",""])),(l()(),o._29(-1,null,["\n      "]))],function(l,n){l(n,4,0,"anticon","anticon-"+n.context.$implicit)},function(l,n){l(n,0,0,o._20(n,1).copied),l(n,7,0,n.context.$implicit)})}function p(l){return o._31(0,[(l()(),o._7(0,0,null,null,8,"li",[["nz-icon-copy",""]],[[2,"copied",null]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==o._20(l,1).onClick()&&a),a},null,null)),o._6(1,16384,null,0,t,[e.d,o.l],null,null),(l()(),o._29(-1,null,["\n        "])),(l()(),o._7(3,0,null,null,1,"i",[["class","anticon"]],[[2,"anticon-spin",null]],null,null,null,null)),o._6(4,278528,null,0,e.j,[o.r,o.s,o.l,o.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),o._29(-1,null,["\n        "])),(l()(),o._7(6,0,null,null,1,"span",[["class","anticon-class"]],null,null,null,null,null)),(l()(),o._29(7,null,["",""])),(l()(),o._29(-1,null,["\n      "]))],function(l,n){l(n,4,0,"anticon","anticon-"+n.context.$implicit)},function(l,n){l(n,0,0,o._20(n,1).copied),l(n,3,0,"loading"===n.context.$implicit),l(n,7,0,n.context.$implicit)})}function f(l){return o._31(0,[(l()(),o._7(0,0,null,null,8,"li",[["nz-icon-copy",""]],[[2,"copied",null]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==o._20(l,1).onClick()&&a),a},null,null)),o._6(1,16384,null,0,t,[e.d,o.l],null,null),(l()(),o._29(-1,null,["\n        "])),(l()(),o._7(3,0,null,null,1,"i",[["class","anticon"]],null,null,null,null,null)),o._6(4,278528,null,0,e.j,[o.r,o.s,o.l,o.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),o._29(-1,null,["\n        "])),(l()(),o._7(6,0,null,null,1,"span",[["class","anticon-class"]],null,null,null,null,null)),(l()(),o._29(7,null,["",""])),(l()(),o._29(-1,null,["\n      "]))],function(l,n){l(n,4,0,"anticon","anticon-"+n.context.$implicit)},function(l,n){l(n,0,0,o._20(n,1).copied),l(n,7,0,n.context.$implicit)})}function g(l){return o._31(2,[(l()(),o._7(0,0,null,null,60,"article",[["class","markdown"]],null,null,null,null,null)),(l()(),o._29(-1,null,["\n  "])),(l()(),o._7(2,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),o._29(-1,null,["Icon"])),(l()(),o._7(4,0,null,null,1,"span",[["class","subtitle"]],null,null,null,null,null)),(l()(),o._29(-1,null,["\u56fe\u6807"])),(l()(),o._29(-1,null,["\n  "])),(l()(),o._7(7,0,null,null,52,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),o._29(-1,null,["\n    "])),(l()(),o._7(9,0,null,null,1,"nz-markdown",[],null,null,null,c.b,c.a)),o._6(10,4308992,null,0,i.a,[o.l,o.D],{nzContent:[0,"nzContent"]},null),(l()(),o._29(-1,null,["\n    "])),(l()(),o._7(12,0,null,null,4,"h3",[["id","\u65b9\u5411\u6027\u56fe\u6807"]],null,null,null,null,null)),(l()(),o._7(13,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o._29(-1,null,["\u65b9\u5411\u6027\u56fe\u6807"])),(l()(),o._29(-1,null,["\n      "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._7(18,0,null,null,4,"ul",[["class","anticons-list clearfix icons"]],null,null,null,null,null)),(l()(),o._29(-1,null,["\n      "])),(l()(),o._2(16777216,null,null,1,null,_)),o._6(21,802816,null,0,e.k,[o.P,o.L,o.r],{ngForOf:[0,"ngForOf"]},null),(l()(),o._29(-1,null,["\n    "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._7(24,0,null,null,4,"h3",[["id","\u63d0\u793a\u5efa\u8bae\u6027\u56fe\u6807"]],null,null,null,null,null)),(l()(),o._7(25,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o._29(-1,null,["\u63d0\u793a\u5efa\u8bae\u6027\u56fe\u6807"])),(l()(),o._29(-1,null,["\n      "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._7(30,0,null,null,4,"ul",[["class","anticons-list clearfix icons"]],null,null,null,null,null)),(l()(),o._29(-1,null,["\n      "])),(l()(),o._2(16777216,null,null,1,null,d)),o._6(33,802816,null,0,e.k,[o.P,o.L,o.r],{ngForOf:[0,"ngForOf"]},null),(l()(),o._29(-1,null,["\n    "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._7(36,0,null,null,4,"h3",[["id","\u7f51\u7ad9\u901a\u7528\u56fe\u6807"]],null,null,null,null,null)),(l()(),o._7(37,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o._29(-1,null,["\u7f51\u7ad9\u901a\u7528\u56fe\u6807"])),(l()(),o._29(-1,null,["\n      "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._7(42,0,null,null,4,"ul",[["class","anticons-list clearfix icons"]],null,null,null,null,null)),(l()(),o._29(-1,null,["\n      "])),(l()(),o._2(16777216,null,null,1,null,p)),o._6(45,802816,null,0,e.k,[o.P,o.L,o.r],{ngForOf:[0,"ngForOf"]},null),(l()(),o._29(-1,null,["\n    "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._7(48,0,null,null,4,"h3",[["id","\u54c1\u724c\u548c\u6807\u8bc6"]],null,null,null,null,null)),(l()(),o._7(49,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o._29(-1,null,["\u54c1\u724c\u548c\u6807\u8bc6"])),(l()(),o._29(-1,null,["\n      "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._29(-1,null,["\n    "])),(l()(),o._7(54,0,null,null,4,"ul",[["class","anticons-list clearfix icons"]],null,null,null,null,null)),(l()(),o._29(-1,null,["\n      "])),(l()(),o._2(16777216,null,null,1,null,f)),o._6(57,802816,null,0,e.k,[o.P,o.L,o.r],{ngForOf:[0,"ngForOf"]},null),(l()(),o._29(-1,null,["\n    "])),(l()(),o._29(-1,null,["\n  "])),(l()(),o._29(-1,null,["\n"])),(l()(),o._29(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,10,0,u._markdownCode),l(n,21,0,u._icons.direction),l(n,33,0,u._icons.suggestion),l(n,45,0,u._icons.other),l(n,57,0,u._icons.logo)},null)}var h=o._3("nz-demo-icon",r,function(l){return o._31(0,[(l()(),o._7(0,0,null,null,1,"nz-demo-icon",[],null,null,null,g,s)),o._6(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),m=u("XQ86"),k=u("94s6"),b=u("QYLS"),w=u("sVuO"),x=u("WKJP"),C=u("9Q3e"),y=u("4e8C"),O=u("7rz8"),v=u("PqOC"),M=u("md/V"),P=u("0nO6"),q=u("l6RC"),z=u("V8+5"),F=u("4jwp"),j=u("OFGE"),L=u("7bMD"),N=u("71yQ"),D=u("jhj7"),A=u("ppgG"),G=u("Hjq/"),I=u("hNpP"),T=u("f42N"),$=u("UHIZ"),Q=function(){},R=u("1n7c"),S=u("jlvU"),Z=u("AKwh"),K=u("LTvz"),U=u("v3Ml"),V=u("KvRT"),B=u("fFfs"),W=u("CZgk"),H=u("ICnb"),J=u("nQgM"),E=u("AMM9"),Y=u("x9cu"),X=u("Abwc"),ll=u("Gb4R"),nl=u("ATGq"),ul=u("rMvC"),ol=u("PIhm"),al=u("G5xS"),tl=u("tGoV"),el=u("Bd7q"),cl=u("+dpF"),il=u("t6og"),rl=u("0oag"),sl=u("0MmT"),_l=u("0SjK"),dl=u("UWIb"),pl=u("FP9i"),fl=u("8zAG"),gl=u("OtIO"),hl=u("V5qy"),ml=u("BGFw"),kl=u("qa79"),bl=u("DJ6J"),wl=u("A6WS"),xl=u("nGV/"),Cl=u("4I7f"),yl=u("LLhl"),Ol=u("+35O"),vl=u("TRYS"),Ml=u("NGUZ"),Pl=u("Cjk6"),ql=u("6eTp"),zl=u("pORy"),Fl=u("aQzP"),jl=u("LpTC"),Ll=u("YeNB"),Nl=u("x7DS"),Dl=u("//KT"),Al=u("h8LI"),Gl=u("1OKL"),Il=u("Pgvs"),Tl=u("ZgIK"),$l=u("mQB5"),Ql=u("9rok");u.d(n,"NzDemoIconModuleNgFactory",function(){return Rl});var Rl=o._4(a,[],function(l){return o._16([o._17(512,o.k,o.Z,[[8,[h,m.a,k.a,b.a,w.a,x.a,C.a,y.a]],[3,o.k],o.w]),o._17(4608,e.n,e.m,[o.t,[2,e.v]]),o._17(5120,O.b,O.a,[[3,O.b],O.c]),o._17(5120,v.b,v.a,[[3,v.b],M.a,O.b]),o._17(4608,P.u,P.u,[]),o._17(6144,q.b,null,[e.d]),o._17(4608,q.c,q.c,[[2,q.b]]),o._17(4608,z.a,z.a,[]),o._17(5120,F.c,F.a,[[3,F.c],o.y,z.a]),o._17(5120,F.f,F.e,[[3,F.f],z.a,o.y]),o._17(4608,j.g,j.g,[F.c,F.f,o.y]),o._17(5120,j.d,j.h,[[3,j.d],e.d]),o._17(4608,j.l,j.l,[F.f,e.d]),o._17(5120,j.e,j.k,[[3,j.e],e.d]),o._17(4608,j.c,j.c,[j.g,j.d,o.k,j.l,j.e,o.g,o.q,o.y,e.d]),o._17(5120,j.i,j.j,[j.c]),o._17(4608,L.a,L.a,[]),o._17(4608,N.a,N.a,[o.g,o.k,v.b]),o._17(4608,D.a,D.a,[]),o._17(4608,A.b,A.b,[]),o._17(5120,o.d,function(l,n){return[G.b(l,n)]},[e.d,[2,I.a]]),o._17(5120,T.a,T.b,[e.d,[3,T.a]]),o._17(512,$.o,$.o,[[2,$.t],[2,$.l]]),o._17(512,Q,Q,[]),o._17(512,e.c,e.c,[]),o._17(512,R.a,R.a,[]),o._17(512,S.a,S.a,[]),o._17(512,Z.a,Z.a,[]),o._17(512,K.a,K.a,[]),o._17(512,U.a,U.a,[]),o._17(512,V.a,V.a,[]),o._17(512,B.a,B.a,[]),o._17(512,P.s,P.s,[]),o._17(512,P.i,P.i,[]),o._17(512,q.a,q.a,[]),o._17(512,W.c,W.c,[]),o._17(512,z.b,z.b,[]),o._17(512,F.b,F.b,[]),o._17(512,j.f,j.f,[]),o._17(512,H.a,H.a,[]),o._17(512,J.a,J.a,[]),o._17(512,E.a,E.a,[]),o._17(512,Y.a,Y.a,[]),o._17(512,X.a,X.a,[]),o._17(512,ll.a,ll.a,[]),o._17(512,nl.a,nl.a,[]),o._17(512,ul.a,ul.a,[]),o._17(512,ol.a,ol.a,[]),o._17(512,al.a,al.a,[]),o._17(512,tl.a,tl.a,[]),o._17(512,el.a,el.a,[]),o._17(512,cl.a,cl.a,[]),o._17(512,il.a,il.a,[]),o._17(512,rl.a,rl.a,[]),o._17(512,sl.a,sl.a,[]),o._17(512,_l.a,_l.a,[]),o._17(512,dl.a,dl.a,[]),o._17(512,pl.a,pl.a,[]),o._17(512,fl.a,fl.a,[]),o._17(512,gl.a,gl.a,[]),o._17(512,hl.a,hl.a,[]),o._17(512,ml.a,ml.a,[]),o._17(512,kl.a,kl.a,[]),o._17(512,bl.a,bl.a,[]),o._17(512,A.c,A.c,[]),o._17(512,wl.a,wl.a,[]),o._17(512,xl.a,xl.a,[]),o._17(512,Cl.a,Cl.a,[]),o._17(512,yl.a,yl.a,[]),o._17(512,Ol.a,Ol.a,[]),o._17(512,vl.a,vl.a,[]),o._17(512,Ml.a,Ml.a,[]),o._17(131584,G.a,G.a,[e.d,o.q,o.k]),o._17(512,Pl.a,Pl.a,[]),o._17(512,ql.a,ql.a,[]),o._17(512,zl.a,zl.a,[]),o._17(512,Fl.a,Fl.a,[]),o._17(512,jl.a,jl.a,[]),o._17(512,Ll.a,Ll.a,[]),o._17(512,Nl.a,Nl.a,[]),o._17(512,Dl.a,Dl.a,[]),o._17(512,Al.a,Al.a,[]),o._17(512,Gl.a,Gl.a,[]),o._17(512,Il.a,Il.a,[]),o._17(512,Tl.a,Tl.a,[]),o._17(512,a,a,[]),o._17(1024,$.j,function(){return[[{path:"",component:r}]]},[]),o._17(256,O.c,!1,[]),o._17(256,M.a,K.b,[]),o._17(256,$l.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),o._17(256,Ql.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})},fWL8:function(l,n){l.exports="\u8bed\u4e49\u5316\u7684\u77e2\u91cf\u56fe\u5f62\u3002\r\n\r\n## \u56fe\u6807\u7684\u547d\u540d\u89c4\u8303\r\n\r\n\u6211\u4eec\u4e3a\u6bcf\u4e2a\u56fe\u6807\u8d4b\u4e88\u4e86\u8bed\u4e49\u5316\u7684\u547d\u540d\uff0c\u547d\u540d\u89c4\u5219\u5982\u4e0b:\r\n\r\n- \u5b9e\u5fc3\u548c\u63cf\u7ebf\u56fe\u6807\u4fdd\u6301\u540c\u540d\uff0c\u7528 `-o` \u6765\u533a\u5206\uff0c\u6bd4\u5982 `question-circle`\uff08\u5b9e\u5fc3\uff09 \u548c `question-circle-o`\uff08\u63cf\u7ebf\uff09\uff1b\r\n- \u547d\u540d\u987a\u5e8f\uff1a`[\u56fe\u6807\u540d]-[\u5f62\u72b6?]-[\u63cf\u7ebf?]-[\u65b9\u5411?]`\u3002\r\n\r\n> `?` \u4e3a\u53ef\u9009\u3002\r\n\r\n\x3c!-- \u5b8c\u6574\u7684\u56fe\u6807\u8bbe\u8ba1\u89c4\u8303\u8bf7\u8bbf\u95ee [\u56fe\u6807\u89c4\u8303](/docs/spec/icon)\u3002 --\x3e\r\n\r\n## \u5982\u4f55\u4f7f\u7528\r\n\r\n\u4f7f\u7528 `i` \u6807\u7b7e\u58f0\u660e\u7ec4\u4ef6\uff0c\u6307\u5b9a\u56fe\u6807\u5bf9\u5e94\u7684 class \u5c5e\u6027\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b:\r\n\r\n```html\r\n<i class=\"anticon anticon-${type}\"></i>\r\n```\r\n\r\n## \u672c\u5730\u90e8\u7f72\r\n\r\n\u56fe\u6807\u9ed8\u8ba4\u6258\u7ba1\u5728 [iconfont.cn](http://iconfont.cn)\uff0c\u9ed8\u8ba4\u516c\u7f51\u53ef\u8bbf\u95ee\u3002\u5982\u9700\u672c\u5730\u90e8\u7f72\uff0c\u53ef\u4ee5\u4e0b\u8f7d<a href=\"./assets/download/fonts.zip\">iconfont</a>\u6587\u4ef6,\u89e3\u538b\u540e\u653e\u5728 `assets/fonts`\u6216\u5176\u4ed6\u516c\u7f51\u53ef\u8bbf\u95ee\u7684\u6587\u4ef6\u5939\u4e0b\r\n\r\n> `NgZorroAntdModule.forRoot()` \u65b9\u6cd5\u80fd\u591f\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u7684\u914d\u7f6e\u5bf9\u8c61\uff0c\u7528\u4e8e\u5f15\u5165\u5916\u90e8\u7684\u5b57\u4f53\u6587\u4ef6\uff0c\u7c7b\u578b\u4e3a `{ extraFontName: string, extraFontUrl: string }`\u3002\r\n\r\n\u4f8b\u5982\r\n```typescript\r\n@NgModule({\r\n  ...\r\n  imports: [\r\n    ...\r\n    NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' })\r\n    ...\r\n  ]\r\n  ...\r\n})\r\n```\r\n## \u56fe\u6807\u5217\u8868\r\n\r\n> \u70b9\u51fb\u56fe\u6807\u590d\u5236\u4ee3\u7801\u3002\r\n\r\n"}});