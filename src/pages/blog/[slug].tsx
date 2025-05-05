import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

interface BlogPostProps {
    source: MDXRemoteSerializeResult;
    frontMatter: {
        title: string;
        date: string;
        excerpt?: string;
    };
}

export default function BlogPost({ source, frontMatter }: BlogPostProps) {
    return (
        <article className="prose prose-invert max-w-5xl mx-auto py-20 px-4">
            <h1>{frontMatter.title}</h1>
            <p className="text-slate-400 text-sm mb-4">{frontMatter.date}</p>
            <MDXRemote {...source} />
        </article>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const blogDir = path.join(process.cwd(), 'src/content/blog');
    const filenames = fs.readdirSync(blogDir);

    const paths = filenames.map((name) => ({
        params: { slug: name.replace(/\.mdx$/, '') },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');

    const { content, data } = matter(source);
    const mdxSource = await serialize(content);

    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};
