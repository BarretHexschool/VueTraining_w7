import{_ as s,l as u,V as i,W as r,$ as c}from"./_plugin-vue_export-helper-705f5c90.js";const{VITE_APP_URL:n,VITE_APP_PATH:a}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w7/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{product:{}}},methods:{getProduct(){const{id:o}=this.$route.params;this.$http.get(`${n}/v2/api/${a}/product/${o}`).then(t=>{this.product=t.data.product}).catch(t=>{alert(t)})}},mounted(){this.getProduct()}},l=["src"];function d(o,t,_,h,e,P){return u(),i("div",null,[r("h2",null,c(e.product.title),1),r("img",{src:e.product.imageUrl,class:"img-fluid",alt:""},null,8,l),r("p",null,c(e.product.price)+" 元 ",1)])}const V=s(p,[["render",d]]);export{V as default};