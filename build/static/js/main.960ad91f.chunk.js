(this.webpackJsonpadminreact=this.webpackJsonpadminreact||[]).push([[0],{49:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(24),s=a.n(n),r=(a(49),a(9)),o=a(8),i=a(6),l=a(5),j=a.n(l),u=a(13),b=a(3),d=a(11),h=a.n(d),p=(a(80),a(27)),O=a.n(p),m="LOGIN_SUCCESS",x="LOGIN_FAIL",f="LOAD_USER_SUCCESS",v="LOAD_USER_FAILED",g="AUTHENTICATION_SUCCESS",k="AUTHENTICATION_FAIL",y="LOGOUT_SUCCESS",S="SIGN_UP_OK",N="SIGN_UP_FAILED",A="EMPLOYEE_SUCCESS",C="EMPLOYEE_LIST_FAILED",E="EMPLOYEE _REGISTER_OK",_="EMPLOYEE_REGISTER_FAILED",I=a(0),w=function(){return function(){var e=Object(u.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("token")){e.next=14;break}return a={headers:{"Content-Type":"application/json",Authorization:"token ".concat(localStorage.getItem("token")),Accept:"application/json","X-CSRFToken":T}},e.prev=2,e.next=5,h.a.get("https://jabtracanand.herokuapp.com/accounts/user/",a);case 5:c=e.sent,t({type:f,payload:c.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:v});case 12:e.next=15;break;case 14:t({type:v});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(u.a)(j.a.mark((function t(a){var c,n,s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={headers:{"Content-Type":"application/json","X-CSRFToken":T}},n=JSON.stringify({email:e}),t.prev=2,t.next=5,h.a.post("https://jabtracanand.herokuapp.com/accounts/login/",n,c);case 5:s=t.sent,a({type:m,payload:s.data}),a(w()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),a({type:x});case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},T=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var a=document.cookie.split(";"),c=0;c<a.length;c++){var n=O.a.trim(a[c]);if(n.substring(0,e.length+1)===e+"="){t=decodeURIComponent(n.substring(e.length+1));break}}return t}("csrftoken");a(74);var L=a(19),F=a(41),R=a(42),U=a(2),G={token:localStorage.getItem("token"),isAuthenticated:null,user:null};var B=Object(L.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case m:return localStorage.setItem("token",c.data.token),Object(U.a)(Object(U.a)({},e),{},{isAuthenticated:!0,token:c.data.token,user:c.data.user_id});case f:case S:return Object(U.a)(Object(U.a)({},e),{},{user:c.data.user_id});case g:return Object(U.a)(Object(U.a)({},e),{},{isAuthenticated:!0,user:c.data.user_id});case k:return Object(U.a)(Object(U.a)({},e),{},{isAuthenticated:!1});case A:case E:return Object(U.a)(Object(U.a)({},e),{},{data:c.data});case C:case N:case v:case _:return Object(U.a)(Object(U.a)({},e),{},{user:null});case x:case y:return localStorage.removeItem("token"),Object(U.a)(Object(U.a)({},e),{},{token:null,isAuthenticated:!1,user:null});default:return e}}}),P=[R.a],z=Object(L.createStore)(B,{},Object(F.composeWithDevTools)(L.applyMiddleware.apply(void 0,P)));var J=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:D})((function(e,t){var a,n=Object(c.useState)({}),s=Object(b.a)(n,2),r=(s[0],s[1]),o=Object(c.useState)(0),i=Object(b.a)(o,2),l=i[0],d=i[1],p=Object(c.useState)(0),O=Object(b.a)(p,2),m=(O[0],O[1]),x=Object(c.useState)(0),f=Object(b.a)(x,2),v=f[0],g=f[1],k=Object(c.useState)(0),y=Object(b.a)(k,2),S=y[0],N=y[1],A=Object(c.useState)(0),C=Object(b.a)(A,2),E=C[0],_=C[1],w=Object(c.useState)(""),D=Object(b.a)(w,2);D[0],D[1],e.mystate,localStorage.getItem("token")&&(a={headers:{"Content-Type":"application/json",Authorization:"token ".concat(localStorage.getItem("token")),Accept:"application/json"}}),Object(c.useEffect)((function(){T()}),[]);var T=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://jabtracanand.herokuapp.com/accounts/count/",a);case 2:t=e.sent,c=t.data,console.log(c.data),r(c.data),m(c.data.SD),d(c.data.FD),g(c.data.employees),N(c.data.NBD),_(c.data.BD);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("div",{children:Object(I.jsxs)("div",{class:"row",children:[Object(I.jsx)("div",{class:"column",children:Object(I.jsxs)("div",{class:"card",children:[Object(I.jsx)("h3",{children:v}),Object(I.jsx)("p",{children:"Employees"})]})}),Object(I.jsx)("div",{class:"column",children:Object(I.jsxs)("div",{class:"card",children:[Object(I.jsx)("h3",{children:l}),Object(I.jsx)("p",{children:"first dose"})]})}),Object(I.jsx)("div",{class:"column",children:Object(I.jsxs)("div",{class:"card",children:[Object(I.jsx)("h3",{children:E}),Object(I.jsx)("p",{children:"both doses"})]})}),Object(I.jsx)("div",{class:"column",children:Object(I.jsxs)("div",{class:"card",children:[Object(I.jsx)("h3",{children:S}),Object(I.jsx)("p",{children:"not vaccinated yet"})]})})]})})})),q=a(7),M=a(43);a(75);var X=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:D})((function(e){var t=e.login,a=e.isAuthenticated,n=Object(c.useState)({email:"",password:""}),s=Object(b.a)(n,2),r=s[0],l=s[1],j=Object(c.useState)(!1),u=Object(b.a)(j,2),d=u[0],h=u[1],p=r.email,O=r.password;return a?Object(I.jsx)(i.a,{to:"/home"}):Object(I.jsx)("div",{class:"container",children:Object(I.jsx)("div",{class:"row",children:Object(I.jsx)("div",{class:"col-sm-9 col-md-7 col-lg-5 mx-auto",children:Object(I.jsx)("div",{class:"card card-signin my-5",children:Object(I.jsxs)("div",{class:"card-body",children:[Object(I.jsx)("h5",{class:"card-title text-center",children:"Sign In"}),Object(I.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(p,O);try{t(p,O),h(!0)}catch(a){}}(e)},class:"form-signin",children:[Object(I.jsxs)("div",{class:"form-label-group rounded",children:[Object(I.jsx)("input",{type:"email",id:"inputEmail",className:"form-control",placeholder:"Email",name:"email",value:p,onChange:function(e){return function(e){return l(Object(U.a)(Object(U.a)({},r),{},Object(q.a)({},e.target.name,e.target.value)))}(e)},required:!0}),Object(I.jsx)("label",{for:"inputEmail",children:"Email address"})]}),1==d&&Object(I.jsx)("p",{children:"oops! can't login with given credentials"}),Object(I.jsx)("button",{class:"btn btn-success ",type:"submit",children:"Sign in"}),Object(I.jsxs)("p",{className:"mt-3",children:["Register your domain  ",Object(I.jsx)(o.b,{to:"/sign",children:"here"})]}),Object(I.jsx)("hr",{class:"my-4"}),Object(I.jsxs)(M.GoogleLoginButton,{class:"btn btn-lg btn-google btn-block text-uppercase",type:"submit",children:[Object(I.jsx)("i",{class:"fab fa-google mr-2"})," Sign in with Google"]})]})]})})})})})})),Y=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,a){return function(){var c=Object(u.a)(j.a.mark((function c(n){var s,r,o;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s={headers:{"Content-Type":"application/json"}},r=JSON.stringify({email:e,domain:t,password:a}),c.prev=2,c.next=5,h.a.post("https://jabtracanand.herokuapp.com/accounts/register/",r,s);case 5:o=c.sent,n({type:S,payload:o.data}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),n({type:N});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.signup,a=e.isAuthenticated,n=Object(c.useState)(!1),s=Object(b.a)(n,2),r=s[0],l=s[1],j=Object(c.useState)({email:"",domain:"",password:""}),u=Object(b.a)(j,2),d=u[0],h=u[1],p=d.email,O=d.domain,m=d.password,x=function(e){return h(Object(U.a)(Object(U.a)({},d),{},Object(q.a)({},e.target.name,e.target.value)))};return a||r?Object(I.jsx)(i.a,{to:"/"}):Object(I.jsxs)("div",{className:"container mt-5",children:[Object(I.jsx)("h1",{children:"Register your domain"}),Object(I.jsx)("p",{children:"Create your Account"}),Object(I.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(p,O,m),l(!0)}(e)},children:[Object(I.jsx)("div",{className:"form-group",children:Object(I.jsx)("input",{className:"form-control",type:"email",placeholder:"Email*",name:"email",value:p,onChange:function(e){return x(e)},required:!0})}),Object(I.jsx)("br",{}),Object(I.jsx)("div",{className:"form-group ",children:Object(I.jsx)("input",{className:"form-control",type:"text",placeholder:"domain name*",name:"domain",value:O,onChange:function(e){return x(e)},required:!0})}),Object(I.jsx)("br",{}),Object(I.jsx)("div",{className:"form-group",children:Object(I.jsx)("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",value:m,onChange:function(e){return x(e)},minLength:"6",required:!0})}),Object(I.jsx)("br",{}),Object(I.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Register"})]}),Object(I.jsxs)("p",{className:"mt-3",children:["Already have an account? ",Object(I.jsx)(o.b,{to:"/",children:"Sign In"})]})]})}));var H=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){if(localStorage.getItem("token"))try{var t=h.a.post("https://jabtracanand.herokuapp.com/accounts/logout/");console.log("logout success"),e({type:y,payload:t.data})}catch(a){e({type:y})}}}})((function(e){var t=e.logout,a=e.isAuthenticated,n=Object(c.useState)(!1),s=Object(b.a)(n,2),r=s[0],l=s[1],j=function(){t(),l(!0)};return Object(I.jsxs)(c.Fragment,{children:[Object(I.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(I.jsx)(o.b,{className:"navbar-brand text-success",to:"/",children:"JabTrac"}),Object(I.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(I.jsx)("span",{className:"navbar-toggler-icon"})}),Object(I.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(I.jsxs)("ul",{className:"navbar-nav",children:[a?Object(I.jsxs)(c.Fragment,{children:[Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(o.b,{className:"nav-link",to:"/home",children:"home"})}),Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(o.b,{className:"nav-link",to:"/emp",children:"Lists"})}),Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(o.b,{className:"nav-link",to:"/chart",children:"Chart "})}),Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(o.b,{className:"nav-link",to:"/empr",children:"AddEmp "})}),Object(I.jsx)("li",{className:"nav-item mr-auto",children:Object(I.jsx)("a",{className:"nav-link",href:"/",onClick:j,children:"Logout"})})]}):Object(I.jsx)("li",{className:"nav-item",children:Object(I.jsx)(o.b,{className:"nav-link",to:"/register",children:"Register "})}),Object(I.jsx)("li",{className:"nav-item active",children:Object(I.jsxs)(o.b,{className:"nav-link",to:"/about",children:["About ",Object(I.jsx)("span",{className:"sr-only"})]})})]})})]}),r?Object(I.jsx)(i.a,{to:"/"}):Object(I.jsx)(c.Fragment,{})]})}));a(39);var K=function(){return Object(I.jsx)("header",{class:"p-3 mb-2 bg-light text-dark text-center fixed-bottom w-full",children:"\xa9  copyright 2021"})};var W=Object(r.b)(null,{checkAuthenticated:function(e){return function(){var e=Object(u.a)(j.a.mark((function e(t){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("token")){e.next=16;break}return a={headers:{"Content-Type":"application/json",Authorization:"token ".concat(localStorage.getItem("token")),Accept:"application/json","X-CSRFToken":T}},e.prev=2,e.next=5,h.a.get("https://jabtracanand.herokuapp.com/accounts/user/",a);case 5:c=e.sent,t(w()),t({type:g,payload:c.data}),t(w()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),t({type:k});case 14:e.next=17;break;case 16:t({type:k});case 17:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}()},load_user:w})((function(e){return Object(c.useEffect)((function(){e.checkAuthenticated(),e.load_user()})),Object(I.jsxs)("div",{children:[Object(I.jsx)(H,{}),e.children,Object(I.jsx)(K,{})]})}));a(78);var Q=function(){var e,t=Object(c.useState)({}),a=Object(b.a)(t,2),n=(a[0],a[1],Object(c.useState)([])),s=Object(b.a)(n,2),r=s[0],o=s[1];localStorage.getItem("token")&&(e={headers:{"Content-Type":"application/json",Authorization:"token ".concat(localStorage.getItem("token")),Accept:"application/json"}}),Object(c.useEffect)((function(){i()}),[]);var i=function(){var t=Object(u.a)(j.a.mark((function t(){var a,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://jabtracanand.herokuapp.com/accounts/emp/",e);case 2:a=t.sent,c=a.data,console.log(c.data),console.log(c),o(c.data);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"justify-content-center",children:[Object(I.jsx)("br",{}),Object(I.jsxs)("table",{className:"table",children:[Object(I.jsx)("thead",{className:"thead-dark",children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{scope:"col",children:"S.No"}),Object(I.jsx)("th",{scope:"col",children:"Name"}),Object(I.jsx)("th",{scope:"col",children:"First_dose"}),Object(I.jsx)("th",{scope:"col",children:"Both_dose"}),Object(I.jsx)("th",{scope:"col",children:"Not_both_dose"})]})}),Object(I.jsx)("tbody",{children:Object(I.jsx)("tr",{children:r.map((function(e,t){return Object(I.jsxs)("td",{children:[" ",e.name]})}))})})]})]})},V=a(44),Z=a.n(V);function $(){var e,t,a=Object(c.useState)({}),n=Object(b.a)(a,2),s=(n[0],n[1]),r=Object(c.useState)(0),o=Object(b.a)(r,2),i=o[0],l=o[1],d=Object(c.useState)(0),p=Object(b.a)(d,2),O=p[0],m=p[1],x=Object(c.useState)(0),f=Object(b.a)(x,2),v=f[0],g=f[1],k=Object(c.useState)(0),y=Object(b.a)(k,2),S=y[0],N=y[1],A=Object(c.useState)(0),C=Object(b.a)(A,2),E=C[0],_=C[1];localStorage.getItem("token")&&(e={headers:{"Content-Type":"application/json",Authorization:"token ".concat(localStorage.getItem("token")),Accept:"application/json"}}),Object(c.useEffect)((function(){w()}),[]),t={series:[i,O,v,S,E],labels:["First Dose","Second Dose","employees","not both doses","both-doses"]};var w=function(){var t=Object(u.a)(j.a.mark((function t(){var a,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://jabtracanand.herokuapp.com/accounts/count/",e);case 2:a=t.sent,c=a.data,console.log(c.data),s(c.data),console.log(s),m(c.data.SD),l(c.data.FD),g(c.data.employees),N(c.data.NBD),_(c.data.BD);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsx)(Z.a,{options:t,series:t.series,type:"pie",width:500,height:320})]})}var ee=function(){return Object(I.jsx)("div",{children:Object(I.jsx)("h1",{children:" test data"})})};var te=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{empcreate:function(e,t,a,c,n){return function(){var s=Object(u.a)(j.a.mark((function s(r){var o,i,l;return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!localStorage.getItem("token")){s.next=13;break}return o={headers:{"Content-Type":"application/json",Authorization:"token ".concat(localStorage.getItem("token")),Accept:"application/json","X-CSRFToken":T}},i=JSON.stringify({name:e,first_dose:t,second_dose:a,both:c,not_both:n}),s.prev=3,s.next=6,h.a.post("https://jabtracanand.herokuapp.com/accounts/emp/",i,o);case 6:l=s.sent,r({type:E,payload:l.data}),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(3),r({type:_});case 13:case"end":return s.stop()}}),s,null,[[3,10]])})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t=e.empcreate,a=(e.isAuthenticated,Object(c.useState)(!1)),n=Object(b.a)(a,2),s=n[0],r=n[1],o=Object(c.useState)(""),l=Object(b.a)(o,2),j=l[0],u=l[1],d=Object(c.useState)(!1),h=Object(b.a)(d,2),p=h[0],O=h[1],m=Object(c.useState)(!1),x=Object(b.a)(m,2),f=x[0],v=x[1],g=Object(c.useState)(!1),k=Object(b.a)(g,2),y=k[0],S=k[1],N=Object(c.useState)(!1),A=Object(b.a)(N,2),C=A[0],E=A[1],_=Object(c.useState)({}),w=Object(b.a)(_,2),D=w[0],T=w[1],L=D.name,F=D.first_dose,R=D.second_dose,U=D.both,G=D.not_both;return console.log("Formdata",D),s?Object(I.jsx)(i.a,{to:"/emp"}):Object(I.jsxs)("div",{className:"container mt-5",children:[Object(I.jsx)("h1",{children:"Add employee details"}),Object(I.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),console.log("e to check",e),T({name:j,first_dose:p,second_dose:f,both:y,not_both:C}),t(j,p,f,y,C),r(!0)}(e)},children:[Object(I.jsx)("div",{className:"form-group",children:Object(I.jsx)("input",{className:"form-control",type:"text",placeholder:"Employee name*",name:"name",value:L,onChange:function(e){return function(e){u(e.target.value)}(e)},required:!0})}),Object(I.jsx)("br",{}),Object(I.jsxs)("div",{class:"form-check",children:[Object(I.jsx)("input",{className:"form-check-input",type:"checkbox",name:"first_dose",value:F,checked:p,onChange:function(e){O(!p)},id:"flexCheckDefault"}),Object(I.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"First Dose"})]}),Object(I.jsxs)("div",{class:"form-check",children:[Object(I.jsx)("input",{className:"form-check-input",type:"checkbox",value:R,checked:f,onChange:function(e){v(!f)},id:"flexCheckDefault"}),Object(I.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"Second Dose"})]}),Object(I.jsxs)("div",{class:"form-check",children:[Object(I.jsx)("input",{className:"form-check-input",type:"checkbox",value:U,checked:y,onChange:function(e){S(!y),O(!p),v(!f)},id:"flexCheckDefault"}),Object(I.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"fully vaccinated"})]}),Object(I.jsxs)("div",{class:"form-check",children:[Object(I.jsx)("input",{className:"form-check-input",type:"checkbox",value:G,checked:C,onChange:function(e){E(!C)},id:"flexCheckDefault"}),Object(I.jsx)("label",{className:"form-check-label",for:"flexCheckDefault",children:"not yet vaccinated"})]}),Object(I.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Register"})]})]})}));var ae=function(){return Object(I.jsx)(r.a,{store:z,children:Object(I.jsx)(o.a,{children:Object(I.jsx)(W,{children:Object(I.jsxs)(i.d,{children:[Object(I.jsx)(i.b,{exact:!0,path:"/",component:X}),Object(I.jsx)(i.b,{exact:!0,path:"/home",component:J}),Object(I.jsx)(i.b,{path:"/about",component:ee}),Object(I.jsx)(i.b,{path:"/sign",component:Y}),Object(I.jsx)(i.b,{path:"/emp",component:Q}),Object(I.jsx)(i.b,{path:"/chart",component:$}),Object(I.jsx)(i.b,{path:"/empr",component:te}),Object(I.jsx)(i.b,{path:"/register",component:Y})]})})})})};s.a.render(Object(I.jsx)(ae,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.960ad91f.chunk.js.map