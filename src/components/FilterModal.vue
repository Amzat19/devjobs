<template>
    <div class="bg-[#000000]/50 h-screen w-screen z-50 fixed top-0" @click.self="toggleModal">
        <article class="bg-white w-[80vw] mx-auto mt-[40vh] dark:bg-darkModeElemBg">
            <div class="flex items-center gap-x-4 h-16 border-darkGray border-b px-4">
                <img src="@/assets/location.svg" />
                <input type="search" v-model="modalLocation" placeholder="Filter by location...."
                    class="h-12 pl-2 dark:bg-darkModeElemBg" />
            </div>
            <div class="h-32 grid relative">
                <img v-if="modalFullTimeContract" src="@/assets/tick.svg" alt="tick mark" width="12" height="12"
                    class="absolute left-[37px] top-[25px] cursor-pointer" @click="updateFullTimeContract" />
                <label class="font-semibold flex items-center my-4 text-base pl-8 dark:text-darkModeText">
                    <input type="checkbox" v-model="modalFullTimeContract" :checked="modalFullTimeContract"
                        :class="{ 'appearance-none rounded-sm w-6 h-6 mr-2 cursor-pointer bg-darkGray/25 dark:bg-darkGray': !modalFullTimeContract, 'bg-violet appearance-none rounded-sm w-6 h-6 mr-2 cursor-pointer': modalFullTimeContract }" />
                    Full Time Only
                </label>
                <button type="button" class="bg-violet text-white py-2 px-4 mb-4 w-[80%] mx-auto rounded-md"
                    @click="sendModalFilterValues">Attach more filters</button>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'FilterModal',
    data() {
        return {
            modalLocation: "",
            modalFullTimeContract: false
        }
    },
    methods: {
        toggleModal() {
            this.$emit('toggle-modal')
        },
        sendModalFilterValues() {
            const modalFilterValues = [this.modalLocation, this.modalFullTimeContract];
            this.$emit("populateFilterValues", ...modalFilterValues);
        },
        updateModalFullTimeContract() {
            this.modalFullTimeContract = !this.modalFullTimeContract;
        }
    }
}

</script>