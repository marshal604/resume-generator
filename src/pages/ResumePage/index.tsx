import React from "react";
import Resume from "@components/Resume";

const ResumePage: React.FC = () => {
  const userInfo = {
    address: "Taipei, Taiwan",
    email: "marhsal604@gmail.com",
    phone: "",
    name: "Hubert Yang",
    linkedin: "https://linkedin.com/in/hubert-yang-01b9a51ab/",
    github: "https://github.com/marshal604",
    codepen: "https://codepen.io/marshal604",
  };
  const aboutMe =
    "Frontend-focused engineer with deep experience in optimization, monitoring, and deployment automation.";
  const experiences = [
    {
      title: "Sr. Frontend Engineer",
      company: "AmazingTaker",
      start_at: new Date("2021-02-01"),
      end_at: null,
      achievements: [
        `Led a 25% bundle size reduction (400 KB → 300 KB gzipped) in 2 months by identifying global Vuex stores with
        Webpack Bundle Analyzer, modularizing via dynamic loading, and coordinating a 5-person task force with
        documented SOPs.`,
        `Shaped the early architecture for Nx-based micro-frontends by contributing to Nuxt2 modularization planning and
        proposing a phased Nuxt3 migration strategy that minimized risk and accelerated rollout.`,
        `Improved SEO performance and reduced TTFB from 400 ms to 120 ms by optimizing CDN cache hit rates using
        Lambda@Edge for dynamic content delivery.`,
        `Consolidated 30+ payment components into 5 reusable modules by abstracting common logic and standardizing
        notification handling, significantly improving scalability and streamlining development workflows.`,
        `Led CI/CD pipeline optimization with the SRE team, reducing deployment time by 62% (18m → 7m) through
        Docker tuning and parallel job execution.`,
        `Built end-to-end monitoring strategies across Nuxt, React, and video systems, leveraging NewRelic,
        OpenTelemetry, and Grafana to capture key metrics and surface errors early—accelerating debugging and
        improving system reliability.`,
        `Spearheaded a refactor initiative for a legacy React-based video system, defining clear module boundaries and
        component roles to reduce maintenance overhead and improve codebase readability.`,
        `Delivered technical sharing sessions to 30+ colleagues, sharing practical takeaways from recent projects and
        upcoming technologies to enhance team readiness and alignment.`,
      ],
    },
    {
      title: "Frontend Engineer",
      company: "ViewSonic",
      start_at: new Date("2020-08-01"),
      end_at: new Date("2021-01-01"),
      achievements: [
        `Led the end-to-end development of two internal management consoles from scratch using Angular, establishing
automated setup and modular design to accelerate delivery and ensure maintainability.`,
      ],
    },
    {
      title: "Software Engineer",
      company: "Genie Network",
      start_at: new Date("2018-06-01"),
      end_at: new Date("2020-05-01"),
      achievements: [
        `Owned the Angular dashboard module, implementing drag-and-drop, dynamic loading, and performance tuning
for smooth data updates backed by GraphQL.`,
        `Built rich, interactive reports using amCharts and custom d3.js visualizations, and led theme standardization for
consistent light/dark UI support.`,
        `Enhanced developer experience by automating the i18n update process and employing Storybook to create an
interactive component library documentation.`,
      ],
    },
    {
      title: "Software Engineer",
      company: "SunNet Tech",
      start_at: new Date("2016-12-01"),
      end_at: new Date("2018-05-01"),
      achievements: [
        `Built and published hybrid apps with WebView and native integrations (e.g., video control, Bluetooth), handling
certificates and app store submissions for both iOS and Android.`,
      ],
    },
  ];
  const education = [
    {
      school: "National Kaohsiung First University of Science and Technology",
      degree: "B.S. in Computer and Communication Engineering",
      start_at: new Date("2011-09-01"),
      end_at: new Date("2015-06-01"),
      address: "Kaohsiung, Taiwan",
    },
  ];
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <Resume
        userInfo={userInfo}
        aboutMe={aboutMe}
        experiences={experiences}
        education={education}
      />
    </div>
  );
};

export default ResumePage;
