const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
"Clã Aburame",
"Clã Akimichi",
"Clã Amagiri",
"Clã Fūma",
"Clã Fūma",
"Clã Funato",
"Clã Hagoromo",
"Clã Hatake",
"Clã Hirasaka",
"Clã Hōki",
"Clã Hōzuki",
"Clã Hyūga",
"Clã Inuzuka",
"Clã Izuno",
"Clã de Jūgo",
"Clã Kaguya",
"Clã Kamizuru",
"Clã Kedōin",
"Clã Kohaku",
"Clã Kubisaki",
"Clã Kurama",
"Clã Nara",
"Clã Rinha",
"Clã Sarutobi",
"Clã Sendō",
"Clã Senju",
"Clã Shiin",
"Clã Shimura",
"Clã Shirogane",
"Clã Tatsushiro",
"Clã Tenrō",
"Clã Tsuchigumo",
"Clã Uchiha",
"Clã Uzumaki",
"Wagarashi Family",
"Wasabi Family",
"Watari ninja",
"Clã Yamanaka",
"Clã Otenki",
"Clã Yotsuki",
"Clã Yuki",
  ] 

 function fazerPergunta() {

   if(inputPergunta.value == "") {
    alert ("Por favor, digite seu nome")
   return
   }

   buttonPerguntar.setAttribute("disabled" ,true)

   const pergunta = "<div>" + inputPergunta.value + "</div>"

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random () * totalRespostas)

  elementoResposta.style.opacity = 1;

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  setTimeout (function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  } , 3000)

 }