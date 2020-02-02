chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  tab.url &&
    tab.url.includes('9gag') &&
    chrome.tabs.executeScript(tabId, {
      file: './hidingFunctionality.js',
    });
});
