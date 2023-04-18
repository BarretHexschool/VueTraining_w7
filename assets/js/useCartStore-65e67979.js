import{d,r as h}from"./index-e7bebd4e.js";import{a as s}from"./axios-aba6f0e0.js";import{s as g,S as l}from"./useSweetAlertStore-fe839837.js";const e=g(),{VITE_APP_URL:o,VITE_APP_PATH:i}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"2259buyer",BASE_URL:"/VueTraining_w7/",MODE:"production",DEV:!1,PROD:!0},m=d("cart",{state:()=>({carts:[],finalTotal:null,cartDetailNum:null,actionPage:null}),actions:{getActionPage(){this.actionPage=h.options.history.location},getCartData(t){s.get(`${o}/v2/api/${i}/cart`).then(a=>{this.getActionPage(),this.carts=a.data.data.carts,this.actionPage==="/cart"&&this.cartDataExist()}).catch(a=>{e.swalError(a)})},cartDataExist(){this.carts.length===0&&(h.push("/products"),l.fire({icon:"info",showConfirmButton:!1,title:"Oops! 你還沒選任何東西，來去挑想吃的吧~",timer:3e3}))},deleteOneCart(t=null){s.delete(`${o}/v2/api/${i}/cart/${t}`).then(a=>{e.swalToastTopEnd(a.data.message),this.getCartData()}).catch(a=>{e.swalError(a)})},updateCart(t){const{product_id:a,qty:n}=t,r={product_id:a,qty:n};this.loadingItem=t.id,s.put(`${o}/v2/api/${i}/cart/${t.id}`,{data:r}).then(c=>{e.swalToastTopEnd(c.data.message),this.loadingItem="",this.getCartData()}).catch(c=>{e.swalError(c)})},swalClearAllCart(){l.fire({title:"真的要清掉已選好商品嗎？",text:"清除後，只能重新挑選商品，無法復原唷 :(",icon:"warning",showCancelButton:!0,confirmButtonText:"堅決清空重來",cancelButtonText:"先不用"}).then(t=>{t.isConfirmed&&this.cleanAllCart()})},cleanAllCart(){s.delete(`${o}/v2/api/${i}/carts`).then(t=>{l.fire("購物車已清空，重新選新的餐點吧！"),this.getCartData()}).catch(t=>{e.swalError(t)})},addToCart(t,a=1){const n={product_id:t,qty:a,message:""};s.post(`${o}/v2/api/${i}/cart`,{data:n}).then(r=>{e.swalToastTopEnd(r.data.message),this.getCartData()}).catch(r=>{e.swalError(r)})}},getters:{}});export{m as c};