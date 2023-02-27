<script lang="ts">
  import ToggleSwitch from "../components/ToggleSwitch.svelte";
  import MaxWidth from "../components/MaxWidth.svelte";
  import CardPlan from "../components/CardPlan.svelte";
  import "../app.css";

  let monthlySwitch: boolean = true;
</script>

<MaxWidth width={"max-w-screen-lg"}>
  <main>
    <section class="mt-20 flex justify-between">
      <h2 class="text-2xl">Plans & Pricing</h2>
      <div class="flex items-center gap-4 text-sm">
        <h3>MONTHLY</h3>
        <ToggleSwitch />
        <h3>YEARLY</h3>
      </div>
    </section>
    <section class=" mt-10 flex gap-6 justify-between">
      <CardPlan title={"Workflow"} />
      <CardPlan title={"Workflow Plus"} />
    </section>
  </main>
</MaxWidth>
s

<style></style>
