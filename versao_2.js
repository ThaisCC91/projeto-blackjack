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
compraCarta()
const cartaUsuario = [compraCarta(), compraCarta()]
const cartaPc = [compraCarta(), compraCarta()]

if (confirm("Bem vindo ao jogo de BlackJack!\nDeseja iniciar uma nova rodada?")){
   let valorUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
   let valorPc = cartaPc[0].valor + cartaPc[1].valor

   let mensagem = confirm(`As cartas sao ${cartaUsuario[0].texto} ${cartaUsuario[1].texto}. A carta mostrada pelo computador é ${cartaPc[0].texto}\nDeseja outra carta?`)

   while (mensagem && valorUsuario <= 21){
      const novaCarta = compraCarta()
      cartaUsuario.push(novaCarta)
      valorUsuario ÷= novaCarta.valor

      let novasCartasUsuario = cartaUsuario.map((novaCarta) => {
         return novaCarta.texto
      })
      mensagem = confirm(`As cartas sao ${novasCartasUsuario}. A carta mostrada pelo computador é ${cartaPc[0].texto}\nDeseja outra carta?`)
      
   }
   let compraCartaPc = compraCarta()

   while (valorPc <= 21){
      const novaCarta = compraCarta()
      cartaPc.push(novaCarta)
      valorPc ÷= novaCarta.valor

      compraCartaPc++

      let novaCartaPc = cartaPc.map((novaCarta) => {
         return novaCarta.texto
      })
   }
   if ((valorUsuario <= 21) || (valorUsuario < valorPc)) {
      let novasCartasUsuario = cartaUsuario.map((novaCarta) => {
         return novaCarta.texto
      })
      let novaCartaPc = cartaPc.map((novaCarta) => {
         return novaCarta.texto
      }) 
      alert(`usuario - cartas: ${novasCartasUsuario} - Pontuacao: ${valorUsuario}\nComputador - cartas: ${novaCartaPc} - Pontuacao: ${valorPc}\nUsuario ganhou!`)
      
   } else if (valorUsuario === valorPc){
      let novasCartasUsuario = cartaUsuario.map((novaCarta) => {
         return novaCarta.texto
      })
      let novaCartaPc = cartaPc.map((novaCarta) => {
         return novaCarta.texto
      })
      alert (`usuario - cartas: ${novasCartasUsuario} - pontuacao: ${valorUsuario}\nComputador - cartas: ${novaCartaPc} - Pontuacao: ${valorPc}\nEmpate!`)

   } else {
      let novasCartasUsuario = cartaUsuario.map((novaCarta) => {
         return novaCarta.texto
      })
      let novaCartaPc = cartaPc.map((novaCarta) =>{
         return novaCarta.texto
      })
      alert (`usuario - cartas: ${novasCartasUsuario} - pontuacao: ${valorUsuario}\nCompuatdor - cartas: ${novaCartaPc} - Pontuacao: ${valorPc}\nComputador ganhou!`)
   }

} else {
   alert ("Fim de jogo!")
}
   