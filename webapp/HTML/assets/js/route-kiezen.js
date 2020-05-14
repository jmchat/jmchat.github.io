        var objects = document.getElementById('list')
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
        if (i == 0) {
            htmlString += '<ul class="listview link-listview"><li><a href="page-route.html?location=' + data[i].carRoute + '">' + data[i].object + '</a/></li>';
} 

else if (i == data.length){
htmlString += '<li><a href="page-route.html?location=' + data[i].carRoute + '">' + data[i].object + '</a/></li></ul>';

}

else {
htmlString += '<li><a href="page-route.html?location=' + data[i].carRoute + '">' + data[i].object + '</a/></li>';

}}

    objects.insertAdjacentHTML('beforeend', htmlString);
}