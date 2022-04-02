// Exercício:
// Um nutricionista enviou a seguinte tabela com os dados de seus clientes e, você será responsável por calcular o Índice de Massa Corporal de cada registro:

/*
NOME

José
Carlos
Aline
Ana

SOBRENOME

da Silva
de Souza
Ferreira
Paula

IDADE

27
28
33
26

PESO (KG)

83.5
80.1
63.7
55.0

ALTURA

1.70
1.76
1.53
1.62

PLANO

Ouro
Diamante
Não Possuí
Prata

*/

// Quais são as variáveis? Quais são as constantes? De que tipo são? Qual variável poderia armazenar o valor null segundo estes dados?

// O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura2  (a altura deve estar em metros e o peso em quilogramas). Por exemplo, no caso de Carlos de Souza, a altura ao quadrado é 3,09. 

// Você deverá criar 6 variáveis:
// - Nome
// - Idade
// - Peso
// - Altura
// - Plano (só nos interessa saber se TEM ou NÃO TEM)
// - Índice de Massa Corporal (IMC)

// José da Silva
const nome = "José";
const sobrenome = "da Silva";
let peso = 83.5;
let altura = 1.70;
let plano = true;
let imcJose = peso / (altura * altura);

console.log(`IMC José: ${imcJose}`);
