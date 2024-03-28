import {ref, watch} from "vue";

const $AsideStatus = ref(false);
const $currentSheet = ref(null);
let $listOfDocs;
const $input = ref("");
if (window.localStorage.getItem("documents")) {
    $listOfDocs = ref(JSON.parse(window.localStorage.getItem("documents")));
} else {
    $listOfDocs = ref([
        {
            title: `unremoval document`,
            content: "# welcome",
            Date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
            id: Date.now(),
        },
    ]);
}

$currentSheet.value = $listOfDocs.value[$listOfDocs.value.length - 1];

watch(
    $AsideStatus,
    (newVal) => {
        document.querySelector("#app").classList.toggle("aside-active", newVal);
    },
    {immediate: true}
);

watch(
    $listOfDocs.value,
    (newlist) => {
        window.localStorage.setItem("documents", JSON.stringify(newlist));
    },
    {
        immediate: true,
    }
);

window.addEventListener("click", (e) => {
    $AsideStatus.value = false;
});

watch(
    $currentSheet,
    (newCur) => {
        $input.value = newCur.content;
    },
    {
        immediate: true,
    }
);

export {$AsideStatus, $currentSheet, $listOfDocs, $input};
