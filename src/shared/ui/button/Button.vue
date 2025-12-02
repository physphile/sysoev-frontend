<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui";
import type { HTMLAttributes } from "vue";

import { Primitive } from "reka-ui";

import { cn } from "@/shared/helpers";

import type { ButtonVariants } from ".";

import { buttonVariants } from ".";

interface Props extends PrimitiveProps {
	class?: HTMLAttributes["class"];
	size?: ButtonVariants["size"];
	variant?: ButtonVariants["variant"];
}

const props = withDefaults(defineProps<Props>(), {
	as: "button",
});
</script>

<template>
	<Primitive
		data-slot="button"
		:as="as"
		:as-child="asChild"
		:class="cn(buttonVariants({ variant, size }), props.class)"
	>
		<slot />
	</Primitive>
</template>
