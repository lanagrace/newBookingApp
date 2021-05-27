<template>
  <div class="sport">
    <div class="container">
			<div class="sports">
			<!-- 	<div class="row" id="sportList"> -->
          <div class="test" v-bind:key="sport.name"  v-for="sport in sports">
            {{sport.name}}
          <!-- <div class="card white">
            <div class="card-content white">
              <span class="card-title">${sport.name}</span>
              <p></p>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn deep-purple lighten-2" style=" width: 100%" href="/courts/${sport._id}"> find a court </a>
            </div>
          </div> -->
        </div>
			
				</div>
			</div>
		<!-- </div> -->
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
      sports: []
    }
  }, 
  mounted(){
    this.getAllSports();
  },
  methods:{
    async getAllSports(){
      let response = await axios.get('http://localhost:3000/getSport');
      this.sport = response.data
    }
  }
}
</script>

<style>
  .container{
    padding-top: 30px;
}

body{
    background-color: #fafafa;
}
</style>