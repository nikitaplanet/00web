<template>
	<div class="text-2xl font-medium font-helvetica">{{ title }}</div>
</template>

<script lang="ts" setup>
interface Props {
	title: string;
}

withDefaults(defineProps<Props>(), {
    title: '',
});
</script>

<style scoped></style>
