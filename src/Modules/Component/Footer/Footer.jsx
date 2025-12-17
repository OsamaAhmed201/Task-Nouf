import { useState } from "react";
import { Instagram, Facebook, Linkedin, X, ChevronDown } from "lucide-react";
import Logo from "../../../assets/Nimbus logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-gray-400 px-6 pt-12 py-5">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center gap-6 mb-10">
          <img src={Logo} className="w-20" alt="Nimbus logo" />
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="hidden md:grid grid-cols-4 gap-10">
          <FooterColumn
            title={t('footer.about.title')}
            links={t('footer.about.links', { returnObjects: true })}
          />
          <FooterColumn
            title={t('footer.resources.title')}
            links={t('footer.resources.links', { returnObjects: true })}
          />
          <FooterColumn
            title={t('footer.support.title')}
            links={t('footer.support.links', { returnObjects: true })}
          />
          <div>
            <h3 className="text-white font-medium mb-4">{t('footer.connect')}</h3>

            <div className="flex flex-col gap-3">
              <Social icon={<Instagram size={18} />} label={t('footer.social.instagram')} />
              <Social icon={<Facebook size={18} />} label={t('footer.social.facebook')} />
              <Social icon={<X size={18} />} label={t('footer.social.twitter')} />
              <Social icon={<Linkedin size={18} />} label={t('footer.social.linkedin')} />
            </div>
          </div>
        </div>

        <div className="md:hidden space-y-4">
          <MobileSection
            title={t('footer.about.title')}
            links={t('footer.about.links', { returnObjects: true })}
          />
          <MobileSection
            title={t('footer.resources.title')}
            links={t('footer.resources.links', { returnObjects: true })}
          />
          <MobileSection
            title={t('footer.support.title')}
            links={t('footer.support.links', { returnObjects: true })}
          />

          <div className="pt-4 border-t border-white/10">
            <h3 className="text-white font-medium mb-4">{t('footer.connect')}</h3>
            <div className="flex gap-6">
              <Social icon={<Facebook size={16} />} label={t('footer.social.facebook')} />
              <Social icon={<Instagram size={16} />} label={t('footer.social.instagram')} />
              <Social icon={<X size={16} />} label={t('footer.social.twitter')} />
              <Social icon={<Linkedin size={16} />} label={t('footer.social.linkedin')} />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">{t('footer.terms')}</a>
            <a href="#" className="hover:text-white transition">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition">{t('footer.security')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-white font-medium mb-4">{title}</h3>
      <ul className="space-y-3 text-sm">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-white transition">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileSection({ title, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 pb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-white font-medium"
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="mt-3 space-y-2 text-sm">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="block hover:text-white transition">{link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Social({ icon, label }) {
  return (
    <a
      href="#"
      className="flex items-center gap-2 text-sm hover:text-white transition"
      aria-label={label}
      title={label}
    >
      {icon}
      {label && <span>{label}</span>}
    </a>
  );
}
