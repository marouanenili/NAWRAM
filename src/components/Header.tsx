import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white tracking-wide">NAWRAM</h1>
                <nav className="flex gap-8 text-white text-sm font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                </nav>
            </div>
        </header>
    );
}
