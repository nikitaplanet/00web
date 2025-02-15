<template>
	<aside class="w-100 h-screen overflow-y-scroll md:w-2/6 md:max-w-72 lg:max-w-[600px] p-6">
		<ul class="w-full flex flex-col gap-4">
			<li class="w-full">
				<Logo />
			</li>
			<li>
				<Divider />
			</li>
			<li v-for="item in menu" :key="item.title" class="flex flex-col gap-4">
				<span>
					<MenuLabel :title="item.title" />
					<span v-if="item.children && item.children.length > 0" class="flex flex-col">
						<MenuItem v-for="sub in item.children" :key="sub.label" :label="sub.label" :to="sub.link" />
					</span>
				</span>
				<Divider />
			</li>
		</ul>

		<!--Info-->
		<ul class="mt-32 font-helvetica">
			<li><h2 class="text-2xl">Info</h2></li>
			<li>
				<NLink class="text-2xl transition hover:underline hover:opacity-70" href="/" target="_blank">Instagram</NLink>
			</li>
			<li>
				<NLink @click="copyToClip" class="text-2xl transition hover:underline hover:opacity-70">linlinliang00@gmail.com</NLink>
			</li>
		</ul>

        <!--Copyright-->
        <div class="font-helvetica text-2xl mt-9 block">
            COPYRIGHT ©2025, LIANG LIN
        </div>
	</aside>
</template>

<script lang="ts" setup>
import Logo from '@components/atoms/menu/Logo.vue';
import Divider from '@components/atoms/line/Divider.vue';
import {ref} from 'vue';
import MenuLabel from '@components/atoms/menu/MenuLabel.vue';
import MenuItem from '@components/atoms/menu/MenuItem.vue';
import NLink from '@components/atoms/link/NLink.vue';

interface MenuItem {
	label: string;
	link: string;
}

interface Menu {
	title: string;
	children: MenuItem[];
}

const menu = ref<Menu[]>([
	{
		title: 'Art Director / Designer',
		children: [
			{
				label: 'Brand Identity',
				link: '/',
			},
			{
				label: 'Photography',
				link: '/',
			},
			{
				label: 'Event Visual',
				link: '/',
			},
			{
				label: 'Web Design',
				link: '/',
			},
		],
	},
	{
		title: 'Product Development',
		children: [
			{
				label: 'Display Props',
				link: '/',
			},
			{
				label: 'Hardware Object',
				link: '/',
			},
			{
				label: 'Stuff',
				link: '/',
			},
		],
	},
	{
		title: 'Spatial Plan',
		children: [
			{
				label: 'hof store (Everyday Object)',
				link: '/',
			},
			{
				label: 'Nook Cafe➁',
				link: '/',
			},
			{
				label: 'ShoeArchive Retail',
				link: '/',
			},
			{
				label: '曾宅',
				link: '/',
			},
		],
	},
	{
		title: 'Client Overview',
		children: [
			{
				label: 'chenjingkaioffice®',
				link: '/',
			},
			{
				label: 'Grace Exotic Animal Hospital',
				link: '/',
			},
			{
				label: 'Folktory',
				link: '/',
			},
			{
				label: 'Green Value',
				link: '/',
			},
			{
				label: 'Spring Coop',
				link: '/',
			},
		],
	},
]);

function copyToClip() {}
</script>

<style scoped></style>
