<template>
  <div class="home">
    <div class="title">Websites:</div>
    <draggable v-model="websites" @update="storeWebsiteState">
      <div class="website" v-for="website in websites"><img height="14px" :src="`https://logo.clearbit.com/${website.url.replace(/(^\w+:|^)\/\//, '').split('/')[0]}`"><a :href="website.url">{{website.url}}</a></div>
    </draggable>
    <form @submit.prevent="addWebsite" class="website">
      <input type="url" v-model="urlInput" required placeholder="url">
      <input v-model="labelInput"  type="text" required placeholder="label">
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import draggable from "vuedraggable";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    const websites = localStorage.getItem("websites");
    return {
      websites: (websites && JSON.parse(websites)) || [],
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
      this.websites.push({ url: this.urlInput, label: this.labelInput });
      this.storeWebsiteState()
      this.urlInput = "";
      this.labelInput = "";
    },
    storeWebsiteState(){
        localStorage.setItem("websites", JSON.stringify(this.websites));
    }
  }
};
</script>

<style scoped lang="scss">
.website {
  display: flex;
  align-items: center;
  a {
    margin-left: 0.5em;
    text-decoration: none;
  }
}
input {
  margin-right: 1em;
}
</style>
