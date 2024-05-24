const Ziggy = {
  url: "http://localhost:8000",
  port: 8000,
  defaults: {},
  routes: {
    "dusk.login": {
      uri: "_dusk/login/{userId}/{guard?}",
      methods: ["GET", "HEAD"],
      parameters: ["userId", "guard"],
    },
    "dusk.logout": {
      uri: "_dusk/logout/{guard?}",
      methods: ["GET", "HEAD"],
      parameters: ["guard"],
    },
    "dusk.user": {
      uri: "_dusk/user/{guard?}",
      methods: ["GET", "HEAD"],
      parameters: ["guard"],
    },
    "sanctum.csrf-cookie": {
      uri: "sanctum/csrf-cookie",
      methods: ["GET", "HEAD"],
    },
    "ignition.healthCheck": {
      uri: "_ignition/health-check",
      methods: ["GET", "HEAD"],
    },
    "ignition.executeSolution": {
      uri: "_ignition/execute-solution",
      methods: ["POST"],
    },
    "ignition.updateConfig": {
      uri: "_ignition/update-config",
      methods: ["POST"],
    },
    dashboard: { uri: "dashboard", methods: ["GET", "HEAD"] },
    "profile.edit": { uri: "profile", methods: ["GET", "HEAD"] },
    "profile.update": { uri: "profile", methods: ["PATCH"] },
    "profile.destroy": { uri: "profile", methods: ["DELETE"] },
    "module.index": { uri: "module-list", methods: ["GET", "HEAD"] },
    "module.delete": {
      uri: "module-delete/{item}",
      methods: ["DELETE"],
      parameters: ["item"],
      bindings: { item: "id" },
    },
    page404: { uri: "404", methods: ["GET", "HEAD"] },
    register: { uri: "register", methods: ["GET", "HEAD"] },
    login: { uri: "login", methods: ["GET", "HEAD"] },
    "password.request": { uri: "forgot-password", methods: ["GET", "HEAD"] },
    "password.email": { uri: "forgot-password", methods: ["POST"] },
    "password.reset": {
      uri: "reset-password/{token}",
      methods: ["GET", "HEAD"],
      parameters: ["token"],
    },
    "password.store": { uri: "reset-password", methods: ["POST"] },
    "verification.notice": { uri: "verify-email", methods: ["GET", "HEAD"] },
    "verification.verify": {
      uri: "verify-email/{id}/{hash}",
      methods: ["GET", "HEAD"],
      parameters: ["id", "hash"],
    },
    "verification.send": {
      uri: "email/verification-notification",
      methods: ["POST"],
    },
    "password.confirm": { uri: "confirm-password", methods: ["GET", "HEAD"] },
    "password.update": { uri: "password", methods: ["PUT"] },
    logout: { uri: "logout", methods: ["POST"] },
  },
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
