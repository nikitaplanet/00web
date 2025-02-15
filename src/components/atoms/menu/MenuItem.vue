<template>
	<NLink
		@mouseover="changeColor"
		:to="to"
		class="w-full text-2xl font-normal font-inter transition-all hover:cursor-pointer"
		:class="hoverClass">
		→{{ label }}
	</NLink>
</template>

<script lang="ts" setup>
import NLink from '@components/atoms/link/NLink.vue';
import {ref} from 'vue';

interface Props {
	label: string;
	to: string;
}

withDefaults(defineProps<Props>(), {
	label: '',
	to: '',
});

const colors = [
	'hover:text-accent-1 hover:text-stroke-accent-1',
	'hover:text-accent-2 hover:text-stroke-accent-2',
	'hover:text-accent-3 hover:text-stroke-accent-3',
	'hover:text-accent-4 hover:text-stroke-accent-4',
	'hover:text-accent-5 hover:text-stroke-accent-5',
	'hover:text-accent-6 hover:text-stroke-accent-6',
	'hover:text-accent-7 hover:text-stroke-accent-7',
	'hover:text-accent-8 hover:text-stroke-accent-8',
	'hover:text-accent-9 hover:text-stroke-accent-9',
];
const hoverClass = ref<string>('hover:text-accent-1');

function changeColor() {
	const randomNumber = Math.floor(Math.random() * 9) + 1;

	hoverClass.value = colors[randomNumber - 1];
}
</script>

<style lang="scss" scoped>
.stroke-dynamic {
    -webkit-text-stroke: 8px var(--stroke-color);
}
</style>
