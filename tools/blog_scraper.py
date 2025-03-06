import requests
from bs4 import BeautifulSoup
import time


def scrape_blog_page(url):
    """Scrape a single page of the blog and return a list of posts"""
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find all card divs that contain blog posts
        cards = soup.find_all('div', class_='card mb-3')
        
        posts = []
        for card in cards:
            # Get the card body that contains the title and description
            card_body = card.find('div', class_='card-body')
            if not card_body:
                continue
            
            # Get the header that contains the title and link
            header = card_body.find('h4', class_='card-title')
            if not header:
                continue
            
            # Extract the title and URL
            link = header.find('a')
            if not link:
                continue
                
            title = link.get_text(strip=True)
            post_url = "https://blog.gujiakai.top" + link['href'] if link['href'].startswith('/') else link['href']
            
            # Get the description
            desc_p = card_body.find('p', class_='card-text')
            description = desc_p.get_text(strip=True) if desc_p else ""
            
            posts.append({
                'title': title,
                'url': post_url,
                'description': description
            })
            
        return posts
    except Exception as e:
        print(f"Error scraping {url}: {e}")
        return []


def main():
    base_url = "https://blog.gujiakai.top"
    total_pages = 13
    all_posts = []
    
    # Scrape the first page
    print(f"Scraping page 1: {base_url}")
    page_posts = scrape_blog_page(base_url)
    all_posts.extend(page_posts)
    
    # Scrape pages 2 to 13
    for page_num in range(2, total_pages + 1):
        page_url = f"{base_url}/page/{page_num}/"
        print(f"Scraping page {page_num}: {page_url}")
        page_posts = scrape_blog_page(page_url)
        all_posts.extend(page_posts)
        
        # Adding a small delay to be respectful to the server
        time.sleep(1)
    
    # Write the formatted output to a file
    output_file = "blog_posts.md"
    with open(output_file, "w", encoding="utf-8") as f:
        for post in all_posts:
            f.write(f"- [{post['title']}]({post['url']}): {post['description']}\n")
    
    print(f"\nScraping complete! Found {len(all_posts)} posts.")
    print(f"Results saved to {output_file}")


if __name__ == "__main__":
    main()
