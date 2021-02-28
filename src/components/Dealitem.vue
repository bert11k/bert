<template>
  <div class="dealitem">
    <h2>Сделка №2421</h2>
    <p>Заказчик: ООО ТАТНЕФТЬ</p>
    <p>Номер договора: №2421</p>
    <p>Дата заключения: 28.02.2021</p>
    <p>Дата оплаты: 28.02.2021</p>
    <p>Адрес заказчика: ул. Ленина 201</p>
   <p>
      Статус заказа:
      <select name="Stats" id="Status">
        <option value="">В ожидании</option>
        <option value="">В отправке</option>
        <option value="">Выполнен</option>
        <option value="">Отклонен</option>
      </select>
    </p></div>
</template>

<script>
export default {
  name: "Dealitem",
};
</script>
<style lang="scss" scoped>
.dealitem{
    margin-left: 50px;
    padding-top: 20px;
    line-height: 2.2rem;
    p{
        font-size: 1.3em;
    }
    h2{
  font-size: 1.6em;
}
select{
    font-size: 20px;
}
}
</style>
