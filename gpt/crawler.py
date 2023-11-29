import requests
from bs4 import BeautifulSoup

def fetch_article_content(url):
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        
        article = soup.find('article', class_='go_trans _article_content')

        if not article:
            return "Article content not found"

        # Find and remove the image description
        image_description = article.find('span', class_='end_photo_org')
        if image_description:
            image_description.decompose()

        # Extract and return the remaining text
        return ' '.join(article.get_text(separator=' ', strip=True).split())
            
    except requests.RequestException as e:
        return str(e)
    
