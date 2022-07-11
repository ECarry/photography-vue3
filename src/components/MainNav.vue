<template>
  <div class="main-nav">
    <div class="menu-icon">
      <i class="ri-menu-line"></i>
    </div>

    <div class="logo">
      <img src="@/assets/images/logo.png">
    </div>
    <div class="nav">
      <router-link v-for="item in NAV" :key="item.id" :to="{name: item.name}">{{ item.text }}</router-link>
    </div>
    <div class="socal-icon">
      <div class="icons">
        <div class="icon-background" v-for="item in SOCAL" :key="item.id">
          <a :href="item.link" target="_blank"><i :class="`ri-${item.icon}-line`"></i></a>
        </div>
      </div>
    </div>
    <div class="ctl-icon" @click="handleOpen">
      <i class="ri-close-line" v-if="store.isOpen"></i>
      <i class="ri-dashboard-line" v-else></i>
    </div>
  </div>
</template>
<script setup>
import { mainStore } from '../stores';

const store = mainStore()
const SOCAL = [
  {
    id: 1,
    link: 'https://web.ecarry.me',
    icon: 'twitter'
  },
  {
    id: 2,
    link: 'https://ops.ecarry.me',
    icon: 'weibo'
  },
  {
    id: 3,
    link: 'https://instagram.com',
    icon: 'instagram'
  }
]

const NAV = [
  {
    id: 1,
    name: 'Home',
    text: '>'
  },
  {
    id: 2,
    name: 'People',
    text: 'PEOPLE'
  },
  {
    id: 3,
    name: 'Locals',
    text: 'LOCALS'
  },
  {
    id: 4,
    name: 'Travel',
    text: 'TRAVEL'
  },
  {
    id: 5,
    name: 'Stories',
    text: 'STORIES'
  }
]

function handleOpen () {
  store.isOpen = !store.isOpen
}
</script>

<style lang="less" scoped>
  .main-nav {
    position: relative;
    height: @header-height;
    padding: 0 0 0 35px;

    &::before,
    &::after {
      display: inline-block;
      vertical-align: middle;
      content: '';
      height: 100%;
    }
    .menu-icon {
      display: none;
    }

    .logo {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      margin-right: 30px;
      img {
        max-height: 2rem;
      }
    }
    .nav {
      display: inline-block;
      position: relative;
      
      a {
        position: relative;
        margin-right: 30px;
        letter-spacing: 1px;
        color: @color-text;
        transition: all 0.3s ease-in-out;
        font-size: 1rem;
        &:hover {
          color: @color-text-hover;
          &::before {
            width: 100%;
            left: 0;
          }
        }
        &::before {
          content: "";
          display: block;
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0;
          height: 2px;
          border-radius: 2px;
          background-color: @color-text-hover;
          transition: 0.3s ease;
        }
      }
    }
    .socal-icon {
      display: inline-block;
      position: absolute;
      right: 72px;
      top: 25.5px;
      .icons {
        display: flex;
        .icon-background {
          width: 27px;
          height: 27px;
          background: @color-icon-background;
          border-radius: 50%;
          text-align: center;
          margin-right: 10px;
          cursor: pointer;
          &:hover {
            background: @color-icon-hover-background;
            transition: all 0.3s ease-in-out;
          }
          i {
            color: @color-icon;
            font-size: @icon-size;
          }
        }
      }
    }
    .ctl-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 13px;

      width: 54px;
      height: 54px;
      cursor: pointer;

      border-left: @border-style;
      &:hover {
        color: @color-text-hover;
        transition: all 0.3s ease-in-out;
      }
      i {
        font-size: 27px;
      }
    }
  }


  @media (max-width: 950px) {
    .main-nav {
      padding: 0 10px;
      height: 44px;
      display: flex;
      align-items: center;

      .menu-icon {
        display: block;
        width: 54px;
        height: 44px;
        cursor: pointer;
        text-align: center;
        &:hover {
          color: @color-text-hover;
          transition: all 0.3s ease-in-out;
        }
        i {
          font-size: 27px;
        }
      }
      .logo {
        margin: 0 auto;
        img {
          max-height: 3rem;
          max-width: 80%;
        }
      }

      .socal-icon {
        display: none;
      }


      .nav {
        display: none;
      }
      .ctl-icon {
        display: block;
        border-left: none;
        height: 44px;
        top: 0;
      }
    }

  }
</style>
