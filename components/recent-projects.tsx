import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { FaPython, FaDatabase, FaGithub, FaFileExcel, FaJava } from "react-icons/fa";
import { SiStreamlit, SiTypescript } from "react-icons/si";

import { PinContainer } from "./ui/3d-pin";
import { useLanguage } from "@/context/LanguageContext";

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'python': return <FaPython className="text-[#3776AB] text-xl" />;
    case 'database': return <FaDatabase className="text-[#4479A1] text-xl" />;
    case 'github': return <FaGithub className="text-white text-xl" />;
    case 'streamlit': return <SiStreamlit className="text-[#FF4B4B] text-xl" />;
    case 'excel': return <FaFileExcel className="text-[#217346] text-xl" />;
    case 'typescript': return <SiTypescript className="text-[#3178C6] text-xl" />;
    case 'java': return <FaJava className="text-[#b07219] text-xl" />;
    default: return <FaGithub className="text-white text-xl" />;
  }
};

export const RecentProjects = () => {
  const { language } = useLanguage();
  return (
    <section id="projects" className="py-20">
      <h1 className="heading text-white">
        {language === 'pt' ? 'Meus' : 'My'}{" "} 
        <span className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
          {language === 'pt' ? 'Projetos' : 'Projects'}
        </span>
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-16 gap-x-12 justify-items-center p-4">
        {projects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="flex h-[32rem] w-[90vw] items-center justify-center sm:h-[35rem] sm:w-[390px] lg:min-h-[32.5rem] hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <PinContainer title={language === 'pt' ? "Ver Repositório" : "View Repository"} href={link}>
                <div className="relative mb-10 flex h-[25vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[30vh] sm:w-[390px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <Image
                      height={330}
                      width={552}
                      src="/bg.png"
                      alt="bg-img"
                    />
                  </div>

                  <Image
                    height={300}
                    width={464}
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10"
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title[language]}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal text-[#c1c2d3]">
                  {des[language]}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, i) => (
                      <div
                        key={icon}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-[#0b0e14] lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        {renderIcon(icon)}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    <Link
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex text-sm text-cyan-300 md:text-xs lg:text-base font-semibold tracking-wide hover:text-cyan-100 transition-colors"
                    >
                      {language === 'pt' ? 'Acessar Github' : 'Access Github'}
                    </Link>

                    <FaLocationArrow className="ms-3" color="#5ce1e6" />
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>
    </section>
  );
};
