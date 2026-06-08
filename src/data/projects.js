export const projectsData = [
  {
    id: 1,
    title: "RAG-Based Document Q&A Chatbot",
    description: "An intelligent chatbot allowing users to upload large PDF files and query them with semantic search, powered by vector embeddings and open-source LLMs.",
    tech: ["Python", "LangChain", "FAISS", "Hugging Face", "Streamlit"],
    categories: ["Generative AI", "NLP", "Full Stack Python"],
    image: `${import.meta.env.BASE_URL}images/rag_chatbot.png`,
    metrics: {
      accuracy: "98% Retrieval",
      responseTime: "Sub-3 sec",
      keyAchievement: "100+ page document support",
      vectorDb: "FAISS Vector Store"
    },
    features: [
      "PDF document parsing & tokenization",
      "Semantic similarity search via Hugging Face embeddings",
      "Retrieval-Augmented Generation (RAG) pipeline",
      "Interactive Streamlit user interface"
    ],
    github: "https://github.com/Santhosh339"
  },
  {
    id: 2,
    title: "Sentiment Analysis API",
    description: "A high-performance REST API classifying text sentiment (positive/negative/neutral) using a fine-tuned BERT transformer model.",
    tech: ["Python", "FastAPI", "BERT", "Transformers", "PyTorch"],
    categories: ["Machine Learning", "NLP", "Backend Development"],
    image: `${import.meta.env.BASE_URL}images/sentiment_analysis.png`,
    metrics: {
      accuracy: "91% Accuracy",
      responseTime: "150ms latency",
      keyAchievement: "FastAPI Production Deployment",
      vectorDb: "Hugging Face Hub"
    },
    features: [
      "RESTful API design with auto-generated Swagger UI",
      "BERT Transformer inference optimization",
      "Dockerized microservice implementation",
      "Comprehensive test coverage"
    ],
    github: "https://github.com/Santhosh339"
  },
  {
    id: 3,
    title: "AI Farming Assistant Chatbot",
    description: "Conversational AI system built to guide farmers on crop selection, soil treatment, pest control, and optimal harvesting schedules.",
    tech: ["Python", "NLP", "Transformers", "BERT", "Streamlit"],
    categories: ["NLP", "Full Stack Python", "Generative AI"],
    image: `${import.meta.env.BASE_URL}images/farming_assistant.png`,
    metrics: {
      accuracy: "93% Intent Match",
      responseTime: "400ms latency",
      keyAchievement: "Knowledge base integration",
      vectorDb: "Custom SQLite Index"
    },
    features: [
      "Natural language understanding for agricultural queries",
      "Context-aware recommendations based on regional inputs",
      "Crop disease symptom identification lookup",
      "Pesticide recommendation algorithm"
    ],
    github: "https://github.com/Santhosh339"
  },
  {
    id: 4,
    title: "IoT Predictive Maintenance System",
    description: "Machine learning system analyzing sensor data (vibrations, temperature, voltage) to predict mechanical equipment failure before it occurs.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Time Series"],
    categories: ["Machine Learning", "Full Stack Python"],
    image: `${import.meta.env.BASE_URL}images/predictive_maintenance.png`,
    metrics: {
      accuracy: "88% Failure Prediction",
      responseTime: "Real-time stream",
      keyAchievement: "Multi-sensor anomaly detection",
      vectorDb: "Time-series indexing"
    },
    features: [
      "Time-series sensor feature engineering",
      "Anomaly detection with Isolation Forest",
      "Predictive warning alerts based on threshold violations",
      "Dynamic dashboards visualizing sensor telemetry"
    ],
    github: "https://github.com/Santhosh339"
  },
  {
    id: 5,
    title: "Inventory Forecasting & Demand Planning",
    description: "Statistical and machine learning pipelines predicting seasonal demand curves for warehouse stock optimization.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Statsmodels", "NumPy"],
    categories: ["Machine Learning", "Backend Development"],
    image: `${import.meta.env.BASE_URL}images/inventory_forecasting.png`,
    metrics: {
      accuracy: "90% Forecast Accuracy",
      responseTime: "Batch processing",
      keyAchievement: "ARIMA & XGBoost comparison model",
      vectorDb: "PostgreSQL Database"
    },
    features: [
      "Seasonal trend decomposition and analysis",
      "Automated safety-stock inventory level recommendations",
      "Demand forecasting model using XGBoost & ARIMA",
      "Data preprocessing pipeline cleaning raw sales logs"
    ],
    github: "https://github.com/Santhosh339"
  },
  {
    id: 6,
    title: "EduQuiz Adaptive Learning Platform",
    description: "Web application adjusting quiz difficulty dynamically based on individual student accuracy and history.",
    tech: ["Python", "HTML", "CSS", "PostgreSQL", "FastAPI"],
    categories: ["Backend Development", "Full Stack Python"],
    image: `${import.meta.env.BASE_URL}images/eduquiz_platform.png`,
    metrics: {
      accuracy: "95% User Tracking",
      responseTime: "200ms API reload",
      keyAchievement: "Student progress analytics dashboards",
      vectorDb: "Relational Schema"
    },
    features: [
      "Dynamic questionnaire difficulty scaling algorithm",
      "Comprehensive backend schemas for tracking test submissions",
      "Rich student analytics dashboard for teachers",
      "Safe user authentication and profile controls"
    ],
    github: "https://github.com/Santhosh339"
  },
  {
    id: 7,
    title: "Smart Classroom Management System",
    description: "RESTful architecture for automated attendance, report generation, class scheduling, and student grade tracking.",
    tech: ["Python", "PostgreSQL", "REST APIs", "FastAPI"],
    categories: ["Backend Development"],
    image: `${import.meta.env.BASE_URL}images/classroom_management.png`,
    metrics: {
      accuracy: "99.5% Uptime",
      responseTime: "80ms endpoints",
      keyAchievement: "Automated report generation",
      vectorDb: "SQL Relational DB"
    },
    features: [
      "Scalable student database management",
      "PDF & CSV academic performance report export module",
      "RESTful endpoint routing with authentication validation",
      "Automated attendance logging system"
    ],
    github: "https://github.com/Santhosh339"
  },
  {
    id: 8,
    title: "Preventive Health Care Monitoring Platform",
    description: "An analytics platform tracking student BMI, heart rates, and exercise logging to flag health issues.",
    tech: ["Python", "HTML", "CSS", "Flask", "SQL"],
    categories: ["Full Stack Python"],
    image: `${import.meta.env.BASE_URL}images/healthcare_monitoring.png`,
    metrics: {
      accuracy: "Real-time calculations",
      responseTime: "100ms load",
      keyAchievement: "Alert notification triggers",
      vectorDb: "Local DB SQLite"
    },
    features: [
      "BMI calculators and trends trackers",
      "Automatic alert triggers when metrics exceed threshold ranges",
      "Healthy food recommendations tailored to metrics",
      "Lightweight interactive front-end dashboard"
    ],
    github: "https://github.com/Santhosh339"
  }
];
