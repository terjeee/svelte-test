<script>
  import "../components/MaxWidth.svelte";
  import MaxWidth from "../components/MaxWidth.svelte";
</script>

<nav class="bg-blue-50">
  <MaxWidth>
    <div class="px-6 py-4 flex justify-between">
      <div>
        <h1>LOGO</h1>
      </div>
      <div class="flex gap-10">
        <div>
          <a href="/product" class="hover:scale-150">Product</a>
          <a href="/about" class="hover:scale-50">Templates</a>
          <a href="/pricing">Pricing</a>
          <a href="/reviews">Reviews</a>
        </div>
        <div>
          <button>Log In</button>
          <button>Start Free</button>
        </div>
      </div>
    </div>
  </MaxWidth>
</nav>

<slot />

<footer class="bg-blue-50 mt-auto">26. Februar 2023</footer>
