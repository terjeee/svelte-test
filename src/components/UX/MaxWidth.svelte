<script lang="ts">
  export let width: String;
</script>

<div class={`px-6 m-auto ${width}`}>
  <slot />
</div>
