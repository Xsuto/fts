<template>
  <div>
    <label for="channel">Channel name</label>
    <input type="channel" name="channel" v-model="channel">
    <button @click="handleClick">Go</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({ channel: '' }),
  methods: {
    handleClick() {
      if (this.channel) this.$router.push({ name: 'dashboard', params: { channel: this.channel } });
    },
  },
});
</script>

<style scoped lang="scss">
div {
  text-align: left;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
