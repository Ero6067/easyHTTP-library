const http = new easyHTTP;

// //GET posts
// http.get('https://jsonplaceholder.typicode.com/posts', 
// function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// //Get Single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', 
// function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });
// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

//POST request
// http.post('https://jsonplaceholder.typicode.com/posts', 
// data, function(err, post) {
//   if( err) {
//     console.log(err)
//   } else {
//     console.log(post);
//   }
// });

// Update Post / PUT req
http.put('https://jsonplaceholder.typicode.com/posts/1', 
data, function(err, post) {
  if( err) {
    console.log(err)
  } else {
    console.log(post);
  }
});

