document.getElementById("btnSubmit").onclick = function () {
    let radios = document.getElementsByName("opcoes");
    let opcaoRadio;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        opcaoRadio = radios[i].value;
        tamAmostraMed(opcaoRadio);
       
      }
    }
  };
  
  function tamAmostraMed(opcaoRadio) {
    
    let desvPad = Number(document.getElementById("desvPad").value);
    let erro = Number(document.getElementById("erro").value);
    let grauConf;
  
    if (opcaoRadio == 90) {
      grauConf = 1.645;
    } else if (opcaoRadio == 95) {
      grauConf = 1.96;
    } else {
      grauConf = 2.575;
    }

    let amostra = (grauConf * desvPad / erro) ** 2;
  
  
   
    let arredondar = Math.ceil(amostra); // aproximar o número para o próximo inteiro
  
    
  
    document.getElementById("resultado").innerHTML =
    
      "<h2> Tamanho da amostra:  " +
      arredondar + 
      '<img src="./assets/question.svg" alt="ícone de ajuda" title="Esse resultado já está arredondado para o inteiro mais próximo">';

     
  }
  