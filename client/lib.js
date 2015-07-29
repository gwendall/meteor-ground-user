GroundUser = new Ground.Collection('groundUser', { connection: null });

var cleanObjectForUpdate = function(obj) {
  if (!obj || !_.isObject(obj)) return;
  for (var k in obj) {
    if (_.isFunction(obj[k]) || k.indexOf('$') > -1) delete obj[k];
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

Meteor.user = function() {
  var userId = Meteor.userId();
  if (!userId) return null;
  var selector = { _id: userId };
  return Meteor.users.findOne(selector) || GroundUser.findOne(selector);
};

Accounts.onLogout(function() {
  GroundUser.clear();
});
