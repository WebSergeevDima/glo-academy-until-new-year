(()=>{"use strict";(()=>{const e=document.getElementById("greetings"),t=document.getElementById("today"),n=document.getElementById("time"),o=document.getElementById("day-for-new-year"),g=()=>{const g=new Date,a=new Date(`${g.getFullYear()+1} 1 1`),d=g.toLocaleDateString("ru-RU",{weekday:"long"}),l=g.getHours(),r=+a.getTime()-+g.getTime(),s=Math.floor(r/1e3/60/60/24);let m="Доброй ночи!";l>=18?m="Добрый вечер!":l>=12?m="Добрый день!":l>=6&&(m="Доброе утро!"),e.textContent=m,t.textContent=d[0].toUpperCase()+d.slice(1),n.textContent=`${g.getHours()}:${g.getMinutes()}:${g.getSeconds()}`,o.textContent=s};setInterval((()=>{g()}),1e3),g()})()})();