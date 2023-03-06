<script lang="ts">
  import type { PageData } from "./$types";

  import MaxWidth from "../components/UX/MaxWidth.svelte";
  import ToggleSwitch from "../components/UX/ToggleSwitch.svelte";
  import CardSubscriptionPlan from "../components/PageComponents/CardSubscriptionPlan.svelte";
  import AddOns from "../components/PageComponents/AddOns.svelte";
  import StartHere from "../components/PageComponents/StartHere.svelte";
  import FaqSingle from "../components/PageComponents/FaqSingle.svelte";
  import "../app.css";

  export let data: PageData;
  const { subscriptions } = data;

  let checked: boolean = false;
</script>

<main>
  <MaxWidth width={"max-w-screen-lg"}>
    <section>
      <div class="mt-14 flex justify-between items-center md:items-end">
        <h2 class="mr-20 text-3xl font-lora tracking-wide">Plans & Pricing</h2>
        <div class="flex flex-col items-center gap-2 text-xs tracking-wider sm:flex-row sm:gap-4">
          <h3 class={!checked ? "font-bold" : ""}>MONTHLY</h3>
          <ToggleSwitch on:checked={(event) => (checked = event.detail)} />
          <h3 class={checked ? "font-bold" : ""}>YEARLY</h3>
        </div>
      </div>
      <div class="mt-12 flex flex-col gap-8 sm:flex-row sm:justify-between sm:gap-6 md:gap-12">
        {#each subscriptions as plan}
          <CardSubscriptionPlan {plan} {checked} />
        {/each}
      </div>
    </section>
    <AddOns />
    <StartHere />
    <section class="my-10 sm:my-16">
      <h5 class="py-10 text-center text-2xl text-clr-green">Frequently Asked Questions</h5>
      <FaqSingle faqInfo={{ question: "How does the 14 day free trial work?", answer: ":)" }} />
      <FaqSingle faqInfo={{ question: "Can I change plans anytime?", answer: ":)" }} />
      <FaqSingle faqInfo={{ question: "How do I pause my Bonsai subscription?", answer: ":)" }} />
      <FaqSingle faqInfo={{ question: "What is your refund policy?", answer: ":)" }} />
    </section>
  </MaxWidth>
</main>
