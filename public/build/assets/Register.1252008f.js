import{g,o as a,f as w,a as e,b as u,w as _,u as t,q as x,e as n,G as m,c as i,l,v as b,j as c,L as f}from"./app.2d01b1f7.js";import{S as k}from"./SpinnerProcessing.a1ced27b.js";import{F as p}from"./FormText.5495bd75.js";const y={class:"login-wrapper d-flex align-items-center justify-content-center text-center",style:{background:"white !important"}},v=e("div",{class:"background-shape",style:{background:"rgb(80, 208, 72) !important"}},null,-1),V={class:"container"},P={class:"row justify-content-center"},j={class:"col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5"},C={class:"d-flex justify-content-center"},N=e("img",{class:"big-logo",src:"/img/core-img/logo-white.png",alt:""},null,-1),S={class:"mt-5 px-4"},U=["onSubmit"],B={class:"form-group text-start mb-4"},F=e("span",{class:"text-dark"},"Name",-1),T={class:"form-group text-start mb-4"},M=e("span",{class:"text-dark"},"Email",-1),A={class:"form-group text-start mb-4"},E=e("span",{class:"text-dark"},"Password",-1),L={class:"form-group text-start mb-4"},R=e("span",{class:"text-dark"},"Password Confirmation",-1),q={class:"form-check text-start text-white mb-5"},D={class:"form-check-label text-dark",for:"terms"},G=["href"],I=["href"],z={class:"btn btn-warning btn-lg w-100 text-white",type:"submit",style:{background:"rgb(80, 208, 72) !important"}},H={class:"d-flex justify-content-center"},J={class:"login-meta-data"},X={__name:"Register",setup(K){const s=g({name:"",email:"",password:"",password_confirmation:"",terms:!1}),h=()=>{s.post(route("register"),{onFinish:()=>s.reset("password","password_confirmation")})};return(d,o)=>(a(),w("div",y,[v,e("div",V,[e("div",P,[e("div",j,[e("div",C,[u(t(f),{href:d.route("homepage")},{default:_(()=>[N]),_:1},8,["href"])]),e("div",S,[e("form",{onSubmit:x(h,["prevent"])},[e("div",B,[F,n(e("input",{class:"form-control rounded",id:"name",type:"text",placeholder:"Alex","onUpdate:modelValue":o[0]||(o[0]=r=>t(s).name=r),name:"name"},null,512),[[m,t(s).name]]),t(s).errors.name?(a(),i(p,{key:0,id:"name",message:t(s).errors.name},null,8,["message"])):l("",!0)]),e("div",T,[M,n(e("input",{class:"form-control rounded",id:"email",type:"email",placeholder:"info@example.com","onUpdate:modelValue":o[1]||(o[1]=r=>t(s).email=r),name:"email"},null,512),[[m,t(s).email]]),t(s).errors.email?(a(),i(p,{key:0,id:"email",message:t(s).errors.email},null,8,["message"])):l("",!0)]),e("div",A,[E,n(e("input",{class:"form-control rounded",id:"password",type:"password",placeholder:"Password","onUpdate:modelValue":o[2]||(o[2]=r=>t(s).password=r),name:"password"},null,512),[[m,t(s).password]]),t(s).errors.password?(a(),i(p,{key:0,id:"password",message:t(s).errors.password},null,8,["message"])):l("",!0)]),e("div",L,[R,n(e("input",{class:"form-control rounded",id:"password_confirmation",type:"password",placeholder:"Password Confirmation","onUpdate:modelValue":o[3]||(o[3]=r=>t(s).password_confirmation=r),name:"password_confirmation"},null,512),[[m,t(s).password_confirmation]])]),e("div",q,[n(e("input",{class:"form-check-input",type:"checkbox",id:"terms","onUpdate:modelValue":o[4]||(o[4]=r=>t(s).terms=r),name:"terms"},null,512),[[b,t(s).terms]]),e("label",D,[c(" I agree to the "),e("a",{target:"_blank",href:d.route("terms.show"),class:"text-decoration-none text-dark"},"Terms of Service",8,G),c(" and "),e("a",{target:"_blank",href:d.route("policy.show"),class:"text-decoration-none text-dark"},"Privacy Policy",8,I)]),t(s).errors.terms?(a(),i(p,{key:0,id:"terms",message:t(s).errors.terms},null,8,["message"])):l("",!0)]),e("button",z,[e("div",H,[t(s).processing?(a(),i(k,{key:0})):l("",!0),c(" Register ")])])],40,U)]),e("div",J,[u(t(f),{href:d.route("login"),class:"forgot-password d-block mt-3 mb-1 text-dark"},{default:_(()=>[c(" Already registered? ")]),_:1},8,["href"])])])])])]))}};export{X as default};
