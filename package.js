Package.describe({
  name: "gwendall:ground-user",
  summary: "Get logged user's data available on startup and offline.",
  version: "0.1.0",
  git: "https://github.com/gwendall/meteor-ground-user.git",
});

Package.on_use(function (api, where) {

  api.use([
    "accounts-base@1.2.0",
    "ground:db@0.3.6",
    "mongo@1.1.0",
    "underscore@1.0.3",
    "gwendall:accounts-helpers"
  ], "client");

	api.add_files("client/lib.js", "client");
  api.add_files("server/lib.js", "server");

  api.export("GroundUser", "client");

});
