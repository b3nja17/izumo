// Add a confirmed public contact email here to show the contact button.
const CONTACT_EMAIL = 'hello@getizumo.com';
const translations = {
  en: { title: 'Izumo — The quality of Japan, closer to home.', description: 'Helping America experience the quality of Japan. Izumo is building connections between Japanese food producers and the United States.' },
  ja: { title: 'Izumo — 日本の上質を、アメリカの日常へ。', description: '食を通じて、日本の上質とその背景にある文化をアメリカへ。Izumoは日本のつくり手とアメリカをつなぎます。' }
};
function setLanguage(language) {
  const lang = language === 'ja' ? 'ja' : 'en';
  document.documentElement.lang = lang;
  document.title = translations[lang].title;
  document.querySelector('meta[name="description"]').content = translations[lang].description;
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === lang)));
  document.querySelectorAll('[data-alt-en]').forEach(image => image.alt = lang === 'ja' ? image.dataset.altJa : image.dataset.altEn);
  try { localStorage.setItem('izumo-language', lang); } catch { /* Language switching also works without storage. */ }
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
let savedLanguage;
try { savedLanguage = localStorage.getItem('izumo-language'); } catch { /* Use the browser preference. */ }
setLanguage(savedLanguage || (navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en'));
document.querySelector('#year').textContent = new Date().getFullYear();
if (CONTACT_EMAIL) {
  const link = document.querySelector('#contact-link');
  link.href = `mailto:${CONTACT_EMAIL}`;
  link.hidden = false;
}
