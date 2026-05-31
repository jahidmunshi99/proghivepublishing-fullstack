"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className="py-20 lg:py-15 overflow-hidden text-white scroll-mt-20"
    >
      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-5">
          <p className="section-tag">— Testimonials</p>
          <h2 className="section">What Our Clients Say</h2>
        </div>
        <Slider {...settings}>
          {/** Items-1 */}
          <div className="p-3">
            <div className="p-8 bg-white text-gray-800 rounded-xl shadow-sm border-t-4 border-rose-600 ">
              <div className="text-2xl text-yellow-500 mb-4">★★★★★</div>
              <p className="italic mb-6">
                “From editing to publishing, the process was smooth and
                stress-free. I felt supported every step of the way!”
              </p>
              <p className="font-bold text-lg">Emma Harrison</p>
            </div>
          </div>
          {/** Items-2 */}
          <div className="p-3">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-rose-600 text-gray-800">
              <div className="text-2xl text-yellow-500 mb-4">★★★★★</div>
              <p className="italic mb-6">
                “From editing to publishing, the process was smooth and
                stress-free. I felt supported every step of the way!”
              </p>
              <p className="font-bold text-lg">Emma Harrison</p>
            </div>
          </div>
          {/** Items-3 */}
          <div className="p-3">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-rose-600 text-gray-800">
              <div className="text-2xl text-yellow-500 mb-4">★★★★★</div>
              <p className="italic mb-6">
                “From editing to publishing, the process was smooth and
                stress-free. I felt supported every step of the way!”
              </p>
              <p className="font-bold text-lg">Emma Harrison</p>
            </div>
          </div>
          {/** Items-4 */}
          <div className="p-3">
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-rose-600 text-gray-800">
              <div className="text-2xl text-yellow-500 mb-4">★★★★★</div>
              <p className="italic mb-6">
                “From editing to publishing, the process was smooth and
                stress-free. I felt supported every step of the way!”
              </p>
              <p className="font-bold text-lg">Emma Harrison</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
