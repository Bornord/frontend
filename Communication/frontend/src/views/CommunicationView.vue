<template>
  <div class="test">
    <input
      type = "button"
      value = "test"
      @click= "hello"
    />
  </div>
</template>

<script>
  hello() {
    console.log("Hello World! ");
  }
</script>
