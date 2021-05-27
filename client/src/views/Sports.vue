<template>
  <div class="sport">
    <div class="container">
			<div class="sports">
				<div class="row">
          <div class="col s5" v-bind:key="sport.name"  v-for="sport in sports">
          <div class="card white">
            <div class="card-content white">
              <span class="card-title">{{sport.name}}</span>
              <p></p>
            </div>
            <div class="card-action">
              <a @click="GoToCourt(sport._id)" class="waves-effect waves-light btn deep-purple lighten-2" style=" width: 100%"> find a court </a>
            </div>
          </div>
        </div>
			
				</div>
			</div>
		</div>
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
      this.sports = response.data
    },
    GoToCourt(sportId){
      this.$router.push({name: 'Courts', params: {sportId:sportId}})
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