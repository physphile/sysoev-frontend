<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { useHead } from "@unhead/vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

import { getTopicsByIdOptions } from "@/shared/api/sysoev/@tanstack/vue-query.gen.ts";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import PageHeader from "@/widgets/PageHeader.vue";

const { params } = useRoute();
const options = computed(() => getTopicsByIdOptions({ path: { id: Number(params.topicId) } }));

const { data: topic } = useQuery(options);

const getDurations = (duration: number) => {
	const hours = Math.floor(duration / 3600);
	const minutes = Math.floor((duration % 3600) / 60);

	if (hours > 0 && minutes > 0) {
		return `${hours} ч ${minutes} мин`;
	} else if (hours > 0) {
		return `${hours} ч`;
	} else if (minutes > 0) {
		return `${minutes} мин`;
	}

	return "";
};

const title = computed(() => topic.value?.name ?? "Проповеди");

useHead({
	title,
	titleTemplate: "%s • Проповеди • Священник Даниил Сысоев",
});
</script>

<template>
	<PageHeader
		:options="[
			{ title: 'Проповеди', to: { name: 'topics' } },
			{ title: topic?.name ?? 'Беседа', to: { name: 'topic', params: { topicId: params.topicId } } },
		]"
	/>
	<div class="flex flex-col gap-4 px-4 pb-4">
		<h1 class="text-2xl font-bold">{{ topic?.name }}</h1>
		<div class="flex flex-col gap-2">
			<Card v-for="lecture in topic?.lectures" :key="lecture.id" class="relative">
				<CardHeader>
					<CardTitle
						><RouterLink :to="{ name: 'lecture', params: { lectureId: lecture.id } }" class="fill-link">{{
							lecture.title
						}}</RouterLink></CardTitle
					>
					<CardDescription>{{ getDurations(lecture.duration) }}</CardDescription>
				</CardHeader>
			</Card>
		</div>
	</div>
</template>
