/* eslint-disable @typescript-eslint/naming-convention */
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import importPlugin from "eslint-plugin-import";
import perfectionist from "eslint-plugin-perfectionist";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
// @ts-expect-error - no types available
import pluginPromise from "eslint-plugin-promise";
// @ts-expect-error - no types available
import pluginSecurity from "eslint-plugin-security";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import pluginVue from "eslint-plugin-vue";
import { configs as tseslint } from "typescript-eslint";

export default defineConfigWithVueTs(
	{
		ignores: ["**/*.d.ts", "dist", "node_modules", "src/shared/api/sysoev", "src/shared/ui", "src/widgets/components"],
	},
	{ files: ["**/*.{js,mjs,cjs,ts,vue}"] },
	tseslint.all,
	perfectionist.configs["recommended-natural"],
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	eslintPluginUnicorn.configs.all,
	pluginSecurity.configs.recommended,
	pluginPromise.configs["flat/recommended"],
	pluginVue.configs["flat/recommended"],
	vueTsConfigs.all,
	{
		rules: {
			"@typescript-eslint/consistent-return": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/naming-convention": "warn",
			"@typescript-eslint/no-magic-numbers": "off",
			"@typescript-eslint/no-unsafe-argument": "warn",
			"@typescript-eslint/prefer-readonly-parameter-types": "off",
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{
					allowNumber: true,
				},
			],
			"import/no-unresolved": ["error", { ignore: ["^/"] }],
			"unicorn/filename-case": "off",
			"unicorn/no-array-callback-reference": "off",
			"unicorn/no-keyword-prefix": "off",
			"unicorn/no-null": "off",
			"unicorn/no-useless-undefined": "off",
			"unicorn/prefer-at": ["error", { checkAllIndexAccess: true }],
			"unicorn/prefer-ternary": "off",
			"unicorn/prevent-abbreviations": "off",
			"vue/multi-word-component-names": "warn",
			"vue/no-template-shadow": "error",
		},
		settings: {
			"import/resolver": {
				typescript: {
					alwaysTryTypes: true,
					project: "./tsconfig.app.json",
				},
			},
		},
	},
	eslintPluginPrettier
);
