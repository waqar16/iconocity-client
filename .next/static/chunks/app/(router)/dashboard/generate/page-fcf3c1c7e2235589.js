(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{9866:function(e,t,s){Promise.resolve().then(s.bind(s,1683))},1683:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return en}});var l=s(7437),r=s(2265),a=s(8137),i=s(9733),n=s(9354),o=s(7019),c=s(5733);let d=r.forwardRef((e,t)=>{let{className:s,type:r,...a}=e;return(0,l.jsx)("input",{type:r,className:(0,n.cn)("flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black focus-visible:outline-none  focus-visible:ring-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",s),ref:t,...a})});d.displayName="Input",r.forwardRef((e,t)=>{let{className:s,...a}=e,[i,u]=r.useState(!1);return(0,l.jsxs)("div",{className:"relative group",children:[(0,l.jsx)(d,{type:i?"text":"password",className:(0,n.cn)("pr-10",s),ref:t,...a}),(0,l.jsx)("button",{type:"button",className:"absolute top-1/2 text-primary-500 -translate-y-1/2 right-3 items-center z-10 cursor-pointer flex",onClick:()=>{u(!i)},children:i?(0,l.jsx)(o.Z,{size:16}):(0,l.jsx)(c.Z,{size:16})})]})}).displayName="PasswordInput";let u=(0,r.createContext)({selectedProjectId:null,setSelectedProjectId:()=>{},selectedProjectHistoryId:null,setSelectedProjectHistoryId:()=>{}}),x=e=>{let{children:t}=e,[s,a]=(0,r.useState)(null),[i,n]=(0,r.useState)(null);return(0,l.jsx)(u.Provider,{value:{selectedProjectId:s,setSelectedProjectId:a,selectedProjectHistoryId:i,setSelectedProjectHistoryId:n},children:t})};var h=s(3811),p=s(9555);let m=async e=>{let{project_id:t,query:s}=e;return(await h.Z.post("query/UpdateIconsByQuery/",{project_id:t,query:s})).data},g=()=>{let e=(0,p.useQueryClient)();return(0,p.useMutation)({mutationFn:m,onSuccess:()=>{e.invalidateQueries({queryKey:["project-history"]})},onError:e=>{var t,s;console.log((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message))}})};var v=s(994),f=s(6648),b=e=>{let{keywords:t,setPageNumber:s,setShowChat:n}=e,{selectedProjectId:o}=(0,r.useContext)(u),[c,x]=(0,r.useState)(""),[h,p]=(0,r.useState)([]),m=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(m.current){var e;null===(e=m.current)||void 0===e||e.scrollTo({top:m.current.scrollHeight,behavior:"smooth"})}},[h]);let{mutate:b,isLoading:j}=g(),w=e=>{if(e.preventDefault(),!c.trim())return;let t={id:Date.now().toString(),content:c,isUser:!0};p(e=>[...e,t]);let l={id:Date.now().toString(),content:"",isUser:!1};p(e=>[...e,l]),x(""),b({project_id:o,query:c},{onSuccess:e=>{s(1),p(t=>{let s=t[t.length-1];return s.isUser?t:[...t.slice(0,-1),{...s,content:e.query_response}]})},onError(){p(e=>{let t=e[e.length-1];return t.isUser?e:[...e.slice(0,-1),{...t,content:"Please retry with a different query and be specific in your request."}]})}})},y=(0,r.useCallback)(()=>{p([])},[]);return(0,r.useEffect)(()=>{x(t.join(", "))},[t]),(0,l.jsxs)("div",{className:"absolute bottom-[-50px] right-[-50px] bg-chatbot-gradient border border-white rounded-2xl px-8 py-5 mt-5 w-[400px] z-[100]",children:[(0,l.jsx)("div",{className:"flex flex-row items center justify-end",children:(0,l.jsx)("svg",{onClick:()=>{n(!1)},className:"cursor-pointer",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z",fill:"white"})})}),(0,l.jsxs)("div",{className:"flex items-center bg-[#1C2038] border border-[#2D3033] focus-within:border-white rounded-lg mt-4 py-2 pl-3 pr-3",children:[(0,l.jsx)(d,{type:"text",value:c,onChange:e=>x(e.target.value),onKeyDown:e=>{"Enter"!==e.key||j||w(e)},placeholder:"Type your request",className:"text-white placeholder:text-[#7C7F99] flex-1 bg-transparent border-none"}),(0,l.jsx)(i.z,{type:"submit",onClick:w,disabled:j,className:"bg-transparent border border-white px-3",children:(0,l.jsx)(v.Z,{className:"w-5 h-auto text-[#BAC0DD]"})})]}),h.length>0?(0,l.jsx)("div",{className:"max-h-[100px] space-y-5 mt-9  overflow-y-auto custom-scrollbar",ref:m,children:h.map(e=>(0,l.jsxs)("div",{className:"w-[90%] flex gap-5 ",children:[(0,l.jsx)(f.default,{src:e.isUser?"/generate/profile4.png":"/generate/chat-ai.svg",width:300,height:300,alt:"profile",className:" w-5 h-5 shrink-0 object-cover rounded-full"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-base text-white font-semibold",children:e.isUser?"User":"AI"}),!j||e.isUser||e.content?(0,l.jsx)("p",{className:"text-sm text-[#BAC0DD] leading-6 font-light",children:e.content}):(0,l.jsx)("div",{className:"ml-1.5 dot-falling mt-2"})]})]},e.id))}):(0,l.jsx)("div",{className:"h-[100px] flex items-center justify-center",children:(0,l.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4 text-white",children:[(0,l.jsx)(a.P.message,{}),(0,l.jsx)("p",{className:"text-xs",children:"Type your icon design requests here"})]})}),h.length>0&&(0,l.jsx)("p",{className:"absolute top-3 right-7 text-white hover:text-blue-500 font-normal text-xs underline cursor-pointer",onClick:()=>y(),children:"Clear Chat"}),(0,l.jsx)("p",{className:"text-xs text-[#BAC0DD] text-center font-light mt-3",children:"Iconocity can make mistakes. Be specific in your requests."})]})},j=s(7776);let w=async e=>{let{project_id:t,new_name:s}=e;return(await h.Z.post("app/changeProjectName/",{project_id:t,new_name:s})).data},y=()=>{let e=(0,p.useQueryClient)();return(0,p.useMutation)({mutationFn:w,onSuccess:t=>{j.A.success(t.success||"Update project name!"),e.invalidateQueries({queryKey:["get-project-list"]})},onError:e=>{var t,s;j.A.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message))}})};var N=s(2649);let C=async()=>(await h.Z.get("app/getProjectList")).data,k=()=>(0,p.useQuery)({queryKey:["get-project-list"],queryFn:C,onError:e=>{var t,s,l;(null==e?void 0:null===(t=e.response)||void 0===t?void 0:t.status)===401?(N.Z.remove("token"),window.location.href="/auth/signup"):j.A.error((null==e?void 0:null===(l=e.response)||void 0===l?void 0:null===(s=l.data)||void 0===s?void 0:s.error)||(null==e?void 0:e.message))}});var S=s(9627),F=s(374),z=s(2421),_=e=>{let{setPageNumber:t}=e,{setSelectedProjectId:s,selectedProjectId:o}=(0,r.useContext)(u),[c,x]=(0,r.useState)(!1),[h,p]=(0,r.useState)(""),[m,g]=(0,r.useState)(""),v=(0,r.useRef)(null);(0,r.useEffect)(()=>{v.current&&(v.current.style.height=c?"".concat(v.current.scrollHeight,"px"):"130px")},[c]);let{data:f,isSuccess:b,isLoading:j}=k();(0,r.useEffect)(()=>{!o&&f&&(null==f?void 0:f.length)&&s(f[0].id)},[b]);let w=(e,t)=>{g(e),p(t)},{mutateAsync:N}=y(),C=async e=>{try{await N({project_id:e,new_name:h}),g("")}catch(e){console.error("Error updating project name:",e)}};return(0,l.jsxs)("div",{className:"border-b border-[#1C2037] pb-4 2xl:pb-7 px-6 mt-5 2xl:mt-10",children:[(0,l.jsxs)("h2",{className:"flex items-center gap-2 text-base text-[#BAC0DD] font-medium px-5",children:[(0,l.jsx)(a.P.file,{}),"Your projects"]}),j?(0,l.jsx)("div",{className:"py-16 flex justify-center",children:(0,l.jsx)(S.Z,{className:"size-8 animate-spin"})}):(null==f?void 0:f.length)?(0,l.jsx)("div",{ref:v,className:"overflow-hidden transition-all duration-500 ease-in-out mt-3",style:{height:"130px"},children:f&&(null==f?void 0:f.map(e=>{let{id:r,name:c}=e;return(0,l.jsxs)("div",{onClick:()=>{t(1),s(r)},className:(0,n.cn)("flex items-center gap-5 justify-between rounded-md hover:bg-[#22263e] cursor-pointer pl-14 pr-5 py-3 ",o===r?"bg-[#22263e]":"bg-transparent"),children:[(0,l.jsx)(d,{value:m===r?h||"":c,onChange:e=>p(e.target.value),className:(0,n.cn)("h-0 text-base bg-transparent   px-0",m===r?"border border-white py-4 cursor-pointer px-2":" border-none"),readOnly:m!==r}),(0,l.jsxs)("div",{className:"flex items-center",children:[m!==r&&(0,l.jsx)(i.z,{onClick:()=>w(r,c),className:"h-0 px-0",children:(0,l.jsx)(a.P.Edit,{className:"w-4 h-auto hover:scale-125"})}),m===r&&(0,l.jsx)(i.z,{onClick:()=>C(r),className:"h-0 px-0 text-sm",children:(0,l.jsx)(F.Z,{className:"w-5 h-auto hover:scale-125"})})]})]},r)}))}):"",!j&&f&&(null==f?void 0:f.length)>3&&(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsxs)(i.z,{onClick:()=>{x(!c)},className:"flex gap-3 text-white bg-transparent hover:bg-[#22263e] 2xl:mt-2",children:[c?"Show less":"See all",(0,l.jsx)(z.Z,{className:(0,n.cn)("transition-all duration-500 ease-in-out",c&&"rotate-180")})]})})]})},E=s(5526);let A=async e=>(await h.Z.post("app/getProjectHistoryList/",{project_id:e})).data,L=e=>(0,p.useQuery)({queryKey:["project-history",e],queryFn:()=>A(e),enabled:!!e,onError:e=>{var t,s;j.A.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message))}});var D=()=>{let[e,t]=(0,r.useState)("");(0,r.useEffect)(()=>{t(N.Z.get("profile_image")||"/profile.svg")},[]);let{selectedProjectId:s,setSelectedProjectHistoryId:a,selectedProjectHistoryId:o}=(0,r.useContext)(u),[c,d]=(0,r.useState)(!1),x=(0,r.useRef)(null);(0,r.useEffect)(()=>{x.current&&(x.current.style.height=c?"".concat(x.current.scrollHeight,"px"):"250px")},[c]);let{data:h,isSuccess:p,isLoading:m}=L(s);return(0,r.useEffect)(()=>{h&&(null==h?void 0:h.length)&&a(h[0].history_id)},[p,h]),(0,l.jsxs)("div",{className:" pb-7 px-6 mt-5 2xl:mt-10",children:[(0,l.jsx)("div",{className:"flex items-center justify-between text-[#BAC0DD]",children:(0,l.jsxs)("h2",{className:"flex items-center gap-2 text-base font-normal px-5",children:[(0,l.jsx)(E.Z,{className:"w-4 h-auto"}),"History"]})}),m?(0,l.jsx)("div",{className:"py-16 flex justify-center",children:(0,l.jsx)(S.Z,{className:"size-8 animate-spin"})}):(null==h?void 0:h.length)?(0,l.jsx)("div",{ref:x,className:"overflow-hidden transition-all duration-500 ease-in-out mt-4 ",style:{height:"250px"},children:h&&h.slice(0,c?h.length:3).map(t=>{let{history_id:s,history_date:r,name:i}=t;return(0,l.jsxs)("div",{onClick:()=>a(s),className:(0,n.cn)("hover:bg-[#22263e] rounded-md px-10 py-3 mb-2",o===s?"bg-[#22263e]":"bg-transparent"),children:[(0,l.jsx)("h1",{className:"text-sm font-bold",children:new Date(r).toLocaleString()}),(0,l.jsxs)("div",{className:"flex gap-2 mt-2",children:[(0,l.jsx)(f.default,{src:e||"/profile.svg",width:40,height:40,alt:"profile",className:"w-6 h-6 rounded-full object-cover"}),(0,l.jsx)("p",{className:"text-sm",children:i})]})]},s)})}):"",!m&&h&&(null==h?void 0:h.length)>3&&(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsxs)(i.z,{onClick:()=>{d(!c)},className:"flex gap-3 text-white bg-transparent hover:bg-[#22263e] mt-2",children:[c?"Show less":"See all",(0,l.jsx)(z.Z,{className:(0,n.cn)("transition-all duration-500 ease-in-out",c&&"rotate-180")})]})})]})},Z=e=>{let{setPageNumber:t}=e;return(0,l.jsxs)("div",{className:"w-72 xl:w-80 2xl:w-96 h-[calc(100vh-74px)] overflow-y-auto hide-scrollbar bg-[#080e28] border-r border-t border-[#1C2037] text-white rounded-tr-[24px]",children:[(0,l.jsx)(_,{setPageNumber:t}),(0,l.jsx)(D,{})]})},I=s(3274);let M=["#000","#0000FF","#7FFF00","#00FFFF","#808080","#008000","#FFA500","#FF0000","#FF007F","#00FF7F","#EE82EE","#ffffff","#FFFF00"],U=[{icon:(0,l.jsx)(a.P.OutlineStar,{}),text:"Outline",id:"outline"},{icon:(0,l.jsx)(a.P.FillStar,{}),text:"Fill",id:"fill"},{icon:(0,l.jsx)(a.P.LinerColorStar,{}),text:"Lineal color",id:"lineal-color"},{icon:(0,l.jsx)(a.P.HandDrownStar,{}),text:"HandDrawn",id:"hand-drawn"}];var P=e=>{let{themeColor:t,setThemeColor:s,setSelectedIconStyle:a,selectedIconStyle:o}=e,[c,d]=(0,r.useState)(!0),[u,x]=(0,r.useState)(!1),h=e=>{a(e)};return(0,l.jsxs)("div",{className:"bg-colorPicker-gradient border border-[#1C2037] rounded-2xl p-3 xl:p-5",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center mb-5",children:[(0,l.jsx)(i.z,{onClick:()=>{d(e=>!e),x(!1)},className:(0,n.cn)("px-4 py-2 rounded-lg",c?"bg-[#080e28] text-white":"bg-[#1C223F] text-[#BAC0DD]"),children:"Select Colors"}),(0,l.jsx)(i.z,{onClick:()=>{x(e=>!e),d(!1)},className:(0,n.cn)("px-4 py-2 rounded-lg",u?"bg-[#080e28] text-white":"bg-[#1C223F] text-[#BAC0DD]"),children:"Select Shapes"})]}),c&&(0,l.jsx)("div",{className:(0,n.cn)("transition-all duration-300 overflow-hidden h-[100px]"),children:(0,l.jsx)("div",{className:"flex flex-wrap gap-2 mt-2",children:M.map((e,r)=>(0,l.jsx)("div",{className:(0,n.cn)("w-6 2xl:w-8 h-6 2xl:h-8 rounded-full cursor-pointer",t===e?"border-2 border-white scale-110":""),style:{backgroundColor:e},onClick:()=>s(e)},r))})}),u&&(0,l.jsx)("div",{className:(0,n.cn)("transition-all duration-300 overflow-hidden mt-5  h-[100px]"),children:(0,l.jsx)("div",{className:"flex flex-wrap gap-3 mt-2",children:U.map((e,t)=>{let{text:s,icon:r,id:a}=e;return(0,l.jsxs)(i.z,{onClick:()=>h(a),className:(0,n.cn)("flex gap-1 bg-[#1C223F] hover:bg-[#080e28] rounded-3xl px-3 2xl:px-4 py-2",o===a?"bg-[#080e28] border border-white":"border border-transparent"),children:[r,(0,l.jsx)("span",{className:"text-xs 2xl:text-sm text-white",children:s})]},t)})})})]})},B=s(8746),q=s(9687),R=s(4697),Q=e=>{let{onFileUpload:t,uploadedFiles:s,setUploadedFiles:o,isDisabled:c,url:u,setUrl:x,addedLink:h,setAddedLink:p}=e,[m,g]=(0,r.useState)("upload"),{getRootProps:v,getInputProps:f}=(0,B.uI)({onDrop:e=>{e.length>0&&t(e[0])},accept:{"image/jpeg":[".jpg",".jpeg"],"image/png":[".png"]},multiple:!1,disabled:c});return(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between px-4",children:[(0,l.jsx)("h1",{className:"text-sm text-[#BAC0DD]",children:"Upload Design"}),(0,l.jsx)(q.Z,{className:"w-4 h-4 text-[#7C7F99]"})]}),(0,l.jsxs)("div",{className:"flex justify-center gap-2 px-4",children:[(0,l.jsx)("button",{onClick:()=>g("upload"),className:(0,n.cn)("px-4 py-2 rounded-lg border text-sm","upload"===m?"bg-[#1C223F] text-white border-white":"bg-transparent text-[#7C7F99] border-[#7C7F99]"),children:"Upload File"}),(0,l.jsx)("button",{onClick:()=>g("url"),className:(0,n.cn)("px-4 py-2 rounded-lg border text-sm","url"===m?"bg-[#1C223F] text-white border-white":"bg-transparent text-[#7C7F99] border-[#7C7F99]"),children:"Add File URL"})]}),"upload"===m?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{...v(),className:(0,n.cn)("border-2 border-dashed border-white rounded-lg py-3 mx-4",c?"cursor-not-allowed":"cursor-pointer"),children:[(0,l.jsx)("input",{...f()}),(0,l.jsx)("p",{className:"text-[10px] text-[#7C7F99] text-center ",children:"Drag & Drop or Choose a file to upload"}),(0,l.jsx)(a.P.Upload,{className:"w-3 h-3 mx-auto"})]}),s&&(0,l.jsxs)("div",{className:"flex items-start justify-between bg-link-added-gradient border border-[#32344A] rounded-lg mx-4 mt-4 p-3",children:[(0,l.jsxs)("div",{className:"flex items-center gap-3",children:[s.type.startsWith("image/")?(0,l.jsx)("img",{src:URL.createObjectURL(s),alt:"Uploaded Thumbnail",className:"w-12 h-12 object-cover rounded-lg"}):(0,l.jsx)(a.P.UploadFile,{}),(0,l.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,l.jsx)("span",{className:"text-xs text-white",children:s.name}),(0,l.jsxs)("span",{className:"text-[10px] text-[#BAC0DD]",children:[(s.size/1024).toFixed(2)," KB"]})]})]}),(0,l.jsx)(R.Z,{className:"cursor-pointer w-4 h-4 hover:scale-110 text-white",onClick:()=>{o(null)}})]})]}):(0,l.jsxs)("div",{className:" ",children:[(0,l.jsxs)("div",{className:"flex gap-4 items-center bg-link-added-gradient border border-[#32344A] rounded-lg mx-6 py-1 2xl:py-2 px-5",children:[(0,l.jsx)(d,{type:"url",placeholder:"image/figma URL",value:u,onChange:e=>x(e.target.value),disabled:!!s,className:"placeholder:text-[#7C7F99] border-none bg-transparent px-0"}),(0,l.jsx)(i.z,{onClick:()=>{u&&(p(u),x(""))},disabled:!u,className:"text-base bg-transparent hover:bg-transparent px-0",children:"Upload"})]}),h&&h.length>0&&(0,l.jsx)("div",{className:"flex flex-col gap-3 bg-link-added-gradient border border-[#32344A] rounded-lg mt-4 mx-6  p-3",children:(0,l.jsxs)("div",{className:"flex items-start justify-between gap-3",children:[(0,l.jsx)("p",{className:"scrollbar-hide w-[85%] text-[10px] text-blue-400 overflow-auto",children:h}),(0,l.jsx)(i.z,{onClick:()=>p(null),className:"text-sm text-red-400 px-0 bg-transparent hover:bg-transparent h-0",children:(0,l.jsx)(R.Z,{className:"w-4 h-auto text-white hover:scale-125"})})]})})]})]})};let O=async e=>{let{screen_link:t,icon_color:s,icon_style:l}=e;return(await h.Z.post("app/imageLink/",{screen_link:t,figma_token:N.Z.get("figma_token"),icon_color:s,icon_style:l})).data},V=()=>{let e=(0,p.useQueryClient)();return(0,p.useMutation)({mutationFn:O,onSuccess:t=>{j.A.success(t.success||"Url has been processed Successfully!"),e.invalidateQueries({queryKey:["get-project-list"]})},onError:e=>{var t,s,l,r,a,i;console.log(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.oauth_url),(null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(l=r.data)||void 0===l?void 0:l.oauth_url)&&(0,j.A)(null==e?void 0:null===(i=e.response)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:a.error,{action:{label:"Allow Access",onClick:()=>{var t,s;window.open(null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.oauth_url,"_blank")}}})}})},H=async e=>(await h.Z.post("app/uploadImage/",e)).data,K=()=>{let e=(0,p.useQueryClient)();return(0,p.useMutation)({mutationFn:H,onSuccess:t=>{j.A.success("Image has been processed Successfully!"),e.invalidateQueries({queryKey:["get-project-list"]})},onError:e=>{var t,s;j.A.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message))}})};var T=e=>{let{setEnableVariation:t,setIsShowingSimilarIcons:s,setKeywords:a,setPageNumber:o}=e,{setSelectedProjectId:c}=(0,r.useContext)(u),[d,x]=(0,r.useState)(null),[h,p]=(0,r.useState)(),[m,g]=(0,r.useState)(""),[v,f]=(0,r.useState)(null),[b,j]=(0,r.useState)(),{mutateAsync:w,isLoading:y}=V(),{mutateAsync:N,isLoading:C}=K(),k=async()=>{try{var e,l,r,i,n;let u={screen_link:v};if(h&&(u.icon_color=h),b&&(u.icon_style=b),d){let i=new FormData;i.append("image",d),h&&i.append("icon_color",h),b&&i.append("icon_style",b);let n=await N(i,{onSuccess(e){c(e.id),p(""),o(1),j(""),s(!1),t(!1)}});a(null==n?void 0:null===(e=n.attributes)||void 0===e?void 0:e.description.split(",").slice(1,4)),console.log("data2?.attributes?.description.split(1,4)",null==n?void 0:null===(l=n.attributes)||void 0===l?void 0:l.description.split(",").slice(1,4)),localStorage.setItem("keywords",JSON.stringify(null==n?void 0:null===(r=n.attributes)||void 0===r?void 0:r.description.split(",").slice(1,4)))}if(v){let e=await w(u,{onSuccess(e){c(e.id),p(""),j(""),s(!1),t(!1)}});a(null==e?void 0:null===(i=e.attributes)||void 0===i?void 0:i.description.split(",").slice(1,4));let l=null==e?void 0:null===(n=e.attributes)||void 0===n?void 0:n.description.split(",").slice(1,4).map(e=>e.replace(/['"]+/g,"").trim());localStorage.setItem("keywords",JSON.stringify(l))}x(null),f(null)}catch(e){console.error(e)}};return(0,l.jsxs)("div",{className:"h-[calc(100vh-74px)] w-72 xl:w-80 2xl:w-96 bg-[#080e28] text-white rounded-tl-[24px] p-4 xl:p-5 overflow-y-auto hide-scrollbar",children:[(0,l.jsx)(P,{setThemeColor:p,themeColor:h,setSelectedIconStyle:j,selectedIconStyle:b}),(0,l.jsx)("div",{className:"bg-colorPicker-gradient border  border-[#1C2037] rounded-2xl py-4 mt-4",children:(0,l.jsx)(Q,{onFileUpload:e=>{x(e)},uploadedFiles:d,setUrl:g,addedLink:v,setAddedLink:f,url:m,setUploadedFiles:x,isDisabled:!!v})}),(0,l.jsx)("div",{className:"px-4 mt-4",children:(0,l.jsxs)(i.z,{type:"submit",onClick:k,disabled:y||C||!d&&!v,className:(0,n.cn)("flex gap-2 text-base w-full h-10 2xl:h-12 ",y||C||!d&&!v?"border border-[#04ADA3] bg-transparent cursor-not-allowed":"border-none bg-generate-button-gradient"),children:[(y||C)&&(0,l.jsx)(I.Z,{className:"w-4 h-4 animate-spin"}),"Generate"]})})]})};let W=async e=>{let{history_id:t,page_size:s,page:l}=e;return(await h.Z.post("app/getHistoryByHistoryId/",{history_id:t,page_size:s,page:l})).data},G=e=>{let{history_id:t,page_size:s,page:l}=e;return(0,p.useQuery)({queryKey:["projectIcons",t,s,l],queryFn:()=>W({history_id:t,page_size:s,page:l}),enabled:!!t})};var J=s(518),Y=s(7592);let X=async e=>(await h.Z.post("app/similarIconSearch/",{icon_id:e})).data,$=()=>{let e=(0,p.useQueryClient)();return(0,p.useMutation)({mutationFn:X,onSuccess:t=>(console.log("Icon fetched successfully:",t),e.invalidateQueries({queryKey:["similar-icons"]}),t),onError:e=>{var t,s,l,r;j.A.error((null==e?void 0:null===(s=e.response)||void 0===s?void 0:null===(t=s.data)||void 0===t?void 0:t.error)||(null==e?void 0:e.message)),console.log((null==e?void 0:null===(r=e.response)||void 0===r?void 0:null===(l=r.data)||void 0===l?void 0:l.error)||(null==e?void 0:e.message))}})};var ee=e=>{var t,s;let{isShowingSimilarIcons:a,setIsShowingSimilarIcons:n,activeIcon:o,setActiveIcon:c,pageNumber:d,setPageNumber:x,setEnableVariation:h}=e,[p,m]=(0,r.useState)(0),[g,v]=(0,r.useState)(!1),[b,j]=(0,r.useState)(!1),[w,y]=(0,r.useState)(1),[N,C]=(0,r.useState)(0),[k,F]=(0,r.useState)([]),[z,_]=(0,r.useState)([]),{selectedProjectHistoryId:E}=(0,r.useContext)(u),{data:A,isLoading:L}=G({history_id:E,page_size:20,page:d}),D=null!==(s=null==A?void 0:null===(t=A.results)||void 0===t?void 0:t.map(e=>({id:Number(e.id),url:e.url})))&&void 0!==s?s:[];(0,r.useEffect)(()=>{(null==A?void 0:A.count)&&(m(Math.ceil((null==A?void 0:A.count)/20)),D&&F(D))},[A,20]);let{mutate:Z,isLoading:I,data:M}=$(),U=e=>{x(1),y(1),Z(e),n(!0)};(0,r.useEffect)(()=>{(null==M?void 0:M.similar_icons)&&(C(Math.ceil((null==M?void 0:M.similar_icons.length)/20)),_(M.similar_icons))},[M]),(0,r.useEffect)(()=>{!a&&D&&F(D)},[d,D,a]),(0,r.useEffect)(()=>{a&&F([])},[a]);let P=r.useRef(null);return(0,r.useEffect)(()=>{let e=e=>{P.current&&!P.current.contains(e.target)&&j(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),(0,l.jsxs)("div",{className:"bg-[#0E142D] border border-[#1C2037] rounded-2xl px-8 py-5 ",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center my-2 w-full",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center justify-center",children:[(0,l.jsx)("h1",{className:"text-white font-bold text-3xl",children:"Welcome"}),(0,l.jsxs)("svg",{viewBox:"0 0 1024 1024",className:"w-12 h-12",version:"1.1",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M506.8 185.8c-164.6 0-298.1 132.4-298.1 295.8 0 104.8 55 196.8 137.8 249.3L288.7 825l137.1-58.8a300.6 300.6 0 0 0 81 11.1c164.6 0 298.1-132.4 298.1-295.8S671.4 185.8 506.8 185.8z",fill:"#F68F3B"}),(0,l.jsx)("path",{d:"M703.9 361.5c-4.9 0-9.7-2.5-12.3-7.1-31.7-54.8-90.6-73.2-91.2-73.4-7.5-2.3-11.7-10.1-9.4-17.6 2.3-7.4 10.2-11.6 17.6-9.4 2.8 0.8 70.1 21.5 107.6 86.3 3.9 6.7 1.6 15.4-5.2 19.2-2.2 1.4-4.7 2-7.1 2zM551.7 268.8c-1.2 0-2.5-0.1-3.7-0.5-21.3-5.7-38.9-3.2-39.1-3.2-7.8 1.2-15-4.1-16.1-11.8-1.2-7.7 4.1-14.8 11.8-16 1-0.1 23.4-3.5 50.8 3.8 7.6 2 12 9.8 10 17.3-1.7 6.2-7.4 10.4-13.7 10.4z",fill:"#FFFFFF"}),(0,l.jsx)("path",{d:"M506.8 167c-174.8 0-317 141.1-317 314.6 0 101.7 48.7 195.7 131.3 254.9l-48.6 78.9c-4.2 6.9-3.5 15.8 1.8 21.9 3.7 4.3 9 6.6 14.4 6.6 2.4 0 4.8-0.5 7.1-1.4L427 786c26.1 6.7 52.9 10.1 79.8 10.1 174.8 0 317-141.1 317-314.6 0-173.4-142.2-314.5-317-314.5z m0 591.6c-25.5 0-51.1-3.5-75.9-10.4-4.1-1.2-8.4-0.9-12.3 0.7l-84.4 37.5 28.4-45.8c5.3-8.7 2.6-20-6-25.5-80.8-51.3-129-138.6-129-233.5 0-152.7 125.2-277 279.1-277s279.1 124.3 279.1 277c0.1 152.7-125.1 277-279 277z",fill:"#211F1E"}),(0,l.jsx)("path",{d:"M661.5 423.4c0-20.7-16.9-37.6-37.9-37.6-20.9 0-37.8 16.8-37.8 37.6 0 20.7 16.9 37.6 37.8 37.6 21 0 37.9-16.8 37.9-37.6zM433.1 423.4c0-20.7-16.9-37.6-37.9-37.6-20.9 0-37.8 16.8-37.8 37.6 0 20.7 16.9 37.6 37.8 37.6 21 0 37.9-16.8 37.9-37.6zM597.5 531.6c-9.7-3.9-20.7 0.7-24.7 10.3-0.2 0.4-16.2 38-63.4 38-48.6 0-61.6-32.8-62.9-36.8-3.2-9.8-13.9-15.1-23.7-12-10 3.1-15.5 13.7-12.3 23.6 0.8 2.6 21 62.8 98.9 62.8 72.3 0 97.4-58.8 98.4-61.3 4-9.7-0.6-20.6-10.3-24.6zM303.2 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3zM336.8 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0.1-4-3.2-7.3-7.3-7.3zM320 525.1c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.2-7.3-7.3-7.3zM353.7 525.1c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.3-7.3-7.3-7.3zM336.8 546.9c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0.1-4-3.2-7.3-7.3-7.3zM374.8 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.2-7.3-7.3-7.3zM654.7 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0.1-4-3.2-7.3-7.3-7.3zM688.4 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.2-7.3-7.3-7.3zM671.6 525.1c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.3-7.3-7.3-7.3zM705.3 525.1c-4 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3c0-4.1-3.3-7.3-7.3-7.3zM688.4 546.9c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.2-7.3-7.3-7.3zM726.4 502.4c-4.1 0-7.3 3.3-7.3 7.3s3.3 7.3 7.3 7.3 7.3-3.3 7.3-7.3-3.3-7.3-7.3-7.3z",fill:"#211F1E"})]})]}),(0,l.jsx)("p",{className:"text-gray-500",children:(a?z:k).length?"Click on icons to view more options":"Upload Image/figma file on bottom right side to generate icons"})]}),(0,l.jsx)("div",{className:"w-11/12 min-h-[352px] mx-auto flex items-center justify-center bg-[#1C2038] rounded-lg py-5 xl:py-10 3xl:py-7 mt-4",children:L||I?(0,l.jsx)(S.Z,{className:"text-white size-8 animate-spin"}):(a?z:k).length?(0,l.jsx)("div",{className:"w-10/12 grid grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-4 3xl:gap-6",children:(a?z.slice((w-1)*20+1,20*w+1):k).map((e,t)=>(0,l.jsxs)("div",{className:"relative flex flex-col items-center justify-center",children:[(0,l.jsx)(f.default,{src:e.url,width:300,height:300,alt:"svg",className:"w-14 h-14 mx-auto m-2 cursor-pointer",onClick:()=>{console.log(null==o?void 0:o.id),console.log(null==e?void 0:e.id),(null==o?void 0:o.id)===(e.id||e.similar_icon_id)?j(!b):(c({id:e.id||(null==e?void 0:e.similar_icon_id)||0,url:e.url}),j(!0)),console.log(o)}},e.id),b&&(null==o?void 0:o.id)==(e.similar_icon_id||e.id)&&(0,l.jsx)("div",{ref:P,className:"   flex flex-col items-center w-4 h-4 bg-black rounded-full absolute left-[100%] top-[-120px] z-[4000]",children:(0,l.jsxs)("div",{className:"bg-white rounded-xl p-4 relative h-auto w-[180px] flex flex-col items-center justify-center",children:[(0,l.jsx)("button",{onClick:()=>{U(e.id||e.similar_icon_id||0),j(!1),h(!1),c(null)},className:"w-full hover:bg-gray-400 hover:text-white p-2 rounded-md bg-gray-200 text-xs font-bold",children:I?"Searching...":"Search for similar icon"}),(0,l.jsx)("button",{onClick:()=>{h(!1),c(null),j(!1),window.open("https://www.freepik.com/icon/".concat(e.id||e.similar_icon_id,"#fromView=keyword&page=1&position=0&uuid=31cbda18-5c8f-4ebb-8baf-7db46b2eaa4b"),"_blank","noopener,noreferrer")},className:"w-full mt-[2px] hover:bg-gray-400 hover:text-white p-2 rounded-md bg-gray-200 text-xs font-bold",children:"Download Icon"}),(0,l.jsx)("button",{onClick:()=>{h(!0),j(!1),c({id:e.id||e.similar_icon_id||0,url:e.url})},className:"w-full mt-[2px] hover:bg-gray-400 hover:text-white p-2 rounded-md bg-gray-200 text-xs font-bold",children:"Variations"}),(0,l.jsx)("div",{className:"absolute left-7 bottom-[-6px] w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-t-white border-l-transparent border-r-transparent"})]})})]},e.id))}):(0,l.jsx)("p",{className:"text-white mx-auto text-center",children:"No Icons found!"})}),a&&(0,l.jsxs)("div",{className:"w-full flex flex-row items-center justify-end",children:[(0,l.jsx)("button",{onClick:()=>n(!1),className:"text-white mt-5  mr-6 p-3 bg-[#1C2038] rounded-xl",children:"Go Back"})," "]}),(0,l.jsx)("div",{className:"flex justify-end mt-2",children:(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsxs)("p",{className:"text-white",children:[a?null==M?void 0:M.count:null==A?void 0:A.count," icons"]}),(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)(i.z,{onClick:a?()=>{w>1&&y(w-1)}:()=>{d>1&&(x(d-1),n(!1))},disabled:a?1===w:1===d,className:"h-0 text-black bg-transparent hover:bg-transparent rounded px-0",children:(0,l.jsx)(J.Z,{className:"text-white"})}),(0,l.jsx)("span",{className:"text-white",children:(0,l.jsx)("strong",{children:"".concat(a?w:d," of ").concat(a?N:p)})}),(0,l.jsx)(i.z,{onClick:a?()=>{w<N&&y(w+1)}:()=>{d<p&&(x(d+1),n(!1))},disabled:a?w===N:d===p,className:"h-0 text-white bg-transparent hover:bg-transparent rounded px-0",children:(0,l.jsx)(Y.Z,{className:"text-white"})})]})]})})]})},et=s(7215),es=s(8472);let el=async e=>{try{let t=atob(e.split(",")[1]||e),s=new ArrayBuffer(t.length),l=new Uint8Array(s);for(let e=0;e<t.length;e++)l[e]=t.charCodeAt(e);let r=new Blob([s],{type:"image/png"}),a=URL.createObjectURL(r),i=document.createElement("a");i.href=a,i.download="downloaded-image.png",document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(a)}catch(e){console.error("Error downloading the image:",e)}};var er=e=>{let{activeIcon:t,setPageNumber:s,enableVariation:a}=e,[i,n]=(0,r.useState)(null),[o,c]=(0,r.useState)(!1),[d,u]=r.useState(null),[x,p]=(0,r.useState)(!1),m=e=>{n(e)};return(0,l.jsxs)("div",{className:"relative bg-chatbot-gradient border border-[#1C2037] rounded-2xl px-8 py-5 mt-5",children:[(0,l.jsxs)("div",{className:"w-full flex flex-row items-center",children:[(0,l.jsxs)("h1",{className:"text-white text-sm",children:["No. of Variations: ",i]}),(0,l.jsxs)(et.fC,{children:[(0,l.jsxs)(et.xz,{className:"ml-4 inline-flex items-center justify-between w-4/12 px-4 py-2 text-sm text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none",children:[null!==i?"Variation ".concat(i):"Select Variations",(0,l.jsx)("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),(0,l.jsx)(et.Uv,{children:(0,l.jsxs)(et.VY,{className:"mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-40",sideOffset:5,children:[Array.from({length:4},(e,t)=>(0,l.jsx)(et.ck,{className:"px-4 py-2 text-white cursor-pointer hover:bg-gray-700 focus:outline-none",onClick:()=>m(t+1),children:t+1},t+1)),(0,l.jsx)(et.Eh,{className:"fill-gray-800"})]})})]}),(0,l.jsx)("button",{disabled:x||!i,onClick:async()=>{try{p(!0);let e=await es.Z.post("".concat(h.v,"/app/generateIconVariations/\n"),{icon_url:null==t?void 0:t.url,variations:i},{headers:{Authorization:"Bearer ".concat(N.Z.get("token"))}});console.log(e.data),u(e.data),c(!0),p(!1)}catch(e){p(!1),console.error(e)}finally{p(!1)}},className:"text-sm bg-white text-[#1C2037] p-2 rounded-lg ml-4 hover:bg-[#1C2037] hover:text-white border border-white hover:border-[#1C2037] transition-colors duration-300",children:x?"Loading...":"Create"})]}),o&&(0,l.jsx)("div",{className:"grid grid-cols-5 w-full gap-4 mt-4",children:d&&d.map((e,t)=>(0,l.jsxs)("div",{className:"relative w-[80px] h-[80px]  text-white cursor-pointer   flex flex-col items-center justify-center bg-white rounded-lg",onClick:()=>m(t+1),children:[(0,l.jsx)("img",{className:"w-full h-auto ",src:"data:image/png;base64,".concat(e.b64_json),alt:"Variation"}),(0,l.jsx)("div",{className:"    absolute w-full flex flex-row  justify-end items-end bottom-0 left-0",children:(0,l.jsx)("div",{onClick:()=>{el(e.b64_json)},className:"cursor-pointer flex flex-row items-center justify-center p-1 border  rounded-md bg-[#1C2037]",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"white",viewBox:"0 0 24 24",height:20,width:20,children:(0,l.jsx)("path",{d:"M12 16l-4-4h3V4h2v8h3l-4 4z"})})})})]},t+1))})]})},ea=s(6463),ei=()=>{let e=(0,ea.useSearchParams)(),[t,s]=r.useState(null),[a,i]=r.useState(null);r.useEffect(()=>{(async()=>{let t=e.get("code");if(t)try{let e=await es.Z.post("".concat(h.v,"/app/exchangeFigmaCodeForToken/"),{code:t},{headers:{Authorization:"Bearer ".concat(N.Z.get("token"))}});console.log("Response:",e.data.token_data.access_token),i(e.data.token_data.access_token),N.Z.set("figma_token",e.data.token_data.access_token)}catch(e){console.error("Error fetching token:",e)}finally{}})()},[e]);let[n,o]=r.useState(null),[c,d]=r.useState(1),[u,p]=r.useState(!1),[m,g]=r.useState(!1),[v,f]=r.useState(!1),[j,w]=r.useState([]);return r.useEffect(()=>{let e=localStorage.getItem("#keywords");e&&w(JSON.parse(e))},[]),(0,l.jsx)(x,{children:(0,l.jsxs)("div",{className:"relative flex gap-5 h-full  ",children:[(0,l.jsxs)("div",{className:"rounded-full bg-white h-[70px] w-[70px] absolute z-[1000] bottom-10 right-10 flex flex-col items-center justify-center  ",children:[(0,l.jsxs)("svg",{onClick:()=>{g(!0)},className:"cursor-pointer w-10 h-auto absolute z-10",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z",fill:"#1C274C"}),(0,l.jsx)("path",{opacity:"0.5",d:"M15.2347 2.53476C14.2201 2.1881 13.132 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39938 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88836 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.868 21.8119 9.77987 21.4652 8.76526C20.7572 9.22981 19.9101 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 4.08987 14.7702 3.24284 15.2347 2.53476Z",fill:"#1C274C"})]}),(0,l.jsx)("div",{className:"absolute z-0",children:(0,l.jsxs)("svg",{viewBox:"0 0 120 120",className:"w-full h-full",children:[(0,l.jsx)("path",{id:"curve",d:"M20,60a40,40 0 1,1 80,0a40,40 0 1,1 -80,0",fill:"transparent"}),(0,l.jsx)("text",{fontWeight:"bold",fontSize:"16",children:(0,l.jsx)("textPath",{href:"#curve",startOffset:"25%",textAnchor:"middle",fill:"#000",fontWeight:"700",children:"Generate with AI"})})]})}),m&&(0,l.jsx)("div",{className:"flex flex-row items-center relative",children:(0,l.jsx)(b,{setShowChat:g,keywords:j,setPageNumber:d})})]}),(0,l.jsx)(Z,{setPageNumber:d}),(0,l.jsxs)("div",{className:"h-[calc(100vh-74px)] flex-1 overflow-y-auto hide-scrollbar pb-10",children:[(0,l.jsx)(ee,{isShowingSimilarIcons:v,setIsShowingSimilarIcons:f,activeIcon:n,setActiveIcon:o,pageNumber:c,setPageNumber:d,setEnableVariation:p}),u&&(0,l.jsx)(er,{activeIcon:n,setPageNumber:d,enableVariation:u})]}),(0,l.jsx)(T,{setEnableVariation:p,setIsShowingSimilarIcons:f,setKeywords:w,setPageNumber:d})]})})},en=()=>(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)("div",{children:"loading..."}),children:(0,l.jsx)(ei,{})})}},function(e){e.O(0,[249,242,198,467,6,830,971,23,744],function(){return e(e.s=9866)}),_N_E=e.O()}]);