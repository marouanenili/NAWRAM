import { useEffect, useState } from 'react';

const commands = [
    '> Initializing Big Data pipelines...✔',
    '> Processing Terrabytes of data with Apache Spark...✔',
    '> Delivering actionable insights ✔',
    '> Saving and processing Terrabytes of data with Hadoop...✔'
];

export default function TerminalIntro() {
    const [currentLine, setCurrentLine] = useState(0);
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (currentLine >= commands.length) {
            setCurrentLine(0);}

        const line = commands[currentLine];
        let i = 0;
        const interval = setInterval(() => {
            if (i < line.length - 1) {
                setDisplayedText((prev) => prev + line[i]);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setDisplayedText('');
                    setCurrentLine((prev) => prev + 1);
                }, 1200);
            }
        }, 100);


        return () => clearInterval(interval);
    }, [currentLine]);

    return (
        <div className="bg-black text-green-400 font-mono text-md md:text-lg p-4 rounded-md shadow-md max-w-xl mx-auto">
            <p>{displayedText || "\u00a0"}</p>

        </div>
    );
}