<script lang="ts">
  export let width: String;
</script>

<div class={`px-6 ${width} m-auto`}>
  <slot />
</div>
