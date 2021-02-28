<template>
  <nav :class="{ show: showSidebar }" class="container">
    <div class="control">
      <img @click="showNav" src="../assets/burger.svg" />
    </div>
    <div class="nav-icons">
      <router-link
        :class="{ active: active === 'profile' }"
        class="item"
        to="/"
      >
        <img alt="user" src="../assets/userwhite.png" />
      </router-link>
      <router-link
        :class="{ active: active === 'workplace' }"
        class="item"
        to="/Workplace"
      >
        <img alt="projects" src="../assets/projects.png" />
      </router-link>
      <router-link
        :class="{ active: active === 'createuser' }"
        class="item"
        to="/createUser"
        v-if="isAdmin"
      >
        <img alt="user" src="../assets/userwhite.png" />
      </router-link>
      <router-link
        :class="{ active: active === 'storage' }"
        class="item"
        to="/storage"
      >
        <img alt="sklad" src="../assets/skladWhite.png" />
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
          v-show="showLink"
          v-if="isAdmin"
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
      </transition-group>
    </div>
  </nav>
</template>

<script>
export default {
  name: "nav",
  data: () => ({
    showSidebar: false,
    showLink: false,
    active: "profile",
    email: ''
  }),
  watch: {
    $route: "updateActive",
  },
  computed:{
    isAdmin(){
      return this.$store.getters.getUserData.email === 'admin@mail.ru'
    }
  },
  mounted(){
      this.email = this.$store.getters.getUserData.email
  },
  methods: {
    showNav() {
      if (this.showSidebar) {
        this.showLink = false;
        setTimeout(() => {
          this.showSidebar = false;
        }, 500);
      } else {
        this.showSidebar = true;
        setTimeout(() => {
          this.showLink = true;
        }, 500);
      }
    },
    updateActive() {
      this.active = this.$route.name.toLowerCase();
    },
  },
};
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

.container .active {
  background-color: #39a098;
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
  transition: all 0.5s ease-in-out;
  margin-bottom: 30px;

  img {
    width: 70px;
    height: 70px;
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

.fade-enter-active:nth-child(1),
.fade-leave-active:nth-child(1) {
  transition: transform linear calc(0.1s * 1), display 0.5s;
}

.fade-enter-active:nth-child(2),
.fade-leave-active:nth-child(2) {
  transition: transform linear calc(0.1s * 2), display 0.5s;
}

.fade-enter-active:nth-child(3),
.fade-leave-active:nth-child(3) {
  transition: transform linear calc(0.1s * 3), display 0.5s;
}

.fade-enter-active:nth-child(4),
.fade-leave-active:nth-child(4) {
  transition: transform linear calc(0.1s * 4), display 0.5s;
}

.fade-enter-active:nth-child(5),
.fade-leave-active:nth-child(5) {
  transition: transform linear calc(0.1s * 5), display 0.5s;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
</style>
