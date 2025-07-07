<script setup>
const props = defineProps({
  item: Object,
});
</script>

<template>
  <div class="card">{{ props.item.body }}</div>
</template>

<style scoped></style>
