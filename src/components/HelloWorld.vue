<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="sign">sign</button>
  </div>
</template>

<script>
import { personalSign } from "@metamask/eth-sig-util";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    sign() {
      const privateKey = Buffer.from(
        "4af1bceebf7f3634ec3cff8a2c38e51178d5d4ce585c52d6043e5e2cc3418bb0",
        "hex"
      );
      const helloWorldMessage = `0x${Buffer.from("Hello, world!").toString(
        "hex"
      )}`;
      let msg = personalSign({
        privateKey,
        data: helloWorldMessage,
      });
      console.log(msg);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
