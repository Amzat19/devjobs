<template>
    <router-link :to="`/job-details/${job.id}`">
        <article class="w-[300px] rounded-md bg-white px-6 pb-2 dark:bg-darkModeElemBg relative">
            <div class='w-12 h-12 rounded-2xl top-[-20px] absolute' :style="{ backgroundColor: job.logoBackground }">
                <img :src="require(`@/assets/${job.logo}`)" alt="Company's logo" class="mx-auto h-12 w-5" />
            </div>
            <div class="flex gap-3 items-center pt-12">
                <span class="text-darkGray text-sm">{{ job.postedAt }}</span>
                <span class="w-1 h-1 bg-darkGray"></span>
                <span class="text-darkGray text-sm">{{ job.contract }}</span>
            </div>
            <h2
                class="font-bold text-base mt-2 hover:text-darkGray cursor-pointer dark:text-darkModeText dark:hover:text-darkGray">
                {{ job.position }}
            </h2>
            <p class="text-sm text-darkGray mt-2">{{ job.company }}</p>
            <p class="text-violet text-sm font-bold mb-6 mt-6">{{ job.location }}</p>
        </article>
    </router-link>
</template>

<script>

export default {
    name: 'DevJob',
    props: {
        job: {
            type: Object,
            required: true
        }
    }
}
</script>