<template>
  <nav :class="{ show: showSidebar }" class="container">
    <div class="control">
      <img @click="showNav" src="../assets/burger.svg"/>
    </div>
    <div class="nav-icons">
      <router-link
          :class="{ active: active === 'profile' }"
          class="item"
          to="/"
      >
        <img alt="user" src="../assets/userwhite.png"/>
      </router-link>
      <router-link
          :class="{ active: active === 'workplace' }"
          class="item"
          to="/workplaceManager"
          v-if="isManager"
      >
        <img alt="projects" src="../assets/projects.png"/>
      </router-link>
      <router-link
          :class="{ active: active === 'workplace' }"
          class="item"
          to="/workplace"
          v-if="isDiler"
      >
        <img alt="projects" src="../assets/projects.png"/>
      </router-link>
      <router-link
          :class="{ active: active === 'createuser' }"
          class="item"
          to="/createUser"
          v-if="isAdmin"
      >
        <img alt="user" src="../assets/userwhite.png"/>
      </router-link>
      <router-link
          :class="{ active: active === 'storage' }"
          class="item"
          to="/storage"
      >
        <img alt="sklad" src="../assets/skladWhite.png"/>
      </router-link>
      <router-link
          :class="{ active: active === 'report' }"
          class="item"
          to="/report"
          v-if="isDiler"
      >
        <img alt="report" src="../assets/whitereport.png"/>
      </router-link>
      <router-link
          :class="{ active: active === 'reports' }"
          class="item"
          to="/reports"
          v-if="isManager"
      >
        <img alt="report" src="../assets/whitereport.png"/>
      </router-link>

      <router-link
        :class="{ active: active === 'planing' }"
        class="item"
        to="/planing"
    
      >
        <img alt="planing" src="../assets/planingwhite.png" />
      </router-link>
    </div>
    <div class="nav-links">
      <transition-group name="fade">
        <div
            :class="{ active: active === 'profile' }"
            key="1"
            v-show="showLink"
        >
          Профиль
        </div>
        <div
            :class="{ active: active === 'workplace' }"
            key="2"
            v-show="showLink"
        >
          Рабочая область
        </div>
        <div
            :class="{ active: active === 'createuser' }"
            key="3"
            v-if="isAdmin"
            v-show="showLink"
        >
          Добавить пользователя
        </div>
        <div
            :class="{ active: active === 'storage' }"
            key="4"
            v-show="showLink"
        >
          Склад
        </div>
        <div
            :class="{ active: active === 'reports' }"
            key="5"
            v-show="showLink"
        >
          Отчётность
        </div>
        <div
          :class="{ active: active === 'planing' }"
          key="6"
          v-show="showLink"
        >
          Планирование
        </div>
      </transition-group>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'nav',
    data: () => ({
      showSidebar: false,
      showLink: false,
      active: 'profile',
      email: ''
    }),
    watch: {
      $route: 'updateActive',
    },
    computed: {
      isAdmin() {
        return this.$store.getters.getUserData.position === 'Администратор'
      },
      isDiler() {
        return this.$store.getters.getUserData.position === 'Дилер'
      },
      isManager() {
        return this.$store.getters.getUserData.position === 'Менеджер'
      },
    },
    mounted() {
      this.email = this.$store.getters.getUserData.email
    },
    methods: {
      showNav() {
        if (this.showSidebar) {
          this.showLink = false
          setTimeout(() => {
            this.showSidebar = false
          }, 500)
        } else {
          this.showSidebar = true
          setTimeout(() => {
            this.showLink = true
          }, 500)
        }
      },
      updateActive() {
        if (this.$route.meta.show) this.active = this.$route.meta.show.toLowerCase()
        else this.active = this.$route.name.toLowerCase()

      },
    },
  }
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 25px;
    background-color: #374664;
    width: 70px;
    outline: 0;
    z-index: 999;
    min-height: 100%;
    transition: all .5s;
    position: relative;
  }

  .container .control {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    cursor: pointer;
    margin-bottom: 25px;
  }

  .container .control img {
    height: 50px;
    transition: all 0.5s ease-in-out;
  }

  .container.show {
    width: 300px;
  }

  .container .active, .container .active img {
    background-color: #39a098!important;
  }

  .container.show .control > img {
    transform: rotateZ(-180deg);
  }

  .container .nav-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70px;
    cursor: pointer;
    float: left;
  }

  .container .nav-icons .item {
    padding-top: 5px;
    padding-bottom: 5px;
    cursor: pointer;
    margin-bottom: 30px;
    z-index: 99999;
    img {
      width: 70px;
      height: 70px;
      z-index: 99999;
      background-color: #374664;
    }
  }

  .container .nav-links {
    float: left;
  }

  .container .nav-links div {
    color: white;
    padding-top: 25px;
    margin-bottom: 30px;
    height: 85px;
    padding-bottom: 61px;
    font-size: 1.35rem;
    padding-left: 10px;
    cursor: pointer;
    width: 230px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-70px);
  }
</style>
