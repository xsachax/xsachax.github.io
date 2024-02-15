export default {
  hero: {
    title: "Hey, I'm Sacha 👋",
    subtitle: "Software Developer.",
    linkedin_alt: "LinkedIn",
    github_alt: "GitHub",
    devpost_alt: "Devpost",
    email_alt: "Email",
  },
  about: {
    title: "About me",
    p1: "I'm Sacha, a Software Engineering undergraduate student at the University of Ottawa 🎓, in Canada. 🇨🇦",
    p2: "I aspire to pursue a career in AR/VR development 🥽, and I'm looking for opportunities to create positive change 🌱 with the software I write!",
    p3: "Feel free to connect with me on socials 📱, I'd love to talk about web development, virtual reality, or anything tech related! 💻",
  },
  projects: {
    title: "Projects",
    subtitle: "Here are some of the projects I've worked on!",
    content: [
      {
        title: "Vr Viz",
        description:
          "Virtual Reality app highlighting trends in Open-source Data.",
        github: "https://github.com/xsachax/vr_viz-conuhacks-2024",
        devpost: "https://devpost.com/software/vr-viz-f4jmy1",
        tags: ["VR", "Unity", "C#"],
        img: "vr_viz",
      },
      {
        title: "Hack The Hill 2024",
        description: "Landing Page for Hack The Hill 2024 Hackathon.",
        website: "https://2024.hackthehill.com/",
        tags: ["React", "Astro", "CSS"],
        img: "hth_2024",
      },
      {
        title: "Dot Deck",
        description: "Data Visualization web-app for Stock Trading Insight.",
        github: "https://github.com/xsachax/dot-deck_conuhacks-2023",
        devpost: "https://devpost.com/software/dot-deck",
        tags: ["Python", "Plotly", "Pandas"],
        img: "dot_deck",
      },
      {
        title: "Hungry.ai",
        description:
          "Food Recommendation Tool powered by AI and Machine Learning.",
        github: "https://github.com/xsachax/waffle-hacks-2023",
        devpost: "https://devpost.com/software/hungry-ai",
        tags: ["React", "Tensorflow", "AI"],
        img: "hungry_ai",
      },
      {
        title: "FAANG Slayer",
        description: "VR interview training app for FAANG companies.",
        github: "https://github.com/xsachax/faang-slayer_mchacks-2024",
        devpost: "https://devpost.com/software/faang-slayer",
        tags: ["VR", "Unity", "AI"],
        img: "faang_slayer",
      },
      {
        title: "Read-me",
        description:
          "Accessible Rapid Test Reading Tool for the Visually Impaired.",
        github: "https://github.com/xsachax/accessible-test-results",
        website: "https://read-me.app",
        tags: ["Javascript", "Tensorflow", "OpenCV"],
        img: "read_me",
      },
      {
        title: "Hack The Hill 2023",
        description: "Landing Page for Hack The Hill 2023 Hackathon.",
        website: "https://2023.hackthehill.com/",
        tags: ["React", "Astro", "CSS"],
        img: "hth_2023",
      },
      {
        title: "Feather Fox",
        description: "2D Endless Platformer Game.",
        github: "https://github.com/xsachax/feather-fox",
        website: "https://play.unity.com/mg/other/webgl-builds-147147",
        tags: ["Unity", "C#"],
        img: "feather_fox",
      },
    ],
  },
  fourofour: {
    title: "404",
    p1: "How did you even get here? 🤔",
    button_text: "Go back home",
  },
} as const;
