import testImage from "../Images/testimony.png";

const Testimonial = () => {
  return (
    <div>
      <div className="myContainer mt-48 mb-10">
        <h2 className="title text-center">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-16">
        <TItems
          desc="This is the best app I've come across.
          was able to upscale my career in less
          than 10 weeks."
          name="Hanna Gosley"
          job="Pop Artiste"
          image={testImage}
        />

        <div className="">
          <TItems
            desc="Beign an artiste on Napollo has been a real game changer."
            name="Hanna Gosley"
            job="Pop Artiste"
            image={testImage}
          />
        </div>

        <div className="">
          <TItems
            desc="Napollo is such a great platform. I'm
          getting exposure and opportunities that"
            image={testImage}
            name="Hanna Gosley"
            job="Pop Artiste"
          />
        </div>
      </div>
    </div>
  );
};

// Testimonial items
const TItems = ({ desc, image, name, job }) => {
  return (
    <div className="">
      <div className="bg-secondary py-10 px-7 rounded-br-lg rounded-tl">
        <p>{desc}</p>
        <div className="text-right pr-10 pt-5 font-semibold tracking-wider text-sm">
          <h3 className="text-neutral">{name}</h3>
          <h4 className="text-primary">{job}</h4>
        </div>
      </div>
      <div className="flex justify-end -mt-8">
        <img src={image} alt="testimonials" className="rounded-full" />
      </div>
    </div>
  );
};

export default Testimonial;