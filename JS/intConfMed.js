document.getElementById("btnSubmit").onclick = function () {
    let radios = document.getElementsByName("opcoes");
    let opcaoRadio;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        opcaoRadio = radios[i].value;
        intConfMed(opcaoRadio);
       
      }
    }
  };
  
  function intConfMed(opcaoRadio) {
    let media = Number(document.getElementById("media").value);
    // let grauConf = Number(document.getElementById('grauConf').value);
    let desvPad = Number(document.getElementById("desvPad").value);
    let tamAmostra = Number(document.getElementById("tamAmostra").value);
    let grauConf;
  
    if (opcaoRadio == 90) {
      grauConf = 1.645;
    } else if (opcaoRadio == 95) {
      grauConf = 1.96;
    } else {
      grauConf = 2.575;
    }
  
    let raiz = Math.sqrt(tamAmostra);
    let erro = (grauConf * desvPad) / raiz;
  
    let arredondar = parseFloat(erro.toFixed(2)); // para aproximar o número
  
    let intervaloMenos = media - arredondar;
    let intervaloMais = media + arredondar;
  
    document.getElementById("resultado").innerHTML =
      "<h2>Intervalo de confiança: " +
      intervaloMenos +
      " < μ < " +
      intervaloMais +
      "</h2>";
  }
  