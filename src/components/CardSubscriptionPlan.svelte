<script lang="ts">
  import type { SubscriptionPlan } from "../types/Subscription";

  import CheckMark from "../img/CheckMark.svelte";

  export let plan: SubscriptionPlan;
  const { id, title, priceMonth, priceYear, features } = plan;
  export let checked: boolean;
</script>

<article class="w-1/2 p-8 border border-black border-opacity-25 rounded">
  <header class="border-b-2 border-clr-green">
    <h2>{title}</h2>
    <h4>
      $ {checked ? priceMonth : priceYear} /{checked ? "YEAR" : "MONTH"}
    </h4>
  </header>
  <ul class="py-6">
    {#each features as feature}
      <li class="py-2 flex items-center gap-2">
        <CheckMark />
        <span class="text-sm">
          {feature}
        </span>
      </li>
    {/each}
  </ul>
  <button id={`${id + "_" + checked ? "month" : "year"}`}>START HERE</button>
</article>
