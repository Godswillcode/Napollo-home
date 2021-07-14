import hotImage from "../Images/hot.jpg"
import album1 from "../Images/item1.png"
import album2 from "../Images/item2.png"
import album3 from "../Images/item3.png"

const WhatHot = () => {
    return (
        <div className="myContainer">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                <div>
                    <h2 className="title">What's Hot!</h2>
                     <div className="flex justify-between mb-2">
                         <h4 className="text-white font-medium">Albums</h4>
                         <h6 className="flex items-center"><span className="text-neutral text-sm pr-2">View All</span><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></h6>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                         <div>
                             <img src={album1} alt="album" className="rounded-md"/>
                                <div className="mt-2 flex justify-between text-sm">
                                    <div>
                                        <span className="block text-neutral">Death Bed</span>
                                        <span className="text-primary">Powerful </span>
                                    </div>
                                    <div>
                                        <span><svg className="w-6 h-6 text-neutral" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></span>
                                        <span className="block text-neutral">1.3k</span>
                                    </div>
                                </div>
                         </div>
                     </div>
                </div>

                <img src={hotImage} alt="whats hot" />
             </div>
        </div>
    )
}

export default WhatHot
