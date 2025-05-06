<script setup lang="ts">
const isSidebarOpen = ref(true);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
  localStorage.setItem("isSidebarOpen", isSidebarOpen.value.toString());
}

onMounted(() => {
  isSidebarOpen.value = localStorage.getItem("isSidebarOpen") === "true";
});
</script>

<template>
  <div class="flex flex-1">
    <div class="bg-base-100 transition-all duration-300" :class="{ 'w-64': isSidebarOpen, 'w-16': !isSidebarOpen }">
      <div class="flex p-2" :class="{ 'justify-center': !isSidebarOpen, 'justify-end': isSidebarOpen }">
        <Icon v-if="isSidebarOpen" name="tabler:chevron-left" size="32" class="hover:cursor-pointer" @click="toggleSidebar" />
        <Icon v-else name="tabler:chevron-right" size="32" class="hover:cursor-pointer" @click="toggleSidebar" />
      </div>
      <div class="flex flex-col">
        <SidebarButton :show-label="isSidebarOpen" icon="tabler:map" label="Locations" href="/dashboard" />
        <SidebarButton :show-label="isSidebarOpen" icon="tabler:circle-plus-filled" label="Add Location" href="/dashboard/add" />
        <div class="divider" />
        <SidebarButton :show-label="isSidebarOpen" icon="tabler:logout-2" label="Sign Out" href="/sign-out" />
      </div>
    </div>
    <div class="flex-1">
      content
    </div>
  </div>
</template>
