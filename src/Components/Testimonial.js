
const Testimonial = () => {
    return (
        <div>
            <div className="myContainer">
                 <h2 className="title">Testimonials</h2>
            </div>

              <Testimonial desc="This is the best app I've come across. was able to upscale my career in lessthan 10 weeks." name="Godswill hope" job="devloper"/>
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
