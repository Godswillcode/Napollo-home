import expan from "../Images/expan.jpg"
import ex1 from "../Images/ex1.png"
import ex2 from "../Images/ex2.png"
import ex3 from "../Images/ex3.png"
import ex4 from "../Images/ex4.png"

const Expansion = () => {
  return (
    <div className="myContainer mt-44">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src={expan} alt="Expansion" className="h-2/3"/>

        {/* detail */}
        <div>
          <h2 className="title">Expansion Page</h2>
          <p className="text-lg font-medium md:pr-48">
            Discover artistes all around the world by their location via the
            expansion page. Also, get to know the top artistes in any location
            on the globe.
          </p>

          <div className="mt-10">
              <ChildComp number="01" image={ex1} title1="Lights Out" title2="ColdPlay" icon="#fff"/>
           
              <ChildComp number="02" image={ex2} title2="ColdPlay" icon="#fff"/>
              
              <ChildComp number="03" image={ex3}  title2="ColdPlay" icon="#fff"/>
              <ChildComp number="04" image={ex4}  title2="ColdPlay" icon="#fff"/>
          </div>
        </div>
      </div>
    </div>
  );
};


// Child component

const ChildComp = ({number, image, title1, title2, icon}) => {
    return(
        <div className="flex items-center mt-5">
            <h4 className="text-white pr-3">{number}</h4>
             <img src={image} alt="expansion" className="rounded-md mr-4"/>
             <div>
                  <span className="block text-neutral text-sm">{title1}</span>
                  <span className="text-secondary font-bold text-sm">{title2}</span>
             </div>
                 <div className="ml-20">
                 <svg className="w-7 h-7" fill={icon} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                 </div>
        </div>
    )
}

export default Expansion;
