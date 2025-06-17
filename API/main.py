import http.client
import json
import requests

# Fetch news from the API
conn = http.client.HTTPSConnection("arabic-news-api.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "18c867cc56msh757d419abbb1adap1369bbjsn95d63b4a042b",
    'x-rapidapi-host': "arabic-news-api.p.rapidapi.com"
}

conn.request("GET", "/aljazeera", headers=headers)

res = conn.getresponse()
data = res.read()

news = json.loads(data.decode("utf-8"))

# API endpoint of your Node.js controller
api_url = "http://localhost:4000/api/narticles"

# Iterate over the news articles and send them to your database
for article in news["results"]:
    payload = {
        "headline": article["headline"],
        "content": article["content"],
        "date": article["date"],
        "image": article["image"]
    }

    response = requests.post(api_url, json=payload)

    if response.status_code == 200:
        print(f"Successfully added article: {article['headline']}")
    else:
        print(f"Failed to add article: {article['headline']}, Error: {response.text}")
