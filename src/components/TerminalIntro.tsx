import { motion } from "framer-motion"

export default function TerminalIntro({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black text-neon p-10 text-lg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      onAnimationComplete={() => setTimeout(onFinish, 3500)}
    >
      <p>$ Booting DevOps Portfolio...</p>
      <p>$ Loading Cloud Modules...</p>
      <p>$ AWS | Docker | Jenkins | CI/CD</p>
      <p>$ Access Granted ✔</p>
    </motion.div>
  )
}
