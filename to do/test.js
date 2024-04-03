let btn = document.querySelector("#add__btn");
let remove = document.querySelector('.draggable');
let removeButtonList = document.querySelector("#remove__btn");
btn.addEventListener('click', addNewItem);
removeButtonList.addEventListener('click', removeItemList);


function dragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragEnter(e) {
  this.classList.add('over');
}

function dragLeave(e) {
  e.stopPropagation();
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragDrop(e) {
  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    console.log(e);
    this.innerHTML = e.dataTransfer.getData('text/html');
    console.log(this.innerHTML);
  }
  return false;
}

function dragEnd(e) {
  let listItens = document.querySelectorAll('.draggable');
  [].forEach.call(listItens, function (item) {
    item.classList.remove('over');
  });
  this.style.opacity = '1';
}

function addEventsDragAndDrop(el) {
  el.addEventListener('dragstart', dragStart, false);
  el.addEventListener('dragenter', dragEnter, false);
  el.addEventListener('dragover', dragOver, false);
  el.addEventListener('dragleave', dragLeave, false);
  el.addEventListener('drop', dragDrop, false);
  el.addEventListener('dragend', dragEnd, false);
}

let listItens = document.querySelectorAll('.draggable');

[].forEach.call(listItens, function (item) {
  addEventsDragAndDrop(item);
});





let ul = document.querySelector('ul');

function addNewItem() {
  let newItem = document.querySelector('.input').value;



  if (newItem != '') {
    let btn_remove_item = document.createElement('button');
    btn_remove_item.classList.add('btn_remove_item');
    btn_remove_item.id = ' btn_remove_item';
    document.querySelector('.input').value = '';
    let li = document.createElement('li');
    let attr = document.createAttribute('draggable');
    let ul = document.querySelector('ul');
    li.className = 'draggable';
    attr.value = 'true';
    btn_remove_item.onclick = e => remove_list(e);
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    li.appendChild(btn_remove_item);
    // btn_remove_item.addEventListener('click', (e) => remove_list(e));
    addEventsDragAndDrop(li);
  }
}




function remove_list(e) {

  let container = e.target.parentElement;
  ul.removeChild(container);
  console.log(container);

}


function removeItemList() {


};



var style = getComputedStyle(document.body)
console.log(style.getPropertyValue('--bar')) // #336699
console.log(style.getPropertyValue('--baz')) // calc(2px*2)
:root { --foo:#336699; --bar: var(--foo); --baz: calc(2px * 2); }
document.documentElement.style
  .setProperty('--my-variable-name', 'pink');