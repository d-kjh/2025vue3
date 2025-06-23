<script setup>
//props 외부에서 들어오는 데이터
const props = defineProps({
  color: String,
});
</script>

<template>
  <!-- :style > 이것은 vue 문법
   {{  }} > 이것은 콧수염 (Mustache 템플릿) -->
  <div :style="{ color: props.color }">{{ props.color || 'black' }} Tire</div>
</template>

<style scoped></style>
