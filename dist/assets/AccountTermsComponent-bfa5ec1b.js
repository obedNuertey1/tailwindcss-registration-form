var a=Object.defineProperty;var i=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var s=(t,e,r)=>(i(t,typeof e!="symbol"?e+"":e,r),r);import{j as n}from"./index-7ca68f5b.js";var o;(t=>{class e{constructor(c){s(this,"accountTermsArray");this.accountTermsArray=c}getAllAccountFields(){return this.accountTermsArray.map(c=>n.jsxs("label",{className:"block mt-3 mb-3",htmlFor:c.id,children:[n.jsx("input",{className:"outline-blue-950 pl-1 pr-1 rounded m-0 mr-1.5 bg-input-textarea-color border-input-textarea-color border border-solid min-h-full",id:c.id,type:c.type,name:c.name})," ",c.labelText?c.labelText:n.jsx(n.Fragment,{children:c.innerJSX})]}))}}t.AccountField=e})(o||(o={}));const l=o,m=()=>{const t=[{labelText:"Personal Account",type:"radio",name:"account-type",id:"personal-account"},{labelText:"Business Account",type:"radio",name:"account-type",id:"business-account"},{type:"checkbox",id:"terms-and-conditions",innerJSX:n.jsxs(n.Fragment,{children:["I accept the ",n.jsx("a",{className:"underline hover:text-blue-950",href:"https://www.freecodecamp.org/news/terms-of-service/",children:"terms and conditions"})]})}],r=new l.AccountField(t).getAllAccountFields();return n.jsx(n.Fragment,{children:r})};export{m as default};
