<template lang="pug">
    .index
      div(class="w-56 h-20 pt-2 pb-0 px-1 grid grid-flow-col sm:px-0 px-1 tracking-widest text-base font-bold text-left")
        p(class="mr-0")
          img(src="uploads/briefcase-solid.svg" width="24" height="24")
        p.sitetitle Portfolio.JAMstack
      .card1
        img(src="uploads/VilafrancaLemon.oxo.jpg" width="150" height="150")
        .card1box
          p(class="text-xl font-black tracking-widest")
            span(class="name") Dekopon
          p(class="mt-3 text-base font-thin tracking-widest")
            span(class="note") Portfolio
      div(class="w-full my-6 pt-2 pb-0 px-1 sm:px-0 px-1 tracking-widest text-base font-bold") retouch/ times
      .contcardbox
        g-link(v-for='post in $page.posts.edges', :key='post.id', :to='post.node.path')
          .contbox
            g-image(:src="post.node.img_import")
            p.conttitle {{ post.node.headline }}
            p.contdscrpt {{ post.node.description }}
            p.conttag {{ post.node.tagz }}
</template>

<page-query>
  query {
    posts: allPost (sortBy: "title") {
      edges {
        node {
          id
          title
          path
          img_import
          headline
          description
          tagz
          content
        }
      }
    }
  }
</page-query>
