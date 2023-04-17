

// variáveis 
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1") // qnd tá começando a repetir mto a mesma coisa, criar uma variável  
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10) 
let xAttempts = 1; // variável de controle de tentativas

//eventos
btnTry.addEventListener('click', handleTryClick) // qnd eu passo uma função como argumento de outra função, e essa função vai ser executada depois de um tempo, vou chamá-la de volta (callback)
btnReset.addEventListener('click', HandleResetClick)

//FUNÇÕES
//funções callback (função q é passada como argumento de outra função)
function handleTryClick(event) {
    event.preventDefault() // não faça o padrão 

    //event - é um objeto q irá receber todos os dados do evento 

    const inputNumber = document.querySelector("#inputNumber")
    
    if (Number(inputNumber.value) == randomNumber) { // se eu acertar o número de input e for o mesmo do random number
        toggleScreen()

        document.querySelector(".screen h2").innerText = `acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = "" // vai limpar o campo toda vez q tentar, apagar o número colocado para tentar dnv

    xAttempts++
}


function HandleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen () { // alterne entre as janelas 
    screen1.classList.toggle("hide") 
    screen2.classList.toggle("hide")
}