import {SectionHeading} from './SectionHeading.jsx'
import {Fact} from './Fact.jsx'

export const AboutSection = () => {
    return (
        <section
          id="about"
          className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
        >
            <SectionHeading className="text-2xl font-semibold tracking-tight"
                title="About me"
                subtitle="A little bit about me"
            />
            <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
                I grew up in Leyte and moved to Cebu City for college. I picked IT
                because I was interested in the field of technology and computers. So far my
                favorite part is the moment something finally runs.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <Fact label="Course" value="BS Information Technology" />
                <Fact label="Year level" value="Third year" />
                <Fact label="School" value="CIT-U" />
                <Fact label="Based in" value="Cebu City" />
            </dl>
        </section>
    )
}