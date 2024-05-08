import { motion } from 'framer-motion'
interface IHeading {
  title: string
  subtitle?: string
  description?: string
  className?: string
}

const Heading = ({ title, subtitle, description, className }: IHeading) => {
  return (
    <main className={className}>
      {subtitle && (
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-center text-[28px] font-bold uppercase text-[#fff] lg:text-[64px] lg:leading-[60px]'
        >
          {subtitle}
        </motion.h2>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className='text-center text-[28px] font-bold uppercase text-[#FFB800] lg:text-[64px] lg:leading-[60px]'
      >
        {title}
      </motion.h2>
    </main>
  )
}

export default Heading
