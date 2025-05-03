import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import blogPosts from '@/content/blog';
import BlogPreviewCard from '@/components/BlogPreviewCard';

export default function BlogPage() {
    return (
        <div className="bg-slate-900 text-slate-100 font-sans min-h-screen">
            <Head>
                <title>Blog – Marouane Nili</title>
                <meta name="description" content="Articles and insights on Big Data engineering." />
            </Head>

            <main className="px-4 py-20 md:px-16 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
                <div className="space-y-8">
                    {blogPosts.map((post, index) => (
                        <BlogPreviewCard key={index} {...post} />
                    ))}
                </div>
            </main>

        </div>
    );
}