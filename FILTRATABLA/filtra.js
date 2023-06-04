const busca=document.getElementById('input_busca')
const bot=document.getElementById('bot')
const tabela=document.getElementById('tabela')

bot.addEventListener("click",()=>{
    let exp=busca.value;
    let linha=tabela.getElementsByTagName('tr')
    if (exp.length ===1) {
        return
    }
    for(let pos in linha){
        if (true===isNaN(pos)) {
            continue
        }
        let contLinha = linha[pos].innerHTML
        if (true===contLinha.includes(exp)) {
            linha[pos].style.display=''
        }else{
            linha[pos].style.display='none'
        }
    }
})