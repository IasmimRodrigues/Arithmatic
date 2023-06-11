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
    let tamAmostra = Number(document.getElementById("tamAmostra").value);
    let grauConf;
  
    if (opcaoRadio == 90) {
      grauConf = 1.645;
    } else if (opcaoRadio == 95) {
      grauConf = 1.96;
    } else {
      grauConf = 2.575;
    }
  
    let erroparte1 = (valordeP * (1- valordeP)) / tamAmostra;
    let raiz = Math.sqrt(erroparte1);
    let erro = grauConf * raiz;
    let arredondar = parseFloat(erro.toFixed(2)); // para aproximar o número
  
    let intervaloMenos = valordeP - arredondar;
    let intervaloMais = valordeP + arredondar;
  
    document.getElementById("resultado").innerHTML =
      "<h2>Intervalo de confiança: " +
      intervaloMenos +
      " < π < " +
      intervaloMais +
      "</h2>";
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
