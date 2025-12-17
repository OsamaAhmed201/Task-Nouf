import { useCallback, useEffect, useState } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

// Fallback FAQs to guarantee we always render a safe array.
const FALLBACK_FAQS = [
  {
    id: 'integration-time',
    question: 'How quickly can we integrate the voice agent?',
    answer:
      'You can plug it into your stack in minutes using the lightweight API with no heavy setup required.',
  },
  {
    id: 'languages',
    question: 'Does it support Arabic and English out of the box?',
    answer: 'Yes, it ships with bilingual support and handles dialect variations gracefully.',
  },
  {
    id: 'security',
    question: 'Is customer voice data handled securely?',
    answer: 'All audio and transcripts are encrypted in transit and at rest with enterprise-grade controls.',
  },
];

const Conversation = () => {
  const { t, i18n } = useTranslation();
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(0); // first question open by default
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadFaqs = useCallback(
    async (signal) => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/faqs.json', { signal });
        if (!response.ok) {
          throw new Error(`Unable to load FAQs (${response.status})`);
        }

        const payload = await response.json();
        if (signal?.aborted) return;

        const localizedFaqs =
          Array.isArray(payload) ?
            payload :
            payload?.[i18n.language] ??
            payload?.[i18n.resolvedLanguage] ??
            payload?.en ??
            payload;

        if (!Array.isArray(localizedFaqs)) {
          throw new Error('FAQs payload is not an array');
        }

        setFaqs(localizedFaqs);
      } catch (err) {
        if (signal?.aborted) return;

        const translationFaqs = t('faqs_ar', {
          returnObjects: true,
          defaultValue: [],
        });

        if (Array.isArray(translationFaqs) && translationFaqs.length > 0) {
          setFaqs(translationFaqs);
        } else {
          setFaqs(FALLBACK_FAQS);
          setError(err instanceof Error ? err.message : 'Unable to load FAQs.');
        }
      } finally {
        if (!signal?.aborted) {
          setLoading(false);
        }
      }
    },
    [i18n.language, i18n.resolvedLanguage, t]
  );

  useEffect(() => {
    const controller = new AbortController();
    loadFaqs(controller.signal);

    return () => controller.abort();
  }, [loadFaqs]);

  const toggleFaq = (id) => {
    setOpenIndex((current) => (current === id ? null : id));
  };

  const hasFaqs = Array.isArray(faqs) && faqs.length > 0;

  return (
    <section className="min-h-screen bg-black px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 bg-gradient-to-b from-[#19719D] to-[#092837] bg-clip-text text-start text-4xl font-bold text-transparent md:text-4xl">
          FAQ’s
        </h2>

        {loading && (
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white">
            {t('faqs_loading', 'Loading FAQs…')}
          </div>
        )}

        {!loading && error && (
          <div className="mb-6 flex items-start justify-between gap-4 rounded-xl border border-red-300/40 bg-red-900/20 px-4 py-3 text-sm text-red-100">
            <p className="flex-1">
              {t('faqs_error', 'Unable to load FAQs right now. Showing fallback content.')}
              {' '}
              {error}
            </p>
            <button
              type="button"
              onClick={() => loadFaqs()}
              className="rounded-lg bg-red-500 px-3 py-1.5 text-xs font-semibold text-white shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 focus:ring-offset-black"
            >
              {t('faqs_retry', 'Retry')}
            </button>
          </div>
        )}

        {!loading && !hasFaqs && (
          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-white">
            {t('faqs_empty', 'No FAQs available yet. Please check back soon.')}
          </div>
        )}

        {hasFaqs && (
          <div className="space-y-6">
            {faqs.map((item, index) => {
              const itemId = item.id ?? item.question ?? index;
              const isOpen = openIndex === index;

              return (
                <div
                  key={itemId}
                  className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-black/60 p-6 transition"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${itemId}`}
                  >
                    <span className={`text-sm md:text-base font-medium ${isOpen ? 'text-cyan-400' : 'text-white'}`}>
                      {item.question}
                    </span>

                    <span className="text-xl text-cyan-400">
                      {isOpen ? <HiMinus /> : <HiPlus />}
                    </span>
                  </button>

                  {isOpen && item.answer && (
                    <p
                      id={`faq-panel-${itemId}`}
                      className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-400"
                    >
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Conversation;
