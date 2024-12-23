import { useState, useEffect, useRef } from "react";
const Counter = ({ targetNumber, label , duration = 2000 }: any) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        let start = 0;
                        const increment = targetNumber / (duration / 10);

                        const interval = setInterval(() => {
                            start += increment;
                            if (start >= targetNumber) {
                                setCount(targetNumber);
                                clearInterval(interval);
                            } else {
                                setCount(Math.ceil(start));
                            }
                        }, 10);

                        observer.unobserve(entry.target); // Stop observing after triggering
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.disconnect();
            }
        };
    }, [targetNumber, duration]);

    return (
        <div ref={counterRef} className="text-center">
            <h2 className="sm:text-4xl text-lg font-bold text-darkColor">{count}+</h2>
            <p className="sm:text-lg text-small font-semibold text-mutedColor">{label}</p>
        </div>
    );
};
export { Counter };


const ScrollCounter = () => {
    return (
        <div className="w-full bg-relatedWhite  sm:px-12 rounder-lg px-2 ">
            <div className="flex justify-center gap-1 sm:gap-6 py-5 sm:py-8 sm:px-8 px-4  bg-lightColor rounded-lg">
                <div className="flex justify-center border border-darkColor  rounded-lg p-6 text-center w-1/3">
                    <Counter label="Products Sold" targetNumber={12000} />
                </div>
                <div className="flex justify-center border border-darkColor rounded-lg p-6 text-center w-1/3">
                    <Counter label="Happy Customers" targetNumber={5000} />
                </div>
                <div className=" flex justify-center  border border-darkColor rounded-lg p-6 text-center w-1/3">
                    <Counter label="Vendors" targetNumber={1500} />
                </div>
            </div>
        </div>
    );
};
export default ScrollCounter
