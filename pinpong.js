// Criar Bolinha
let raio = 7.5;
let xBolinha = 100;
let yBolinha = 200;
let diametro = raio * 2;

// Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Minha Raquete
let xRaquete = 5;
let yRaquete = 150;

// Raquete Oponete
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

//Placa
let meusPontos = 0;
let pontosOponente = 0;

function setup ( ){
    createCarnas(600,400)
}

function draw(){
  
}

function movimentoBoloinha(){
  circle(xBolinha,yBolinha,diametro);
  
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
    if(xBolinha + raio > width || xBolinha-raio < 0){
       velocidadeXBOlinha *= -1;
    }
    if(yBolinha + raio > height || yBolinhya - raio < 0){
       velocidadeYBolinha *= -1}}

function requete(xRaquete , yRaquete){
    rect(xRaquete,yRaquete,10,90)
  
}