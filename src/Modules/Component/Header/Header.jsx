import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import imgPhone from './../../../assets/iPhone 15 plus - Midnight.png';
import img1 from './../../../assets/Vector.png';
import img2 from './../../../assets/1.png';
import img3 from './../../../assets/10.png';
import img4 from './../../../assets/3.png';
import img5 from './../../../assets/4.png';
import img6 from './../../../assets/6.png';
import img7 from './../../../assets/Logo.png';

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
   <section className="relative bg-black text-white overflow-hidden min-h-screen md:min-h-0">
        <div className="absolute inset-0 flex justify-center items-end overflow-hidden">
          <div
           className="w-[200px] h-[350px] bg-blue-500/75 rounded-t-full blur-[70px] translate-y-1/2 md:w-[300px] md:h-[500px]"

          ></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 text-center">
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 mb-6 text-slate-400">
            {t('header.badge')}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight title_header">
            {t('header.title')}
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            {t('header.description')}
          </p>

          <button className="mt-8 px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
            {t('header.button_get_started')}
          </button>
        </div>

        <div
          className="
            absolute bottom-0 left-1/2 -translate-x-1/2
            z-10 flex justify-center
            md:relative md:bottom-auto md:left-auto md:translate-x-0
            md:mt-5
          "
        >
          <img
            src={imgPhone}
            alt="Phone"
            className="w-[180px] sm:w-[200px] md:w-[280px]"
          />
        </div>
      </section>

      <section>
        <div className="bg-black flex items-center justify-center p-8">
          <div className="max-w-5xl w-full">
            <div className="text-center mb-12">
              <p className="text-gray-600 text-sm md:text-base">
                {t('header.customers_text')}
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 max-w-4xl mx-auto">
                <img
                  src={img1 || "/placeholder.svg"}
                  className="w-32 opacity-60 hover:opacity-100 transition"
                  alt="Logo 1"
                />
                <img
                  src={img4 || "/placeholder.svg"}
                  className="w-32 opacity-60 hover:opacity-100 transition"
                  alt="Logo 4"
                />
                <img
                  src={img3 || "/placeholder.svg"}
                  className="w-32 opacity-60 hover:opacity-100 transition"
                  alt="Logo 3"
                />
                <img
                  src={img2 || "/placeholder.svg"}
                  className="w-32 opacity-60 hover:opacity-100 transition"
                  alt="Logo 2"
                />
                <img
                  src={img5 || "/placeholder.svg"}
                  className="w-32 opacity-60 hover:opacity-100 transition"
                  alt="Logo 5"
                />
                <img
                  src={img6 || "/placeholder.svg"}
                  className="w-32 opacity-60 hover:opacity-100 transition"
                  alt="Logo 6"
                />
                <img
                  src={img7 || "/placeholder.svg"}
                  className="w-32 opacity-60 hover:opacity-100 transition"
                  alt="Logo 7"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
