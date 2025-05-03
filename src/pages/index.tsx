import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';
import DataStreamBackground from '@/components/DataStreamBackground';

export default function Home() {
    return (
        <div className="relative bg-slate-900 text-slate-100 font-sans min-h-screen overflow-hidden">
            <Head>
                <title>Marouane Nili – Big Data Engineer</title>
                <meta name="description" content="Welcome to the personal portfolio of Marouane Nili, Big Data Engineer." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="relative z-10">
                <DataStreamBackground />
                <About />
            </main>

        </div>
    );
}