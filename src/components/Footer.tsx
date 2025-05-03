export default function Footer() {
    return (
        <footer className="bg-slate-900 py-8 text-center text-slate-400 text-sm">
            <div className="max-w-4xl mx-auto px-4">
                <p>&copy; {new Date().getFullYear()} Marouane Nili. All rights reserved.</p>
                <p className="mt-2">
                    Built with Next.js & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
