export const portfolio = [
  {
    id: 1,
    title: 'GTrack Web',
    description:
      'GTrack Web is a platform part of the GTrack application which is an undergraduate capstone project composed of a web and mobile based waste collection system built for the residents of Poblacion, Compostela, Cebu. The system was aimed to be informed, be updated, and alerted the residents of anything waste collection related through information dissemination, real-time track garbage truck collectors in their routes and locations for efficient and accurate waste collection, effective and convenient communication between the SWM office or administrators and garbage truck drivers for waste collection assignments including registration, GPS mapping, and drivers’ reports.',
    image: '/portfolio/pj_gtrack.jpg',
    technologies: ['ReactJS', 'Material UI', 'NodeJS', 'ExpressJS', 'MySQL'],
    github_link: {
      type: 'web',
      link: 'https://github.com/Project-GTrack/gtrack-web',
    },
    output_link: {
      type: 'web',
      link: 'https://gtrack-client.herokuapp.com/',
    },
    start_date: '2022-01-01',
    finished_date: '2022-04-04',
  },
  {
    id: 2,
    title: 'GTrack Mobile',
    description:
      'GTrack Mobile is the mobile counterpart of the GTrack application built with React Native and deployed on Google Play Store which provides services for the residents and drivers of the SWM Department and allows them to be informed, be updated, and alerted of anything waste collection related through information dissemination and real-time track garbage truck collectors in their routes and locations for efficient and accurate waste collection.',
    image: '/portfolio/pj_gtrack_mobile.jpg',
    technologies: ['React Native', 'NativeBase'],
    github_link: {
      type: 'mobile',
      link: 'https://github.com/Project-GTrack/gtrack-mobile',
    },
    output_link: {
      type: 'mobile',
      link: 'https://play.google.com/store/apps/details?id=com.gtrack.mobile',
    },
    start_date: '2022-01-01',
    finished_date: '2022-04-04',
  },
  {
    id: 3,
    title: 'Instagram Clone',
    description:
      'Built with Next.js TypeScript and TailwindCSS, Instagram Clone is a personal practice project built by yours truly in order to hone and improve my frontend, markup and UI designing skills.',
    image: '/portfolio/pj_instagram_clone.jpg',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    github_link: {
      type: 'web',
      link: 'https://github.com/rogeliojohnoliverio/ps-practice',
    },
    output_link: {
      type: 'web',
      link: 'https://instagram-clone.vercel.app',
    },
    start_date: '2022-12-05',
    finished_date: '2022-12-12',
  },
  {
    id: 4,
    title: 'Slackana',
    description:
      "Slackana is an internal simulation project for junior web developers and QA's in Sun* Inc. It is a slack and asana combined in one project management tool. For us it is kinda a hassle to switch between asana and slack at the same time. It would also be best that Developer Leads/Team leads can create a team with their members and members can also make their task list/todo list so that their team leads can view what his/her members are doing.",
    image: '/portfolio/pj_slackana.jpg',
    technologies: ['Next.js', 'Redux Toolkit', 'TailwindCSS', 'Laravel', 'MySQL'],
    github_link: {
      type: 'web',
      link: 'https://github.com/abduljalilpalala/ps-slackana',
    },
    output_link: {
      type: 'web',
      link: 'https://slackana-client.vercel.app/sign-in',
    },
    start_date: '2021-09-01',
    finished_date: '2022-12-01',
  },
  {
    id: 5,
    title: 'Sun* HRIS',
    description:
      'HRIS is an internal simulation project for the admin team of Sun Asterisk PH that aims to help and ease admin operations. The features include management of employees including attendance, leave requests, duty schedules, onboarding forms, overtime filing and a centralized application for HR information.',
    image: '/portfolio/pj_hris.jpg',
    technologies: [
      'Next.js',
      'Typescript',
      'TailwindCSS',
      'ASP.NET Core (Web) 6',
      'MSSQL',
      'GraphQL',
      'Docker',
    ],
    github_link: {
      type: 'web',
      link: 'https://github.com/framgia/sph-hris',
    },
    output_link: {
      type: 'web',
      link: 'https://github.com/framgia/sph-hris',
    },
    start_date: '2022-12-05',
    finished_date: '2023-02-08',
  },
  {
    id: 6,
    title: 'Sun* E-learning Training Project',
    description:
      'The E-learning application is a platform for people who wished to learn and expand their vocabularies and grammar. It allows them to answer series of words depending on the lesson chosen. This application is built on top of Laravel and React framework with the help of Redux Toolkit (RTK) Query.',
    image: '/portfolio/pj_sels.png',
    technologies: ['ReactJS', 'RTK Query', 'Bootstrap 5', 'Laravel', 'MySQL'],
    github_link: {
      type: 'web',
      link: 'https://github.com/framgia/sph-els-rogelio/',
    },
    output_link: {
      type: 'web',
      link: 'https://sph-els-rogelio-client.herokuapp.com/',
    },
    start_date: '2022-08-16',
    finished_date: '2022-09-30',
  },
  {
    id: 7,
    title: 'QR Code Generator',
    description:
      "The goal of this project is to enhance the our skills in deployment and Typescript. This project takes user's info and generates a one time QR code in which they can view their personal info after they scan code.",
    image: '/portfolio/pj_qr_code.jpg',
    technologies: ['ReactJS', 'TailwindCSS', 'Laravel', 'MySQL'],
    github_link: {
      type: 'web',
      link: 'https://github.com/roseaugusto/upskill-fe',
    },
    output_link: {
      type: 'web',
      link: 'https://upskill-fe-lake.vercel.app/',
    },
    start_date: '2023-05-04',
    finished_date: '2023-05-26',
  },
  {
    id: 8,
    title: 'SIM ChatGPT: Unit Test',
    description:
      'SIM ChatGPT: Unit Test is an internal simulation project of Sun*. This is a vscode extension developed for the purpose of collaborative and assistive development tool for the software developers. This extension focuses on creating/suggesting unit tests from code snippets upon highlighting, powered by OpenAI GPT API. It allows them to choose whatever testing framework they prefer as specified and provided by the extension. Try installing SIM ChatGPT: Unit Test now and use it in your development phase with ease!',
    image: '/portfolio/pj_unit_test.jpg',
    technologies: ['TypeScript', 'VSCode Extension', 'HTML', 'CSS'],
    github_link: {
      type: 'extension',
      link: 'https://github.com/roseaugusto/pj_sim-chatgpt',
    },
    output_link: {
      type: 'extension',
      link: 'https://marketplace.visualstudio.com/items?itemName=pj-sim-chatgpt-dev.sim-chatgpt-unit-test',
    },
    start_date: '2023-05-29',
    finished_date: '2023-06-27',
  },
]
