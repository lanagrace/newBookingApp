<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name:'Courts',
  props:['sportId'],
  mounted(){
    console.log(this.sportId)
  }
}
</script>
