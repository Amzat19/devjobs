<template>
    <article
        class="w-[60vw] h-36 md:h-28 absolute left-[20%] top-[120px] bg-white rounded-md md:rounded-none md:flex dark:bg-darkModeElemBg">
        <div class="w-12 h-12 rounded-md mx-auto md:h-full md:w-32 md:rounded-none"
            :style="{ backgroundColor: filteredItem.logoBackground }">
            <img :src="require(`@/assets/${filteredItem.logo}`)" alt="Company logo"
                class="w-6 h-12 mx-auto mt-[-20px] md:mx-auto md:mt-0 md:h-full md:w-12" />
        </div>
        <div class="px-6 md:flex justify-between mx-auto md:w-full self-center text-center items-center">
            <span>
                <h2 class="font-semibold text-lg text-center dark:text-darkModeText">{{ filteredItem.company }}</h2>
                <p class="text-darkGray text-center mb-4">{{ filteredItem.company.toLowerCase() }}.com</p>
            </span>
            <a :href="filteredItem.website"
                class="text-violet p-2 rounded-md font-semibold text-sm bg-violet/25 hover:bg-violet/50 cursor-pointer dark:text-darkModeText dark:bg-darkGray/25 dark:hover:bg-darkGray/50">Company
                Site</a>
        </div>
    </article>
    <article class="w-[60vw] mx-auto mt-32 pt-12 px-6 pb-8 bg-white dark:bg-darkModeElemBg">
        <div class="md:flex justify-between items-center">
            <div class="pb-4 md: pb-0">
                <div class="text-sm text-darkGray flex items-center gap-2">
                    <p>{{ filteredItem.postedAt }}</p>
                    <span class="w-1 h-1 bg-darkGray rounded-[50%] "></span>
                    <p>{{ filteredItem.contract }}</p>
                </div>
                <h1 class="font-bold text-xl dark:text-darkModeText">{{ filteredItem.position }}</h1>
                <span class="font-semibold text-xs text-violet">{{ filteredItem.location }}</span>
            </div>
            <a :href="externalLink" target="_blank">
                <button class="w-full md:w-auto bg-violet hover:bg-hoverViolet text-white py-2 px-4 rounded text-sm">Apply
                    now</button>
            </a>
        </div>
        <p class="pt-6 text-xs text-darkGray font-thin">{{ filteredItem.description }}</p>
        <h2 class="font-semibold text-base py-4 dark:text-darkModeText">Requirements</h2>
        <p class="text-xs text-darkGray font-thin">{{ filteredItem.requirements.content }}</p>
        <ul class="text-xs  font-thin list-disc mt-4 text-violet">
            <li v-for="(item, index) in filteredItem.requirements.items" :key="index" class="ml-4 mt-2">
                <span class="text-darkGray">{{ item }}</span>
            </li>
        </ul>
        <h2 class="font-semibold text-base py-4 dark:text-darkModeText">What will you do</h2>
        <p class="text-xs text-darkGray font-thin">{{ filteredItem.role.content }}</p>
        <ol class="text-xs font-thin list-decimal mt-4 text-violet">
            <li v-for="(item, index) in filteredItem.role.items" :key="index" class="ml-4 mt-2">
                <span class="text-darkGray">{{ item }}</span>
            </li>
        </ol>
    </article>
    <footer class="mt-6 bg-white flex justify-around items-center h-24 dark:bg-darkModeElemBg">
        <span>
            <h3 class="font-semibold dark:text-darkModeText">{{ filteredItem.position }}</h3>
            <p class="text-darkGray">So Digital Inc.</p>
        </span>
        <a :href="externalLink" target="_blank">
            <button class="bg-violet text-white py-2 px-4 rounded-md hover:bg-hoverViolet">Apply Now</button>
        </a>
    </footer>
</template>

<script>
import allJobs from "@/api/jobs.json"

export default {
    name: 'JobDetails',
    data() {
        return {
            filteredItem: null,
            externalLink: null
        }
    },
    created() {
        const paramId = this.$route.params.id;
        const filterJob = allJobs.filter(item => Number(item.id) === Number(paramId));
        this.filteredItem = filterJob[0];
        this.externalLink = this.filteredItem.apply;
    }
}
</script>