self.addEventListener("push", () => {
  self.ServiceWorkerRegistration.sendNotification("text meassge", {});
});
