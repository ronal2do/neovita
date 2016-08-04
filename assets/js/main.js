var translationsEN = {
  HEADLINE: 'The first exporting company in Brazil ',
  HEADLINE2: 'with a focus on organic products',
  INSTITUCIONAL:'Institutional',
  INSTITUCIONALPARA:'Having been involved in the agribusiness sector since 2000, NeoVita Foods is an integrated company through farming, processing and export partnerships of organic and non organic products for food and cosmetic market. ',
  INSTITUCIONALPARASEG:'It is the first brazilian trading company focused mainly on organics products and in compliance with international certification, with high quality approach and technical know-how is the reason why NeoVita Foods is a realiable partner.',
  EMPRESA:'Company',
  EMPRESAPARA:'The Neovita Foods operates in an integrated form from farm until the factory . We operate in the agricultural market, seeking to add value to fruits, vegetables and nuts through own production or partnership with small farmers and cooperatives.',
  EMPRESAPARASEG:'We aim to strengthen all of the chain links, bringing new opportunities for the communities where we operate and valuing always the high standard of quality and services.',
  PRODUTOS:'Products',
  CONTATO:'Contact',
  PRINCIPIOS:'Principles',
  MISSAO:'Mission',
  MISSAOFRASE:'Promote the improvement of the welfare of the people through different natural products , supporting fair trade and supporting local communities.',
  VISAO:'Vision',
  VISAOFRASE:'To be a reference in the added value of natural products promoting social and environmental balance in the community where we operate .',
  VALORES:'Values',
  VALORES2:'Balance',
  VALORES3:'Customer Focus',
  VALORES4:'Continuous improvement',
  NOME:'Name',
  EMAIL:'Email',
  MENSAGEM:'Message',  
  SEND:'Send',
  COPYRIGHT:'© 2016 NEOVITA FOODS. ALL RIGHTS RESERVED.'
};
 
var translationsBR= {
  HEADLINE: 'A primeira empresa exportadora do Brasil',
  HEADLINE2: ' foco em produtos orgânicos',
  INSTITUCIONAL:'Institucional',
  INSTITUCIONALPARA:'Envolvida no mundo do agronegócio desde 2000, a NeoVita Foods construiu uma vasta e integrada cadeia de suprimentos da fazenda, processamento até a exportação de produtos orgânicos e não-orgânicos para o mercado alimentício e de cosmético. ',
  INSTITUCIONALPARASEG:'É a primeira empresa exportadora do Brasil com foco em produtos orgânicos com alto padrão de qualidade de serviços e produtos, além do atendimento das mais exigentes normas e certificações internacionais. A NeoVita Foods é o parceiro ideal para seus negócios.',
  EMPRESA:'Empresa',
  EMPRESAPARA:'A Neovita Foods atua de forma integrada do campo a fabrica. Atuamos no mercado agrícola, buscando agregar valor de frutas, vegetais e castanhas por meio de produção própria ou parceria com pequenos agricultores e cooperativas.',
  EMPRESAPARASEG:'Visamos fortalecer todos os laços da cadeia, trazendo novas oportunidades para as comunidades que estamos inseridos e prezando sempre, pelo alto padrão de qualidade e serviço.',
  PRODUTOS:'Produtos',
  CONTATO:'Contato',
  PRINCIPIOS:'Princípios',
  MISSAO:'Missão',
  MISSAOFRASE:'Promover a melhoria do bem estar das pessoas por meio de produtos naturais diferenciados, apoiando o comércio justo e suportando as comunidades locais.',
  VISAO:'Visão',
  VISAOFRASE:'Ser referência na agregação de valor de produtos naturais promovendo equilíbrio social e ambiental na comunidade que estamos inseridos.',
  VALORES:'Valores',
  VALORES2:'Equilíbrio Social e Ambiental',
  VALORES3:'Foco no cliente ',
  VALORES4:'Melhoria contínua',
  NOME:'Nome',
  EMAIL:'E-mail',
  MENSAGEM:'Mensagem',  
  SEND:'Enviar',
  COPYRIGHT:'© 2016 NEOVITA FOODS. TODOS OS DIREITOS RESERVADOS.'
};
 
var app = angular.module('myApp', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('br', translationsBR);
  $translateProvider.translations('en', translationsEN);
  $translateProvider.preferredLanguage('br');
  $translateProvider.fallbackLanguage('br');
}]);
 
app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

}]);