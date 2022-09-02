REST structure for a comment posting app.

This is one of many ways we can structure an app to have CRUD functionality.

base URI "/comment"

GET "/comments" - lists all comments (index route)

POST "/comments" - creates a new comment (create route)

PATCH "/comments/:id" - edits a comment under the id (update route)

DELETE "/comments/:id" - deletes a comment under the id (delete route)

GET "/comment/:id" - gets one comment (using ID) (show route)

This is one of many ways to match the REST blueprint.