<script setup>
import {$AsideStatus, $currentSheet} from "../store/store";
</script>
<template>
    <header
        role="banner"
        aria-label=" header section"
        class="bg-vt-c-black-mute gap-4 flex justify-between items-center flex-wrap"
    >
        <section class="left flex items-center gap-x-5 text-vt-c-white-mute">
            <button
                role="button"
                aria-label="aside bar opener"
                type="button"
                class="flex justify-center items-center bg-vt-c-divider-dark-1 p-7 hover:bg-orange-400"
                @click.stop="$AsideStatus = !$AsideStatus"
            >
                <svg width="30" height="18" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#FFF" fill-rule="evenodd">
                        <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z" />
                    </g>
                </svg>
            </button>
            <a
                href="/"
                class="uppercase tracking-widest pr-5 border-r border-r-vt-c-white-mute hidden lg:block"
                >Markdown</a
            >
            <div
                aria-label="current sheet"
                class="flex gap-x-4 items-center"
                v-if="$currentSheet"
            >
                <img src="/icon-document.svg" alt="document/logo" />
                <div aria-label="info">
                    <span
                        aria-hidden="true"
                        class="capitalize text-gray-400 hidden sm:block"
                        >document name</span
                    >
                    <input
                        aria-label="document name"
                        class="block bg-vt-c-black-soft border-none w-[110px] focus:outline-none cursor-pointer border-b border-b-vt-c-white-mute"
                        value="welcome.md"
                    />
                </div>
            </div>
        </section>
        <section class="right pr-4 flex items-center gap-x-4">
            <button aria-label="delete document">
                <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                        fill="#7C8187"
                    />
                </svg>
            </button>
            <button
                aria-label="save changes"
                class="bg-orange-500 px-4 py-2 text-vt-c-white-mute flex items-center gap-x-3 rounded-lg"
            >
                <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.91 5.931 10.575.598A.889.889 0 0 0 10.29.41.969.969 0 0 0 9.945.34H2.834A2.667 2.667 0 0 0 .167 3.007v10.666a2.667 2.667 0 0 0 2.667 2.667H13.5a2.667 2.667 0 0 0 2.667-2.667v-7.11a.889.889 0 0 0-.258-.632ZM5.5 2.118h3.556v1.778H5.5V2.118Zm5.334 12.444H5.5v-2.666c0-.491.398-.89.89-.89h3.555c.49 0 .889.399.889.89v2.666Zm3.555-.889c0 .491-.398.89-.889.89h-.889v-2.667a2.667 2.667 0 0 0-2.666-2.667H6.389a2.667 2.667 0 0 0-2.666 2.667v2.666h-.89a.889.889 0 0 1-.888-.889V3.007c0-.491.398-.89.889-.89h.889v2.667c0 .491.398.89.888.89h5.334c.49 0 .889-.399.889-.89V3.371l3.555 3.556v6.746Z"
                        fill="#FFF"
                    />
                </svg>
                <span aria-label="inner text" class="hidden sm:block">
                    save changes</span
                >
            </button>
        </section>
    </header>
</template>
