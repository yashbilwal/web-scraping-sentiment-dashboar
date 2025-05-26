# 🌟 Web Scraping & Sentiment Analysis Dashboard

![Dashboard Preview](https://via.placeholder.com/800x400?text=Web+Scraping+Sentiment+Dashboard)  
*Interactive dashboard showing news sentiment analysis*

## 📌 Overview

This project is a powerful **Web Scraping and Sentiment Analysis Dashboard** that combines:
- Real-time news scraping from **NDTV**
- Advanced sentiment analysis using **TextBlob**
- Beautiful visualization with interactive charts

Built with **Flask** (Python backend) and **React** (modern frontend), this tool helps you understand public sentiment from news headlines at a glance.

## ✨ Key Features

### 🔍 Intelligent Web Scraping
- Automated scraping of latest headlines from NDTV
- Robust data collection using **Selenium**
- Clean data processing pipeline

### 😊😐😠 Sentiment Analysis
- Real-time sentiment scoring with **TextBlob**
- Classification into Positive/Negative/Neutral
- Polarity and subjectivity metrics

### 📊 Interactive Dashboard
- Beautiful data visualization with **Chart.js**
- Responsive design with **Bootstrap**
- One-click analysis trigger
- Real-time data updates

## 🛠️ Technology Stack

| Component       | Technologies Used                          |
|-----------------|-------------------------------------------|
| **Frontend**    | React, Axios, Bootstrap, Chart.js         |
| **Backend**     | Flask, Python                             |
| **Scraping**    | Selenium                                  |
| **Analysis**    | TextBlob, NLTK                            |
| **Data**        | CSV storage (lightweight solution)        |

## 🚀 Installation Guide

### Prerequisites
- Node.js v14+ (for frontend)
- Python 3.8+ (for backend)
- Chrome/Firefox browser (for Selenium)

### Step 1: Clone the Repository
```bash

git clone https://github.com/yourusername/web-scraping-sentiment-dashboard.git
cd web-scraping-sentiment-dashboard

Step 2: Backend Setup
bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt

Step 3: Frontend Setup
bash
cd ../frontend
npm install

Step 4: Run the Application
Start backend server:
bash
cd ../backend
python app.py
In another terminal, start frontend:

bash
cd ../frontend
npm start

Step 5: Access the Dashboard
Open your browser and visit:
🌐 http://localhost:3000

```

### 🎯 How It Works
### 🔄 Workflow Overview

User clicks "Analyze News" button

Backend triggers Selenium to scrape NDTV headlines

TextBlob analyzes sentiment for each headline

Results are processed and sent to frontend

React displays interactive charts and tables

### 📈 Data Flow

NDTV Website → Selenium → Flask API → TextBlob → React → Beautiful Charts!

### 🤝 Contributing

We welcome contributions! Please follow these steps:

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request
