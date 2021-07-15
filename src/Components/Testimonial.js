
const Testimonial = () => {
    return (
        <div>
            <div className="myContainer">
                 <h2 className="title">Testimonials</h2>
            </div>

             <TItems />
        </div>
    )
}


// Testimonial items
const TItems = ({desc}) => {
    return (
        <div className="bg-secondary">
              <p>{desc}</p>
        </div>
    )
}

export default Testimonial
