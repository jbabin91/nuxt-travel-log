<script setup lang="ts">
const { label, icon, href, showLabel } = defineProps<{
  label: string;
  icon: string;
  href: string;
  showLabel: boolean;
}>();

const route = useRoute();
</script>

<template>
  <div
    class="tooltip-right"
    :data-tip="showLabel ? undefined : label"
    :class="{ tooltip: !showLabel }"
  >
    <NuxtLink
      :to="href"
      :class="{ 'bg-base-200 font-bold': route.path === href, 'justify-center': !showLabel, 'justify-start': showLabel }"
      class="flex flex-nowrap gap-2 p-2 hover:bg-base-200 hover:cursor-pointer"
    >
      <Icon :name="icon" size="24" />
      <Transition name="grow">
        <span v-if="showLabel">
          {{ label }}
        </span>
      </Transition>
    </NuxtLink>
  </div>
</template>

<style scoped>
.grow-enter-active {
  animation: grow 0.1s;
}
.grow-leave-active {
  animation: grow 0.1s reverse;
}
@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
