<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref } from 'vue'
import Button from '../components/Button.vue'
import ToBe from '../components/ToBe.vue';
import Table from '../components/Table.vue';
import { flyers, programs, howTos, testimonials, galleries, schemes, coverages, requirements, timelines, dorms } from '../data'

const opened = ref(0)

const changeTab = (scheme, i) => {
    scheme.opened.value = i
}
</script>

<template>
    <div>
        <section id="welcome" class="w-full min-h-screen bg-cover relative text-white bg-[url('/src/assets/background.png')] bg-[center_top] bg-no-repeat bg-fixed flex flex-col md:flex-row md:justify-between items-center px-8 py-24 md:p-16 gap-12">
            <div class="w-full">
                <h1 class="text-5xl font-bold text-amber-400 mb-4" data-aos="fade-down">UM ISS 2023</h1>
                <h3 class="font-medium text-xl mb-6" data-aos="fade-up">Universitas Negeri Malang International Student Scholarship</h3>

                <h3 class="font-medium text-xl mb-6" data-aos="fade-up">Application Submission: 1 - 30 April 2023</h3>

                <a href="https://seleksi.um.ac.id/intl/" data-aos="fade-up">
                    <Button class="text-lg">Apply Now</Button>
                </a>
            </div>

            <div class="w-full flex justify-end">
                <img class="max-h-96" src="../assets/poster.jpg" alt="UM ISS Poster">
                <!-- <iframe class="rounded-lg aspect-video max-h-96" src="https://www.youtube.com/embed/3VKjZtZCT60" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /> -->
            </div>
        </section>

        <section id="about" class="p-8 lg:p-16 min-h-screen">
            <h1 class="text-3xl font-bold border-l-4 border-amber-400 pl-3" data-aos="fade-up">About UM</h1>
            
            <div class="md:grid md:grid-cols-2 gap-12 w-full mt-6">
                
                <div class="flex items-center justify-center mb-6 md:mb-0" data-aos="fade-down">
                    <img src="../assets/LogoUM.png" alt="Logo UM" class="max-h-40">
                </div>

                <div class="prose">
                    <p data-aos="fade-down">
                        Universitas Negeri Malang is one of the reputable universities in Indonesia. Consisting of eight faculties with a total of 102 highly accredited study programs, UM has succeeded in delivering its graduates to become excellent teachers and professionals who are ready to face the global world. As one of the top 15 universities in Indonesia, UM continuously strives to provide excellent education for all and resources for excellence in science, research, and technology in Indonesia. Consisting of more than 31.468 students, UM offers a vibrant academic environment and cultural activities for international students. More information can be found on the official website of Universitas Negeri Malang: <a href="https://um.ac.id" target="_blank">www.um.ac.id</a>
                    </p>
                </div>

                <div class="md:col-span-2 flex justify-center">
                    <img src="../assets/ISSBuEvi.png" alt="From the Director of OIA">
                </div>
            </div>
        </section>

        <section id="umiss" class="p-8 lg:p-16 min-h-screen umbg bg-amber-50">
            <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3" data-aos="fade-up">UM ISS</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" data-aos="fade-down">
                <img src="../assets/gkb.jpg" alt="Gedung Kuliah Bersama" class="rounded-lg">

                <div class="md:col-span-2">
                    <div class="prose">
                        <p>
                            Universitas Negeri Malang International Student Scholarship (UM-ISS) is a prestigious scholarship offered by UM to provide access for highly qualified international students around the world to pursue a degree program at UM, Indonesia. This scholarship consists of {{ schemes.length }} schemes as follows :
                        </p>

                        <ul>
                            <li v-for="(scheme, i) in schemes" :key="i">
                                <router-link :to="'/'" v-scroll-to="`#apply-${i}`" v-text="scheme.name" />
                            </li>
                        </ul>

                        <p>
                            Each scheme offers different scholarship coverage for highly qualified international applicants to pursue their bachelor’s, master’s, or doctoral degree in Universitas Negeri Malang, Indonesia. It is disbursed for a maximum period of 5 years for Undergraduate, 3 for Master’s, and 4 years for Doctoral (inclusive of language program), on condition that the scholarship awardee maintains a record of good academic performance, obtains a recommendation from 2 lecturers, conduct compliant with university codes, etc. This program facilitates scholars and students from around the world to experience not only the dynamic of higher education in Indonesia, but also the vibes of Indonesian cultural diversities. UM-ISS also offers an exclusive experience of expanding knowledge about various cultures while studying in Malang city.
                        </p>
                    </div>

                    <div class="grid grid-cols-1 mt-6">
                        <a :href="flyer.url" v-for="(flyer, i) in flyers" :key="i" target="_blank">
                            <Button v-text="flyer.text" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="coverages" class="p-8 lg:p-16 umbg">
            <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3" data-aos="fade-up">Scholarship Coverage</h2>

            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Item List</th>
                        <th v-for="(scheme, i) in schemes" :key="i" v-text="scheme.name" />
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(coverage, i) in coverages" :key="i">
                        <td v-text="1 + i" />
                        <td v-text="coverage" />
                        <td v-for="(scheme, j) in schemes" :key="j">
                            <i class="text-center mdi" :class="{
                                'mdi-check': scheme.coverages[i],
                                'mdi-close': ! scheme.coverages[i],
                            }" />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </section>

        <section id="durations" class="p-8 lg:p-16 umbg bg-amber-50">
            <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3" data-aos="fade-up">Maximum Duration</h2>

            <Table>
                <thead>
                    <tr>
                        <th>Level of Study</th>
                        <th>Duration of Degree Program</th>
                        <th>Duration of BIPA Program</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(program, i) in programs" :key="i">
                        <td v-text="program.name" />
                        <td v-text="`Max ${program.duration} years`" />
                        <td v-if="i == 0" :rowspan="programs.length" v-text="`Max 2 Semesters`" />
                    </tr>
                </tbody>
            </Table>

            <small class="mt-3">*Students may only need to pursue the BIPA programme for 1 semester</small>
        </section>

        <section id="requirements" class="p-8 lg:p-16 umbg">
            <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3" data-aos="fade-up">Requirements</h2>

            <Table>
                <thead>
                    <tr>
                        <th rowspan="2">Document</th>
                        <th :colspan="scheme.programs.length" v-for="(scheme, i) in schemes" :key="i" v-text="scheme.name" />
                    </tr>
                    <tr>
                        <template v-for="(scheme, i) in schemes" :key="i">
                            <th v-for="(program, j) in scheme.programmes" :key="j" v-text="program.name" />
                        </template>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(requirement, i) in requirements" :key="i">
                        <td v-text="requirement" />
                        <template v-for="(scheme, j) in schemes" :key="j">
                            <td v-for="(requirement, k) in scheme.requirements[i]" :key="k">
                                <i v-if="typeof requirement == 'boolean'" class="text-center mdi" :class="{
                                    'mdi-check': requirement,
                                    'mdi-close': ! requirement,
                                }" />
                                <span v-else v-text="requirement" />
                            </td>
                        </template>
                    </tr>
                    <tr>
                        <td>More Information</td>
                        <td class="prose" :colspan="scheme.programs.length" v-for="(scheme, i) in schemes" :key="i">
                            <router-link to="/" v-scroll-to="`#apply-${i}`" v-text="`Details`" />
                        </td>
                    </tr>
                </tbody>
            </Table>

            <p class="mt-6">
                NOTE : The minimum score for the English proficiency test is 500 for TOEFL and 6 for IELTS, and the certificate must be obtained within the last two years. Applicants who wish to apply for the doctorate program must provide one publication for scheme 2 and two publications for ASEAN research scheme.
            </p>
        </section>

        <section :id="`apply-${i}`" class="p-8 lg:p-16 umbg bg-amber-50" v-for="(scheme, i) in schemes" :key="i">
            <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3" data-aos="fade-up" v-text="`${ scheme.name }`" />

            <div class="grid grid-cols-3 border-b border-b-amber-400 mt-6" data-aos="fade-down">
                <span :class="{
                    'bg-amber-400 text-white rounded-t-xl': scheme.opened.value == i,
                    'cursor-pointer': scheme.opened.value != i
                }"
                class="text-center p-2 md:p-4"
                v-for="(program, i) in scheme.programmes"
                :key="i"
                v-text="program.name"
                @click="scheme.opened.value = i" />
            </div>

            <div class="p-6">
                <h4 class="font-medium mb-2">Eligibility</h4>

                <ul class="list-disc list-inside mb-6 prose max-w-full">
                    <li v-for="(eligibility, j) in scheme.provisions[scheme.opened.value].eligibilities" :key="j" v-text="eligibility" />
                </ul>
            </div>

            <div class="p-6">
                <h4 class="font-medium mb-2">Required Documents</h4>

                <ul class="list-disc list-inside prose max-w-full">
                    <li v-for="(requirement, j) in scheme.provisions[scheme.opened.value].requirements" :key="j" v-html="requirement" />
                </ul>
            </div>
        </section>

        <section id="degrees" class="p-8 lg:p-16 umbg">
            <div :id="`${program.name}inum`" class="mt-4" v-for="(program, i) in programs" :key="i">
                <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3"
                data-aos="fade-up" v-text="`${ program.name }'s Program (S${1 + i})`" />

                <h3 class="font-medium my-4"
                data-aos="fade-up"
                v-text="`List of ${ program.faculties.reduce((total, faculty) => {
                    return total + faculty.programs.length
                }, 0) } ${ program.name.toLowerCase() }'s programs offered by Universitas Negeri Malang`" />

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div v-for="(faculty, j) in program.faculties" :key="j" data-aos="zoom-in-up">
                        <h4 :class="{
                            'rounded-lg': ! faculty.opened.value,
                            'rounded-t-lg': faculty.opened.value,
                        }" class="p-4 bg-amber-400 text-white flex justify-between font-semibold">
                            <a :href="faculty.faculty.url" target="_blank">
                                {{ faculty.faculty.name }}
                            </a>
    
                            <i class="mdi mdi-chevron-down cursor-pointer" :class="{'rotate-180': faculty.opened.value}"  @click="faculty.opened.value = ! faculty.opened.value" />
                        </h4>
    
                        <div class="border rounded-b-lg bg-slate-50 p-4" v-show="faculty.opened.value">
                            <ul class="list-disc list-inside">
                                <li v-for="(program, k) in faculty.programs" :key="k" v-text="program" />
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        
        <section id="timeline" class="umbg text-white">          
            <div class="w-full h-fit bg-[url('/src/assets/bg-timeline.jpg')] bg-center bg-no-repeat bg-cover relative p-8 lg:p-16">
                <h2 class="text-3xl font-bold border-l-4 border-amber-400 mb-12 pl-3" data-aos="fade-up" v-text="`Important Dates`" />
                <ul class="list-inside list-decimal">
                    <li v-for="(timeline, i) in timelines" :key="i" class="flex items-center justify-between">
                        <span v-text="timeline.name" />
                        <span v-text="timeline.date" />
                    </li>
                </ul>
            </div>
        </section>

        <section id="howTo" class="p-8 lg:p-16 umbg bg-amber-50">
            <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3" data-aos="fade-up">How to Apply</h2>
            <h4 class="text-lg font-semibold my-6">UM-ISS Online Registration</h4>

            <ul class="list-disc ml-4 prose max-w-full">
                <li v-for="(how, i) in howTos" :key="i" v-html="how" />
            </ul>
        </section>

        <section id="testimonials" class="p-8 lg:p-16 umbg ">
            <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3 mb-6" data-aos="fade-up" v-text="`What Our Students Say`" />

            <Splide :options="{
                autoplay: true,
                rewind: true,
            }" aria-label="Testimonials carousel">
                <SplideSlide v-for="(testimonial, index) in testimonials" :key="index">
                    <img :src="testimonial" class="rounded-lg w-full">
                </SplideSlide>
            </Splide>
        </section>

        <section id="galleries" class="p-8 lg:p-16 umbg bg-slate-200">
            <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3 mb-6" data-aos="fade-up" v-text="`Gallery`" />

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a :href="gallery" target="_blank" v-for="(gallery, i) in galleries.slice(0, 4)" :key="i">
                    <img class="block object-cover object-center w-full h-full rounded-lg" :src="gallery" alt="Gallery collections of UM ISS">
                </a>
            </div>
        </section>

        <section id="dorms" class="p-8 lg:p-16 umbg bg-slate-200">
            <h2 class="text-3xl font-bold border-l-4 border-amber-400 pl-3 mb-6" data-aos="fade-up" v-text="`UM International Dormitory`" />

            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <a :href="dorm" target="_blank" v-for="(dorm, i) in dorms.slice(0, 4)" :key="i">
                    <img class="block object-cover object-center w-full h-full rounded-lg" :src="dorm" alt="Int'l Dorms">
                </a>
            </div>

            <div class="flex justify-center mt-6">
                <router-link to="/galleries">
                    <Button>View More</Button>
                </router-link>
            </div>
        </section>
    </div>
</template>