<script setup>
const contacts = [{
    name: 'Phone',
    href: 'tel:+62 (341) 584-759',
    icon: 'mdi mdi-phone',
    text: '+62 (341) 584-759'
}, {
    name: 'Whatsapp',
    href: 'https://wa.me/+6282134134620',
    icon: 'mdi mdi-whatsapp',
    text: '+62 821-3413-4620'
}, {
    name: 'Email',
    href: 'mailto:oia@um.ac.id',
    icon: 'mdi mdi-email-multiple-outline',
    text: 'oia@um.ac.id'
}, {
    name: 'Address',
    href: 'https://goo.gl/maps/Ekz2xYFKjr1dtsZh8',
    icon: 'mdi mdi-map-marker',
    text: 'Jl. Semarang No. 5 Malang 65145, East Java, Indonesia'
}]

const socials = [{
    name: 'Web page',
    href: 'http://oia.um.ac.id/',
    icon: 'mdi mdi-web',
}, {
    name: 'Facebook',
    href: 'https://www.facebook.com/internationalaffairsUM',
    icon: 'mdi mdi-facebook',
}, {
    name: 'Instagram',
    href: 'https://www.instagram.com/oia_um/',
    icon: 'mdi mdi-instagram',
}, {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC1XP5w9EUyHGsKdZJU-awcQ/',
    icon: 'mdi mdi-youtube',
}, {
    name: 'Twitter',
    href: 'https://twitter.com/oiaum_',
    icon: 'mdi mdi-twitter',
}]
</script>

<template>
    <footer id="footer" class="bg-slate-900 p-8 md:p-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-white">
        <div class="md:col-span-2">
            <h2 class="text-3xl border-l-4 border-amber-300 font-bold pl-3 mb-5">Contact us:</h2>

            <span>Stay connected with OIA UM</span>

            <!-- <img src="../assets/oia.png" alt="The Office of International Affairs" class="max-h-14"> -->

            <div class="flex gap-4 mt-4">
                <a v-for="(social, i) in socials" :key="i" :title="social.title" :href="social.href" class="p-2 text-slate-700 bg-slate-100 rounded-full w-10 aspect-square flex items-center justify-center hover:bg-fest-blue/70 hover:text-slate-50 hover:bg-amber-400">
                    <i :class="social.icon"></i>
                </a>
            </div>
        </div>

        <div class="md:col-span-3">

            <div class="grid md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                    <p class="mb-4" v-for="(contact, i) in contacts" :key="i">
                        <a :title="contact.name" :href="contact.href" target="_blank">
                            <i :class="contact.icon"></i> <span v-text="contact.text"></span>
                        </a>
                    </p>
                </div>
                
                <div class="md:col-span-2">
                    <iframe title="OIA Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.3387303999907!2d112.61885079999999!3d-7.963902800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6282a9b536fd3%3A0x7f48f86c54b1e45!2sKantor%20Hubungan%20Internasional%20Universitas%20Negeri%20Malang!5e0!3m2!1sid!2sid!4v1665797166712!5m2!1sid!2sid" width="100%" height="200" referrerpolicy="no-referrer-when-downgrade" class="max-w-4xl rounded-lg"></iframe>
                    
                </div>
            </div>
        </div>
    </footer>
    <section id="credits" class="flex justify-center py-8">
        Copyright © 2023 Office of International Affairs Universitas Negeri Malang
    </section>
</template>