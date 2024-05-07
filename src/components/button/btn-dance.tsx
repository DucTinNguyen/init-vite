interface IBtnPlayDance {
  className?: string
}
const BtnPlayDance = ({ className }: IBtnPlayDance) => {
  return <button className={`${className} btn-dance px-3 font-bold uppercase text-[#203D0E]`}>play dance</button>
}

export default BtnPlayDance
