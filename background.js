chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "getMovieReviews",
        title: "Get Movie Reviews",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "getMovieReviews") {
        const movieName = info.selectionText.trim();
        chrome.storage.local.set({ selectedMovie: movieName });
        chrome.action.openPopup();
    }
});
