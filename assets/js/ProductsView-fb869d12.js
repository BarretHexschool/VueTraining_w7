import{c as O}from"./useCartStore-68155992.js";import{u as k}from"./useFrontProducts-fe20bda1.js";import{a as V,m as P}from"./index-36cc46aa.js";import{b6 as F,av as u,aj as o,l,F as _,at as g,m as e,j as E,k as y,a5 as C,aJ as a,s as x,t as c,b1 as p,b3 as L}from"./_plugin-vue_export-helper-68081c38.js";import{E as $,a as j,F as S}from"./vee-validate.esm-51f435e3.js";import{j as M}from"./runtime-dom.esm-bundler-eb0e3820.js";import{L as U}from"./LoadingDesign-df3df60d.js";import{s as B}from"./useSweetAlertStore-36c75d7a.js";import{M as I}from"./modal-07befdcc.js";import"./axios-aba6f0e0.js";import"./vue-router-e29dd812.js";import"./_commonjsHelpers-87174ba5.js";import"./base-component-3c0963ef.js";const D={name:"FrontProductsList",props:["openModal","products","category"],computed:{filteredProducts(){return this.groupProducts.filter(r=>r.category===this.category)},...V(k,["groupProducts"])},methods:{...P(O,["addToCart"])}},N={class:"list-unstyled mb-1 row row-cols-1 row-cols-md-2"},q={class:"position-relative bg-secondary rounded rounded-3 p-2 porductList"},R=["onClick"],z={class:"d-flex flex-column justify-content-between h-100"},A={class:"d-flex align-items-start align-items-lg-center h-100"},J={class:"box-img me-2 ratio ratio-1x1 product-img"},G={class:"box-word w-100 d-flex flex-column justify-content-between"},H={class:"product-word ls-15"},K={class:"fs-6"},Q={class:"d-flex justify-content-between align-items-start flex-column flex-lg-row align-content-end align-items-end"},W={class:"product-price text-end mb-1 mb-lg-0"},X={key:0,class:"fs-5"},Y={key:1,class:"d-flex flex-column flex-lg-row align-content-end align-items-end me-1"},Z={class:"fs-7 me-lg-1"},ee={class:"fs-5 fw-bold"},te=e("div",{class:"py-1 px-2 bg-third rounded-5 fs-6 d-none d-lg-flex"},[e("span",{class:"material-symbols-rounded me-1"},"add_box"),x("加入購物車 ")],-1),se=e("div",{class:"d-flex justify-content-center py-1 px-2 mt-2 bg-third rounded-5 fs-6 d-lg-none"},[e("span",{class:"material-symbols-rounded me-1"},"add_box"),x("加入購物車 ")],-1);function oe(r,t,i,T,d,f){const b=u("ProgressiveImage");return o(),l("ul",N,[(o(!0),l(_,null,g(f.filteredProducts,n=>(o(),l("li",{class:"col mb-2","data-aos":"fade-up","data-aos-easing":"liner",key:n.id},[e("div",q,[e("button",{type:"button",class:"btn position-absolute z-2 btn-porduct-add",onClick:h=>i.openModal(n)},null,8,R),e("div",z,[e("div",A,[e("div",J,[n.imageUrl?(o(),E(b,{key:0,src:`${n.imageUrl}?width=200`,class:"img-fluid object-top",alt:n.mainTitle},null,8,["src","alt"])):y("",!0)]),e("div",G,[e("div",H,[e("h3",{style:C(n.is_select?"margin-left:-1rem;":"")},a(n.mainTitle),5),e("p",K,a(n.description),1)]),e("div",Q,[e("div",W,[n.price==n.origin_price?(o(),l("div",X," $"+a(n.price)+" 元 ",1)):(o(),l("div",Y,[e("del",Z," 原價：$ "+a(n.origin_price)+" 元",1),e("span",ee,"特價： $ "+a(n.price)+" 元",1)]))]),te])])]),se])])]))),128))])}const de=F(D,[["render",oe]]),le={props:["tempProduct","productModalElement"],data(){return{drinkType:["冰","冷(去冰)","溫"],message:"",selectedOption1:"",selectedOption2:"",iceLevel:"",id:this.tempProduct.id,isSelect:this.tempProduct.is_select}},methods:{addToCartBtn(r){let t=this.tempProduct.id;this.tempProduct.is_select===1&&(t=this.findId()),this.addToCart(t,1,this.message),this.productModalElement.hide(),this.$refs.form.resetForm()},findId(){return this.selectedOption1===""&&(this.selectedOption1=void 0),this.selectedOption2===""&&(this.selectedOption2=void 0),this.iceLevel===""&&(this.iceLevel=void 0),this.products.find(t=>t.mainTitle===this.tempProduct.mainTitle&&t.select1===this.selectedOption1&&t.select2===this.selectedOption2&&t.iceLevel===this.iceLevel).id},watchMore(r){this.productModalElement.hide(),this.$router.push(`/product/${r}`)},...P(O,["addToCart"])},computed:{...V(k,["products"])},components:{ErrorMessage:$,VForm:j,Field:S}},ne={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},ie={class:"modal-dialog modal-dialog-centered modal-md"},ce={class:"modal-content"},ae={class:"modal-header d-block"},re={class:"d-flex justify-content-between flex-wrap"},me={class:"mb-2"},ue=e("button",{type:"button",class:"btn-close position-absolute top-0 end-0 p-1 m-1 rounded-circle bg-opacity-90 bg-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),pe={class:"modal-body"},_e={key:0,class:"mb-2 radioBox"},he=e("p",{class:"mb-0"},"主食選擇：",-1),fe=e("p",{class:"invalid-feedback d-block my-0"}," *請選擇您所想要的主食 ",-1),ge={class:"form-check"},be=["id","value"],ve=["for"],ye={key:1,class:"mb-2 radioBox"},Pe=e("p",{class:"mb-0"},"飲料選擇：",-1),ke=e("p",{class:"invalid-feedback d-block my-0"}," *請問你要喝什麼？ ",-1),xe={class:"form-check"},we=["id","value"],Le=["for"],Me={key:2,class:"mb-2 radioBox"},Oe=e("p",{class:"mb-0"},"冰冷熱選擇：",-1),Ve=e("p",{class:"invalid-feedback d-block my-0"}," *請問要冰的？還是熱的？ ",-1),Fe=["id","value"],Te=["for"],Ee={class:"mb-3"},Ce=e("label",{for:"message",class:"col-form-label"},[x("餐點備註"),e("br"),e("span",{class:"fs-6"},"我們將盡量配合，未符合期待還請多包容哦，如兩份一樣的餐點要不同做法，請寫在一起。")],-1),$e={class:"modal-footer justify-content-between"},je=e("button",{type:"submit",class:"btn btn-secondary"},"放入購物車",-1);function Se(r,t,i,T,d,f){const b=u("ProgressiveImage"),n=u("ErrorMessage"),h=u("Field"),w=u("VForm");return o(),l("div",ne,[e("div",ie,[e("div",ce,[i.tempProduct.imageUrl?(o(),E(b,{key:0,src:`${i.tempProduct.imageUrl}?width=450`,class:"productModalImg",alt:i.tempProduct.mainTitle,style:{"max-width":"100%"}},null,8,["src","alt"])):y("",!0),e("div",ae,[e("div",re,[e("h3",null,a(i.tempProduct.mainTitle),1),e("p",null,"$ "+a(i.tempProduct.price),1)]),e("p",me,a(i.tempProduct.description),1),ue]),e("div",pe,[c(w,{ref:"form",onSubmit:f.addToCartBtn},{default:p(()=>[i.tempProduct.select1?(o(),l("div",_e,[he,c(n,{name:"selectedOption1"},{default:p(()=>[fe]),_:1}),c(h,{id:"selectedOption1",name:"selectedOption1",type:"radio",rules:"required",modelValue:d.selectedOption1,"onUpdate:modelValue":t[1]||(t[1]=s=>d.selectedOption1=s)},{default:p(()=>[(o(!0),l(_,null,g(i.tempProduct.select1,s=>(o(),l("div",ge,[L(e("input",{class:"form-check-input",type:"radio",name:"selectedOption1",id:s,value:s,"onUpdate:modelValue":t[0]||(t[0]=m=>d.selectedOption1=m)},null,8,be),[[M,d.selectedOption1]]),e("label",{class:"form-check-label",for:s},a(s),9,ve)]))),256))]),_:1},8,["modelValue"])])):y("",!0),i.tempProduct.select2?(o(),l("div",ye,[Pe,c(n,{name:"selectedOption2"},{default:p(()=>[ke]),_:1}),c(h,{id:"selectedOption2",name:"selectedOption2",type:"radio",rules:"required",modelValue:d.selectedOption2,"onUpdate:modelValue":t[3]||(t[3]=s=>d.selectedOption2=s)},{default:p(()=>[(o(!0),l(_,null,g(i.tempProduct.select2,s=>(o(),l("div",xe,[L(e("input",{class:"form-check-input",type:"radio",name:"selectedOption2",id:s,value:s,"onUpdate:modelValue":t[2]||(t[2]=m=>d.selectedOption2=m)},null,8,we),[[M,d.selectedOption2]]),e("label",{class:"form-check-label",for:s},a(s),9,Le)]))),256))]),_:1},8,["modelValue"])])):y("",!0),i.tempProduct.iceLevel?(o(),l("div",Me,[Oe,c(n,{name:"iceLevel"},{default:p(()=>[Ve]),_:1}),c(h,{id:"iceLevel",name:"iceLevel",type:"radio",rules:"required",modelValue:d.iceLevel,"onUpdate:modelValue":t[5]||(t[5]=s=>d.iceLevel=s)},{default:p(()=>[(o(!0),l(_,null,g(d.drinkType,(s,m)=>(o(),l("div",{class:"form-check",key:m},[L(e("input",{class:"form-check-input",type:"radio",name:"iceLevel",id:s,value:s,"onUpdate:modelValue":t[4]||(t[4]=v=>d.iceLevel=v)},null,8,Fe),[[M,d.iceLevel]]),e("label",{class:"form-check-label",for:s},a(s),9,Te)]))),128))]),_:1},8,["modelValue"])])):y("",!0),e("div",Ee,[Ce,c(h,{class:"form-control",name:"message",as:"textarea",id:"message",modelValue:d.message,"onUpdate:modelValue":t[6]||(t[6]=s=>d.message=s),placeholder:"例如：不要小黃瓜、不要沙拉醬、要加番茄醬、一份正常做，一份不要沙拉醬"},null,8,["modelValue"])]),e("div",$e,[e("button",{type:"button",class:"btn btn-danger",onClick:t[7]||(t[7]=s=>f.watchMore(i.tempProduct.id))}," 看更多 "),je])]),_:1},8,["onSubmit"])])])])],512)}const Ue=F(le,[["render",Se]]),Be={data(){return{tempProduct:{},productModalElement:"",categorys:[{english:"selectSet",chinese:"精選套餐"},{english:"hamburger",chinese:"漢堡"},{english:"toast",chinese:"現烤吐司"},{english:"sandwich",chinese:"現烤總匯"},{english:"snack",chinese:"中西式點心"},{english:"omelet",chinese:"蛋餅、河粉蛋餅"}]}},methods:{openModal(r){this.tempProduct={...r},this.productModalElement.show()},...P(k,["loadingStatue"]),...P(O,["addToCart"]),...P(B,["swalError","swalToastTopEnd"])},computed:{...V(k,["products","groupProducts","isLoading"])},mounted(){document.title="鮮堡漢堡 文化店 | 美味鮮堡",this.productModalElement=new I(document.querySelector("#productModal"),{keyboard:!1}),this.productModalElement.hide(),this.loadingStatue(!1)},components:{LoadingDesign:U,FrontProductModal:Ue,FrontProductsList:de}},Ie={class:"w-100 position-relative pb-3"},De={class:"common-hero container"},Ne={class:"hero-banner overflow-hidden rounded rounded-6 rounded-lg-7 mb-3"},qe={class:"list-unstyled overflow-x-auto productsCatalogNav"},Re=["id"];function ze(r,t,i,T,d,f){const b=u("LoadingDesign"),n=u("ProgressiveImage"),h=u("RouterLink"),w=u("FrontProductsList"),s=u("FrontProductModal");return o(),l(_,null,[c(b,{"is-loading":r.isLoading},null,8,["is-loading"]),e("main",Ie,[e("section",De,[e("div",Ne,[c(n,{src:"./assets/images/product-hero.jpg",alt:"",class:"img-fluid object-fit-cover object-position-center"})]),e("ul",qe,[(o(!0),l(_,null,g(d.categorys,(m,v)=>(o(),l("li",{key:v},[c(h,{to:`/products#${m.english}`,class:"btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"},{default:p(()=>[x(a(m.chinese),1)]),_:2},1032,["to"])]))),128))]),(o(!0),l(_,null,g(d.categorys,(m,v)=>(o(),l(_,{key:v},[e("h2",{class:"ls-2 mb-1 text-sm-start text-center","data-aos":"fade-up","data-aos-easing":"liner","data-aos-delay":"30",id:m.english},a(m.chinese),9,Re),c(w,{"open-modal":f.openModal,products:r.products,category:m.chinese},null,8,["open-modal","products","category"])],64))),128)),c(s,{"temp-product":d.tempProduct,"product-modal-element":d.productModalElement},null,8,["temp-product","product-modal-element"])])])],64)}const ot=F(Be,[["render",ze]]);export{ot as default};