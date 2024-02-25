export default {
  hero: {
    title: "Salut, je suis",
    subtitle: "Développeur de logiciels.",
    wave_alt: "Main qui salue",
    scroll: "défile",
  },
  about: {
    title: "À propos de moi 😺",
    p1: "Je suis Sacha, un étudiant de premier cycle en Génie Logiciel à l'Université d'Ottawa 🎓, au Canada. 🇨🇦",
    p2: "Je souhaite poursuivre une carrière en développement AR/VR 🥽, et j'adore utiliser mon travail en logiciel pour aider les autres. 🌱",
    p3: "Connectez-vous avec moi sur les réseaux sociaux 📱, j'adore parler de développement web, de réalité virtuelle, ou de n'importe quelle autre technologie! 💻",
  },
  work: {
    title: "Expérience 🚀",
    subtitle:
      "Voici quelques-unes des entreprises pour lesquelles j'ai travaillé!",
    content: [
      {
        title: "Ciena",
        description: "Ingénieur Logiciel",
        website: "https://www.ciena.com/",
        tags: ["React", "C", "Python", "Jenkins"],
        img: "ciena",
        show_border_passive: false,
      },
      {
        title: "Propel VR",
        description: "Ingénieur Logiciel VR",
        website: "https://propelvr.ca/",
        tags: ["VR", "Unity", "C#", "Blender"],
        img: "propel",
        show_border_passive: false,
      },
      {
        title: "Synchroteam",
        description: "Ingénieur Logiciel",
        website: "https://www.synchroteam.com/",
        tags: ["Flutter", "Dart"],
        img: "synchroteam",
        show_border_passive: true,
      },
    ],
  },
  projects: {
    title: "Projets 🛠️",
    subtitle: "Voici quelques-uns des projets sur lesquels j'ai travaillé!",
    content: [
      {
        title: "Vr Viz",
        description:
          "Application de réalité virtuelle mettant en évidence les tendances des données Open-source.",
        github: "https://github.com/xsachax/vr_viz-conuhacks-2024",
        devpost: "https://devpost.com/software/vr-viz-f4jmy1",
        tags: ["VR", "Unity", "C#"],
        img: "vr_viz",
        show_border_passive: false,
      },
      {
        title: "Hack The Hill 2024",
        description: "Page d'accueil pour le hackathon Hack The Hill 2024",
        website: "https://2024.hackthehill.com/",
        tags: ["React", "Astro", "CSS"],
        img: "hth_2024",
        show_border_passive: true,
      },
      {
        title: "Dot Deck",
        description:
          "Application web de visualisation de données pour des informations sur le trading d'actions.",
        github: "https://github.com/xsachax/dot-deck_conuhacks-2023",
        devpost: "https://devpost.com/software/dot-deck",
        tags: ["Python", "Plotly", "Pandas"],
        img: "dot_deck",
        show_border_passive: true,
      },
      {
        title: "Read-me",
        description:
          "Application de reconnaissance de texte pour les résultats de tests accessibles.",
        github: "https://github.com/xsachax/accessible-test-results",
        website: "https://read-me.app",
        tags: ["Javascript", "Tensorflow", "OpenCV"],
        img: "read_me",
        show_border_passive: true,
      },
      {
        title: "FAANG Slayer",
        description:
          "Application d'entraînement aux entretiens VR pour les entreprises FAANG.",
        github: "https://github.com/xsachax/faang-slayer_mchacks-2024",
        devpost: "https://devpost.com/software/faang-slayer",
        tags: ["VR", "Unity", "AI"],
        img: "faang_slayer",
        show_border_passive: false,
      },
      {
        title: "Hungry.ai",
        description:
          "Outil de recommandation de nourriture alimenté par l'AI et l'apprentissage automatique.",
        github: "https://github.com/xsachax/waffle-hacks-2023",
        devpost: "https://devpost.com/software/hungry-ai",
        tags: ["React", "Tensorflow", "AI"],
        img: "hungry_ai",
        show_border_passive: false,
      },
      {
        title: "Kelpie Robotics",
        description: "Front-end VR pour contrôler un ROV.",
        website: "https://kelpierobotics.com/",
        tags: ["VR", "Unity", "C#"],
        img: "kelpie",
        show_border_passive: true,
      },
      {
        title: "Hack The Hill 2023",
        description: "Page d'accueil pour le hackathon Hack The Hill 2023.",
        website: "https://2023.hackthehill.com/",
        tags: ["React", "Astro", "CSS"],
        img: "hth_2023",
        show_border_passive: true,
      },
      {
        title: "Feather Fox",
        description: "Jeu de plateforme 2D pour mobile.",
        github: "https://github.com/xsachax/feather-fox",
        website: "https://play.unity.com/mg/other/webgl-builds-147147",
        tags: ["Unity", "C#"],
        img: "feather_fox",
        show_border_passive: false,
      },
    ],
  },
  footer: {
    title: "Développé avec ❤️ par Sacha Arseneault",
  },
  fourofour: {
    title: "404",
    p1: "Comment êtes-vous arrivé ici? 🤔",
    button_text: "Retourner à l'accueil",
  },
} as const;
