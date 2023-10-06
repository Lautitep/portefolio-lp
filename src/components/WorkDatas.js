import tilli from '../assets/Tilli.jpg';
import tilliMockup from '../assets/tilli.mockup.png';
import tilli1 from '../assets/Tilli.home.jpg';
import tilli2 from '../assets/Tilli.couture.jpg';
import tilli3 from '../assets/Tilli.tilliste.jpg';
import kasaMockup from '../assets/kasa.mockup.png';
import kasa from '../assets/Kasa.jpg';
import kasa1 from '../assets/Kasa.home.jpg';
import kasa2 from '../assets/Kasa.room.jpg';
import booki from '../assets/booki.jpg';
import booki1 from '../assets/booki.home.jpg';
import booki2 from '../assets/booki.mobile.jpg';
import retail from '../assets/retail.jpg';

export const workDatas = [
  {
    image: tilli,
    title: 'Tilli • Full-stack',
    text: 'Dans le cadre de mon alternance chez Tilli j’ai contribué au développement front-end du site tilli.fr en React et également du back-end avec NodeJS sur l’API.',
    techno: ['React', 'NodeJS', 'Typescript', 'Styled Component'],
    mockup: tilliMockup,
    pages: [tilli1, tilli2, tilli3],
  },
  {
    image: kasa,
    title: 'Kasa • Front-end',
    text: 'Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end. Développement du front d’un site de location d’hébergement avec React. Création de composants React et gestion des états.',
    techno: ['React', 'HTML', 'CSS'],
    mockup: kasaMockup,
    pages: [kasa1, kasa2],
  },
  {
    image: booki,
    title: 'Booki • Front-end',
    text: 'Projet réalisé dans le cadre de ma formation OpenClassrooms de développeuse front-end. Développement du front-end du site de location d’hébergements Booki.',
    techno: ['HTML', 'CSS'],
    mockup: null,
    pages: [booki1, booki2],
  },
  {
    image: retail,
    title: 'Tilli Retail • Full-stack',
    text: 'Dans le cadre de mon alternance chez Tilli j’ai contribué au développement front-end de l‘application retail (utilisée en boutique) en React et également du back-end avec NodeJS sur l’API.',
    techno: ['React', 'CSS'],
    mockup: null,
    pages: [retail, null],
  },
]
