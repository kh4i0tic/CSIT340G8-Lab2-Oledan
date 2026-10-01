import {NavLink} from './Navlink.jsx'

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#top" className="font-semibold">
                    Jillian Britney Q. Oledan
                </a>
                <div className="flex gap-6 text-sm text-stone-600">
                <NavLink href="#about" className="hover:text-stone-900"
                    label="About"
                />
                <NavLink href="#skills" className="hover:text-stone-900"
                    label="Skills"
                />
                <NavLink href="#projects" className="hover:text-stone-900"
                    label="Projects"
                />
                <NavLink href="#experience" className="hover:text-stone-900"
                    label="Experience"
                />
                <NavLink href="#contact" className="hover:text-stone-900"
                    label="Contact"
                />
                </div>
            </div>
        </nav>
    )
}