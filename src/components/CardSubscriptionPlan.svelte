<script lang="ts">
  import type { SubscriptionPlan } from "../types/Subscription";

  import CheckMark from "../img/CheckMark.svelte";

  export let plan: SubscriptionPlan;
</script>

<article class="w-1/2 p-8 border border-black border-opacity-25 rounded">
  <header class="border-b-2 border-clr-green">
    <h2>{plan.title}</h2>
    <h4>$ <span>{plan.price}</span> /MONTH</h4>
  </header>
  <ul>
    {#each plan.features as feature}
      <li class="flex">
        <CheckMark />
        {feature}
      </li>
    {/each}
  </ul>
  <button id={plan.id}>START HERE</button>
</article>
