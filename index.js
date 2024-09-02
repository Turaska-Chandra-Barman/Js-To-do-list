const inputText = document.querySelector('#inputText');
const inputNumbar = document.querySelector("#inputNumbar");
const Delate = document.querySelector("#delate")
const add = document.querySelector('#add');
const tdText = document.querySelector('#tdText');
const mainTable = document.querySelector('#mainTable');
const spanMain = document.querySelector("#spanMain");
const spanAll = spanMain.querySelectorAll('span');
const update = document.querySelector("#update");





let sum = 0;

add.addEventListener('click', () => {

  sum += 1;
 

  // let array = inputText.value;
  let array = ['num', 'task', 'date', 'delate', 'edit','status'];

  let tr = document.createElement('tr');
  tr.className = 'modifyTr trStyle';

  let get = array.filter((array, index) => {
    if (index <= 2) {
      if (index === 0) {
        if (inputText.value) {
          let td = document.createElement('td');
          td.id = array;
          tr.appendChild(td);
          mainTable.appendChild(tr);
        }
      } else if (index === 1) {
        if (inputText.value && inputText.value === inputText.value) {
          let td = document.createElement('td');
          td.textContent = inputText.value;
          td.id = array;
          tr.appendChild(td);
          mainTable.appendChild(tr);
        }
      } else if (index === 2) {
        if (inputText.value) {
          let date = new Date();
          let td = document.createElement('td');
          td.textContent = date.getDate() + '/';
          td.textContent += date.getMonth();
          td.id = array;
          tr.appendChild(td);
          mainTable.appendChild(tr);
        }
      }
    } else if (index > 2 && index < 4) {
      if (inputText.value) {
        let td = document.createElement('td');
       let button = document.createElement("button");
        button.className = 'btn';
       button.innerHTML =
         '<span class="material-symbols-outlined">delete</span>';
       td.appendChild(button)
        tr.appendChild(td);
        mainTable.appendChild(tr);
      }
    } else if (index > 3 && index <= 4) {
      if (inputText.value) {
        let td = document.createElement('td');
        let button = document.createElement('button')
        button.className = 'edit'
        button.innerHTML =
          '<span class="material-symbols-outlined">edit</span>';
        td.appendChild(button);
        tr.appendChild(td);
        mainTable.appendChild(tr);
      }
    }else if( index > 4){
      if(inputText.value){
        let td = document.createElement('td');
        td.innerHTML = '<input type="checkbox"  name="checkbox" value="false">';
        tr.appendChild(td);
        mainTable.appendChild(tr);
      }
    }


    //num content adding;

    const numAdd = mainTable.querySelectorAll('#num');
  let total;
    for(let i = 0; i < numAdd.length; i++){
      numAdd[i].innerHTML = [i];
       total = [i]
    }
   
    if(total === undefined){
       spanAll[0].innerHTML = '0';
       spanAll[2].innerHTML = '0'
    }else{
       spanAll[0].innerHTML = total;
       spanAll[2].innerHTML = total;
    }


  });

  inputText.value = '';




  // removeChild

  const btn =mainTable.querySelectorAll(".btn");
  for(let i =0; i < btn.length; i++){
    
    btn[i].addEventListener("click",(e) => {
        btn[i].parentNode.parentNode.remove();
        const numCalculate = mainTable.querySelectorAll('#num');
        
        for(let i = 0; i < numCalculate.length; i++){
         numCalculate[i].innerHTML = [i];
          total = [i];
         spanAll[0].innerHTML = total;
         spanAll[2].innerHTML = total;
        }
      
    })
  }

  //EditElement

  const edit = mainTable.querySelectorAll('.edit');
    
  for(let i = 0; i < edit.length; i++){
    edit[i].addEventListener('click',(e) => {
      let value = edit[i].parentNode.parentNode.children[1].innerHTML;
      inputText.value = value;
    

     update.style.opacity= '1';
     add.style.display = 'none';

         update.addEventListener('click', (e) => {
           if(inputText.value !== ''){
              edit[i].parentNode.parentNode.children[1].innerHTML =
                inputText.value;
           }
               inputText.value = '';

               update.style.opacity= '0';
               add.style.display = 'inline'
              
         });

    })
    if (add.innerHTML === 'update') {
      add.innerHTML = 'Add';
    }


    //checkbox adding sum and hightlight the element
let check = 0;
    const status = mainTable.querySelectorAll('[name="checkbox"]');
    
   for(let i = 0; i < status.length; i++){
   
    status[i].addEventListener('click',(s) => {
      if(status[i].checked && status[i].checked === true){
        spanAll[1].innerHTML = check++
      }else if(status[i].checked !== true){
        spanAll[1].innerHTML = check--
      }
    })

   }
  }

  
 
  



  



  // for(let i = 0; i < task.length; i++){
  //   if(task[i].innerHTML === inputText.value){
  //     console.log('hello');
  //   }
  // }
});



