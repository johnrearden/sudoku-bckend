(this.webpackJsonpmoments=this.webpackJsonpmoments||[]).push([[0],{12:function(e,a,t){e.exports={NavBar:"NavBar_NavBar__1amC6",FreckleFaceFont:"NavBar_FreckleFaceFont__2jaZh",NavLink:"NavBar_NavLink__34ons"}},13:function(e,a,t){e.exports={Row:"SignInUpForm_Row__3PbVy",Input:"SignInUpForm_Input__3xaLZ",Header:"SignInUpForm_Header__3joQJ",HalfWidth:"SignInUpForm_HalfWidth__32EGG",Link:"SignInUpForm_Link__1BeMm",Container:"SignInUpForm_Container__2cuBp",SignInCol:"SignInUpForm_SignInCol__3ImPK",SignUpCol:"SignInUpForm_SignUpCol__28o4y"}},22:function(e,a,t){e.exports={App:"App_App__16ZpL",Main:"App_Main__HQkvd",Image:"App_Image__3UPXw"}},23:function(e,a,t){e.exports={Cell:"PuzzleCell_Cell__32P5Q",Selected:"PuzzleCell_Selected__3wQUs",Warning:"PuzzleCell_Warning__1fQAF",Clashing_Cell:"PuzzleCell_Clashing_Cell__1LNii",Offending_Choice:"PuzzleCell_Offending_Choice__3a0I_",spin_to_correct:"PuzzleCell_spin_to_correct__1VDw7",letter_spin:"PuzzleCell_letter_spin__3VRYW"}},32:function(e,a,t){e.exports={RankingRow:"Leaderboard_RankingRow__2HlI2",RankingHeader:"Leaderboard_RankingHeader__2aKtI",UserRanking:"Leaderboard_UserRanking__3ORWM",slideIn:"Leaderboard_slideIn__3D-NG"}},38:function(e,a,t){e.exports={container:"CompletenessDisplay_container__1bHvo",underlayer:"CompletenessDisplay_underlayer__1CkYO",overlayer:"CompletenessDisplay_overlayer__MfCzH",clip_me:"CompletenessDisplay_clip_me__36Ok8"}},39:function(e,a,t){e.exports={icon_button:"PuzzleContainer_icon_button__2Eydm",SuccessMessage:"PuzzleContainer_SuccessMessage__3mrZc",RevealMessage:"PuzzleContainer_RevealMessage__3b466",fadeIn:"PuzzleContainer_fadeIn__CP4bR"}},45:function(e,a,t){e.exports={Digit:"DigitChooser_Digit__3wvBK",Inactive_Digit:"DigitChooser_Inactive_Digit__29Tz9",Inactive:"DigitChooser_Inactive__2BEIm"}},46:function(e,a,t){e.exports={darkTheme:"Themes_darkTheme__okLS8",lightTheme:"Themes_lightTheme__3cT83"}},61:function(e,a,t){e.exports={Asset:"Asset_Asset__1dBcX"}},62:function(e,a,t){e.exports={FadeIn:"ChooseDifficulty_FadeIn__3bIhe",fadeIn:"ChooseDifficulty_fadeIn__2oEya"}},63:function(e,a,t){e.exports={Grid:"Puzzle_Grid__3WRRb"}},64:function(e,a,t){e.exports={Avatar:"Avatar_Avatar__196lW"}},69:function(e,a,t){},8:function(e,a,t){e.exports={Button:"Button_Button__27i9m",Wide:"Button_Wide__2ScDr",Wider:"Button_Wider__3oJw3"}},99:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t(28),c=t.n(s),r=(t(69),t(107)),i=t(59),l=t(106),o=t(17),d=t(12),j=t.n(d),u=t(8),h=t.n(u),m=t(7),b=t.n(m),g=t(16);b.a.defaults.baseURL="/api",b.a.defaults.headers.post["Content-Type"]="multipart/form-data",b.a.defaults.withCredentials=!0;b.a.defaults.baseURL;const O=b.a.create(),p=b.a.create();var x=t(55);const f=()=>{localStorage.removeItem("refreshTokenTimestamp")},v=e=>{let a=9*Math.floor(e/9),t=[];for(let n=a;n<a+9;n++)t.push(n);return t},S=e=>{let a=[];for(let t=e%9;t<=81;t+=9)a.push(t);return a},C=e=>{let a=Math.floor(e/9),t=e%9,n=t-t%3,s=a-a%3,c=[];for(let r=n;r<n+3;r+=1)for(let e=s;e<s+3;e+=1)c.push(9*e+r);return c},N=(e,a,t)=>e.substring(0,a)+t.toString()+e.substring(a+1,e.length),y=e=>{if(!e)return"00:00";let a=e/1e3;if(a>86400)return"> 1 day";console.log("secs",JSON.stringify(a,null,2));const t=Math.floor(a/3600);console.log("hours",JSON.stringify(t,null,2));const n=t?"".concat(t,":"):"";a-=3600*t;const s=Math.floor(a/60);return console.log("minutes",JSON.stringify(s,null,2)),a=Math.floor(a-60*s),console.log("secs",JSON.stringify(a,null,2)),"".concat(n).concat(String(s).padStart(1,"0"),":").concat(String(a).padStart(2,"0"))};var A=t(1);const I=Object(n.createContext)(),_=Object(n.createContext)(),w=()=>Object(n.useContext)(I),k=()=>Object(n.useContext)(_),M=e=>{let{children:a}=e;const[t,s]=Object(n.useState)(null),c=Object(g.useHistory)();return Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await p.get("/dj-rest-auth/user/");s(e)}catch(e){console.log(e)}})()}),[]),Object(n.useMemo)((()=>{O.interceptors.request.use((async e=>{if(localStorage.getItem("refreshTokenTimestamp"))try{await b.a.post("/dj-rest-auth/token/refresh/")}catch(a){return s((e=>(e&&c.push("/signin"),null))),f(),e}return e}),(e=>Promise.reject(e))),p.interceptors.response.use((e=>e),(async e=>{var a;if(401===(null===(a=e.response)||void 0===a?void 0:a.status)){try{await b.a.post("/dj-rest-auth/token/refresh/")}catch(e){s((e=>(e&&c.push("/signin"),null))),f()}return b()(e.config)}return Promise.reject(e)}))}),[c]),Object(A.jsx)(I.Provider,{value:t,children:Object(A.jsx)(_.Provider,{value:s,children:a})})};var B=()=>{const[e,a]=Object(n.useState)(!1),t=Object(n.useRef)(null);return Object(n.useEffect)((()=>{const e=e=>{t.current&&!t.current.contains(e.target)&&a(!1)};return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}}),[t]),{expanded:e,setExpanded:a,ref:t}};const P=Object(n.createContext)(),T=Object(n.createContext)(),L=()=>Object(n.useContext)(P),F=e=>{let{children:a}=e;const[t,s]=Object(n.useState)("dark");return Object(A.jsx)(P.Provider,{value:t,children:Object(A.jsx)(T.Provider,{value:s,children:a})})};var G=()=>{const e=w(),a=k(),t=L(),s=Object(n.useContext)(T),[c,d]=Object(n.useState)("light"===t),{expanded:u,setExpanded:m,ref:g}=B(),O=Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(o.b,{className:j.a.NavLink,activeClassName:j.a.Active,to:"/signin",children:[Object(A.jsx)("i",{className:"fa-solid fa-arrow-right-to-bracket"}),Object(A.jsx)("span",{children:"Login"})]}),Object(A.jsxs)(o.b,{className:j.a.NavLink,activeClassName:j.a.Active,to:"/signup",children:[Object(A.jsx)("i",{className:"fa-regular fa-user"}),Object(A.jsx)("span",{children:"Sign Up"})]})]}),p=Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(o.b,{className:j.a.NavLink,activeClassName:j.a.Active,to:"/profile/".concat(null===e||void 0===e?void 0:e.profile_id),children:[Object(A.jsx)("i",{className:"fa-solid fa-user"}),Object(A.jsx)("span",{children:"Profile"})]}),Object(A.jsxs)(o.b,{className:j.a.NavLink,to:"/",onClick:()=>{(async()=>{try{await b.a.post("/dj-rest-auth/logout/"),a(null)}catch(e){console.log(e)}})()},children:[Object(A.jsx)("i",{className:"fa-solid fa-person-walking-arrow-right"}),Object(A.jsx)("span",{children:"Logout"})]})]});return Object(A.jsx)(r.a,{expanded:u,className:j.a.NavBar,fixed:"top",expand:"md",children:Object(A.jsxs)(i.a,{children:[Object(A.jsx)(o.b,{to:"/",children:Object(A.jsx)(r.a.Brand,{children:Object(A.jsx)("h2",{className:j.a.FreckleFaceFont,children:"Sudoku"})})}),Object(A.jsx)(r.a.Toggle,{ref:g,"aria-controls":"basic-navbar-nav",onClick:()=>m(!u)}),Object(A.jsx)(r.a.Collapse,{id:"basic-navbar-nav",children:Object(A.jsxs)(l.a,{className:"ml-auto text-left",children:[Object(A.jsx)("button",{"aria-label":"theme-toggle-button",className:"".concat(h.a.Button),onClick:()=>{s("light"===t?"dark":"light"),d(!c)},children:"light"===t?Object(A.jsx)("i",{className:"fa-solid fa-moon"}):Object(A.jsx)("i",{className:"fa-solid fa-sun"})}),e?p:O,Object(A.jsx)(o.b,{exact:!0,className:j.a.NavLink,activeClassName:j.a.Active,to:"/",children:Object(A.jsxs)("div",{className:"d-flex align-items-center",children:[Object(A.jsx)("i",{className:"fa-solid fa-house"}),Object(A.jsx)("span",{children:"Home"})]})})]})})]})})},R=t(22),D=t.n(R),U=t(6),z=t(13),E=t.n(z),H=t(101),W=t(60),K=t(105),V=t(108),J=t(102);const Q=e=>{const a=Object(U.useHistory)();Object(n.useEffect)((()=>{(async()=>{try{await b.a.post("dj-rest-auth/token/refresh/"),"loggedIn"===e&&a.push("/")}catch(t){"loggedOut"===e&&a.push("/")}})()}),[a,e])};var X=()=>{var e,a,t,s;Q("loggedIn");const[c,r]=Object(n.useState)({username:"",password1:"",password2:""}),{username:l,password1:d,password2:j}=c,[u,m]=Object(n.useState)({}),g=Object(U.useHistory)(),O=e=>{r({...c,[e.target.name]:e.target.value})};return Object(A.jsx)(H.a,{className:E.a.Row,children:Object(A.jsxs)(W.a,{className:"my-auto py-2 p-md-2",md:{size:6},children:[Object(A.jsxs)(i.a,{className:"".concat(D.a.Content," p-4 "),children:[Object(A.jsx)("h1",{className:E.a.Header,children:"sign up"}),Object(A.jsx)(H.a,{className:"d-flex justify-content-center",children:Object(A.jsxs)(K.a,{onSubmit:async e=>{e.preventDefault();try{await b.a.post("/dj-rest-auth/registration/",c),g.push("/signin")}catch(t){var a;m(null===(a=t.response)||void 0===a?void 0:a.data)}},className:"text-center",children:[Object(A.jsxs)(K.a.Group,{controlId:"username",children:[Object(A.jsx)(K.a.Label,{className:"d-none",children:"Email address"}),Object(A.jsx)(K.a.Control,{className:"".concat(E.a.Input," rounded"),type:"text",placeholder:"Username",name:"username",value:l,onChange:O})]}),null===(e=u.username)||void 0===e?void 0:e.map(((e,a)=>Object(A.jsx)(V.a,{variant:"warning",children:e},a))),Object(A.jsxs)(K.a.Group,{controlId:"password1",children:[Object(A.jsx)(K.a.Label,{className:"d-none",children:"Password"}),Object(A.jsx)(K.a.Control,{className:"".concat(E.a.Input," rounded"),type:"password",placeholder:"Password",name:"password1",value:d,onChange:O})]}),null===(a=u.password1)||void 0===a?void 0:a.map(((e,a)=>Object(A.jsx)(V.a,{variant:"warning",children:e},a))),Object(A.jsxs)(K.a.Group,{controlId:"password2",children:[Object(A.jsx)(K.a.Label,{className:"d-none",children:"Confirm Password"}),Object(A.jsx)(K.a.Control,{className:"".concat(E.a.Input," rounded"),type:"password",placeholder:"Confirm Password",name:"password2",value:j,onChange:O})]}),null===(t=u.password2)||void 0===t?void 0:t.map(((e,a)=>Object(A.jsx)(V.a,{variant:"warning",children:e},a))),Object(A.jsx)(J.a,{className:"".concat(h.a.Button," ").concat(E.a.HalfWidth),type:"submit",children:"Sign Up"}),null===(s=u.non_field_errors)||void 0===s?void 0:s.map(((e,a)=>Object(A.jsx)(V.a,{variant:"warning",className:"mt-3",children:e},a)))]})})]}),Object(A.jsx)(i.a,{className:"mt-3 ".concat(D.a.Content),children:Object(A.jsxs)(o.a,{className:E.a.Link,to:"/signin",children:["Already have an account? ",Object(A.jsx)("span",{children:"Sign in"})]})})]})})};var Z=()=>{var e,a,t;Q("loggedIn");const s=k(),[c,r]=Object(n.useState)({username:"",password:""}),{username:l,password:d}=c,[j,u]=Object(n.useState)({}),m=Object(U.useHistory)(),g=e=>{r({...c,[e.target.name]:e.target.value})};return Object(A.jsx)(H.a,{className:E.a.Row,children:Object(A.jsxs)(W.a,{className:"my-auto py-2 p-md-2",md:{size:6},children:[Object(A.jsxs)(i.a,{className:"".concat(D.a.Content),children:[Object(A.jsx)("h1",{className:E.a.Header,children:"Sign In"}),Object(A.jsx)(H.a,{className:"d-flex justify-content-center",children:Object(A.jsxs)(K.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await b.a.post("/dj-rest-auth/login/",c);s(e.user),(e=>{const a=Object(x.a)(null===e||void 0===e?void 0:e.refresh_token).exp;localStorage.setItem("refreshTokenTimestamp",a)})(e),m.goBack()}catch(t){var a;console.log(t.message),u(null===(a=t.response)||void 0===a?void 0:a.data)}},className:"text-center",children:[Object(A.jsxs)(K.a.Group,{controlId:"username",children:[Object(A.jsx)(K.a.Label,{className:"d-none",children:"User Name"}),Object(A.jsx)(K.a.Control,{className:"".concat(E.a.Input," rounded"),type:"text",placeholder:"Username",name:"username",value:l,onChange:g})]}),null===(e=j.username)||void 0===e?void 0:e.map(((e,a)=>Object(A.jsx)(V.a,{variant:"warning",children:e},a))),Object(A.jsxs)(K.a.Group,{controlId:"password",children:[Object(A.jsx)(K.a.Label,{className:"d-none",children:"Password"}),Object(A.jsx)(K.a.Control,{className:"".concat(E.a.Input," rounded"),type:"password",placeholder:"Password",name:"password",value:d,onChange:g})]}),null===(a=j.password1)||void 0===a?void 0:a.map(((e,a)=>Object(A.jsx)(V.a,{variant:"warning",children:e},a))),Object(A.jsx)(J.a,{className:"".concat(h.a.Button," ").concat(E.a.HalfWidth),type:"submit",children:"Sign In"}),null===(t=j.non_field_errors)||void 0===t?void 0:t.map(((e,a)=>Object(A.jsx)(V.a,{variant:"warning",className:"mt-3",children:e},a)))]})})]}),Object(A.jsx)(i.a,{className:"mt-3 ".concat(D.a.Content),children:Object(A.jsxs)(o.a,{className:E.a.Link,to:"/signin",children:["Already have an account? ",Object(A.jsx)("span",{children:"Sign in"})]})})]})})},Y=t(103),q=t(61),$=t.n(q);var ee=e=>{let{spinner:a,src:t,message:n}=e;return Object(A.jsxs)("div",{className:"".concat($.a.Asset," p-4"),children:[a&&Object(A.jsx)(Y.a,{animation:"border"}),t&&Object(A.jsx)("img",{src:t,alt:n}),n&&Object(A.jsx)("p",{className:"mt-4",children:n})]})};var ae=()=>Object(A.jsx)("div",{children:Object(A.jsx)(ee,{src:"data:image/png;base64,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",message:"Sorry, the page you're looking for doesn't exist"})}),te=t(62),ne=t.n(te),se=t(18);const ce=["Easy","Medium","Hard","Difficult"],re="puzzleData",ie={AF:"Afghanistan",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TP:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji Islands",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"North Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",GB:"United Kingdom of Great Britain and Northern Ireland",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",CD:"The Democratic Republic of Congo",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Vietnam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};var le=e=>{let{message:a,fadeIn:t}=e;const n=Object(se.useHistory)(),s=e=>{const a=e.target.getAttribute("data-difficulty");window.localStorage.removeItem(re),n.push("/get_puzzle/".concat(a))};return Object(A.jsxs)("div",{className:t&&ne.a.FadeIn,children:[Object(A.jsx)(H.a,{className:"d-flex justify-content-center text-center mt-5",children:Object(A.jsxs)("h5",{children:[a||"Choose Difficulty Level"," "]})}),Object(A.jsxs)(H.a,{className:"d-flex justify-content-center mt-2",children:[Object(A.jsx)(J.a,{onClick:s,"data-difficulty":"0",className:"mx-2 ".concat(h.a.Button),children:"Easy"}),Object(A.jsx)(J.a,{onClick:s,"data-difficulty":"1",className:"mx-2 ".concat(h.a.Button),children:"Medium"}),Object(A.jsx)(J.a,{onClick:s,"data-difficulty":"2",className:"mx-2 ".concat(h.a.Button),children:"Hard"}),Object(A.jsx)(J.a,{onClick:s,"data-difficulty":"3",className:"mx-2 ".concat(h.a.Button),children:"Vicious"})]})]})};var oe=()=>{const[e,a]=Object(n.useState)(null);return Object(n.useEffect)((()=>{const e=window.localStorage.getItem(re);if(e){const t=JSON.parse(e);a(t)}}),[]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{children:Object(A.jsxs)("h1",{className:"text-center mt-5",children:["Sudoku",Object(A.jsx)("small",{className:"text-muted",children:" (demo)"})]})}),Object(A.jsx)(le,{}),Object(A.jsx)(H.a,{className:"justify-content-center mt-5",children:e&&Object(A.jsxs)(se.NavLink,{className:j.a.NavLink,activeClassName:j.a.Active,to:"/get_puzzle/".concat(e.difficulty),children:[Object(A.jsx)("span",{children:"Or return to your previous puzzle"}),Object(A.jsx)("i",{className:"fa-solid fa-arrow-rotate-left ml-1"}),"                    "]})})]})},de=t(45),je=t.n(de);var ue=e=>{const{handleDigitChoice:a,exhaustedDigits:t}=e,n=[1,2,3,4,5,6,7,8,9].map((e=>{const n=!t.includes(e);return Object(A.jsx)("div",{className:n?je.a.Digit:je.a.Inactive_Digit,onClick:n?()=>a(e):null,children:e},e)}));return Object(A.jsx)(A.Fragment,{children:n})},he=t(23),me=t.n(he);var be=e=>{const{value:a,index:t,selected:s,warning:c,illegal:r,handleSelection:i,correct:l}=e,[o,d]=Object(n.useState)(me.a.Cell);return Object(n.useEffect)((()=>{const e=s?me.a.Selected:"",a=c?me.a.Warning:"",t=r?me.a.Clashing_Cell:"",n=s&&c?me.a.Offending_Choice:"";d([me.a.Cell,e,a,t,n].join(" "))}),[s,c,r]),Object(n.useEffect)((()=>{if(l){setTimeout((()=>{d("".concat(me.a.Cell," ").concat(me.a.spin_to_correct))}),t%9*30)}}),[l,t]),Object(A.jsx)("div",{className:o,onClick:()=>i(t),children:(j=a,j>="0"&&j<="9"?a:"")});var j},ge=t(63),Oe=t.n(ge);var pe=e=>{let{grid:a,selectedCell:t,handleCellSelection:n,warningGroup:s,clashingCell:c,completed:r}=e;const i=null===a||void 0===a?void 0:a.split("").map(((e,a)=>Object(A.jsx)(be,{value:e,index:a,selected:a===t,warning:s.includes(a),illegal:a===c,correct:r,handleSelection:n},a)));return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(H.a,{children:Object(A.jsx)("div",{className:Oe.a.Grid,children:i})})})},xe=t(38),fe=t.n(xe);const ve=e=>{let{completenessPercentage:a,shorthand:t}=e;const n={clipPath:"polygon(0 0, ".concat(a,"% 0, ").concat(a,"% 100%, 0 100%)")},s="".concat(a,t?"%":"% complete");return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:fe.a.container,children:[Object(A.jsx)("div",{className:fe.a.underlayer,children:s}),Object(A.jsx)("div",{className:fe.a.overlayer,style:n,children:s})]})})};var Se=t(39),Ce=t.n(Se);var Ne=e=>{let{startTime:a}=e;const[t,s]=Object(n.useState)(0);Object(n.useEffect)((()=>{const e=setInterval((()=>{if(a){const e=new Date-new Date(a);s(e)}}),1e3);return()=>clearInterval(e)}),[a]);const c=y(t);return Object(A.jsx)("div",{children:c})};var ye=()=>{const{difficulty:e}=Object(se.useParams)(),[a,t]=Object(n.useState)({grid:Array(82).join("-")}),[s,c]=Object(n.useState)(0),[r,l]=Object(n.useState)([]),o=Object(se.useHistory)(),d=w(),[j,u]=Object(n.useState)(0),[m,b]=Object(n.useState)([]),[g,p]=Object(n.useState)(-1),[x,f]=Object(n.useState)([]),y=e=>{const{isValid:t,clashingCell:n,group:s}=((e,a,t)=>{const n=t.toString();if("-"===n)return{isValid:!0,clashingCell:-1,group:[]};let s=!0,c=-1,r=[],i=9*Math.floor(a/9);for(let u=i;u<i+9;u++)if(e[u]===n&&u!==a){s=!1,c=u,r=v(a);break}i=a%9;for(let u=i;u<=81;u+=9)if(e[u]===n&&u!==a){s=!1,c=u,r=S(a);break}let l=Math.floor(a/9),o=a%9,d=o-o%3,j=l-l%3;for(let u=d;u<d+3;u+=1)for(let t=j;t<j+3;t+=1){let i=9*t+u;e[i]===n&&i!==a&&(s=!1,r=C(a),c=i)}return{isValid:s,clashingCell:c,group:r}})(a.grid,j,e);t?m.length>0&&(b([]),p(-1)):(b(s),p(n))};Object(n.useEffect)((()=>{const a=window.localStorage.getItem(re);if(a){const e=JSON.parse(a);t(e)}else(async()=>{try{const a="/get_random_puzzle/".concat(e,"/"),{data:n}=await O.get(a);t(n)}catch(a){console.log(a.toJSON()),o.push("/")}})()}),[e,o]),Object(n.useEffect)((()=>{if(null!=a.grid){const e=a.grid.split("").filter((e=>"-"!==e)).length/81*100;c(e)}a.grid&&l((e=>{const a=new Array(10).fill(0),t=[];for(let n=0;n<81;n++)"-"!==e.charAt(n)&&a[parseInt(e.charAt(n))]++;for(let n=1;n<=10;n++)9===a[n]&&t.push(n);return t})(a.grid))}),[a,d]),Object(n.useEffect)((()=>{s>=100&&(window.localStorage.removeItem(re),(async()=>{const e=new FormData;e.append("owner",null===d||void 0===d?void 0:d.pk),e.append("puzzle",a.id),e.append("grid",a.grid),e.append("started_on",a.start_time),e.append("completed_at",(new Date).toISOString()),e.append("completed","true");try{const{data:a}=await O.post("/create_puzzle_instance/",e);window.setTimeout((()=>o.push("/leaderboard/".concat(a.id))),2e3)}catch(t){console.log(t)}})())}),[s,d,a,o]);const I=100===s?"".concat(Ce.a.SuccessMessage," ").concat(Ce.a.RevealMessage):"".concat(Ce.a.SuccessMessage);return Object(A.jsxs)(i.a,{children:[Object(A.jsxs)(H.a,{className:"d-flex justify-content-center mt-3",children:[Object(A.jsx)("p",{className:"mr-5",children:ce[e].toUpperCase()}),Object(A.jsx)(Ne,{startTime:a.start_time})]}),Object(A.jsx)(H.a,{className:"mt-2",children:Object(A.jsx)(W.a,{xs:{span:8,offset:2},sm:{span:6,offset:3},md:{span:4,offset:4},children:Object(A.jsx)(ve,{completenessPercentage:Math.round(s),shorthand:!0})})}),Object(A.jsxs)(H.a,{className:"d-flex justify-content-center mt-4 position-relative",children:[Object(A.jsx)(pe,{grid:null===a||void 0===a?void 0:a.grid,selectedCell:j,handleCellSelection:e=>{0===m.length&&u(e)},warningGroup:m,clashingCell:g,completed:100===s}),Object(A.jsx)("div",{className:I,children:Object(A.jsx)("h1",{children:"Well Done!"})})]}),Object(A.jsx)(H.a,{className:"d-flex justify-content-center mt-3",children:Object(A.jsx)(ue,{exhaustedDigits:r,handleDigitChoice:e=>{const n=a.grid[j];y(e),t((a=>{const t=j,n=a.grid,s=N(n,t,e),c={...a,grid:s};return window.localStorage.setItem(re,JSON.stringify(c)),c})),f((e=>[...e,{index:j,previousValue:n}]))}})}),Object(A.jsx)(H.a,{className:"d-flex justify-content-center mt-3",children:Object(A.jsx)(J.a,{className:"".concat(h.a.Button," mx-2"),onClick:()=>{if(x.length<1)return void alert("This is the original puzzle - can't undo from here");const e=x[x.length-1],{index:n,previousValue:s}=e;t((e=>{const t={...e,grid:N(a.grid,n,s)};return window.localStorage.setItem(re,JSON.stringify(t)),t})),f((e=>(e.pop(),e))),y(s)},children:Object(A.jsx)("i",{className:"fa-solid fa-arrow-rotate-left"})})})]})},Ae=t(64),Ie=t.n(Ae);var _e=e=>{let{src:a,height:t=45,text:n}=e;return Object(A.jsxs)("span",{children:[Object(A.jsx)("img",{className:Ie.a.Avatar,src:a,height:t,width:t,alt:"avatar"}),n]})},we=t(34);var ke=()=>{var e;const[a,t]=Object(n.useState)({avatar:"",nickname:"",created_on:"",owner:""}),{avatar:s,nickname:c,created_on:r,owner:i,country:l}=a,{id:o}=Object(se.useParams)(),[d,j]=Object(n.useState)({}),[u,m]=Object(n.useState)(!1),b=e=>{const a=e.target.value;console.log(a),t((e=>({...e,country:a})))},g=Object(n.useRef)();Object(n.useEffect)((()=>{(async()=>{try{const{data:e}=await O.get("profile/".concat(o));t(e)}catch(e){console.log(e)}})()}),[o]);let p="";if(""!==r){const e=new Date(r),a=e.toLocaleString("default",{month:"short"});p="".concat(a," ").concat(e.getFullYear())}return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(H.a,{className:"mt-5",children:[Object(A.jsx)(W.a,{md:{span:4,offset:2},className:"text-center",children:Object(A.jsx)(_e,{src:s,height:300})}),Object(A.jsxs)(W.a,{md:4,className:"text-center my-auto",children:[Object(A.jsx)(we.a,{className:"emojiFlag",countryCode:l,svg:!0,style:{fontSize:"2em",lineHeight:"2em"},"aria-label":"United States"}),Object(A.jsx)("h3",{className:"mt-2",children:a.nickname}),Object(A.jsxs)("span",{children:["Joined ",p]}),Object(A.jsx)("br",{}),!u&&Object(A.jsx)(J.a,{onClick:()=>m(!u),className:"".concat(h.a.Button," ").concat(h.a.Wider," mt-2"),children:"Edit"})]})]}),u&&Object(A.jsxs)(K.a,{onSubmit:async e=>{var a;e.preventDefault();const t=new FormData;var n;(t.append("nickname",c),t.append("owner",i),t.append("country",l),null!==g&&void 0!==g&&null!==(a=g.current)&&void 0!==a&&a.files[0])&&t.append("avatar",null===g||void 0===g||null===(n=g.current)||void 0===n?void 0:n.files[0]);try{const e="profile/"+o+"/";try{await O.put(e,t),m(!1)}catch(r){console.log(r)}}catch(r){var s;console.log(r),j(null===(s=r.response)||void 0===s?void 0:s.data)}},children:[Object(A.jsx)(H.a,{className:"mt-5 justify-content-center",children:Object(A.jsx)(W.a,{md:4,className:"mx-2",children:Object(A.jsx)(K.a.Group,{controlId:"nickname",children:Object(A.jsx)(K.a.Control,{type:"text",placeholder:"Nickname",onChange:e=>{t({...a,nickname:e.target.value})}})})})}),Object(A.jsx)(H.a,{className:"justify-content-center",children:Object(A.jsx)(W.a,{md:4,className:"mx-2",children:Object(A.jsxs)(K.a.Group,{controlId:"avatar",children:[Object(A.jsx)(K.a.Label,{children:"Avatar"}),Object(A.jsx)(K.a.File,{id:"image-upload",ref:g,accept:"image/*",onChange:e=>{e.target.files.length&&t({...a,avatar:URL.createObjectURL(e.target.files[0])})}})]})})}),Object(A.jsx)(H.a,{className:"justify-content-center",children:Object(A.jsx)(W.a,{md:4,className:"mx-2",children:Object(A.jsxs)(K.a.Group,{controlId:"exampleForm.SelectCustom",children:[Object(A.jsx)(K.a.Label,{children:"Country"}),Object(A.jsx)(K.a.Control,{as:"select",custom:!0,onChange:b,children:Object.keys(ie).map((e=>Object(A.jsx)("option",{selected:e===l,value:e,onChange:b,children:ie[e]},e)))})]})})}),Object(A.jsx)(H.a,{className:"mt-3 d-flex justify-content-center text-center",children:Object(A.jsx)(J.a,{className:"".concat(h.a.Button," ").concat(h.a.Wider),type:"submit",children:"Save Profile"})}),null===d||void 0===d||null===(e=d.content)||void 0===e?void 0:e.map(((e,a)=>Object(A.jsx)(V.a,{variant:"warning",children:e},a)))]})]})},Me=t(46),Be=t.n(Me),Pe=t(104),Te=t(32),Le=t.n(Te);var Fe=()=>{const{id:e}=Object(se.useParams)(),[a,t]=Object(n.useState)(null);Object(n.useEffect)((()=>{(async()=>{try{const{data:a}=await O.get("/get_leaderboard/".concat(e,"/"));t(a)}catch(a){console.log(a)}})()}),[e]);const s=a&&a.top_n.map(((e,t)=>Object(A.jsxs)("tr",{className:a.ranking===t?Le.a.UserRanking:Le.a.RankingRow,children:[Object(A.jsx)("td",{children:t+1}),Object(A.jsx)("td",{children:e.owner_name}),Object(A.jsx)("td",{children:y(e.duration)}),Object(A.jsx)("td",{children:Object(A.jsx)(we.a,{className:"emojiFlag",countryCode:e.country,svg:!0,style:{fontSize:"1.5em",lineHeight:"1.5em"},"aria-label":"United States"})})]},t)));return a&&a.ranking>a.top_n.length+1&&s.push(Object(A.jsxs)("tr",{className:Le.a.RankingRow,children:[Object(A.jsx)("td",{children:"..."}),Object(A.jsx)("td",{children:"............"}),Object(A.jsx)("td",{children:"............"}),Object(A.jsx)("td",{children:"......"})]},s.length+1)),a&&a.ranking>a.top_n.length&&s.push(Object(A.jsxs)("tr",{className:Le.a.UserRanking,children:[Object(A.jsx)("td",{children:a.ranking}),Object(A.jsx)("td",{children:a.puzzle_instance.owner_name}),Object(A.jsx)("td",{children:y(a.puzzle_instance.duration)}),Object(A.jsx)("td",{children:Object(A.jsx)(we.a,{className:"emojiFlag",countryCode:a.puzzle_instance.country,svg:!0,style:{fontSize:"1.5em",lineHeight:"1.5em"},"aria-label":"United States"})})]},s.length+2)),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(H.a,{className:"d-flex justify-content-center mt-4",children:Object(A.jsx)("h4",{children:"Leaderboard"})}),a&&Object(A.jsx)(H.a,{className:"d-flex justify-content-center mt-4",children:Object(A.jsxs)("h6",{children:[a.puzzle_instance.difficulty," Level"]})}),Object(A.jsx)(H.a,{className:"d-flex justify-content-center mt-2",children:Object(A.jsx)(W.a,{md:8,children:Object(A.jsxs)(Pe.a,{borderless:!0,size:"sm",className:"text-center",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{className:Le.a.RankingHeader,children:[Object(A.jsx)("td",{children:"Rank"}),Object(A.jsx)("td",{children:"Player"}),Object(A.jsx)("td",{children:"Time"})]})}),Object(A.jsx)("tbody",{children:s})]})})}),Object(A.jsx)(le,{message:"Play again?",fadeIn:!0})]})};var Ge=function(){const e="light"===L()?Be.a.lightTheme:Be.a.darkTheme;return Object(A.jsxs)("div",{className:"".concat(e," ").concat(D.a.App),children:[Object(A.jsx)(G,{}),Object(A.jsx)(i.a,{className:D.a.Main,children:Object(A.jsxs)(g.Switch,{children:[Object(A.jsx)(g.Route,{exact:!0,path:"/get_puzzle/:difficulty",render:()=>Object(A.jsx)(ye,{})}),Object(A.jsx)(g.Route,{exact:!0,path:"/",render:()=>Object(A.jsx)(oe,{})}),Object(A.jsx)(g.Route,{exact:!0,path:"/leaderboard/:id",render:()=>Object(A.jsx)(Fe,{})}),Object(A.jsx)(g.Route,{exact:!0,path:"/profile/:id",render:()=>Object(A.jsx)(ke,{})}),Object(A.jsx)(g.Route,{exact:!0,path:"/signin",render:()=>Object(A.jsx)(Z,{})}),Object(A.jsx)(g.Route,{exact:!0,path:"/signup",render:()=>Object(A.jsx)(X,{})}),Object(A.jsx)(g.Route,{render:()=>Object(A.jsx)(ae,{})})]})})]})};var Re=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,109)).then((a=>{let{getCLS:t,getFID:n,getFCP:s,getLCP:c,getTTFB:r}=a;t(e),n(e),s(e),c(e),r(e)}))};c.a.render(Object(A.jsx)(g.BrowserRouter,{children:Object(A.jsx)(F,{children:Object(A.jsx)(M,{children:Object(A.jsx)(Ge,{})})})}),document.getElementById("root")),Re()}},[[99,1,2]]]);
//# sourceMappingURL=main.ed8131ab.chunk.js.map