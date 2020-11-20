<template>
  <div ref="dashboard" class="dashboard">
    <twitch-iframe :link="link"/>
    <Chat :channel="channel"/>
  </div>
</template>

<script>
import {
  defineComponent, ref, computed,
} from 'vue';
import { useRoute } from 'vue-router';
import TwitchIframe from '@/components/TwitchIframe.vue';
import Chat from '@/components/Chat.vue';

export default defineComponent({
  components: { TwitchIframe, Chat },

  setup() {
    const route = useRoute();
    const dashboard = ref(null);

    const channel = computed(() => route.params.channel);
    const link = computed(() => `https://player.twitch.tv/?channel=${channel.value}&parent=localhost`);

    return {
      channel,
      link,
      dashboard,
    };
  },

});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
.dashboard {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
