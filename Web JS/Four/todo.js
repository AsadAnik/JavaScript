 alert('Hellow world!');

    document.querySelector('.oneBtn').addEventListener('click', addItem, false);

function addItem(){//Function for adding something....

    var inputItem = document.getElementById('input').value;
    var ul = document.getElementById('ul');
    var textNode = document.createTextNode(inputItem);

    if(inputItem === ''){
        //Add a p tag and write some errors....
        return false;

    }else{
       //Create li.. 
         var li = document.createElement('li');

       //Create checkbox.. 
         var checkbox = document.createElement('input');
         checkbox.type = 'checkbox';
         checkbox.setAttribute('id', 'check');
         

       //Create label..
         var label = document.createElement('label');

         ul.appendChild(label);
         li.appendChild(checkbox);
         label.appendChild(textNode);
         li.appendChild(label);
         ul.insertBefore(li, ul.childNodes[0]);
        //  li.className = 'myCheck';

      //Set The time ....for animation.
            setTimeout(() => {
                li.className = 'myCheck';
            }, 2);   

       //For empty the input blank list...  
         input.value = '';

    }
}

    document.querySelector('.twoBtn').addEventListener('click', removeItem, true);

 function removeItem(){//Removeing Method/Function...
      li = ul.children;
      for(let index = 0; index < li.length; index++){
            while(li[index] && li[index].children[0].checked){
                    ul.removeChild(li[index]);
            }
      }
}