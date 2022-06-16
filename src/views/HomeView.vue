<template>
  <div class="home">
    <div> карточки товаров + корзина с удалением карточек и увеличением количества</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from '@/api/axios';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  setup()
  {
    const data = axios('/').then(i => i.data).then(i=> console.log(i))
    console.log(data);
  },
});
</script>