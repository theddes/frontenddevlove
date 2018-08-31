<template>
  <section id="articles" data-inview="false">
    <div class="container">
      <article v-for="article in articles" :key="article.id" :class="`article ${article.Type}`" data-inview="false" v-if="article.Visible">
        <div class="article-body">
          <h5 class="article-title">{{ article.Title }}</h5>
          <p class="article-content" v-html="article.Content" />
        </div>
        <aside class="article-image" :style="`background: url(${article.Image.url}) no-repeat center`" />
      </article>
    </div>
  </section>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  name: 'articles',
  computed: {
    articles () {
      return this.$store.getters['articles']
    }
  },
  async mounted () {
    this.$store.commit('emptyArticles')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            articles {
              _id
              Title
              Content
              Type
              Visible
              Image {
                url
              }
            }
          }`
      }
    })
    response.data.articles.forEach(article => {
      article.Image.url = `${apiUrl}${article.Image.url}`
      this.$store.commit('add', {
        id: article.id || article._id,
        ...article
      })
    })
  }
}
</script>

<style lang="scss">
#articles {
  margin-top: 150px;

  @media (max-width: 1200px) {
    margin-top: 50px;
  }
}

.article {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 150px;
  transition: all 0.5s ease-out;
  transform: translateX(-60px);

  @media (max-width: 1200px) {
    display: block;
    margin-bottom: 50px;
  }

  .article-title {
    color: #44b481;
    font-size: 1.7em;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-bottom: 15px;
  }

  .article-content {
    font-size: 1em;
  }

  .article-content,
  .article-title {
    padding-right: 150px;

    @media (max-width: 1200px) {
      padding: 0;
    }
  }

  .article-image {
    display: inline-block;
    height: auto;
    background-size: cover !important;
    width: 100%;
    position: relative;
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.17);

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #8a95a0;
      z-index: -2;
      left: -6%;
      top: -6%;
      border-radius: 3px;
      transform: rotate(-1deg);
      animation: imageDecoration 1.8s cubic-bezier(1, .38, .63, 1.22) 0s infinite alternate;
    }

    &:after {
      z-index: -1;
      left: -3%;
      top: 3%;
      background: #43b682;
      width: calc(100% + 20px);
      animation-duration: 1s;
    }
  }

  &:nth-child(even) {
    direction: rtl;
    transform: translateX(60px);

    .article-content,
    .article-title {
      padding: 0;
      padding-left: 60px;
      text-align: left;
      direction: ltr;

      @media (max-width: 1200px) {
        padding: 0;
      }
    }
  }

  &.highlight {
    display: block;
    text-align: center;
    width: 720px;
    margin: 0 auto;
    transform: scale(0.97);

    .article-content,
    .article-title {
      padding: 0;
    }
  }

  &[data-inview="true"] {
    opacity: 0.98;
    transform: none;
  }
}

@keyframes imageDecoration {
  0%   {
    opacity: 1;
  }
  100% {
    opacity: 0.6;
  }
}
</style>
