import { useState, useEffect } from "react";
import rev1 from '../assets/business-concept-smiling-thoughtful-handsome-man-standing-white-isolated-background-touching-his-chin-with-hand.jpg';

const reviews = [
    { id: 1, content: "Review 1" },
    { id: 2, content: "Review 2" },
    { id: 3, content: "Review 3" },
    { id: 4, content: "Review 4" },
    { id: 5, content: "Review 5" },
    { id: 6, content: "Review 6" },
    // Add more reviews if needed
];

const ReviewsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const reviewsPerSlide = 3; // Number of reviews per slide
    const totalSlides = Math.ceil(reviews.length / reviewsPerSlide); // Total number of slides

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [totalSlides]);

    // Get reviews for the current slide
    const displayedReviews = reviews.slice(currentSlide * reviewsPerSlide, currentSlide * reviewsPerSlide + reviewsPerSlide);

    return (
        <div className="relative mx-auto mt-10 overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`, width: `${totalSlides * 100}%` }}
            >
                {reviews.map((review) => (
                    <div key={review.id} className="flex-shrink-0 w-full md:w-1/3 p-4">
                        <div className="bg-gray-100 h-auto text-center p-5 rounded-xl flex flex-col items-center justify-center">
                            <img className="w-32 h-32 rounded-full  m-auto" src={rev1} alt="Review" />
                            <p className="mt-2 tracking-wide">Impress with their result of services.Building success has a proven track record of delivering effective soluiton on businesses.Our experience with building success has been outstanding.</p>
                            <p className="font-semibold mt-4">Michael Jhonson, Business owner</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full mx-1 ${currentSlide === index ? 'bg-blue-500' : 'bg-gray-400'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsCarousel;
