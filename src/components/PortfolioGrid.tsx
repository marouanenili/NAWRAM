import projects from '@/content/projects';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

export default function PortfolioGrid() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    );
}
