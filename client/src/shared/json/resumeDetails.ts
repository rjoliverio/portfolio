import { DockerIcon } from '../icons/DockerIcon'
import { GitIcon } from '../icons/GitIcon'
import { HerokuIcon } from '../icons/HerokuIcon'
import { JavascriptIcon } from '../icons/JavascriptIcon'
import { LaravelIcon } from '../icons/LaravelIcon'
import { MysqlIcon } from '../icons/MysqlIcon'
import { NextjsIcon } from '../icons/NextjsIcon'
import { TailwindIcon } from '../icons/TailwindIcon'
import { VercelIcon } from '../icons/VercelIcon'
import { VisualStudioIcon } from '../icons/VisualStudioIcon'

export const resumeDetails = {
  name: {
    first_name: 'Rogelio John',
    last_name: 'Oliverio',
  },
  address: 'Compostela, Cebu, Philippines',
  contacts: {
    email: 'rjmoliverio@gmail.com',
    phone: '+639454250787',
  },
  socials: {
    linkedin: '',
    gmail: '',
    github: '',
  },
  summary:
    'A passionate and task-driven IT fresh graduate with 1+ years of experience in web design and development. Equipped with the skills in managing database, API development, frontend integration and software containerization. Seeking to leverage the experience with developing different web applications to join as a Junior Web Developer.',
  education: {
    date_inclusion: '2018 - 2022',
    degree: 'Bachelor of Science in Information Technology',
    school: 'University of San Carlos - Talamban Campus',
    scholarship: 'SM Foundation Academic Scholar',
    award: 'Cum Laude',
  },
  work_experiences: [
    {
      date_inclusion: 'Aug 2022 - Present',
      position: 'Junior Web Developer',
      company: 'Sun Asterisk Software Development Inc.',
    },
    {
      date_inclusion: 'Aug 2021 - Feb 2022',
      position: 'Software Developer Intern',
      company: 'Trippr Tech Inc.',
    },
    {
      date_inclusion: 'December 2018',
      position: 'Customer Service Representative',
      company: 'SM Malls - Department Store',
    },
  ],
  skills: {
    technical_skills: {
      tools: [
        {
          name: 'Visual Studio Code',
          percentage: 70,
          icon: VisualStudioIcon,
        },
        {
          name: 'Git & Github',
          percentage: 65,
          icon: GitIcon,
        },
        {
          name: 'Docker Desktop',
          percentage: 50,
          icon: DockerIcon,
        },
      ],
      database_management: [
        {
          name: 'MySQL',
          percentage: 70,
          icon: MysqlIcon,
        },
      ],
      languages: [
        {
          name: 'JavaScript',
          percentage: 70,
          icon: JavascriptIcon,
        },
        {
          name: 'NextJS',
          percentage: 45,
          icon: NextjsIcon,
        },
        {
          name: 'TailwindCSS',
          percentage: 45,
          icon: TailwindIcon,
        },
        {
          name: 'Laravel MVC',
          percentage: 55,
          icon: LaravelIcon,
        },
      ],
      deployment: [
        {
          name: 'Heroku',
          percentage: 60,
          icon: HerokuIcon,
        },
        {
          name: 'Vercel',
          percentage: 60,
          icon: VercelIcon,
        },
      ],
    },
    soft_skills: [
      {
        name: 'Communication',
      },
      {
        name: 'Teamwork',
      },
      {
        name: 'Flexibility',
      },
      {
        name: 'Organization',
      },
      {
        name: 'Time Management',
      },
    ],
  },
}
