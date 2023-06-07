function intConfMed() {
  let media = Number(document.getElementById("media").value);
  // let grauConf = Number(document.getElementById('grauConf').value);
  let desvPad = Number(document.getElementById("desvPad").value);
  let tamAmostra = Number(document.getElementById("tamAmostra").value);

  document.getElementById("btnSubmit").onclick = function () {
    let radios = document.getElementsByName("opcoes");
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        let grauConf = radios[i].value;
      }
    }
  };

  let raiz = Math.sqrt(tamAmostra);
  let erro = (grauConf * desvPad) / raiz;

  let arredondar = parseFloat(erro.toFixed(2)); // para aproximar o num

  let intervaloMenos = media - arredondar;
  let intervaloMais = media + arredondar;


  document.getElementById("resultado").innerHTML =
    "<h2> Intervalo de confiança: " +
    intervaloMenos +
    " < μ < " +
    intervaloMais +
    " </h2>";

  // console.log(media, grauConf, desvPad, tamAmostra)
}
