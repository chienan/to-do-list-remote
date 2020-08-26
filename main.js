const STATUS = {
  awaitingCreate: 'awaitingCreate',
  toDoCreated: 'toDoCreated',
  toDoCompleted: 'toDoCompleted',
  toDoDeleted: 'toDoDeleted',
}

const data = {
  todo: ['Hit the gym',
    'Read a book',
    'Buy eggs',
    'Organize office',
    'Pay bills'],
  done: [],
}

const view = {
  list: document.querySelector('#my-todo'),
  toDoList: document.querySelector('#toDoList'),
  addBtn: document.querySelector('#addBtn'),
  newTodo: document.querySelector('#newTodo'),
  doneList: document.querySelector('#my-done'),
}


const model = {

}


const controller = {

}


function init() {
  for (let todo of data.todo) {
    renderToDo(todo)
  }
}


//新增toDo
function addToDo(content) {
  if (content) {
    data.todo.push(content)
  }
}

function renderToDo(todo) {

  list.innerHTML = `
     <label for="todo">${text}</label>
     <i class="delete fa fa-trash"></i>
//  `
  console.log(content)
  view.list.innerHTML = content
}



//渲染todo：運用map讓回傳值變成陣列
//function renderToDo() {
//  view.toDoList.innerHTML = ''
//  view.toDoList.innerHTML += items.map(
//    (text, i) => `<li id="${i}">
//    <label for="todo">${text}</label>
//    <i class="delete fa fa-trash"></i>
//    </li>`
//  )
//}

//*******************************

//    *VIEW*     function to create todo-li
//function addItem(text) {
//   let newItem = document.createElement('li')
//  newItem.innerHTML = `
//    <label for="todo">${text}</label>
//    <i class="delete fa fa-trash"></i>
//  `
//  view.list.appendChild(newItem)
//}
//    *STATUS: awaitingCreate


//    *VIEW*     function to create done-li
function addDoneItem(text) {
  let doneItem = document.createElement('li')
  doneItem.innerHTML = `
    <label for="todo" class="checked">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  view.doneList.appendChild(doneItem)
}


//    *CONTROLLER*     function to create todo-li
view.newTodo.addEventListener('keypress', (event) => {
  if (event.keyCode == 13)
    createToDo()
})


//    *MODEL*
function createToDo(event) {
  let inputValue = newTodo.value
  if (inputValue.trim()) {
    addItem(inputValue)
    newTodo.value = ''
  }
}
//    *STATUS: toDoCreated


//    *VIEW*
function done(event) {
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()

    // move to Done
  } else if (event.target.tagName === 'LABEL') {
    let done = event.target.parentElement
    addDoneItem(done.innerText)
    done.remove()
  }
}
//    *STATUS: toDoCompleted



//    *VIEW*
function deleteDone(event) {
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()
  }
}
//    *STATUS: toDoDeleted


view.addBtn.addEventListener('click', createToDo)
view.list.addEventListener('click', done)
view.doneList.addEventListener('click', deleteDone)

init()