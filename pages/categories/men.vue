<template lang="pug">
  .container
    div 男性
    hr
    div: nuxt-link(:to="localePath('index', 'zh')") 首頁中文
    div: nuxt-link(:to="'/amp'") 中文 AMP
    div: nuxt-link(:to="'/fbia'") 中文 FBIA
    hr
    div: nuxt-link(:to="localePath('index', 'en')") 首頁英文
    div: nuxt-link(:to="'/amp/en'") 英文 AMP
    div: nuxt-link(:to="'/fbia/en'") 英文 FBIA
    hr
    div: nuxt-link(:to="localePath('categories-men', 'zh')") 男性中文
    div: nuxt-link(:to="'/amp/categories/men'") 男性中文 AMP
    div: nuxt-link(:to="'/fbia/categories/men'") 男性中文 FBIA
    hr
    div: nuxt-link(:to="localePath('categories-men', 'en')") 男性英文
    div: nuxt-link(:to="'/amp/en/categories/men'") 男性英文 AMP
    div: a(href="/fbia/en/categories/men", title="男性英文 FBIA") 男性英文 FBIA
    hr
    div {{ $t('welcome') }}
    pre {{ $i18n.locales }}
    pre {{ $i18n.locale }}
    pre isAMP: {{ $isAMP }}
    pre isFBIA: {{ $isFBIA }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PageCategoryMen',
  mounted () {
    // console.dir(this.$route)
    // console.dir(this.$router)
  }
})
</script>
