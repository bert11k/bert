<template>
 <div>
     <h3>Сделки на сегодня</h3>
     <Order v-for="i of 3" :key="i"/>
 </div>
 
  </template>

<script>

import Order from "../components/Order"
export default {
  name: "TransactionDay",
  components: {Order},
  
};
</script>
<style lang="scss" scoped>
div{
    background-color: white;
    max-height: 45%;
    overflow: auto;
    h3{
        margin-top: 20px;
        margin-left:20px ;
    }
}

</style>