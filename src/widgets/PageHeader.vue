<script setup lang="ts">
import { type RouteLocationRaw, RouterLink } from "vue-router";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import { Separator } from "@/shared/ui/separator";
import { SidebarTrigger } from "@/shared/ui/sidebar";

const { options } = defineProps<{
	options: {
		title: string;
		to: RouteLocationRaw;
	}[];
}>();
</script>

<template>
	<header class="flex h-16 shrink-0 items-center gap-2">
		<div class="flex items-center gap-2 px-4">
			<SidebarTrigger class="-ml-1" />
			<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
			<Breadcrumb>
				<BreadcrumbList>
					<template v-for="(option, index) in options" :key="option.title">
						<BreadcrumbItem class="hidden md:block">
							<BreadcrumbLink as-child>
								<RouterLink :to="option.to">
									{{ option.title }}
								</RouterLink>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator v-if="index < options.length - 1" />
					</template>
				</BreadcrumbList>
			</Breadcrumb>
		</div>
	</header>
</template>
