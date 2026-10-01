import { SectionHeading } from "./SectionHeading"
import { TimelineItem } from "./TimelineItem"

export const ExperienceSection = () => {
    return (
        <section
            id="experience"
            className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
        >
            <SectionHeading
                title="Experience"
                subtitle="Where I have learned and worked."
            />
            <ol className="mt-8 space-y-8 border-l border-stone-200">
                <TimelineItem
                    period="2026 – Present"
                    title="BS Information Technology"
                    place="Cebu Institute of Technology – University"
                    description="Taking up web development, databases, and systems analysis."
                />
                <TimelineItem
                    period="2025"
                    title="Game Jam 2025"
                    place="IT Park, Cebu City"
                    description="My first ever game jam, where my team and I developed a game for the first time."
                />
                <TimelineItem
                    period="2022 – 2024"
                    title="Senior High School, ICT Strand"
                    place="Ormoc City Senior High School"
                    description="Built my first web page and got hooked."
                />
            </ol>
        </section>
    )
}