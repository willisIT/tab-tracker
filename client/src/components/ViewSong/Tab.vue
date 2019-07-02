<template>
		<Panel title="Tabs">
			<textarea
				v-model="tab"
				readonly
			>
			</textarea>
		</Panel>
</template>

<script>
export default {
	props: [
		'tab'
	]
}
</script>

<style scoped>
textarea {
		width: 100%;
		overflow: auto;
		border: none;
		border-style: none;
		border-color: transparent;
		height: 513px;
		text-align: center;
	}
</style>
