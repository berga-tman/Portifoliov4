'use client';

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { language } = useLanguage();
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] font-bold text-white">
          {language === 'pt' ? 'Pronto para levar seus projetos ao' : 'Ready to take your projects to the'}{" "} 
          <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            {language === 'pt' ? 'próximo nível' : 'next level'}
          </span>?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          {language === 'pt' ? 'Entre em contato e vamos conversar sobre como posso agregar valor à sua empresa.' : 'Get in touch and let\'s talk about how I can add value to your company.'}
        </p>

        <Link
          href={`mailto:`}
          target="_blank"
          rel="noreferrer noopener"
          className="md:mt-10"
        >
          <MagicButton
            title={language === 'pt' ? 'Entrar em Contato' : 'Get in Touch'}
            icon={<FaLocationArrow />}
            position="right"
            asChild
          />
        </Link>
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            Bernardo Alcantara
          </span>{" "}
          {" "}
          
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
