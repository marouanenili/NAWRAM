import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import blogPosts from '@/content/blog';

export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return <div className="text-white p-8">Loading...</div>;

    return (
        <div className="bg-slate-900 text-slate-100 font-sans min-h-screen">
            <Head>
                <title>{post.title} – Marouane Nili</title>
                <meta name="description" content={post.excerpt} />
            </Head>

            <main className="px-4 py-20 md:px-16 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
                <p className="text-slate-400 text-sm mb-8">{new Date(post.date).toDateString()}</p>
                <article className="prose prose-invert max-w-none">
                    {post.content.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </article>
            </main>

        </div>
    );
}
