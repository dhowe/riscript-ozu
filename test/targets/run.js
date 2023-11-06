import RiScript from  '../../dist/riscript.js';

let str = '\nRiScript v' + RiScript.VERSION + '\n\n';
Object.getOwnPropertyNames(RiScript)
  .filter(p => !p.startsWith('_')
    && typeof RiScript[p] === "function")
  .forEach(p => str += `RiScript.${p}()\n`);
console.log(str);
