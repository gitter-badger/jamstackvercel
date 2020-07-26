<template lang="pug">
    .index
      div(class="w-full h-20 pt-2 pb-0 px-1 table")
        div(class="table-cell sm:px-0 px-1 align-middle tracking-widest text-base font-bold")
          p(class="float-left mr-1")
            img(src="uploads/briefcase-solid.svg" width="24" height="24")
          p.sitetitle Portfolio.JAMstack
      .card1
        img(class="sm:float-left float-none sm:mr-3 mr-0" src="uploads/VilafrancaLemon.oxo.jpg" width="150" height="150")
        .card1box
          p(class="text-xl font-black tracking-widest")
            span(class="name") Dekopon
          p(class="mt-3 text-base font-thin tracking-widest")
            span(class="note")
              a(href="https://www.notion.so/wasl/PORTFOLIO-1d708aa1676349b79c7ea0d9d47c6162" target="_blank") Portfolio
            span(class="note") /JAMstack
      div(class="w-full h-20 pt-2 pb-0 px-1 table clear-left")
        div(class="table-cell sm:px-0 px-1 align-middle tracking-widest text-base font-bold") retouch/ times
      div(class="w-full clear-left")
        g-link(v-for='post in $page.posts.edges', :key='post.id', :to='post.node.path')
          .contbox
            g-image(:src="post.node.img_import")
            p.conttitle {{ post.node.headline }}
            p.contdscrpt {{ post.node.description }}
            p.conttag {{ post.node.tags }}
</template>

<style>
  div div a {
    color: #141426;
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
