var push = require("web-push");
const { validatePublicKey } = require("web-push/src/vapid-helper");

var vapidKeys = {
  publicKey:
    "BP0S343F7JkvTP_QemhHgKlwM89VjO0p9dkDbQKIe-IEwMWa18h_fbnC167fcVbsuIznOVlQTrneA74cg6rheLo",
  privateKey: "UJ3nEjDxCxyeoxs_wkPXySDRYmaltLm98Okh4C3a-zA",
};

push.setVapidDetails(
  "mailto:gokila.vk@zohotest.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

let sub = {};

push.sendNotification(sub, "test message");
