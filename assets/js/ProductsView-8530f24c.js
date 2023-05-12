import{c as M}from"./useCartStore-457aadc6.js";import{m as y,a as $}from"./index-c324a23e.js";import{b6 as L,av as h,aj as i,l as u,F as v,at as x,m as e,j as F,k as P,aJ as p,s as f,t as l,b1 as m,b3 as k}from"./_plugin-vue_export-helper-68081c38.js";import{E as T,a as E,F as C}from"./vee-validate.esm-51f435e3.js";import{j as w}from"./runtime-dom.esm-bundler-eb0e3820.js";import{L as S}from"./LoadingDesign-df3df60d.js";import{u as O}from"./useFrontProducts-23ee6a9e.js";import{s as j}from"./useSweetAlertStore-88a84f9a.js";import{M as U}from"./modal-07befdcc.js";import"./axios-aba6f0e0.js";import"./vue-router-e29dd812.js";import"./_commonjsHelpers-87174ba5.js";import"./base-component-3c0963ef.js";const B={name:"FrontProductsList",props:["openModal","products","category"],computed:{filteredProducts(){return this.filterProducts(this.products)}},methods:{filterProducts(d){if(this.category==="精選套餐"){const t=d.filter(c=>c.category===this.category);return this.gropuSetProducts(t)}else return d.filter(t=>t.category===this.category)},gropuSetProducts(d){const t={};return d.forEach(c=>{const{mainTitle:a,select1:o,select2:r}=c;t[a]===void 0?t[a]={...c}:(o!==void 0&&(typeof t[a].select1=="string"?t[a].select1!==o&&(t[a].select1=[t[a].select1,o]):this.checkHas(t[a].select1,o)||(t[a].select1=[...t[a].select1,o])),typeof t[a].select2=="string"?t[a].select2!==r&&(t[a].select2=[t[a].select2,r]):this.checkHas(t[a].select2,r)||(t[a].select2=[...t[a].select2,r]))}),t},checkHas(d,t){return d.includes(t)},...y(M,["addToCart"])}},I={class:"list-unstyled mb-1 row row-cols-1 row-cols-md-2"},D={class:"position-relative bg-secondary rounded rounded-3 p-2 porductList"},N=["onClick"],q={class:"d-flex flex-column justify-content-between h-100"},H={class:"d-flex align-items-start align-items-lg-center h-100"},R={class:"box-img me-2 ratio ratio-1x1 product-img"},A={class:"box-word w-100 d-flex flex-column justify-content-between"},z={class:"product-word ls-15"},G={class:"fs-6 ms-lg-2"},J={class:"d-flex justify-content-between align-items-start flex-column flex-lg-row align-content-end align-items-end"},K={class:"product-price text-end mb-1 mb-lg-0"},Q={key:0,class:"fs-5"},W={key:1,class:"d-flex flex-column flex-lg-row align-content-end align-items-end me-1"},X={class:"fs-7 me-lg-1"},Y={class:"fs-5 fw-bold"},Z=e("div",{class:"py-1 px-2 bg-third rounded-5 fs-6 d-none d-lg-flex"},[e("span",{class:"material-symbols-rounded me-1"},"add_box"),f("加入購物車 ")],-1),ee=e("div",{class:"d-flex justify-content-center py-1 px-2 mt-2 bg-third rounded-5 fs-6 d-lg-none"},[e("span",{class:"material-symbols-rounded me-1"},"add_box"),f("加入購物車 ")],-1);function te(d,t,c,a,o,r){const b=h("ProgressiveImage");return i(),u("ul",I,[(i(!0),u(v,null,x(r.filteredProducts,n=>(i(),u("li",{class:"col mb-2","data-aos":"fade-up","data-aos-easing":"liner","data-aos-delay":"30",key:n.id},[e("div",D,[e("button",{type:"button",class:"btn position-absolute z-2 btn-porduct-add",onClick:_=>c.openModal(n)},null,8,N),e("div",q,[e("div",H,[e("div",R,[n.imageUrl?(i(),F(b,{key:0,src:`${n.imageUrl}?width=200`,class:"img-fluid object-top",alt:n.mainTitle},null,8,["src","alt"])):P("",!0)]),e("div",A,[e("div",z,[e("h3",null,p(n.mainTitle),1),e("p",G,p(n.description),1)]),e("div",J,[e("div",K,[n.price==n.origin_price?(i(),u("div",Q," $"+p(n.price)+" 元 ",1)):(i(),u("div",W,[e("del",X," 原價：$ "+p(n.origin_price)+" 元",1),e("span",Y,"特價： $ "+p(n.price)+" 元",1)]))]),Z])])]),ee])])]))),128))])}const se=L(B,[["render",te]]),oe={props:["tempProduct","products","productModalElement"],data(){return{drinkType:["冰","冷(去冰)","溫"],message:"",selectedOption1:"",selectedOption2:"",iceLevel:"",id:this.tempProduct.id,isSelect:this.tempProduct.is_select}},methods:{addToCartBtn(d){let t=this.tempProduct.id;this.tempProduct.is_select===1&&(t=this.findId()),this.addToCart(t,1,this.message),this.productModalElement.hide(),this.$refs.form.resetForm()},findId(){return this.selectedOption1===""&&(this.selectedOption1=void 0),this.selectedOption2===""&&(this.selectedOption2=void 0),this.iceLevel===""&&(this.iceLevel=void 0),this.products.find(t=>t.mainTitle===this.tempProduct.mainTitle&&t.select1===this.selectedOption1&&t.select2===this.selectedOption2&&t.iceLevel===this.iceLevel).id},watchMore(d){this.productModalElement.hide(),this.$router.push(`/product/${d}`)},...y(M,["addToCart"])},components:{ErrorMessage:T,VForm:E,Field:C}},de={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},le={class:"modal-dialog modal-dialog-centered modal-md"},ae={class:"modal-content"},ne=["src"],ce={class:"modal-header d-block"},ie={class:"d-flex justify-content-between flex-wrap"},re={class:"mb-2"},ue=e("button",{type:"button",class:"btn-close position-absolute top-0 end-0 p-1 m-1 rounded-circle bg-opacity-90 bg-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),me={class:"modal-body"},pe={key:0,class:"mb-2 radioBox"},_e=e("p",{class:"mb-0"},"主食選擇：",-1),fe=e("p",{class:"invalid-feedback d-block my-0"}," *請選擇您所想要的主食 ",-1),he={class:"form-check"},be=["id","value"],ge=["for"],ye={key:1,class:"mb-2 radioBox"},ve=e("p",{class:"mb-0"},"飲料選擇：",-1),xe=e("p",{class:"invalid-feedback d-block my-0"}," *請問你要喝什麼？ ",-1),Pe={class:"form-check"},ke=["id","value"],we=["for"],Me={key:2,class:"mb-2 radioBox"},Le=e("p",{class:"mb-0"},"冰冷熱選擇：",-1),Oe=e("p",{class:"invalid-feedback d-block my-0"}," *請問要冰的？還是熱的？ ",-1),Ve=["id","value"],$e=["for"],Fe={class:"mb-3"},Te=e("label",{for:"message",class:"col-form-label"},[f("餐點備註"),e("br"),e("span",{class:"fs-6"},"我們將盡量配合，未符合期待還請多包容哦，如兩份一樣的餐點要不同做法，請寫在一起。")],-1),Ee={class:"modal-footer justify-content-between"},Ce=e("button",{type:"submit",class:"btn btn-secondary"},"放入購物車",-1);function Se(d,t,c,a,o,r){const b=h("ErrorMessage"),n=h("Field"),_=h("VForm");return i(),u("div",de,[e("div",le,[e("div",ae,[e("img",{class:"productModalImg",src:c.tempProduct.imageUrl},null,8,ne),e("div",ce,[e("div",ie,[e("h3",null,p(c.tempProduct.mainTitle),1),e("p",null,"$ "+p(c.tempProduct.price),1)]),e("p",re,p(c.tempProduct.description),1),ue]),e("div",me,[l(_,{ref:"form",onSubmit:r.addToCartBtn},{default:m(()=>[c.tempProduct.select1?(i(),u("div",pe,[_e,l(b,{name:"selectedOption1"},{default:m(()=>[fe]),_:1}),l(n,{id:"selectedOption1",name:"selectedOption1",type:"radio",rules:"required",modelValue:o.selectedOption1,"onUpdate:modelValue":t[1]||(t[1]=s=>o.selectedOption1=s)},{default:m(()=>[(i(!0),u(v,null,x(c.tempProduct.select1,s=>(i(),u("div",he,[k(e("input",{class:"form-check-input",type:"radio",name:"selectedOption1",id:s,value:s,"onUpdate:modelValue":t[0]||(t[0]=g=>o.selectedOption1=g)},null,8,be),[[w,o.selectedOption1]]),e("label",{class:"form-check-label",for:s},p(s),9,ge)]))),256))]),_:1},8,["modelValue"])])):P("",!0),c.tempProduct.select2?(i(),u("div",ye,[ve,l(b,{name:"selectedOption2"},{default:m(()=>[xe]),_:1}),l(n,{id:"selectedOption2",name:"selectedOption2",type:"radio",rules:"required",modelValue:o.selectedOption2,"onUpdate:modelValue":t[3]||(t[3]=s=>o.selectedOption2=s)},{default:m(()=>[(i(!0),u(v,null,x(c.tempProduct.select2,s=>(i(),u("div",Pe,[k(e("input",{class:"form-check-input",type:"radio",name:"selectedOption2",id:s,value:s,"onUpdate:modelValue":t[2]||(t[2]=g=>o.selectedOption2=g)},null,8,ke),[[w,o.selectedOption2]]),e("label",{class:"form-check-label",for:s},p(s),9,we)]))),256))]),_:1},8,["modelValue"])])):P("",!0),c.tempProduct.iceLevel?(i(),u("div",Me,[Le,l(b,{name:"iceLevel"},{default:m(()=>[Oe]),_:1}),l(n,{id:"iceLevel",name:"iceLevel",type:"radio",rules:"required",modelValue:o.iceLevel,"onUpdate:modelValue":t[5]||(t[5]=s=>o.iceLevel=s)},{default:m(()=>[(i(!0),u(v,null,x(o.drinkType,(s,g)=>(i(),u("div",{class:"form-check",key:g},[k(e("input",{class:"form-check-input",type:"radio",name:"iceLevel",id:s,value:s,"onUpdate:modelValue":t[4]||(t[4]=V=>o.iceLevel=V)},null,8,Ve),[[w,o.iceLevel]]),e("label",{class:"form-check-label",for:s},p(s),9,$e)]))),128))]),_:1},8,["modelValue"])])):P("",!0),e("div",Fe,[Te,l(n,{class:"form-control",name:"message",as:"textarea",id:"message",modelValue:o.message,"onUpdate:modelValue":t[6]||(t[6]=s=>o.message=s),placeholder:"例如：不要小黃瓜、不要沙拉醬、要加番茄醬、一份正常做，一份不要沙拉醬"},null,8,["modelValue"])]),e("div",Ee,[e("button",{type:"button",class:"btn btn-danger",onClick:t[7]||(t[7]=s=>r.watchMore(c.tempProduct.id))}," 看更多 "),Ce])]),_:1},8,["onSubmit"])])])])],512)}const je=L(oe,[["render",Se]]),Ue={data(){return{tempProduct:{},productModalElement:""}},methods:{openModal(d){this.tempProduct={...d},this.productModalElement.show()},...y(O,["getProducts"]),...y(M,["addToCart"]),...y(j,["swalError","swalToastTopEnd"])},computed:{...$(O,["products","isLoading"])},mounted(){document.title="鮮堡漢堡 文化店 | 美味鮮堡",this.productModalElement=new U(document.querySelector("#productModal"),{keyboard:!1}),this.productModalElement.hide(),this.$router.push(this.$route.fullPath),document.readyState==="complete"&&this.$router.push(this.$route.fullPath)},components:{LoadingDesign:S,FrontProductModal:je,FrontProductsList:se}},Be={class:"w-100 position-relative pb-3"},Ie={class:"common-hero container"},De={class:"hero-banner overflow-hidden rounded rounded-6 rounded-lg-7 mb-3"},Ne={class:"list-unstyled overflow-x-auto productsCatalogNav"},qe=e("h2",{class:"ls-2 mb-1 text-sm-start text-center","data-aos":"fade-up","data-aos-easing":"liner","data-aos-delay":"30",id:"selectSet"}," 嚴選套餐 ",-1),He=e("h2",{class:"ls-2 mb-1 text-sm-start text-center","data-aos":"fade-up","data-aos-easing":"liner","data-aos-delay":"30",id:"hamburger"}," 漢堡 ",-1),Re=e("h2",{class:"ls-2 mb-1 text-sm-start text-center","data-aos":"fade-up","data-aos-easing":"liner","data-aos-delay":"30",id:"toast"}," 現烤吐司 ",-1),Ae=e("h2",{class:"ls-2 mb-1 text-sm-start text-center","data-aos":"fade-up","data-aos-easing":"liner","data-aos-delay":"30",id:"sandwich"}," 現烤總匯 ",-1),ze=e("h2",{class:"ls-2 mb-1 text-sm-start text-center","data-aos":"fade-up","data-aos-easing":"liner","data-aos-delay":"30",id:"snack"}," 中西式點心 ",-1),Ge=e("h2",{class:"ls-2 mb-1 text-sm-start text-center","data-aos":"fade-up","data-aos-easing":"liner","data-aos-delay":"30",id:"omelet"}," 蛋餅、河粉蛋餅 ",-1);function Je(d,t,c,a,o,r){const b=h("LoadingDesign"),n=h("ProgressiveImage"),_=h("RouterLink"),s=h("FrontProductsList"),g=h("FrontProductModal");return i(),u(v,null,[l(b,{"is-loading":d.isLoading},null,8,["is-loading"]),e("main",Be,[e("section",Ie,[e("div",De,[l(n,{src:"./assets/images/product-hero.jpg",alt:"",class:"img-fluid object-fit-cover object-position-center"})]),e("ul",Ne,[e("li",null,[l(_,{to:"/products#selectSet",class:"btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"},{default:m(()=>[f("嚴選套餐")]),_:1})]),e("li",null,[l(_,{to:"/products#hamburger",class:"btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"},{default:m(()=>[f("漢堡")]),_:1})]),e("li",null,[l(_,{to:"/products#toast",class:"btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"},{default:m(()=>[f("現烤吐司")]),_:1})]),e("li",null,[l(_,{to:"/products#sandwich",class:"btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"},{default:m(()=>[f("現烤總匯")]),_:1})]),e("li",null,[l(_,{to:"/products#snack",class:"btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"},{default:m(()=>[f("中西式點心")]),_:1})]),e("li",null,[l(_,{to:"/products#omelet",class:"btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"},{default:m(()=>[f("蛋餅、河粉蛋餅")]),_:1})])]),qe,l(s,{"open-modal":r.openModal,products:d.products,category:"精選套餐"},null,8,["open-modal","products"]),He,l(s,{"open-modal":r.openModal,products:d.products,category:"漢堡"},null,8,["open-modal","products"]),Re,l(s,{"open-modal":r.openModal,products:d.products,category:"現烤吐司"},null,8,["open-modal","products"]),Ae,l(s,{"open-modal":r.openModal,products:d.products,category:"現烤總匯"},null,8,["open-modal","products"]),ze,l(s,{"open-modal":r.openModal,products:d.products,category:"中西式點心"},null,8,["open-modal","products"]),Ge,l(s,{"open-modal":r.openModal,products:d.products,category:"蛋餅、河粉蛋餅"},null,8,["open-modal","products"]),l(g,{"temp-product":o.tempProduct,products:d.products,"product-modal-element":o.productModalElement},null,8,["temp-product","products","product-modal-element"])])])],64)}const nt=L(Ue,[["render",Je]]);export{nt as default};
