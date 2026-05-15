import type { Metadata } from "next";

export const links = {
  sourceCode: "",
  ownerName: "Bernardo Alcantara",
  ownerEmail: "",
} as const;

export const siteConfig: Metadata = {
  title: `Portfólio | ${links.ownerName}`,
  description: "Desenvolvedor Full Stack especializado em automação de processos, análise de dados e criação de interfaces modernas e interativas.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "automação",
    "análise de dados",
    "python",
    "typescript",
    "react",
    "nextjs",
    "portfolio",
    "engenharia de software",
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://github.com/berga-tman",
  },
  icons: {
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://bernardoalcantara.dev",
    siteName: `Portfólio - ${links.ownerName}`,
    title: `Portfólio | ${links.ownerName}`,
    description: "Desenvolvedor Full Stack com foco em Python, TypeScript e Soluções de Automação.",
    images: [
      {
        url: "/typescript-study.png",
        width: 1200,
        height: 630,
        alt: `Portfólio - ${links.ownerName}`,
      },
    ],
  },
} as const;
