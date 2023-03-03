<script lang="ts">
  import type { Faq } from "../../types/types";

  import SvgArrow from "../../img/SvgArrow.svelte";
  import MaxWidth from "../UX/MaxWidth.svelte";

  export let faq: Faq;

  let showAnswer = false;
  // const toggleShowAnswer = () => (showAnswer = !showAnswer);
</script>

<MaxWidth width={"max-w-screen-sm"}>
  <div class="py-2 border-b-2 border-opacity-20">
    <button class="w-full flex justify-between items-center" on:click={() => (showAnswer = !showAnswer)}>
      <h6 class="py-1">{faq.question}</h6>
      {#if showAnswer}
        <SvgArrow rotate={true} />
      {:else}
        <SvgArrow />
      {/if}
    </button>
    {#if showAnswer}
      <p class="py-2 text-sm">{faq.answer}</p>
    {/if}
  </div>
</MaxWidth>
