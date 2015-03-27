var collection = new Mongo.Collection("groundUser", { connection: null });
GroundUser = new Ground.Collection(collection, "groundUser");

Ground.Collection(Meteor.users);

var cleanObjectForUpdate = function(obj) {
  if (!obj || !_.isObject(obj)) return;
  for (var k in obj) {
    if (k.indexOf("$") > -1) delete obj[k];
  }
  delete obj._id;
  return obj;
}

Meteor.autorun(function() {

  var userId = Meteor.userId();
  if (!userId) return null;

  var selector = { _id: userId };
  var user = Meteor.users.findOne(selector);
  if (!user || !_.isObject(user)) return;

  var groundUser = GroundUser.findOne(selector);
  if (!groundUser || !_.isObject(groundUser)) return GroundUser.insert(user);

  var modifier = { $set: cleanObjectForUpdate(user) };
  return GroundUser.update(selector, modifier);

});

Meteor.user = function () {
  var userId = Meteor.userId();
  if (!userId) return null;
  return GroundUser.findOne({ _id: userId });
};

Accounts.onLogout(function() {
  GroundUser.clear();
});
