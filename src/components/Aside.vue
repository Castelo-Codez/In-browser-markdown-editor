<script setup>
import {$currentSheet, $listOfDocs} from "@/store/store";
function $addNewDoc() {
    let $doc = {
        title: `document ${$listOfDocs.value.length + 1}`,
        content: "# welcome",
        Date: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
        id: Date.now(),
    };
    $listOfDocs.value.push($doc);
}
</script>
<template>
    <aside
        @click.stop
        class="w-[250px] bg-vt-c-black-mute h-screen bg-p-color-800 absolute z-10 top-0 left-[-250px]"
        aria-label="navigation"
    >
        <h1 class="text-vt-c-white p-6 text-[1.1rem] capitalize text-center">
            my documents
        </h1>
        <hr class="block border border-orange-500" />
        <button
            type="button"
            aria-label="add new document"
            @click="$addNewDoc"
            class="flex gap-x-3 text-vt-c-white-soft justify-center mt-5 w-[80%] mx-auto p-2 rounded-lg items-center bg-orange-500"
        >
            <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M10 14H12M12 14H14M12 14V16M12 14V12"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    ></path>
                    <path
                        d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
                        stroke="#ffffff"
                        stroke-width="1.5"
                    ></path>
                </g>
            </svg>
            Add New
        </button>
        <ul
            role=" list"
            aria-label="list of document"
            class="mt-4 w-[80%] mx-auto"
            v-if="$listOfDocs"
        >
            <li
                aria-label="document wrapper"
                v-for="$doc in $listOfDocs"
                :key="$doc.id"
                class="mb-3"
            >
                <button
                    aria-label="document"
                    class="p-2 flex items-center justify-center gap-x-4 bg-vt-c-black w-full rounded-lg text-vt-c-white-soft"
                    @click="
                        $currentSheet = $listOfDocs.find(
                            (el) => el.id == $doc.id
                        )
                    "
                >
                    <svg
                        width="14"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
                            fill="#FFF"
                        />
                    </svg>
                    <div aria-label="document info">
                        <span
                            aria-label="document date"
                            class="block text-sm"
                            >{{ $doc.Date }}</span
                        >
                        <span aria-label="document name" class="block">{{
                            $doc.title
                        }}</span>
                    </div>
                </button>
            </li>
        </ul>
    </aside>
</template>
