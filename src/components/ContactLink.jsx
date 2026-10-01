import {NavLink} from './Navlink.jsx'

export const ContactLink = ({label, href, text}) => {
    return (
        <li>
            <span className="inline-block w-24 text-sm text-stone-500">
            {label}
            </span>
            <NavLink
                href={href}
                className="font-medium hover:underline"

                label={text}
            />
        </li>
    )
}