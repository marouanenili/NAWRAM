import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioGrid from '@/components/PortfolioGrid';

export default function PortfolioPage() {
    return (
        <div className="bg-slate-900 text-slate-100 font-sans min-h-screen">
            <Head>
                <title>Portfolio – Marouane Nili</title>
                <meta name="description" content="Big Data projects by Marouane Nili" />
            </Head>

            <main className="px-4 py-20 md:px-16 max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Selected Projects</h1>
                <PortfolioGrid />
            </main>

        </div>
    );
}