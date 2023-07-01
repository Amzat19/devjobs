<template>
    <article
        class="w-[80vw] bg-white h-20 rounded-md absolute left-[10vw] top-[120px] grid grid-cols-filtersMobile md:grid-cols-filtersTablet lg:grid-cols-filtersDesktop dark:bg-darkModeElemBg">
        <div class="flex items-center px-6 md:border-r md:border-[darkGray]">
            <img src="@/assets/search.svg" alt="Search Icon" class="cursor-pointer" />
            <input type="search" v-model="title" :placeholder="locationPlaceholderText"
                class="w-full pl-4 placeholder:text-xs cursor-pointer dark:bg-darkModeElemBg" />
        </div>
        <img v-if="isMobile" src="@/assets/funnel.svg" alt="funnel icon" class="self-center cursor-pointer"
            @click="toggleModal" />
        <div v-else class="flex items-center px-6 border-r border-[darkGray]">
            <img src="@/assets/location.svg" class="cursor-pointer" />
            <input type="search" v-model="location" placeholder="Filter by location...."
                class="w-full pl-4 placeholder:text-xs cursor-pointer dark:bg-darkModeElemBg" />
        </div>
        <img v-if="isMobile" src="@/assets/mobileSearch.svg" alt="Search Icon" class="self-center cursor-pointer"
            @click="sendFilterValues" />
        <div v-else class="flex items-center px-6 justify-evenly relative">
            <img v-if="fullTimeContract" src="@/assets/tick.svg" alt="tick mark" width="12" height="12"
                class="absolute left-[30px] cursor-pointer" @click="updateFullTimeContract" />
            <label class="flex items-center font-bold text-xs w-44 dark:text-darkModeText">
                <input type="checkbox" v-model="fullTimeContract" :checked="fullTimeContract"
                    :class="{ 'appearance-none rounded-sm w-6 h-6 mr-2 cursor-pointer bg-darkGray/25 dark:bg-darkGray': !fullTimeContract, 'bg-violet appearance-none rounded-sm w-6 h-6 mr-2 cursor-pointer': fullTimeContract }" />
                {{ contractText }}
            </label>
            <button type="button" @click="sendFilterValues"
                class="w-32 h-12 bg-violet ml-7 rounded-md text-white cursor-pointer hover:bg-hoverViolet">Search</button>
        </div>
    </article>
    <FilterModal v-if="isModalVisible" @toggle-modal="toggleModal" @populate-filter-values="populateModalValues" />
</template>

<script>
import FilterModal from './FilterModal.vue';

export default {
    name: 'FilterBar',
    components: {
        FilterModal
    },
    data() {
        return {
            title: '',
            location: '',
            fullTimeContract: false,
            screenWidth: 0,
            screenHeight: 0,
            isMobile: false,
            isModalVisible: false
        };
    },
    mounted() {
        this.updateScreenSize();
        this.checkScreenWidth();
        window.addEventListener("resize", this.updateScreenSize);
        window.addEventListener("resize", this.checkScreenWidth);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.updateScreenSize);
        window.removeEventListener("resize", this.checkScreenWidth);
    },
    methods: {
        updateScreenSize() {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
        },
        checkScreenWidth() {
            this.isMobile = this.screenWidth < 768
        },
        toggleModal() {
            this.isModalVisible = !this.isModalVisible
        },
        populateModalValues(location, fullTimeContract) {
            this.location = location;
            this.fullTimeContract = fullTimeContract
        },
        sendFilterValues() {
            const filterValues = [this.title, this.location, this.fullTimeContract];
            this.$emit("populateFilterArr", ...filterValues);
        },
        updateFullTimeContract() {
            this.fullTimeContract = !this.fullTimeContract;
        }
    },
    computed: {
        locationPlaceholderText() {
            if (this.screenWidth < 1024) {
                return "Filter by title…";
            } else {
                return "Filter by title, companies, expertise…";
            }
        },
        contractText() {
            if (this.screenWidth < 1024) {
                return "Full Time";
            } else {
                return "Full Time Only";
            }
        },
    }

}
</script>