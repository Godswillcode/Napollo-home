import logoW from "../Images/logo2.png"
import logo from "../Images/logo.png"

const Plan = () => {
    return (
        <div className="myContainer mt-20">
             <h2 className="title text-center">Choose Your Plan</h2>

             <div className="flex justify-center">
                 <div className="bg-primary py-5 px-10 border">
                     <div className="flex justify-center items-center p-2 rounded-full">
                     <img src={logoW} alt="logo"  className="rounded-full" className="w-28 h-28"/>
                     </div>

                     <div className="text-center text-white">
                         <h4 className="font-bold tracking-wider pb-1">Free</h4>
                         <p className="text-sm text-white">Enjoy unlimited online music</p>
                          <div className="flex justify-center mt-3">
                          <div className="bg-white w-12 h-1"></div>
                          </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}

export default Plan
