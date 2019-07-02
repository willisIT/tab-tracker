<template>
		<Panel title="Lyrics">
			<textarea
				v-model="lyrics"
				readonly
			>
			</textarea>
		</Panel>
</template>

<script>
export default {
	props: [
		'lyrics'
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
