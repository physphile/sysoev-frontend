<script setup lang="ts">
import { useHead } from "@unhead/vue";
import { RouterView } from "vue-router";

import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar";
import AppSidebar from "@/widgets/components/AppSidebar.vue";

useHead({
	titleTemplate: "%s • Священник Даниил Сысоев",
});
</script>

<template>
	<SidebarProvider>
		<AppSidebar />
		<SidebarInset>
			<RouterView />
		</SidebarInset>
	</SidebarProvider>
</template>
