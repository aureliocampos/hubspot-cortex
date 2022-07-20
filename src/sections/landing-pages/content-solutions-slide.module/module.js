const allContentTitles = Array.from(document.querySelectorAll('.content__item-title'));

// Palavras em destaque (Português)
const keywordsPT = [
  "busca",
  "canais",
  "controle",
  "crises",
  "identificação",
  "investimentos",
  "mensuração",
  "mídias",
  "enriquecimento",
  "nichos",
  "performance",
  "previsibilidade",
  "propensão",
  "retorno",
  "gestão",
  "tempo",
  "real",
  "alinhados",
  "estratégico",
  "próprio",
  "comparação",
  "pagos",
  "prospecção",
  "análise",
  "carteira",
  "exposição", // Atualizção 12/07/22 Comunicação estrátegica e marketing
  "quantitativos",
  "reputação",
  "exposição",
  "ações",
  "eventos",
  "comunicação",
  "tendências",
  "bolhas"
]
const prepositionsPT = ['a', 'e', 'o', 'da', 'das', 'de', 'do', 'dos', 
'com', 'em', '&', 'na'];

// Palavras em destaque (Inglês)
const keywordsEN = [
  'real',
  'time',
  'strategic',
  'pillar',
  'return',
  'aligned',
  'comparison',
  'monitoring',
  'paid',
  'owned',
  'media',
  'market',
  'identification',
  'contacts',
  'crm',
  'buying',
  'revenue',
  'performance'
]
const prepositionsEN = [
  'in',
  'and',
  'by',
  'on',
  'with',
  'of',
];

// Verificar se o conteúdo está traduzido para o inglês
const isEnglish = window.document.firstElementChild.lang === 'en'


let prepositions = isEnglish ? prepositionsEN : prepositionsPT;
let keywords = isEnglish ? keywordsEN : keywordsPT;

function cleanStringPart(item) {
  return String(item.textContent).toLowerCase().replace(/,\s*$/, "");
}

allContentTitles.forEach( title => {
  const allTitlesDividedIntoParts = Array.from(title.children)

  allTitlesDividedIntoParts.forEach((part, index) => {
    let stringPart = cleanStringPart(part)

    if (prepositions.includes(stringPart)) {
      return part.classList.add('brand-color-light')
    }

    if (keywords.includes(stringPart)) {
      return part.classList.add('brand-color-official')
    }
  })
  
});

const swiperContent = new Swiper('.swiper-content__items', {
  loop: true,
  lazy: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 100,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});
