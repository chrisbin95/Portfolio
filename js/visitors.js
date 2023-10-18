/*To Create CountAPI*/
/*https://api.countapi.xyz/create?namespace=localhost7001&key=visits&value=0*/
/*To hit CountAPI*/
/*https://api.countapi.xyz/hit/localhost7001/visits*/
/*To get CountAPI*/
/*https://api.countapi.xyz/get/localhost7001/visits*/
/*To update CountAPI*/
/*https://api.countapi.xyz/update/localhost7001/visits/?amount=1*/
/*const countEl=document.getElementById("CounterVisitor");function updateVisitCount(){fetch("/api/v1/visit/update/chrisbinthomas/visits?amount=1").then(t=>t.json()).then(t=>{countEl.innerHTML=t.value})}updateVisitCount();*/
import countapi from 'countapi-js';
t=performance.timing;window.addEventListener("load",function(){console.log("\n> Portfolio is successfully loaded in",Math.round(t.loadEventEnd-t.responseEnd)/1e11,"sec.")});var now=new Date,datetime=now.toLocaleString();const width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;console.log(">",navigator.userAgent,"\n>",datetime,"\nResolution :",width,"*",height);let cookies=document.cookie;function getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(foundLocation,handleError):console.error("Geolocation is not supported by this browser.")}function handleError(e){let o;switch(e.code){case e.PERMISSION_DENIED:o="User denied the request for Geolocation.";break;case e.POSITION_UNAVAILABLE:o="Location information is unavailable.";break;case e.TIMEOUT:o="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:o="An unknown error occurred.";break;default:o="An unknown error occurred."}console.error("Error occurred: "+o)}console.log("> Cookie-Enabled:",navigator.cookieEnabled,"\n",cookies),getLocation(); 
function foundLocation(position)
 {
   var lat = position.coords.latitude;
   var long = position.coords.longitude;
   console.log('> User-location %c\nLatitude: ' + lat + '\nLongitude: ' + long,'background:#000;color:#16d900;border-radius:3px');
   //mailto:chrsibint@gmail.com?body=encodeURIComponent('Found location: ' + lat + ', ' + long);
 };
//function fadeOutEffect(){var e=document.getElementById("loader-wrapper"),o=setInterval(function(){e.style.opacity||(e.style.opacity=1),e.style.opacity>0?e.style.opacity-=.1:clearInterval(o)},3e3)}var loader=document.getElementById("loader-wrapper"),t=performance.timing;window.addEventListener("load",function(){console.log("\n> KSGI is successfully loaded in",Math.round(t.loadEventEnd-t.responseEnd)/1e11,"sec."),window.setTimeout(()=>{loader.style.display="none"},3e3)},fadeOutEffect());var now=new Date,datetime=now.toLocaleString();const width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;console.log(">",navigator.userAgent,"\n>",datetime,"\nResolution :",width,"*",height);let cookies=document.cookie;function getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(foundLocation,handleError):console.error("Geolocation is not supported by this browser.")}function handleError(e){let o;switch(e.code){case e.PERMISSION_DENIED:o="User denied the request for Geolocation.";break;case e.POSITION_UNAVAILABLE:o="Location information is unavailable.";break;case e.TIMEOUT:o="The request to get user location timed out.";break;case e.UNKNOWN_ERROR:o="An unknown error occurred.";break;default:o="An unknown error occurred."}console.error("Error occurred: "+o)}function foundLocation(e){var o=e.coords.latitude,t=e.coords.longitude;console.log("> User-location %c\nLatitude: "+o+"\nLongitude: "+t,"background:#000;color:#16d900;border-radius:3px")}console.log("> Cookie-Enabled:",navigator.cookieEnabled,"\n",cookies),getLocation();
// Define a function to display the visit count
const countapi = require('countapi-js');
const displayCount = (value) => {
  // Get the element with id="counter" from HTML
  const counter = document.getElementById("CounterVisitor");
  // Set the innerHTML of the element to the value
  CounterVisitor.innerHTML = value;
};

// Define a function to handle error
const handleError1 = (error) => {
  console.log(error);
};

// Define a namespace and a key for your website
const namespace = "https://chrisbin95.github.io/Portfolio/";
const key = "visits";

// Call the CountAPI.hit() method to increment and get the current value
CountAPI.hit(namespace, key).then(displayCount).catch(handleError1);

