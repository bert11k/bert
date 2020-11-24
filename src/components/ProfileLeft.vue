<template>
  <div class="contentLeft">
    <img src="../assets/profiles.jpg" alt="" />
    <div class="infoProfileRight">
      <div>
        <p>ФИО</p>
        <div>Каримов Альберт Линарович</div>
      </div>

      <div>
        <p>Полное название должности</p>
        <div>Дилер</div>
      </div>

      <div>
        <p>Мобильный телефон</p>
        <div>+8(917)953-95-95</div>
      </div>

      <div>
        <p>Рабочий телефон</p>
        <div>+8(917)953-95-95</div>
      </div>

      <div>
        <p>Email</p>
        <div>karimov@yandex.ru</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileLeft",
  components: {},
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
