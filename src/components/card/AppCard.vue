<template>
  <div class="card flex-column">
    <div class="card-header">
      <div class="img">preview</div>
      <h2 class="card__title ttu">{{id}}</h2>
    </div>
    <div class="card-body flex-column">
      <h3 class="card__subtitle ttu">{{title}}</h3>
      <p>{{body}}</p>
    </div>
    <div class="card-footer flex-sb">
      <button class="succes" @click="addBasket">в корзину</button>
      <span>{{userId}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: ['body', 'id', 'title', 'userId'],

  setup(context)
  {
    const store = useStore()
    const addBasket = () =>
    {
      store.state.basketItem.push(context)
    }

    return {
      addBasket,
    }
  },
})
</script>