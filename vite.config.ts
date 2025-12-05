import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [vue(), tailwindcss()],
	resolve: {
		alias: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
