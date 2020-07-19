<template lang="pug">
    .index
      div(class="w-full h-20 pt-2 pb-0 px-1 table")
        div(class="table-cell sm:px-0 px-1 align-middle tracking-widest text-base font-bold")
          img(Class="float-left mr-1" src="uploads/briefcase-solid.svg" width="24" height="24")
          p Portfolio.JAMstack
      .card1
        img(Class="sm:float-left float-none sm:mr-3 mr-0" src="uploads/VilafrancaLemon.oxo.jpg" width="150" height="150")
        .card1box
          p(Class="text-2xl font-black tracking-widest") Dekopon
          p(Class="mt-3 text-lg font-thin tracking-widest") portfolio.notion
      div(class="clearfix bg-pink-400 text-gray-100 font-bold py-0 px-3 rounded-lg")
        div Box
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
