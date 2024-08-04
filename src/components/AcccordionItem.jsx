/* eslint-disable react/prop-types */



const AcccordionItem = ({title,body, isOpen,setIsOpen}) => {
   

  return (
    <div className="border border-black rounded-lg">
      <div className="font-bold p-3 bg-slate-300 flex justify-between cursor-pointer "
      onClick={()=>{
        setIsOpen((isOpen)=>!isOpen);
      }}>
        <span>{title}</span>
        <span>⬇️</span>
      </div>
      {isOpen &&  <div className="p-2">{body}</div>}
    </div>
  )
}

export default AcccordionItem
