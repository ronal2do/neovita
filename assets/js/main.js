var translationsEN = {
  HEADLINE: 'The first brazilian trading company',
  HEADLINE2: 'focused mainly on organic products',
  INSTITUCIONAL:'Institutional',
  INSTITUCIONALPARA:'Having been involved in the agribusiness sector since 2000, NeoVita Foods is an integrated company through farming, processing and export partnerships of organic and non organic products for food and cosmetic market. ',
  INSTITUCIONALPARASEG:'It is the first brazilian trading company focused mainly on organics products and in compliance with international certification, with high quality approach and technical know-how is the reason why NeoVita Foods is a realiable partner.',
  INSTITUCIONALPARATER:'Our philosophy is help people to eat better for living better. We want all to have access to food that is healthy, natural and with differentiated nutritional aspects. We want to integrate all chains in the supply network, in a sustainable way, through a fair trade approach. ',
  EMPRESA:'Company',
  EMPRESAPARA:'The Neovita Foods operates in an integrated form from farm to industry. We operate in the agricultural market, seeking to add value to fruits, vegetables and nuts through own production or partnership with small farmers and cooperatives.',
  EMPRESAPARASEG:'We aim to strengthen all of the chain links, bringing new opportunities for the communities where we operate and valuing always the high quality standard of products and services.',
  PRODUTOS:'Products',
  CONTATO:'Contact',
  PRINCIPIOS:'Principles',
  MISSAO:'Mission',
  MISSAOFRASE:'Promote the improvement of the welfare of the people through different natural products , supporting fair trade and supporting local communities.',
  VISAO:'Vision',
  VISAOFRASE:'To be a reference in the added value of natural products promoting social and environmental balance in the community where we operate .',
  VALORES:'Values',
  VALORES2:'Social and Enviromental Balance',
  VALORES3:'Customer Focus',
  VALORES4:'Continuous improvement',
  VALORES5:'Ethics',
  NOME:'Name',
  EMAIL:'Email',
  MENSAGEM:'Message',  
  SEND:'Send',
  BUSCAR:'Search...',
  COPYRIGHT:'© 2016 NEOVITA FOODS. ALL RIGHTS RESERVED.'
};
 
var translationsBR= {
  HEADLINE: 'Primeira exportadora brasileira',
  HEADLINE2: 'com foco em produtos orgânicos',
  INSTITUCIONAL:'Institucional',
  INSTITUCIONALPARA:'Envolvida no mundo do agronegócio desde 2000, a NeoVita Foods construiu uma vasta e integrada cadeia de suprimentos da fazenda, processamento até a exportação de produtos orgânicos e não-orgânicos para o mercado alimentício e de cosmético. ',
  INSTITUCIONALPARASEG:'É a primeira empresa exportadora do Brasil com foco em produtos orgânicos com alto padrão de qualidade de serviços e produtos, além do atendimento das mais exigentes normas e certificações internacionais. A NeoVita Foods é o parceiro ideal para seus negócios.',
  INSTITUCIONALPARATER:'A filosofia da Neovita é fazer as pessoas comerem melhor para viverem melhor. Queremos que todos tenham acesso a alimentos saudáveis, naturais e com valores nutricionais diferenciados. Buscamos integrar todos os elos da cadeia produtiva de maneira sustentável e promovendo o comércio justo.',
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
  VALORES5:'Ética',
  NOME:'Nome',
  EMAIL:'E-mail',
  MENSAGEM:'Mensagem',  
  SEND:'Enviar',
  BUSCAR:'Buscar...',
  COPYRIGHT:'© 2016 NEOVITA FOODS. TODOS OS DIREITOS RESERVADOS.'
};
 
var app = angular.module('myApp', ['pascalprecht.translate' ]);

app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('br', translationsBR);
  $translateProvider.translations('en', translationsEN);
  $translateProvider.preferredLanguage('br');
  $translateProvider.fallbackLanguage('br');
}]);
 
app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope, $http) {
 
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };

  var json ={
    "produtos":
      [              {
                "nome": "Acerola",
                "name": "Acerola",
                "index": "A",
                "tipo": "Orgânicos"
              },  
              {
                "nome": "Banana",
                "name": "Banana",
                "index": "B",
                "tipo": "Orgânicos"
              },
              {
                "nome":"Caju  ",
                "name":"Cashew",
                "index":"C",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Goiaba  ",
                "name":"Gava",
                "index":"G",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Manga ",
                "name":"Mango",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Melao ",
                "name":"Melon",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Mamao ",
                "name":"Papaya",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Melância  ",
                "name":"watermelon",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Marácuja  ",
                "name":"Passion fruit",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Abacaxi ",
                "name":"Pineapple",
                "index":"A",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Sapoti  ",
                "name":"Sapoti",
                "index":"S",
                "tipo":"Orgânicos"
              },
              {
                 "nome" : " Polpa de Açai com Guaraná",
                 "name":"Açai pulp with guaraná",
                 "index":"A",
                 "tipo":"Orgânicos"
              },
              {
                 "nome" : " Polpa de Açai com Makai",
                 "name":"Açai pulp with makai",
                 "index":"A",
                 "tipo":"Orgânicos"
             },
              {
                  "nome" : "Polpa de Açai Puro",
                  "name":"Açai pulp",
                  "index":"A",
                  "tipo":"Orgânicos"
              },
              {
                  "nome" : "Polpa de Açai Puro com cítrico",
                  "name":"Açai pulp with citric acid",
                  "index":"A",
                  "tipo":"Orgânicos"
              },
              {
                  "nome" : "Suco de laranja integral",
                  "name":"Orange juice",
                  "index":"L",
                  "tipo":"Orgânicos"
              },
              {
                "nome" : "Suco de laranja concentrado",
                 "name":"Orange juice concentraded",
                 "index":"L",
                 "tipo":"Orgânicos"
             },
              {
                "nome" : "Laranja",
                 "name":"Orange",
                 "index":"L",
                 "tipo":"Orgânicos"
             },
              {
                 "nome" : "Açucar ",
                 "name":"Sugar cane",
                 "index":"A",
                 "tipo":"Orgânicos"
             },
              {
                 "nome" : "Polpa de goiaba",
                 "name":"Gava pulp",
                 "index":"G",
                 "tipo":"Orgânicos"
             },
              {
                "nome" : "Polpa de manga",
                "name":"Mango pulp",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Suco de limão integral  ",
                "name":"Lemon juice",
                "index":"L",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Côco  ",
                "name":"Coconut",
                "index":"C",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Café em graos ",
                "name":"Coffee beans",
                "index":"C",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Café torrado e moido  ",
                "name":"Coffee beans toasted and ground",
                "index":"C",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Polpa de cupuaçu  ",
                "name":"Cupuaçu pulp",
                "index":"C",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Manteiga de cupuaçu ",
                "name":"Cupuaçu butter",
                "index":"C",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Palmito em conserva ",
                "name":"Palm heart(canned)",
                "index":"P",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Palmito pupunha ",
                "name":"Palm heart",
                "index":"P",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Amendoim  ",
                "name":"Peanut",
                "index":"A",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Mandioca  ",
                "name":"Cassava",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Castanha do brasil ",
                 "name":"Brazil nut",
                 "index":"C",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Polpa de acerola ",
                 "name":"Acerola pulp",
                 "index":"A",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Polpa de acerola concentrada ",
                 "name":"Acerola pulp concentrated",
                 "index":"A",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Polpa de goiaba concentrada ",
                "name":"Gava pulp concentrated",
                "index":"G",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Óleo essencial de limão",
                 "name":"Lemon essential oil",
                 "index":"L",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Óleo essencial de mandarina ",
                "name":"Mandarim essential oil",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Óleo essencial de laranja",
                 "name":"Orange essential oil",
                 "index":"L",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Suco concentrado de limão ",
                "name":"Lemon juice concentrated",
                "index":"L",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Suco de mandarina integral ",
                 "name":"Mandarim juice",
                 "index":"M",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Suco de mandarina concentrado ",
                "name":"Mandarim juice concentrated",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Polpa de manga concentrado ",
                 "name":"Mango pulp concentrated",
                 "index":"M",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Suco de maracuja concentrado ",
                 "name":"Passion fruit pulp concentrated",
                 "index":"M",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Guaraná em grao  ",
                 "name":"Guaraná beans",
                 "index":"G",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Guaraná em po ",
                "name":"Guaraná in powder",
                "index":"G",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Mel ",
                "name":"Organic raw honey",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Polpa de abacaxi ",
                 "name":"Pineapple pulp",
                 "index":"P",
                 "tipo":"Orgânicos"
              },
              {
                "nome":"Polpa de maracuja ",
                "name":"Passion fruit pulp",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Banana com açai Liofilizado ",
                "name":"Banana with açai, freeze dried",
                "index":"B",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Banana com canela Liofilizado ",
                "name":"Banana with cinamon, freeze dried",
                "index":"B",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Banana com goiaba Liofilizado ",
                "name":"Banana with guava, freeze dried",
                "index":"B",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Banana Liofilizado  ",
                "name":"Banana freeze dried",
                "index":"B",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Acerola Liofilizado ",
                "name":"Acerola, freeze dried",
                "index":"A",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Banana com acerola Liofilizado  ",
                "name":"Banana with acerola freeze dried",
                "index":"B",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Goiaba Liofilizado  ",
                "name":"Guava freeze dried",
                "index":"G",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Limão Liofilizado ",
                "name":"Lemon freeze dried",
                "index":"L",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Manga Liofilizado ",
                "name":"Mango freeze dried",
                "index":"M",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Açai em po",
                "name":"Açai in powder",
                "index":"A",
                "tipo":"Orgânicos"
              },
              {
                "nome":"Polpa de Açai Puro  ",
                "name":"Açai pulp",
                "index":"A",
                "tipo":"Não orgânicos"
              },
              {
                "nome":"Polpa de Açai Puro com cítrico",
                "name":"Açai pulp with citric acid",
                "index":"A",
                "tipo":"Não orgânicos"
              },
              {
                "nome":"Suco de laranja integral  ",
                "name":"Orange juice",
                "index":"L",
                "tipo":"Não orgânicos"
              },
              {
                "nome":"Suco de laranja concentrado ",
                "name":"Orange juice concentraded",
                "index":"L",
                "tipo":"Não orgânicos"
              },
              {
                "nome":"Castanha do brasil  ",
                "name":"Brazil nut",
                "index":"C",
                "tipo":"Não orgânicos"
              },
              {
                "nome":"Açai em pó  ",
                "name":"Açai in powder",
                "index":"A",
                "tipo":"Não orgânicos"
              },
              {
                "nome":"Polpa de acerola  ",
                "name":"Acerola pulp",
                "index":"A",
                "tipo":"Não orgânicos"
              },
              {
                "nome":"Polpa de acerola concentrada  ",
                "name":"Acerola pulp concentrated",
                "index":"A",
                "tipo":"Não orgânicos"
              },
              {
                "nome":"Polpa de abacaxi concentrada",
                "name":"Pineapple pulp concentraded",
                "index":"A",
                "tipo":"Não orgânicos"
              },
              {
                "nome":"Óleo essencial de citronela ",
                "name":"Citronela essential oil",
                "index":"C",
                "tipo":"Não orgânicos"
              }
      ]
  };
    
    
    $scope.lista = json;

}]);







