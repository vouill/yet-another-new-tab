<template>
  <div class="home">
    <div class="title "><span class="yellow">websites:</span><form @submit.prevent="addWebsite" class="website">
      <input type="url" v-model="urlInput" required placeholder="url">
    </form></div>
    <draggable v-model="websites" @update="storeWebsiteState">
      <a :href="website.url" class="website" v-for="website in websites"><img height="14px" width="14px" :src="`https://logo.clearbit.com/${website.url.replace(/(^\w+:|^)\/\//, '').split('/')[0]}`">{{website.url}}</a>
    </draggable>

  </div>
</template>

<script>
// @ is an alias to /src
import draggable from "vuedraggable";
import HelloWorld from "@/components/HelloWorld.vue";
import { setItem, getItem } from "../utils/storage";

export default {
  name: "home",
  data() {
    return {
      websites: [],
      urlInput: "",
      labelInput: ""
    };
  },
  components: {
    HelloWorld,
    draggable
  },
  methods: {
    addWebsite() {
      this.websites.push({ url: this.urlInput });
      this.storeWebsiteState();
      this.urlInput = "";
    },
    storeWebsiteState() {
      setItem("websites", this.websites);
    }
  },
  created() {
    getItem("websites", ({ websites }) => {
      this.websites = websites || [];
    });
  }
};
</script>

<style scoped lang="scss">
.website {
  display: flex;
  align-items: center;
  text-decoration: none;
  img {
    margin-right: 0.5em;
  }
}
input {
  margin-right: 1em;
  width: 400px;
}
  .title {
    display: flex;
  }
  form input {
    opacity: 0;
    &:hover, &:focus, &:active {
      opacity: 1;
    }
  }
</style>
