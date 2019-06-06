import { Post } from './annuncio';

export const Posts: Post[] = [
  { nome: 'Chiodo',
    tipo: 'Ferramenta',
    prezzo: 2,
    descrizione: 'Bel chiodo di ferro per appendere, o per farci quello che vi pare',
    username: 'paolo.paoli',
    data: '14:00 - 25/04/2019',

  },
  { nome:'Test Voight-Kampff',
    tipo: 'Tecnologia',
    prezzo: 99,
    descrizione: 'Test per scoprire se il tuo amico è un replicante',
    username: 'RDeckard',
    data: '22:54 - 12/12/2019',
  },

  { nome: 'Tappeto',
    tipo:'Arredamento',
    prezzo: 42,
    descrizione: "Bel tappeto che dà un tono all' ambiente",
    username: 'drugo',
    data: '08:21 - 13/11/2019',
  }
];
