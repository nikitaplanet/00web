<template>
	<component v-bind="linkProps" @click="handleClick" :href="isAnchorLink ? href : null" :is="tag" :to="isRouterLink ? to : null">
		<slot />
	</component>
</template>

<script lang="ts" setup>
import {computed} from 'vue';

interface Props {
	to?: string | Record<string, any> | null;
	href?: string | null;
	disabled?: boolean;
	target?: '_self' | '_blank';
	hasUnderline?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	to: null,
	href: null,
	disabled: false,
	target: '_self',
	hasUnderline: true,
});

const emit = defineEmits<{
	(event: 'click', eventObj: Event): void;
}>();

const isRouterLink = computed(() => !!props.to);
const isAnchorLink = computed(() => !!props.href);
const isButton = computed(() => !props.to && !props.href);

const tag = computed(() => {
	if (isButton.value) return 'button';
	if (isRouterLink.value) return 'router-link';
	return 'a';
});

const linkProps = computed(() => {
	if (isButton.value) {
		return {type: 'button', disabled: props.disabled};
	} else if (isRouterLink.value) {
		return {to: props.to, target: props.target};
	} else {
		return {href: props.href, target: props.target};
	}
});

const handleClick = (event: Event) => {
	if (props.disabled) {
		event.preventDefault();
		return;
	}
	emit('click', event);
};
</script>

<style lang="scss" scoped></style>
