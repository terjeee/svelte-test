<script lang="ts">
  import "../components/MaxWidth.svelte";
  import MaxWidth from "../components/MaxWidth.svelte";
  import Logo from "../img/logo.svelte";
</script>

<nav>
  <MaxWidth width={"max-w-screen-xl"}>
    <div class="py-4 flex justify-between items-center shadow-m">
      <div>
        <Logo />
      </div>
      <div class="flex gap-6 text-sm ">
        <a href="/product" class="hover:text-clr-green">Product</a>
        <a href="/about" class="hover:text-clr-green">Templates</a>
        <a href="/pricing" class="hover:text-clr-green">Pricing</a>
        <a href="/reviews" class="hover:text-clr-green">Reviews</a>
      </div>
      <div class="flex gap-2 text-sm">
        <button class="px-3 py-1 font-bold bg-clr-white text-clr-green border-2 border-clr-green rounded">LOG IN</button>
        <button class="px-3 py-1 font-bold bg-clr-green text-clr-white border-2 border-clr-green rounded">START FREE</button>
      </div>
    </div>
  </MaxWidth>
</nav>

<slot />

<footer class="bg-blue-50 mt-auto">
  <MaxWidth width={"max-w-screen-xl"}>26. Februar 2023</MaxWidth>
</footer>
