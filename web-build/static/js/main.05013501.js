(()=>{"use strict";var e={6367:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(4333),o=n(9526),a=n(1133),i=n(9233),l=n(1553),d=n(8859),u=n(6834),s=r.default.create({container:{flex:1,backgroundColor:"#15B6D6",alignItems:"center",justifyContent:"center"},botao:{Color:"#FFD666"},container2:{flex:1,backgroundColor:"#FF0000",alignItems:"center",justifyContent:"center"}}),c=n(7557);function f(e){var t=e.navigation;return(0,c.jsxs)(a.default,{style:s.container,children:[(0,c.jsx)(i.default,{style:{backgroundColor:"#fff"},children:"Home eeee"}),(0,c.jsx)(l.default,{onPress:function(){return d.default.alert("Button with adjusted color pressed Pagina 2")},title:"Learn More",color:"#841584"}),(0,c.jsx)(l.default,{style:s.botao,onPress:function(){return t.navigate("HomeScreen")},title:"HomeScreen"}),(0,c.jsx)(u.default,{source:n(1499),style:{width:200,height:200},resizeMode:"contain"})]})}var g=n(885),x=n(9566),p=function(e){var t=e.content;return(0,c.jsx)(a.default,{style:m.item,children:(0,c.jsx)(i.default,{style:m.Text,children:t})})};function h(e){var t=e.props;return console.log(t),(0,c.jsx)(a.default,{children:(0,c.jsx)(x.default,{data:t,keyExtractor:function(e){return e.id},renderItem:function(e){var t=e.item;return(0,c.jsx)(p,{content:t.nome})}})})}var m=r.default.create({container:{display:"flex",flexWrap:"wrap",width:"100vw",backgroundColor:"orange"},item:{backgroundColor:"#f9c2ff",padding:5},Text:{color:"black"}});const b=n(8615).default.create({baseURL:"https://url-api/public/api/"});function y(e){e.navigator;var t=(0,o.useState)({}),n=(0,g.default)(t,2),r=n[0],d=n[1];return(0,c.jsxs)(a.default,{style:v.container,children:[(0,c.jsx)(i.default,{style:v.advice,children:r.id}),(0,c.jsx)(i.default,{style:v.advice,children:r.nome}),(0,c.jsx)(l.default,{title:"Get Advice",onPress:function(){b.get("cidade/index").then((function(e){d(e.data),console.log(r)}))},color:"green"}),(0,c.jsx)(h,{style:v.lista,props:r})]})}var v=r.default.create({}),j=n(5690),C=n(8552),w=n(5861),S=n(3292),I=n(3497),k=n(1451),T=n(8198);function B(e){var t=e.navigation,n=(0,T.useForm)(),r=n.control,u=n.handleSubmit,s=function(){var e=(0,w.default)((function*(e){"Cidade adicionada"==(yield b.post("cidade/store",e)).data?d.default.alert("Cadastrado","Cadastrado com sucesso"):d.default.alert("Error","Ocorreu um problema, tente novamente")}));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){var e=function(){var e=(0,w.default)((function*(){yield b.get("cidade/index")}));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,c.jsx)(a.default,{style:z.container,children:(0,c.jsxs)(a.default,{style:z.inputCard,children:[(0,c.jsx)(i.default,{style:z.title,children:"Cadastrar nova cidade"}),(0,c.jsxs)(a.default,{style:z.inputContainer,children:[(0,c.jsxs)(a.default,{style:z.inputs,children:[(0,c.jsx)(T.Controller,{control:r,name:"estado",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,o=t.value;return(0,c.jsx)(I.default,{placeholder:"Informe o estado",onChangeText:n,onBlur:r,value:o,style:[z.input]})}}),(0,c.jsx)(T.Controller,{control:r,name:"nome",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,o=t.value;return(0,c.jsx)(I.default,{placeholder:"Informe a cidade",onChangeText:n,onBlur:r,value:o,style:[z.input]})}}),(0,c.jsx)(T.Controller,{control:r,name:"sinal",render:function(e){var t=e.field,n=t.onChange,r=t.onBlur,o=t.value;return(0,c.jsx)(I.default,{placeholder:"Informe o sinal",onChangeText:n,onBlur:r,value:o,style:[z.input]})}})]}),(0,c.jsx)(k.default,{style:z.button,onPress:u(s),children:(0,c.jsx)(i.default,{style:z.buttonText,children:"Salvar dados da cidade"})}),(0,c.jsxs)(a.default,{style:z.navButtons,children:[(0,c.jsx)(l.default,{title:"home",onPress:function(){return t.navigate("Home")}}),(0,c.jsx)(l.default,{style:z.navButton,title:"Visualizar Cidades",onPress:function(){return t.navigate("Profile")}})]})]}),(0,c.jsx)(S.default,{style:"light"})]})})}var z=r.default.create({container:{width:"100%",height:"100%",backgroundColor:"#15B6D6",display:"flex",alignItems:"center",justifyContent:"center",bottom:"0",boxSizing:"border-box"},inputCard:{backgroundColor:"#fff",width:"90%",maxWidth:"100%",maxHeight:"90%",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",padding:"10px",marginTop:"30px"},title:{color:"#3E3E3E",fontSize:"3rem",textAlign:"center",fontWeight:"bold",marginTop:"10px",marginBottom:"10px"},inputContainer:{flex:1,marginTop:20,marginBottom:20,width:"95%",padding:20,borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:"stretch",backgroundColor:"#fff"},input:{marginTop:15,height:"3rem",backgroundColor:"#fff",borderRadius:7,paddingHorizontal:"1rem",fontSize:16,alignItems:"stretch",borderWidth:1,borderColor:"#15B6D6"},inputs:{display:"flex",justifyContent:"space-evenly ",marginBottom:"1rem"},navButtons:{display:"flex",flexDirection:"row",marginTop:"1rem",marginBottom:"1rem",justifyContent:"space-between"},navButton:{backgroundColor:"red"},button:{marginTop:10,height:60,backgroundColor:"#FFC831",borderRadius:10,paddingHorizontal:24,fontSize:16,alignItems:"center",justifyContent:"center",elevation:20,shadowOpacity:20,shadowColor:"#ccc"},buttonText:{color:"#fff",fontWeight:"bold",fontSize:20}}),O=n(477);function P(e){e.navigation;var t=(0,o.useState)([]),n=(0,g.default)(t,2),r=n[0],s=n[1];!function(){var e=(0,w.default)((function*(e){if("Cidade deletada com Sucesso"==(yield b.post("cidade/delete",e)).data){d.default.alert("Deletado","Deletado com sucesso");var t=yield b.get("cidade/index");s(t.data)}else d.default.alert("Error","Ocorreu um problema, tente novamente")}))}();(0,o.useEffect)((function(){var e=function(){var e=(0,w.default)((function*(){var e=yield b.get("cidade/index");s(e.data)}));return function(){return e.apply(this,arguments)}}();e()}),[]);var f=function(e){var t=e.item;return(0,c.jsx)(a.default,{style:D.cardItem,children:(0,c.jsx)(k.default,{onPress:function(){return function(){console.log("Clicado")}},children:(0,c.jsxs)(a.default,{style:D.cardItemContent,children:[(0,c.jsx)(a.default,{style:D.Img,children:(0,c.jsx)(u.default,{style:D.Imagem,source:{uri:""+t.sinal}})}),(0,c.jsxs)(a.default,{style:D.Conteudo,children:[(0,c.jsxs)(i.default,{style:D.input,children:["Cidade: ",t.nome]}),(0,c.jsxs)(i.default,{style:D.input,children:["Estado: ",t.cidade]})]})]})})})};return(0,c.jsxs)(a.default,{style:D.container,children:[(0,c.jsxs)(O.default,{style:D.container,children:[(0,c.jsx)(l.default,{title:"Home"}),(0,c.jsx)(x.default,{style:D.List,data:r,renderItem:function(e){var t=e.item;return(0,c.jsx)(f,{item:t})},keyExtractor:function(e){return e.id}})]}),(0,c.jsx)(S.default,{style:"light"})]})}var D=r.default.create({container:{width:"100%",maxWidth:"100%",height:"100%",backgroundColor:"#15B6D6",display:"flex",alignItems:"center",justifyContent:"center",bottom:"0",boxSizing:"border-box"},title:{color:"#fff",fontSize:20,fontWeight:"bold",marginTop:50},cardItem:{width:"95%",borderRadius:"10px",borderColor:"#15B6D6",borderWidth:1,padding:"10px",marginTop:"10px",marginBottom:"10px",margin:"auto",boxSizing:"border-box"},cardItemContent:{display:"flex",flexDirection:"row",padding:"10px"},List:{backgroundColor:"#fff",display:"flex",maxWidth:"100%"},input:{marginTop:10,height:60,backgroundColor:"#fff",borderRadius:10,paddingHorizontal:24,fontSize:16,alignItems:"stretch"},Img:{borderRadius:"10px",borderColor:"#15B6D6",borderWidth:1,width:"300px",maxWidth:"30%",boxSizing:"border-box"},Imagem:{height:"100%",width:"100%"},Conteudo:{height:"100%",flex:1,padding:"10px"},button:{marginTop:10,height:60,backgroundColor:"blue",borderRadius:10,paddingHorizontal:24,fontSize:16,alignItems:"center",justifyContent:"center",elevation:20,shadowOpacity:20,shadowColor:"#ccc"},buttonText:{color:"#fff",fontWeight:"bold"}}),H=(0,C.default)();function W(){return(0,c.jsx)(j.default,{children:(0,c.jsxs)(H.Navigator,{screenOptions:{headerShown:!1},children:[(0,c.jsx)(H.Screen,{name:"Home",component:f}),(0,c.jsx)(H.Screen,{name:"PaginaDois",component:y}),(0,c.jsx)(H.Screen,{name:"HomeScreen",component:B}),(0,c.jsx)(H.Screen,{name:"Profile",component:P})]})})}function E(){return(0,c.jsx)(W,{})}r.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},1499:(e,t,n)=>{e.exports=n.p+"static/media/logoIF.a733f645a0a05edff7a0.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(s=0;s<e.length;s++){for(var[r,o,a]=e[s],l=!0,d=0;d<r.length;d++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[d])))?r.splice(d--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,d]=r,u=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(d)var s=d(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(s)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[426],(()=>n(9484)));r=n.O(r)})();
//# sourceMappingURL=main.05013501.js.map