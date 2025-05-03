import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DataStreamBackground from "@/components/DataStreamBackground";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DataStreamBackground />
            <div className="relative z-10 min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </>
    );
}
