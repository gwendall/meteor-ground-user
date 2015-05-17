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

tl;dr - [Performance is a Feature](http://blog.codinghorror.com/performance-is-a-feature/)  
Extended explanation: by default, Meteor fetches your logged users' basic information on startup: username, emails, profile ([see docs](http://docs.meteor.com/#/full/meteor_users)).  
Should you need to get additional fields, you can subscribe to a publication (A) with those fields. However, on each page refresh, Meteor will fetch the user document with its basic information (as described above) and replace it in the Meteor.users collection. As a result, those additional fields will not be available until your subscription (A) is ready again. Which is a bummer.  
This package ensures you get this data available right away on startup by keeping it in localStorage. And wipes it out on logout, of course.

Notes
--------------

- This package will make Meteor.user() be a document of the GroundUser collection (only storing the currently logged user).  
Should you need to attach helpers (from dburles:collection-helpers), hooks (from matb33:collection-hooks), or any other method to your Meteor.users collection, also do it on the GroundUser object.
