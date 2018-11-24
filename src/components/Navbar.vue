<template>
  <div class="navar">
    <el-menu :default-active="activeIndex" class="navbar__menu" mode="horizontal">
      <el-menu-item index="1">
          Orlead - Strona główna
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">Dodaj</template>
        <el-menu-item index="2-1">Pojazd</el-menu-item>
        <el-menu-item index="2-2">Pojazd 2</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">Mapa</el-menu-item>
      <el-menu-item index="4">Wyznacz trasę</el-menu-item>
      <el-menu-item class="navbar__logo" index="3">
        <img src="~assets/img/orlen.png" alt="">
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
};
</script>
