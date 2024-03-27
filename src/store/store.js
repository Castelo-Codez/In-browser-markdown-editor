import {ref, watch} from "vue";

const $AsideStatus = ref(false);
const $currentSheet = ref(null);

watch(
    $AsideStatus,
    (newVal) => {
        document.querySelector("#app").classList.toggle("aside-active", newVal);
    },
    {immediate: true}
);

window.addEventListener("click", (e) => {
    $AsideStatus.value = false;
});

export {$AsideStatus, $currentSheet};
