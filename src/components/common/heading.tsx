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
        <h2 className='text-center text-[64px] font-bold uppercase leading-[60px] text-[#fff]'>{subtitle}</h2>
      )}
      <h2 className='text-center text-[64px] font-bold uppercase leading-[60px] text-[#FFB800]'>{title}</h2>
    </main>
  )
}

export default Heading
