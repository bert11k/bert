<template>
  <div class="dealitem">
    <h2>{{deal.title}}</h2>
    <p>Заказчик: {{deal.customer}}</p>
    <p>Номер договора: {{deal.num}}</p>
    <p>Дата заключения: {{deal.date}}</p>
    <p>Вид сделки: {{deal.type}}</p>
    <p>Адрес заказчика: {{deal.address}}</p>
    <p>
      Статус заказа:
      <select id="status" name="stats" v-model="status" @change="statusChange">
        <option value="1">В ожидании</option>
        <option value="2">В отправке</option>
        <option value="3">Выполнен</option>
        <option value="4">Отклонен</option>
      </select>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Dealitem',
    props: ['deal'],
    data(){
      return {
        status: this.deal.status
      }
    },
    methods:{
      async statusChange(){
        try{
          await this.$store.dispatch('changeDealStatus', {...this.deal, status: this.status})
          if(+this.status === 3){
            await this.$store.dispatch('completeDeal', {...this.deal, status: this.status})
          }
          this.$toast.success('Сохранено')
        } catch (e) {
          this.$toast.error(e.message)
        }

      }
    }
  }
</script>
<style lang="scss" scoped>
  .dealitem {
    margin-left: 50px;
    padding-top: 20px;
    line-height: 2.2rem;

    p {
      font-size: 1.3em;
    }

    h2 {
      font-size: 1.6em;
    }

    select {
      font-size: 20px;
    }
  }
</style>
