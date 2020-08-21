<template lang="pug">
  article
    .postbody
      div(class="w-full h-20 pt-2 pb-0 px-1 table")
          div(class="table-cell sm:px-0 px-1 align-middle tracking-widest text-sm font-thin")
            p
              <g-link to="/" class="link float-left mr-1">home/ </g-link>
            p.hd {{ $page.post.headline }}
      VueRemarkContent
</template>

<page-query>
query Post  ($id: ID!) {
  post (id: $id) {
    title
    headline
    content
  }
}
</page-query>
