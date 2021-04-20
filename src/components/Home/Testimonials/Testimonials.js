import React, { useState } from 'react';
import { useEffect } from 'react';
import wilson from '../../../images/Ellipse 1.png';
import ema from '../../../images/Ellipse 2.png';
import aliza from '../../../images/Ellipse 3.png';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


// const testimonialData = [
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique non eligendi quibusdam enim asperiores hic, debitis corporis culpa quis dolore perferendis saepe, repellat repudiandae doloribus dignissimos qui tenetur soluta!',
//         name: 'Wilson Henry',
//         from: 'California',
//         img: wilson
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique non eligendi quibusdam enim asperiores hic, debitis corporis culpa quis dolore perferendis saepe, repellat repudiandae doloribus dignissimos qui tenetur soluta!',
//         name: 'Ema Gomez',
//         from: 'California',
//         img: ema
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique non eligendi quibusdam enim asperiores hic, debitis corporis culpa quis dolore perferendis saepe, repellat repudiandae doloribus dignissimos qui tenetur soluta!',
//         name: 'Aliza Ferari',
//         from: 'California',
//         img: aliza
//     }
// ]

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
          .then((res) => res.json())
          .then((data) => setTestimonials(data));
      }, []);


    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header text-white text-center">
                    <h1>Testimonials</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-5 mt-5">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;