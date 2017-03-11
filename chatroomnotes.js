// Have a Node JS server render views/index.ejs that has the html contnet for the client whenever the clinet requests /.

// In the client side code, have js code that asks the user for thier name and store this user input in a variable called name.

// Have the clinet EMIT "got_a_new_user" and oass "name" to the server.

// have the server LISTEN for an event called 'got_new_user' to the clinets with the name
// of the new user attached ti this event (and id)...

//Have the client LISTEN for an event called 'new_user' and when this event gets triggered, have jQuery render a new box with the new user's name.

//Wait... But this does not detect when a user disconnects from the socketIO connection. To do this, we need to have the server LISTEN for an event called 'disconnect' and when this event gets triggered, broadcast an event called 'disconnect_user' to all clients.

//We need to have the client LISTEN for an event called 'disconnect_user' and remove any HTML box associated with this user.

//For step 4, when the server gets the event 'got_a_new_user', store an id of the user and pass this id with the event "new_user". Then have the client render this HTML box with id of this user.

//For step 6, when the server emits an event called 'disconnect_user', pass the id of the disconnected user as well. In step 7, have the client remove the HTML box with the id of the disconnected user.