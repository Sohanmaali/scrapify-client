import { useEffect } from 'react';
import { IoMdArrowRoundUp } from "react-icons/io";

const GreadiantButton = () => {
    return (
        <button className="greadiant-button" role={'button'}><span className="text">View All Category</span></button>
    )
}



const PrimaryButton = ({heading="View All"}) => {
    return (
        <button className="primary-button" role={'button'}><span className="text">{heading}</span></button>
    )
}




function GoOnTopButton() {
    useEffect(() => {
        const button: any = document.getElementById('backToTopButton');

        const handleScroll = () => {
            if (window.scrollY > 300) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-5 right-5 px-4 h-12 rounded-full cursor-pointer opacity-70 hidden bg-lightColor text-white 
                     border border-darkColor group hover:bg-darkColor hover:bg-opacity-0 transition duration-300 ease-in-out"
                id="backToTopButton"
            >
                <IoMdArrowRoundUp className='text-darkColor group-hover:text-white transition duration-300 ease-in-out' />
            </button>

        </div>
    );
}


export { GreadiantButton, PrimaryButton, GoOnTopButton }


