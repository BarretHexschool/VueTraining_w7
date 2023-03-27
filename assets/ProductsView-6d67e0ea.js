import{v as k,a as r}from"./runtime-dom.esm-bundler-cc91c085.js";import{_ as v,l,V as a,W as t,a0 as U,a3 as M,$ as m,a5 as n,a1 as f,k as p,Y as b}from"./_plugin-vue_export-helper-705f5c90.js";import{A as C,M as x}from"./AdminPagination-e0a2859c.js";import"./base-component-44aab0bc.js";const $={props:["products","openModal","changeState"]},A={class:"table table-hover mt-4"},T=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",{width:"200"},"產品名稱"),t("th",{width:"100"},"原價"),t("th",{width:"100"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"100"},"功能")])],-1),D={width:"120"},E={width:"200",class:"w-100 d-flex align-items-center"},N=["src"],L={width:"100"},I={width:"100"},S={width:"100"},B={class:"form-check form-switch"},R=["onUpdate:modelValue","onChange"],q={width:"100"},H={class:"btn-group"},O=["onClick"],j=["onClick"];function F(d,o,e,y,u,c){return l(),a("table",A,[T,t("tbody",null,[(l(!0),a(U,null,M(e.products,s=>(l(),a("tr",{key:s.id},[t("th",D,m(s.category),1),t("td",E,[t("img",{class:"w-25 pe-1",src:s.imageUrl},null,8,N),t("p",null,m(s.title),1)]),t("td",L,m(s.origin_price),1),t("td",I,m(s.price),1),t("td",S,[t("div",B,[n(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"changeStatus","onUpdate:modelValue":i=>s.is_enabled=i,"true-value":1,"false-value":0,onChange:i=>e.changeState(s)},null,40,R),[[k,s.is_enabled]])])]),t("td",q,[t("div",H,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:i=>e.openModal("edit",s)}," 編輯 ",8,O),t("button",{type:"button",class:"btn btn-outline-danger",onClick:i=>e.openModal("delete",s)}," 刪除 ",8,j)])])]))),128))])])}const W=v($,[["render",F]]),Y={props:["tempProduct","isNew","updateProduct","createImages"],template:"#product-modal-template"},z={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},G={class:"modal-dialog modal-xl"},J={class:"modal-content border-0"},K={class:"modal-header bg-dark text-white"},Q={id:"productModalLabel",class:"modal-title"},X={key:0},Z={key:1},tt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),et={class:"modal-body"},ot={class:"row"},st={class:"col-sm-4"},dt={class:"mb-3"},lt=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),at=["src"],nt=t("h3",{class:"mb-3"},"多圖新增",-1),it={key:0},ct={class:"mb-3"},rt=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),ut=["onUpdate:modelValue"],mt=["src"],_t={key:0},ht={key:1},pt={key:1},bt={class:"col-sm-8"},gt={class:"mb-3"},Pt=t("h2",{class:"fs-6 fw-bold mb-2"},"產品名稱(完整)",-1),ft=t("h3",{class:"fs-6"},null,-1),vt={class:"mb-3"},yt=t("label",{for:"title",class:"form-label"},"標題(MainTaitle)",-1),wt={class:"row"},kt={class:"mb-3 col-md-6"},Ut=t("label",{for:"category",class:"form-label"},"分類",-1),xt={class:"mb-3 col-md-6"},Mt=t("label",{for:"price",class:"form-label"},"單位",-1),Vt={class:"row"},Ct={class:"mb-3 col-md-6"},$t=t("label",{for:"origin_price",class:"form-label"},"原價",-1),At={class:"mb-3 col-md-6"},Tt=t("label",{for:"price",class:"form-label"},"售價",-1),Dt=t("hr",null,null,-1),Et={class:"mb-3"},Nt=t("label",{for:"description",class:"form-label"},"產品描述",-1),Lt={class:"mb-3"},It=t("label",{for:"content",class:"form-label"},"說明內容",-1),St={class:"mb-3"},Bt={class:"form-check"},Rt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),qt={class:"form-check"},Ht=t("label",{class:"form-check-label",for:"is_select"},"是否有客製選項 *若要新增客製化選項商品，請通知管理者*",-1),Ot={class:"modal-footer"},jt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ft(d,o,e,y,u,c){return l(),a("div",z,[t("div",G,[t("div",J,[t("div",K,[t("h5",Q,[e.isNew?(l(),a("span",X,"新增產品")):(l(),a("span",Z,"編輯產品"))]),tt]),t("div",et,[t("div",ot,[t("div",st,[t("div",dt,[lt,n(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[r,e.tempProduct.imageUrl]]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl},null,8,at)]),nt,Array.isArray(e.tempProduct.imagesUrl)?(l(),a("div",it,[(l(!0),a(U,null,M(e.tempProduct.imagesUrl,(s,i)=>(l(),a("div",{class:"mb-1",key:i},[t("div",ct,[rt,n(t("input",{"onUpdate:modelValue":w=>e.tempProduct.imagesUrl[i]=w,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,ut),[[r,e.tempProduct.imagesUrl[i]]])]),t("img",{class:"img-fluid",src:s},null,8,mt)]))),128)),!e.tempProduct.imagesUrl.length||e.tempProduct.imagesUrl[e.tempProduct.imagesUrl.length-1]?(l(),a("div",_t,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=s=>e.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(l(),a("div",ht,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[2]||(o[2]=s=>e.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(l(),a("div",pt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[3]||(o[3]=(...s)=>e.createImages&&e.createImages(...s))}," 新增圖片 ")]))]),t("div",bt,[t("div",gt,[Pt,ft,f(" "+m(e.tempProduct.is_select?e.tempProduct.title:e.tempProduct.title=e.tempProduct.mainTitle),1)]),t("div",vt,[yt,n(t("input",{id:"title","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.mainTitle=s),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[r,e.tempProduct.mainTitle]])]),t("div",wt,[t("div",kt,[Ut,n(t("input",{id:"category","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.category=s),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[r,e.tempProduct.category]])]),t("div",xt,[Mt,n(t("input",{id:"unit","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[r,e.tempProduct.unit]])])]),t("div",Vt,[t("div",Ct,[$t,n(t("input",{id:"origin_price","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[r,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",At,[Tt,n(t("input",{id:"price","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[r,e.tempProduct.price,void 0,{number:!0}]])])]),Dt,t("div",Et,[Nt,n(t("textarea",{id:"description","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.description=s),type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
                `,512),[[r,e.tempProduct.description]])]),t("div",Lt,[It,n(t("textarea",{id:"description","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.content=s),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
                `,512),[[r,e.tempProduct.content]])]),t("div",St,[t("div",Bt,[n(t("input",{id:"is_enabled","onUpdate:modelValue":o[11]||(o[11]=s=>e.tempProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[k,e.tempProduct.is_enabled]]),Rt]),t("div",qt,[n(t("input",{id:"is_select","onUpdate:modelValue":o[12]||(o[12]=s=>e.tempProduct.is_select=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,disabled:""},null,512),[[k,e.tempProduct.is_select]]),Ht])])])])]),t("div",Ot,[jt,t("button",{type:"button",class:"btn btn-primary",onClick:o[13]||(o[13]=(...s)=>e.updateProduct&&e.updateProduct(...s))}," 確認 ")])])])],512)}const Wt=v(Y,[["render",Ft]]),Yt={props:["tempProduct","delProduct"],template:"#del-modal-template"},zt={id:"delProductModal",ref:"delProductModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Gt={class:"modal-dialog modal-dialog-centered"},Jt={class:"modal-content border-0"},Kt=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Qt={class:"modal-body"},Xt={class:"text-danger"},Zt=t("br",null,null,-1),te={class:"modal-footer"},ee=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function oe(d,o,e,y,u,c){return l(),a("div",zt,[t("div",Gt,[t("div",Jt,[Kt,t("div",Qt,[f(" 是否刪除 "),t("strong",Xt,m(e.tempProduct.title),1),Zt,f("(刪除後將無法恢復)。 ")]),t("div",te,[ee,t("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...s)=>e.delProduct&&e.delProduct(...s))}," 確認刪除 ")])])])],512)}const se=v(Yt,[["render",oe]]),{VITE_APP_URL:_,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w7/",MODE:"production",DEV:!1,PROD:!0};let g="",P="";const de={data(){return{products:[],tempProduct:{imagesUrl:[]},isNew:!1,pageData:{}}},methods:{getProducts(d=1){this.$http.get(`${_}/v2/api/${h}/admin/products?page=${d}`).then(o=>{this.products=o.data.products,this.pageData=o.data.pagination}).catch(o=>{alert(o.response.data.message)})},productDetail(d){this.tempProduct=d},updateProduct(){let d=`${_}/v2/api/${h}/admin/product`,o="post";this.isNew||(d=`${_}/v2/api/${h}/admin/product/${this.tempProduct.id}`,o="put"),this.$http[o](d,{data:this.tempProduct}).then(e=>{alert(e.data.message),g.hide(),this.getProducts()}).catch(e=>{alert(e.response.data.message)})},delProduct(){this.$http.delete(`${_}/v2/api/${h}/admin/product/${this.tempProduct.id}`).then(d=>{alert(d.data.message),P.hide(),this.getProducts()}).catch(d=>{alert(d.responsel.data.message),P.hide()})},changeState(d){this.$http.put(`${_}/v2/api/${h}/admin/product/${d.id}`,{data:d}).then(o=>{console.log(o),alert(o.data.message),this.getProducts()}).catch(o=>{alert(o.response.data.message)})},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.pus("")},openModal(d,o){d==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,g.show()):d==="edit"?(this.tempProduct={...o},this.isNew=!1,g.show()):d==="delete"&&(this.tempProduct={...o},P.show())}},components:{AdminProductList:W,AdminProductModal:Wt,AdminDelProductModal:se,AdminPagination:C},mounted(){this.getProducts(),g=new x(document.querySelector("#productModal"),{keyboard:!1}),P=new x(document.querySelector("#delProductModal"),{keyboard:!1}),document.title="產品管理 | 鮮堡漢堡 文化店"}},le={class:"container"},ae={class:"row py-3"},ne={class:"d-flex justify-content-center"};function ie(d,o,e,y,u,c){const s=p("admin-product-list"),i=p("admin-pagination"),w=p("admin-product-modal"),V=p("admin-del-product-modal");return l(),a(U,null,[t("div",le,[t("div",ae,[t("div",null,[t("h2",null,[f(" 產品列表 "),t("button",{onClick:o[0]||(o[0]=ce=>c.openModal("new")),type:"button",class:"btn btn-primary"}," 新增產品 ")]),b(s,{products:u.products,"open-modal":c.openModal,"change-state":c.changeState},null,8,["products","open-modal","change-state"]),t("div",ne,[b(i,{"page-data":u.pageData,"get-products":c.getProducts},null,8,["page-data","get-products"])])])])]),b(w,{"temp-product":u.tempProduct,"is-new":u.isNew,"update-product":c.updateProduct},null,8,["temp-product","is-new","update-product"]),b(V,{"temp-product":u.tempProduct,"del-product":c.delProduct},null,8,["temp-product","del-product"])],64)}const he=v(de,[["render",ie]]);export{he as default};
