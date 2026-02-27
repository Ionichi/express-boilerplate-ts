import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
		plugins: {
			js,
			prettier: eslintPluginPrettier,
		},
		extends: ["js/recommended"],
		languageOptions: {
			globals: globals.node,
		},
		rules: {
			"prettier/prettier": "error",
			...eslintConfigPrettier.rules,
			curly: ["error", "multi-line", "consistent"],
			"no-console": "off",
			"no-var": "error",
			"prefer-const": "error",
			"no-shadow": "off",
			"@typescript-eslint/no-shadow": [
				"error",
				{ allow: ["err", "resolve", "reject"] },
			],

			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_" },
			],
			"@typescript-eslint/lines-between-class-members": "off",
			"@typescript-eslint/no-throw-literal": "off",
		},
	},
	tseslint.configs.recommended,
]);
