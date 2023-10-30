/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log ("Boas vindas ao jogo de Blackjack!")
function comprarCarta() {
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
   const naipes = ["♦️", "♥️", "♣️", "♠️"];
   const numero = cartas[Math.floor(Math.random() * 13)];
   const naipe = naipes[Math.floor(Math.random() * 4)];
   let valor;
   if (numero === "A") {
   valor = 11;
}  else if (numero === "J" || numero === "Q" || numero === "K") {
   valor = 10;
} else {
   valor = parseInt(numero);
}
return { texto: numero + naipe, valor: valor };
}
if (confirm("Deseja iniciar uma nova rodada?")) {
   let carta01Usuario = comprarCarta();
   let carta02Usuario = comprarCarta();
   let valorUsuario = carta01Usuario.valor + carta02Usuario.valor;
   console.log(`Usuario - cartas: ${carta01Usuario.texto} ${carta02Usuario.texto} - pontuação: ${valorUsuario}`);
   let carta01Pc = comprarCarta();
   let carta02Pc = comprarCarta();
   let valorPc = carta01Pc.valor + carta02Pc.valor;
   console.log(`Pc - cartas: ${carta01Pc.texto} ${carta02Pc.texto} - pontuação: ${valorPc}`);
   if (valorUsuario <= 21 && valorUsuario > valorPc) {
       console.log("Usuário ganhou!");
   } else if (valorUsuario === valorPc) {
       console.log("Empate!");
   } else {
       console.log("Pc ganhou!");
   }
} else {
   console.log("Fim de jogo!");
}
