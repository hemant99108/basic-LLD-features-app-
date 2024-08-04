
import { useState } from "react";
import AcccordionItem from "./AcccordionItem";
import { isCompositeComponentWithType } from "react-dom/test-utils";

const data=[
    {
        title:'1st accordion',
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias voluptatibus amet aliquam! Vel quas at itaque quasi totam consequatur, quos accusamus aliquid, in tempora nobis modi culpa voluptatem cum esse quam. Id, enim consequuntur asperiores corporis, beatae explicabo accusantium laudantium, vero libero nostrum dolore? Sapiente maiores a ducimus! Dicta?`
    },
    {
        title:'2nd accordion',
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias voluptatibus amet aliquam! Vel quas at itaque quasi totam consequatur, quos accusamus aliquid, in tempora nobis modi culpa voluptatem cum esse quam. Id, enim consequuntur asperiores corporis, beatae explicabo accusantium laudantium, vero libero nostrum dolore? Sapiente maiores a ducimus! Dicta?`
    },
    {
        title:'3rd accordion',
        body:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem molestias voluptatibus amet aliquam! Vel quas at itaque quasi totam consequatur, quos accusamus aliquid, in tempora nobis modi culpa voluptatem cum esse quam. Id, enim consequuntur asperiores corporis, beatae explicabo accusantium laudantium, vero libero nostrum dolore? Sapiente maiores a ducimus! Dicta?`
    }
];


const Accordion = () => {  
    const [openIndex,setOpenIndex]=useState(null);

  return (
    <div className="w-[50%] m-auto mt-6">
       {data.map((item,index)=>(
        <AcccordionItem key={index} 
        title={item.title} body={item.body}
         isOpen={index===openIndex ? true:false}      
         setIsOpen={()=>{
            index===openIndex ?setOpenIndex(null) : setOpenIndex(index);
         }}
          />
       ))}
    </div>
  )
}

export default Accordion
