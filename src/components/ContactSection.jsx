import {ContactLink} from './ContactLink.jsx'
import { SectionHeading } from './SectionHeading.jsx'

export const ContactSection = () => {
    return (
        <section
          id="contact"
          className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
        >
            <SectionHeading
                title="Contact"
                subtitle="Say hi."
            />
            <ul className="mt-8 space-y-3">
                <ContactLink
                    label="Email"
                    href="mailto:jillianbritney.oledan@cit.edu"
                    text="jillianbritney.oledan@cit.edu"
                />
                <ContactLink
                    label="GitHub"
                    href="https://github.com/Jillian-Oledan"
                    text="github.com/Jillian-Oledan"
                />
                <ContactLink
                    label="LinkedIn"
                    href="https://linkedin.com/in/jillianbritneyoledan"
                    text="linkedin.com/in/jillianbritneyoledan"
                />
            </ul>
        </section>
    )
}