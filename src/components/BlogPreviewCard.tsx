import Link from 'next/link';

type BlogPreviewCardProps = {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
};
export default function BlogPreviewCard({ title, slug, excerpt, date }: BlogPreviewCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="block bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition">
        <div>
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <small>{date}</small>
        </div>
        </Link>
    );
}