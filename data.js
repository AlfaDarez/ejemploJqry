

   // Stuff to do as soon as the DOM is ready


var nom, app;

document.getElementById("enviar").onclick=()=>{
  var peticion =$('#alumno form').attr('action');
  var metodo=$('#alumno form').attr('method');
var  nom = document.getElementById('nombre').value;
var  app = document.getElementById('correo').value;



if(nom!="" && app!=""){
enviar();

}else{
alert("Rellene los campos");

}


  function enviar(){

  $.ajax({
    beforeSend:()=>{


    },
    url:peticion,
    type:metodo,
    data:{
      nombre:nom,
      correo:app
    }
    ,
      success:(resp)=>{

        Push.create(resp,
        {
          body:"Bienvenido",
          icon:"user.png",
          link:"facebook.com",
          timeout:3000
        });

           $("#nombre").val("");
           $("#correo").val("");


      },error:function(jqXHR,estado,error){
        console.log(error);
        console.log(estado);

      }

  });
function Mensaje(resp){

}



};
}
