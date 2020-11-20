<template>
  <li :style="{color: message.tags.color}">
    {{message.tags["display-name"]}}: <span>{{message.text}}</span>
  </li>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
li {
    font-family: 'Nunito', sans-serif;
    text-decoration: none;
    margin-bottom: .2rem;
    filter: brightness(1.3)
  }
span {
  color: white
}
</style>
