<script lang="ts">
  import type { Faq } from "../../types/types";

  import SvgArrow from "../../img/SvgArrow.svelte";
  import MaxWidth from "../UX/MaxWidth.svelte";

  export let faqInfo: Faq;

  let showAnswer = false;
  // const toggleShowAnswer = () => (showAnswer = !showAnswer);
</script>

<MaxWidth width={"max-w-screen-sm px-0"}>
  <div class="py-3 border-b-2 border-opacity-20">
    <button class="w-full flex gap-4 justify-between items-center text-left" on:click={() => (showAnswer = !showAnswer)}>
      <h6 class="py-1">{faqInfo.question}</h6>
      {#if showAnswer}
        <SvgArrow rotate={true} />
      {:else}
        <SvgArrow />
      {/if}
    </button>
    {#if showAnswer}
      <p class="py-2 text-sm">{faqInfo.answer}</p>
    {/if}
  </div>
</MaxWidth>
