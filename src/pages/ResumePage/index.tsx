import React from 'react';
import Resume from '@components/Resume';

const ResumePage: React.FC = () => {
  const userInfo = {
    address: 'Taipei, Taiwan',
    email: 'marhsal604@gmail.com',
    phone: '+886 932-006-604',
    name: 'Hubert Yang',
    linkedin: 'linkedin.com/in/hubert-yang-01b9a51ab/',
    github: 'github.com/marshal604',
    codepen: 'codepen.io/marshal604',
  };
  const skills = ['JavaScript', 'TypeScript', 'Vue', 'React', 'Angular', 'Node.js', 'NewRelic', 'Storybook', 'Jest', 'AWS(CloudFront, Lambda@Edge, S3)'];
  const experiences = [
    { 
      title: 'Sr. Frontend Engineer',
      company: 'AmazingTaker',
      start_at: new Date('2021-02-01'),
      end_at: null,
      achievements: [
        `Implemented dynamic store loading, reducing initial page load size by 25% (400 KB to 300 KB gzipped).`,
        `Streamlined notification logic and merged 30 payment components into 5 reusable ones, reducing maintenance effort and speeding up development.`,
        `Optimized CloudFront caching by simplifying URL structures and unifying cache behaviors, improving hit rates and reducing complexity. Streamlined CDN architecture from dual-layer to single-layer, cutting costs by 20%.`,
        `Leveraged Edge@Lambda for dynamic content delivery, reducing server load by 80% and cutting response times from 400 ms to 120 ms.`,
        `Enhanced deployment speed by optimizing Docker builds, creating a base image for node modules and system packages, cutting build time from 16 to 10 minutes, and leveraging GitHub Actions cache to accelerate workflows.`,
        `Built internal tools like feature toggles, a Chrome extension, Slack deployment commands, and Metabase dashboards, boosting productivity, decision-making, and deployment efficiency.`,
        `Presented on WebRTC, XSS prevention, Micro-Frontends, AWS Serverless, GraphQL Caching, etc., at internal Tech Sharing sessions, and authored technical documentation on AWS monitoring, NewRelic, feature toggles, best practices for dynamic store loading, etc., improving team knowledge and reducing communication overhead.`,
        `Led migration of Zoom recordings to Amazon S3 with Node.js for batch file uploads and Rails for processing SQS webhooks, ensuring data integrity and reliability.`
      ],
    },
    { 
      title: 'Frontend Engineer',
      company: 'ViewSonic',
      start_at: new Date('2020-08-01'),
      end_at: new Date('2021-01-01'),
      achievements: [
        `Independently developed two RWD management consoles using Angular, leveraging a shared component library and custom modules (e.g., auth, drag-and-drop, and overlay management) to streamline development and reduce redundancy.`,
      ],
    },
    { 
      title: 'Software Engineer',
      company: 'Genie Network',
      start_at: new Date('2018-06-01'),
      end_at: new Date('2020-05-01'),
      achievements: [
        `Led the development of dashboard modules, integrating drag-and-drop, asynchronous widget refreshing, and dynamic component management using a SSOT approach. Implemented state management and Node.js APIs with GraphQL, incorporating AJV for input validation, ensuring secure and efficient data flow.`,
        `Customized Angular Material and amCharts4 themes for seamless Light/Dark mode transitions.`,
        `Developed interactive data visualizations using amCharts4 and d3.js, enabling seamless interaction between tables and charts, and integrating geo-location data to visualize regional patterns and cybersecurity attack maps.`,
        `Enhanced Developer Experience (DX) by automating versioning and i18n updates using Gulp, and developing UI component prototypes with Storybook for faster design iterations and team collaboration.`,
      ],
    },
    { 
      title: 'Software Engineer',
      company: 'SunNet Tech',
      start_at: new Date('2016-12-01'),
      end_at: new Date('2018-05-01'),
      achievements: [
        `Integrated Video.js for video watermarking and timeline control in a Hybrid App.`,
        `Developed a Bluetooth-based attendance system and optimized file upload processes.`,
        `Launched apps on Google Play and Apple App Store, handling enterprise certificates and audits.`,
      ],
    },
  ];
  const education = [
    { school: 'National Kaohsiung First University of Science and Technology', degree: 'B.S. in Computer and Communication Engineering', start_at: new Date('2011-09-01'), end_at: new Date('2015-06-01'), address: 'Kaohsiung, Taiwan' },
  ];
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <Resume userInfo={userInfo} skills={skills} experiences={experiences} education={education} />
    </div>
  );
};

export default ResumePage;
