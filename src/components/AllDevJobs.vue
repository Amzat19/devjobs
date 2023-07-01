<template>
    <FilterBar @populate-filter-arr="handleFilterValues" />
    <section class="mt-[20vh] mb-16 flex flex-wrap gap-y-8 w-[80vw] mx-auto justify-between">
        <DevJob v-for="job in visibleJobs" :key="job.id" :job="job" />
    </section>
    <div class="w-[80vw] mx-auto mb-16">
        <button v-if="showLoadMoreButton" @click="loadMore"
            class="bg-violet hover:bg-hoverViolet text-white w-36 h-12 rounded-md flex items-center justify-center mx-auto">LoadMore</button>
    </div>
</template>

<script>
import allJobs from '@/api/jobs.json';
import FilterBar from './FilterBar.vue';
import DevJob from './DevJob.vue';

export default {
    name: 'AllDevJobs',
    components: {
        FilterBar,
        DevJob
    },
    data() {
        return {
            visibleCount: 15,
            loadMoreCount: 3,
            filterValuesArr: []
        }
    },
    methods: {
        loadMore() {
            this.visibleCount += this.loadMoreCount;
        },
        handleFilterValues(title, location, fullTimeContract) {
            this.filterValuesArr = [title, location, fullTimeContract];
        }
    },
    computed: {
        showLoadMoreButton() {
            return this.visibleCount < this.filteredJobs.length;
        },
        filteredJobs() {
            const filterTitle = this.filterValuesArr[0] || '';
            const filterLocation = this.filterValuesArr[1] || '';
            const filterIsFullTime = this.filterValuesArr[2];

            return allJobs.filter((job) => {
                // Apply filters based on title, location, and isFullTimeContract
                const matchesTitle = filterTitle === '' || (job.position && job.position.toLowerCase().includes(filterTitle.toLowerCase()));
                const matchesLocation = filterLocation === '' || (job.location && job.location.toLowerCase().includes(filterLocation.toLowerCase()));
                const matchesIsFullTime = filterIsFullTime ? job.contract === 'Full Time' : job.contract;

                return matchesTitle && matchesLocation && matchesIsFullTime;
            });
        },
        visibleJobs() {
            return this.filteredJobs.slice(0, this.visibleCount);
        }
    }
}
</script>