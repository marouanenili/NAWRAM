import Image from 'next/image';
import {forEachEntryModule} from "next/dist/build/webpack/utils";

export default function ProjectCard({ title, description, image, link , techno}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
        >
            <div className="relative w-full h-48">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                />
            </div>
            <div className="p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-300 text-sm">{description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {techno.map((tech, index) => (
                        <span key={index} className="bg-slate-700 px-3 py-1 rounded text-white">
          {tech}
        </span>
                    ))}
                </div>
            </div>


        </a>
    );
}
