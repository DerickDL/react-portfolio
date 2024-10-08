import navix from "../assets/projects/navix.png";
import bis from "../assets/projects/bis.jpg";
import foto from "../assets/projects/foto.png";
import retargeting from "../assets/projects/retargeting.png";

export const HERO_CONTENT = `I am a full stack developer with more than 5 years of experience building scalable web applications. I specialize in back-end development using the Laravel framework, with Redis, PostgreSQL, and MySQL for database management. On the front end, I work with React, NextJS and Vue to deliver dynamic user experiences.`;
export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With over 5 years of professional experience, I have worked with a variety of technologies, including Laravel, React, Next.js, Vue.js, MySQL, PostgreSQL, and Redis. I have contributed to projects across diverse sectors such as e-commerce, government management systems, and healthcare software. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active by playing basketball and regularly hitting the gym to maintain my fitness and well-being.`;

export const EXPERIENCES = [
  {
    year: "February 2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Guerilla360 Integrated Solutions Co.",
    description: `Maintaining  and developing  new features for a large-scale medical/healthcare application/system.
Utilizing Laravel for backend development and Next.JS for frontend implementation.
Conducting  periodic code reviews to ensure code quality and alignment with best practices.
Developed and managed complex database operations across multiple tables using Laravel's Eloquent ORM and query builder, ensuring data integrity and accuracy while efficiently handling complex transactions.
Utilized Laravel Events with Queues using Redis for event notifications and emails sending.
Contributed to the integration and synchronization of Clients and Patients data, ensuring smooth transitions and consistent record management.
Developed various APIs utilizing middleware, authorization, and form requests to ensure secure and validated processing of incoming requests.
Optimized API responses using Laravel Resources, ensuring efficiency and consistency in data representation.
`,
    technologies: ["Laravel", "React.js", "Next.js", "Redis", "MySQL", "AWS"],
  },
  {
    year: "September 2023 - December 2023",
    role: "Senior Software Developer",
    company: "Intellect Philippines Branch Office",
    description: `Develop cutting-edge Web Applications to address the unique requirements of diverse government agencies and sectors in Singapore.
Utilize a robust tech stack, including Laravel, React, and PostgreSQL, with proficiency in AWS services such as S3 bucket, CodeCommit, and CodeDeploy.
Spearhead the planning and implementation of new functionalities, providing valuable insights to enhance project efficiency and deliverables.
Manage deployment processes and oversee database transactions on our server, ensuring a seamless and secure operational environment.
Mentor junior developers to foster skill development and ensure project continuity. Act as a go-to resource for colleagues seeking technical guidance.
`,
    technologies: [
      "Laravel",
      "React.js",
      "Next.js",
      "Redis",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    year: "October 2019 - June 2023",
    role: "Senior Web Developer",
    company: "Cafe24 Philippines Inc.",
    description: `Designed and developed e-commerce projects using Web Development Frameworks  such as Laravel, VueJS, and React.
Implemented advanced functionalities such as Queuing heavy background tasks such as email and sms sending using Redis.
Created a RESTful API while adhering to industry standards, including the implementation of OpenAPI 2.0.
Perform code review to team members to ensure the quality of their code and make sure they follow the company's standard.
Collaborating closely with cross-functional teams, including product manager, publishing, DevOps, and QA, to drive successful project outcomes.
Mentoring and developing team members to build a high-performing, collaborative, and engaged team culture.
`,
    technologies: [
      "PHP",
      "Laravel",
      "VueJS",
      "ReactJS",
      "NextJS",
      "Redis",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    year: "May 2018 - October 2019",
    role: "Junior Web Developer",
    company: "Cafe24 Philippines Inc.",
    description: `Developed both internal and external company projects using Laravel, HTML, CSS, Javascript, jQuery, MariaDB and Redis.
Collaborated with the dev team to conduct peer testing.
`,
    technologies: [
      "PHP",
      "Laravel",
      "Redis",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Navix Health",
    image: navix,
    description:
      "All-in-one platform for administrative tasks  to manage behavioral health programs or private practice.",
    technologies: ["Laravel", "React", "NextJS", "CSS", "Redis", "MySQL"],
    link: "https://navixhealth.com/",
  },
  {
    title: "Back-in-Stock Notifications",
    image: bis,
    description:
      "When a customer selects a product that is currently out of stock, they can opt to receive a notification via email or SMS once the item becomes available again.",
    technologies: ["Laravel", "VueJS", "MySQL", "Redis", "Bootstrap"],
    link: "https://store.cafe24.com/us/apps/7744",
  },
  {
    title: "Retargeting",
    image: retargeting,
    description:
      "Show the customer their most frequently viewed, wishlisted, and recently added-to-cart products on the shopping mall website, as a reminder of their shopping activity",
    technologies: [
      "Laravel",
      "JavaScript",
      "jQuery",
      "MySQL",
      "Redis",
      "Bootstrap",
    ],
  },
  {
    title: "Foto",
    image: foto,
    description:
      "A responsive photo gallery web application built with React that uses the Unsplash API to fetch high-quality, open-source images. It features efficient image loading and a clean, minimalist design, demonstrating React's capabilities for dynamic front-end development and seamless interaction with external APIs.",
    technologies: ["React", "Tailwind", "Unsplash API"],
    link: "https://react-foto.vercel.app/",
  },
];

export const CONTACT = {
  address: "Antipolo City, Rizal, Philippines",
  phoneNo: "+639053395180",
  email: "johnderickdeleon@gmail.com",
};
