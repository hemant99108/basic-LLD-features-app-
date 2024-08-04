/* eslint-disable react/prop-types */

    
const MemeCard = ({data}) => {

    const {url,author}=data;

  return (
        
    <div className="p-5 m-5 border-2 border-black rounded-lg bg-gray-400">
       
        <img  className="h-64 w-64 " src={url} alt="img not found" />
        <p>{author}</p>
    </div>
  );
};

export default MemeCard;

