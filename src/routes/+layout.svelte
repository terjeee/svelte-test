<script lang="ts">
  import "../components/UX/MaxWidth.svelte";
  import MaxWidth from "../components/UX/MaxWidth.svelte";
  import Logo from "../img/SvgLogo.svelte";

  export const prerender = true;
</script>

<nav>
  <MaxWidth width={"max-w-screen-xl"}>
    <div class="py-4 flex justify-between items-center border-b border-black border-opacity-10">
      <div>
        <Logo />
      </div>
      <div class="flex gap-6 text-sm">
        <a href="/" class="hover:text-clr-green">Product</a>
        <a href="/" class="hover:text-clr-green">Templates</a>
        <a href="/" class="hover:text-clr-green">Pricing</a>
        <a href="/" class="hover:text-clr-green">Reviews</a>
      </div>
      <div class="flex gap-2 text-xs">
        <button class="px-3 py-1.5 font-bold bg-clr-white text-clr-green border-2 border-clr-green rounded"
          ><a href="/">LOG IN</a>
        </button>
        <button class="px-3 py-1 font-bold bg-clr-green text-clr-white border-2 border-clr-green rounded"
          ><a href="/">START FREE</a>
        </button>
      </div>
    </div>
  </MaxWidth>
</nav>

<slot />

<footer class="mt-28 mb-14">
  <MaxWidth width={"max-w-screen-sm"}>
    <div class="flex justify-evenly">
      <div>
        <h2 class="pb-8 font-bold">BONSAI</h2>
        <ul class="ml-auto flex flex-col gap-2 text-sm">
          <li><a href="/" class="hover:text-clr-green">About</a></li>
          <li><a href="/" class="hover:text-clr-green">Careers</a></li>
          <li><a href="/" class="hover:text-clr-green">Support</a></li>
          <li><a href="/" class="hover:text-clr-green">Linkedin</a></li>
          <li><a href="/" class="hover:text-clr-green">Twitter</a></li>
          <li><a href="/" class="hover:text-clr-green">Privacy policy</a></li>
          <li><a href="/" class="hover:text-clr-green">Legal</a></li>
        </ul>
      </div>
      <div>
        <h1 class="pb-8 font-bold">PRODUCT</h1>
        <ul class="flex flex-col gap-2 text-sm">
          <li><a href="/" class="hover:text-clr-green">Proposals</a></li>
          <li><a href="/" class="hover:text-clr-green">Contracts</a></li>
          <li><a href="/" class="hover:text-clr-green">Invoicing</a></li>
          <li><a href="/" class="hover:text-clr-green">Client CRM</a></li>
          <li><a href="/" class="hover:text-clr-green">Time Tracking</a></li>
          <li><a href="/" class="hover:text-clr-green">Forms</a></li>
          <li><a href="/" class="hover:text-clr-green">Accounating</a></li>
          <li><a href="/" class="hover:text-clr-green">Bonsai Tax</a></li>
          <li><a href="/" class="hover:text-clr-green">Bonsai Cash</a></li>
        </ul>
        <br />
        <h2 class="text-clr-green font-bold">Pricing</h2>
        <ul>
          <li>Bonsai Reviews</li>
        </ul>
      </div>
    </div>
  </MaxWidth>
</footer>
