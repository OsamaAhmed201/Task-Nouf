import { ShoppingBag, Zap, Smile, Cable, BarChart3 } from "lucide-react";
import img1 from "../../../assets/logoWorks.png";
import { useTranslation, Trans } from 'react-i18next';

export default function Benefits() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="flex ">
          <span>
            <img src={img1} className="mt-1" alt="Nouf" />
          </span>
          <span className="text-4xl md:text-4xl font-bold text-start mb-16 bg-gradient-to-b from-[#19719D] to-[#092837] bg-clip-text text-transparent">
            {t('benefits_title')}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 cursor-pointer">
          <div className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur">
            <ShoppingBag className="w-8 h-8 text-cyan-800 mb-6" />
            <h4 className="text-xl font-semibold mb-4 bg-gradient-to-b from-[#19719D] to-[#092837] bg-clip-text text-transparent">
              <Trans i18nKey="benefits.conversion.title">
                Higher <span className="text-white">Conversion Rates</span>
              </Trans>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('benefits.conversion.desc')}
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur">
            <Zap className="w-8 h-8 text-cyan-800 mb-6" />
            <h4 className="text-xl font-semibold mb-4 bg-gradient-to-b from-[#19719D] to-[#092837] bg-clip-text text-transparent">
              <Trans i18nKey="benefits.discovery.title">
                Faster <span className="text-white">Product Discovery</span>
              </Trans>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('benefits.discovery.desc')}
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur">
            <Smile className="w-8 h-8 text-cyan-800 mb-6" />
            <h4 className="text-xl font-semibold mb-4 bg-gradient-to-b from-[#19719D] to-[#092837] bg-clip-text text-transparent">
              <Trans i18nKey="benefits.experience.title">
                Better <span className="text-white">User Experience</span>
              </Trans>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('benefits.experience.desc')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto cursor-pointer">
          <div className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur">
            <Cable className="w-8 h-8 text-cyan-800 mb-6" />
            <h4 className="text-xl font-semibold mb-4 bg-gradient-to-b from-[#19719D] to-[#092837] bg-clip-text text-transparent">
              <Trans i18nKey="benefits.integration.title">
                Plug-Play <span className="text-white">Integration</span>
              </Trans>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('benefits.integration.desc')}
            </p>
          </div>

          <div className="border border-gray-800 rounded-2xl p-8 bg-black/50 backdrop-blur">
            <BarChart3 className="w-8 h-8 text-cyan-800 mb-6" />
            <h4 className="text-xl font-semibold mb-4 bg-gradient-to-b from-[#19719D] to-[#092837] bg-clip-text text-transparent">
              <Trans i18nKey="benefits.insights.title">
                Smart <span className="text-white">Insights</span>
              </Trans>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('benefits.insights.desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
