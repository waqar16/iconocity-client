(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{6354:function(e,t,s){Promise.resolve().then(s.bind(s,8064))},8064:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return el}});var l=s(7437),r=s(2265),a=s(8137),n=s(9733),i=s(9354),o=s(7019),c=s(5733);let d=r.forwardRef((e,t)=>{let{className:s,type:r,...a}=e;return(0,l.jsx)("input",{type:r,className:(0,i.cn)("flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black focus-visible:outline-none  focus-visible:ring-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",s),ref:t,...a})});d.displayName="Input",r.forwardRef((e,t)=>{let{className:s,...a}=e,[n,u]=r.useState(!1);return(0,l.jsxs)("div",{className:"relative group",children:[(0,l.jsx)(d,{type:n?"text":"password",className:(0,i.cn)("pr-10",s),ref:t,...a}),(0,l.jsx)("button",{type:"button",className:"absolute top-1/2 text-primary-500 -translate-y-1/2 right-3 items-center z-10 cursor-pointer flex",onClick:()=>{u(!n)},children:n?(0,l.jsx)(o.Z,{size:16}):(0,l.jsx)(c.Z,{size:16})})]})}).displayName="PasswordInput";let u=(0,r.createContext)({selectedProjectId:null,setSelectedProjectId:()=>{},selectedProjectHistoryId:null,setSelectedProjectHistoryId:()=>{}}),x=e=>{let{children:t}=e,[s,a]=(0,r.useState)(null),[n,i]=(0,r.useState)(null);return(0,l.jsx)(u.Provider,{value:{selectedProjectId:s,setSelectedProjectId:a,selectedProjectHistoryId:n,setSelectedProjectHistoryId:i},children:t})};var p=s(3811),h=s(9555);let m=async e=>{let{project_id:t,query:s}=e;return(await p.Z.post("query/UpdateIconsByQuery/",{project_id:t,query:s})).data},v=()=>{let e=(0,h.useQueryClient)();return(0,h.useMutation)({mutationFn:m,onSuccess:()=>{e.invalidateQueries({queryKey:["project-history"]})},onError:e=>{var t,s;console.log((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message))}})};var g=s(994),f=s(6648),j=e=>{let{keywords:t}=e,{selectedProjectId:s}=(0,r.useContext)(u),[i,o]=(0,r.useState)(""),[c,x]=(0,r.useState)([]),p=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(p.current){var e;null===(e=p.current)||void 0===e||e.scrollTo({top:p.current.scrollHeight,behavior:"smooth"})}},[c]);let{mutate:h,isLoading:m}=v(),j=e=>{if(e.preventDefault(),!i.trim())return;let t={id:Date.now().toString(),content:i,isUser:!0};x(e=>[...e,t]);let l={id:Date.now().toString(),content:"",isUser:!1};x(e=>[...e,l]),o(""),h({project_id:s,query:i},{onSuccess:e=>{x(t=>{let s=t[t.length-1];return s.isUser?t:[...t.slice(0,-1),{...s,content:e.query_response}]})},onError(){x(e=>{let t=e[e.length-1];return t.isUser?e:[...e.slice(0,-1),{...t,content:"Please retry with a different query and be specific in your request."}]})}})},b=(0,r.useCallback)(()=>{x([])},[]);return(0,r.useEffect)(()=>{o(t.join(", "))},[t]),(0,l.jsxs)("div",{className:"relative bg-chatbot-gradient border border-[#1C2037] rounded-2xl px-8 py-5 mt-5",children:[(0,l.jsxs)("div",{className:"flex items-center bg-[#1C2038] border border-[#2D3033] focus-within:border-white rounded-lg mt-4 py-2 pl-3 pr-3",children:[(0,l.jsx)(d,{type:"text",value:i,onChange:e=>o(e.target.value),onKeyDown:e=>{"Enter"!==e.key||m||j(e)},placeholder:"Type your request",className:"text-white placeholder:text-[#7C7F99] flex-1 bg-transparent border-none"}),(0,l.jsx)(n.z,{type:"submit",onClick:j,disabled:m,className:"bg-transparent border border-white px-3",children:(0,l.jsx)(g.Z,{className:"w-5 h-auto text-[#BAC0DD]"})})]}),c.length>0?(0,l.jsx)("div",{className:"h-[300px] space-y-5 mt-9  overflow-y-auto custom-scrollbar",ref:p,children:c.map(e=>(0,l.jsxs)("div",{className:"w-[90%] flex gap-5 ",children:[(0,l.jsx)(f.default,{src:e.isUser?"/generate/profile4.png":"/generate/chat-ai.svg",width:300,height:300,alt:"profile",className:" w-5 h-5 shrink-0 object-cover rounded-full"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-base text-white font-semibold",children:e.isUser?"User":"AI"}),!m||e.isUser||e.content?(0,l.jsx)("p",{className:"text-sm text-[#BAC0DD] leading-6 font-light",children:e.content}):(0,l.jsx)("div",{className:"ml-1.5 dot-falling mt-2"})]})]},e.id))}):(0,l.jsx)("div",{className:"h-[300px] flex items-center justify-center",children:(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 text-white",children:[(0,l.jsx)(a.P.message,{}),(0,l.jsx)("p",{className:"text-xs",children:"Type your icon design requests here"})]})}),c.length>0&&(0,l.jsx)("p",{className:"absolute top-3 right-7 text-white hover:text-blue-500 font-normal text-xs underline cursor-pointer",onClick:()=>b(),children:"Clear Chat"}),(0,l.jsx)("p",{className:"text-xs text-[#BAC0DD] text-center font-light mt-3",children:"Iconocity can make mistakes. Be specific in your requests."})]})},b=s(7776);let y=async e=>{let{project_id:t,new_name:s}=e;return(await p.Z.post("app/changeProjectName/",{project_id:t,new_name:s})).data},w=()=>{let e=(0,h.useQueryClient)();return(0,h.useMutation)({mutationFn:y,onSuccess:t=>{b.A.success(t.success||"Update project name!"),e.invalidateQueries({queryKey:["get-project-list"]})},onError:e=>{var t,s;b.A.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message))}})};var N=s(2649);let C=async()=>(await p.Z.get("app/getProjectList")).data,k=()=>(0,h.useQuery)({queryKey:["get-project-list"],queryFn:C,onError:e=>{var t,s,l;(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.status)===401?(N.Z.remove("token"),window.location.href="/auth/signup"):b.A.error((null==e?void 0:null===(l=e.response)||void 0===l?void 0:null===(s=l.data)||void 0===s?void 0:s.error)||(null==e?void 0:e.message))}});var S=s(9627),F=s(374),D=s(2421),E=()=>{let{setSelectedProjectId:e,selectedProjectId:t}=(0,r.useContext)(u),[s,o]=(0,r.useState)(!1),[c,x]=(0,r.useState)(""),[p,h]=(0,r.useState)(""),m=(0,r.useRef)(null);(0,r.useEffect)(()=>{m.current&&(m.current.style.height=s?"".concat(m.current.scrollHeight,"px"):"130px")},[s]);let{data:v,isSuccess:g,isLoading:f}=k();(0,r.useEffect)(()=>{!t&&v&&(null==v?void 0:v.length)&&e(v[0].id)},[g]);let j=(e,t)=>{h(e),x(t)},{mutateAsync:b}=w(),y=async e=>{try{await b({project_id:e,new_name:c}),h("")}catch(e){console.error("Error updating project name:",e)}};return(0,l.jsxs)("div",{className:"border-b border-[#1C2037] pb-4 2xl:pb-7 px-6 mt-5 2xl:mt-10",children:[(0,l.jsxs)("h2",{className:"flex items-center gap-2 text-base text-[#BAC0DD] font-medium px-5",children:[(0,l.jsx)(a.P.file,{}),"Your projects"]}),f?(0,l.jsx)("div",{className:"py-16 flex justify-center",children:(0,l.jsx)(S.Z,{className:"size-8 animate-spin"})}):(null==v?void 0:v.length)?(0,l.jsx)("div",{ref:m,className:"overflow-hidden transition-all duration-500 ease-in-out mt-3",style:{height:"130px"},children:v&&(null==v?void 0:v.map(s=>{let{id:r,name:o}=s;return(0,l.jsxs)("div",{onClick:()=>e(r),className:(0,i.cn)("flex items-center gap-5 justify-between rounded-md hover:bg-[#22263e] cursor-pointer pl-14 pr-5 py-3 ",t===r?"bg-[#22263e]":"bg-transparent"),children:[(0,l.jsx)(d,{value:p===r?c||"":o,onChange:e=>x(e.target.value),className:(0,i.cn)("h-0 text-base bg-transparent   px-0",p===r?"border border-white py-4 cursor-pointer px-2":" border-none"),readOnly:p!==r}),(0,l.jsxs)("div",{className:"flex items-center",children:[p!==r&&(0,l.jsx)(n.z,{onClick:()=>j(r,o),className:"h-0 px-0",children:(0,l.jsx)(a.P.Edit,{className:"w-4 h-auto hover:scale-125"})}),p===r&&(0,l.jsx)(n.z,{onClick:()=>y(r),className:"h-0 px-0 text-sm",children:(0,l.jsx)(F.Z,{className:"w-5 h-auto hover:scale-125"})})]})]},r)}))}):"",!f&&v&&(null==v?void 0:v.length)>3&&(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsxs)(n.z,{onClick:()=>{o(!s)},className:"flex gap-3 text-white bg-transparent hover:bg-[#22263e] 2xl:mt-2",children:[s?"Show less":"See all",(0,l.jsx)(D.Z,{className:(0,i.cn)("transition-all duration-500 ease-in-out",s&&"rotate-180")})]})})]})},A=s(5526);let P=async e=>(await p.Z.post("app/getProjectHistoryList/",{project_id:e})).data,Z=e=>(0,h.useQuery)({queryKey:["project-history",e],queryFn:()=>P(e),enabled:!!e,onError:e=>{var t,s;b.A.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message))}});var U=()=>{let[e,t]=(0,r.useState)("");(0,r.useEffect)(()=>{t(N.Z.get("profile_image")||"/profile.svg")},[]);let{selectedProjectId:s,setSelectedProjectHistoryId:a,selectedProjectHistoryId:o}=(0,r.useContext)(u),[c,d]=(0,r.useState)(!1),x=(0,r.useRef)(null);(0,r.useEffect)(()=>{x.current&&(x.current.style.height=c?"".concat(x.current.scrollHeight,"px"):"250px")},[c]);let{data:p,isSuccess:h,isLoading:m}=Z(s);return(0,r.useEffect)(()=>{p&&(null==p?void 0:p.length)&&a(p[0].history_id)},[h,p]),(0,l.jsxs)("div",{className:" pb-7 px-6 mt-5 2xl:mt-10",children:[(0,l.jsx)("div",{className:"flex items-center justify-between text-[#BAC0DD]",children:(0,l.jsxs)("h2",{className:"flex items-center gap-2 text-base font-normal px-5",children:[(0,l.jsx)(A.Z,{className:"w-4 h-auto"}),"History"]})}),m?(0,l.jsx)("div",{className:"py-16 flex justify-center",children:(0,l.jsx)(S.Z,{className:"size-8 animate-spin"})}):(null==p?void 0:p.length)?(0,l.jsx)("div",{ref:x,className:"overflow-hidden transition-all duration-500 ease-in-out mt-4 ",style:{height:"250px"},children:p&&p.slice(0,c?p.length:3).map(t=>{let{history_id:s,history_date:r,name:n}=t;return(0,l.jsxs)("div",{onClick:()=>a(s),className:(0,i.cn)("hover:bg-[#22263e] rounded-md px-10 py-3 mb-2",o===s?"bg-[#22263e]":"bg-transparent"),children:[(0,l.jsx)("h1",{className:"text-sm font-bold",children:new Date(r).toLocaleString()}),(0,l.jsxs)("div",{className:"flex gap-2 mt-2",children:[(0,l.jsx)(f.default,{src:e||"/profile.svg",width:40,height:40,alt:"profile",className:"w-6 h-6 rounded-full object-cover"}),(0,l.jsx)("p",{className:"text-sm",children:n})]})]},s)})}):"",!m&&p&&(null==p?void 0:p.length)>3&&(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsxs)(n.z,{onClick:()=>{d(!c)},className:"flex gap-3 text-white bg-transparent hover:bg-[#22263e] mt-2",children:[c?"Show less":"See all",(0,l.jsx)(D.Z,{className:(0,i.cn)("transition-all duration-500 ease-in-out",c&&"rotate-180")})]})})]})},_=()=>(0,l.jsxs)("div",{className:"w-72 xl:w-80 2xl:w-96 h-[calc(100vh-74px)] overflow-y-auto hide-scrollbar bg-[#080e28] border-r border-t border-[#1C2037] text-white rounded-tr-[24px]",children:[(0,l.jsx)(E,{}),(0,l.jsx)(U,{})]}),I=s(3274);let z=["#000","#0000FF","#7FFF00","#00FFFF","#808080","#008000","#FFA500","#FF0000","#FF007F","#00FF7F","#EE82EE","#ffffff","#FFFF00"],q=[{icon:(0,l.jsx)(a.P.OutlineStar,{}),text:"Outline",id:"outline"},{icon:(0,l.jsx)(a.P.FillStar,{}),text:"Fill",id:"fill"},{icon:(0,l.jsx)(a.P.LinerColorStar,{}),text:"Linear color",id:"lineal-color"},{icon:(0,l.jsx)(a.P.HandDrownStar,{}),text:"HandDrawn ",id:"hand-drawn"}];var L=e=>{let{themeColor:t,setThemeColor:s,setSelectedIconStyle:a,selectedIconStyle:o}=e,[c,d]=(0,r.useState)(!1),u=e=>{a(e)};return(0,l.jsxs)("div",{className:"bg-colorPicker-gradient border  border-[#1C2037] rounded-2xl p-3 xl:p-5",children:[(0,l.jsx)("h1",{className:"text-base text-[#BAC0DD] ",children:"Select colors"}),(0,l.jsx)("div",{className:"flex justify-between mt-2 2xl:mt-3",children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2",children:z.map((e,r)=>(0,l.jsx)("div",{className:(0,i.cn)("w-6 2xl:w-8 h-6 2xl:h-8  rounded-full cursor-pointer",t===e?"border-2 border-white scale-110":""),style:{backgroundColor:e},onClick:()=>s(e)},r))})}),(0,l.jsxs)("div",{className:"mt-5 xl:mt-7",children:[(0,l.jsx)("h1",{className:"text-base text-[#BAC0DD]",children:"Select shape"}),(0,l.jsx)("div",{className:"flex flex-wrap gap-3 mt-2",children:q.map((e,t)=>{let{text:s,icon:r,id:a}=e;return(0,l.jsxs)(n.z,{onClick:()=>u(a),className:(0,i.cn)("flex gap-1 bg-[#1C223F] hover:bg-[#080e28] rounded-3xl px-3 2xl:px-4 py-2",o===a?"bg-[#080e28] border border-white":"border border-transparent"),children:[r,(0,l.jsx)("span",{className:"text-xs 2xl:text-sm text-white",children:s})]},t)})})]})]})},B=s(8746),Q=s(9687),R=s(4697),H=e=>{let{onFileUpload:t,uploadedFiles:s,setUploadedFiles:r,isDisabled:n}=e,{getRootProps:o,getInputProps:c}=(0,B.uI)({onDrop:e=>{e.length>0&&t(e[0])},accept:{"image/jpeg":[".jpg",".jpeg"],"image/png":[".png"]},multiple:!1,disabled:n});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex items-center justify-between px-6 pb-6",children:[(0,l.jsx)("h1",{className:"text-base text-[#BAC0DD]",children:"Upload Design"}),(0,l.jsx)(Q.Z,{})]}),(0,l.jsxs)("div",{...o(),className:(0,i.cn)("border-2 border-dashed border-white rounded-lg py-6 mx-6",!0===n?"cursor-not-allowed":"cursor-pointer"),children:[(0,l.jsx)("input",{...c()}),(0,l.jsx)(a.P.Upload,{className:"w-7 h-auto mx-auto"}),(0,l.jsx)("p",{className:"text-xs text-[#7C7F99] text-center mt-2",children:"Drag & Drop or Choose file to upload"}),(0,l.jsxs)("div",{className:"flex gap-2 justify-center text-xs text-[#BAC0DD] text-center mt-2",children:[(0,l.jsx)("span",{children:"PNG "}),(0,l.jsx)("span",{children:"JPG "})]})]}),s&&(0,l.jsxs)("div",{className:"flex items-start justify-between bg-link-added-gradient border border-[#32344A] rounded-lg mx-6 mt-6 p-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-3 ",children:[s.type.startsWith("image/")?(0,l.jsx)("img",{src:URL.createObjectURL(s),alt:"Uploaded Thumbnail",className:"w-16 h-16 object-cover rounded-lg"}):(0,l.jsx)(a.P.UploadFile,{}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("span",{className:"text-sm text-white",children:s.name}),(0,l.jsxs)("span",{className:"text-[12px] text-[#BAC0DD]",children:[(s.size/1024).toFixed(2)," KB"]})]})]}),(0,l.jsx)(R.Z,{className:"cursor-pointer hover:scale-125",onClick:()=>{r(null)}})]})]})};let K=async e=>{let{screen_link:t,icon_color:s,icon_style:l}=e;return(await p.Z.post("app/imageLink/",{screen_link:t,icon_color:s,icon_style:l})).data},O=()=>{let e=(0,h.useQueryClient)();return(0,h.useMutation)({mutationFn:K,onSuccess:t=>{b.A.success(t.success||"Url has been processed Successfully!"),e.invalidateQueries({queryKey:["get-project-list"]})},onError:e=>{var t,s;b.A.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message))}})},M=async e=>(await p.Z.post("app/uploadImage/",e)).data,T=()=>{let e=(0,h.useQueryClient)();return(0,h.useMutation)({mutationFn:M,onSuccess:t=>{b.A.success("Image has been processed Successfully!"),e.invalidateQueries({queryKey:["get-project-list"]})},onError:e=>{var t,s;b.A.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message))}})};var G=e=>{let{url:t,setUrl:s,addedLink:r,setAddedLink:a,uploadedFile:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex gap-4 items-center bg-link-added-gradient border border-[#32344A] rounded-lg mx-6 py-1 2xl:py-2 px-5",children:[(0,l.jsx)(d,{type:"url",placeholder:"Add file URL",value:t,onChange:e=>s(e.target.value),disabled:!!i,className:"placeholder:text-[#7C7F99] border-none bg-transparent px-0"}),(0,l.jsx)(n.z,{onClick:()=>{t&&(a(t),s(""))},disabled:!t,className:"text-base bg-transparent hover:bg-transparent px-0",children:"Upload"})]}),r&&r.length>0&&(0,l.jsx)("div",{className:"flex flex-col gap-3 bg-link-added-gradient border border-[#32344A] rounded-lg mt-4 mx-6  p-3",children:(0,l.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,l.jsx)("p",{className:"scrollbar-hide w-[85%] text-[10px] text-blue-400 overflow-auto",children:r}),(0,l.jsx)(n.z,{onClick:()=>a(null),className:"text-sm text-red-400 px-0 bg-transparent hover:bg-transparent h-0",children:(0,l.jsx)(R.Z,{className:"w-4 h-auto text-white hover:scale-125"})})]})})]})},J=e=>{let{setKeywords:t}=e,{setSelectedProjectId:s}=(0,r.useContext)(u),[a,o]=(0,r.useState)(null),[c,d]=(0,r.useState)(),[x,p]=(0,r.useState)(""),[h,m]=(0,r.useState)(null),[v,g]=(0,r.useState)(),{mutateAsync:f,isLoading:j}=O(),{mutateAsync:b,isLoading:y}=T(),w=async()=>{try{var e,l,r,n,i,u;let x={screen_link:h};if(c&&(x.icon_color=c),v&&(x.icon_style=v),a){let n=new FormData;n.append("image",a),c&&n.append("icon_color",c),v&&n.append("icon_style",v);let i=await b(n,{onSuccess(e){s(e.id),d(""),g("")}});t(null==i?void 0:null===(e=i.attributes)||void 0===e?void 0:e.keywords.slice(1,4)),console.log("data2?.attributes?.keywords.slice(1,4)",null==i?void 0:null===(l=i.attributes)||void 0===l?void 0:l.keywords.slice(1,4)),localStorage.setItem("keywords",JSON.stringify(null==i?void 0:null===(r=i.attributes)||void 0===r?void 0:r.keywords.slice(1,4)))}if(h){let e=await f(x,{onSuccess(e){s(e.id),d(""),g("")}});t(null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:n.keywords.slice(1,4)),console.log("data2?.attributes?.keywords.slice(1,4)",null==e?void 0:null===(i=e.attributes)||void 0===i?void 0:i.keywords.slice(1,4));let l=null==e?void 0:null===(u=e.attributes)||void 0===u?void 0:u.keywords.slice(1,4).map(e=>e.replace(/['"]+/g,"").trim());localStorage.setItem("keywords",JSON.stringify(l))}o(null),m(null)}catch(e){console.error(e)}};return(0,l.jsxs)("div",{className:"h-[calc(100vh-74px)] w-72 xl:w-80 2xl:w-96 bg-[#080e28] text-white rounded-tl-[24px] p-4 xl:p-5 overflow-y-auto hide-scrollbar",children:[(0,l.jsx)(L,{setThemeColor:d,themeColor:c,setSelectedIconStyle:g,selectedIconStyle:v}),(0,l.jsxs)("div",{className:"bg-colorPicker-gradient border  border-[#1C2037] rounded-2xl py-4 mt-6",children:[(0,l.jsx)(H,{onFileUpload:e=>{o(e)},uploadedFiles:a,setUploadedFiles:o,isDisabled:!!h}),(0,l.jsxs)("div",{className:"flex items-center gap-3 my-4",children:[(0,l.jsx)("div",{className:"w-full h-[1px] bg-[#1C2037]"}),(0,l.jsx)("span",{className:"text-sm text-[#7C7F99]",children:"or"}),(0,l.jsx)("div",{className:"w-full h-[1px] bg-[#1C2037]"})]}),(0,l.jsx)(G,{url:x,setUrl:p,addedLink:h,setAddedLink:m,uploadedFile:a})]}),(0,l.jsx)("div",{className:"px-4 mt-7",children:(0,l.jsxs)(n.z,{type:"submit",onClick:w,disabled:j||y||!a&&!h,className:(0,i.cn)("flex gap-2 text-base w-full h-10 2xl:h-12 ",j||y||!a&&!h?"border border-[#04ADA3] bg-transparent cursor-not-allowed":"border-none bg-generate-button-gradient"),children:[(j||y)&&(0,l.jsx)(I.Z,{className:"w-4 h-4 animate-spin"}),"Generate"]})})]})};let W=async e=>{let{history_id:t,page_size:s,page:l}=e;return(await p.Z.post("app/getHistoryByHistoryId/",{history_id:t,page_size:s,page:l})).data},Y=e=>{let{history_id:t,page_size:s,page:l}=e;return(0,h.useQuery)({queryKey:["projectIcons",t,s,l],queryFn:()=>W({history_id:t,page_size:s,page:l}),enabled:!!t})};var V=s(518),X=s(7592);let $=async e=>(await p.Z.post("app/similarIconSearch/",{icon_id:e})).data,ee=()=>{let e=(0,h.useQueryClient)();return(0,h.useMutation)({mutationFn:$,onSuccess:t=>(console.log("Icon fetched successfully:",t),e.invalidateQueries({queryKey:["similar-icons"]}),t),onError:e=>{var t,s,l,r;b.A.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message)),console.log((null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(l=r.data)||void 0===l?void 0:l.error)||(null==e?void 0:e.message))}})};var et=s(8472),es=()=>{var e,t;let[s,o]=(0,r.useState)(1),[c,d]=(0,r.useState)(0),[x,h]=(0,r.useState)(!1),[m,v]=(0,r.useState)(1),[g,j]=(0,r.useState)(0),[b,y]=(0,r.useState)([]),[w,N]=(0,r.useState)([]),[C,k]=(0,r.useState)(!1),{selectedProjectHistoryId:F}=(0,r.useContext)(u),{data:D,isLoading:E}=Y({history_id:F,page_size:20,page:s}),A=null!==(t=null==D?void 0:null===(e=D.results)||void 0===e?void 0:e.map(e=>({id:Number(e.id),url:e.url})))&&void 0!==t?t:[];(0,r.useEffect)(()=>{(null==D?void 0:D.count)&&(d(Math.ceil((null==D?void 0:D.count)/20)),A&&y(A))},[D,20]);let{mutate:P,isLoading:Z,data:U}=ee(),_=e=>{P(e),k(!0)};return(0,r.useEffect)(()=>{(null==U?void 0:U.similar_icons)&&(j(Math.ceil((null==U?void 0:U.similar_icons.length)/20)),N(U.similar_icons))},[U]),(0,r.useEffect)(()=>{!C&&A&&y(A)},[s,A,C]),(0,r.useEffect)(()=>{C&&y([])},[C]),(0,l.jsxs)("div",{className:"bg-[#0E142D] border border-[#1C2037] rounded-2xl px-8 py-5",children:[(0,l.jsx)("div",{className:"flex items-center justify-between",children:C?(0,l.jsxs)("button",{onClick:async()=>{let e=w.slice(s+20,s+40);try{h(!0);let t=await et.Z.post("".concat(p.v,"/app/downloadIcons"),{icons:e},{responseType:"blob"}),s=document.createElement("a");s.href=URL.createObjectURL(t.data),s.download="icons.zip",s.click(),h(!1)}catch(e){h(!1),console.error(e)}finally{h(!1)}},className:(0,i.cn)((0,n.d)({variant:"link"}),"h-0 px-0"),children:[(0,l.jsx)(a.P.Download,{}),x?(0,l.jsx)("h3",{className:"text-white ml-1",children:"Downloading..."}):(0,l.jsx)("h3",{className:"text-white ml-1",children:"Download PNG"})]}):(0,l.jsxs)("button",{onClick:async()=>{let e="".concat(p.v,"app/downloadFreePik?history_id=").concat(F,"&page=").concat(s,"&page_size=").concat(20),t=await et.Z.get(e,{responseType:"blob"}),l=document.createElement("a");l.href=URL.createObjectURL(t.data),l.download="icons.zip",l.click()},className:(0,i.cn)((0,n.d)({variant:"link"}),"h-0 px-0"),children:[(0,l.jsx)(a.P.Download,{}),(0,l.jsx)("h3",{className:"text-white ml-1",children:"Download PNG"})]})}),(0,l.jsx)("div",{className:"w-11/12 min-h-[352px] mx-auto flex items-center justify-center bg-[#1C2038] rounded-lg py-5 xl:py-10 3xl:py-7 mt-6",children:E||Z?(0,l.jsx)(S.Z,{className:"text-white size-8 animate-spin"}):(C?w:b).length?(0,l.jsx)("div",{className:"w-10/12 grid grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-4 3xl:gap-6",children:(C?w.slice((m-1)*20+1,20*m+1):b).map(e=>{let{url:t,id:s}=e;return(0,l.jsxs)("div",{className:"relative flex flex-col items-center justify-center group",children:[(0,l.jsx)(f.default,{src:t,width:300,height:300,alt:"svg",className:"w-14 h-14 mx-auto m-2"},s),(0,l.jsx)("div",{className:"".concat(C&&"hidden"," flex flex-col items-center w-4 h-4 bg-black rounded-full absolute left-[90%] bottom-[160%] opacity-0 group-hover:opacity-100 transition-opacity duration-300"),children:(0,l.jsxs)("div",{className:"bg-white rounded-xl p-4 relative h-[40px] w-[180px] flex items-center justify-center",children:[(0,l.jsx)("button",{onClick:()=>{_(s)},className:"text-xs font-bold",children:Z?"Searching...":"Search for similar icon"}),(0,l.jsx)("div",{className:"absolute left-7 bottom-[-6px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-t-white border-l-transparent border-r-transparent"})]})})]},s)})}):(0,l.jsx)("p",{className:"text-white mx-auto text-center",children:"No Icons found!"})}),C&&(0,l.jsxs)("div",{className:"w-full flex flex-row items-center justify-end",children:[(0,l.jsx)("button",{onClick:()=>k(!1),className:"text-white mt-5  mr-6 p-3 bg-[#1C2038] rounded-xl",children:"Go Back"})," "]}),(0,l.jsx)("div",{className:"flex justify-end mt-2",children:(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsxs)("p",{className:"text-white",children:[C?null==U?void 0:U.count:null==D?void 0:D.count," icons"]}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(n.z,{onClick:C?()=>{m>1&&v(m-1)}:()=>{s>1&&(o(s-1),k(!1))},disabled:C?1===m:1===s,className:"h-0 text-black bg-transparent hover:bg-transparent rounded px-0",children:(0,l.jsx)(V.Z,{className:"text-white"})}),(0,l.jsx)("span",{className:"text-white",children:(0,l.jsxs)("strong",{children:[C?m:s," of"," ",C?g:c]})}),(0,l.jsx)(n.z,{onClick:C?()=>{m<g&&v(m+1)}:()=>{s<c&&(o(s+1),k(!1))},disabled:C?m===g:s===c,className:"h-0 text-white bg-transparent hover:bg-transparent rounded px-0",children:(0,l.jsx)(X.Z,{className:"text-white"})})]})]})})]})},el=()=>{let[e,t]=r.useState([]);return r.useEffect(()=>{let e=localStorage.getItem("#keywords");e&&t(JSON.parse(e))},[]),(0,l.jsx)(x,{children:(0,l.jsxs)("div",{className:"flex gap-5 h-full",children:[(0,l.jsx)(_,{}),(0,l.jsxs)("div",{className:"h-[calc(100vh-74px)] flex-1 overflow-y-auto hide-scrollbar pb-10",children:[(0,l.jsx)(es,{}),(0,l.jsx)(j,{keywords:e})]}),(0,l.jsx)(J,{setKeywords:t})]})})}}},function(e){e.O(0,[249,242,801,868,6,830,971,23,744],function(){return e(e.s=6354)}),_N_E=e.O()}]);