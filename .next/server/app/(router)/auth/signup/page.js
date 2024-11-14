(()=>{var e={};e.id=919,e.ids=[919],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7924:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>l,pages:()=>p,routeModule:()=>x,tree:()=>c}),r(1028),r(5866),r(8915);var s=r(3191),a=r(8716),o=r(7922),i=r.n(o),n=r(5231),u={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>n[e]);r.d(t,u);let c=["",{children:["(router)",{children:["auth",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1028)),"D:\\CodeNexo\\pack\\pack\\dashboard\\src\\app\\(router)\\auth\\signup\\page.tsx"]}]},{}]},{}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8915)),"D:\\CodeNexo\\pack\\pack\\dashboard\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["D:\\CodeNexo\\pack\\pack\\dashboard\\src\\app\\(router)\\auth\\signup\\page.tsx"],l="/(router)/auth/signup/page",d={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(router)/auth/signup/page",pathname:"/auth/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5611:(e,t,r)=>{Promise.resolve().then(r.bind(r,2694))},2694:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var s=r(326);r(7577);var a=r(1664),o=r(9908),i=r(7389),n=r(4719),u=r(2994);let c=async e=>(await n.Z.post("auth/signUpWithGoogle/",e)).data,p=()=>(0,u.useMutation)({mutationFn:c});var l=r(7425),d=r(5999),x=r(6562),h=r(4099);let m=()=>{let e=(0,i.useRouter)(),{mutate:t,isLoading:r}=p(),n=(0,l.Nq)({onSuccess:async e=>{try{let t=await u(e.access_token);t&&c(t)}catch(e){d.A.error("Failed to fetch profile information.")}},onError:e=>d.A.error(`Login Failed: ${e.message}`)}),u=async e=>{try{return(await h.Z.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${e}`,{headers:{Authorization:`Bearer ${e}`,Accept:"application/json"}})).data}catch(e){return console.error("Error fetching profile info",e),null}},c=r=>{t({email:r.email,full_name:r.name,profile_image:r.picture},{onSuccess:t=>{x.Z.set("token",t.token),x.Z.set("email",r.email),x.Z.set("full_name",r.name),x.Z.set("profile_image",r.picture),e.push("/dashboard/generate")},onError:e=>{d.A.error(e.response?.data?.error||"An error occurred.")}})};return(0,s.jsxs)(a.z,{className:"w-[300px] h-14 flex gap-3 text-base text-[#000] hover:text-white bg-[#F8F8F8] hover:bg-transparent hover:border border-white rounded-[8px] mt-16",onClick:()=>{n()},disabled:r,children:[s.jsx(o.P.AuthGoogleIcon,{}),"Signup with Google"]})}},1028:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(9510),a=r(8570);let o=(0,a.createProxy)(String.raw`D:\CodeNexo\pack\pack\dashboard\src\components\auth\auth-social.tsx`),{__esModule:i,$$typeof:n}=o;o.default;let u=(0,a.createProxy)(String.raw`D:\CodeNexo\pack\pack\dashboard\src\components\auth\auth-social.tsx#default`);r(1159);let c=()=>s.jsx("div",{className:"flex items-center justify-center bg-[#161A30] h-screen",children:s.jsx(u,{})})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,686,621,547,428,838],()=>r(7924));module.exports=s})();