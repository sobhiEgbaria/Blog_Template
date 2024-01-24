class Post {
  id: number;
  date: string;
  title: string;
  description: string;
  body: string;
  img: string;
  category: string;
  postedBy: number; // user ID

  constructor(
    id: number,
    date: string,
    title: string,
    description: string,
    body: string,
    img: string,
    category: string,
    postedBy: number
  ) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.description = description;
    this.body = body;
    this.img = img;
    this.category = category;
    this.postedBy = postedBy; // user ID
  }
}
export default Post;
