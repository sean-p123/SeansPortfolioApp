import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import seanImage from '../assets/img/seanImage.png';
import { TypeAnimation } from 'react-type-animation';
const SeanHero = () => {
    return (_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[100vh]  mx-auto just py-8 bg-black", children: [_jsx("div", { className: 'col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]', children: _jsx("img", { src: seanImage, alt: 'hero image' }) }), _jsxs("div", { className: 'col-span-2 px-5 my-auto', children: [_jsxs("h1", { className: 'text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold', children: [_jsx("span", { className: 'primary-color', children: "I'm a" }), " ", _jsx("br", {}), _jsx(TypeAnimation, { sequence: [
                                    "Software Eng.",
                                    1000,
                                    "Fullstack Dev",
                                    1000,
                                    "Webdesigner",
                                    1000,
                                    "Frontend Dev",
                                    1000,
                                    "Backend Dev",
                                    1000,
                                ], wrapper: 'span', speed: 50, repeat: Infinity })] }), _jsx("p", { className: 'text-white sm:text-lg my-6 lg:text-xl', children: "My name is Sean Patten and I have 2+ years experience in Fullstack development" }), _jsxs("div", { className: 'my-8', children: [_jsx("a", { href: '/', className: 'px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white', children: "Download CV" }), _jsx("a", { href: '/', className: 'px-6 py-3 w-full rounded-xl mr-4 border border-gray-400\r\n               hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none', children: "Contact" })] })] })] }));
};
export default SeanHero;
