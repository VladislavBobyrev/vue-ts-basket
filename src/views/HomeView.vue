<template>
  <section class="cards">
    <AppCard v-for="card in data" :key="card.id"
    :body="card.body"
    :id="card.id"
    :title="card.title"
    :userId="card.userId"
    />
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import AppCard from '@/components/card/AppCard.vue'



export default defineComponent({
  name: 'HomeView',
  components: { AppCard },
  setup()
  {
    const store = useStore()

    const getAsyncCard = async () =>
    {
      await store.dispatch('getAsyncCard')
    }
    getAsyncCard()

    const data = computed(() => (store.state.data.length > 0 ? store.state.data : []))
    return {
      data,
    }
  },
})
</script>