document.getElementById("btnSubmit").onclick = function () {
    let radios = document.getElementsByName("opcoes");
    let opcaoRadio;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        opcaoRadio = radios[i].value;
        intConfProp(opcaoRadio);
      }
    }
  };
  
  function intConfProp(opcaoRadio) {
    
    let valordeP = Number(document.getElementById("valordeP").value);
    let erro = Number(document.getElementById("erro").value);
    let grauConf;
  
    if (opcaoRadio == 90) {
      grauConf = 1.645;
    } else if (opcaoRadio == 95) {
      grauConf = 1.96;
    } else {
      grauConf = 2.575;
    }
  
    let amostra = ((grauConf ** 2) * valordeP * (1- valordeP)) / (erro ** 2);
   
    
    let arredondar = Math.ceil(amostra);
  
  
  
    document.getElementById("resultado").innerHTML =
    "<h2> Tamanho da amostra:  " +
    arredondar + 
    '<img src="./assets/question.svg" alt="ícone de ajuda" title="Esse resultado já está arredondado para o inteiro mais próximo">';

   
}
  /* Função para calcular o valor de P dentro do modal*/
  
  function calcularP() {
    
    let numSucesso = Number(document.getElementById("numSucesso").value);
    let tamAmostraP = Number(document.getElementById("tamAmostraP").value);

    let resultadoP = numSucesso/tamAmostraP;
    console.log(numSucesso);
    console.log(tamAmostraP);

    document.getElementById("resultadoP").innerHTML =
    "<h2>Valor de P: " +
    resultadoP;
  }

function abrirmodal(){
  document.getElementById("modal").style.display = "block";
}
