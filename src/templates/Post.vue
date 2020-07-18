<template lang="pug">
  article
    h1 {{ $page.post.title }}
    VueRemarkContent
</template>

<page-query>
query Post  ($id: ID!) {
  post (id: $id) {
    title
    content
  }
}
</page-query>
