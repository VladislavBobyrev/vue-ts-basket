<template>
  <section class="basket" v-if="isItem">
    <app-card-basket
    v-for="item in basketItem" :key="item.id"
    :body="item.body"
    :id="item.id"
    :title="item.title"
    :userId="item.userId"
    />
  </section>
  <h2 v-else>в корзине пусто добавьте товар</h2>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import AppCardBasket from '@/components/card-basket/AppCardBasket.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: { AppCardBasket },
  setup()
  {
    const store = useStore()

    const { basketItem } = store.state

    let isItem:any = computed(() => (store.state.basketItem.length === 0 ? isItem = false : isItem = true))
    return {
      basketItem,
      isItem,
    }
  },
})
</script>