<template>
  <div>
    {{msg}}
    {{nav.about.title}}
  </div>
</template>
<script lang="ts">
import {ref} from 'vue'
export default {
  setup(){

    const msg = ref<string>('hi')

    interface PageInfo {
      title: string;
    }

    type Page = "home" | "about" | "contact";

    const nav: Record<Page, PageInfo> = {
      about: { title: "about" },
      contact: { title: "contact" },
      home: { title: "home" },
    };

    return {msg,nav}
  }
}
</script>
