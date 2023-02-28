<script lang="ts">
  import type { SubscriptionPlan } from "../types/Subscription";
  interface Data {
    subscriptions: SubscriptionPlan[];
  }

  import MaxWidth from "../components/MaxWidth.svelte";
  import ToggleSwitch from "../components/ToggleSwitch.svelte";
  import CardSubscriptionPlan from "../components/CardSubscriptionPlan.svelte";
  import "../app.css";

  export let data: Data;
  const { subscriptions } = data;

  // let monthlySwitch: boolean = true;
</script>

<MaxWidth width={"max-w-screen-lg"}>
  <main>
    <section class="mt-32 flex justify-between">
      <h2 class="text-2xl">Plans & Pricing</h2>
      <div class="flex items-center gap-4 text-sm">
        <h3>MONTHLY</h3>
        <ToggleSwitch />
        <h3>YEARLY</h3>
      </div>
    </section>
    <section class=" mt-10 flex gap-6 justify-between">
      {#each data.subscriptions as plan}
        <CardSubscriptionPlan {plan} />
      {/each}
    </section>
  </main>
</MaxWidth>
