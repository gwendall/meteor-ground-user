Meteor.publish(null, function() {
  if (!this.userId) return;
  return Meteor.users.find({ _id: this.userId }, { limit: 1 });
});
