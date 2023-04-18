import{R as u}from"./vue-router-e29dd812.js";import{n as _}from"./runtime-dom.esm-bundler-eb0e3820.js";import{_ as m}from"./logo-19c5c7c1.js";import{b6 as g,av as c,aj as l,l as v,m as e,t as s,b1 as a,j as k,k as f,F as w,s as i}from"./_plugin-vue_export-helper-68081c38.js";const{VITE_APP_URL:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w7/",MODE:"production",DEV:!1,PROD:!0},x={data(){return{isChecked:!1}},components:{RouterView:u},methods:{logout(){const t=new Date;t.setTime(t.getTime()-1e4),document.cookie=`hexToken=0; expires=${t.toGMTString()}`,this.$router.push("/login")},checkLogin(){this.$http.post(`${b}/v2/api/user/check`).then(t=>{t.data.success?this.isChecked=!0:(this.isChecked=!1,this.$router.push("/login"))}).catch(t=>{this.isChecked=!1,this.$router.push("/login")})}},mounted(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=t,this.checkLogin()}},y={class:"navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow"},C=e("a",{class:"navbar-brand col-md-3 col-lg-2 me-0 px-3 py-2 fs-6",href:"#"},[e("img",{src:m,alt:"Logo",height:"35"})],-1),T=e("button",{class:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1),V={class:"navbar-nav"},$={class:"nav-item text-nowrap"},M={class:"container-fluid min-h"},B={class:"row vh-100"},L={id:"sidebarMenu",class:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},P={class:"position-sticky pt-3 sidebar-sticky"},A={class:"nav flex-column"},E={class:"nav-item"},j=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-home align-text-bottom","aria-hidden":"true"},[e("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),e("polyline",{points:"9 22 9 12 15 12 15 22"})],-1),R={class:"nav-item"},D=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-file align-text-bottom","aria-hidden":"true"},[e("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),e("polyline",{points:"13 2 13 9 20 9"})],-1),H={class:"nav-item"},N=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-shopping-cart align-text-bottom","aria-hidden":"true"},[e("circle",{cx:"9",cy:"21",r:"1"}),e("circle",{cx:"20",cy:"21",r:"1"}),e("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})],-1),z={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},I=e("footer",{class:"py-3 bg-primary d-flex align-items-center justify-content-center",style:{height:"82px"}},[e("p",{class:"mb-0 fs-7 ls-15"},"© 2023 鮮堡漢堡 板橋文化店 版權所有")],-1);function U(t,n,F,O,d,r){const o=c("router-link"),h=c("router-view");return l(),v(w,null,[e("header",y,[C,T,e("div",V,[e("div",$,[e("a",{class:"nav-link px-3",href:"#",onClick:n[0]||(n[0]=_((...p)=>r.logout&&r.logout(...p),["prevent"]))},"登出 ")])])]),e("div",M,[e("div",B,[e("nav",L,[e("div",P,[e("ul",A,[e("li",E,[s(o,{to:"/",class:"nav-link active","aria-current":"page"},{default:a(()=>[j,i(" 返回前台 ")]),_:1})]),e("li",R,[s(o,{to:"/admin/orders",class:"nav-link"},{default:a(()=>[D,i(" 訂單列表 ")]),_:1})]),e("li",H,[s(o,{to:"/admin/products",class:"nav-link"},{default:a(()=>[N,i(" 產品列表 ")]),_:1})])])])]),e("main",z,[d.isChecked?(l(),k(h,{key:0})):f("",!0)])])]),I],64)}const K=g(x,[["render",U]]);export{K as default};