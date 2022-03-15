<script>
export default {
	name: 'NavLink',
	props: ['url', 'text']
}
</script>

<template>
	<div>Item: {{ $route.params.name }}</div>
</template>