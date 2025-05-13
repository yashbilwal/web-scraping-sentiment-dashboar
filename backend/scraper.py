from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time
import csv
from datetime import datetime
from utils import clear_csv, save_sentiments

HEADLINES_CSV = "data/ndtv_headlines.csv"
SENTIMENTS_CSV = "data/sentiments.csv"

def scrape_ndtv():
    chrome_options = Options()
    chrome_options.add_argument("--headless")
    driver = webdriver.Chrome(options=chrome_options)

    try:
        driver.get("https://www.ndtv.com/latest")
        driver.refresh()
        time.sleep(3)

        articles = driver.find_elements(By.CLASS_NAME, "NwsLstPg_ttl-lnk")

        data = []
        for article in articles[:20]:
            headline = article.text.strip()
            url = article.get_attribute("href")
            scraped_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            data.append([headline, url, scraped_at])

        # Clear old data
        clear_csv(HEADLINES_CSV)

        # Save scraped data
        with open(HEADLINES_CSV, mode="w", newline="", encoding="utf-8") as file:
            writer = csv.writer(file)
            writer.writerow(["headline", "url", "scraped_at"])
            writer.writerows(data)

        print(f"✅ Scraped {len(data)} articles and saved to '{HEADLINES_CSV}'.")

        # Sentiment analysis and save
        clear_csv(SENTIMENTS_CSV)
        save_sentiments(HEADLINES_CSV, SENTIMENTS_CSV)
        print(f"✅ Sentiment analysis saved to '{SENTIMENTS_CSV}'.")

    finally:
        driver.quit()

if __name__ == "__main__":
    scrape_ndtv()
