// require("dotenv").config();
// const authToken = process.env.TWILIO_AUTH_TOKEN;
const authToken = "05d0f21ea65cdfbba5564d91849da982";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.giveFocus) {
    var audio = new Audio(chrome.runtime.getURL("r2d2.mp3"));
    audio.loop = true;
    audio.play();
    chrome.windows.update(sender.tab.windowId, { focused: true }, _ => {
      chrome.tabs.update(sender.tab.id, { active: true });
    });
  }

  if (request.sendNotification) {
    // sendSMS("+817038365592", "STAR WARS pre-orders are LIVE!!!");
    sendWhatsApp(
      "+817038365592",
      "STAR WARS pre-orders are LIVE!!!",
      "https://cnet3.cbsistatic.com/img/fwX4_HgkOmrmdL3jfknt41h9YZU=/1092x0/2019/08/24/8656b6d6-57a9-48da-b00d-b83d2dd0c344/ecwe-nmu0aaqbms.jpg"
    );
  }
});

function sendSMS(toPhone, message) {
  fetch("https://kesseo-twilio.herokuapp.com/send", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      authToken: authToken,
      type: "sms",
      to: toPhone,
      message: message
    })
  });
}

function sendWhatsApp(toPhone, message, mediaUrl = null) {
  fetch("https://kesseo-twilio.herokuapp.com/send", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      authToken: authToken,
      type: "whatsapp",
      to: toPhone,
      message: message,
      mediaUrl: mediaUrl
    })
  });
}
