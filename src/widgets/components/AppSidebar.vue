<script setup lang="ts">
import type { SidebarProps } from "@/shared/ui/sidebar";

import { ListMusic } from "lucide-vue-next";

import NavMain from "@/widgets/components/NavMain.vue";
import { Sidebar, SidebarContent } from "@/shared/ui/sidebar";

const props = withDefaults(defineProps<SidebarProps>(), {
	variant: "inset",
});
</script>

<template>
	<Sidebar v-bind="props">
		<SidebarContent >
			<NavMain :items="[{ icon: ListMusic, title: 'Проповеди', to: { name: 'topics' } }]" />
		</SidebarContent>
	</Sidebar>
</template>
