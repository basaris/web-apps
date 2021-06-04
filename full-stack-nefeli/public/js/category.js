const leftBody1 = document.querySelector('.left-body div:nth-child(1)');
const leftBody2 = document.querySelector('.left-body div:nth-child(2)');
const leftBody3 = document.querySelector('.left-body div:nth-child(3)');
const leftBody4 = document.querySelector('.left-body div:nth-child(4)');
const dropdown = document.querySelector('.left-body .dropdownBtn');


dropdown.addEventListener('click',function(){
    if(leftBody1.style.display == "none"){
        leftBody1.style.display = "block";
        leftBody2.style.display = "block";
        leftBody3.style.display = "block";
        leftBody4.style.display = "block";
    }else{
        
        leftBody1.style.display = "none";
        leftBody2.style.display = "none";
        leftBody3.style.display = "none";
        leftBody4.style.display = "none";
    }
    
    
})



