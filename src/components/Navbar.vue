<script setup>
import { ref } from 'vue'
import Sider from './Sider.vue'
import { programs, schemes } from '../data'

const sidebar = ref(false)

const determineOverflow = () => {
    document.querySelector('body').style.overflow = sidebar.value ? 'hidden' : null
}

const toggleSidebar = () => {
    sidebar.value = ! sidebar.value
    determineOverflow()
}

const closeSidebar = () => {
    sidebar.value = false
    determineOverflow()
}

const menus = [{
    to: '/',
    anchor: 'welcome',
    text: 'Home'
}, {
    opened: ref(false),
    text: 'About',
    children: [{
        to: '/',
        anchor: 'about',
        text: 'About UM'
    }, {
        to: '/',
        anchor: 'umiss',
        text: 'About UM ISS'
    }]
}, {
    opened: ref(false),
    text: 'Programs',
    children: programs.map(program => {
        return {
            to: '/',
            anchor: `${program.name}inum`,
            text: `${ program.name }`
        }
    })
}, {
    opened: ref(false),
    text: 'Apply',
    children: schemes.map((scheme, i) => {
        return {
            to: '/',
            anchor: `apply-${i}`,
            text: `${ scheme.name }`
        }
    })
}, {
    to: '/galleries',
    anchor: 'galleries',
    text: 'Galleries'
}/* , {
    to: '/',
    anchor: 'testimonials',
    text: 'Testimonials'
}, {
    to: '/',
    anchor: 'footer',
    text: 'Contact Us'
} */]
</script>

<template>
    <nav class="fixed top-0 z-30 h-16 md:h-20 w-56 md:w-64 flex items-center gap-6 px-4 md:px-8 py-3 bg-slate-100 rounded-br-2xl shadow-lg">
        <button type="button" @click="toggleSidebar()" @keydown.esc="closeSidebar()">
            <i class="mdi mdi-dots-grid text-xl" />
        </button>

        <router-link to="/" v-scroll-to="'#welcome'" @click="closeSidebar()" class="flex items-center gap-x-2">
            <img src="../assets/logo.png" class="h-10" />
            <img src="../assets/brand.png" class="h-10" />
        </router-link>
    </nav>

    <div v-if="sidebar" @click="closeSidebar()" class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
    <Transition name="slide-fade" mode="in-out" :duration="{ enter: 500, leave: 800 }">
        <aside
        v-if="sidebar"
        class="fixed left-0 z-20 h-screen w-56 pt-20 bg-slate-50 shadow overflow-y-auto">
            <Sider :menus="menus"></Sider>
        </aside>
    </Transition>
    
</template>