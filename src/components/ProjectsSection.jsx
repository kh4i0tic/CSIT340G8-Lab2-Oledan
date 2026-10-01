import { SectionHeading } from "./SectionHeading"
import { ProjectCard } from "./ProjectCard"

export const ProjectsSection = () => {
    return (
        <section
            id="projects"
            className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16"
        >
            <SectionHeading 
                title="Projects" 
                subtitle="Things I have built." 
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <ProjectCard
                year="2026"
                title="About Me in React"
                description="My first React project, rebuilt from a plain HTML page."
                tech="React · Tailwind CSS"
                link="https://github.com/kh4i0tic/CSIT340-Lab1-Oledan"
            />
            <ProjectCard
                year="2026"
                title="CampusCatch"
                description="A mobile app that shows lost and found items around the school."
                tech="Kotlin · Firebase"
                link="https://github.com/kh4i0tic/CampusCatch"
            />
            <ProjectCard
                year="2026"
                title="Schematized"
                description="A desktop gamification app that lets users learn about MySQL using blocks."
                tech="Java · MySQL · JavaFX · Supabase"
                link="https://github.com/kh4i0tic/SCHEMATIZED_Group-Z"
            />
            <ProjectCard
                year="2025"
                title="gbemu"
                description="A personal project to learn about emulation by building a Game Boy emulator from scratch."
                tech="C++ · SFML"
                link="https://github.com/kh4i0tic/gbemu"
            />
            </div>
        </section>
    )
}