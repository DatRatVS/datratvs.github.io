var roastmeprojectbutinjavascript = (function () {
  function roastmeprojectbutinjavascript() {
  }
  roastmeprojectbutinjavascript.main = function (args) {
      var roastNumber = ((Math.random() * 69) | 0);

      /*
      var roastNumber = ((Math.random() * 69) | 0);
      Pega um numero aleatório de 0 a 69
      Programa feito em Java e Traduzido para JavaScript ^^
      */

      var roast = ["A bateria do meu telefone dura mais do que seus relacionamentos.",
      "Oh, você está falando comigo, eu pensei que você só falava nas minhas costas.",
      "Meu nome deve ter um gosto bom porque está sempre na sua boca.",
      "Você não se cansa de colocar maquiagem em duas faces todas as manhãs?",
      "É uma pena que você não pode contar pular para conclusões e correr a boca como um exercício.",
      "Seu drama vai para um intervalo em breve?",
      "Eu sou um gosto adquirido. Se você não gosta de mim, adquira um pouco do sabor.",
      "Se eu quisesse uma cadela, teria comprado um cachorro.",
      "Meu negócio é meu negócio. A menos que você seja um fio dental, saia da minha bunda.",
      "É uma pena que você não possa fazer o Photoshop de sua personalidade.",
      "Eu não adocico merda. Eu não sou Willy Wonka.",
      "Agir como um idiota não faz o seu crescer.",
      "A coisa mais inteligente que já saiu da sua boca foi um pênis.",
      "Acalme-se. Respire fundo e segure por cerca de vinte minutos.",
      "O ciúme é uma doença. Fique boa logo, vadia!",
      "Quando o carma voltar para te dar um soco na cara, quero estar lá, caso precise de ajuda.",
      "Você tem mais faces do que o Monte Rushmore.",
      "Desculpe, sarcasmo sai da minha boca como besteira sai da sua.",
      "Não confunda meu silêncio com fraqueza. Ninguém planeja um assassinato em voz alta",
      "Sim, eu sou uma vadia apenas não a sua.",
      "Lamento que você tenha se ofendido uma vez que foi tratado da maneira como trata todo mundo o tempo todo.",
      "Você deve usar preservativo na cabeça. Se você vai ser um idiota, é melhor se vestir como um.",
      "Talvez você devesse comer maquiagem para ficar bonita por dentro também.",
      "Ser uma vadia é uma tarefa difícil, mas alguém tem que fazer isso.",
      "Meu dedo médio fica teso toda vez que vejo você.",
      "Você tem direito à sua opinião incorreta.",
      "Você é tão real. Um verdadeiro asno.",
      "Quem quer que lhe diga para ser você mesmo lhe deu um conselho muito ruim.",
      "Se eu tivesse um rosto como o seu, processaria meus pais.",
      "Onde está seu botão de desligar?",
      "Eu não mudei. Eu cresci. Você deveria tentar algum dia.",
      "Achei que estava com gripe, mas então percebi que seu rosto me dá enjôo.",
      "As pessoas que menos me conhecem têm mais a dizer.",
      "Tenho ciúme de pessoas que não te conhecem.",
      "Lamento que minha honestidade brutal tenha incomodado seu ego.",
      "Você parece razoável… Hora de aumentar minha medicação.",
      "Aww, é tão fofo quando você tenta falar sobre coisas que você não entende.",
      "Existe algum aplicativo que eu possa baixar para fazer você desaparecer?",
      "Sinto muito, você parece ter me confundido com uma mulher que aceita sua merda.",
      "Estou visualizando uma fita adesiva sobre sua boca.",
      "90% da sua \"beleza\" pode ser removida com um lenço de papel.",
      "Eu sugiro que você faça um pequeno exame de consciência. Você pode apenas encontrar um.",
      "Algumas pessoas deveriam usar cola em vez de batom.",
      "Meu alisador de cabelo é mais quente do que você.",
      "Eu tenho saltos mais altos do que seus padrões.",
      "​​Eu ia bater em você, mas isso seria abuso de animal.",
      "Por que é aceitável que você seja um idiota, mas não que eu aponte isso?",
      "Se você está ofendido com minha opinião, deveria ouvir aquelas que guardo para mim",
      "Se você vai ser um idiota, primeiro você tem que ser inteligente, caso contrário, você é apenas um idiota.",
      "Seu rosto está bem, mas você terá que colocar um saco sobre essa personalidade.",
      "Ei, encontrei o seu nariz, está no meu negócio de novo!",
      "Eu não sou um astrônomo, mas tenho certeza de que a Terra gira em torno do Sol e não de você.",
      "Eu posso ser louco, mas louco é melhor do que estúpido.",
      "É assustador pensar que pessoas como você têm permissão para votar.",
      "Continue revirando os olhos. Talvez você encontre seu cérebro lá atrás.",
      "Não, não. Eu estou ouvindo. Só levo um momento para processar tantas informações estúpidas de uma vez.",
      "Desculpe, que idioma você está falando? Parece besteira.",
      "Todo mundo traz felicidade para uma sala. Eu faço quando eu entro, você faz quando você sai.",
      "Eu fico pensando que você não pode ficar mais burro e continua provando que estou errado.",
      "Eu não sou tímido. Eu simplesmente não gosto de você.",
      "Sua loucura está aparecendo. Você pode querer colocá-lo de volta.",
      "Sou alérgico à estupidez, então começo a irromper em sarcasmo.",
      "Você é como um êmbolo. Você gosta de trazer velhas merdas.",
      "Não estou ignorando você. Estou simplesmente dando-lhe tempo para refletir sobre como você está sendo idiota.",
      "Eu me escondo atrás do sarcasmo porque dizer para você ir se foder é rude na maioria das situações sociais.",
      "Você é a razão pela qual prefiro animais a pessoas.",
      "Você não é bonita o suficiente para ter uma personalidade tão feia.",
      "Sua certidão de nascimento é uma carta de desculpas do fabricante de preservativos",
      "Eu explicaria para você, mas deixei meu Dicionário Inglês para Estúpido em casa.",
      "Você não gosta de mim, então vá se foder. Problema resolvido."];
      console.log(roast[roastNumber]);
      document.getElementById("text").innerHTML = roast[roastNumber];
  };
  return roastmeprojectbutinjavascript;
}());
roastmeprojectbutinjavascript["__class"] = "roastmeprojectbutinjavascript";
roastmeprojectbutinjavascript.main(null);

var i = 0;

    var tag = document.getElementById("text");
    var html = document.getElementById("text").innerHTML;
    var attr = tag.setAttribute("data", html);
    var txt = tag.getAttribute("data");
    var speed = 60;

    function typeWriter() {
      if (i <= txt.length) {
        document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

typeWriter();