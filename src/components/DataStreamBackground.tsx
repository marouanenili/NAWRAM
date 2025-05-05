import { useEffect, useRef } from 'react';

export default function DataStreamBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return; // ← sécurise l'accès à ctx

        let animationFrameId: number;
        const lines = new Array(400).fill(null).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            speed: 1 + Math.random() * 2,
            length: 10 + Math.random() * 30,
        }));

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2;

            lines.forEach((line) => {
                ctx.beginPath();
                ctx.moveTo(line.x, line.y);
                ctx.lineTo(line.x, line.y + line.length);
                ctx.stroke();

                line.y += line.speed;
                if (line.y > window.innerHeight) {
                    line.y = -line.length;
                    line.x = Math.random() * window.innerWidth;
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        resize();
        window.addEventListener('resize', resize);
        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none"
        />
    );
}
