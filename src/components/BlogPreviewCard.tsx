import Link from 'next/link';

export default function BlogPreviewCard({ title, slug, excerpt, date }) {
    return (
        <div className="bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Link href={`/blog/${slug}`} className="block">
                <h3 className="text-2xl font-semibold mb-1 text-white">{title}</h3>
                <p className="text-slate-400 text-sm mb-2">{new Date(date).toDateString()}</p>
                <p className="text-slate-300">{excerpt}</p>
            </Link>
        </div>
    );
}