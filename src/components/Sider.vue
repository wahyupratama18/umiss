<script setup>
defineProps({
    menus: Array,
})
</script>

<template>
    <div v-for="(menu, i) in menus" :key="i">
        <router-link v-scroll-to="`#${ menu.anchor }`" v-if="! menu.children" :to="menu.to" v-text="menu.text" class="block px-6 py-2 text-amber-400 font-medium hover:bg-amber-500 hover:text-slate-100 hover:font-semibold" />
        <div v-else>
            <div class="px-6 py-2 text-amber-400 font-medium hover:bg-amber-500 hover:text-slate-100 hover:font-semibold flex justify-between gap-6 cursor-pointer" @click="menu.opened.value = ! menu.opened.value">
                <span v-text="menu.text"></span>
                <i class="mdi" :class="{'mdi-chevron-down': ! menu.opened.value, 'mdi-chevron-up': menu.opened.value}"></i>
            </div>

            <div class="pl-2" v-show="menu.opened.value">
                <Sider :menus="menu.children" />
            </div>
        </div>
    </div>
</template>