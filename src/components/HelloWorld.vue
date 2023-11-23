<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="sign">sign</button>
    <button @click="pack">pack</button>
  </div>
</template>

<script>
import {ethers} from 'ethers'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
     pack(){
      const v = ethers.utils.solidityPack(["uint256","uint256"],[1,2])
      const hash = ethers.utils.keccak256(v)
      console.log(hash)

     },

    sign() {
      let msg = window["EthSignUtils"].personalSign({
        privateKey: this.hexToUint8Array(
          "4af1bceebf7f3634ec3cff8a2c38e51178d5d4ce585c52d6043e5e2cc3418bb0"
        ),
        data: "hello world",
      });
      console.log(msg);
    },
    hexToUint8Array(hexString) {
      // 去除字符串中的空格
      hexString = hexString.replace(/\s/g, "");

      // 确保 hexString 的长度为偶数
      if (hexString.length % 2 !== 0) {
        throw new Error("无效的十六进制字符串");
      }

      // 创建一个 Uint8Array 来存储结果
      const uint8Array = new Uint8Array(hexString.length / 2);

      // 将每两个字符转换为一个字节的十六进制值
      for (let i = 0; i < hexString.length; i += 2) {
        const byteValue = parseInt(hexString.substr(i, 2), 16);
        uint8Array[i / 2] = byteValue;
      }

      return uint8Array;
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
