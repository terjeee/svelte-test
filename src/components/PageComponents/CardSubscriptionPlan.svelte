<script lang="ts">
  import type { SubscriptionPlan } from "../../types/types";

  import CheckMark from "../../img/SvgCheckMark.svelte";

  export let plan: SubscriptionPlan;
  const { id, title, priceMonth, priceYear, features } = plan;

  export let checked: boolean;
</script>

<article class="w-1/2 p-12  border-opacity-25 rounded shadow-card">
  <header class="border-b-2 border-clr-green">
    <h2 class="text-lg font-bold">{title}</h2>
    <h4 class="py-4">
      <span class="text-xl align-top">$</span>
      <span class="px-2 text-4xl font-bold">
        {checked ? priceYear : priceMonth}
      </span>
      <span class="align-bottom tracking-wide">
        /{checked ? "YEAR" : "MONTH"}
      </span>
    </h4>
  </header>
  <ul class="py-6">
    {#each features as feature}
      <li class="py-2.5 flex items-center gap-2 tracking-tight">
        <CheckMark />
        <span class="text-sm">
          {feature}
        </span>
      </li>
    {/each}
  </ul>
  <button
    class="py-3 w-full font-bold bg-clr-green text-sm text-clr-white border-2 border-clr-green rounded"
    id={`${id + "_" + checked ? "month" : "year"}`}>START HERE</button
  >
</article>
