import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import LecturePage from "@/pages/LecturePage.vue";
import TopicPage from "@/pages/TopicPage.vue";
import TopicsPage from "@/pages/TopicsPage.vue";

const routes: RouteRecordRaw[] = [
	{
		name: "home",
		path: "/",
		redirect: "/topics",
	},
	{
		children: [
			{
				component: TopicsPage,
				name: "topics",
				path: "",
			},
			{
				children: [
					{
						component: TopicPage,
						name: "topic",
						path: "",
					},
					{
						children: [
							{
								component: LecturePage,
								name: "lecture",
								path: "",
							},
						],
						path: String.raw`:lectureId(\d+)`,
					},
				],
				path: String.raw`:topicId(\d+)`,
			},
		],
		path: "/topics",
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
