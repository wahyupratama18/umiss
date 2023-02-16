<script setup>
defineProps({
    title: String,
    breads: Array,
})
</script>

<template>
    <section class="max-h-52 bg-no-repeat bg-center bg-cover h-[35vh]" style="background: url('background.jpg')">
        <div class="bg-slate-900/60 text-right pt-20 text-white pr-8 max-h-52" style="height: 35vh;">
            <h2 class="font-bold text-xl" v-text="title"></h2>
            <div>
                <router-link :to="bread.to" v-for="(bread, i) in breads" :key="i">
                    {{ bread.name }}
                    <i class="mdi mdi-chevron-right mr-1" v-if="1 + i < breads.length"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>