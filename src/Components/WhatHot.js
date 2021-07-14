import hotImage from "../Images/hot.jpg"

const WhatHot = () => {
    return (
        <div className="myContainer">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0">
                <div>

                </div>

                <img src={hotImage} alt="whats hot" />
             </div>
        </div>
    )
}

export default WhatHot
