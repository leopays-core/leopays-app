const sources = {
  en: source_en(),
  ru: source_ru(),
};

export default function getSource(lng) {
  return sources[lng] || sources['en'];
}


function source_en() {
  return (`**Use of Cookies**
`);
}

function source_ru() {
  return (`**Использование Cookies**
`);
};
