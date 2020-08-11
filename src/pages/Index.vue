<template lang="pug">
    .index
      div(class="w-full h-20 pt-2 pb-0 px-1 table")
        div(class="table-cell sm:px-0 px-1 align-middle tracking-widest text-base font-bold")
          p(class="float-left mr-1")
            img(src="uploads/briefcase-solid.svg" width="24" height="24")
          p.sitetitle Portfolio.JAMstack
      .card1
        img(src="uploads/VilafrancaLemon.oxo.jpg" width="150" height="150")
        .card1box
          p(class="text-xl font-black tracking-widest")
            span(class="name") Dekopon
          p(class="mt-3 text-base font-thin tracking-widest")
            span(class="note") Portfolio
      div(class="w-full h-20 pt-2 pb-0 px-1 table clear-left")
        div(class="table-cell sm:px-0 px-1 align-middle tracking-widest text-base font-bold") retouch/ times
      div(class="w-full clear-left")
        g-link(v-for='post in $page.posts.edges', :key='post.id', :to='post.node.path')
          .contbox
            g-image(:src="post.node.img_import")
            p.conttitle {{ post.node.headline }}
            p.contdscrpt {{ post.node.description }}
            p.conttag {{ post.node.tagz }}
</template>

<style lang="scss">
.sitetitle {
  font-weight: 700;
}

div.card1 {
  width: 170px;
  height: 240px;
  padding: 6px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2.3rem 2.1rem -2rem rgba(0, 0, 0, 0.25);
  position: relative;

  @media screen and (min-width: 769px) {
    width: 370px;
    height: 200px;
    padding: 22px;
    display: flex;
  }

  div.card1box {
    height: 75px;
    text-align: right;
    position: absolute;
    bottom: 15px;
    right: 12px;

    @media screen and (min-width: 769px) {
      height: 150px;
      bottom: -55px;
      right: 18px;
    }

    span.name {
      font-family: 'Montserrat', sans-serif;
    }

    span.note {
      font-family: 'Kanit', sans-serif;
    }
  }
}

div.contbox {
  width: 250px;
  height: 550px;
  margin: 14px 20px 14px 0;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2.3rem 2.1rem -2rem rgba(0, 0, 0, 0.25);
  position: relative;

  @media screen and (min-width: 769px) {
    display: flex;
  }

  .g-image {
      height: 100%;
      min-height: 550px;
      width: auto;
      object-fit: cover;
      border-radius: 6px;
      opacity: 0.8;
  }

  .conttitle {
    width: 100%;
    position: absolute;
    bottom: 41%;
    left: 0;
    margin: 0 0 9px;
    background-color: #fff;
    font-family: 'M PLUS 1p', sans-serif;
    letter-spacing: 0.15em;
    font-size: 16pt;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .contdscrpt {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0%;
    left: 0;
    margin: 0 0 25px;
    opacity: 0.7;
    background-color: #252525;
    color: #F9F9FA;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 100;
    letter-spacing: 0.1em;
    font-size: 15pt;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
  }

  .conttag {
    width: auto;
    height: 24px;
    padding: 0 4px;
    position: absolute;
    top: 8px;
    right: 6px;
    border-radius: 2px;
    opacity: 0.8;
    background-color: #F99FC9;
    color: #fff;
    font-family: 'Kanit', sans-serif;
  }
}

div div a {
  color: #141426;
}
</style>

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
