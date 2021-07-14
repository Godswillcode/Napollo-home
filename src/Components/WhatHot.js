import hotImage from "../Images/hot.jpg"

const WhatHot = () => {
    return (
        <div className="myContainer">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                <div>
                    <h2 className="title">What's Hot!</h2>
                     <div>
                         <h4>Albums</h4>
                         <h6><span>View All</span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeWinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></h6>
                     </div>
                </div>

                <img src={hotImage} alt="whats hot" />
             </div>
        </div>
    )
}

export default WhatHot
