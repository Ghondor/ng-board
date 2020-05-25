function _defineProperties(t,l){for(var n=0;n<l.length;n++){var a=l[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,l,n){return l&&_defineProperties(t.prototype,l),n&&_defineProperties(t,n),t}function _classCallCheck(t,l){if(!(t instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6ZY7":function(t,l,n){"use strict";n.r(l);var a,i=n("8Y7J"),r=function t(){_classCallCheck(this,t)},e=n("pMnS"),u=n("6UMx"),o=n("iInd"),c=n("Q+lL"),s=n("SVse"),d=function(){function t(l,n){_classCallCheck(this,t),this.seo=l,this.db=n}return _createClass(t,[{key:"ngOnInit",value:function(){this.seo.generateTags({title:"Customer List",description:"A list filled with customers"}),this.customers=this.db.collection("customers").valueChanges({idField:"id"})}}]),t}(),m=n("cUpR"),b=((a=function(){function t(l,n,a){_classCallCheck(this,t),this.title=l,this.meta=n,this.router=a}return _createClass(t,[{key:"generateTags",value:function(t){var l=t.title,n=void 0===l?"":l,a=t.description,i=void 0===a?"":a,r=t.image,e=void 0===r?"":r;this.title.setTitle(n),this.meta.addTags([{name:"og:url",content:"https://firestarter.fireship.io".concat(this.router.url)},{name:"og:title",content:n},{name:"og:description",content:i},{name:"og:image",content:e},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@fireship_dev"}])}}]),t}()).ngInjectableDef=i.Ob({factory:function(){return new a(i.Pb(m.i),i.Pb(m.h),i.Pb(o.k))},token:a,providedIn:"root"}),a),p=n("Xr7G"),h=i.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{text-align:center;padding:24px}mat-nav-list[_ngcontent-%COMP%]{max-width:600px;background-color:#212121;padding:0;margin:0 auto}mat-list-item[_ngcontent-%COMP%]{transition:transform .3s ease;transition:transform .3s ease}mat-list-item[_ngcontent-%COMP%]:hover{transform:translateY(-3px)}"]],data:{}});function g(t){return i.Kb(0,[(t()(),i.sb(0,0,null,null,7,"mat-list-item",[["class","mat-list-item"],["role","listitem"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"click"]],(function(t,l,n){var a=!0;return"click"===l&&(a=!1!==i.Db(t,1).onClick()&&a),a}),u.c,u.a)),i.rb(1,16384,null,0,o.l,[o.k,o.a,[8,null],i.D,i.k],{routerLink:[0,"routerLink"]},null),i.rb(2,1228800,null,3,c.b,[i.k,i.h,[2,c.f],[2,c.a]],null,null),i.Gb(603979776,1,{_lines:1}),i.Gb(603979776,2,{_avatar:0}),i.Gb(603979776,3,{_icon:0}),(t()(),i.sb(6,0,null,2,1,"h3",[],null,null,null,null,null)),(t()(),i.Ib(7,null,["",""]))],(function(t,l){t(l,1,0,l.context.$implicit.id)}),(function(t,l){t(l,0,0,i.Db(l,2)._avatar||i.Db(l,2)._icon,i.Db(l,2)._avatar||i.Db(l,2)._icon),t(l,7,0,l.context.$implicit.name)}))}function f(t){return i.Kb(0,[(t()(),i.sb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),i.Ib(-1,null,["List Page"])),(t()(),i.sb(2,0,null,null,7,"mat-nav-list",[["class","mat-nav-list mat-list-base"],["role","navigation"]],null,null,null,u.d,u.b)),i.rb(3,704512,null,0,c.f,[],null,null),(t()(),i.sb(4,0,null,0,2,"h3",[["class","mat-subheader"],["mat-subheader",""]],null,null,null,null,null)),i.rb(5,16384,null,0,c.e,[],null,null),(t()(),i.Ib(-1,null,["Customers (Fake Data)"])),(t()(),i.ib(16777216,null,0,2,null,g)),i.rb(8,278528,null,0,s.j,[i.P,i.L,i.r],{ngForOf:[0,"ngForOf"]},null),i.Eb(131072,s.b,[i.h])],(function(t,l){var n=l.component;t(l,8,0,i.Jb(l,8,0,i.Db(l,9).transform(n.customers)))}),null)}var x=i.ob("app-list-page",d,(function(t){return i.Kb(0,[(t()(),i.sb(0,0,null,null,1,"app-list-page",[],null,null,null,f,h)),i.rb(1,114688,null,0,d,[b,p.a],null,null)],(function(t,l){t(l,1,0)}),null)}),{},{},[]),v=n("lzlj"),k=n("igqZ"),C=n("omvX"),_=n("vkgz"),w=function(){function t(l,n,a){_classCallCheck(this,t),this.route=l,this.db=n,this.seo=a}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.customerId=this.route.snapshot.paramMap.get("id"),this.customer=this.db.collection("customers").doc(this.customerId).valueChanges().pipe(Object(_.a)((function(l){return t.seo.generateTags({title:l.name,description:l.bio,image:l.image})})))}}]),t}(),I=i.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{text-align:center;padding:24px}mat-card[_ngcontent-%COMP%]{max-width:450px;background-color:#212121;margin:0 auto 10px}"]],data:{}});function y(t){return i.Kb(0,[(t()(),i.sb(0,0,null,null,15,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,v.d,v.a)),i.rb(1,49152,null,0,k.a,[[2,C.a]],null,null),(t()(),i.sb(2,0,null,0,7,"mat-card-header",[["class","mat-card-header"]],null,null,null,v.c,v.b)),i.rb(3,49152,null,0,k.c,[],null,null),(t()(),i.sb(4,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),i.rb(5,16384,null,0,k.g,[],null,null),(t()(),i.Ib(6,null,["",""])),(t()(),i.sb(7,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),i.rb(8,16384,null,0,k.f,[],null,null),(t()(),i.Ib(-1,null,["Customer Details"])),(t()(),i.sb(10,0,null,0,1,"img",[["class","mat-card-image"],["mat-card-image",""]],[[8,"src",4]],null,null,null,null)),i.rb(11,16384,null,0,k.d,[],null,null),(t()(),i.sb(12,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),i.rb(13,16384,null,0,k.b,[],null,null),(t()(),i.sb(14,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),i.Ib(15,null,[" "," "]))],null,(function(t,l){t(l,0,0,"NoopAnimations"===i.Db(l,1)._animationMode),t(l,6,0,l.context.ngIf.name),t(l,10,0,l.context.ngIf.image),t(l,15,0,l.context.ngIf.bio)}))}function P(t){return i.Kb(0,[(t()(),i.sb(0,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),i.Ib(-1,null,["Detail Page"])),(t()(),i.sb(2,0,null,null,11,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,v.d,v.a)),i.rb(3,49152,null,0,k.a,[[2,C.a]],null,null),(t()(),i.sb(4,0,null,0,1,"p",[],null,null,null,null,null)),(t()(),i.Ib(-1,null,["This content is server rendered with Angular Universal, NestJS, and Google Cloud Run."])),(t()(),i.Ib(-1,0,[" Paste URL: "])),(t()(),i.sb(7,0,null,0,1,"pre",[],null,null,null,null,null)),(t()(),i.Ib(8,null,["https://firestarter.fireship.io/customers/",""])),(t()(),i.sb(9,0,null,0,1,"a",[["color","accent"],["href","https://cards-dev.twitter.com/validator"],["mat-stroked-button",""],["target","blank"]],null,null,null,null,null)),(t()(),i.Ib(-1,null,["Twitter Card Validator"])),(t()(),i.sb(11,0,null,0,2,"button",[["mat-raised-button",""],["routerLink","/customers"]],null,[[null,"click"]],(function(t,l,n){var a=!0;return"click"===l&&(a=!1!==i.Db(t,12).onClick()&&a),a}),null,null)),i.rb(12,16384,null,0,o.l,[o.k,o.a,[8,null],i.D,i.k],{routerLink:[0,"routerLink"]},null),(t()(),i.Ib(-1,null,["BACK"])),(t()(),i.ib(16777216,null,null,2,null,y)),i.rb(15,16384,null,0,s.k,[i.P,i.L],{ngIf:[0,"ngIf"]},null),i.Eb(131072,s.b,[i.h])],(function(t,l){var n=l.component;t(l,12,0,"/customers"),t(l,15,0,i.Jb(l,15,0,i.Db(l,16).transform(n.customer)))}),(function(t,l){var n=l.component;t(l,2,0,"NoopAnimations"===i.Db(l,3)._animationMode),t(l,8,0,n.customerId)}))}var B=i.ob("app-detail-page",w,(function(t){return i.Kb(0,[(t()(),i.sb(0,0,null,null,1,"app-detail-page",[],null,null,null,P,I)),i.rb(1,114688,null,0,w,[o.a,p.a,b],null,null)],(function(t,l){t(l,1,0)}),null)}),{},{},[]),D=function t(){_classCallCheck(this,t)},j=n("IP0z"),L=n("Xd0L"),O=n("/HVE"),M=n("02hT");n.d(l,"CustomersModuleNgFactory",(function(){return z}));var z=i.pb(r,[],(function(t){return i.Ab([i.Bb(512,i.j,i.bb,[[8,[e.a,x,B]],[3,i.j],i.w]),i.Bb(4608,s.m,s.l,[i.t,[2,s.x]]),i.Bb(1073742336,s.c,s.c,[]),i.Bb(1073742336,o.n,o.n,[[2,o.s],[2,o.k]]),i.Bb(1073742336,D,D,[]),i.Bb(1073742336,j.a,j.a,[]),i.Bb(1073742336,L.j,L.j,[[2,L.c],[2,m.f]]),i.Bb(1073742336,L.k,L.k,[]),i.Bb(1073742336,O.b,O.b,[]),i.Bb(1073742336,L.s,L.s,[]),i.Bb(1073742336,L.q,L.q,[]),i.Bb(1073742336,M.a,M.a,[]),i.Bb(1073742336,c.c,c.c,[]),i.Bb(1073742336,k.e,k.e,[]),i.Bb(1073742336,r,r,[]),i.Bb(1024,o.i,(function(){return[[{path:"",component:d},{path:":id",component:w}]]}),[])])}))},lzlj:function(t,l,n){"use strict";n.d(l,"a",(function(){return i})),n.d(l,"d",(function(){return r})),n.d(l,"b",(function(){return e})),n.d(l,"c",(function(){return u}));var a=n("8Y7J"),i=(n("igqZ"),n("IP0z"),n("Xd0L"),n("cUpR"),n("omvX"),a.qb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}}));function r(t){return a.Kb(2,[a.Cb(null,0),a.Cb(null,1)],null,null)}var e=a.qb({encapsulation:2,styles:[],data:{}});function u(t){return a.Kb(2,[a.Cb(null,0),(t()(),a.sb(1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),a.Cb(null,1),a.Cb(null,2)],null,null)}}}]);