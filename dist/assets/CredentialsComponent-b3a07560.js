var i=Object.defineProperty;var o=(t,e,r)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var s=(t,e,r)=>(o(t,typeof e!="symbol"?e+"":e,r),r);import{j as l}from"./index-7ca68f5b.js";var n;(t=>{class e{constructor(a){s(this,"labelText");this.labelText=a}getAllCredentialFields(){return this.labelText.map(a=>l.jsxs("label",{className:"block mt-3 mb-3",htmlFor:a.id,children:[a.labelText," ",l.jsx("input",{required:!0,pattern:a.pattern,className:"outline-blue-950 pl-1 pr-1 rounded-lg m-0 mt-2.5  w-full  bg-input-textarea-color border-input-textarea-color border border-solid focus:border-b-white focus focus:outline-none",id:a.id,type:a.type})]}))}}t.CredentialClass=e})(n||(n={}));const d=n,p=()=>{const t=[{labelText:"Enter Your First Name:",id:"first-name",type:"text"},{labelText:"Enter Your Last Name:",id:"last-name",type:"text"},{labelText:"Enter Your Email:",id:"email",type:"email"},{labelText:"Create a New Passwword:",id:"new-password",type:"password",pattern:"[a-z0-5]{8,}"}],r=new d.CredentialClass(t).getAllCredentialFields();return l.jsx(l.Fragment,{children:r})};export{p as default};
