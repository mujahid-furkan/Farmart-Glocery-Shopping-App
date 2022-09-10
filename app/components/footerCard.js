
const FooterCard = ({img,title,subtitle}) => {
  return (
    <div className="flex items-center gap-5">
        <img 
        src={img}
        loading="lazy"
        className="w-10 h-10 object-contain"
        />
        <div>
            <h5 className="text-lg font-bold">{title}</h5>
            <p className="text-sm">{subtitle}</p>
        </div>
    </div>
  )
}

export default FooterCard