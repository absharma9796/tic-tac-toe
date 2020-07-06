(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{110:function(e,a){},113:function(e,a,t){},118:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(52),c=t.n(r),s=(t(61),t(5)),o=(t(62),t(8)),m=t.n(o),i=t(22),f=t(53),h=t.n(f),d=function(e){var a=e.className,t=e.size;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",title:"home",className:a,height:t,viewBox:"0 0 24 24",width:t},n.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n.a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"}))},E=t(21),u=t.n(E),p=function(e){u()("http://192.168.43.80:3000").emit("create",e)},b=function(){var e=Object(l.useState)("home"),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)({current:"",opponent:""}),o=Object(s.a)(c,2),f=(o[0],o[1],Object(l.useState)("")),E=Object(s.a)(f,2),u=E[0],b=E[1],v=Object(l.useState)(""),y=Object(s.a)(v,2),N=y[0],x=y[1],g=Object(l.useState)(""),w=Object(s.a)(g,2),M=w[0],Z=w[1],C=Object(l.useState)(!1),j=Object(s.a)(C,2),k=(j[0],j[1]),O=Object(l.useState)(""),S=Object(s.a)(O,2),A=(S[0],S[1]),_=function(){var e=Object(i.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k(!0),M.length){e.next=4;break}return alert("Please choose a side"),e.abrupt("return");case 4:if(u.length){e.next=7;break}return alert("Please enter a player name in home screen"),e.abrupt("return");case 7:a="".concat(Math.floor(1e5+9e5*Math.random())),p(a),r("wait");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(N.length<6)){e.next=3;break}return alert("Enter a valid game code"),e.abrupt("return");case 3:return e.next=5,h.a.post("/joingame",{username:u,code:N}).then((function(e){console.log(e),e.data.success&&(Z(e.data.avatar),A(e.data.opponent))})).catch((function(e){console.log(e)}));case 5:e.sent,r("wait"),p();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return"home"===t?n.a.createElement("div",{className:"home-screen"},n.a.createElement("h5",null,"Welcome to Tic-Tac-Toe"),n.a.createElement("div",{className:"center-area"},n.a.createElement("div",{className:"ca-box"},n.a.createElement("label",null,"What should we call you?"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"player name",value:u,onChange:function(e){b(e.target.value)}})),n.a.createElement("div",{className:"btn-container"},n.a.createElement("button",{className:"btn btn-dark",onClick:function(){u.length?r("choose"):alert("Enter a player name")}},"Start Game"),n.a.createElement("span",{className:"span-or"},"OR"),n.a.createElement("button",{className:"btn btn-dark",onClick:function(){u.length?r("code"):alert("Enter a player name")}},"Join Game")))):"choose"===t?n.a.createElement("div",{className:"home-screen"},n.a.createElement("div",{className:"home-logo-container",onClick:function(){return r("home")}},n.a.createElement(d,{size:"24",className:"home-logo"})),n.a.createElement("h5",null,"Hello ",u),n.a.createElement("div",{className:"choose-box"},n.a.createElement("label",null,"Choose your side"),n.a.createElement("div",{className:"x"===M?"tile is-active":"tile",onClick:function(){return Z("x")}},n.a.createElement("span",{className:"material-icons"},"clear"),n.a.createElement("span",{className:"sub"},"men")),n.a.createElement("div",{className:"o"===M?"tile is-active":"tile",onClick:function(){return Z("o")}},n.a.createElement("span",{className:"sub"},"potat"),n.a.createElement("span",{className:"material-icons"},"panorama_fish_eye"))),n.a.createElement("button",{className:"btn btn-dark",onClick:_},"Start Game")):"code"===t?n.a.createElement("div",{className:"home-screen"},n.a.createElement("div",{className:"home-logo-container",onClick:function(){return r("home")}},n.a.createElement(d,{size:"24",className:"home-logo"})),n.a.createElement("h5",null,"Hello ",u),n.a.createElement("div",{className:"center-area"},n.a.createElement("div",{className:"ca-box"},n.a.createElement("label",null,"Enter game code"),n.a.createElement("input",{type:"text",className:"form-control",maxLength:"6",placeholder:"code",value:N,onChange:function(e){return x(e.target.value)}})),n.a.createElement("div",{className:"btn-container"},n.a.createElement("button",{className:"btn btn-dark",onClick:z},"Start Game")))):"wait"===t?n.a.createElement("div",{className:"home-screen"},n.a.createElement("div",{className:"home-logo-container",onClick:function(){return r("home")}},n.a.createElement(d,{size:"24",className:"home-logo"})),n.a.createElement("h5",null,"Waiting for other player"),n.a.createElement("div",{className:"wait-box"},n.a.createElement("label",null,"Share this code with other player"),n.a.createElement("div",{className:"code-tile"},n.a.createElement("span",{className:"code-text"},N),n.a.createElement("span",{className:"material-icons"},"content_copy")),n.a.createElement("div",{className:"player-box"},n.a.createElement("div",{className:"player-tile"},"x"===M?n.a.createElement("span",{className:"material-icons"},"clear"):n.a.createElement("span",{className:"material-icons"},"panorama_fish_eye")),n.a.createElement("div",{className:"player-tile"},"o"===M?n.a.createElement("span",{className:"material-icons"},"clear"):n.a.createElement("span",{className:"material-icons"},"panorama_fish_eye"))))):void 0},v=t(55),y=t(1),N=(t(113),function(){return n.a.createElement("svg",{id:"a4f32909-a035-490f-bc72-f3acc33ef0f1",className:"bcg-image-svg","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 786.29468 749.1971"},n.a.createElement("title",null,"friends"),n.a.createElement("ellipse",{cx:"428.29468",cy:"670.89024",rx:"358",ry:"40",fill:"#3f3d56"}),n.a.createElement("path",{d:"M812.69445,702.0311l6.17411,19.02315s29.736,30.72079,18.98128,39.04755-34.884-35.56837-34.884-35.56837l-4.447-21.47613Z",transform:"translate(-206.85266 -75.40145)",fill:"#ffb8b8"}),n.a.createElement("path",{d:"M755.64734,554.79169l9-3s14,4,16,18,17,85,17,85,6,3,2,8,20,50,20,50l-19,9s-38-40-38-44,1-8,1-12-1-4,0-7a32.16669,32.16669,0,0,0,1-8l-7-16Z",transform:"translate(-206.85266 -75.40145)",fill:"#6c63ff"}),n.a.createElement("ellipse",{cx:"90.41777",cy:"363.49768",rx:"90.41777",ry:"184.48877",fill:"#6c63ff"}),n.a.createElement("path",{d:"M296.44031,440.81268c4.51025-80.30664,13.59765-134.55127,13.689-135.08984l-1.97168-.334c-.09131.53907-9.19482,54.87061-13.7124,135.28077-4.16894,74.21386-5.1748,186.46679,13.71192,299.78613l1.97265-.32813C291.27527,627.00067,292.27869,514.91766,296.44031,440.81268Z",transform:"translate(-206.85266 -75.40145)",fill:"#3f3d56"}),n.a.createElement("rect",{x:"291.31649",y:"423.24475",width:"92.72517",height:"2.00012",transform:"translate(-367.08716 134.1508) rotate(-28.1569)",fill:"#3f3d56"}),n.a.createElement("rect",{x:"250.38166",y:"399.80166",width:"2.00012",height:"92.72517",transform:"translate(-467.45648 381.99296) rotate(-61.8584)",fill:"#3f3d56"}),n.a.createElement("ellipse",{cx:"304.56511",cy:"252.45832",rx:"123.72957",ry:"252.45832",fill:"#e6e6e6"}),n.a.createElement("path",{d:"M509.91492,330.446c6.17285-109.91113,18.61084-184.15185,18.73584-184.88916l-1.97168-.334c-.125.73779-12.5791,75.06543-18.75928,185.08008-5.70459,101.53759-7.08057,255.11767,18.75879,410.15283l1.97266-.32813C502.84412,585.28387,504.21814,431.87469,509.91492,330.446Z",transform:"translate(-206.85266 -75.40145)",fill:"#3f3d56"}),n.a.createElement("rect",{x:"503.27009",y:"306.80628",width:"126.88732",height:"2.00012",transform:"translate(-285.03704 228.45225) rotate(-28.1571)",fill:"#3f3d56"}),n.a.createElement("rect",{x:"447.62287",y:"274.35779",width:"2.00012",height:"126.88732",transform:"translate(-267.69188 498.66399) rotate(-61.8584)",fill:"#3f3d56"}),n.a.createElement("ellipse",{cx:"201.49146",cy:"508.96817",rx:"46.22863",ry:"94.32509",fill:"#e6e6e6"}),n.a.createElement("path",{d:"M408.30341,588.43341l.27362.5116,41.79785-22.37207-.94336-1.76368-41.041,21.967c2.27112-41.80139,6.91614-69.86267,7.00977-70.41522l-1.97168-.334c-.10223.60339-5.62122,33.92651-7.58014,82.1449L364.455,576.0163,363.5116,577.78,405.30945,600.152l.499-.9328c-1.56732,39.79736-.68884,89.55963,7.61969,139.41034l1.97266-.32813C406.3421,683.949,406.14258,629.69867,408.30341,588.43341Z",transform:"translate(-206.85266 -75.40145)",fill:"#3f3d56"}),n.a.createElement("path",{d:"M767.8838,459.86565c-16.07417-27.39543-47.87565-28.67218-47.87565-28.67218s-30.98872-3.9971-50.86779,37.72647c-18.52888,38.88981-44.1011,76.4387-4.11692,85.54252l7.2223-22.67357,4.47274,24.3616a155.1105,155.1105,0,0,0,17.10774.29491c42.81983-1.39444,83.59924.408,82.2862-15.09055C774.367,520.75175,783.35039,486.22553,767.8838,459.86565Z",transform:"translate(-206.85266 -75.40145)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M655.84213,679.30051a61.23955,61.23955,0,0,1-1.94921,8.4635c-.95617,2.712-2.4324,5.22006-3.30667,7.96-2.78678,8.73379,1.07652,18.47175,7.24682,25.21311a40.722,40.722,0,0,0,19.88743,11.91139c5.56641,1.41209,11.35417,1.61532,17.09064,1.81153,15.88459.54331,32.17788,1.02938,47.22947-4.11969a81.7199,81.7199,0,0,0,13.72159-6.28756,10.2875,10.2875,0,0,0,3.56045-2.82771c1.148-1.64851,1.29485-3.78648,1.28483-5.801-.03378-6.79217-1.39894-13.5497-1.07481-20.33408.17953-3.75786.87679-7.51282.53357-11.25908a20.71019,20.71019,0,0,0-15.73776-17.89186c-4.2698-.92484-8.69846-.42089-13.04555.00071a329.78922,329.78922,0,0,1-33.95148,1.53123c-11.58212-.07457-23.09272-1.85786-34.61719-2.04411-3.40812-.05507-3.33927,1.00471-4.42429,4.33169A81.60486,81.60486,0,0,0,655.84213,679.30051Z",transform:"translate(-206.85266 -75.40145)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M610.5518,673.78022a33.98929,33.98929,0,0,0-9.533-1.02218,24.06038,24.06038,0,0,0-17.379,9.11386,24.49135,24.49135,0,0,0-4.71053,19.17721,40.53261,40.53261,0,0,0,3.77749,10.41167c2.52818,5.17506,5.56038,10.33824,10.2407,13.65454a39.73688,39.73688,0,0,0,9.0377,4.33923l24.6503,9.36656c3.62634,1.37793,7.25322,2.75606,10.91545,4.03375a211.89949,211.89949,0,0,0,57.01276,11.43233c5.919.35552,11.92757.45444,17.70188-.90474a5.749,5.749,0,0,0,3.62532-1.97555,6.30178,6.30178,0,0,0,.81-2.69858l1.51685-10.7108a9.04669,9.04669,0,0,0-.12893-4.51521c-.69486-1.80009-2.43661-2.93247-4.09733-3.89455-16.20583-9.38838-35.12808-14.56788-48.76876-27.45327-3.21124-3.03343-5.89853-7.84172-9.80015-9.90227-4.42438-2.33663-9.63493-3.67023-14.20814-5.82341C631.21684,681.70171,621.38727,676.29253,610.5518,673.78022Z",transform:"translate(-206.85266 -75.40145)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M635.16155,688.21992c8.71284,2.75379,45.4985,21.83206,51.80367,28.49317-.84515.30714-29.52024-15.90188-30.38066-16.16235-7.8213-2.36765-15.68608-4.75084-23.11356-8.2158-1.49421-.697-9.70725-3.97339-9.3353-5.875C624.55541,684.31414,633.61478,687.73105,635.16155,688.21992Z",transform:"translate(-206.85266 -75.40145)",opacity:"0.1"}),n.a.createElement("path",{d:"M743.85978,759.84212a2.0343,2.0343,0,0,0,1.3812-.41,2.1653,2.1653,0,0,0,.43173-1.60317l-.04059-14.59191c-4.16007-1.99922-8.81341-2.64-13.38091-3.25584L710.94,737.108c.48963.066-3.33213,9.25835-2.74614,10.48556,1.03282,2.163,8.92583,4.07993,11.15342,5.10119C727.09115,756.245,735.13807,760.148,743.85978,759.84212Z",transform:"translate(-206.85266 -75.40145)",fill:"#ffb8b8"}),n.a.createElement("path",{d:"M676.9961,743.18654c-4.02375.64644-8.51478,1.21786-11.12062,4.3772-3.30456,4.00647-1.89778,9.97911-.3214,14.94233a6.45447,6.45447,0,0,0,1.37074,2.71894c1.0758,1.0705,2.72438,1.22733,4.23256,1.32366,3.6696.23438,7.5748.418,10.78107-1.39754a47.28443,47.28443,0,0,0,4.188-3.13993,26.74288,26.74288,0,0,1,7.7-3.55079,77.27909,77.27909,0,0,1,15.45641-3.21287,23.853,23.853,0,0,0,6.08891-1.08262,6.77417,6.77417,0,0,0,4.28806-4.19924c.74268-2.65177-.7853-5.35534-2.25074-7.68092-1.8255-2.897-3.75946-5.94731-6.48137-8.07994-3.97094-3.11126-5.93524-.72288-9.93521,1.26808A83.77867,83.77867,0,0,1,676.9961,743.18654Z",transform:"translate(-206.85266 -75.40145)",fill:"#ffb8b8"}),n.a.createElement("path",{d:"M666.48083,746.8423l-25.54933-7.61685a33.56183,33.56183,0,0,0-9.50781-1.85838c-3.24017.00243-6.63019,1.074-8.73159,3.56168-1.98118,2.34535-2.54823,5.55078-3.04213,8.59145l-1.05653,6.50446a32.94531,32.94531,0,0,0-.59155,9.98844c.48326,3.3139,2.16045,6.6247,5.07562,8.22893,3.53553,1.94562,7.86877.99532,11.81463.18151a127.56684,127.56684,0,0,1,24.21179-2.61883c3.05812-.03689,6.26572.00175,8.968-1.44283,3.21217-1.71717,5.13389-5.348,5.46432-8.99972C674.039,755.80589,672.20292,748.54819,666.48083,746.8423Z",transform:"translate(-206.85266 -75.40145)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M753.90283,740.20469c3.31209-.58551,6.23519-2.48419,9.40888-3.60492,4.46715-1.57747,9.30811-1.57745,14.04108-1.56,1.73747.0064,3.5877.04569,5.034,1.01689,2.0848,1.4,2.61912,4.20158,2.97361,6.70237l2.13879,15.08837c.40229,2.838.80219,5.75186.17472,8.548s-2.517,5.49166-5.2678,6.213c-3.34092.87606-6.61612-1.27659-9.77059-2.69068-7.88433-3.5344-17.04941-2.631-25.27025-5.27268-1.52562-.49024-3.15957-1.23985-3.782-2.72788a6.25731,6.25731,0,0,1-.29423-2.60738c.14078-4.84984-.87334-11.4724.57427-16.10748C745.16523,739.03376,750.20569,740.20469,753.90283,740.20469Z",transform:"translate(-206.85266 -75.40145)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M807.97077,667.70718A43.99809,43.99809,0,0,1,823.6,666.63011c4.1783.4643,8.48322,1.637,11.53384,4.55405,3.71305,3.55044,4.90606,9.04129,5.00559,14.20093a44.614,44.614,0,0,1-9.56049,28.33464,25.588,25.588,0,0,1-5.46593,5.30736,35.84558,35.84558,0,0,1-7.11151,3.45671L762.79813,744.446c-14.52278,5.77778-29.09682,11.5723-44.24486,15.38131a3.43634,3.43634,0,0,1-4.64-1.69679,115.66858,115.66858,0,0,1-12.099-22.32378,2.0177,2.0177,0,0,1-.15588-1.6719,1.984,1.984,0,0,1,.815-.69995l39.04575-22.62864a39.47077,39.47077,0,0,0,7.94723-5.52315,19.897,19.897,0,0,0,4.08015-5.72956c.80935-1.70512.88485-5.729,1.91866-6.98929,1.0122-1.234,4.47473-1.33246,6.07391-1.81781a54.82107,54.82107,0,0,0,6.61239-2.52121c8.73424-3.94123,16.512-9.66764,24.8849-14.28241A63.54719,63.54719,0,0,1,807.97077,667.70718Z",transform:"translate(-206.85266 -75.40145)",fill:"#2f2e41"}),n.a.createElement("path",{d:"M785.83531,684.60617c-6.70819,5.08192-15.39412,9.75337-22.04265,14.9692-2.26907,1.78011-40.09506,23.2303-40.6299,26.07915,6.20271,1.05416,45.71452-26.82656,51.36768-29.60861s10.66448-6.70533,15.63028-10.59966c1.26549-.99244,6.62863-3.97587,2.99581-5.08467C791.11,679.737,787.34617,683.59021,785.83531,684.60617Z",transform:"translate(-206.85266 -75.40145)",opacity:"0.1"}),n.a.createElement("circle",{cx:"511.79468",cy:"415.39024",r:"38",fill:"#ffb8b8"}),n.a.createElement("path",{d:"M734.64734,522.79169s-6,15,5,21-34,54-34,54l-20-58s17-6,14-22Z",transform:"translate(-206.85266 -75.40145)",fill:"#ffb8b8"}),n.a.createElement("path",{d:"M709.64734,563.79169l24.218-26.73574,32.782,16.73574-5,118-8,9s-34,30-86,5c0,0-18-15-17-38s-2-26-2-26l-1-81,49.37111-9.688Z",transform:"translate(-206.85266 -75.40145)",fill:"#6c63ff"}),n.a.createElement("path",{d:"M598.60023,691.0311l-6.17411,19.02315S562.69006,740.775,573.44484,749.1018s34.884-35.56837,34.884-35.56837l4.447-21.47613Z",transform:"translate(-206.85266 -75.40145)",fill:"#ffb8b8"}),n.a.createElement("path",{d:"M655.64734,543.79169l-9-3s-14,4-16,18-17,85-17,85-6,3-2,8-20,50-20,50l19,9s38-40,38-44-1-8-1-12,1-4,0-7a32.16669,32.16669,0,0,1-1-8l7-16Z",transform:"translate(-206.85266 -75.40145)",fill:"#6c63ff"}),n.a.createElement("polygon",{points:"553.925 381.823 522.506 365.224 479.119 372.014 470.142 412.005 492.488 411.138 498.73 396.446 498.73 410.895 509.041 410.495 515.026 387.105 518.766 412.005 555.421 411.25 553.925 381.823",fill:"#2f2e41"}),n.a.createElement("path",{d:"M538.05731,714.48169v57.68h-176.18a57.68309,57.68309,0,0,1,57.68-57.68c16.52-5.15,35.62006-6.79,56.34-6.25C495.44733,708.73169,516.43732,711.1817,538.05731,714.48169Z",transform:"translate(-206.85266 -75.40145)",fill:"#ff6584"}),n.a.createElement("path",{d:"M306.037,684.17757h82.84747a5.2435,5.2435,0,0,1,5.2435,5.2435v0a5.2435,5.2435,0,0,1-5.2435,5.2435H306.037a0,0,0,0,1,0,0v-10.487A0,0,0,0,1,306.037,684.17757Z",fill:"#3f3d56"}),n.a.createElement("path",{d:"M527.23842,665.11961l22.20633-26.91828a5.82915,5.82915,0,0,1,10.865.93107l8.75714,30.91845Z",transform:"translate(-206.85266 -75.40145)",fill:"#3f3d56"}),n.a.createElement("path",{d:"M500.30525,678.829l8.38962-33.87224a5.82914,5.82914,0,0,1,10.2-3.85669l21.261,24.09581Z",transform:"translate(-206.85266 -75.40145)",fill:"#ff6584"}),n.a.createElement("path",{d:"M155.02392,696.762h16.77923a0,0,0,0,1,0,0v35.65589a16.77922,16.77922,0,0,1-16.77922,16.77922h0a0,0,0,0,1,0,0V696.762A0,0,0,0,1,155.02392,696.762Z",fill:"#ff6584"}),n.a.createElement("path",{d:"M302.89091,686.275h82.84747a5.2435,5.2435,0,0,1,5.2435,5.2435v0a5.24351,5.24351,0,0,1-5.24351,5.24351H302.89091a0,0,0,0,1,0,0V686.275A0,0,0,0,1,302.89091,686.275Z",fill:"#ff6584"}),n.a.createElement("path",{d:"M538.05731,714.48169v57.36a56.64534,56.64534,0,0,1-62.16-63.61C495.44733,708.73169,516.43732,711.1817,538.05731,714.48169Z",transform:"translate(-206.85266 -75.40145)",opacity:"0.2"}),n.a.createElement("circle",{cx:"331.20586",cy:"640.13208",r:"56.62991",fill:"#ff6584"}),n.a.createElement("ellipse",{cx:"385.73837",cy:"644.32689",rx:"6.29221",ry:"14.68183",fill:"#3f3d56"}),n.a.createElement("ellipse",{cx:"370.53219",cy:"629.12071",rx:"1.57305",ry:"3.67046",fill:"#3f3d56"}),n.a.createElement("ellipse",{cx:"382.06791",cy:"621.7798",rx:"1.57305",ry:"3.67046",fill:"#3f3d56"}),n.a.createElement("path",{d:"M533.3074,658.27332s-3.14749-5.47519-3.14749-8.81524",transform:"translate(-206.85266 -75.40145)",fill:"#3f3d56"}),n.a.createElement("path",{d:"M534.692,654.7321s1.715-6.07809,4.10346-8.4129",transform:"translate(-206.85266 -75.40145)",fill:"#3f3d56"}))});var x=function(){var e=Object(l.useState)(""),a=Object(s.a)(e,2),t=(a[0],a[1],Object(l.useState)([])),r=Object(s.a)(t,2);return r[0],r[1],Object(l.useEffect)((function(){}),[]),n.a.createElement(v.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(N,null),n.a.createElement(y.a,{path:"/",exact:!0},n.a.createElement(b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,a,t){e.exports=t(118)},61:function(e,a,t){},62:function(e,a,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.7d2b20b9.chunk.js.map