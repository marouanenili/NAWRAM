import projects from '@/content/projects';
import ProjectCard from './ProjectCard';

export default function PortfolioGrid() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
}