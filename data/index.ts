import { links } from "@/config";

export const navItems = [
  { name: { pt: "Sobre", en: "About" }, link: "/#about" },
  { name: { pt: "Projetos", en: "Projects" }, link: "/#projects" },
  { name: { pt: "Certificados", en: "Certificates" }, link: "/certificados" },
  { name: { pt: "Contato", en: "Contact" }, link: "/#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: { 
      pt: "Sobre Mim", 
      en: "About Me" 
    },
    description: {
      pt: "Sólida experiência em desenvolvimento Full Stack (JavaScript, TypeScript, Python) e análise de dados (SQL, Pandas). Atuo na automação de processos, integração de APIs e criação de soluções eficientes que otimizam o tempo e a tomada de decisão. Desenvolvi sistemas de auditoria e automação para o setor imobiliário e participei ativamente em projetos open-source e competições de robótica.",
      en: "Solid experience in Full Stack development (JavaScript, TypeScript, Python) and data analysis (SQL, Pandas). I work in process automation, API integration, and creating efficient solutions that optimize time and decision making. I developed auditing and automation systems for the real estate sector and actively participated in open-source projects and robotics competitions."
    },
    title2: {
      pt: "Formação Acadêmica",
      en: "Academic Background"
    },
    description2: {
      pt: "Bacharelado em Engenharia de Software | Cruzeiro do Sul Virtual (2025 - 2029)",
      en: "Bachelor's in Software Engineering | Cruzeiro do Sul Virtual (2025 - 2029)"
    },
    description3: {
      pt: "Bacharelado em Computer Science | Cruzeiro do Sul Virtual (2025 - 2029)",
      en: "Bachelor's in Computer Science | Cruzeiro do Sul Virtual (2025 - 2029)"
    },
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/grid.svg",
    spareImg: "",
  },
  
  {
    id: 4,
    title: {
      pt: "Main Tech Skills",
      en: "Main Tech Skills"
    },
    description: {
      pt: "",
      en: ""
    },
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: { pt: "Auditor Cadastral", en: "Cadastral Auditor" },
    des: {
      pt: "Sistema de auditoria e automação para operadoras de saúde, desenvolvido em Python e Streamlit com foco em análise de divergências cadastrais.",
      en: "Auditing and automation system for healthcare providers, developed in Python and Streamlit focusing on registration divergence analysis."
    },
    img: "/auditor-cadastral.png",
    iconLists: ["python", "streamlit", "database", "github"], 
    link: "https://github.com/berga-tman/sistemade_auditoria_v1",
    sourceCode: "https://github.com/berga-tman/sistemade_auditoria_v1",
  },
  {
    id: 2,
    title: { pt: "Medical Data Analysis (Protótipo)", en: "Medical Data Analysis (Prototype)" },
    des: {
      pt: "Aplicação construída com Python e Streamlit simulando um dataframe médico para contagem de dados e métricas de forma interativa.",
      en: "Application built with Python and Streamlit simulating a medical dataframe for data counting and interactive metrics."
    },
    img: "/lulus.png",
    iconLists: ["python", "streamlit", "github"],
    link: "https://github.com/berga-tman/streamlit",
    sourceCode: "https://github.com/berga-tman/streamlit",
  },
  {
    id: 3,
    title: { pt: "KNIME Data Workflows", en: "KNIME Data Workflows" },
    des: {
      pt: "Coleção de fluxos de trabalho analíticos (workflows) criados no KNIME para automação e processos de ETL avançados.",
      en: "Collection of analytical workflows created in KNIME for automation and advanced ETL processes."
    },
    img: "/knime-workflows.png",
    iconLists: ["database", "github"],
    link: "https://github.com/berga-tman/Knime",
    sourceCode: "https://github.com/berga-tman/Knime",
  },
  {
    id: 4,
    title: { pt: "VBA Automation Scripts", en: "VBA Automation Scripts" },
    des: {
      pt: "Scripts e macros desenvolvidos em VBA para automação de tarefas rotineiras e manipulação em grande escala de planilhas.",
      en: "Scripts and macros developed in VBA for routine task automation and large-scale spreadsheet manipulation."
    },
    img: "/vba-automation.png",
    iconLists: ["excel", "github"],
    link: "https://github.com/berga-tman/VBA",
    sourceCode: "https://github.com/berga-tman/VBA",
  },
  {
    id: 5,
    title: { pt: "Estudos TypeScript & Java", en: "TypeScript & Java Studies" },
    des: {
      pt: "Repositórios consolidados de aprendizado, englobando testes lógicos em TypeScript e Programação Orientada a Objetos em Java.",
      en: "Consolidated learning repositories, encompassing logic tests in TypeScript and Object-Oriented Programming in Java."
    },
    img: "/typescript-study.png",
    iconLists: ["typescript", "java", "github"],
    link: "https://github.com/berga-tman",
    sourceCode: "https://github.com/berga-tman",
  },
] as const;

export const testimonials = [
  {
    quote: {
      pt: `Colaborar com ${links.ownerName} foi um prazer absoluto. Seu profissionalismo, pontualidade e dedicação em entregar resultados excepcionais foram evidentes em todo o nosso projeto.`,
      en: `Collaborating with ${links.ownerName} was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.`
    },
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
] as const;

export const companies = [
  { id: 1, name: "Python", img: "/ts.svg", nameImg: "/cloudName.svg" },
  { id: 2, name: "JavaScript", img: "/ts.svg", nameImg: "/appName.svg" },
  { id: 3, name: "TypeScript", img: "/typescript.svg", nameImg: "/hostName.svg" },
  { id: 4, name: "React.js", img: "/re.svg", nameImg: "/streamName.svg" },
  { id: 5, name: "HTML & CSS", img: "/tailwind.svg", nameImg: "/dockerName.svg" },
  { id: 6, name: "Node.js", img: "/nextjs.svg", nameImg: "/dockerName.svg" },
  { id: 7, name: "Git", img: "/git.svg", nameImg: "/dockerName.svg" },
  { id: 8, name: "SQL", img: "/mysql.svg", nameImg: "/dockerName.svg" },
] as const;

export const socialMedia = [
  { name: "Instagram", img: "/insta.svg", link: "https://www.instagram.com/bernardo.alc/" },
  { name: "LinkedIn", img: "/link.svg", link: "https://www.linkedin.com/in/bernardo-alcantara-37a06a28b/" },
  { name: "GitHub", img: "/git.svg", link: "https://github.com/berga-tman" },
  { name: "Behance", img: "/behance.svg", link: "" },
] as const;

export const techStack = {
  stack1: ["Python", "TypeScript", "JavaScript"],
  stack2: ["React.js", "Node.js", "SQL"],
} as const;
