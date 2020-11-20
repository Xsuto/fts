<template>
  <ul :class="{show: shouldShow}" ref="chat">,
    <Message v-for="(message,i) in messages" :key="i" :message="message"/>
  </ul>
</template>

<script>
import { defineComponent, onUnmounted, ref } from 'vue';
import tmi from 'tmi.js';
import Message from './Message.vue';

export default defineComponent({
  components: { Message },
  props: {
    channel: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const messages = ref([]);
    const chat = ref(null);
    const shouldShow = ref(true);
    const client = new tmi.Client({
      connection: {
        secure: true,
        reconnect: true,
      },
      channels: [`${props.channel}`],
    });
    client.connect();
    function updateScroll() {
      chat.value.scrollTop = chat.value.scrollHeight;
    }
    client.on('message', (_, tags, message) => {
      // "Alca: Hello, World!"
      messages.value.push({
        text: message,
        tags,
      });
      updateScroll();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'c') shouldShow.value = !shouldShow.value;
    });
    onUnmounted(() => {
      window.removeEventListener('keydown');
    });
    return {
      shouldShow,
      chat,
      messages,
    };
  },
});
</script>
<style lang="scss" scoped>
ul {
  background-color: rgba(0,0,0,0.7);
  height: 50vh;
  position: absolute;
  right: 0;
  top: 0;
  width: 20%;
  z-index: 1000;
  margin: 0;
  padding: 0;
  padding-right: 1rem;
  padding-left: .5rem;
  list-style-type: none;
  overflow-y: scroll;
  opacity: 0;

}
.show {
  opacity: 1;
  height: 100vh;
}
</style>
