import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import img1 from '../../../assets/FuturisticMic.png';

export default function Connect() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black flex justify-center px-6 py-10" dir={t('dir', { defaultValue: 'ltr' })}>
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6"
        >
          <div className="relative w-60 h-24 flex items-center justify-center my-16">
            <img src={img1} alt="AI Voice" />
          </div>

          <h3
            className="text-4xl md:text-3xl font-bold leading-tight"
            dangerouslySetInnerHTML={{ __html: t('connect.titleHTML') }}
          />

          <p className="text-gray-400 max-w-md">{t('connect.description')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-800/60 backdrop-blur-xl rounded-2xl shadow-2xl p-8 space-y-4 border border-white/5">
            <Input label={t('connect.form.fullName.label')} placeholder={t('connect.form.fullName.placeholder')} />
            <Input label={t('connect.form.company.label')} placeholder={t('connect.form.company.placeholder')} />
            <Input label={t('connect.form.workEmail.label')} placeholder={t('connect.form.workEmail.placeholder')} />
            <Input label={t('connect.form.phoneNumber.label')} placeholder={t('connect.form.phoneNumber.placeholder')} />

            <div className="space-y-1">
              <label className="text-sm text-gray-400">{t('connect.form.message.label')}</label>
              <textarea
                rows={4}
                placeholder={t('connect.form.message.placeholder')}
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <button className="w-full mt-4 rounded-full bg-white text-black font-semibold py-3 hover:opacity-90 transition">
              {t('connect.form.button')}
            </button>

            <p className="text-xs text-center text-gray-500">{t('connect.form.footer')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-gray-400">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
    </div>
  );
}
