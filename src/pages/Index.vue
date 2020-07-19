<template lang="pug">
    .index
      div(class="w-full h-20 pt-2 pb-0 px-1 table")
        div(class="table-cell sm:px-0 px-1 align-middle tracking-widest text-base font-bold")
          img(Class="float-left mr-1" src="uploads/briefcase-solid.svg" width="24" height="24")
          p Portfolio.JAMstack
      .card1
        img(Class="sm:float-left float-none sm:mr-3 mr-0" src="uploads/VilafrancaLemon.oxo.jpg" width="150" height="150")
        .card1box
          p(Class="text-xl font-black tracking-widest")
            span(Class="name") Dekopon
          p(Class="mt-3 text-base font-thin tracking-widest")
            span(Class="note") portfolio.notion
      div(class="w-full h-20 pt-2 pb-0 px-1 table")
        div(Class="table-cell sm:px-0 px-1 align-middle tracking-widest text-base font-bold") retouch/ times
      g-link(v-for='post in $page.posts.edges', :key='post.id', :to='post.node.path')
        div(class="bg-orange-400 rounded-lg")
          h2 {{ post.node.headline }}
          div {{ post.node.description }}
          div {{ post.node.tags }}
</template>

<style>
  .tags {
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
