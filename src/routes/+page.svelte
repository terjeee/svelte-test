<script lang="ts">
  import type { PageData } from "./$types";

  import MaxWidth from "../components/MaxWidth.svelte";
  import ToggleSwitch from "../components/ToggleSwitch.svelte";
  import CardSubscriptionPlan from "../components/CardSubscriptionPlan.svelte";
  import "../app.css";

  export let data: PageData;
  const { subscriptions } = data;

  let checked: boolean = false;
</script>

<MaxWidth width={"max-w-screen-lg"}>
  <main>
    <section class="mt-32 flex justify-between items-end">
      <h2 class="text-3xl font-lora tracking-wide">Plans & Pricing</h2>
      <div class="flex items-center gap-4 text-xs tracking-wider">
        <h3 class={!checked ? "font-bold" : ""}>MONTHLY</h3>
        <ToggleSwitch on:checked={(event) => (checked = event.detail)} />¨
        <h3 class={checked ? "font-bold" : ""}>YEARLY</h3>
      </div>
    </section>
    <section class=" mt-10 flex gap-12 justify-between">
      {#each subscriptions as plan}
        <CardSubscriptionPlan {plan} {checked} />
      {/each}
    </section>
    <section />
  </main>
</MaxWidth>
