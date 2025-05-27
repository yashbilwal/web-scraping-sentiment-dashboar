import React from 'react';
import { Button } from 'react-bootstrap';

const HeroSection = ({ onStart }) => {
  return (
    <div className="bg-dark text-white py-5 text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">Web Scraping & Sentiment Dashboard</h1>
        <p className="lead mt-3">
          Click the button below to start scraping NDTV headlines and see real-time sentiment analysis.
        </p>
        <Button variant="primary" size="lg" onClick={onStart}>
          Start Dashboard
        </Button>

        {/* ✅ Project Intro Section */}
        <div className="text-center mt-4 px-4">
          <h2 className="display-6 fw-semibold">Understand News Sentiment Instantly</h2>
          <p className="lead text-muted mt-3">
            Get the latest headlines from NDTV analyzed for sentiment in real-time. This dashboard scrapes news, performs sentiment analysis, and visualizes the results—all with a single click.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
