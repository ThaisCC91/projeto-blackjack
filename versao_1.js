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
comprarCarta()

if(confirm("Deseja iniciar uma nova rodada?)) {
   let carta01Usuario = comprarCarta()
   let carta02Usuario - comprarCarta()
   let valorUsario = carta01Usuario.valor + carta02Usuario.valor
   console.log(`Usuario - cartas: ${carta01Usuario.texto} ${carta02Usuario.texto} - pontuacao: ${valorUsuario}`)
   let carta01Pc = comprarCarta()
   let carta02Pc = comprarCarta()
   let valorPc = carta01Pc.valor + carta02Pc.valor
   console.log(`Pc - cartas: ${carta01Pc.texto} ${carta02Pc.texto} - pontuacao: ${valorPc}`)
   if ((valorUsario <= 21) && (valorUsario > valorPc)){
      console.log("Usuario ganhou!")
   } else if (valorUsario === valorPc){
      console.log("Empate!")
   } else { 
      console.log("Pc ganhou!")
   }
} else {
   console.log("Fim de jogo!")
}