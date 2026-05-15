"use client";

import { FloatingNav } from "@/components/ui/floating-nav";
import { navItems } from "@/data";
import { 
  FaChartBar, FaNetworkWired, FaChartPie, FaDatabase, 
  FaPython, FaCode, FaJsSquare, FaReact, FaHtml5, FaGitAlt, FaNodeJs 
} from "react-icons/fa";
import dynamic from 'next/dynamic';
const PrismaticBurst = dynamic(() => import('@/components/PrismaticBurst'), { ssr: false });
import { useLanguage } from "@/context/LanguageContext";

export default function CertificadosPage() {
  const { language } = useLanguage();
  
  const t = (pt: string, en: string) => language === 'pt' ? pt : en;

  const certificadosCruzeiro = [
    { 
      title: { pt: "Análise de Dados Para Tomada de Decisões", en: "Data Analysis for Decision Making" }, 
      hours: "160h", date: "Dez/2025", 
      type: { pt: "Trilha Customizável", en: "Customizable Track" }, 
      icon: FaChartBar,
      inst: "Cruzeiro do Sul Virtual"
    },
    { 
      title: { pt: "Administração de Redes e Servidores", en: "Network and Server Administration" }, 
      hours: "200h", date: "Dez/2025", 
      type: { pt: "Trilha Customizável", en: "Customizable Track" }, 
      icon: FaNetworkWired,
      inst: "Cruzeiro do Sul Virtual"
    },
    { 
      title: { pt: "Analytics, Análise de Dados e Big Data", en: "Analytics, Data Analysis, and Big Data" }, 
      hours: "110h", date: "Abr/2026", 
      type: { pt: "Trilha Customizável", en: "Customizable Track" }, 
      icon: FaChartPie,
      inst: "Cruzeiro do Sul Virtual"
    },
    { 
      title: { pt: "Armazenamento e Gestão de Dados", en: "Data Storage and Management" }, 
      hours: "160h", date: "Abr/2026", 
      type: { pt: "Trilha Customizável", en: "Customizable Track" }, 
      icon: FaDatabase,
      inst: "Cruzeiro do Sul Virtual"
    }
  ];

  const certificadosAlura = [
    { title: { pt: "Python: crie a sua primeira aplicação", en: "Python: create your first application" }, hours: "8h", date: "Set/2024", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Python: aplicando a Orientação a Objetos", en: "Python: applying Object Orientation" }, hours: "6h", date: "Out/2024", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Python: avance na Orientação a Objetos e consuma API", en: "Python: advance in Object Orientation and consume API" }, hours: "8h", date: "Jun/2025", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Lógica de programação: mergulhe em programação com JavaScript", en: "Programming Logic: dive into programming with JavaScript" }, hours: "6h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "Lógica de programação: explore funções e listas", en: "Programming Logic: explore functions and lists" }, hours: "6h", date: "Abr/2024", type: "Curso", icon: FaCode, category: "Lógica & Fundamentos" },
    { title: { pt: "Git e GitHub: compartilhando e colaborando em projetos", en: "Git and GitHub: sharing and collaborating on projects" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaGitAlt, category: "DevOps & Ferramentas" },
    { title: { pt: "Lógica de programação: praticando com desafios", en: "Programming Logic: practicing with challenges" }, hours: "8h", date: "Jan/2026", type: "Curso", icon: FaCode, category: "Lógica & Fundamentos" },
    { title: { pt: "Começando em Programação: carreira e primeiros passos", en: "Starting in Programming: career and first steps" }, hours: "1h", date: "Jan/2026", type: "Curso", icon: FaCode, category: "Lógica & Fundamentos" },
    { title: { pt: "Praticando Python: condicionais if, elif e else", en: "Practicing Python: conditionals if, elif and else" }, hours: "2h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Praticando Python: laços for e while", en: "Practicing Python: for and while loops" }, hours: "2h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Praticando Python: Strings e Regex", en: "Practicing Python: Strings and Regex" }, hours: "4h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Praticando Python: listas e tuplas", en: "Practicing Python: lists and tuples" }, hours: "4h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Praticando Python: conjuntos e dicionários", en: "Practicing Python: sets and dictionaries" }, hours: "4h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Praticando Python: funções", en: "Practicing Python: functions" }, hours: "4h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Praticando python: programação assíncrona", en: "Practicing python: asynchronous programming" }, hours: "4h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Praticando Python: trabalhando com projetos", en: "Practicing Python: working with projects" }, hours: "4h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "TypeScript Part 1: Evolving Your JavaScript", en: "TypeScript Part 1: Evolving Your JavaScript" }, hours: "10h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "TypeScript parte 2: avançando na linguagem", en: "TypeScript Part 2: advancing in the language" }, hours: "10h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "Typescript parte 3: mais técnicas e boas práticas", en: "Typescript Part 3: more techniques and best practices" }, hours: "10h", date: "Mai/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags", en: "HTML and CSS: dev environments, file structure and tags" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaHtml5, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "HTML e CSS: Classes, posicionamento e Flexbox", en: "HTML and CSS: Classes, positioning and Flexbox" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaHtml5, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "JavaScript para Web: Crie páginas dinâmicas", en: "JavaScript for Web: Create dynamic pages" }, hours: "10h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "JavaScript: manipulando elementos no DOM", en: "JavaScript: manipulating DOM elements" }, hours: "6h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "React: construindo componentes com JSX", en: "React: building components with JSX" }, hours: "6h", date: "Abr/2024", type: "Curso", icon: FaReact, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "Node.js e terminal: dominando o ambiente de desenvolvimento front-end", en: "Node.js and terminal: mastering front-end dev environment" }, hours: "8h", date: "Jun/2025", type: "Curso", icon: FaHtml5, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "React: configurando e estruturando projetos com Vite", en: "React: setting up and structuring projects with Vite" }, hours: "8h", date: "Jun/2025", type: "Curso", icon: FaReact, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "HTML e CSS: cabeçalho, footer e variáveis CSS", en: "HTML and CSS: header, footer and CSS variables" }, hours: "6h", date: "Abr/2024", type: "Curso", icon: FaHtml5, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "HTML e CSS: trabalhando com responsividade e publicação de projetos", en: "HTML and CSS: working with responsiveness and publishing" }, hours: "6h", date: "Abr/2024", type: "Curso", icon: FaHtml5, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "HTML e CSS: praticando HTML/CSS", en: "HTML and CSS: practicing HTML/CSS" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaHtml5, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "HTML e CSS: responsividade com mobile-first", en: "HTML and CSS: responsiveness with mobile-first" }, hours: "12h", date: "Abr/2024", type: "Curso", icon: FaHtml5, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "JavaScript: explorando a manipulação de elementos e da localStorage", en: "JavaScript: exploring element manipulation and localStorage" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "JavaScript: validações e reconhecimento de voz", en: "JavaScript: validations and voice recognition" }, hours: "6h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "JavaScript: consumindo e tratando dados de uma API", en: "JavaScript: consuming and handling API data" }, hours: "6h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "JavaScript: métodos de array", en: "JavaScript: array methods" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "JavaScript: criando requisições", en: "JavaScript: creating requests" }, hours: "8h", date: "Mai/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "JavaScript: validando formulários", en: "JavaScript: validating forms" }, hours: "8h", date: "Mai/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "Modelagem do Data Warehouse: atributos, hierarquia e indicadores", en: "Data Warehouse Modeling: attributes, hierarchy and indicators" }, hours: "8h", date: "Nov/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "SQL Server: construção do Data Warehouse", en: "SQL Server: building the Data Warehouse" }, hours: "8h", date: "Nov/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Lake e Integration Services: construindo e carregando as dimensões", en: "Data Lake & Integration Services: building and loading dimensions" }, hours: "14h", date: "Nov/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Lake e Integration Services: construindo e carregando o tempo e as fatos", en: "Data Lake & Integration Services: building and loading time/facts" }, hours: "10h", date: "Nov/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Warehouse e Integration Services: carregando dados dimensionais", en: "Data Warehouse & Integration Services: loading dimensional data" }, hours: "8h", date: "Nov/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Warehouse e Integration Services: carregando fatos e dimensão tempo", en: "Data Warehouse & Integration Services: loading facts/time" }, hours: "12h", date: "Nov/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Modelagem de dados: identificando entidades, atributos, relacionamentos", en: "Data Modeling: identifying entities, attributes, relationships" }, hours: "8h", date: "Fev/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Modelagem de dados: desenvolvendo o modelo lógico", en: "Data Modeling: developing the logical model" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Modelagem de dados: aplicando a normalização", en: "Data Modeling: applying normalization" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Modelagem de dados: construindo o modelo físico", en: "Data Modeling: building the physical model" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Science: explorando e analisando dados", en: "Data Science: exploring and analyzing data" }, hours: "10h", date: "Abr/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Visualization: criando gráficos com bibliotecas Python", en: "Data Visualization: creating charts with Python libraries" }, hours: "10h", date: "Abr/2025", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Data Science: testando hipóteses", en: "Data Science: testing hypotheses" }, hours: "8h", date: "Abr/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Science: testando relações com Regressão Linear", en: "Data Science: testing relations with Linear Regression" }, hours: "8h", date: "Abr/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Science: analisando e prevendo séries temporais", en: "Data Science: analyzing and predicting time series" }, hours: "10h", date: "Mai/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Excel: domine o editor de planilhas", en: "Excel: master the spreadsheet editor" }, hours: "8h", date: "Mar/2024", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Funções com Excel: operações matemáticas e filtros", en: "Excel Functions: math operations and filters" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Recursos Visuais com Excel: explorando gráficos e formatos", en: "Visual Features in Excel: exploring charts and formats" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Excel: aprendendo lógica booleana e busca por valores", en: "Excel: learning boolean logic and VLOOKUP" }, hours: "8h", date: "Mar/2024", type: "Curso", icon: FaCode, category: "Lógica & Fundamentos" },
    { title: { pt: "Excel: utilizando tabelas dinâmicas e gráficos dinâmicos", en: "Excel: using pivot tables and dynamic charts" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Excel: automatizando tarefas com Macros", en: "Excel: automating tasks with Macros" }, hours: "8h", date: "Abr/2024", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "SQLite online: conhecendo instruções SQL", en: "Online SQLite: knowing SQL instructions" }, hours: "8h", date: "Jan/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "SQLite Online: executando consultas SQL", en: "Online SQLite: executing SQL queries" }, hours: "8h", date: "Fev/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Realizando consultas com SQL: Joins, Views e transações", en: "SQL Queries: Joins, Views and transactions" }, hours: "10h", date: "Fev/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "SQLite online: análise de dados com SQL", en: "Online SQLite: data analysis with SQL" }, hours: "8h", date: "Fev/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Pipeline de dados: combinando Python e orientação a objeto", en: "Data Pipeline: combining Python and OOP" }, hours: "12h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Python e APIs: conhecendo a biblioteca Requests", en: "Python and APIs: knowing the Requests library" }, hours: "8h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Modelagem de banco de dados relacional: entendendo SQL", en: "Relational DB Modeling: understanding SQL" }, hours: "6h", date: "Jan/2026", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "MongoDB: conhecendo um banco de dados NoSQL", en: "MongoDB: knowing a NoSQL database" }, hours: "8h", date: "Jan/2026", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Pipeline de dados: integrando Python com MongoDB e MySQL", en: "Data Pipeline: integrating Python with MongoDB and MySQL" }, hours: "8h", date: "Jan/2026", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Apache Airflow: orquestrando seu primeiro pipeline de dados", en: "Apache Airflow: orchestrating your first data pipeline" }, hours: "8h", date: "Jan/2026", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Visualization: gráficos de comparação e distribuição", en: "Data Visualization: comparison and distribution charts" }, hours: "12h", date: "Mai/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Visualization: gráficos de composição e relacionamento", en: "Data Visualization: composition and relation charts" }, hours: "10h", date: "Mai/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Data Visualization: estilização de tabelas com Python", en: "Data Visualization: styling tables with Python" }, hours: "8h", date: "Mai/2025", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Streamlit: construindo um dashboard interativo", en: "Streamlit: building an interactive dashboard" }, hours: "10h", date: "Mai/2025", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Python: análise de dados com SQL", en: "Python: data analysis with SQL" }, hours: "6h", date: "Mai/2025", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Python e Power BI: analisando dados do mercado financeiro", en: "Python and Power BI: analyzing financial market data" }, hours: "10h", date: "Jun/2025", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Geopandas: trabalhando com dados geoespaciais", en: "Geopandas: working with geospatial data" }, hours: "6h", date: "Jun/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Dados geográficos: visualização de mapas com Folium", en: "Geographic Data: visualizing maps with Folium" }, hours: "10h", date: "Jun/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Python para Dados: primeiros passos", en: "Python for Data: first steps" }, hours: "10h", date: "Mar/2024", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Python para Dados: trabalhando com funções, estruturas de dados e exceções", en: "Python for Data: working with functions and exceptions" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "NumPy: análise numérica eficiente com Python", en: "NumPy: efficient numerical analysis with Python" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Pandas: conhecendo a biblioteca", en: "Pandas: knowing the library" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Pandas I/O: trabalhando com diferentes formatos de arquivos", en: "Pandas I/O: working with different file formats" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Pandas: selecionando e agrupando dados", en: "Pandas: selecting and grouping data" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Pandas: transformação e manipulação de dados", en: "Pandas: data transformation and manipulation" }, hours: "6h", date: "Mar/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Pandas: limpeza e tratamento de dados", en: "Pandas: data cleaning and handling" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Python: começando com a linguagem", en: "Python: starting with the language" }, hours: "12h", date: "Jun/2023", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Python: avançando na linguagem", en: "Python: advancing in the language" }, hours: "12h", date: "Jul/2023", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Python: entendendo a Orientação a Objetos", en: "Python: understanding OOP" }, hours: "12h", date: "Ago/2023", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "PHP: criando sua aplicação", en: "PHP: creating your application" }, hours: "8h", date: "Jun/2025", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "PHP: evolua seu conhecimento e organize seu código", en: "PHP: evolve and organize your code" }, hours: "8h", date: "Ago/2025", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Pensamento computacional: fundamentos da computação e lógica de programação", en: "Computational Thinking: CS fundamentals and logic" }, hours: "8h", date: "Set/2025", type: "Curso", icon: FaCode, category: "Lógica & Fundamentos" },
    { title: { pt: "JavaScript: explorando a linguagem", en: "JavaScript: exploring the language" }, hours: "10h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "JavaScript: programando a Orientação a Objetos", en: "JavaScript: programming OOP" }, hours: "10h", date: "Abr/2024", type: "Curso", icon: FaJsSquare, category: "JavaScript & TypeScript" },
    { title: { pt: "React: desenvolvendo com JavaScript", en: "React: developing with JavaScript" }, hours: "14h", date: "Abr/2024", type: "Curso", icon: FaReact, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "React: como os componentes funcionam", en: "React: how components work" }, hours: "8h", date: "Mai/2024", type: "Curso", icon: FaReact, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "CSS: Flexbox e layouts responsivos", en: "CSS: Flexbox and responsive layouts" }, hours: "6h", date: "Abr/2024", type: "Curso", icon: FaHtml5, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "React: desenvolvendo em React Router com JavaScript", en: "React: developing in React Router" }, hours: "8h", date: "Mai/2024", type: "Curso", icon: FaReact, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "React: migrando para TypeScript", en: "React: migrating to TypeScript" }, hours: "8h", date: "Mai/2024", type: "Curso", icon: FaReact, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "React: estilize componentes com Styled Components e manipule arquivos estáticos", en: "React: styled components and static files" }, hours: "10h", date: "Mai/2024", type: "Curso", icon: FaReact, category: "Front-end (React, HTML/CSS)" },
    { title: { pt: "DevOps: explorando conceitos, comandos e scripts no Linux CLI", en: "DevOps: Linux CLI concepts and scripts" }, hours: "8h", date: "Jun/2025", type: "Curso", icon: FaNetworkWired, category: "DevOps & Ferramentas" },
    { title: { pt: "DevOps: trabalhando com tráfego seguro em comunicações web", en: "DevOps: secure web communications" }, hours: "6h", date: "Set/2025", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Excel: criação de macros e automatização de tarefas", en: "Excel: macro creation and automation" }, hours: "12h", date: "Jan/2024", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Excel VBA: criando Formulários para facilitar a entrada de dados nas planilhas", en: "Excel VBA: creating UserForms" }, hours: "8h", date: "Ago/2024", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Microsoft SQL Server 2022: consultas avançadas", en: "SQL Server 2022: advanced queries" }, hours: "18h", date: "Fev/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Microsoft SQL Server 2022: manipulando dados", en: "SQL Server 2022: manipulating data" }, hours: "12h", date: "Jun/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "Microsoft SQL Server 2022: conhecendo SQL", en: "SQL Server 2022: knowing SQL" }, hours: "8h", date: "Set/2023", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "VBA: automatizando tarefas diárias sem ser Dev", en: "VBA: daily task automation" }, hours: "10h", date: "Ago/2024", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "VBA: manipulação e limpeza de dados", en: "VBA: data manipulation and cleaning" }, hours: "8h", date: "Mar/2025", type: "Curso", icon: FaDatabase, category: "Dados & SQL" },
    { title: { pt: "VBA: fazendo um cadastro personalizado", en: "VBA: custom registration forms" }, hours: "10h", date: "Mai/2025", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Psicologia positiva: liderança autêntica a partir de forças pessoais", en: "Positive Psychology: authentic leadership" }, hours: "8h", date: "Dez/2023", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "ChatGPT: desvendando a IA em conversas e suas aplicações", en: "ChatGPT: unravelling AI in conversations" }, hours: "8h", date: "Ago/2024", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Engenharia de Prompt: criando prompts eficazes para IA Generativa", en: "Prompt Engineering: creating effective prompts" }, hours: "6h", date: "Out/2025", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "IA: explorando o potencial da inteligência artificial generativa", en: "AI: exploring generative AI potential" }, hours: "8h", date: "Set/2025", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
    { title: { pt: "Python: Inteligência Artificial Aplicada", en: "Python: Applied AI" }, hours: "12h", date: "Set/2025", type: "Curso", icon: FaPython, category: "Python & Back-end" },
    { title: { pt: "Carreira Engenharia de IA: Boas-vindas e primeiros passos", en: "AI Engineering Career: first steps" }, hours: "2h", date: "Set/2025", type: "Curso", icon: FaChartPie, category: "Outros & Soft Skills" },
  ];

  const categoriasUnicas = Array.from(new Set(certificadosAlura.map(c => c.category)));

  const CertCard = ({ cert, colorTheme }: { cert: any, colorTheme: string }) => {
    const IconComponent = cert.icon;
    const borderHover = colorTheme === 'pink' ? 'hover:border-pink-500/50' : 'hover:border-cyan-500/50';
    const shadowHover = colorTheme === 'pink' ? 'hover:shadow-[0_4px_25px_rgba(236,72,153,0.15)]' : 'hover:shadow-[0_4px_25px_rgba(34,211,238,0.15)]';
    const textIcon = colorTheme === 'pink' ? 'text-pink-400' : 'text-cyan-400';
    const bgBadge = colorTheme === 'pink' ? 'bg-pink-900/30 border-pink-800/50 text-pink-300' : 'bg-cyan-900/30 border-cyan-800/50 text-cyan-300';
    const gradientLine = colorTheme === 'pink' ? 'from-pink-500 via-purple-500 to-cyan-400' : 'from-cyan-400 via-blue-500 to-transparent';
    const textDate = colorTheme === 'pink' ? 'text-pink-400' : 'text-cyan-400';

    return (
      <div className={`bg-[#0b0e14] rounded-2xl p-5 border border-gray-800 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex flex-col h-full ${borderHover} ${shadowHover}`}>
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2.5 bg-gray-900 rounded-lg border border-gray-800 shrink-0">
            <IconComponent className={`text-2xl ${textIcon}`} />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-100 font-bold leading-snug text-[15px]">
              {typeof cert.title === 'string' ? cert.title : cert.title[language]}
            </h3>
            <p className="mt-2 flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-md border ${bgBadge}`}>
                {cert.hours}
              </span> 
              <span className="text-gray-500 text-[11px] font-medium uppercase tracking-wider">
                {typeof cert.type === 'string' ? (language === 'pt' ? cert.type : cert.type.replace('Curso', 'Course')) : cert.type[language]}
              </span>
            </p>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className={`h-[1px] w-full bg-gradient-to-r ${gradientLine} my-4 opacity-50`}></div>
        <div className="flex justify-between items-center text-xs">
          <span className={`font-bold tracking-wide ${textDate}`}>{cert.date.replace('Abr', t('Abr', 'Apr')).replace('Dez', t('Dez', 'Dec')).replace('Set', t('Set', 'Sep')).replace('Out', t('Out', 'Oct')).replace('Jun', t('Jun', 'Jun')).replace('Jan', t('Jan', 'Jan'))}</span>
          <span className="text-gray-500 font-medium">{cert.inst || 'Alura'}</span>
        </div>
      </div>
    );
  };

  return (
    <main className="w-full flex flex-col items-center min-h-screen bg-transparent text-white overflow-x-hidden relative pb-10">
      <FloatingNav navItems={navItems} />

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-100">
        <PrismaticBurst
          intensity={2}
          speed={0.5}
          animationType="rotate3d"
          colors={["#5227FF","#FF9FFC","#7cff67"]}
          distort={0}
          hoverDampness={0}
          rayCount={0}
        />
      </div>

      <div className="w-full max-w-7xl px-5 sm:px-10 pt-32 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white tracking-wide">
          {t('Tecnologias e', 'Technologies and')} <span className="text-cyan-400">{t('Certificados', 'Certificates')}</span>
        </h1>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          {t(
            'Uma lista detalhada de todos os cursos, trilhas e especializações concluídas, separadas pelas respectivas instituições de ensino e tecnologias.',
            'A detailed list of all completed courses, tracks, and specializations, separated by respective educational institutions and technologies.'
          )}
        </p>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-pink-500 tracking-wide">Cruzeiro do Sul Virtual</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-pink-500/50 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificadosCruzeiro.map((cert, index) => (
              <CertCard key={`cruzeiro-${index}`} cert={cert} colorTheme="pink" />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-bold text-cyan-400 tracking-wide">Alura</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-400/50 to-transparent"></div>
          </div>
          
          {categoriasUnicas.map((categoria) => (
            <div key={categoria} className="mb-14">
              <h3 className="text-xl font-semibold text-cyan-200 mb-6 border-b border-cyan-900/50 pb-2 inline-block">
                {categoria.replace('Dados', t('Dados', 'Data')).replace('Lógica', t('Lógica', 'Logic')).replace('Fundamentos', t('Fundamentos', 'Fundamentals'))}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificadosAlura
                  .filter(c => c.category === categoria)
                  .map((cert, index) => (
                    <CertCard key={`alura-${categoria}-${index}`} cert={cert} colorTheme="cyan" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
