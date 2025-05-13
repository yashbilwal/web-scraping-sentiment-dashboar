import pandas as pd
from textblob import TextBlob
import os

def clear_csv(file_path):
    if os.path.exists(file_path):
        pd.DataFrame().to_csv(file_path, index=False)

def analyze_sentiment(text):
    analysis = TextBlob(text)
    polarity = analysis.sentiment.polarity
    if polarity > 0:
        return 'Positive'
    elif polarity < 0:
        return 'Negative'
    else:
        return 'Neutral'

def save_sentiments(input_csv, output_csv):
    df = pd.read_csv(input_csv)
    df['sentiment'] = df['headline'].apply(analyze_sentiment)
    df.to_csv(output_csv, index=False)
