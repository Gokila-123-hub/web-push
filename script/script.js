if ("serviceWorker" in navigator && "PushManager" in window) {
  console.log("Service Worker and Push is supported");

  navigator.serviceWorker
    .register("sw.js")
    .then(function (swReg) {
      console.log("Service Worker is registered", swReg);

      swRegistration = swReg;
    })
    .catch(function (error) {
      console.error("Service Worker Error", error);
    });
} else {
  console.warn("Push messaging is not supported");
  pushButton.textContent = "Push Not Supported";
}

async function subscribe() {
  let sw = navigator.serviceWorker.ready;
  let push = (await sw).pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:
      "BP0S343F7JkvTP_QemhHgKlwM89VjO0p9dkDbQKIe-IEwMWa18h_fbnC167fcVbsuIznOVlQTrneA74cg6rheLo",
  });

  console.log(JSON.stringify(push));
}
