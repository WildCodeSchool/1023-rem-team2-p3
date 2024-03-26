const questions = [
  {
    id: 1,
    question:
      "Faut-il fournir des documents spécifiques le jour où l’on se présente à l’événement ? ",
    answer:
      "Une carte d’identité et un certificat médical seront requis pour participer à l’événement.",
  },
  {
    id: 2,
    question: "Quel est le nombre de participants maximum ?",
    answer: "Le nombre de participants maximum est de 50 personnes. ",
  },
  {
    id: 3,
    question: "Est-ce que je peux annuler ma participation ?",
    answer:
      "Oui, vous pouvez annuler votre participation jusqu’à 24 heures avant l’événement. ",
  },
  {
    id: 4,
    question:
      "Est-ce que je peux me faire rembourser si je ne peux pas participer à l’événement ?",
    answer:
      "Oui, vous pouvez vous faire rembourser jusqu’à 24 heures avant l’événement. ",
  },
  {
    id: 5,
    question: "Est-ce que je peux participer à plusieurs ateliers ?",
    answer: "Oui, vous pouvez participer à plusieurs ateliers. ",
  },
  {
    id: 6,
    question: "Est-ce que je peux participer à un atelier sans être inscrit ?",
    answer: "Non, vous devez être inscrit pour participer à un atelier. ",
  },
];

const parcours = [
  {
    id: 1,
    title: "Inscription",
    description: "Inscris toi à l'évènement dans ta ville",
  },

  {
    id: 2,
    title: "Performance",
    description: "Montre tout ton talent lors de la journée test",
  },
  {
    id: 3,
    title: "Data",
    description: "Notre application collecte tes résultats et te note",
  },
  {
    id: 4,
    title: "Evalution",
    description:
      "Notre logiciel te noteras en fonction des autres participants",
  },
  {
    id: 5,
    title: "Récompense",
    description:
      "Repars avec ta ScoreCard ainsi qu’une paire de crampons personnalisée",
  },
  {
    id: 6,
    title: "Bonus",
    description:
      "Jeux concours exceptionnel, et tente de vivre une aventure exceptionnelle",
  },
];

export default { parcours, questions };
