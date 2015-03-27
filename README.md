Meteor Ground User
================

Get logged user's data available on startup and offline.

Installation
------------

``` sh
meteor add gwendall:ground-user
```

What it is for
--------------

By default, Meteor fetches your logged users' basic information on startup: username, emails, profile ([see docs](http://docs.meteor.com/#/full/meteor_users)).  
Should you need to get additional fields, you can subscribe to a publication (A) with those fields. However, on each page refresh, Meteor will fetch the user document with its basic information (as described above) and replace it in the Meteor.users collection. As a result, those additional fields will not be available until your subscription (A) is ready. Which is a bummer.  
This package ensures you get this data available right away on startup by keeping it in localStorage. And wipes it out on logout, of course.
