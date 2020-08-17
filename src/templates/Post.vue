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

<style>
.postbody {
  font-family: Noto Sans JP, sans-serif;
  font-feature-settings: "palt";
  letter-spacing: 0.08em;
  padding: 0 8px;
  margin-top: 0;
  margin-bottom: 4rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.4;
  background-color: #F9F9FA;
  color: #141426;
  word-break: break-all;

  @media screen and (min-width: 769px) {
    padding: 0 50px;
    max-width: 1100px;
  }
}

h1 {
  font-family: 'M PLUS 1p', sans-serif;
  font-feature-settings: "palt";
  font-weight: 800;
  margin: 0.75rem 0 0.5rem;
  letter-spacing: 0.13em;
  font-size: 3.8rem;

  @media screen and (min-width: 769px) {
    letter-spacing: 0.18em;
    font-size: 5rem;
  }
}

h2 {
  font-family: 'M PLUS 1p', sans-serif;
  font-feature-settings: "palt";
  font-weight: 800;
  border-bottom-width: 4px;
  border-color: #14142625;
  margin: 2.5rem 0 0.5rem 0;
  letter-spacing: 0.1em;
  font-size: 2.4rem;

  @media screen and (min-width: 769px) {
    letter-spacing: 0.15em;
    font-size: 3rem;
  }
}

h3 {
  font-family: 'M PLUS 1p', sans-serif;
  font-feature-settings: "palt";
  font-weight: 800;
  margin: 1.5rem 0 0.5rem 0;
  letter-spacing: 0.09em;
  font-size: 1.9rem;

  @media screen and (min-width: 769px) {
  letter-spacing: 0.1em;
  font-size: 2.2rem;
  }
}

h4 {
  font-family: 'M PLUS 1p', sans-serif;
  font-feature-settings: "palt";
  font-weight: 800;
  margin: 1.5rem 0 0.5rem 0;
  letter-spacing: 0.065em;
  font-size: 1.6rem;

  @media screen and (min-width: 769px) {
  letter-spacing: 0.075em;
  font-size: 1.9rem;
  }
}

h5 {
  font-family: 'M PLUS 1p', sans-serif;
  font-feature-settings: "palt";
  font-weight: 800;
  margin: 1.5rem 0 0.5rem 0;
  letter-spacing: 0.04em;
  font-size: 1.4rem;

  @media screen and (min-width: 769px) {
  font-size: 1.4rem;
  }
}

h6 {
  font-family: 'M PLUS 1p', sans-serif;
  font-feature-settings: "palt";
  font-weight: 800;
  margin: 1.5rem 0 0.5rem 0;
  letter-spacing: 0.025em;
  font-size: 1.1rem;

  @media screen and (min-width: 769px) {
  font-size: 1.1rem;
  }
}

ul {
  list-style: disc;
  margin: 0;
  padding: 0;
}

ol {
  list-style: decimal;
  margin: 0;
  padding: 0;
}

li {
  margin: 0.3rem 1.5rem;
}

blockquote {
  background-color: #FFF;
  margin: 1.5rem 0;
  padding: 4px 10px;
  border-radius: 2px;
  border-left-width: 6px;
  border-color: #FCD757;
  box-shadow: 0 2.3rem 2.1rem -2rem rgba(0, 0, 0, 0.25);
}

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

pre {
  background-color: #141426;
  color: #F9F9FA;
  margin: 0.75rem 0;
  padding: 5px 13px;
  border-radius: 1px;
  border-left-width: 6px;
  border-color: #48D597;
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
