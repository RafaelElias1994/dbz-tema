// Objetivo 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado
// passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles

const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll(".personagem");

// passo 2 - adicionar a classe "selecionado" no botao que o usuário clicou

botoes.forEach(botao=>{
    botao.addEventListener("click", () =>{

        // passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele

        const botaoSelecionado = document.querySelector(".botao");
        console.log(botaoSelecionado.classList);        
        //botaoSelecionado.classList.remove("selecionado");

        botaoSelecionado.classList.remove("selecionado");
        botao.classList.add("Selecionado"); 


    });    
})

/*addEventListener("click", () => {
    console.log("clicou no botão");
});
*/
