import { faker } from "@faker-js/faker";

const users = ["user1", "user2", "user3"];
let authorization: boolean = false;

interface Post {
  id: number;
  owner: string;
  title: string;
  content: string;
}

const PostFactory = (index: number): Post => {
  return {
    id: faker.number.int(),
    owner: users[index],
    title: faker.lorem.words(3),
    content: faker.lorem.words(6)
  }
}

let posts: Post[] = [];

const customProxy = (username: string) => {
  if (!users.includes(username)) authorization = false;
  else authorization = true;
}

class Server {
  static createPost(newPost: Post, username: string) {
    customProxy(username);
    if (!posts.find((post: Post) => post.id == newPost.id) && authorization) {
      posts.push(newPost);
      console.log("Saved Post");
    } else if (!authorization) {
      console.log("Authorization Error");
    } else {
      console.log("Post Redundancy");
    }
  }

  static deletePost(id: number, username: string) {
    customProxy(username);
    if (authorization) {
      posts = posts.filter((post: Post) => post.id != id);
      console.log("Deleted Post");
    } else {
      console.log("Authorization Error");
    }
  }
}

const post1 = PostFactory(0);
Server.createPost(post1, users[0]);

console.log(posts);
Server.createPost(post1, users[7]);