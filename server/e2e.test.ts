// import supertest from "supertest";
// import { app } from "./index"; // Update the path to where your Express app instance is exported

// const request = supertest(app);
// test("Add a new post", async () => {
//   const newPost = {
//     title: "Test Post",
//     body: "This is a test post body.",
//   };
//   const response = await request.post("/posts").send(newPost).expect(201);

//   // in PostContext.js addPost function consoles ('post added successfully')
//   expect(response.body).toHaveProperty("message", "Post created successfully");

//   // // Validate that the response body has a title and body that match the new post
//   // expect(response.body).toHaveProperty('title', newPost.title);
//   // expect(response.body).toHaveProperty('body', newPost.body);
//   // // If your API assigns an ID to new posts, validate that an ID is present
//   // expect(response.body).toHaveProperty('id');
// });

// test("GET /posts should return a list of posts", async () => {
//   const response = await request.get("/posts").expect(200);

//   expect(Array.isArray(response.body)).toBeTruthy();
//   console.log("Test for fetching all posts passed.");
// });

// // test('PUT /posts/:id should update the post', async () => {
// //     const updatedPost = {
// //         title: 'Updated Title',
// //         body: 'Updated body of the post.',
// //     };
// //     const postId = 80; // Assuming there's at least one post with id=1

// //     const response = await request.put(`/posts/${postId}`).send(updatedPost).expect(200);

// //     expect(response.body.title).toBe(updatedPost.title);
// //     console.log('Test for updating a post passed.');
// // });

// test("Update a post", async () => {
//   // First, create a post to ensure it exists
//   const newPost = { title: "Initial Title", body: "Initial body." };
//   const createRes = await request.post("/posts").send(newPost);
//   const postId = createRes.body.id; // Make sure your POST /posts route returns the created post's ID

//   // Then, update the post
//   const updatedPost = { title: "Updated Title", body: "Updated body." };
//   const updateRes = await request
//     .put(`/posts/${postId}`)
//     .send(updatedPost)
//     .expect(200); // Adjust status code if necessary

//   // Validate response
//   expect(updateRes.body).toHaveProperty("title", updatedPost.title); // Adjust according to your API response
//   // Further validations as needed
// });

// // test('DELETE /posts/:id should delete the post', async () => {
// //     const postId = 80; // Assuming there's a post with id=1 to delete

// //     await request.delete(`/posts/${postId}`).expect(204);
// //     console.log('Test for deleting a post passed.');
// // });
