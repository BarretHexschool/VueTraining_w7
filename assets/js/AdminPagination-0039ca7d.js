import{n}from"./runtime-dom.esm-bundler-eb0e3820.js";import{b6 as o,aj as i,l,m as e,a3 as r,F as c,at as g,aJ as _}from"./_plugin-vue_export-helper-68081c38.js";const d={props:["pageData","getDatas"]},p={"aria-label":"Page navigation example"},m={class:"pagination"},u=e("span",{"aria-hidden":"true"},"«",-1),h=[u],D=["onClick"],f=e("span",{"aria-hidden":"true"},"»",-1),k=[f];function v(b,s,a,x,C,B){return i(),l("nav",p,[e("ul",m,[e("li",{class:r(["page-item",{disabled:!a.pageData.has_pre}])},[e("a",{class:"page-link",href:"#",onClick:s[0]||(s[0]=n(t=>a.getDatas(a.pageData.current_page-1),["prevent"])),"aria-label":"Previous"},h)],2),(i(!0),l(c,null,g(a.pageData.total_pages,t=>(i(),l("li",{class:r(["page-item",{active:t==a.pageData.current_page}]),key:t+"page"},[e("a",{class:"page-link",href:"#",onClick:n(P=>a.getDatas(t),["prevent"])},_(t),9,D)],2))),128)),e("li",{class:r(["page-item",{disabled:!a.pageData.has_next}])},[e("a",{class:"page-link",href:"#",onClick:s[1]||(s[1]=n(t=>a.getDatas(a.pageData.current_page+1),["prevent"])),"aria-label":"Next"},k)],2)])])}const F=o(d,[["render",v]]);export{F as A};
