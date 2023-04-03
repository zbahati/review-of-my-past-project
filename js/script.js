(function(){
    const sidebar=document.getElementById("sidebar");
    const aside=document.querySelector("aside");
    sidebar.addEventListener('click',function(){
       sidebar.classList.toggle('active');
       aside.classList.toggle('active');
    })
}());