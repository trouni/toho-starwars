var starWarsTimer = setInterval(_ => {
  var timer = Math.round((new Date("2019-12-18 00:00") - new Date()) / 1000);
  var timer = Math.round((new Date("2019-12-17 00:00") - new Date()) / 1000);
  if (timer > 0) {
    console.log(timer);
  } else {
    console.log("Initiating auto-buy process...");
    console.log(schedulePage());
    ScheduleUtils.purchaseTicket(
      "20191218",
      "076",
      "018019",
      "0761",
      "10",
      "2"
    );
    if (schedulePage()) {
      console.log("Go to seat selection screen");
      //   javascript: ScheduleUtils.purchaseTicket(
      //     "20191220",
      //     "076",
      //     "018146",
      //     "0761",
      //     "10",
      //     "6"
      //   );
    } else if (seatSelectionPage()) {
      console.log("Select seats");
      JavaScript: seatSelect("F", "15", "1");
      JavaScript: seatSelect("F", "16", "1");
      JavaScript: seatSelect("F", "17", "1");
      JavaScript: seatSelect("F", "18", "1");
      JavaScript: seatSelect("F", "19", "1");
      document.querySelector(".message-page-check-agreement").click();
      javascript: bookSeat();
    }
    clearInterval(starWarsTimer);
  }
}, 1000);

setTimeout(_ => console.log(schedulePage()), 1000);
function schedulePage() {
  document.getElementById("theater-schedule") !== null;
}

function seatSelectionPage() {
  const pageTitle = document.querySelector("h1.message-page-title");
  pageTitle && pageTitle.innerText === "お好きな座席をお選びください。";
}
