
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import { Mic, Brain, ShoppingBag, HelpCircle, CheckCircle } from "lucide-react"
import imgLogo from "../../../assets/logoWorks.png"

export default function HowItWorks() {
  const { t } = useTranslation()

  const steps = t("steps", { returnObjects: true })

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-4xl md:text-4xl font-bold text-start mb-32 bg-gradient-to-b from-[#19719D] to-[#092837] bg-clip-text text-transparent">
          {t("howItWorks_title")}
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-[#19719D] to-[#092837]" />
          <div className="absolute left-1/2 top-0 w-3 h-3 -translate-x-1/2 bg-cyan-400 rounded-full" />

          {steps.map((step, index) => {
            const iconsMap = {
              1: Mic,
              2: Brain,
              3: () => <img src={imgLogo} alt="Logo" className="w-20 h-20 object-contain" />,
              4: ShoppingBag,
              5: HelpCircle,
              6: CheckCircle,
            }
            const Icon = iconsMap[step.number]
            const iconOnLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative flex items-start mb-12"
              >
                <div className="w-[45%] flex justify-end items-center">

                  {iconOnLeft && (
                    <div className="text-right pr-6 mt-2">
                      <div className="flex justify-end mb-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#19719D] to-[#092837] flex items-center justify-center text-xs font-bold text-black">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  )}
                  {!iconOnLeft && (
                    <div className="flex justify-end w-full pr-4 mt-2">
                      {typeof Icon === "function" ? (
                        <Icon />
                      ) : (
                        <div className="bg-black border-2 border-cyan-900 rounded-full w-12 h-12 flex items-center justify-center text-cyan-900">
                          <Icon size={20} />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="w-1/12 relative flex justify-center"></div>

                <div className="w-[45%] flex items-center">
                  {!iconOnLeft && (
                    <div className="text-left pl-6 mt-2">
                      <div className="flex mb-2">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#19719D] to-[#092837] flex items-center justify-center text-xs font-bold text-black">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                      <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  )}
                  {iconOnLeft && (
                    <div className="flex w-full pl-4 mt-2">
                      {typeof Icon === "function" ? (
                        <Icon />
                      ) : (
                        <div className="bg-black border-2 border-cyan-900 rounded-full w-12 h-12 flex items-center justify-center text-cyan-900">
                          <Icon size={20} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
