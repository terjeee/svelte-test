<script lang="ts">
  import ToggleSwitch from "../components/ToggleSwitch.svelte";
  import MaxWidth from "../components/MaxWidth.svelte";
  import "../app.css";

  let monthlySwitch: boolean = true;
</script>

<MaxWidth width={"max-w-screen-lg"}>
  <div class="flex justify-between">
    <h2>Plans & Pricing</h2>
    <div class="flex">
      <h3>MONTHLY</h3>
      <ToggleSwitch />
      <h3>YEARLY</h3>
    </div>
  </div>
</MaxWidth>

<style></style>
