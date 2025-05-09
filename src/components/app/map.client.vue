<script setup lang="ts">
import { CENTER_USA, ZOOM_USA } from "~/lib/constants";

const colorMode = useColorMode();
const style = computed(() =>
  colorMode.value === "dark"
    ? "/styles/dark.json"
    : "https://tiles.openfreemap.org/styles/liberty");
</script>

<template>
  <MglMap :map-style="style" :center="CENTER_USA" :zoom="ZOOM_USA">
    <MglNavigationControl />
  </MglMap>
</template>
