<template>
  <div>
    <!-- <h1>Home</h1>
    <h2>Connected? {{ connected }}</h2>
    <div>
      <button @click="tickleConnection">
        {{ connected ? 'disconnect' : 'connect' }}
      </button>
    </div>
    <h2>Send Message</h2>
    <div>
      <input v-model="sendMessage" placeholder="Send Message" />
      <button @click="send">Send</button>
    </div>
    <h2>Message Received</h2>
    <p>{{ receivedMessages }}</p> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { defineComponent, onBeforeMount, onMounted, ref } from 'vue';
// import SockJS from 'sockjs-client';
// import Stomp from 'webstomp-client';

export default defineComponent({
  components: {},
  setup() {
    // const socket = new SockJS('http://localhost:8080/websocket-endpoint');
    // const connected = ref(false);
    // const sendMessage = ref(null);
    // const receivedMessages = ref([]);
    // const stompClient = ref(null);
    // const send = () => {
    //   console.log('Send message:' + sendMessage.value);
    //   if (stompClient.value && stompClient.value.connected) {
    //     stompClient.value.send(
    //       '/app-receive/from-client',
    //       sendMessage.value,
    //       {},
    //     );
    //   }
    // };
    // const connect = () => {
    //   stompClient.value = Stomp.over(socket);
    //   stompClient.value.connect(
    //     {},
    //     (frame: any) => {
    //       connected.value = true;
    //       console.log(frame);
    //       stompClient.value.subscribe('/global-message/tick', (tick: any) => {
    //         console.log(tick);
    //         receivedMessages.push(tick);
    //       });
    //     },
    //     (error: any) => {
    //       console.log(error);
    //       connected.value = false;
    //     },
    //   );
    // };
    // const disconnect = () => {
    //   if (stompClient.value) {
    //     stompClient.value.disconnect();
    //   }
    //   connected.value = false;
    // };
    // const tickleConnection = () => {
    //   connected.value ? disconnect() : connect();
    // };
    // onBeforeMount(() => connect());
    // return {
    //   receivedMessages,
    //   sendMessage,
    //   connected,
    //   tickleConnection,
    //   send,
    // };
  },
});
</script>

<style lang="scss" src="./DChat.scss" scoped />
