<script setup lang="ts">
const { label, name, type, error } = defineProps<{
  label: string;
  name: string;
  type?: "text" | "textarea" | "number";
  disabled?: boolean;
  error?: string;
}>();
</script>

<template>
  <fieldset class="fieldset">
    <legend class="fieldset-legend">
      {{ label }}
    </legend>
    <Field
      :as="type === 'textarea' ? 'textarea' : 'input'"
      :name="name"
      :type="type || 'text'"
      :disabled="disabled"
      class="w-full"
      :class="{
        'input-error': error,
        'input': !type || type === 'text' || type === 'number',
        'textarea': type === 'textarea',
      }"
    />
    <p v-if="error" class="fieldset-label text-error">
      {{ error }}
    </p>
  </fieldset>
</template>
