import testImage from "../Images/testimony.png";

const Testimonial = () => {
  return (
    <div>
      <div className="myContainer mt-48 mb-10">
        <h2 className="title text-center">Testimonials</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-x-16">
        <div className="hidden lg:flex">
          <div>
            <div className="bg-secondary py-10 pr-7 rounded-br-lg rounded-tl">
              <p>
                This is the best app I've come across. was able to upscale my
                career in less than 10 weeks.
              </p>
              <div className="text-right pr-10 pt-5 font-semibold tracking-wider text-sm">
                <h3 className="text-neutral">Hanna Gosley</h3>
                <h4 className="text-primary">Pop Artiste</h4>
              </div>
            </div>
            <div className="flex justify-end -mt-8">
              <img
                src={testImage}
                alt="testimonials"
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-secondary py-10 px-7 rounded-br-lg rounded-tl mx-3">
            <p>Beign an artiste on Napollo has been a real game changer.</p>
            <div className="text-right pr-10 pt-5 font-semibold tracking-wider text-sm">
              <h3 className="text-neutral">Hanna Gosley</h3>
              <h4 className="text-primary">Pop Artiste</h4>
            </div>
          </div>
          <div className="flex justify-end -mt-8">
            <img src={testImage} alt="testimonials" className="rounded-full" />
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="bg-secondary py-16 px-14 rounded-br-lg rounded-tl">
            <p className="py-1">
              Beign an artiste on Napollo has been a real game changer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
