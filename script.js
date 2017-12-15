LoremIpsum.WORDS = [
  'Se é pra entrar no jogo, vai all-in.',
  'É você quem decide se o seu dia vai ser incrível ou não. ',
  'Não perde tempo com bullshit.',
  'Busque o next level.',
  'Bora pra action.',
  'Não adianta ter conhecimento se você não tem action.',
  'Desafie-se.',
  'Encare problemas como oportunidades.',
  'Transforme o seu lifestyle.',
  'Trabalho é aprendizado, tudo é um só, onelife.',
  'Quebre padrões e atinja a alta performance em todas as áreas da sua vida.',
  'Never f*ing give up.',
  'Walk the f*ing talk.',
  'Se você não tá no jogo do longo prazo, então seu futuro é estar fora do jogo.',
  'Menos desculpas e mais action.',
  'Construa algo que seja top.',
  'Genialidade é fruto de muito hardwork.',
  'A vida acontece de você e não pra você.',
  'Pra chegar ao next level você precisa de comprometimento e muito hardwork.',
  'Se você não vê a oportunidade, ela passa.',
  'Você tá realmente obcecado pelos seus sonhos?',
  'Ninguém lembra do médio, foque no excelente.',
  'O inconformismo é o combustível da alta performance.',
  'Você nunca vai estar pronto então comece agora.',
  'O segredo do sucesso é começar antes de estar pronto.',
  'Viva em busca da masterização e do profissionalismo, every f*ing day.',
  'Felicidade é a nova produtividade.',
];

LoremIpsum.prototype.punctuate = function(sentence) { return sentence; }

var loremIpsum = new LoremIpsum();
var amount = document.getElementById('amount');
var output = document.getElementById('output');

document.getElementById('generate').addEventListener('click', function() {
  var text = loremIpsum.generate(amount.value);
  output.textContent = text;
});
