/*To Create CountAPI*/
/*https://api.countapi.xyz/create?namespace=localhost7001&key=visits&value=0*/
/*To hit CountAPI*/
/*https://api.countapi.xyz/hit/localhost7001/visits*/
/*To get CountAPI*/
/*https://api.countapi.xyz/get/localhost7001/visits*/
/*To update CountAPI*/
/*https://api.countapi.xyz/update/localhost7001/visits/?amount=1*/
const countEl=document.getElementById("CounterVisitor");function updateVisitCount(){fetch("https://api.countapi.xyz/update/chrisbinthomas/visitors/?amount=1").then(t=>t.json()).then(t=>{countEl.innerHTML=t.value})}updateVisitCount();
