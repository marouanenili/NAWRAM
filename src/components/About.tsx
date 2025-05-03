import TerminalIntro from './TerminalIntro';

export default function About() {
    return (
        <section className="relative z-10 py-24 px-4 md:px-12 max-w-4xl mx-auto text-center">
            {/* Profile Photo */}
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-700 shadow-lg">
                <img
                    src="/images/photo.jpeg"
                    alt="Marouane NILI"
                    className="w-full h-full object-cover"
                />
            </div>

            <TerminalIntro />

            <div className="mt-8 text-slate-300 text-lg leading-relaxed text-left">
                <p className="mb-4">
                    I’m <strong className="text-white">Marouane NILI</strong>, a passionate and detail-oriented Big Data Engineer currently living in Lyon, France. I graduated from CPE Lyon with a strong foundation in computer science and data engineering.
                </p>
                <p className="mb-4">
                    Over the years, I’ve developed expertise in designing and deploying scalable Big Data solutions using technologies like Apache Spark, Kafka, Nifi, and distributed data architectures.
                </p>
                <p className="mb-4">
                    I am passionate about Tech in general and data in particular. I love building efficient data pipelines, enabling real-time analytics, and transforming massive data volumes into business insights. I’m constantly learning, exploring new tools and technologies, and staying at the forefront of innovation in the Tech ecosystem.
                </p>
                <p>
                    Whether it's ingesting terabytes of data, orchestrating complex ETL workflows, or creating mobile and web apps, I thrive on delivering clean, intelligent, and impactful data systems.
                </p>

                {/* Technologies Section */}
                <h3 className="text-white text-xl font-semibold mt-10 mb-4 text-center">Technologies I use</h3>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Apache Spark</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Nifi</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Hadoop</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Kafka</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Python</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Java</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">SQL</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Docker</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">GCP</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Git</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Ansible</span>
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-slate-200">Jenkins</span>
                </div>

                {/* Links Section */}
                <h3 className="text-white text-xl font-semibold mt-10 mb-4 text-center">Find me on</h3>
                <div className="flex justify-center gap-6 text-slate-200 text-sm">
                    <a href="https://github.com/marouanenili" target="_blank" className="hover:text-primary underline">GitHub</a>
                    <a href="https://www.linkedin.com/in/marouane-nili-1708381b1/" target="_blank" className="hover:text-primary underline">LinkedIn</a>
                    <a href="https://www.upwork.com/freelancers/~01be0588e5096fc59e" target="_blank" className="hover:text-primary underline">Upwork</a>
                </div>
            </div>
        </section>
    );
}
