<template>
  <div class="contentLeft">
    <img src="../../assets/profiles.jpg" alt="" />
    <div class="infoProfileRight">
      <div>
        <p>ФИО</p>
        <div>{{user.fio}}</div>
      </div>

      <div>
        <p>Полное название должности</p>
        <div>{{user.position}}</div>
      </div>

      <div>
        <p>Мобильный телефон</p>
        <div>{{user.phonehome}}</div>
      </div>

      <div>
        <p>Рабочий телефон</p>
        <div>{{user.phonework}}</div>
      </div>

      <div>
        <p>Email</p>
        <div>{{user.email}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileLeft",
  props: ['user']
};
</script>
<style lang="scss" scoped>
.contentLeft {
  background-color: #ffffff;
  padding-bottom:30px;

  img {
    width: 200px;
    margin-top: 15px;
    margin-left: calc(50% - 100px);
    border-radius: 30px;
  }
   
  .infoProfileRight{
      margin-top:25px;
      margin-left:50px;
      margin-right:50px;
    p{
        margin-top:10px;
        color:#858383
    }
    div{

        div{
            color:black;
            margin-top:5px;
            border-bottom:1px solid #C4C4C4;
        }
    }
  }


}
</style>
