const users: string[] = ["user1", "user2", "user3"];

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
}

class Server {
  database: Post[] = [
    { id: 1, author: "author1", title: "some title 1", content: "some content" },
    { id: 2, author: "author1", title: "some title 2", content: "some content" },
    { id: 3, author: "author1", title: "some title 3", content: "some content" },
  ]

  getPosts(): void {
    console.log(this.database);
  }

  addPost(newPost: Post): void {
    this.database.push(newPost);
    console.log("New Post Added");
  }

  deletePost(id: number): void {
    this.database = this.database.filter((post: Post) => post.id != id);
    console.log("Post Deleted");
  }
}

class Proxy {
  server = new Server();

  getPosts(user: string): void {
    if (this.authenticate(user)) this.server.getPosts();
    else console.log("Unauthorized User");
  }

  authenticate(user: string): boolean {
    return users.includes(user);
  }
}

const proxy = new Proxy();
proxy.getPosts("user99");