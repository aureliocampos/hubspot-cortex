const allContentTitles = Array.from(document.querySelectorAll('.content__item-title'));

let prepositions = ['a', 'e', 'o', 'da', 'das', 'de', 'do', 'dos', 
'com', 'em', '&'];

let keywords = [
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
  "monitoramento",
  "gestão",
  "tempo",
  "real",
  "alinhados",
  "estratégico",
  "próprio",
  "comparação",
  "pagos"
]

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

