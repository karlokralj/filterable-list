var filter = document.getElementById('myInput');
filter.addEventListener('keyup', filterNames);

function filterNames(){
    var filterInput = document.getElementById('myInput').value.toUpperCase();
     let ul = document.getElementById('names');
     let li = ul.querySelectorAll('li.collection-item');
     for(let i = 0; i < li.length; i++){
         let a = li[i].getElementsByTagName('a')[0];
         if(a.innerHTML.toUpperCase().indexOf(filterInput) > -1){
            li[i].style.display = ''; 
         } else {
            li[i].style.display = 'none'; 
         }
     }
};