const blogPosts = [
    {
        title: 'Building a Real-Time Data Pipeline with Kafka & Spark',
        slug: 'real-time-pipeline-kafka-spark',
        excerpt: 'A guide to creating scalable streaming architectures using Apache Kafka and Spark Streaming.',
        date: '2024-04-01',
        content: `# Building a Real-Time Data Pipeline\n\nIn this article, we explore how to set up a real-time data pipeline using Kafka and Spark Streaming. We'll cover the following steps:\n\n- Kafka topic creation\n- Producer setup\n- Spark Streaming job\n- Data processing and storage`
    },
    {
        title: 'Data Lakehouse Architecture with Delta Lake',
        slug: 'lakehouse-delta-architecture',
        excerpt: 'Delta Lake bridges the gap between data lakes and data warehouses. Learn how to implement it.',
        date: '2024-03-20',
        content: `# Lakehouse with Delta Lake\n\nThis article introduces the Lakehouse paradigm and demonstrates how Delta Lake enables ACID transactions on data lakes, supporting both batch and streaming workloads.`
    }
];

export default blogPosts;