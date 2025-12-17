import './Pricing.css'
import Icon from '../../../assets/Icon.png'
import { HiMiniMicrophone } from 'react-icons/hi2';
import { FiActivity, FiTrendingUp } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();

  const features = t("pricing_features", { returnObjects: true });

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="text-white">
          <p className="text-4xl md:text-4xl font-bold text-start mb-16 bg-gradient-to-b from-[#19719D] to-[#092837] bg-clip-text text-transparent">
            {t("pricing_title")}
          </p>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            {t("pricing_heading")}
          </h1>

          <p className="text-gray-400 mb-6 max-w-md">
            {t("pricing_description")}
          </p>

          <p className="text-cyan-500 text-lg font-semibold mb-4">
            {t("pricing_price")}
          </p>

          <p className="text-gray-400 mb-6">
            {t("pricing_limit")}
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => {
              const icons = [<HiMiniMicrophone key={0} className="text-cyan-500 text-lg" />, <FiActivity key={1} className="text-cyan-500 text-lg" />, <FiTrendingUp key={2} className="text-cyan-500 text-lg" />];
              return (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  {icons[idx]}
                  {feature}
                </li>
              );
            })}
          </ul>

          <button className="text-white bg-gradient-to-b from-[#2db2f5] to-[#092837] px-14 py-2 rounded-full font-medium hover:bg-gray-200 transition">
            {t("pricing_button")}
          </button>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={Icon}
            alt="Pricing Graphic"
            className="max-w-md w-full"
          />
        </div>

      </div>
    </section>
  );
}
