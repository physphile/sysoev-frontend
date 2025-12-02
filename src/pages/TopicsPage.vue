<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { useHead } from "@unhead/vue";
import { RouterLink } from "vue-router";

import { getTopicsOptions } from "@/shared/api/sysoev/@tanstack/vue-query.gen.ts";
import { pluralize } from "@/shared/helpers";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import PageHeader from "@/widgets/PageHeader.vue";

const { data: topics } = useQuery(getTopicsOptions());

useHead({
	title: "Проповеди",
});
</script>

<template>
	<PageHeader :options="[{ to: { name: 'topics' }, title: 'Проповеди' }]" />
	<div class="flex flex-col gap-4 px-4 pb-4">
		<div class="flex flex-col gap-2">
			<Card v-for="{ name, lecturesCount, id } in topics" :key="id" class="relative">
				<CardHeader>
					<CardTitle>
						<RouterLink :to="{ name: 'topic', params: { topicId: id } }" class="fill-link">{{
							name
						}}</RouterLink></CardTitle
					>
					<CardDescription
						>{{ lecturesCount }}
						{{
							pluralize(lecturesCount, {
								zero: "бесед",
								one: "беседа",
								two: "беседы",
								few: "беседы",
								many: "бесед",
								other: "бесед",
							})
						}}</CardDescription
					>
				</CardHeader>
			</Card>
		</div>
	</div>
</template>
