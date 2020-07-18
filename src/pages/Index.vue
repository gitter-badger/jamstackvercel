<template lang="pug">
  .index
    g-link(v-for='post in $page.posts.edges', :key='post.id', :to='post.node.path')
      h2 {{ post.node.headline }}
      div {{ post.node.description }}
      div {{ post.node.tags }}
    button.btn test
</template>

<style>
  .btn {
    @apply bg-pink-400 text-gray-100 font-bold py-0 px-3 rounded-lg;
  }
</style>

<page-query>
  query {
    posts: allPost {
      edges {
        node {
          id
          title
          path
          img_import
          headline
          description
          tags
          content
        }
      }
    }
  }
</page-query>
