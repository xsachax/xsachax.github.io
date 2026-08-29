import { useEffect } from "react";
import { useStore } from "@nanostores/react";
import { locale } from "../../i18n";
import logo from "../../assets/favicon.svg";
import styles from "./Portfolio.module.css";

const resumeUrl =
  "https://drive.google.com/file/d/1Fu5jCkgOxn9AbSwP0CqqcvE69U4PdAbk/view?usp=sharing";

const content = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      experience: "Experience",
      about: "About",
      resume: "Résumé",
      contact: "Contact",
      label: "Primary navigation",
    },
    language: {
      label: "Language",
      switchToEnglish: "Switch to English",
      switchToFrench: "Passer au français",
    },
    hero: {
      eyebrow: "Software engineer",
      title: "Reliable systems. Useful tools.",
      intro:
        "I’m Sacha Arseneault, a Software Engineering student at the University of Ottawa. I build developer tools and production systems across applied AI, mobility, and commerce.",
      recent:
        "Most recently at Microsoft AI, I worked on evaluation infrastructure for autonomous coding agents across products serving 500M+ monthly users.",
      email: "Email me",
      resume: "View résumé",
      details: ["Ottawa, Canada", "BASc · December 2026"],
    },
    projects: {
      title: "Selected projects",
      intro:
        "Tools for understanding complex software and turning good ideas into working products.",
      bingo: {
        meta: "2026 · Developer tools",
        title: "Bingo",
        subtitle: "Concurrency Debugger for Go",
        description:
          "A cross-platform debugger for visualizing goroutines, channels, and synchronization. Bingo includes Linux and macOS backends plus DAP support for IDEs and coding agents.",
        tech: "Go · WebSocket · Ginkgo",
        link: "View on GitHub",
      },
      eco: {
        meta: "2024 · Hack the North sponsor-track winner",
        title: "Eco Rewards",
        subtitle: "Rewards for sustainable actions",
        description:
          "A full-stack rewards app with AI receipt parsing, built at Hack the North. The project won first place in a sponsor track among 842 participants.",
        tech: "Remix · TypeScript · Express.js · PostgreSQL · Auth0",
        link: "View on Devpost",
        source: "GitHub",
      },
    },
    experience: {
      title: "Experience",
      intro:
        "Reliability, evaluation, and developer experience across AI infrastructure, autonomous vehicles, and commerce.",
      entries: [
        {
          company: "Microsoft AI",
          role: "Applied AI/ML Intern, Copilot",
          dates: "June — August 2026",
          location: "Mountain View, CA",
          summary:
            "Evaluation and orchestration infrastructure for autonomous coding-agent fleets.",
          bullets: [
            "Built an evaluation platform profiling 1,000+ pull requests each week across products serving 500M+ monthly users.",
            "Increased KV-cache hit rate by 7% across 300M monthly Anthropic inference calls by fingerprinting prompt volatility.",
            "Resolved prompt staleness behind a 25% reasoning-token regression, averting $1M+/month in projected inference costs.",
            "Built an always-running agent scheduling framework that operated for days without intervention and was demoed to VP-level leadership.",
          ],
        },
        {
          company: "Tesla",
          role: "Software Engineer Intern, Robotaxi",
          dates: "May — August 2025",
          location: "Palo Alto, CA",
          summary:
            "Reliability guardrails and telemetry validation for the June 2025 robotaxi launch.",
          bullets: [
            "Built post-merge canaries that validated the rider journey through emulators and simulated fleets.",
            "Reduced telemetry verification from 15 to 2 minutes across six sources, saving 150 hours/year per engineer with Go, Docker, and Kafka.",
            "Recovered 100% of valid legacy fields with fault-tolerant parsing and conducted live QA across 200+ physical rides.",
          ],
        },
        {
          company: "Shopify",
          role: "Software Engineer Intern, Stores",
          dates: "January — April 2025",
          location: "Ottawa, ON",
          summary:
            "Store-creation reliability for a pipeline handling more than two million requests each year.",
          bullets: [
            "Fixed a 1-in-100 onboarding race condition, protecting 20,000+ stores annually.",
            "Automated recovery across every backend failure state, resolving 100% of stuck requests with Ruby, Rails, GraphQL, and MySQL.",
          ],
        },
      ],
      earlierTitle: "Earlier roles",
      earlier: [
        {
          company: "Motorola Solutions",
          role: "Software Engineer Intern · Emergency Call Handling",
          dates: "September — December 2024",
          location: "Gatineau, QC",
        },
        {
          company: "Ciena",
          role: "Software Engineer Intern · Developer Tools & Experience",
          dates: "January — April 2024",
          location: "Ottawa, ON",
        },
      ],
    },
    profile: {
      title: "About",
      educationLabel: "Education",
      school: "University of Ottawa",
      degree: "BASc Software Engineering, Co-op",
      gpa: "3.9 / 4.0 GPA",
      graduation: "Expected December 2026",
      leadershipLabel: "Leadership",
      leadershipTitle: "IEEE uOttawa Webmaster",
      leadershipDates: "2022 — 2026",
      leadershipBody:
        "Led 10 developers building four open-source apps with 5,000+ visits and 40,000+ monthly impressions, serving 30,000+ engineering students across Eastern Canada.",
      leadershipDetail:
        "Hosted two workshops and three review sessions with 75+ attendees each.",
      skillsLabel: "Skills",
      skillGroups: [
        {
          label: "Languages",
          value: "Go, Python, TypeScript, Java, C++, SQL, Ruby",
        },
        {
          label: "Application",
          value: "React, Next.js, Express, Rails, FastAPI, GraphQL, PyTorch",
        },
        {
          label: "Systems & data",
          value:
            "Docker, Linux, Kafka, Redis, gRPC, Protobuf, Prometheus, Grafana, OpenTelemetry",
        },
      ],
    },
    contact: {
      title: "Contact",
      body:
        "For roles, collaborations, or a conversation about developer tools and reliable systems, send me a note.",
      email: "sacha.arseneault@gmail.com",
      resume: "Résumé",
    },
    footer: "Designed and built by Sacha Arseneault.",
    external: "opens in a new tab",
    skip: "Skip to content",
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      experience: "Expérience",
      about: "À propos",
      resume: "CV",
      contact: "Contact",
      label: "Navigation principale",
    },
    language: {
      label: "Langue",
      switchToEnglish: "Switch to English",
      switchToFrench: "Passer au français",
    },
    hero: {
      eyebrow: "Ingénieur logiciel",
      title: "Des systèmes fiables. Des outils utiles.",
      intro:
        "Je suis Sacha Arseneault, étudiant en génie logiciel à l’Université d’Ottawa. Je développe des outils pour développeurs et des systèmes de production en IA appliquée, mobilité et commerce.",
      recent:
        "Plus récemment chez Microsoft AI, j’ai travaillé sur l’infrastructure d’évaluation d’agents de programmation autonomes pour des produits servant 500 M+ d’utilisateurs mensuels.",
      email: "M’écrire",
      resume: "Voir mon CV",
      details: ["Ottawa, Canada", "B.Sc.A. · Décembre 2026"],
    },
    projects: {
      title: "Projets sélectionnés",
      intro:
        "Des outils pour comprendre les logiciels complexes et transformer de bonnes idées en produits fonctionnels.",
      bingo: {
        meta: "2026 · Outils pour développeurs",
        title: "Bingo",
        subtitle: "Débogueur de concurrence pour Go",
        description:
          "Un débogueur multiplateforme pour visualiser goroutines, canaux et synchronisation. Bingo comprend des backends Linux et macOS ainsi que le protocole DAP pour les IDE et agents de programmation.",
        tech: "Go · WebSocket · Ginkgo",
        link: "Voir sur GitHub",
      },
      eco: {
        meta: "2024 · Gagnant d’une catégorie à Hack the North",
        title: "Eco Rewards",
        subtitle: "Récompenser les gestes durables",
        description:
          "Une application complète de récompenses avec analyse de reçus par IA, créée à Hack the North. Le projet a remporté le premier prix d’une catégorie commanditée parmi 842 participants.",
        tech: "Remix · TypeScript · Express.js · PostgreSQL · Auth0",
        link: "Voir sur Devpost",
        source: "GitHub",
      },
    },
    experience: {
      title: "Expérience",
      intro:
        "Fiabilité, évaluation et expérience développeur en infrastructure IA, véhicules autonomes et commerce.",
      entries: [
        {
          company: "Microsoft AI",
          role: "Stagiaire en IA/ML appliquée, Copilot",
          dates: "Juin — août 2026",
          location: "Mountain View, CA",
          summary:
            "Infrastructure d’évaluation et d’orchestration pour des flottes d’agents de programmation autonomes.",
          bullets: [
            "Création d’une plateforme d’évaluation analysant 1 000+ pull requests par semaine pour des produits servant 500 M+ d’utilisateurs mensuels.",
            "Hausse de 7 % du taux d’utilisation du cache KV sur 300 M d’appels d’inférence Anthropic mensuels en identifiant la volatilité des prompts.",
            "Résolution d’un problème de prompts périmés causant une régression de 25 % des jetons de raisonnement, évitant 1 M$+/mois en coûts projetés.",
            "Création d’un cadre d’ordonnancement d’agents actif pendant plusieurs jours sans intervention et présenté à la haute direction.",
          ],
        },
        {
          company: "Tesla",
          role: "Stagiaire en génie logiciel, Robotaxi",
          dates: "Mai — août 2025",
          location: "Palo Alto, CA",
          summary:
            "Garde-fous de fiabilité et validation télémétrique pour le lancement Robotaxi de juin 2025.",
          bullets: [
            "Création de canaris post-fusion validant le parcours passager sur des émulateurs et des flottes simulées.",
            "Réduction de la validation télémétrique de 15 à 2 minutes sur six sources, économisant 150 heures/an par ingénieur avec Go, Docker et Kafka.",
            "Récupération de 100 % des champs historiques valides avec une analyse tolérante aux erreurs et QA en direct sur 200+ trajets physiques.",
          ],
        },
        {
          company: "Shopify",
          role: "Stagiaire en génie logiciel, Stores",
          dates: "Janvier — avril 2025",
          location: "Ottawa, ON",
          summary:
            "Fiabilité de la création de boutiques pour un pipeline traitant plus de deux millions de requêtes par année.",
          bullets: [
            "Correction d’une condition de concurrence touchant une intégration sur 100, protégeant 20 000+ boutiques par année.",
            "Automatisation de la reprise pour chaque état d’échec backend, résolvant 100 % des requêtes bloquées avec Ruby, Rails, GraphQL et MySQL.",
          ],
        },
      ],
      earlierTitle: "Expériences précédentes",
      earlier: [
        {
          company: "Motorola Solutions",
          role: "Stagiaire en génie logiciel · Traitement d’appels d’urgence",
          dates: "Septembre — décembre 2024",
          location: "Gatineau, QC",
        },
        {
          company: "Ciena",
          role: "Stagiaire en génie logiciel · Outils et expérience développeur",
          dates: "Janvier — avril 2024",
          location: "Ottawa, ON",
        },
      ],
    },
    profile: {
      title: "À propos",
      educationLabel: "Formation",
      school: "Université d’Ottawa",
      degree: "B.Sc.A. en génie logiciel, Co-op",
      gpa: "MPC de 3,9 / 4,0",
      graduation: "Diplôme prévu en décembre 2026",
      leadershipLabel: "Leadership",
      leadershipTitle: "Webmaster, IEEE uOttawa",
      leadershipDates: "2022 — 2026",
      leadershipBody:
        "Direction de 10 développeurs sur quatre applications open source totalisant 5 000+ visites et 40 000+ impressions mensuelles, au service de 30 000+ étudiants en génie de l’Est du Canada.",
      leadershipDetail:
        "Animation de deux ateliers et trois séances de révision réunissant chacune 75+ participants.",
      skillsLabel: "Compétences",
      skillGroups: [
        {
          label: "Langages",
          value: "Go, Python, TypeScript, Java, C++, SQL, Ruby",
        },
        {
          label: "Applications",
          value: "React, Next.js, Express, Rails, FastAPI, GraphQL, PyTorch",
        },
        {
          label: "Systèmes et données",
          value:
            "Docker, Linux, Kafka, Redis, gRPC, Protobuf, Prometheus, Grafana, OpenTelemetry",
        },
      ],
    },
    contact: {
      title: "Contact",
      body:
        "Pour un rôle, une collaboration ou une discussion sur les outils pour développeurs et les systèmes fiables, écrivez-moi.",
      email: "sacha.arseneault@gmail.com",
      resume: "CV",
    },
    footer: "Conçu et développé par Sacha Arseneault.",
    external: "s’ouvre dans un nouvel onglet",
    skip: "Passer au contenu",
  },
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  );
}

function ExternalLink({ href, children, label, className = "" }) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${children} — ${label}`}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionHeader({ title, intro, id }) {
  return (
    <header className={styles.sectionHeader}>
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </header>
  );
}

function Project({ project, links }) {
  return (
    <article className={styles.project}>
      <div className={styles.projectHeading}>
        <p>{project.meta}</p>
        <div>
          <h3>{project.title}</h3>
          <span>{project.subtitle}</span>
        </div>
      </div>
      <div className={styles.projectDetails}>
        <p>{project.description}</p>
        <div className={styles.projectFooter}>
          <span>{project.tech}</span>
          <div>{links}</div>
        </div>
      </div>
    </article>
  );
}

function Experience({ entry }) {
  return (
    <article className={styles.experience}>
      <header className={styles.experienceHeading}>
        <div>
          <h3>{entry.company}</h3>
          <p>{entry.role}</p>
        </div>
        <div className={styles.experienceMeta}>
          <span>{entry.dates}</span>
          <span>{entry.location}</span>
        </div>
      </header>
      <div className={styles.experienceBody}>
        <p>{entry.summary}</p>
        <ul>
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Portfolio() {
  const activeLocale = useStore(locale);
  const copy = content[activeLocale];

  useEffect(() => {
    document.documentElement.lang = activeLocale;
  }, [activeLocale]);

  return (
    <div className={styles.site}>
      <a className={styles.skipLink} href="#main-content">
        {copy.skip}
      </a>

      <header className={styles.header}>
        <a
          className={styles.brand}
          href="#top"
          aria-label={`Sacha Arseneault — ${copy.nav.home}`}
        >
          <img src={logo} alt="" width="40" height="40" />
          <span>Sacha Arseneault</span>
        </a>

        <nav aria-label={copy.nav.label}>
          <a href="#projects">{copy.nav.projects}</a>
          <a href="#experience">{copy.nav.experience}</a>
          <a href="#about">{copy.nav.about}</a>
          <ExternalLink
            href={resumeUrl}
            label={copy.external}
            className={styles.navExternal}
          >
            {copy.nav.resume}
          </ExternalLink>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.languageSwitch} aria-label={copy.language.label}>
            <button
              type="button"
              className={activeLocale === "en" ? styles.languageActive : ""}
              onClick={() => locale.set("en")}
              aria-pressed={activeLocale === "en"}
              aria-label={copy.language.switchToEnglish}
            >
              EN
            </button>
            <span aria-hidden="true">/</span>
            <button
              type="button"
              className={activeLocale === "fr" ? styles.languageActive : ""}
              onClick={() => locale.set("fr")}
              aria-pressed={activeLocale === "fr"}
              aria-label={copy.language.switchToFrench}
            >
              FR
            </button>
          </div>
          <a className={styles.headerContact} href="mailto:sacha.arseneault@gmail.com">
            {copy.nav.contact}
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <p className={styles.eyebrow}>{copy.hero.eyebrow}</p>
          <div className={styles.heroGrid}>
            <h1 id="hero-title">{copy.hero.title}</h1>
            <div className={styles.heroCopy}>
              <p>{copy.hero.intro}</p>
              <p>{copy.hero.recent}</p>
              <div className={styles.heroActions}>
                <a className={styles.primaryLink} href="mailto:sacha.arseneault@gmail.com">
                  {copy.hero.email}
                  <ArrowIcon />
                </a>
                <ExternalLink
                  href={resumeUrl}
                  label={copy.external}
                  className={styles.textLink}
                >
                  {copy.hero.resume}
                </ExternalLink>
              </div>
            </div>
          </div>
          <div className={styles.heroFooter}>
            {copy.hero.details.map((detail) => (
              <span key={detail}>{detail}</span>
            ))}
          </div>
        </section>

        <section
          className={styles.section}
          id="projects"
          aria-labelledby="projects-title"
        >
          <SectionHeader
            title={copy.projects.title}
            intro={copy.projects.intro}
            id="projects-title"
          />
          <div className={styles.projectList}>
            <Project
              project={copy.projects.bingo}
              links={
                <ExternalLink
                  href="https://github.com/bingosuite/bingo"
                  label={copy.external}
                  className={styles.textLink}
                >
                  {copy.projects.bingo.link}
                </ExternalLink>
              }
            />
            <Project
              project={copy.projects.eco}
              links={
                <>
                  <ExternalLink
                    href="https://github.com/jeffrey-zang/ecorewards"
                    label={copy.external}
                    className={styles.textLink}
                  >
                    {copy.projects.eco.source}
                  </ExternalLink>
                  <ExternalLink
                    href="https://devpost.com/software/ecorewards-t0qw26"
                    label={copy.external}
                    className={styles.textLink}
                  >
                    {copy.projects.eco.link}
                  </ExternalLink>
                </>
              }
            />
          </div>
        </section>

        <section
          className={styles.section}
          id="experience"
          aria-labelledby="experience-title"
        >
          <SectionHeader
            title={copy.experience.title}
            intro={copy.experience.intro}
            id="experience-title"
          />
          <div className={styles.experienceList}>
            {copy.experience.entries.map((entry) => (
              <Experience entry={entry} key={entry.company} />
            ))}
          </div>

          <div className={styles.earlier}>
            <h3>{copy.experience.earlierTitle}</h3>
            <div>
              {copy.experience.earlier.map((entry) => (
                <article key={entry.company}>
                  <div>
                    <h4>{entry.company}</h4>
                    <p>{entry.role}</p>
                  </div>
                  <div className={styles.experienceMeta}>
                    <span>{entry.dates}</span>
                    <span>{entry.location}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="about" aria-labelledby="about-title">
          <SectionHeader title={copy.profile.title} id="about-title" />
          <div className={styles.profileGrid}>
            <article className={styles.profileBlock}>
              <p className={styles.label}>{copy.profile.educationLabel}</p>
              <h3>{copy.profile.school}</h3>
              <p>{copy.profile.degree}</p>
              <div className={styles.profileMeta}>
                <span>{copy.profile.gpa}</span>
                <span>{copy.profile.graduation}</span>
              </div>
            </article>

            <article className={styles.profileBlock}>
              <div className={styles.labelRow}>
                <p className={styles.label}>{copy.profile.leadershipLabel}</p>
                <span>{copy.profile.leadershipDates}</span>
              </div>
              <h3>{copy.profile.leadershipTitle}</h3>
              <p>{copy.profile.leadershipBody}</p>
              <p>{copy.profile.leadershipDetail}</p>
            </article>
          </div>

          <div className={styles.skills}>
            <h3>{copy.profile.skillsLabel}</h3>
            <dl>
              {copy.profile.skillGroups.map((group) => (
                <div key={group.label}>
                  <dt>{group.label}</dt>
                  <dd>{group.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          className={styles.contact}
          id="contact"
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title">{copy.contact.title}</h2>
          <div>
            <p>{copy.contact.body}</p>
            <a
              className={styles.emailLink}
              href="mailto:sacha.arseneault@gmail.com"
            >
              <span>{copy.contact.email}</span>
              <ArrowIcon />
            </a>
            <div className={styles.socialLinks}>
              <ExternalLink
                href="https://linkedin.com/in/sacha-ars"
                label={copy.external}
                className={styles.textLink}
              >
                LinkedIn
              </ExternalLink>
              <ExternalLink
                href="https://github.com/xsachax"
                label={copy.external}
                className={styles.textLink}
              >
                GitHub
              </ExternalLink>
              <ExternalLink
                href={resumeUrl}
                label={copy.external}
                className={styles.textLink}
              >
                {copy.contact.resume}
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>{copy.footer}</p>
        <ExternalLink
          href="https://sachaa.dev"
          label={copy.external}
          className={styles.textLink}
        >
          sachaa.dev
        </ExternalLink>
      </footer>
    </div>
  );
}

export default Portfolio;
