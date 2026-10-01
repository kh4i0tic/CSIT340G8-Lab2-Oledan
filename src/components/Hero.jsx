import {NavLink} from './Navlink.jsx'

export const Header = () => {
    return (
        <header
            id="top"
            className="max-w-4xl mx-auto px-6 pt-20 pb-16 scroll-mt-16"
        >
            <p className="text-sm font-medium text-stone-500">Hi, I'm</p>
            <h1 className="mt-2 text-5xl font-semibold tracking-tight">
                Jillian Britney Q. Oledan
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">
                A third year IT student who builds apps for fun.
            </p>
            <div className="mt-8 flex gap-3">
            <NavLink
                href="#projects"
                className="rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-stone-700"
            
                label="See my projects"
            />
            <NavLink
                href="#contact"
                className="rounded-lg border border-stone-300 px-5 py-2.5 text-sm font-medium hover:bg-stone-50"

                label="Contact me"
            />
            
            </div>
        </header>
    )
}