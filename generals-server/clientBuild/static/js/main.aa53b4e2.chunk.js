(this["webpackJsonpgenerals-front"]=this["webpackJsonpgenerals-front"]||[]).push([[0],{182:function(e,t,a){e.exports={"speed-slider":"BattleHistory_speed-slider__1IaQG"}},188:function(e,t,a){e.exports=a(382)},193:function(e,t,a){},223:function(e,t){},27:function(e,t,a){e.exports={"ability-panel":"Abilities_ability-panel__3qPLH","ability-block-container":"Abilities_ability-block-container__3GhIM","ability-block":"Abilities_ability-block__1IWen","filler-block":"Abilities_filler-block__3xwKI","filler-block__disabled":"Abilities_filler-block__disabled__1QYAQ","ability-description-box":"Abilities_ability-description-box__2pgdv","selected-block":"Abilities_selected-block__cdLMW",clickable:"Abilities_clickable__y9Paf","popover-stats":"Abilities_popover-stats__3nSM0"}},357:function(e,t,a){},37:function(e,t,a){e.exports={"lobby-wrapper":"Lobby_lobby-wrapper__lDjyO","lobby-content-box":"Lobby_lobby-content-box__QuG4U",header:"Lobby_header__2r9_D",subtytle:"Lobby_subtytle__2WrLL",logo:"Lobby_logo__tbCPE","logo-left":"Lobby_logo-left__1BVEf","logo-right":"Lobby_logo-right__3mpPN"}},381:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=(a(193),a(194),a(11)),l=a(385),s=a(387),u=a(124),d=a(16),m=a(6),p=a(163),y=a.n(p),b={address:"/"},f=a(48),g="game.setBoard",v=function(e){return{type:"game.setActiveField",payload:e}},h=function(e){return{type:"game.setCommands",payload:e}},E=function(e){return{type:"game.removeCommands",payload:e}},w=function(e){return{type:"game.setPlayerRole",payload:e}},C=function(e){return{type:"game.abilitySelection",payload:e}},_={userName:"King",socketId:"",roomId:""},O=a(44),j=[],k={reborn:0,unite:0,moveCapitol:0,defender:0,plowingField:0,scan:0,autumn:0,archery:0},x={players:[],playerIdToTeamId:{},board:[[]],activeField:{x:-1,y:-1},commands:[],userColors:{},usersStats:{},tourCounter:0,playerRole:"lobby",moveType:"all",abilitySelection:null,cooldowns:k,abilityVisibleFields:{},passiveAbilities:[]},A={privateSettings:{},gameSettings:{mapWidth:20,mapHeight:20,gameMode:"Conquest",nonAggression:50,castlesDensity:.5,mountainDensity:.5,archeryTowersDensity:.3,observerTowersDensity:.3,abandonedFortressesDensity:.3,castleProduction:1,fieldProduction:25,turnDuration:1e3}},S=function(e){return{type:"history.setUserColors",payload:e}},I={history:[],userColors:{}},N={user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user.setName":return Object(m.a)({},e,{userName:t.payload});case"user.setUser":return Object(m.a)({},e,{},t.payload);case"game.setPlayers":return Object(m.a)({},e,{},t.payload.find((function(t){return t.socketId===e.socketId})));default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"messages.addMessage":return[].concat(Object(O.a)(e),[t.payload]);default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"game.setPlayers":return Object(m.a)({},e,{players:t.payload,playerIdToTeamId:t.payload.reduce((function(e,t){return Object(m.a)({},e,Object(d.a)({},t.socketId,t.teamId))}),{}),userColors:t.payload.reduce((function(e,t){return Object(m.a)({},e,Object(d.a)({},t.socketId,t.color))}),{})});case g:return Object(m.a)({},e,{board:t.payload});case"game.setActiveField":return Object(m.a)({},e,{activeField:t.payload,moveType:"all"});case"game.setCommands":return Object(m.a)({},e,{commands:t.payload});case"game.removeCommands":return Object(m.a)({},e,{commands:e.commands.filter((function(e){return!t.payload.includes(e.id)}))});case"game.setPlayerRole":return Object(m.a)({},e,{playerRole:t.payload,cooldowns:k,abilityVisibleFields:{},passiveAbilities:[]});case"game.updateStats":return Object(m.a)({},e,{},t.payload);case"game.setMoveType":return Object(m.a)({},e,{moveType:t.payload});case"game.abilitySelection":return Object(m.a)({},e,{abilitySelection:t.payload});case"game.setCooldown":return Object(m.a)({},e,{cooldowns:Object(m.a)({},e.cooldowns,{},t.payload)});case"game.cooldownTic":var a=Object(m.a)({},e.cooldowns);return Object.keys(a).forEach((function(e){return a[e]&&a[e]--})),Object(m.a)({},e,{cooldowns:a});case"game.addAbilityVisibleFields":var n=Object(m.a)({},e.abilityVisibleFields);return t.payload.forEach((function(e){var t=e.x,a=e.y;n[t]||(n[t]={}),n[t][a]=!0})),Object(m.a)({},e,{abilityVisibleFields:n});case"game.addPassiveAbility":return Object(m.a)({},e,{passiveAbilities:[].concat(Object(O.a)(e.passiveAbilities),[t.payload])});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REPLACE_GAME_SETTING":return Object(m.a)({},e,{gameSettings:t.payload});case"MODIFY_GAME_SETTING":var a=t.payload,n=a.settingName,o=a.value;return Object(m.a)({},e,{gameSettings:Object(m.a)({},e.gameSettings,Object(d.a)({},n,o))});default:return e}},history:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"history.erase":return I;case"history.setUserColors":return Object(m.a)({},e,{userColors:t.payload});case g:return Object(m.a)({},e,{history:[].concat(Object(O.a)(e.history),[t.payload])});default:return e}}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object(f.c)(N)(e,t)},F=a(165),M=(a(227),[F.a]);var D,P,R,L=f.a.apply(void 0,M)(f.d)(T),B=a(15),G=function(e){return e.game.players},H=function(e){return e.game.board},K=function(e){return e.game.activeField},U=function(e){return e.game.commands},V=function(e){return e.game.userColors},W=function(e){return e.game.playerRole},q=function(e){return e.game.usersStats},J=function(e){return e.game.tourCounter},Q=function(e){return e.game.moveType},Y=function(e){return e.game.abilitySelection},X=function(e){return e.game.playerIdToTeamId},$=function(e){return e.game.cooldowns},z=function(e){return e.game.abilityVisibleFields},Z=function(e){return e.game.passiveAbilities},ee=function(e){return e.settings.gameSettings},te="".concat(".","/battleStart1.mp3"),ae="".concat(".","/open.mp3"),ne="".concat(".","/dialogs/Welcome.wav"),oe=("".concat(".","/cnquest.mp3"),["".concat(".","/peacefullMusic.mp3"),"".concat(".","/peacefullMusic2.mp3"),"".concat(".","/peacefullMusic3.mp3"),"".concat(".","/peacefullMusic4.mp3")]),re="".concat(".","/battleMusic.mp3"),ie="".concat(".","/lost.mp3"),ce="".concat(".","/won.mp3"),le=function(){return Te(ae)},se=function(){return Fe(ne)},ue=function(){return Te(te)},de=function(){return Te(Object(B.sample)(oe))},me="".concat(".","/battleMusic2.mp3"),pe="".concat(".","/dialogs/RiseFromAshes.wav"),ye="".concat(".","/dialogs/PlowingField1.wav"),be=["".concat(".","/dialogs/WarningAttack.wav")],fe="".concat(".","/dialogs/WarningAttack2.wav"),ge=["".concat(".","/dialogs/RandomCapitol.wav"),"".concat(".","/dialogs/RandomCapitol2.wav")],ve="".concat(".","/dialogs/MoveCapitol.wav"),he=["".concat(".","/dialogs/UniteArmy1.wav"),"".concat(".","/dialogs/UniteArmy2.wav"),"".concat(".","/dialogs/UniteArmy3.wav"),"".concat(".","/dialogs/UniteArmy4.wav")],Ee=["".concat(".","/dialogs/Defender1.wav"),"".concat(".","/dialogs/Defender2.wav"),"".concat(".","/dialogs/Defender3.wav"),"".concat(".","/dialogs/Defender4.wav")],we="".concat(".","/dialogs/ConquerCapitol.wav"),Ce="".concat(".","/dialogs/LostCapitol.wav"),_e=["".concat(".","/dialogs/ConquerCastle.wav"),"".concat(".","/dialogs/ConquerCastle2.wav")],Oe=["".concat(".","/dialogs/ArchPrepare1.wav"),"".concat(".","/dialogs/ArchPrepare2.wav")],je=["".concat(".","/dialogs/5gSelect.wav"),"".concat(".","/dialogs/5gSelect2.wav")],ke="".concat(".","/dialogs/5gEffect.mp3"),xe=function(){return Fe(ke)},Ae="".concat(".","/dialogs/FindCapitol.wav"),Se=["".concat(".","/dialogs/ArchShooted3.wav")],Ie=.5,Ne=1,Te=function(e){D||((D=new Audio).onended=function(){var e=L.getState(),t=W(e);if("fighter"===t||"spectator"===t){var a=ee(e).nonAggression;J(e)<a?de():Te(me)}}),D.pause(),D.src=e,D.load(),D.volume=Ie,D.play()},Fe=function(e){console.log("Playing: ",e),P||(P=new Audio),P.pause(),P.src=e,P.load(),P.volume=Ne,P.play()},Me=function(e){console.log("Playing2: ",e),R||(R=new Audio),R.pause(),R.src=e,R.load(),R.volume=Ne,R.play()},De=y()(b.address),Pe=function(e){return De.emit("eraseCommands",e)},Re=function(e,t){return De.emit("executeInstantCommand",e,t)};De.on("startBattle",(function(){L.dispatch(v({x:-1,y:-1})),L.dispatch(h([])),L.dispatch(w("fighter")),L.dispatch(C(null)),ue();var e=G(L.getState()).reduce((function(e,t){return Object(m.a)({},e,Object(d.a)({},t.socketId,t.color))}),{});L.dispatch({type:"history.erase"}),L.dispatch(S(e))})),De.on("updateStats",(function(e){return L.dispatch(function(e){return{type:"game.updateStats",payload:e}}(e))})),De.on("loser",(function(){Te(ie)})),De.on("winner",(function(){Te(ce),L.dispatch(w("spectator"))})),De.on("endOfPeace",(function(){return Te(re)})),De.on("updateBoard",(function(e){var t=L.getState().user.teamId,a=L.getState().game.playerIdToTeamId;e.flat().filter((function(e){return a[e.owner]===t})).forEach((function(t){for(var a=t.x,n=t.y,o=a-1;o<=a+1;o++)for(var r=n-1;r<=n+1;r++)e[r]&&e[r][o]&&(e[r][o].isVisible=!0)})),L.dispatch(function(e){return{type:g,payload:e}}(e))})),De.on("removeCommands",(function(e){return L.dispatch(E(e))})),De.on("setCooldown",(function(e,t){L.dispatch(function(e,t){return{type:"game.setCooldown",payload:Object(d.a)({},e,t)}}(e,t)),"reborn"===e&&Fe(pe),"unite"===e&&Fe(Object(B.sample)(he)),"defender"===e&&Fe(Object(B.sample)(Ee)),"autumn"===e&&xe(),"revealCapitols"===e&&L.dispatch({type:"game.addPassiveAbility",payload:"revealCapitols"})})),De.on("cooldownTic",(function(){return L.dispatch({type:"game.cooldownTic"})})),De.on("confirmScan",(function(e){for(var t=e.x,a=e.y,n=[],o=t-1;o<=t+1;o++)for(var r=a-1;r<=a+1;r++)n.push({x:o,y:r});L.dispatch({type:"game.addAbilityVisibleFields",payload:n})})),De.on("sound_ConquerCastle",(function(){return Fe(Object(B.sample)(_e))})),De.on("sound_ConquerCapitol",(function(){return Fe(we)})),De.on("sound_LostCapitol",(function(){return Fe(Ce)})),De.on("sound_archeryShooted",(function(){return Fe(Object(B.sample)(Se))})),De.on("sound_autumn",xe),De.on("sound_capitolAttack",(function(){return Fe(Object(B.sample)(be))})),De.on("sound_lostCastle",(function(){return Fe(fe)}));De.on("chat",(function(e){return L.dispatch({type:"messages.addMessage",payload:e})}));var Le=function(){return De.emit("createRoom",L.getState().user.userName)},Be=function(){return De.emit("joinAsSpectactor")};De.on("setRoomSettings",(function(e){return L.dispatch(function(e){return{type:"REPLACE_GAME_SETTING",payload:e}}(e))})),De.on("joined",(function(e){return L.dispatch(function(e){return{type:"user.setUser",payload:e}}(e))})),De.on("refreshPlayersInRoom",(function(e){return L.dispatch(function(e){return{type:"game.setPlayers",payload:e}}(e))})),De.on("noRoom",(function(){return window.alert("No room with given id")})),De.on("spectactorResponse",(function(e){e?(L.dispatch(w("spectator")),L.dispatch(S(L.getState().game.userColors)),ue()):window.alert("Game not started yet")}));var Ge=a(2),He=a(37),Ke=a.n(He),Ue=function(e){return e.user},Ve=a(72),We=a.n(Ve),qe=["Kings","Knights","Rulers","Hussars","Monarchs","Warriors","Heroes","Spartans","Franks","Kings4","Kings5","Kings6","Kings7","Kings8","Kings9","Kings10","Kings11","Kings12","Kings13","Kings13"],Je=function(){var e=Object(Ge.c)(G),t=Object(Ge.c)(Ue);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:We.a["room-header"]},"Room: ",t.roomId),o.a.createElement(u.a,{onClick:Be},"Watch Current Game"),o.a.createElement("div",{className:We.a["rooms-wrapper"]},e.map((function(a,n){return o.a.createElement("div",{key:n},o.a.createElement("div",{className:We.a["room-name"]},"Team ",qe[n]),o.a.createElement("div",null,o.a.createElement("div",{className:We.a["players-block"]},e.filter((function(e){return e.teamId===n})).map((function(e){return o.a.createElement("div",{key:e.socketId},e.userName)}))),o.a.createElement(u.a,{onClick:function(){return e=n,De.emit("changeTeam",e);var e},disabled:t.teamId===n},"Join")))}))))},Qe=l.a.Item,Ye=function(){var e=Object(Ge.b)(),t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(!1),d=Object(c.a)(l,2),m=d[0],p=d[1],y=Object(Ge.c)(Ue),b=!!y.roomId;return o.a.createElement("div",{className:Ke.a["lobby-wrapper"]},o.a.createElement("div",{className:Ke.a["lobby-content-box"]},o.a.createElement("img",{alt:"logo",src:"/logo.png",className:"".concat(Ke.a.logo,"  ").concat(Ke.a["logo-left"])}),o.a.createElement("img",{alt:"logo",src:"/logo.png",className:"".concat(Ke.a.logo,"  ").concat(Ke.a["logo-right"])}),o.a.createElement("h3",{className:Ke.a.header},"Overlight Generals ",o.a.createElement("br",null),o.a.createElement("span",{className:Ke.a.subtytle},"Kings Alliance")),o.a.createElement(Qe,{help:"User Name"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(s.a,{onChange:function(t){return e({type:"user.setName",payload:t.target.value})},value:y.userName,placeholder:"User Name",disabled:m||b}),!y.roomId&&o.a.createElement(u.a,{type:"primary",disabled:m||b,onClick:function(){return p(!0)}},"Confirm"))),!y.roomId&&o.a.createElement("div",null,o.a.createElement(u.a,{disabled:y.roomId,onClick:Le,style:{width:"255px"}},"Create Room")),!y.roomId&&o.a.createElement("div",null,o.a.createElement(Qe,{help:"Room ID to join"},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(s.a,{placeholder:"Room ID",onChange:function(e){return i(e.target.value)}}),o.a.createElement(u.a,{onClick:function(){return function(e){return De.emit("join",{roomId:e,userName:L.getState().user.userName})}(r)}},"Join")))),y.roomId&&o.a.createElement(Je,null)))},Xe=function(e){return e.messages},$e=a(74),ze=a.n($e),Ze=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),l=Object(c.a)(i,2),d=l[0],m=l[1],p=Object(Ge.c)(Xe);return o.a.createElement("div",{className:ze.a["chat-wrapper"]},o.a.createElement("div",{onClick:function(){return m(!d)},className:ze.a["chat-header"]},"Room Chat"),d&&o.a.createElement("div",null,o.a.createElement("div",{className:ze.a["chat-history"]},p.map((function(e,t){return o.a.createElement("div",{key:t},e)}))),o.a.createElement("div",{className:ze.a["new-message"]},o.a.createElement(s.a,{placeholder:"Message....",value:a,onChange:function(e){return r(e.target.value)}}),o.a.createElement(u.a,{onClick:function(){var e;e=a,De.emit("sendMessage",e),r("")}},"Send Message"))))},et=(a(357),a(1)),tt=a.n(et),at=a(174),nt=a.n(at),ot=function(e){var t=U(L.getState()),a=H(L.getState()),n=K(L.getState()),o=Q(L.getState()),r=n.x,i=n.y,c=it(r,i,e),l=c.x,s=c.y,u=c.direction;if(rt(l,s,a)&&rt(r,i,a)){var d=a[s][l];if(!d.isVisible||"mountain"!==d.type){var m,p={from:{x:r,y:i},direction:u,id:nt()(),type:"all"===o?"MOVE_ALL":"MOVE_HALF"};m=p,De.emit("addCommand",m),L.dispatch(v({x:l,y:s})),L.dispatch(h([].concat(Object(O.a)(t),[p])))}}},rt=function(e,t,a){return e>=0&&e<a[0].length&&t>=0&&t<a.length},it=function(e,t,a){var n;return"w"===a&&(n="u",t--),"s"===a&&(t++,n="d"),"a"===a&&(e--,n="l"),"d"===a&&(e++,n="r"),{x:e,y:t,direction:n}},ct=function(e,t){return L.dispatch(v({x:e,y:t}))},lt=["w","s","a","d"],st=function(e){var t=e.key;if(lt.includes(t))return ot(t);"e"===t&&ut(),"q"===t&&dt()},ut=function(){var e=U(L.getState());if(0!==e.length){var t=e[e.length-1],a=[t.id];if(t.from){var n=t.from,o=n.x,r=n.y;ct(o,r)}Pe(a),L.dispatch(E(a))}},dt=function(){var e=U(L.getState());if(0!==e.length){var t=e.map((function(e){return e.id}));Pe(t),L.dispatch(E(t))}},mt=o.a.memo((function(e){var t=e.field,a=e.commands,n=e.visibleFromAbility,r=e.userColors,i=e.abilitySelection,c=e.notifyMouseOver,l=e.clearAbilityHover,s=e.isHoveredByAbility,u=e.isActiveField,d=e.moveType,m=Object(Ge.c)(Ue),p=Object(Ge.c)(X),y=Object(Ge.b)(),b=t.type,f=t.owner,g=t.units,v=t.x,h=t.y,E=t.isVisible,w=m.socketId===f,_=function(){return!!i&&("reborn"===i&&"castle"===b&&p[f]===p[m.socketId]||("moveCapitol"===i&&"castle"===b&&f===m.socketId||("plowingField"===i&&"plain"===b&&f===m.socketId||(!("archeryFire"!==i||!n&&!E)||("scan"===i||void 0)))))};return o.a.createElement("div",{onClick:function(){if(w&&!n){if("capitol"===b&&Math.random()<.08&&Fe(Object(B.sample)(ge)),u&&"all"===d)return L.dispatch({type:"game.setMoveType",payload:"half"});ct(v,h)}},onContextMenu:function(e){e.preventDefault(),_()&&Re(i,{x:v,y:h}),i&&y(C(null))},onMouseEnter:function(){return i&&(_()?c(v,h):l())},style:{backgroundColor:n||!0!==!E?"n"===f?"grey":r[f]||"grey":"#202020",backgroundImage:pt(b,E||n)},className:tt()("board-tile",{clickable:w||_(),"selected-field":u,"hovered-by-ability":s})},u&&"half"===d?"50%":(n||!!E)&&null!=g&&g,a.map((function(e,t){return o.a.createElement("div",{key:t,className:yt(e)},function(e){switch(e.direction){case"u":return"\u2191";case"d":return"\u2193";case"l":return"\u2190";case"r":return"\u2192";default:return"x"}}(e))})))}),(function(e,t){return!!(e.commands.length===t.commands.length&&e.isActiveField===t.isActiveField&&e.moveType===t.moveType&&Object(B.isEqual)(e.field,t.field)&&Object(B.isEqual)(e.visibleFromAbility,t.visibleFromAbility)&&Object(B.isEqual)(e.isHoveredByAbility,t.isHoveredByAbility))}));function pt(e,t){var a="";return t=t||window.debug,"plain"===e||!t&&"capitol"===e?"unset":(t||"capitol"===e?"castle"===e?a="/city.png":"mountain"===e?a="/mountain.png":"capitol"===e?a="/crown.png":"defendedCapitol"===e?a="/defendedCrown.png":"archeryTower"===e?a="/archery_tower.png":"observerTower"===e?a="/observer_tower.png":"abandonedFortress"===e&&(a="/tower5G.png"):a="/obstacle.png","url(".concat("."+a,")"))}function yt(e){switch(e.direction){case"u":return"arrow-container arrow-up";case"d":return"arrow-container arrow-down";case"l":return"arrow-container arrow-left";case"r":return"arrow-container arrow-right";default:return alert("command without direction")}}var bt=function(e){var t=e.overridedBoard,a=e.overridedUserColors,r=t||Object(Ge.c)(H),i=a||Object(Ge.c)(V),l=Object(Ge.c)(U),s=Object(Ge.c)(W),u=Object(Ge.c)(z),d=Object(Ge.c)(Z),m=Object(Ge.c)(Y),p=Object(Ge.c)(K),y=Object(Ge.c)(Q),b=Object(n.useState)({}),f=Object(c.a)(b,2),g=f[0],v=f[1],h="spectator"===s||"historySpectator"===s||!0===window.debug,E=d.includes("revealCapitols"),w=function(e,t){if(m){for(var a={},n=e-1;n<=e+1;n++)for(var o=t-1;o<=t+1;o++)a[n]||(a[n]={}),a[n][o]=!0;v(a)}},C=function(){return v({})};Object(n.useEffect)((function(){return setTimeout((function(){try{var e=L.getState(),t=e.game.usersStats[e.user.socketId].ownedSpecialFields[0];t||console.error("# no capitol for player found");var a=t.x,n=t.y,o=document.getElementById("board");o.style.top="".concat(window.innerHeight/2-45*n,"px"),o.style.left="".concat(window.innerWidth/2-45*a,"px")}catch(r){console.error("Data to center map not available yet"),console.error(r)}}),1750),"historySpectator"!==s&&window.addEventListener("keypress",st),window.addEventListener("mousemove",ft),window.addEventListener("mousewheel",gt),function(){"historySpectator"!==s&&window.removeEventListener("keypress",st),window.removeEventListener("mousemove",ft),window.removeEventListener("mousewheel",gt)}}),[]);var _=l.reduce((function(e,t){var a="".concat(t.from.x,"-").concat(t.from.y);return e[a]||(e[a]=[]),e[a].push(t),e}),{});return o.a.createElement("div",null,o.a.createElement("div",{id:"board",className:"board-container",style:{left:"10px",top:"10px",transform:"scale(1)"}},r.map((function(e,t){return o.a.createElement("div",{key:t,className:"board-row "},e.map((function(e,t){var a,n;return o.a.createElement(mt,{key:t,abilitySelection:m,userColors:i,visibleFromAbility:h||(null===(a=u[e.x])||void 0===a?void 0:a[e.y])||E&&("capitol"===e.type||"defendedCapitol"===e.type),commands:_["".concat(e.x,"-").concat(e.y)]||[],field:e,notifyMouseOver:w,clearAbilityHover:C,isHoveredByAbility:m&&(null===(n=g[e.x])||void 0===n?void 0:n[e.y]),isActiveField:e.x===p.x&&e.y===p.y,moveType:y})})))}))))};function ft(e){var t=e.movementX,a=e.movementY;if(1===e.buttons){var n=document.getElementById("board"),o=n.style,r=o.left,i=o.top;n.style.left=Number(r.slice(0,-2))+t+"px",n.style.top=Number(i.slice(0,-2))+a+"px"}}function gt(e){var t=e.deltaY,a=document.getElementById("board"),n=Number(a.style.transform.slice(6,-1))+(t>0?-.1:.1);n>2||n<.3||(a.style.transform="scale(".concat(String(n).padEnd(3,".0"),")"))}var vt=a(92),ht=a.n(vt),Et=a(388),wt=a(383),Ct=a(386),_t=l.a.Item,Ot=(Et.a.Option,Object(B.debounce)((function(e){return function(e){return De.emit("setRoomSettings",e)}(e)}),500)),jt=function(){var e,t=Object(Ge.c)(ee),a=Object(Ge.c)(Ue),n=Object(Ge.c)(G),r=Object(Ge.b)(),i=a.socketId===(null===(e=n[0])||void 0===e?void 0:e.socketId),c=t.mapWidth,l=t.mapHeight,s=(t.gameMode,t.nonAggression),d=t.castlesDensity,m=t.mountainDensity,p=t.castleProduction,y=t.fieldProduction,b=t.turnDuration,f=t.archeryTowersDensity,g=t.observerTowersDensity,v=t.abandonedFortressesDensity,h=function(e,t){r(function(e,t){return{type:"MODIFY_GAME_SETTING",payload:{settingName:e,value:t}}}(e,t)),Ot(ee(L.getState()))},E=function(){return e=t,De.emit("start",e);var e};return a.roomId?o.a.createElement("div",{className:ht.a["settings-wrapper"]},o.a.createElement("div",{className:ht.a["settings-content-box"]},o.a.createElement(u.a,{onClick:function(){return E()},type:"primary",style:{width:"300px",marginTop:"10px"},disabled:!i},"Battle!"),o.a.createElement("div",{className:ht.a["settings-list"]},o.a.createElement(wt.a,null,"Only Host Can Modify This Settings"),o.a.createElement(wt.a,null,"Map Dimmensions"),o.a.createElement("div",null,o.a.createElement(_t,{help:"Map Width: ".concat(c)},o.a.createElement(Ct.a,{disabled:!i,min:15,max:55,value:c,onChange:function(e){return h("mapWidth",e)}})),o.a.createElement(_t,{help:"Map Height: ".concat(l)},o.a.createElement(Ct.a,{disabled:!i,min:15,max:55,value:l,onChange:function(e){return h("mapHeight",e)}}))),o.a.createElement(wt.a,null,"Game Rules"),o.a.createElement(_t,{help:"Duration Of Non-Aggression Pact: ".concat(s)},o.a.createElement(Ct.a,{disabled:!i,min:10,max:300,step:10,value:s,onChange:function(e){return h("nonAggression",e)}})),o.a.createElement(wt.a,null,"Map Objects"),o.a.createElement("div",null,o.a.createElement(_t,{help:"Castles Density: ".concat(d)},o.a.createElement(Ct.a,{disabled:!i,min:0,max:1,step:.1,value:d,onChange:function(e){return h("castlesDensity",e)}})),o.a.createElement(_t,{help:"Mountains Density: ".concat(m)},o.a.createElement(Ct.a,{disabled:!i,min:0,max:1,step:.1,value:m,onChange:function(e){return h("mountainDensity",e)}})),o.a.createElement(_t,{help:"Abandoned Fortesses Density: ".concat(v)},o.a.createElement(Ct.a,{disabled:!i,min:0,max:1,step:.1,value:v,onChange:function(e){return h("abandonedFortressesDensity",e)}})),o.a.createElement(_t,{help:"Observer Towers Density: ".concat(g)},o.a.createElement(Ct.a,{disabled:!i,min:0,max:1,step:.1,value:g,onChange:function(e){return h("observerTowersDensity",e)}})),o.a.createElement(_t,{help:"Archery Towers Density: ".concat(f)},o.a.createElement(Ct.a,{disabled:!i,min:0,max:1,step:.1,value:f,onChange:function(e){return h("archeryTowersDensity",e)}}))),o.a.createElement(wt.a,null,"Other"),o.a.createElement("div",null,o.a.createElement(_t,{help:"Castles Units Production Time: ".concat(p)},o.a.createElement(Ct.a,{disabled:!i,min:1,max:60,step:1,value:p,onChange:function(e){return h("castleProduction",e)}})),o.a.createElement(_t,{help:"Field Units Production Time: ".concat(y)},o.a.createElement(Ct.a,{disabled:!i,min:1,max:60,step:1,value:y,onChange:function(e){return h("fieldProduction",e)}})),o.a.createElement(_t,{help:"Turn Duration: ".concat(b," ms")},o.a.createElement(Ct.a,{disabled:!i,min:250,max:3e3,step:250,value:b,onChange:function(e){return h("turnDuration",e)}})))))):null},kt=a(75),xt=a.n(kt),At=function(){var e,t=Object(Ge.c)(G),a=Object(Ge.c)(V),n=Object(Ge.c)(q),r=Object(Ge.c)(Ue),i=Object(Ge.c)(J),c=Object(Ge.c)(W),l=Object(Ge.c)(ee).nonAggression,s=Object(Ge.b)();return o.a.createElement("div",{className:xt.a["info-panel"]},o.a.createElement("div",{className:tt()(xt.a["grid-container"])},o.a.createElement("div",null),o.a.createElement("div",null,"Team"),o.a.createElement("div",{className:xt.a["room-header"]},"Player"),o.a.createElement("div",null,"Army"),o.a.createElement("div",null,"Lands"),t.map((function(e){var t,r;return o.a.createElement(o.a.Fragment,{key:e.socketId},o.a.createElement("div",null,o.a.createElement("div",{className:xt.a["color-box"],style:{background:a[e.socketId]}})),o.a.createElement("div",null,e.teamId),o.a.createElement("div",null,"".concat(e.userName)),o.a.createElement("div",null,(null===(t=n[e.socketId])||void 0===t?void 0:t.units)||0),o.a.createElement("div",null,(null===(r=n[e.socketId])||void 0===r?void 0:r.lands)||0))}))),o.a.createElement("div",null,"Tour: ",i," / ",l),o.a.createElement("div",null,"spectator"===c&&o.a.createElement(u.a,{type:"primary",onClick:function(){de(),s(w("historySpectator"))},style:{width:"100%"}},"Battle History"),("spectator"===c||"historySpectator"===c)&&o.a.createElement(u.a,{onClick:function(){return s(w("lobby"))},type:"danger",style:{width:"100%"}},"Back To Lobby!"),"fighter"===c&&0===(null===(e=n[r.socketId])||void 0===e?void 0:e.lands)&&o.a.createElement(u.a,{onClick:function(){return s(w("spectator"))},type:"danger",style:{width:"100%"}},"Accept Failure")))},St=a(66),It=a.n(St),Nt=a(389),Tt=a(390),Ft=function(){var e=Object(n.useState)(50),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(100),l=Object(c.a)(i,2),s=l[0],d=l[1],m=function(e){r(e),function(e){Ie=e,D&&(D.volume=Ie)}(e/100)},p=function(e){d(e),function(e){Ne=e,P&&(P.volume=Ne),R&&(R.volume=Ne)}(e/100)};return o.a.createElement("div",{className:It.a["audio-panel"]},o.a.createElement("div",{className:It.a.controller},o.a.createElement(u.a,{onClick:function(){return p(s?0:100)},icon:o.a.createElement(Nt.a,null)}),o.a.createElement("div",{className:It.a["slider-wrapper"]},o.a.createElement(Ct.a,{min:0,max:100,onChange:p,value:s}))),o.a.createElement("div",{className:It.a.controller},o.a.createElement(u.a,{onClick:function(){return m(a?0:100)},icon:o.a.createElement(Tt.a,null)}),o.a.createElement("div",{className:It.a["slider-wrapper"]},o.a.createElement(Ct.a,{min:0,max:100,onChange:m,value:a}))))},Mt=(a(381),function(e){return e.history.history}),Dt=function(e){return e.history.userColors},Pt=a(182),Rt=a.n(Pt),Lt=a(391),Bt=a(392),Gt=a(393),Ht=a(394),Kt=a(395),Ut=a(396),Vt=function(e){var t=Object(n.useState)(e),a=Object(c.a)(t,2),o=a[0],r=a[1],i=Object(n.useRef)(o);return Object(n.useEffect)((function(){i.current=o}),[o]),[o,i,r]},Wt=function(){var e=Object(Ge.c)(Mt),t=Object(Ge.c)(Dt),a=Vt(0),r=Object(c.a)(a,3),i=(r[0],r[1]),l=r[2],s=Object(n.useState)(e[0]),d=Object(c.a)(s,2),m=d[0],p=d[1],y=Vt(25),b=Object(c.a)(y,3),f=b[0],g=b[1],v=b[2],h=Vt(!1),E=Object(c.a)(h,3),w=E[0],C=E[1],_=E[2],O=function(t){l(t),p(e[t])},j=function(e){var t=i.current-e;O(t<0?0:t)},k=function(t){var a=i.current+t;O(a>=e.length?e.length-1:a)},x=function t(a){(a||C.current)&&e[i.current+1]&&(O(i.current+1),1)&&setTimeout((function(){t()}),1e3/g.current)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:Rt.a["speed-slider"]},o.a.createElement(Ct.a,{max:100,min:1,step:1,value:f,onChange:v}),o.a.createElement("div",null,"Speed x ",f),o.a.createElement("div",null,o.a.createElement(u.a,{icon:o.a.createElement(Lt.a,null),onClick:function(){return j(40)}}),o.a.createElement(u.a,{icon:o.a.createElement(Bt.a,null),onClick:function(){return j(20)}}),o.a.createElement(u.a,{icon:o.a.createElement(Gt.a,null),onClick:function(){return j(10)}}),!w&&o.a.createElement(u.a,{type:"primary",onClick:function(){_(!0),x(!0)}},"Auto Play"),w&&o.a.createElement(u.a,{type:"primary",onClick:function(){return _(!1)}},"Pause"),o.a.createElement(u.a,{icon:o.a.createElement(Ht.a,null),onClick:function(){return k(10)}}),o.a.createElement(u.a,{icon:o.a.createElement(Kt.a,null),onClick:function(){return k(20)}}),o.a.createElement(u.a,{icon:o.a.createElement(Ut.a,null),onClick:function(){return k(40)}}))),m&&o.a.createElement(bt,{overridedBoard:m,overridedUserColors:t}))},qt=a(27),Jt=a.n(qt),Qt=a(384),Yt=function(e){var t,a=e.ability,n=e.handleClick,r=e.disabled,i=void 0!==r&&r,c=e.selectedAbility,l=e.cooldown,s=e.isPassive,u=e.isOwned,m=Object(Ge.b)(),p=a.name,y=a.description,b=a.icon,f=a.id,g=a.maxCooldown,v=a.cost,h=a.from,E=l||i;return o.a.createElement(Qt.a,{title:p,placement:"rightTop",content:o.a.createElement("div",{className:Jt.a["ability-description-box"]},o.a.createElement("div",{className:Jt.a["popover-stats"]},o.a.createElement("div",null,"Cost: ".concat(v," units from ").concat(h)),!s&&o.a.createElement("div",null,"Cooldown: ",l||"0","/",g),s&&o.a.createElement("div",null,"Passive Ability")),y)},o.a.createElement("div",{className:Jt.a["ability-block-container"]},o.a.createElement("div",{onClick:function(){c===f?m(C(null)):!i&&n()},style:{backgroundImage:b},className:tt()(Jt.a["ability-block"],(t={},Object(d.a)(t,Jt.a["selected-block"],c===f),Object(d.a)(t,Jt.a.clickable,!u&&!E),t))},o.a.createElement("div",{style:{boxShadow:u?"inset 0 0px 3px 40px rgba(255, 223, 0, 0.35":"inset 0 0px 3px ".concat(Math.ceil(40*l/g),"px rgba(0, 0, 0, 0.8)")},className:tt()(Jt.a["filler-block"],Object(d.a)({},Jt.a["filler-block__disabled"],!u&&E))}))))},Xt=function(e){return"url(".concat("."+e,")")},$t={name:"Reborn From Ashes",id:"reborn",type:"select",icon:Xt("/ability_reborn.jpg"),description:"Reborn in on of ally's castle. Click on ability and select (by right click) a castle with minimum 100 units to reborn there.",cost:100,from:"ally castle",maxCooldown:500},zt=[{name:"Unite Army",id:"unite",icon:Xt("/ability_uniteArmy.png"),type:"instant",description:"Gather all units from whole kingdom in your capitol immediately.",cost:0,from:"capitol",maxCooldown:500},{name:"Move Capitol",id:"moveCapitol",icon:Xt("/ability_moveCapitol.jpg"),type:"select",description:"Select owned castle to your new capitol. Select ability and right click on selected castle.",cost:100,from:"capitol",maxCooldown:500},{name:"Ultra Defender",id:"defender",icon:Xt("/logo.png"),type:"instant",description:"Units inside you capitol fight with double power for short period",cost:50,from:"capitol",maxCooldown:1e4},{name:"Plowing The Field",id:"plowingField",type:"select",icon:Xt("/ability_plowingField.png"),description:"Clear one of controlled fields from your units to hide from enemies.",cost:25,from:"capitol",maxCooldown:100}],Zt=[{name:"Scan Area",id:"scan",type:"select",icon:Xt("/ability_observer.png"),description:"Scan area you can not reach. Selected fields (by right click) will be visible even if you have no units in this area.",cost:25,from:"observation tower",fromFieldName:"observerTower",maxCooldown:50},{name:"Longrange Archery Fire",id:"archeryFire",type:"select",icon:Xt("/ability_archery.png"),description:"Select (by right click) one of visible fields and order archeries longrange fire. Damage 75% of units on empty areas and 25% in buildings",cost:300,from:"archery tower",fromFieldName:"archeryTower",maxCooldown:400},{name:"Autumn Of The Middle Ages",id:"autumn",type:"instant",icon:Xt("/ability_autumn.png"),description:"Cause a tragedy across all kingdoms. After tragedy only one unit on every standard field will remain.",cost:1e3,from:"abondoned fortress",fromFieldName:"abandonedFortress",maxCooldown:2500}],ea=[{name:"Reveal Capitols",id:"revealCapitols",type:"instant",icon:Xt("/ability_show_crown.PNG"),description:"Make all capitols visible on map (only you can see it).",cost:3e3,from:"capitol",maxCooldown:1}],ta=function(){var e=Object(Ge.c)(Ue),t=Object(Ge.c)(q),a=Object(Ge.c)(Y),n=Object(Ge.c)($),r=Object(Ge.c)(Z),i=Object(Ge.b)(),c=t[e.socketId];if(!c)return null;var l=!c.units,s=function(e){var t=e.type,a=e.id;"select"===t&&function(e){i(C(e))}(a),"instant"===t&&Re(a),"archeryFire"===a&&Me(Object(B.sample)(Oe)),"autumn"===a&&Me(Object(B.sample)(je)),"revealCapitols"!==a&&"scan"!==a||Fe(Ae),"moveCapitol"===a&&Fe(ve),"plowingField"===a&&Fe(ye)},u=c.ownedSpecialFields.find((function(e){return"capitol"===e.type||"defendedCapitol"===e.type}));return o.a.createElement("div",{className:Jt.a["ability-panel"]},l&&o.a.createElement(Yt,{handleClick:function(){return s($t)},disabled:!1,ability:$t,selectedAbility:a,cooldown:n[$t.id]}),!l&&zt.map((function(e){return o.a.createElement(Yt,{key:e.id,handleClick:function(){return s(e)},disabled:u.units<=e.cost,ability:e,selectedAbility:a,cooldown:n[e.id]})})),!l&&ea.map((function(e){return o.a.createElement(Yt,{key:e.id,handleClick:function(){return s(e)},disabled:u.units<=e.cost,isPassive:!0,isOwned:r.includes(e.id),ability:e,selectedAbility:a,cooldown:n[e.id]})})),Zt.filter((function(e){return c[e.fromFieldName]})).map((function(e){return o.a.createElement(Yt,{key:e.id,handleClick:function(){return s(e)},disabled:!c.ownedSpecialFields.some((function(t){return t.type===e.fromFieldName&&t.units>e.cost})),ability:e,selectedAbility:a,cooldown:n[e.id]})})))};var aa=function(){var e=Object(Ge.c)(W);return Object(n.useEffect)((function(){setTimeout(se,1e3),setTimeout(le,5e3)}),[]),o.a.createElement("div",null,o.a.createElement(Ft,null),"fighter"===e&&o.a.createElement(ta,null),o.a.createElement(At,null),o.a.createElement(Ze,null),"lobby"===e&&o.a.createElement(o.a.Fragment,null,o.a.createElement(Ye,null),o.a.createElement(jt,null)),("fighter"===e||"spectator"===e)&&o.a.createElement(bt,null),"historySpectator"===e&&o.a.createElement(Wt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Ge.a,{store:L},o.a.createElement(aa,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},66:function(e,t,a){e.exports={"audio-panel":"AudioControl_audio-panel__1D5FQ",controller:"AudioControl_controller__2uprX","slider-wrapper":"AudioControl_slider-wrapper__3K4Ro"}},72:function(e,t,a){e.exports={"rooms-wrapper":"RoomTeams_rooms-wrapper__3evw5","room-header":"RoomTeams_room-header__1i6AB","room-name":"RoomTeams_room-name__2odmr","players-block":"RoomTeams_players-block__24cKH"}},74:function(e,t,a){e.exports={"chat-wrapper":"LiveChat_chat-wrapper__3yyAJ","chat-history":"LiveChat_chat-history__2VHgG","chat-header":"LiveChat_chat-header__1SPj-","new-message":"LiveChat_new-message__1I6jr"}},75:function(e,t,a){e.exports={"info-panel":"GameInfo_info-panel__3NB7p","grid-container":"GameInfo_grid-container__1DJ7y","color-box":"GameInfo_color-box__kQ-B1"}},92:function(e,t,a){e.exports={"settings-wrapper":"Settings_settings-wrapper__1-tcm","settings-content-box":"Settings_settings-content-box__38rES","settings-list":"Settings_settings-list__3xNVK"}}},[[188,1,2]]]);
//# sourceMappingURL=main.aa53b4e2.chunk.js.map