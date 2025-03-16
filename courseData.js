const courseData = {
    "Web-Development": [
        {id: "WD1", category: "Web-Development", img: "courseBg.png", title: "Comprehensive web development Guide: Learn web development", price: "499", details: "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps", Rating: "0", instructor: "John Doe", tag: "Full-Stack"},
        {id: "WD2", category: "Web-Development", img: "courseBg.png", title: "The Complete Full-Stack Web Development Bootcamp", price: "599", details: "With 10 Hours of React added. Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!", Rating: "0", instructor: "Jane Smith", tag: "Full-Stack"},
        {id: "WD3", category: "Web-Development", img: "courseBg.png", title: "Web Development Masterclass - Online Certification Course", price: "399", details: "Cloud Computing | Web Apps | Linux | Web Servers | DBMS | LAMP Stack | HTML | CSS | JavaScript | PHP | + More", Rating: "0", instructor: "David Johnson", tag: "Web Apps"},
        {id: "WD4", category: "Web-Development", img: "courseBg.png", title: "The Complete Web Developer Course 3.0", price: "499", details: "Learn Web Development in 2025! Build apps, website, projects using HTML, CSS, Javascript, PHP, Python, MySQL & more!", Rating: "0", instructor: "Emily Brown", tag: "Web Dev"},
        {id: "WD5", category: "Web-Development", img: "courseBg.png", title: "Internet and Web Development Fundamentals", price: "499", details: "Learn how the Internet Works and Setup a Testing & Production Web Server", Rating: "0", instructor: "Michael Lee", tag: "Networking"},
        {id: "WD6", category: "Web-Development", img: "courseBg.png", title: "The Complete PHP Full Stack Web Developer Bootcamp", price: "599", details: "Learn to build websites with HTML , CSS , JAVASCRIPT , Bootstrap , PHP , MySQL , WordPress , OOP & more!", Rating: "0", instructor: "Sophia Martinez", tag: "Full-Stack"},
    ],
    
    "App-Development": [
        {id: "AD1", category: "App-Development", img: "courseBg.png", title: "The Complete Android 14 & Kotlin Development Masterclass", price: "699", details: "Learn Android 14 App Development From Beginner to Advanced Developer. Build Apps like Trello, 7Min Workout, Weather App", Rating: "0", instructor: "Robert Wilson", tag: "Android"},
        {id: "AD2", category: "App-Development", img: "courseBg.png", title: "Android App Development in 34 Hours : MobDevOps+ Android 15", price: "599", details: "You don't need 34+hours for learning kotlin! START !Learn Kotlin in 34 Hours and write your own applications - Android 15", Rating: "0", instructor: "Olivia Taylor", tag: "Kotlin"},
        {id: "AD3", category: "App-Development", img: "courseBg.png", title: "Android Java Masterclass - Become an App Developer", price: "799", details: "Improve your career options by learning Android app Development. Master Android Studio and build your first app today", Rating: "0", instructor: "Liam Harris", tag: "Java"},
        {id: "AD4", category: "App-Development", img: "courseBg.png", title: "Android App Development Masterclass using Kotlin", price: "499", details: "Learn Kotlin Android App Development And Become an Android Developer. Incl. Kotlin Tutorial and Android Tutorial Videos", Rating: "0", instructor: "Emma White", tag: "Kotlin"},
        {id: "AD5", category: "App-Development", img: "courseBg.png", title: "The Complete Android & Kotlin App Development A-Z Bootcamp", price: "599", details: "Building Android Applications using Kotlin Even without Any Prior Programming knowledge", Rating: "0", instructor: "Noah Allen", tag: "Android"},
        {id: "AD6", category: "App-Development", img: "courseBg.png", title: "Android App Development Bootcamp - Beginner to Pro", price: "599", details: "Master Android Development - Learn Java AND Kotlin - Jetpack Room Database - MVVM - Fragments - Google Tasks clone", Rating: "0", instructor: "Ava Scott", tag: "Mobile Dev"},
    ],

    "Artificial Intelligence": [
        {id: "AI1", category: "Artificial Intelligence", img: "courseBg.png", title: "Artificial Intelligence A-Z: Learn AI from Scratch", price: "799", details: "Master AI concepts including Neural Networks, Deep Learning, NLP, Reinforcement Learning & Computer Vision", Rating: "0", instructor: "William Moore", tag: "AI"},
        {id: "AI2", category: "Artificial Intelligence", img: "courseBg.png", title: "AI for Everyone: Mastering the Basics of AI", price: "499", details: "Understand AI fundamentals, Ethics, Business Applications & AI-driven Decision Making", Rating: "0", instructor: "Isabella Thomas", tag: "AI Basics"},
        {id: "AI3", category: "Artificial Intelligence", img: "courseBg.png", title: "Reinforcement Learning A-Z: Hands-on Projects", price: "599", details: "Master Reinforcement Learning with Python, OpenAI Gym, Deep Q-Learning & Policy Gradients", Rating: "0", instructor: "James Anderson", tag: "Reinforcement Learning"},
        {id: "AI4", category: "Artificial Intelligence", img: "courseBg.png", title: "Deep Learning and Neural Networks Masterclass", price: "899", details: "Master Deep Learning using TensorFlow, CNNs, RNNs, GANs, AutoEncoders, and more!", Rating: "0", instructor: "Sophia Clark", tag: "Deep Learning"},
        {id: "AI5", category: "Artificial Intelligence", img: "courseBg.png", title: "Computer Vision with OpenCV and Deep Learning", price: "599", details: "Master Computer Vision with OpenCV, YOLO, TensorFlow, and PyTorch", Rating: "0", instructor: "Daniel Martinez", tag: "Computer Vision"},
        {id: "AI6", category: "Artificial Intelligence", img: "courseBg.png", title: "AI-Powered Chatbots and Natural Language Processing", price: "699", details: "Build AI chatbots with NLP, Rasa, Dialogflow, and Python", Rating: "0", instructor: "Madison Turner", tag: "NLP"},
    ],

    "Machine Learning": [
        {id: "ML1", category: "Machine Learning", img: "courseBg.png", title: "Machine Learning Masterclass with Python & R", price: "699", details: "Learn Machine Learning & Data Science with Python & R. Hands-on Projects with TensorFlow, Scikit-Learn & More", Rating: "0", instructor: "Charlotte Martinez", tag: "Machine Learning"},
        {id: "ML2", category: "Machine Learning", img: "courseBg.png", title: "Deep Learning Specialization - Neural Networks & TensorFlow", price: "899", details: "Master Deep Learning using TensorFlow, CNNs, RNNs, GANs, AutoEncoders, and more!", Rating: "0", instructor: "Ethan Taylor", tag: "Deep Learning"},
        {id: "ML3", category: "Machine Learning", img: "courseBg.png", title: "Python for Machine Learning & Data Science", price: "599", details: "Master Python, Pandas, Numpy, Matplotlib, and Scikit-Learn for ML and AI", Rating: "0", instructor: "Aiden Walker", tag: "Python ML"},
        {id: "ML4", category: "Machine Learning", img: "courseBg.png", title: "Advanced Machine Learning with Scikit-Learn", price: "499", details: "Master Supervised and Unsupervised ML models with Scikit-Learn", Rating: "0", instructor: "Chloe Young", tag: "Scikit-Learn"},
        {id: "ML5", category: "Machine Learning", img: "courseBg.png", title: "Natural Language Processing with Python", price: "799", details: "Master NLP techniques, chatbots, and text processing with Python", Rating: "0", instructor: "Lucas Hall", tag: "NLP"},
        {id: "ML6", category: "Machine Learning", img: "courseBg.png", title: "AI & Machine Learning for Business Decision Making", price: "599", details: "Learn ML applications in business, marketing, and finance", Rating: "0", instructor: "Ella Adams", tag: "Business ML"},
    ],

    "Cybersecurity": [
        {id: "CS1", category: "Cybersecurity", img: "courseBg.png", title: "The Complete Cyber Security Course: Hackers Exposed!", price: "799", details: "Learn about cyber threats, penetration testing, malware analysis, and network security fundamentals", Rating: "0", instructor: "Mark Wilson", tag: "Ethical Hacking"},
        {id: "CS2", category: "Cybersecurity", img: "courseBg.png", title: "Cyber Security: Network Fundamentals & Encryption", price: "699", details: "Master Network Security, Cryptography, Encryption Techniques, and Cyber Threats", Rating: "0", instructor: "Jessica Taylor", tag: "Networking"},
        {id: "CS3", category: "Cybersecurity", img: "courseBg.png", title: "Certified Ethical Hacker (CEH) Masterclass", price: "999", details: "Master Ethical Hacking, Penetration Testing, and Cybersecurity Defense Strategies", Rating: "0", instructor: "Ryan Anderson", tag: "Ethical Hacking"},
        {id: "CS4", category: "Cybersecurity", img: "courseBg.png", title: "Cyber Security Awareness Training", price: "499", details: "Learn Cybersecurity Best Practices for Individuals and Organizations", Rating: "0", instructor: "Laura Scott", tag: "Security Awareness"},
        {id: "CS5", category: "Cybersecurity", img: "courseBg.png", title: "Web Application Security: Ethical Hacking", price: "599", details: "Master Web Security, SQL Injection, XSS, CSRF, and more", Rating: "0", instructor: "Daniel King", tag: "Web Security"},
        {id: "CS6", category: "Cybersecurity", img: "courseBg.png", title: "Practical Cyber Security & Incident Response", price: "699", details: "Learn Cyber Forensics, Security Monitoring, and Incident Response", Rating: "0", instructor: "Samantha Lewis", tag: "Forensics"},
    ],

    "Data Science": [
        {id: "DS1", category: "Data Science", img: "courseBg.png", title: "Data Science and Machine Learning Bootcamp with Python", price: "899", details: "Master Python, Data Analysis, Visualization, and ML with Pandas, NumPy, and Scikit-Learn", Rating: "0", instructor: "Henry Walker", tag: "Data Science"},
        {id: "DS2", category: "Data Science", img: "courseBg.png", title: "The Data Science Course 2025: Complete Data Science Bootcamp", price: "799", details: "Learn statistics, SQL, Python, Machine Learning & Business Intelligence", Rating: "0", instructor: "Natalie Young", tag: "Data Analytics"},
        {id: "DS3", category: "Data Science", img: "courseBg.png", title: "Python for Data Science and Data Analysis", price: "599", details: "Master Python libraries like Pandas, NumPy, and Matplotlib for Data Science", Rating: "0", instructor: "Ethan Clark", tag: "Python"},
        {id: "DS4", category: "Data Science", img: "courseBg.png", title: "SQL for Data Science: Beginner to Advanced", price: "499", details: "Learn SQL from scratch and apply it to Data Science and Business Analytics", Rating: "0", instructor: "Mia Adams", tag: "SQL"},
        {id: "DS5", category: "Data Science", img: "courseBg.png", title: "Big Data Analytics with Hadoop and Spark", price: "799", details: "Master Big Data Processing with Apache Hadoop, Spark, and Cloud Technologies", Rating: "0", instructor: "Lucas Harris", tag: "Big Data"},
        {id: "DS6", category: "Data Science", img: "courseBg.png", title: "AI & Data Science for Business Professionals", price: "599", details: "Understand Data Science Applications in Marketing, Finance, and E-commerce", Rating: "0", instructor: "Olivia White", tag: "Business Analytics"},
    ],
};

// const courseData = {
//     "Web-Development": [
//         {img: "courseBg.png", title: "Comprehensive web development Guide: Learn web development", price: "499", details: "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps", Rating: "0"},
//         {img: "courseBg.png", title: "The Complete Full-Stack Web Development Bootcamp", price: "599", details: "With 10 Hours of React added. Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!", Rating: "0"},
//         {img: "courseBg.png", title: "Web Development Masterclass - Online Certification Course", price: "399", details: "Cloud Computing | Web Apps | Linux | Web Servers | DBMS | LAMP Stack | HTML | CSS | JavaScript | PHP | + More", Rating: "0"},
//         {img: "courseBg.png", title: "The Complete Web Developer Course 3.0", price: "499", details: "Learn Web Development in 2025! Build apps, website, projects using HTML, CSS, Javascript, PHP, Python, MySQL & more!", Rating: "0"},
//         {img: "courseBg.png", title: "Internet and Web Development Fundamentals", price: "499", details: "Learn how the Internet Works and Setup a Testing & Production Web Server", Rating: "0"},
//         {img: "courseBg.png", title: "The Complete PHP Full Stack Web Developer Bootcamp", price: "599", details: "Learn to build websites with HTML , CSS , JAVASCRIPT , Bootstrap , PHP , MySQL , WordPress , OOP & more!", Rating: "0"},
//     ],
    
//     "App-Development": [
//         {img: "courseBg.png", title: "The Complete Android 14 & Kotlin Development Masterclass", price: "699", details: "Learn Android 14 App Development From Beginner to Advanced Developer. Build Apps like Trello, 7Min Workout, Weather App", Rating: "0"},
//         {img: "courseBg.png", title: "Android App Development in 34 Hours : MobDevOps+ Android 15", price: "599", details: "You don't need 34+hours for learning kotlin! START !Learn Kotlin in 34 Hours and write your own applications - Android 15", Rating: "0"},
//         {img: "courseBg.png", title: "Android Java Masterclass - Become an App Developer", price: "799", details: "Improve your career options by learning Android app Development. Master Android Studio and build your first app today", Rating: "0"},
//         {img: "courseBg.png", title: "Android App Development Masterclass using Kotlin", price: "499", details: "Learn Kotlin Android App Development And Become an Android Developer. Incl. Kotlin Tutorial and Android Tutorial Videos", Rating: "0"},
//         {img: "courseBg.png", title: "The Complete Android & Kotlin App Development A-Z Bootcamp", price: "599", details: "Building Android Applications using Kotlin Even without Any Prior Programming knowledge", Rating: "0"},
//         {img: "courseBg.png", title: "Android App Development Bootcamp - Beginner to Pro", price: "599", details: "Master Android Development - Learn Java AND Kotlin - Jetpack Room Database - MVVM - Fragments - Google Tasks clone", Rating: "0"},
//     ],

//     "Artificial Intelligence": [
//         {img: "courseBg.png", title: "Artificial Intelligence A-Z: Learn AI from Scratch", price: "799", details: "Master AI concepts including Neural Networks, Deep Learning, NLP, Reinforcement Learning & Computer Vision", Rating: "0"},
//         {img: "courseBg.png", title: "AI for Everyone: Mastering the Basics of AI", price: "499", details: "Understand AI fundamentals, Ethics, Business Applications & AI-driven Decision Making", Rating: "0"},
//         {img: "courseBg.png", title: "Reinforcement Learning A-Z: Hands-on Projects", price: "599", details: "Master Reinforcement Learning with Python, OpenAI Gym, Deep Q-Learning & Policy Gradients", Rating: "0"},
//         {img: "courseBg.png", title: "Natural Language Processing with Deep Learning", price: "699", details: "Explore NLP techniques, Text Classification, Sentiment Analysis, Chatbots & Transformers like BERT & GPT", Rating: "0"},
//         {img: "courseBg.png", title: "AI-Powered Chatbots: From Basics to Deployment", price: "499", details: "Learn how to build AI chatbots using NLP, Python, and OpenAI's GPT models", Rating: "0"},
//         {img: "courseBg.png", title: "AI Ethics and Responsible AI Development", price: "399", details: "Understand ethical considerations, AI bias, and fairness in AI systems", Rating: "0"}
//     ],

//     "Machine Learning": [
//         {img: "courseBg.png", title: "Machine Learning Masterclass with Python & R", price: "699", details: "Learn Machine Learning & Data Science with Python & R. Hands-on Projects with TensorFlow, Scikit-Learn & More", Rating: "0"},
//         {img: "courseBg.png", title: "Deep Learning Specialization - Neural Networks & TensorFlow", price: "899", details: "Master Deep Learning using TensorFlow, CNNs, RNNs, GANs, AutoEncoders, and more!", Rating: "0"},
//         {img: "courseBg.png", title: "Advanced Machine Learning with Scikit-Learn & TensorFlow", price: "599", details: "Go beyond the basics and explore feature engineering, hyperparameter tuning, and advanced ML algorithms", Rating: "0"},
//         {img: "courseBg.png", title: "Time Series Forecasting with Machine Learning", price: "699", details: "Master time series forecasting using ARIMA, LSTMs, Prophet, and more", Rating: "0"},
//         {img: "courseBg.png", title: "Deploying Machine Learning Models with Flask & AWS", price: "599", details: "Learn how to deploy ML models into production environments using Flask, FastAPI, and cloud platforms", Rating: "0"},
//         {img: "courseBg.png", title: "Unsupervised Learning: Clustering, Anomaly Detection & Autoencoders", price: "499", details: "Master clustering techniques like K-Means, DBSCAN, and applications of Autoencoders", Rating: "0"}
//     ],
    
//     "Cybersecurity": [
//         {img: "courseBg.png", title: "The Complete Cybersecurity Bootcamp: Beginner to Expert", price: "799", details: "Learn Network Security, Ethical Hacking, Malware Analysis, Encryption, SIEM, and Penetration Testing", Rating: "0"},
//         {img: "courseBg.png", title: "Ethical Hacking and Penetration Testing Course", price: "599", details: "Master Ethical Hacking with Kali Linux, Metasploit, Wireshark, and Cyber Attack Techniques", Rating: "0"},
//         {img: "courseBg.png", title: "CompTIA Security+ Certification: Security Fundamentals", price: "699", details: "Prepare for CompTIA Security+ Exam & Learn Cybersecurity Fundamentals, Network Security & Risk Management", Rating: "0"},
//         {img: "courseBg.png", title: "Web Application Security: OWASP & Secure Coding", price: "499", details: "Understand OWASP Top 10 Vulnerabilities, Secure Coding Practices, and Web Security Fundamentals", Rating: "0"},
//         {img: "courseBg.png", title: "Cyber Threat Intelligence & Incident Response", price: "599", details: "Learn how to detect, analyze, and respond to cybersecurity threats & incidents effectively", Rating: "0"},
//         {img: "courseBg.png", title: "Blockchain Security & Smart Contract Hacking", price: "799", details: "Master Smart Contract Security, Blockchain Hacking, Ethereum Security & Crypto Forensics", Rating: "0"},
//     ],

//     "Data Science": [
//         {img: "courseBg.png", title: "The Complete Data Science Bootcamp 2025", price: "699", details: "Master Data Science with Python, SQL, Statistics, Machine Learning, and Data Visualization", Rating: "0"},
//         {img: "courseBg.png", title: "Data Science and Machine Learning with Python & R", price: "599", details: "Learn Data Science, Pandas, NumPy, Matplotlib, Scikit-Learn, and Deep Learning", Rating: "0"},
//         {img: "courseBg.png", title: "Data Analysis and Visualization with Python", price: "499", details: "Learn how to analyze, clean, and visualize data using Pandas, Seaborn, and Matplotlib", Rating: "0"},
//         {img: "courseBg.png", title: "Big Data & Hadoop Certification Training", price: "799", details: "Master Big Data Technologies including Hadoop, Spark, HDFS, Hive, and Apache Kafka", Rating: "0"},
//         {img: "courseBg.png", title: "SQL & Database Management for Data Science", price: "399", details: "Learn SQL, PostgreSQL, MySQL, and Database Queries for Data Analysis and Management", Rating: "0"},
//         {img: "courseBg.png", title: "Data Science for Business Decision Making", price: "599", details: "Apply Data Science and Predictive Analytics to Business Strategy and Decision Making", Rating: "0"},
//     ],

// };
