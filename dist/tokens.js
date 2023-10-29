import{createToken as t}from"chevrotain";function H(E){let n={OR:"|",ELSE:"||",DYNAMIC:"$",STATIC:"#",ENTITY:"&",OPEN_GATE:"@",CLOSE_GATE:"@",PENDING_GATE:"@@",OPEN_SILENT:"{",CLOSE_SILENT:"}"};Object.assign(n,E?{OPEN_CHOICE:"(",CLOSE_CHOICE:")",OPEN_WEIGHT:"[",CLOSE_WEIGHT:"]",CONTINUATION:"\\"}:{OPEN_CHOICE:"[",CLOSE_CHOICE:"]",OPEN_WEIGHT:"^",CLOSE_WEIGHT:"^",CONTINUATION:"~"});let e={};Object.entries(n).forEach(([L,R])=>{e[L]=P(R)});let a=new RegExp(`${e.PENDING_GATE}([0-9]{9,11})`);e.SPECIAL=Object.values(e).join("").replace(/[<>]/g,""),n.PENDING_GATE_RE=new RegExp(a.source,"g");let o=t({name:"ExitGate",pattern:new RegExp(`\\s*${e.CLOSE_GATE}`),pop_mode:!0}),s=t({name:"Gate",pattern:new RegExp(`[^${e.CLOSE_GATE}]+`)}),O=t({name:"PendingGate",pattern:a}),C=t({name:"EnterGate",pattern:new RegExp(`${e.OPEN_GATE}\\s*`),push_mode:"gate_mode"}),p=t({name:"OC",pattern:new RegExp(e.OPEN_CHOICE+"\\s*")}),r=t({name:"CC",pattern:new RegExp(`\\s*${e.CLOSE_CHOICE}`)}),T=t({name:"OR",pattern:/\s*\|\s*/}),m=t({name:"ELSE",pattern:/\s*\|\|\s*/}),_=t({name:"EQ",pattern:/\s*=\s*/}),c=t({name:"TF",pattern:/\.[A-Za-z_0-9][A-Za-z_0-9]*(\(\))?/}),S=t({name:"OS",pattern:new RegExp(`${e.OPEN_SILENT}\\s*`)}),N=t({name:"CS",pattern:new RegExp(`\\s*${e.CLOSE_SILENT}`)}),I=t({name:"SYM",pattern:new RegExp(`[${e.DYNAMIC}${e.STATIC}][A-Za-z_0-9]*`)}),G=t({name:"Entity",pattern:/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/i}),g=t({name:"Weight",pattern:new RegExp(`\\s*${e.OPEN_WEIGHT}.+${e.CLOSE_WEIGHT}\\s*`)}),A=t({name:"Raw",pattern:new RegExp(`[^${e.SPECIAL}]+`)});return{tokens:{modes:{normal:[G,g,m,p,r,T,_,I,c,S,N,O,A,C],gate_mode:[s,o]},defaultMode:"normal"},Constants:{Symbols:n,Escaped:e}}}function P(E){return E.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}export{H as getTokens};
