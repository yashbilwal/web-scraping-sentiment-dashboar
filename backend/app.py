from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd
from scraper import scrape_ndtv

app = Flask(__name__)
CORS(app)

@app.route("/api/scrape", methods=["GET"])
def run_scraper():
    scrape_ndtv()
    return jsonify({"message": "Scraping and sentiment analysis complete."})

@app.route("/api/sentiments", methods=["GET"])
def get_sentiment_data():
    df = pd.read_csv("data/sentiments.csv")
    return df.to_dict(orient="records")

@app.route("/", methods=["GET"])
def home():
    return "Welcome to the News Sentiment API!"


if __name__ == "__main__":
    app.run(debug=True)
