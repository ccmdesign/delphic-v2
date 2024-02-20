<template>
  <ccm-layout sidebar="false">
    <h1>test</h1>
    <div class="list">
      <ul class="list__item" v-for="post in data.articles" v-bind:key="post.slug">
        <li><nuxt-link :to="post.url">{{ post.title }}</nuxt-link></li>
      </ul>
    </div>
  </ccm-layout>
</template>

<script setup>
  // recuperar os dados do content. voce pode usar o querycontent
  // para filtrar os dados aqui.
  const articles = await queryContent('articles').find();

  // declaro uma variável reactive para interagir com o conteudo exibido em tempo real
  // alteracoes em variaveis reactive refletem no template diretamente
  const data = reactive({
      articles: [],
  });

  // exemplo de tratamento de dados apenas exemplo:
  articles.forEach(post => {
    const article = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/insights/${post.slug}`
    }
    data.articles.push(article);
  });

</script>

<style lang="scss" scoped>

</style>
