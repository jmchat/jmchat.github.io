var objects=document.getElementById("list"),ourRequest=new XMLHttpRequest;ourRequest.open("GET","https://jmchat.github.io/webapp/HTML/assets/feed/routes.json");ourRequest.onload=function(){var a=JSON.parse(ourRequest.responseText);renderHTML(a)};ourRequest.send();
function renderHTML(a){var b="";for(i=0;i<a.length;i++)b=0==i?b+('<ul class="listview link-listview"><li><a href="page-route.html?location='+a[i].carRoute+'">'+a[i].object+"</a/></li>"):i==a.length?b+('<li><a href="page-route.html?location='+a[i].carRoute+'">'+a[i].object+"</a/></li></ul>"):b+('<li><a href="page-route.html?location='+a[i].carRoute+'">'+a[i].object+"</a/></li>");objects.insertAdjacentHTML("beforeend",b)};