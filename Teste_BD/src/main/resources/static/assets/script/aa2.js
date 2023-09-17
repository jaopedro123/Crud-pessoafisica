var btn = document.getElementsByClassName("btnPerguntas");
var i;
    
    for (i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            this.classList.toggle("active2");
            this.parentElement.classList.toggle("active2");

            var painel = this.nextElementSibling;
            if(painel.style.display === "block") {
                painel.style.display = "none";
            }
            else {
                painel.style.display = "block";
            }
        })
    }