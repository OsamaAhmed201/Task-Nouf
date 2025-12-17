import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { FiCpu, FiUsers, FiZap, FiLock, FiGlobe, FiBarChart2 } from "react-icons/fi";
import './Features.css';

export default function Features() {
  const { t } = useTranslation();


  const icons = [FiCpu, FiUsers, FiZap, FiLock, FiGlobe, FiBarChart2];


  const features = t('features', { returnObjects: true });

  return (
    <section className="bg-black py-24 px-4 sm:px-6 lg:px-8 text-center ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-20 bg-gradient-to-b from-[#3B9EBF] to-[#3B9EBF]/30 bg-clip-text text-transparent">
          {t('features_title')}
        </h2>

        <div className="
          grid
          grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          gap-4 md:gap-6
          w-full md:w-9/12
          px-2 md:px-0
          m-auto
          cursor-pointer
        ">
          {features.map((feature, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="border border-gray-800 rounded-lg p-2 py-8 hover:border-gray-500 hover:shadow-lg hover:shadow-black/40 transition"
              >
                <div className="mb-6 flex justify-center">
                  <Icon
                    className="w-10 h-10 text-[#136d8b] opacity-100 hover:opacity-70 transition"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  <Trans
                    i18nKey={`features.${index}.desc`}
                    components={{ 1: <span className="font-semibold text-white" /> }}
                  />
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
