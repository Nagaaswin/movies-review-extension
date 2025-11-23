# Movie Reviews Finder Chrome Extension

A simple Chrome extension that fetches IMDb ratings and provides quick review links to top Indian movie review sites like Filmibeat, Behindwoods, and BookMyShow when you select a movie name on any webpage.

---

## Features

- **Right-click Selection:** Highlight/select a movie name anywhere in Chrome and right-click to get movie reviews.
- **IMDb/OMDB Ratings:** Quickly shows IMDb, Rotten Tomatoes, and Metacritic ratings (where available).
- **Indian Movie Support:** Always displays shortcut links to Filmibeat (Tamil/Indian), Behindwoods, and BookMyShow for South Indian and Bollywood movies.
- **Works Internationally:** Also fetches ratings for Hollywood/Bollywood/regional movies.

---

## Installation

1. **Clone or Download:**  
   Download or clone this repository to your machine.

2. **Get OMDB API Key:**
    - Go to [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
    - Request a free key and copy it.

3. **Edit Configuration:**
    - Open `popup.js` and replace `YOUR_OMDB_API_KEY` with your OMDB key.

4. **Load Extension:**
    - Open Chrome and go to `chrome://extensions`
    - Enable "Developer mode"
    - Click **Load unpacked**
    - Select the extension directory (`movie-review-extension`)

---

## Usage

1. **Select a Movie Name:**  
   Highlight any movie name on a webpage.

2. **Right-click and Choose:**   
   Select “Get Movie Reviews” from the context menu.

3. **View Ratings and Links:**  
   The popup will:
    - Show IMDb/Rotten Tomatoes/Metacritic scores (when available)
    - Show clickable links to Filmibeat, Behindwoods, and BookMyShow with search results for the selected movie

---

## Files

- `manifest.json` – Extension manifest/configuration
- `background.js` – Sets up the context menu and handles selection logic
- `popup.html` – The extension’s popup interface
- `popup.js` – Fetches ratings and builds Indian review links
- `styles.css` – Popup styles

---

## Supported Indian Review Sources

- [Filmibeat](https://www.filmibeat.com/)
- [Behindwoods](https://www.behindwoods.com/)
- [BookMyShow](https://in.bookmyshow.com/)

---

## FAQ

**Q: Does this work for Tamil, Telugu, or other South Indian movies?**  
A: Yes! The extension always provides direct search links to major sites known for reviewing South Indian and Bollywood movies, so you're covered even if the movie isn’t on IMDb.

**Q: Why is there no Google rating?**  
A: Google ratings are not freely available via API. This extension focuses on IMDb/OMDB and popular Indian sites with open access.

**Q: How can I suggest new Indian sites?**  
A: File an issue or submit a pull request!

---

## License

This project is licensed under the MIT License.

