document.addEventListener("DOMContentLoaded", function() {
 

    
    const fotoprofil = document.querySelector('.foto');
    
    if (fotoprofil) { 
        fotoprofil.addEventListener('click', function() {
            alert("its me!");
        });
    }
});
