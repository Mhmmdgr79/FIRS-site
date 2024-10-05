var ul = document.querySelector("#mainmenu");
ul.addEventListener("mouseover",()=> {
    var li=document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        li[i].onmouseover = function () {
            activeselect(this);
            }
            li[i].onmouseout=()=>{
                li[i].classList.remove("active");
            }
        }
    });
    function activeselect(list) {
        list.classList.toggle("active");
    }
