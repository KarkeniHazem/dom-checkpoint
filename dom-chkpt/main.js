var likes= document.getElementsByClassName('like')
    for (i=0; i< likes.length;i++)
    { let like= likes[i] ;
        like.addEventListener('click',function()
        {
        
        if( like.style.color=='red'){  like.style.color='black';}
        else {like.style.color='red';}
    })}



    var dlt= document.getElementsByClassName('delete')
    for (i=0; i< dlt.length;i++)
    { let remove= dlt[i] ;
        remove.addEventListener('click',function()
        {
        
        remove.parentElement.remove()
    })}


    let pluss= document.getElementsByClassName('plus-btn')
    for (i=0; i< pluss.length;i++)
    { let plus= pluss[i] ;
        plus.addEventListener("click",function(){
        plus.previousElementSibling.value++
        totalprice()
    })}
        



let minuss= document.getElementsByClassName('minus-btn')
    for (i=0; i< minuss.length;i++)
    { let minus= minuss[i] ;
        minus.addEventListener("click",function(){
            if (minus.nextElementSibling.value > 1) {
                minus.nextElementSibling.value--
        totalprice()
    }})}



    function totalprice() {
        var items = document.getElementsByClassName("Item")
        var total = 0
        for (let i = 0; i < items.length; i++) {
            var Price = items[i].querySelector(".price")
            var qyt = items[i].querySelector(".Quant")
            total = (Price.innerHTML * qyt.value) + total
        }
        document.getElementById("finalPrice").value = total
    }
