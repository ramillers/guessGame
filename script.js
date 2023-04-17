let result = prompt("adivinhe o número que estou pensando? está entre 0 e 10"); // cria a variável pra guardar o que está sendo requerido pelo prompt (a resposta, no caso)

const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1; // se acertar de primeira, irá aparecer apenas 1 tentativa

while (Number(result) != randomNumber) {
    result = prompt("erro, tente novamente: ")
    xAttempts++ // entrando dentro do loop, variável será incrementada a cada rodada
}

// enquanto oq tá dentro do while (result (numero q coloquei) e o randomNumber forem DIFERENTES) for TRUE, continua pedindo para escrever outro result, quando for IGUAL, sai do loop

alert(`parabens! o número foi: ${randomNumber}, e voce o adivinhou em ${xAttempts} tentativas `)