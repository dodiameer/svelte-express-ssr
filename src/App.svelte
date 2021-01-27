<script>
  export let name = new URL(location.href).searchParams.get("name") ?? "world";
  let counter = 0;
</script>

<main>
  <h1>Hello {name}!</h1>
  <button on:click="{() => counter++}">Counter: {counter}</button>
</main>

<style>
  h1 {
    color: orangered;
  }
</style>
