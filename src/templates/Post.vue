<template lang="pug">
  article
    div(class="w-full h-20 pt-2 pb-0 px-1 table")
        div(class="table-cell sm:px-0 px-1 align-middle tracking-widest text-sm font-thin")
          p
            <g-link to="/" class="link float-left mr-1">home/ </g-link>
          p.hd {{ $page.post.headline }}
    VueRemarkContent
</template>

<style>
  div p {
    @apply mx-0 my-2 text-base font-normal tracking-wider leading-relaxed;
  }

  div p strong {
    @apply font-bold;
  }

  div p em {
    @apply italic;
  }

  div p a {
    color: #489FDF;
  }

  div div p a {
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    color: #489FDF;
  }

  .hd {
    @apply tracking-widest text-sm font-thin;
  }

  h1 {
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 800;
    letter-spacing: 0.2em;
    font-size: 24pt;
    margin: 0.75rem 0 0.5rem;
  }

  h2 {
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 800;
    letter-spacing: 0.15em;
    font-size: 20pt;
    border-bottom-width: 4px;
    border-color: #14142625;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 800;
    letter-spacing: 0.1em;
    font-size: 18pt;
    margin-bottom: 0.25rem;
  }

  h4 {
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 800;
    letter-spacing: 0.075em;
    font-size: 16pt;
    margin-bottom: 0.2rem;
  }

  h5 {
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 800;
    letter-spacing: 0.05em;
    font-size: 14pt;
    margin-bottom: 0.2rem;
  }

  h6 {
    font-family: 'M PLUS 1p', sans-serif;
    font-weight: 800;
    letter-spacing: 0.025em;
    font-size: 12pt;
    margin-bottom: 0.25rem;
  }

  blockquote {
    background-color: #FFF;
    margin: 0.75rem 0;
    padding: 4px 10px;
    border-radius: 2px;
    border-left-width: 6px;
    border-color: #F99FC9;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .2);
  }

  pre {
    background-color: #141426;
    color: #F9F9FA;
    margin: 0.75rem 0;
    padding: 5px 13px;
    border-radius: 1px;
    border-left-width: 6px;
    border-color: #ffb95e;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    counter-reset: li_count;
  }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li::before {
    content: "";
    width: 8px;
    height: 8px;
    display: inline-block;
    background-image: url(asterisk.png);
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle;
    position: relative;
    top: -1px;
    margin-right: 5px;
  }

  ol li::before {
    counter-increment: li_count;
    content: counter(li_count)".";
    color: #14142635;
    margin-right: 5px;
  }

  li {
    margin: 0.5rem 0;
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
