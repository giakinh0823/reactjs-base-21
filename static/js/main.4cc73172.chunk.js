(this["webpackJsonplearn-reactjs"]=this["webpackJsonplearn-reactjs"]||[]).push([[0],{180:function(e,t,n){},304:function(e,t,n){},305:function(e,t,n){},306:function(e,t,n){},308:function(e,t,n){},309:function(e,t,n){},310:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(13),i=n.n(c),o=n(40),s=n(22),l=(n(180),n(15)),u=n(359),j=n(372),d=n(362),b=n(361),p=n(378),h=n(366),m=n(364),f=n(365),O=n(163),g=n(379),x=n(355),v=n(363),y=n(112),w=n(161),S=n.n(w),N=n(160),C=n.n(N),k=n(42),P=n(8),_=n.n(P),A=n(19),R=n(46),L=n(69),T=n(33),E=n(154),z=n.n(E).a.create({baseURL:"https://api.ezfrontend.com/",headers:{"content-type":"application/json"}});z.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),z.interceptors.response.use((function(e){return e.data}),(function(e){var t=e.response,n=t.config,r=t.status,a=t.data;if(["/auth/local/register","/auth/local"].includes(n.url)&&400===r){var c=a.data||[],i=(c.length>0?c[0]:{}).messages||[],o=i.length>0?i[0]:{};throw new Error(o.message)}return Promise.reject(e)}));var I,F=z,D={register:function(e){return F.post("/auth/local/register",e)},login:function(e){return F.post("/auth/local",e)}},U={USER:"user",TOKEN:"access_token"},W=Object(R.createAsyncThunk)("users/register",function(){var e=Object(A.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.register(t);case 2:return n=e.sent,localStorage.setItem(U.TOKEN,n.jwt),localStorage.setItem(U.USER,JSON.stringify(n.user)),e.abrupt("return",n.user);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V=Object(R.createAsyncThunk)("users/login",function(){var e=Object(A.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.login(t);case 2:return n=e.sent,localStorage.setItem(U.TOKEN,n.jwt),localStorage.setItem(U.USER,JSON.stringify(n.user)),e.abrupt("return",n.user);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(R.createSlice)({name:"user",initialState:{current:JSON.parse(localStorage.getItem(U.USER))||{},settings:{}},reducers:{logout:function(e){e.current={},localStorage.removeItem(U.USER),localStorage.removeItem(U.TOKEN)}},extraReducers:(I={},Object(T.a)(I,W.fulfilled,(function(e,t){e.current=t.payload})),Object(T.a)(I,V.fulfilled,(function(e,t){e.current=t.payload})),I)}),B=q.actions,K=q.reducer,G=B.logout,M=K,J=n(70),H=n(360),Q=n(384),X=n(99),Y=n.n(X),Z=n(30),$=n(34),ee=n(14),te=n(373),ne=n(357),re=n(2);var ae=function(e){var t,n=e.form,r=e.name,a=e.label,c=e.disabled,i=n.formState.errors,o=i[r];return Object(re.jsxs)("div",{children:[Object(re.jsx)(Z.a,{control:n.control,name:r,render:function(e){var t=e.field;return Object(re.jsx)(te.a,Object(ee.a)(Object(ee.a)({},t),{},{fullWidth:!0,margin:"normal",variant:"outlined",label:a,disabled:c,error:!!o}))}}),Object(re.jsx)(ne.a,{error:!!o,children:null===(t=i[r])||void 0===t?void 0:t.message})]})},ce=n(356),ie=n(358),oe=n(383),se=n(382),le=n(158),ue=n.n(le),je=n(159),de=n.n(je);var be=function(e){var t,n=e.form,a=e.name,c=e.label,i=e.disabled,o=n.formState.errors,s=o[a],j=Object(r.useState)(!1),d=Object(l.a)(j,2),b=d[0],p=d[1],h=function(){p(!b)};return Object(re.jsx)("div",{children:Object(re.jsxs)(ce.a,{error:!!s,variant:"outlined",margin:"normal",fullWidth:!0,children:[Object(re.jsx)(oe.a,{htmlFor:a,children:c}),Object(re.jsx)(Z.a,{control:n.control,name:a,render:function(e){var t,n=e.field;return Object(re.jsx)(se.a,Object(ee.a)(Object(ee.a)({},n),{},{id:a,type:b?"text":"password",label:c,endAdornment:Object(re.jsx)(ie.a,{position:"end",children:Object(re.jsx)(u.a,{"aria-label":"toggle password visibility",onClick:h,edge:"end",children:b?Object(re.jsx)(ue.a,{}):Object(re.jsx)(de.a,{})})}),disabled:i,error:!!s,helperText:null===(t=o[a])||void 0===t?void 0:t.message,labelWidth:70}))}}),Object(re.jsx)(ne.a,{children:null===(t=o[a])||void 0===t?void 0:t.message})]})})},pe=Object(x.a)((function(e){return{root:{padding:e.spacing(2,2)},avatar:{margin:"0 auto 15px",backgroundColor:e.palette.secondary.main},title:{textAlign:"center"},submit:{margin:e.spacing(2,0,0,0)},linearProgress:{margin:e.spacing(0,0,4,0)}}}));var he=function(e){var t=pe(),n=e.onSubmit,r=$.a().shape({identifier:$.c().required("Please enter your email.").email("Please enter a valid email"),password:$.c().required("Please enter your password.")}),a=Object(Z.e)({defaultValues:{identifier:"",password:""},resolver:Object(J.a)(r)}),c=function(){var e=Object(A.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return e.next=3,n(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=a.formState.isSubmitting;return Object(re.jsxs)("div",{className:t.root,children:[i&&Object(re.jsx)(H.a,{className:t.linearProgress,color:"secondary"}),Object(re.jsx)(Q.a,{className:t.avatar,children:Object(re.jsx)(Y.a,{})}),Object(re.jsx)(y.a,{component:"h3",variant:"h5",className:t.title,children:"Sign In"}),Object(re.jsxs)("form",{onSubmit:a.handleSubmit(c),children:[Object(re.jsx)(ae,{name:"identifier",label:"Email",form:a}),Object(re.jsx)(be,{name:"password",label:"Password",form:a}),Object(re.jsx)(b.a,{disabled:i,type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:t.submit,children:"Sign in"})]})]})};var me=function(e){var t=Object(k.b)(),n=Object(L.b)().enqueueSnackbar,r=function(){var r=Object(A.a)(_.a.mark((function r(a){var c,i,o,s;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c=V(a),r.next=4,t(c);case 4:i=r.sent,o=Object(R.unwrapResult)(i),(s=e.closeDialog)&&s(),console.log(o),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(0),l=r.t0.message,n(l,{variant:"error"}),console.log("error: ",r.t0);case 15:case"end":return r.stop()}var l}),r,null,[[0,11]])})));return function(e){return r.apply(this,arguments)}}();return Object(re.jsx)("div",{children:Object(re.jsx)(he,{onSubmit:r})})},fe=Object(x.a)((function(e){return{root:{padding:e.spacing(2,2)},avatar:{margin:"0 auto 15px",backgroundColor:e.palette.secondary.main},title:{textAlign:"center"},submit:{margin:e.spacing(2,0,0,0)},linearProgress:{margin:e.spacing(0,0,4,0)}}}));var Oe=function(e){var t=fe(),n=e.onSubmit,r=$.a().shape({fullName:$.c().required("Please enter your fullname.").test("Should has at least two words","Please enter at least two words.",(function(e){return e.split(" ").length>=2})),email:$.c().required("Please enter your email.").email("Please enter a valid email"),password:$.c().required("Please enter your password.").min(6,"Please enter at least 6 characters."),retypepassword:$.c().required("Please enter your password.").oneOf([$.b("password")],"Password does not match.")}),a=Object(Z.e)({defaultValues:{fullName:"",email:"",password:"",retypepassword:""},resolver:Object(J.a)(r)}),c=function(){var e=Object(A.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return e.next=3,n(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=a.formState.isSubmitting;return Object(re.jsxs)("div",{className:t.root,children:[i&&Object(re.jsx)(H.a,{className:t.linearProgress,color:"secondary"}),Object(re.jsx)(Q.a,{className:t.avatar,children:Object(re.jsx)(Y.a,{})}),Object(re.jsx)(y.a,{component:"h3",variant:"h5",className:t.title,children:"Create an account"}),Object(re.jsxs)("form",{onSubmit:a.handleSubmit(c),children:[Object(re.jsx)(ae,{name:"fullName",label:"Full name",form:a}),Object(re.jsx)(ae,{name:"email",label:"Email",form:a}),Object(re.jsx)(be,{name:"password",label:"Password",form:a}),Object(re.jsx)(be,{name:"retypepassword",label:"Retype Password",form:a}),Object(re.jsx)(b.a,{disabled:i,type:"submit",variant:"contained",color:"primary",fullWidth:!0,className:t.submit,children:"Create account"})]})]})};var ge=function(e){var t=Object(k.b)(),n=Object(L.b)().enqueueSnackbar,r=function(e,t){n(e,{variant:t})},a=function(){var n=Object(A.a)(_.a.mark((function n(a){var c,i,o,s;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a.username=a.email,c=W(a),n.next=5,t(c);case 5:i=n.sent,o=Object(R.unwrapResult)(i),(s=e.closeDialog)&&s(),console.log(o),r("Register successfully!\ud83c\udf89","success"),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),r(n.t0.message,"error"),console.log("error: ",n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}();return Object(re.jsx)("div",{children:Object(re.jsx)(Oe,{onSubmit:a})})},xe=Object(x.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{textDecoration:"none",color:"white"}}})),ve="login",ye="register";function we(){var e=xe(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(ve),x=Object(l.a)(s,2),w=x[0],N=x[1],P=a.a.useState(null),_=Object(l.a)(P,2),A=_[0],R=_[1],L=Object(k.b)(),T=!!Object(k.c)((function(e){return e.user.current})).id,E=function(){R(null)},z=function(){i(!1)};return Object(re.jsxs)("div",{className:e.root,children:[Object(re.jsx)(d.a,{position:"static",children:Object(re.jsxs)(v.a,{children:[Object(re.jsx)(C.a,{className:e.menuButton}),Object(re.jsx)(y.a,{variant:"h6",className:e.title,children:Object(re.jsx)(o.b,{to:"/",className:e.link,children:Object(re.jsx)(b.a,{color:"inherit",children:"Gia Kinh"})})}),Object(re.jsx)(o.c,{to:"/products",className:e.link,children:Object(re.jsx)(b.a,{color:"inherit",children:"Products"})}),Object(re.jsx)(o.c,{to:"/todos",className:e.link,children:Object(re.jsx)(b.a,{color:"inherit",children:"Todos"})}),Object(re.jsx)(o.c,{to:"/Albums",className:e.link,children:Object(re.jsx)(b.a,{color:"inherit",children:"Albums"})}),!T&&Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(b.a,{color:"inherit",onClick:function(){N(ve),i(!0)},children:"Login"}),Object(re.jsx)(b.a,{color:"inherit",onClick:function(){N(ye),i(!0)},children:"Register"})]}),T&&Object(re.jsx)(re.Fragment,{children:Object(re.jsx)(u.a,{color:"inherit",onClick:function(e){R(e.currentTarget)},children:Object(re.jsx)(S.a,{})})})]})}),Object(re.jsxs)(O.a,{id:"simple-menu",anchorEl:A,open:Boolean(A),onClose:E,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},getContentAnchorEl:null,children:[Object(re.jsx)(g.a,{onClick:E,children:"My account"}),Object(re.jsx)(g.a,{onClick:function(){var e=G();L(e)},children:"Logout"})]}),Object(re.jsxs)(p.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,fullWidth:!0,open:c,onClose:z,"aria-labelledby":"form-dialog-title",children:[Object(re.jsx)(m.a,{children:Object(re.jsxs)(f.a,{children:[w===ye&&Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(ge,{closeDialog:z}),Object(re.jsx)(j.a,{textAlign:"center",children:Object(re.jsx)(b.a,{color:"primary",onClick:function(){return N(ve)},children:"Already have an account. Login here"})})]}),w===ve&&Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(me,{closeDialog:z}),Object(re.jsx)(j.a,{textAlign:"center",children:Object(re.jsx)(b.a,{color:"primary",onClick:function(){return N(ye)},children:"Dont have an account. Register here"})})]})]})}),Object(re.jsx)(h.a,{children:Object(re.jsx)(b.a,{onClick:z,color:"primary",children:"Cancel"})})]})]})}var Se=function(e){return Object(re.jsx)("div",{children:"Not Found"})};n(304);function Ne(e){var t=e.album;return Object(re.jsxs)("div",{className:"album",children:[Object(re.jsx)("div",{className:"album__thumbnail",children:Object(re.jsx)("img",{src:t.thumbnaiUrl,alt:t.name})}),Object(re.jsx)("p",{className:"album__name",children:t.name})]})}Ne.defaultProps={album:{}};var Ce=Ne;n(305);function ke(e){var t=e.albumList;return Object(re.jsx)("div",{children:Object(re.jsx)("ul",{className:"album-list",children:t.map((function(e){return Object(re.jsx)("li",{children:Object(re.jsx)(Ce,{album:e})},e.id)}))})})}ke.defaultProps={albumList:[]};var Pe=ke,_e=Object(x.a)((function(e){return{root:{padding:e.spacing(5,0),textAlign:"center"},header:{fontWeight:"100",fontSize:"70px",color:"#3f50b5"},button:{margin:e.spacing(4,2)},label:{fontSize:"30px",color:"#f44336"}}}));var Ae=function(e){var t=_e();return Object(re.jsxs)("div",{className:t.root,children:[Object(re.jsx)("h1",{className:t.header,children:"Album"}),Object(re.jsx)(Pe,{albumList:[{id:1,name:"Ch\u1ec9 c\xf3 th\u1ec3 l\xe0 BLACKPINK",thumbnaiUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/8/b/b/e8bb97699b4a2c93879f34bd59feb6eb.jpg"},{id:2,name:"Ch\u1ec9 c\xf3 th\u1ec3 l\xe0 IKON",thumbnaiUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/3/9/1/6391621fbddc5826d7e9a5089644f60d.jpg"},{id:3,name:"Ch\u1ec9 c\xf3 th\u1ec3 l\xe0 WINNER",thumbnaiUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/f/3/0/0f300c6fdf309e61379da33f2138e67c.jpg"},{id:4,name:"Ch\u1ec9 c\xf3 th\u1ec3 l\xe0 TREASURE",thumbnaiUrl:"https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/7/9/5/97952f56e8726bc447de57963306cbd9.jpg"}]})]})},Re=Object(R.createSlice)({name:"counter",initialState:0,reducers:{increase:function(e,t){return e+1},decrease:function(e,t){return e-1}}}),Le=Re.actions,Te=Re.reducer,Ee=Le.increase,ze=Le.decrease,Ie=Te,Fe=(n(306),Object(x.a)((function(e){return{root:{padding:e.spacing(5,0),textAlign:"center"},header:{fontWeight:"200",fontSize:"100px",color:"#3f50b5"},button:{margin:e.spacing(4,2)},label:{fontSize:"30px",color:"#f44336"}}})));var De=function(e){var t=Fe(),n=Object(k.c)((function(e){return e.counter})),r=Object(k.b)();return Object(re.jsxs)("div",{class:t.root,children:[Object(re.jsx)("h1",{class:t.header,children:"Counter"}),Object(re.jsxs)("p",{className:t.label,children:["Counter ",n]}),Object(re.jsx)(b.a,{className:t.button,onClick:function(){return function(){var e=Ee();r(e)}()},color:"primary",variant:"contained",children:"increase"}),Object(re.jsx)(b.a,{className:t.button,onClick:function(){return function(){var e=ze();r(e)}()},color:"primary",variant:"contained",children:"decrease"})]})},Ue=n(371),We=n(367),Ve=n(312),qe=n(52),Be=n.n(qe),Ke={getAll:function(e){return Object(A.a)(_.a.mark((function t(){var n,r,a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Object(ee.a)({},e),!(null===e||void 0===e?void 0:e._page)){t.next=11;break}return n._start=!e._page||e._page<=1?0:(e._page-1)*(e._limit||50),delete n._page,t.next=6,F.get("products",{params:n});case 6:return r=t.sent,t.next=9,F.get("products/count",{params:n});case 9:return a=t.sent,t.abrupt("return",{data:r,pagination:{page:e._page,limit:e._limit,total:a}});case 11:return t.abrupt("return",{});case 12:case"end":return t.stop()}}),t)})))()},get:function(e){var t="/products/".concat(e);return F.get(t)},add:function(e){return F.post("/products",e)},update:function(e){var t="/products/".concat(e.id);return F.patch(t,e)},remove:function(e){var t="/products/".concat(e);return F.delete(t)}};function Ge(e){var t,n=e.product,r=n.thumbnail?"".concat("https://api.ezfrontend.com").concat(null===(t=n.thumbnail)||void 0===t?void 0:t.url):"https://api.ezfrontend.com/uploads/9ff7d29c2ebad4fd802685eb770d9452_417240087a.jpg";return Object(re.jsx)("div",{children:Object(re.jsxs)(j.a,{padding:1,children:[Object(re.jsx)(j.a,{padding:.1,children:Object(re.jsx)("img",{src:r,alt:n.name,width:"100%"})}),Object(re.jsx)(y.a,{variant:"body2",children:n.name}),Object(re.jsxs)(y.a,{variant:"body2",children:[Object(re.jsx)(j.a,{component:"span",fontSize:"16px",fontWeight:"bold",mr:1,children:new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(n.salePrice)}),n.promotionPercent>0?"- ".concat(n.promotionPercent,"%"):""]})]})})}Ge.defaultProps={product:{}};var Me=Ge;function Je(e){var t=e.data;return Object(re.jsx)("div",{children:Object(re.jsx)(j.a,{children:Object(re.jsx)(We.a,{container:!0,children:t.map((function(e,t){return Object(re.jsx)(We.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(re.jsx)(Me,{product:e})},e.id)}))})})})}Je.defaultProps={data:[]};var He=Je,Qe=n(368);function Xe(e){var t=e.length;return Object(re.jsx)("div",{children:Object(re.jsx)(j.a,{children:Object(re.jsx)(We.a,{container:!0,children:Array.from(new Array(t)).map((function(e,t){return Object(re.jsx)(We.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(re.jsxs)(j.a,{padding:1,children:[Object(re.jsx)(Qe.a,{variant:"rect",width:"100%",height:130}),Object(re.jsx)(Qe.a,{}),Object(re.jsx)(Qe.a,{width:"60%"})]})},t)}))})})})}Xe.defaultProps={length:6};var Ye=Xe,Ze=n(375),$e=n(374),et=n(369);var tt=function(e){var t=e.currentSort,n=e.onChange;return Object(re.jsx)("div",{children:Object(re.jsxs)($e.a,{indicatorColor:"primary",textColor:"primary",value:t,onChange:function(e,t){n&&n(t)},"aria-label":"disabled tabs example",children:[Object(re.jsx)(et.a,{label:"Gi\xe1 th\u1ea5p t\u1edbi cao",value:"salePrice:ASC"}),Object(re.jsx)(et.a,{label:"Gi\xe1o cao t\u1edbi th\u1ea5p",value:"salePrice:DESC"})]})})},nt=Object(x.a)((function(e){return{root:{padding:e.spacing(2)},header:{textAlign:"center",fontSize:"18px",color:e.palette.primary.main,fontWeight:"500"},menu:{padding:0,margin:0,listStyle:"none",transition:"all .3s","& > li":{marginTop:e.spacing(1),"&:hover":{color:e.palette.primary.main,cursor:"pointer"}}}}}));function rt(e){var t=e.categoryList,n=e.onChange,r=nt();return Object(re.jsx)("div",{children:Object(re.jsxs)(j.a,{className:r.root,children:[Object(re.jsx)(y.a,{variant:"subtitle1",className:r.header,children:"Danh m\u1ee5c s\u1ea3n ph\u1ea9m"}),Object(re.jsx)("ul",{className:r.menu,children:t.map((function(e){return Object(re.jsx)("li",{onClick:function(){return function(e){n&&n(e.id)}(e)},children:Object(re.jsx)(b.a,{color:"primary",fullWidth:!0,children:Object(re.jsxs)(y.a,{variant:"body2",children:[" ",e.name]})})},e.id)}))})]})})}rt.defaultProps={categoryList:[]};var at=rt,ct=Object(x.a)((function(e){return{root:{padding:e.spacing(2),borderTop:"1px solid ".concat(e.palette.grey[300])},range:{margin:e.spacing(1,0),display:"flex",alignItems:"center",flexFlow:"row nowrap","& > span":{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}}}));var it=function(e){var t=ct(),n=e.onChange,a=Object(r.useState)({salePrice_gte:0,salePrice_lte:0}),c=Object(l.a)(a,2),i=c[0],o=c[1],s=function(e){var t=e.target,n=t.name,r=t.value;o((function(e){return Object(ee.a)(Object(ee.a)({},e),{},Object(T.a)({},n,r))}))};return Object(re.jsx)("div",{children:Object(re.jsxs)(j.a,{className:t.root,children:[Object(re.jsx)(y.a,{variant:"subtitle1",children:"GI\xc1"}),Object(re.jsxs)(j.a,{className:t.range,children:[Object(re.jsx)(te.a,{name:"salePrice_gte",label:"Min",variant:"outlined",value:i.salePrice_gte,onChange:s}),Object(re.jsx)("span",{children:"-"}),Object(re.jsx)(te.a,{name:"salePrice_lte",label:"Max",variant:"outlined",value:i.salePrice_lte,onChange:s})]}),Object(re.jsx)(b.a,{variant:"outlined",color:"primary",onClick:function(){n&&(0===i.salePrice_gte&&0===i.salePrice_lte||n(i)),o({salePrice_gte:0,salePrice_lte:0})},children:"\xc1p d\u1ee5ng"})]})})},ot=n(370),st=n(377),lt=Object(x.a)((function(e){return{root:{padding:e.spacing(2),borderTop:"1px solid ".concat(e.palette.grey[300])},list:{listStyle:"none",padding:0,margin:0,"& > li":{display:"flex",alignItems:"center"}}}}));function ut(e){var t=lt(),n=e.filters,r=e.onChange,a=function(e){var t=e.target,n=t.name,a=t.checked;r&&r(Object(T.a)({},n,a))};return Object(re.jsx)("div",{children:Object(re.jsxs)(j.a,{className:t.root,children:[Object(re.jsx)(y.a,{variant:"subtitle1",children:"D\u1ecaCH V\u1ee4"}),Object(re.jsx)("ul",{className:t.list,children:[{value:"isPromotion",label:"V\u1eadn chuy\u1ec3n mi\u1ec5n ph\xed"},{value:"isFreeShip",label:"Mi\u1ebfn ph\xed ship"}].map((function(e){return Object(re.jsx)("li",{children:Object(re.jsx)(ot.a,{control:Object(re.jsx)(st.a,{onChange:a,checked:Boolean(n[e.value]),name:e.value,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),label:e.label})},e.value)}))})]})})}ut.defaultProps={filters:{}};var jt=ut;function dt(e){var t=e.categoryList,n=e.filters,r=e.onChange,a=function(e){r&&r(e)};return Object(re.jsxs)("div",{children:[Object(re.jsx)(at,{onChange:function(e){var t=Object(ee.a)(Object(ee.a)({},n),{},{"category.id":e});r&&(console.log(t),r(t))},categoryList:t}),Object(re.jsx)(it,{onChange:a}),Object(re.jsx)(jt,{filters:n,onChange:a})]})}dt.defaultProps={filters:{},categoryList:[]};var bt=dt,pt=n(385),ht=Object(x.a)((function(e){return{root:{display:"flex",flexFlow:"row wrap",alignItems:"center",margin:e.spacing(2,0),listStyle:"none",padding:0,"& > li":{margin:0,padding:e.spacing(1)}}}}));ft.defaultProps={filters:{},categoryList:[]};var mt=[{id:1,getLabel:function(e){return"Giao h\xe0ng mi\u1ec5n ph\xed"},isActive:function(e){return e.isFreeShip},isVisible:function(){return!0},isRemovable:!1,onRemove:function(){},onToggle:function(e){var t=Object(ee.a)({},e);return t.isFreeShip?delete t.isFreeShip:t.isFreeShip=!0,t}},{id:2,getLabel:function(e){return"C\xf3 khuy\u1ebfn m\xe3i"},isActive:function(){return!0},isVisible:function(e){return e.isPromotion},isRemovable:!0,onRemove:function(e){var t=Object(ee.a)({},e);return delete t.isPromotion,t},onToggle:function(){}},{id:3,getLabel:function(e){return"T\u1eeb ".concat(null===e||void 0===e?void 0:e.salePrice_gte," \u0111\u1ebfn ").concat(null===e||void 0===e?void 0:e.salePrice_lte)},isActive:function(){return!0},isVisible:function(e){return!(!Object.keys(e).includes("salePrice_gte")||!Object.keys(e).includes("salePrice_lte")||0===e.salePrice_gte&&0===e.salePrice_lte)},isRemovable:!0,onRemove:function(e){var t=Object(ee.a)({},e);return delete t.salePrice_lte,delete t.salePrice_gte,t},onToggle:function(){}},{id:4,getLabel:function(e,t){var n,r=t.filter((function(t){return t.id===e["category.id"]}));return console.log(t),(null===(n=r[0])||void 0===n?void 0:n.name)||"Danh m\u1ee5c"},isActive:function(){return!0},isVisible:function(e){return Object.keys(e).includes("category.id")},isRemovable:!0,onRemove:function(e){var t=Object(ee.a)({},e);return delete t["category.id"],t},onToggle:function(e){return!0}}];function ft(e){var t=ht(),n=e.categoryList,a=e.filters,c=e.onChange,i=Object(r.useMemo)((function(){return mt.filter((function(e){return e.isVisible(a)}))}),[a]);return Object(re.jsx)("div",{children:Object(re.jsx)(j.a,{component:"ul",className:t.root,children:i.map((function(e,t){return Object(re.jsx)("li",{children:Object(re.jsx)(pt.a,{label:4!==e.id?e.getLabel(a):e.getLabel(a,n),color:e.isActive(a)?"primary":"default",clickable:!e.isRemovable,onClick:e.isRemovable?null:function(){if(c){var t=e.onToggle(a);c(t)}},onDelete:e.isRemovable?function(){if(c){var t=e.onRemove(a);c(t)}}:null})})}))})})}var Ot=ft,gt={getAll:function(e){return F.get("/categories",{params:e})},get:function(e){var t="/categories/".concat(e);return F.get(t)},add:function(e){return F.post("/categories",e)},update:function(e){var t="/categories/".concat(e.id);return F.patch(t,e)},remove:function(e){var t="/categories/".concat(e);return F.delete(t)}},xt=Object(x.a)((function(e){return{root:{},left:{width:"250px"},right:{flex:"1 1 0"},pagination:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",marginTop:"20px",paddingBottom:"20px"}}}));var vt=function(e){var t=xt(),n=Object(s.g)(),a=Object(s.h)(),c=Be.a.parse(a.search),i=Object(r.useState)([]),o=Object(l.a)(i,2),u=o[0],d=o[1],b=Object(r.useState)([]),p=Object(l.a)(b,2),h=p[0],m=p[1],f=Object(r.useState)(!0),O=Object(l.a)(f,2),g=O[0],x=O[1],v=Object(r.useState)({limit:12,total:10,page:1}),y=Object(l.a)(v,2),w=y[0],S=y[1],N=Object(r.useState)((function(){return Object(ee.a)(Object(ee.a)({},c),{},{_page:Number.parseInt(c._page)||1,_limit:Number.parseInt(c._limit)||12,_sort:c._sort||"salePrice:ASC"})})),C=Object(l.a)(N,2),k=C[0],P=C[1];return Object(r.useEffect)((function(){Object(A.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,gt.getAll();case 3:t=e.sent,d(t.map((function(e){return{id:e.id,name:e.name}}))),console(u),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Fail to featch");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[u]),Object(r.useEffect)((function(){Object(A.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ke.getAll(k);case 3:t=e.sent,console.log(t),m(t.data),S(t.pagination),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:x(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[k]),Object(r.useEffect)((function(){Object(A.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ke.getAll(k);case 3:t=e.sent,console.log(t),m(t.data),S(t.pagination),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:x(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[k]),Object(r.useEffect)((function(){n.push({pathname:n.location.pathname,search:Be.a.stringify(k)})}),[n,k]),Object(re.jsx)("div",{children:Object(re.jsx)(j.a,{children:Object(re.jsx)(Ue.a,{children:Object(re.jsxs)(We.a,{container:!0,spacing:1,children:[Object(re.jsx)(We.a,{className:t.left,item:!0,children:Object(re.jsx)(Ve.a,{elevation:0,children:Object(re.jsx)(bt,{filters:k,onChange:function(e){P((function(t){return Object(ee.a)(Object(ee.a)({},t),e)}))},categoryList:u})})}),Object(re.jsx)(We.a,{className:t.right,item:!0,children:Object(re.jsxs)(Ve.a,{elevation:0,children:[Object(re.jsx)(tt,{currentSort:k._sort,onChange:function(e){P((function(t){return Object(ee.a)(Object(ee.a)({},t),{},{_sort:e})}))}}),Object(re.jsx)(Ot,{filters:k,onChange:function(e){P(e)},categoryList:u}),g?Object(re.jsx)(Ye,{length:12}):Object(re.jsx)(He,{data:h}),Object(re.jsx)(j.a,{className:t.pagination,children:Object(re.jsx)(Ze.a,{count:Math.ceil(w.total/w.limit),color:"primary",page:w.page,onChange:function(e,t){return function(e,t){P((function(e){return Object(ee.a)(Object(ee.a)({},e),{},{_page:t})}))}(0,t)}})})]})})]})})})})};var yt=function(e){var t=Object(s.i)();return Object(re.jsx)("div",{children:Object(re.jsx)(j.a,{pt:4,children:Object(re.jsx)(s.d,{children:Object(re.jsx)(s.b,{path:t.url,component:vt,exact:!0})})})})};var wt=function(e){return Object(re.jsx)("div",{children:"To do detail"})},St=n(16),Nt=Object(x.a)((function(e){return{root:{width:"40%",margin:"0 auto"}}}));var Ct=function(e){var t=Nt(),n=e.onSubmit,r=$.a().shape({title:$.c().required("Please enter title").min(3,"Title is too short")}),a=Object(Z.e)({defaultValues:{title:""},resolver:Object(J.a)(r)});return Object(re.jsx)("div",{className:t.root,children:Object(re.jsx)("form",{onSubmit:a.handleSubmit((function(e){n&&n(e),a.reset()})),children:Object(re.jsx)(ae,{name:"title",label:"Todo",form:a})})})},kt=n(162),Pt=n.n(kt),_t=(n(308),Object(x.a)((function(e){return{root:{}}})));function At(e){var t=_t(),n=e.todoList,r=e.onTodoClick;return Object(re.jsx)("div",{className:t.root,children:Object(re.jsx)("ul",{className:"todo-list",children:n.map((function(e,t){return Object(re.jsx)("li",{className:Pt()({"todo-item":!0,completed:"completed"===e.status}),onClick:function(){return function(e,t){r&&r(e,t)}(e,e.id)},children:e.title},e.id)}))})})}At.defaultProps={todosList:[],onTodoClick:null};var Rt=At,Lt=Object(x.a)((function(e){return{button:{margin:e.spacing(4,2)}}}));var Tt=function(e){var t=Lt(),n=Object(s.h)(),a=Object(s.g)(),c=Object(s.i)(),i=Object(r.useState)([{id:1,title:"Eat",status:"new"},{id:2,title:"Sleep",status:"completed"},{id:3,title:"Code",status:"new"},{id:4,title:"Play Game",status:"completed"}]),o=Object(l.a)(i,2),u=o[0],j=o[1],d=Object(r.useState)((function(){return Be.a.parse(n.search).status||"all"})),p=Object(l.a)(d,2),h=p[0],m=p[1];Object(r.useEffect)((function(){var e=Be.a.parse(n.search);m(e.status||"all")}),[n.search]);var f=Object(r.useMemo)((function(){return u.filter((function(e){return"all"===h||h===e.status}))}),[u,h]);return Object(re.jsxs)("div",{children:[Object(re.jsx)(Ct,{onSubmit:function(e){console.log(e);var t={id:u.length+1,title:e.title,status:"new"},n=[].concat(Object(St.a)(u),[t]);j(n)}}),Object(re.jsx)(Rt,{todoList:f,onTodoClick:function(e,t){for(var n=Object(St.a)(u),r=null,a=0,c=0;c<n.length;c++)if(n[c].id===t){r=n[c],a=c;break}var i=Object(ee.a)(Object(ee.a)({},n[a]),{},{status:"new"===r.status?"completed":"new"});n[a]=i,j(n)}}),Object(re.jsx)(b.a,{className:t.button,color:"primary",variant:"contained",onClick:function(){a.push({pathname:c.path,search:Be.a.stringify({status:"all"})})},children:"Show All"}),Object(re.jsx)(b.a,{className:t.button,color:"primary",variant:"contained",onClick:function(){a.push({pathname:c.path,search:Be.a.stringify({status:"completed"})})},children:"Show Completed"}),Object(re.jsx)(b.a,{className:t.button,color:"primary",variant:"contained",onClick:function(){a.push({pathname:c.path,search:Be.a.stringify({status:"new"})})},children:"Show New"})]})},Et=Object(x.a)((function(e){return{root:{textAlign:"center",padding:"0 0 150px 0"},header:{fontWeight:"200",fontSize:"100px",color:"#3f50b5"}}}));var zt=function(e){var t=Et(),n=Object(s.i)();return Object(re.jsxs)("div",{className:t.root,children:[Object(re.jsx)("h1",{className:t.header,children:"Todo share UI"}),Object(re.jsxs)(s.d,{children:[Object(re.jsx)(s.b,{path:n.path,component:Tt,exact:!0}),Object(re.jsx)(s.b,{path:"".concat(n.path,"/:todoId"),component:wt}),Object(re.jsx)(s.b,{component:Se})]})]})};var It=function(){return Object(re.jsxs)("div",{className:"app",children:[Object(re.jsx)(we,{}),Object(re.jsxs)(s.d,{children:[Object(re.jsx)(s.a,{from:"home",to:"/",exact:!0}),Object(re.jsx)(s.b,{path:"/",component:De,exact:!0}),Object(re.jsx)(s.b,{path:"/todos",component:zt}),Object(re.jsx)(s.b,{path:"/albums",component:Ae}),Object(re.jsx)(s.b,{path:"/products",component:yt}),Object(re.jsx)(s.b,{component:Se})]})]})},Ft=(n(309),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,387)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))}),Dt=(0,n(46).configureStore)({reducer:{counter:Ie,user:M}});i.a.render(Object(re.jsx)(a.a.StrictMode,{children:Object(re.jsx)(k.a,{store:Dt,children:Object(re.jsx)(o.a,{children:Object(re.jsx)(L.a,{anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(re.jsx)(It,{})})})})}),document.getElementById("root")),Ft()}},[[310,1,2]]]);
//# sourceMappingURL=main.4cc73172.chunk.js.map