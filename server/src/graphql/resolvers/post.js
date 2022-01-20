const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getPosts(params) {
  const posts = await prisma.post.findMany();
  return posts;
}

async function getPost(_, { id }) {
  const post = await prisma.post.findUnique({
    where: {
      id
    }
  });
  return post;
}

async function createPost(_, { data }) {
  const post = await prisma.post.create({
    data
  });
  return post;
}

module.exports = {
  Query: {
    posts: getPosts,
    post: getPost
  },
  Mutation: {
    createPost: createPost
  }
};