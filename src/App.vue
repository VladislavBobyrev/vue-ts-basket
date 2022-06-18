<template>
<TheHeader/>
<AppMain/>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/header/TheHeader.vue'
import AppMain from '@/components/main/AppMain.vue'

export default defineComponent({
  components: { TheHeader, AppMain },
})
</script>