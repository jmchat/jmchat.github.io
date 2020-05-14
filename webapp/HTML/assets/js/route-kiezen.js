        var objects = document.getElementById('our-list')
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET','https://hm.socialcmsdemo.nl/l/catalog/feed/routes?limit=500');
        ourRequest.onload = function() {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData)
   }; 
ourRequest.send();

function renderHTML(data) {
    var htmlString = '';

    for (i = 0; i < data.length; i++) {
            htmlString += '<li id="' + data[i].carRoute +'">' + data[i].object +'</li>';} 

    objects.insertAdjacentHTML('beforeend', htmlString);
}

objects.addEventListener("click", store);

function store(e){
if (e.target.nodeName == 'LI') {
localStorage.setItem('location', e.target.id);
window.open("page-route.html", "_self");

}}

