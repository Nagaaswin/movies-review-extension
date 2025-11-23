const filmibeatURL = (movie) =>
    `https://www.filmibeat.com/search/?search_query=${encodeURIComponent(movie)}`;
const behindwoodsURL = (movie) =>
    `https://www.behindwoods.com/search/?q=${encodeURIComponent(movie)}`;
const bookmyshowURL = (movie) =>
    `https://in.bookmyshow.com/explore/movies-chennai?query=${encodeURIComponent(movie)}`;

async function fetchOMDB(movie) {
    const apiKey = "fc050c6b"; // <-- Insert your OMDB API key here
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${apiKey}`;
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        return { Response: "False" };
    }
}

function renderIndianLinks(movie) {
    return `
    <hr>
    <strong>More Indian/Tamil Movie Reviews:</strong>
    <ul>
      <li><a href="${filmibeatURL(movie)}" target="_blank">Filmibeat (Tamil/Indian)</a></li>
      <li><a href="${behindwoodsURL(movie)}" target="_blank">Behindwoods</a></li>
      <li><a href="${bookmyshowURL(movie)}" target="_blank">BookMyShow (User Reviews)</a></li>
    </ul>
  `;
}

chrome.storage.local.get('selectedMovie', async (data) => {
    const movie = data.selectedMovie;
    document.getElementById('movie-title').innerText = movie || "No movie selected.";
    if (!movie) return;
    document.getElementById('ratings').innerHTML = "Loading...";

    let omdb = await fetchOMDB(movie);
    let output = "";

    if (omdb.Response !== "False") {
        output += `<p><strong>IMDb:</strong> ${omdb.imdbRating || "N/A"}</p>`;
        let rtRating = omdb.Ratings?.find((r) => r.Source === "Rotten Tomatoes")?.Value || "N/A";
        let mcRating = omdb.Ratings?.find((r) => r.Source === "Metacritic")?.Value || "N/A";
        output += `<p><strong>Rotten Tomatoes:</strong> ${rtRating}</p>`;
        output += `<p><strong>Metacritic:</strong> ${mcRating}</p>`;
        output += `<p><strong>Plot:</strong> ${omdb.Plot || "N/A"}</p>`;
    } else {
        output += `<p>Movie not found in IMDb/OMDB.</p>`;
    }

    // Always show India links for full coverage
    output += renderIndianLinks(movie);

    document.getElementById('ratings').innerHTML = output;
});
