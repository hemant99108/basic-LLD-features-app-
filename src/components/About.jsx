import { LANG } from "../utils/langConstant";

/* eslint-disable react/prop-types */
const About = ({lang}) => {

    const data=LANG[lang];
  return (
    <div className="m-5 p-5">
      <div className="m-2 p-2">
        <h1 className="text-2xl font-bold"> {data.title}</h1>
        <p>
         {data.desc}
        </p>
      </div>

      <div className="m-2 p-2">
        <h1 className="text-2xl font-bold"> {data.title2}</h1>
        <p>
         {data.desc}
        </p>
      </div>

      <div className="m-2 p-2">
        <h1 className="text-2xl font-bold"> {data.title3}</h1>
        <p>
         {data.desc}
        </p>
      </div>

      <div className="m-2 p-2">
        <h1 className="text-2xl font-bold"> {data.title4}</h1>
        <p>
         {data.desc}
        </p>
      </div>

    </div>
  );
};

export default About; 