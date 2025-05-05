const projects = [
    {
        title: 'DiabetyFaceWatch - Glucose Watchface for Wear OS',
        description: 'A custom watch face for Wear OS smartwatches that displays real-time glucose values from Abbott\'s FreeStyle Libre (via LibreView API), as well as insulin correction recommendations, time, date, and battery level. Emojis are used for intuitive display.',
        image: '/images/projects/facewatchimage.jpeg',
        link: 'https://github.com/marouanenili/LibreLinkWatchFace',
        techno: ["Java","Android","Restful API"]
    },
    {
        title: 'Ask My Fifa',
        description:
            'A custom chatbot developed for an Upwork client to answer questions based on official FIFA referee regulations. The app uses the GPT-3.5 API combined with Pinecone for vector-based semantic search, allowing the model to reference indexed regulation documents. The user interface was built with Streamlit. This tool was created before the ChatGPT "upload PDF" feature existed, which has since reduced the necessity of such dedicated solutions.',
        image: '/images/projects/streamlit_fifa.png',
        link: 'https://github.com/marouanenili/ask-my-fifa',
        techno: ["Python","Streamlit","Pinecone","OpenAi Api"]
    },
    {
        title: 'NAWRAM - this web app :)',
        description: 'My personal blog and portfolio site, built with Next.js and Tailwind CSS. This project is designed to showcase my Big Data engineering background, selected projects, blog articles, and professional presence.',
        image: '/images/Screenshot.png',
        link:'https://github.com/marouanenili/NAWRAM',
        techno: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }

];

export default projects;
