//MENU LATERAL
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto    
    menu.style.display = "block";
    menu_visible = true;
}
else{
menu.style.display = "none";
menu_visible = false;
}
}


//CREO LAS BARRAS DE PORCENTAJE
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

 // SELECCIONO TODAS LA BARRAS
 let ingles = document.getElementById("ingles");
 crearBarra(ingles);
 let portugues = document.getElementById("portugues");
 crearBarra(portugues);

 //AHORA LLENAMOS LAS BARRAS
 let contadores = [-1,-1,];
 let entro = false; 
 function efectoHablidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalingles = setInterval(function(){
            pintarBarra(ingles, 12, 0, intervalingles);
        },100);
        const intervalportugues = setInterval(function(){
            pintarBarra(portugues, 8, 1, intervalportugues);
        },100);
    }
 }
 function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
    let elementos = id_barra.getElementsByClassName("e");
    elementos [x].style.backgroundColor ="#aa5523"; 
}else{
    clearInterval(interval)
}
}

window.onscroll =function (){
    efectoHablidades();
}

 