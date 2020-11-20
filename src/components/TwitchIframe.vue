<template>
  <iframe
      :src="link"
      :height="height"
      frameborder="0"
      :width="width">
    </iframe>
</template>

<script>
import {
  defineComponent, ref, onMounted, onUnmounted,
} from 'vue';

export default defineComponent({
  props: {
    link: {
      type: String,
      required: true,
    },
  },
  setup() {
    const width = ref(0);
    const height = ref(0);
    onMounted(() => {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    });
    window.addEventListener('resize', () => {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    });
    onUnmounted(() => {
      window.removeEventListener('resize');
    });
    return {
      width,
      height,
    };
  },
});
</script>
