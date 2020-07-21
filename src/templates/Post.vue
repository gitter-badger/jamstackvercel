<template lang="pug">
  article
    div(class="w-full h-20 pt-2 pb-0 px-1 table")
        div(class="table-cell sm:px-0 px-1 align-middle tracking-widest text-sm font-thin")
          <g-link to="/" class="link float-left mr-1">home</g-link>
          p / {{ $page.post.headline }}
    VueRemarkContent
</template>

<style>
  .tags {
    @apply bg-pink-400 text-gray-100 font-bold py-0 px-3 rounded-lg;
  }
</style>

<page-query>
query Post  ($id: ID!) {
  post (id: $id) {
    title
    headline
    content
  }
}
</page-query>
