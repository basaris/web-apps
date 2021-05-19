//btnClear points to the #clear-button element in the DOM


//select button
const btnClear = document.querySelector('#clear-button');
//select input box
const inputEnter = document.querySelector('#new-item');
//select ul
const listItems = document.querySelector('#todo-list');

//var to count the id 
var countId=0;
//var to count the items-array length
var countLen=0;

var tab=[];
var items=[];
//Adding and event listener: btnClear will react on the click event
//When the btnClear is clicked, then the callback fuction 
//(the 2nd argument of the event listener) will be called. 



//clear button
btnClear.addEventListener("click", function() {

    while( listItems.firstChild ){
        listItems.removeChild( listItems.firstChild );
      }

    countId=0;
    tab=[];
    items=[];
});

//input print
inputEnter.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();

      let a = document.getElementById('new-item').value;

      //if you put nothing
      if(a===''){
        a="nothing";
      }

      //append li to ul 
      var li=document.createElement("li");
      li.id = "a"+countId.toString();
      li.appendChild(document.createTextNode(a));
      listItems.appendChild(li);

      //clear the input
      inputEnter.value='';

      //Update the arrays
      //add li items to the array
      items = document.querySelectorAll('#todo-list li');
      tab=[];
      for(var i=0;i<items.length;i++){
          tab.push([items[i].innerHTML,true]);
      }

      countLen=tab.length;

      //count the id
      countId++;
    }
  });

  //click function
  listItems.addEventListener("click", function(event) {
    for(var i=0;i<=countId;i++){
      //event trigger
      if (event.target.matches("#a"+i)) {
      
        var val = document.getElementById("a"+i);
        var liVal=document.querySelector("#a"+i);

        //check where the item is in the items-array so
        //we can get the items' index from tab
        for(let j=0;j<countLen;j++){
          if(items[j].id===("a"+i)){
            if(tab[j][1]===true){
              //change the value
              val.style.textDecoration="line-through";
              liVal.innerHTML=val.innerHTML;
              tab[j][1]=false;
    
            }else{
              //change the value
              val.style.textDecoration="none";
              liVal.innerHTML=val.innerHTML;
              tab[j][1]=true;
    
            }
          }
        }
      }
    }
  });

  //double click
  listItems.addEventListener("dblclick", function(event) {
    for(let i=0;i<=countId;i++){
    //event trigger
    if (event.target.matches("#a"+i)) {
      
      //just delete it 
      var liVal2=document.querySelector("#a"+i);
      listItems.removeChild(liVal2);
    }
    }
  });


  
  
fetch('http://localhost:3000/data').then(response => console.log(response));





  