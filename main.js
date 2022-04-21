//Função para adicionar um 'to do' na forma de li na div

//Pegando a ul(lista) onde ficará os 'to dos'
const toDoList = document.querySelector('#toDoList')
//Input da tarefa
const input = document.querySelector('input')
//Form que contém input e botão
const toDoForm = document.querySelector('#toDoForm')

//Evento de adicionar 
toDoForm.addEventListener('submit', (e) => {
    //prevenir do browser recarregar quando der submit
    e.preventDefault()
    //Valor digitado 
    let toDo = input.value
    
    //Verificando se contém algo antes de adicionar
    if(!toDo){
        return
    }

    //Criando a li que receberá o valor
    let li = document.createElement('li')
    //atribuindo a tarefa a li
    li.innerHTML = toDo
    //posicionando a li no começo da lista
    toDoList.prepend(li)
})