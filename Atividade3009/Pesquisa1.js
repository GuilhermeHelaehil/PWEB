


var teste = 3

var q = {
    Idade: Number,
    Genero: String,
    Opiniao: Number
}
var qs = [];

var MediaIdade;

var PVelha = {
    Idade: 0,
    Genero: null,
    Opiniao: null,
};

var PNova = {
    Idade: Infinity,
    Genero: null,
    Opiniao: null,
};

var qtd1 = 0;
var por34 = 0;
var qtdH = 0;
var qtdM = 0;


for(var i = 1; i <= teste; i++){
    Idade = parseInt(prompt("Pessoa: " + i + "\nDigite a sua idade"));
    Genero = prompt("Pessoa: " + i + "\nDigite o seu genero");
    Opiniao = parseInt(prompt("Pessoa: " + i + "\nDigite a sua nota de 1 a 4"));
    qs.push({Idade,Genero,Opiniao});
}
console.log(qs);
var idades = 0;

qs.forEach(o => {
    idades += o.Idade;
    PVelha = o.Idade >= PVelha.Idade ? o : PVelha;
    PNova = o.Idade <= PNova.Idade ? o : PNova;
    qtd1 += o.Opiniao == 1 ? 1 : 0;
    por34 += o.Opiniao == 3 || o.Opiniao == 4 ? 1 : 0;

    if(o.Genero == 'M' || o.Genero == 'm')
    {
        qtdM++;
    }
    else if(o.Genero == 'H' || o.Genero == 'h')
    {
        qtdH++;
    }
});
idades = idades / qs.length;
por34 = (por34 / qs.length) * 100;

alert(
    "A média da idade das pessoas é: " + idades + "\n" +
    "A pessoa mais velha tem " + PVelha.Idade + " anos\n" +
    "A pessoa mais nova tem " + PNova.Idade + " anos\n" +
    "A quantidade de pessoas que responderam péssimo é: " + qtd1 + "\n" +
    "A porcentagem de pessoas que responderam ótimo ou bom é: " + por34 + "%\n" +
    "A quantidade de pessoas que são mulheres é: " + qtdM + "\n" +
    "A quantidade de pessoas que são homens é: " + qtdH + "\n")
