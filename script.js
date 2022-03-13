function carregar(){
  var msg = document.getElementById ("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minu = data.getMinutes();
 

  msg.innerHTML =(`Agora são ${hora}-H ${minu}-MIM!`);

  if(hora >= 0 && hora < 12){
    //Bom dia
    document.body.style.background = "tomato"
    img.src="style/fotomanha.png.jpg"
  } else if( hora >= 12 && hora <= 18){
    // Bom tarde
    document.body.style.background = "blue"
    img.src="style/fototarde.png.jpg"
  } else {
    //Boa noite
    img.src="style/fotonoite.png.jpg"
    document.body.style.background = "black"
  }
}