import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
export function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    return (_jsx("div", { children: _jsxs("div", { className: "border border-gray-600 bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center", children: [_jsx("h1", { className: "text-3xl font-bold primary-color ml-4", children: "S. Patten" }), _jsxs("ul", { className: "hidden md:flex", children: [_jsx("li", { className: "p-5", children: _jsx("a", { href: "#about", children: "About" }) }), _jsx("li", { className: "p-5", children: _jsx("a", { href: "#contact", children: "Contact" }) })] }), _jsx("div", { onClick: handleNav, className: "block md:hidden", children: nav ? _jsx(AiOutlineClose, { size: 20 }) : _jsx(AiOutlineMenu, { size: 20 }) }), _jsxs("div", { className: nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500]' : 'fixed left-[-100%]', children: [_jsx("h1", { className: "text-3xl primary-color m-4", children: "S. Patten" }), _jsxs("ul", { className: "p-8 text-2xl", children: [_jsx("li", { className: "p-2", children: _jsx("a", { href: "#home", children: "Home" }) }), _jsx("li", { className: "p-2", children: _jsx("a", { href: "#about", children: "About" }) }), _jsx("li", { className: "p-2", children: _jsx("a", { href: "#work", children: "Work" }) }), _jsx("li", { className: "p-2", children: _jsx("a", { href: "#experience", children: "Experience" }) }), _jsx("li", { className: "p-2", children: _jsx("a", { href: "#contact", children: "Contact" }) })] })] })] }) }));
}
