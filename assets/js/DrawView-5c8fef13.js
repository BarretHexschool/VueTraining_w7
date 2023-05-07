import{m as f,a as x}from"./index-e59616dd.js";import{c as y}from"./useCartStore-120d56e8.js";import{s as P}from"./useSweetAlertStore-2778a16d.js";import{L}from"./LoadingDesign-df3df60d.js";import{v as T}from"./runtime-dom.esm-bundler-eb0e3820.js";import{b6 as A,av as b,aj as n,l as a,t as C,m as t,F as _,at as w,aJ as l,k as u,b1 as S,b3 as D,s as g}from"./_plugin-vue_export-helper-68081c38.js";import"./vue-router-e29dd812.js";import"./axios-aba6f0e0.js";const{VITE_APP_URL:k,VITE_APP_PATH:v}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w7/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{isLoading:!0,categorys:["精選套餐","現烤總匯","漢堡","現烤吐司","蛋餅、河粉蛋餅","中西式點心"],selectedCategorys:[],selectdeProducts:[],checkAll:!1,canStartLottery:!1,winner:null,products:[],productID:"",loadingItem:""}},methods:{onCheckAllChange(){this.selectedCategorys=this.checkAll?[...this.categorys]:[]},watchSelectedCategorys(){this.selectedCategorys.length===0||this.selectedCategorys.length===this.categorys.length?this.checkAll=!0:this.checkAll=!1},startLottery(){this.selectedCategorys.length!==0?this.selectdeProducts=this.filterProduct():this.selectdeProducts=this.products;let s=20;const o=2e3,d=20,i=100;let r=0;const c=setInterval(()=>{const p=Math.floor(Math.random()*this.selectdeProducts.length),m=this.selectdeProducts[p];if(this.winner=m,r<i&&(s+=d,r++),s>=o){clearInterval(c);const{id:e}=this.winner;this.addToCart(e)}},s);this.selectedCategorys=[]},getProduct(){this.$http.get(`${k}/v2/api/${v}/products/all`).then(s=>{this.products=s.data.products,this.isLoading=!1}).catch(s=>{this.swalError(s)})},addToCart(s,o=1){this.selectdeProducts=[];const d={product_id:s,qty:o,message:"抽抽樂抽到的"};this.$http.post(`${k}/v2/api/${v}/cart`,{data:d}).then(i=>{this.swalToastTopEnd("已幫您自動加入購物車"),this.getCartData()}).catch(i=>{this.swalError(i)})},filterProduct(){return this.products.filter(s=>this.selectedCategorys.findIndex(o=>o===s.category)!==-1)},...f(y,["getCartData","addToCart","deleteOneCart","swalClearAllCart"]),...f(P,["swalError","swalToastTopEnd"])},computed:{...x(y,["finalTotal","carts"])},components:{LoadingDesign:L},mounted(){this.getProduct(),this.getCartData(),document.title="鮮堡漢堡 文化店 | 早餐轉轉轉"}},I={class:"w-100 position-relative z-2"},V=t("section",{class:"common-hero container"},[t("h2",{class:"mb-1ls-2 text-sm-start text-center"}," 不知道吃什麼嗎？我也許能幫忙！ "),t("h1",{class:"text-secondary text-nowrap font-monospace text-uppercase mb-1"}," make life smoother ")],-1),U={class:"container"},B={class:"row row-cols-1 row-cols-lg-2 p-1 pb-6"},M={class:"col"},N={class:"row justify-content-center bg-third rounded rounded-4 rounded-lg-5 p-4 p-md-6"},O=t("h5",null,"有特別想要的餐點類別嗎？（預設全選）",-1),R={class:"form-group mb-2"},j=t("div",{class:"form-check"},null,-1),F=["id","value"],H=["for"],q={key:0,class:"mt-5 fs-5"},z={class:"col"},J={class:"table align-middle w-100 border-secondary p-2"},G=t("thead",null,[t("tr",{class:"w-100"},[t("th",null,"品名"),t("th",{class:"text-nowrap text-center"},"單價"),t("th",{class:"text-nowrap text-center"},"數量"),t("th",{class:"text-nowrap text-center"},"小計"),t("th")])],-1),K={class:"w-100"},Q={key:0,class:"text-success"},W={class:"text-center"},X={class:"text-center"},Y={class:"text-center"},Z=["onClick","disabled"],$={key:0,class:"fas fa-spinner fa-pulse"},tt={class:"border-transparent"},et=t("td",{colspan:"4",class:"text-end border-0"},"總計",-1),st={class:"text-end border-0"},ot={class:"d-flex justify-content-between mb-4"};function rt(s,o,d,i,r,c){const p=b("LoadingDesign"),m=b("router-link");return n(),a(_,null,[C(p,{"is-Loading":r.isLoading},null,8,["is-Loading"]),t("main",I,[V,t("section",U,[t("div",B,[t("div",M,[t("div",N,[O,t("div",R,[j,(n(!0),a(_,null,w(r.categorys,e=>(n(),a("div",{class:"form-check",key:e},[D(t("input",{class:"form-check-input",type:"checkbox",id:e,value:e,"onUpdate:modelValue":o[0]||(o[0]=h=>r.selectedCategorys=h),onChange:o[1]||(o[1]=(...h)=>c.watchSelectedCategorys&&c.watchSelectedCategorys(...h))},null,40,F),[[T,r.selectedCategorys]]),t("label",{class:"form-check-label",for:e},l(e),9,H)]))),128))]),t("button",{class:"btn btn-primary",onClick:o[2]||(o[2]=(...e)=>c.startLottery&&c.startLottery(...e))},"按我開始，決定今天吃什麼 "),r.winner?(n(),a("div",q," 您覺得今天吃 『 "+l(r.winner.title)+" 』 好嗎？ ",1)):u("",!0)])]),t("div",z,[t("table",J,[G,t("tbody",K,[s.carts?(n(!0),a(_,{key:0},w(s.carts,e=>(n(),a("tr",{key:e.id},[t("td",null,[g(l(e.product.title)+" ",1),e.coupon?(n(),a("div",Q," 已套用優惠券 ")):u("",!0)]),t("td",W,l(e.product.price),1),t("td",X,l(e.qty),1),t("td",Y,l(e.total),1),t("td",null,[t("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:h=>s.deleteOneCart(e.id),disabled:e.id===r.loadingItem},[r.loadingItem===e.id?(n(),a("i",$)):u("",!0),g(" x ")],8,Z)])]))),128)):u("",!0)]),t("tfoot",tt,[t("tr",null,[et,t("td",st,l(s.finalTotal),1)])])]),t("div",ot,[t("button",{class:"btn btn-danger",type:"button",onClick:o[3]||(o[3]=(...e)=>s.swalClearAllCart&&s.swalClearAllCart(...e))}," 清空商品 "),C(m,{class:"btn btn-secondary",type:"button",to:"/products"},{default:S(()=>[g("想點更多")]),_:1})])])])])])],64)}const pt=A(E,[["render",rt]]);export{pt as default};