import { defaultPlugins } from "@hey-api/openapi-ts";

export default {
	input: "http://localhost:3000/docs/json",
	output: "src/shared/api/sysoev",
	plugins: [...defaultPlugins, "@tanstack/vue-query"],
};
