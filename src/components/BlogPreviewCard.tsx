import Link from 'next/link';

type BlogPreviewCardProps = {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
};
export default function BlogPreviewCard({ title, slug, excerpt, date }: BlogPreviewCardProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{excerpt}</p>
            <small>{date}</small>
            <Link href={`/blog/${slug}`}>Lire l'article</Link>
        </div>
    );
}