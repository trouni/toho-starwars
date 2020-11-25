setTimeout(_ => {
  const dayItem = document.getElementById("20191220");

  if (dayItem && !dayItem.classList.contains("is-disabled")) {
    dayItem.scrollIntoView();
    dayItem.click();
    chrome.runtime.sendMessage({ giveFocus: true, sendNotification: true });
  } else {
    console.log("Date not yet available. Reloading in 2 min.");
    setTimeout(_ => location.reload(), 120000);
  }
}, 10000);
