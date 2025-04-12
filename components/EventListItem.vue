<script lang="ts" setup>
interface Props {
    url: string;
    title: string;
    startDate: string;
    endDate: string;
    venue: string;
    city: string;
    image: {
        src: string;
        alt: string;
    };
    price: number;
    currency: string;
    isSoldout: boolean;
}

const props = defineProps<Props>();
</script>

<template>
    <div class="border border-stone-200 flex flex-col">
        <img
            class="object-contain max-w-full w-full"
            :src="props.image.src"
            :alt="props.image.alt"
        />

        <h2 class="bg-stone-50 p-4 border-t border-stone-200">
            <span class="text-xl font-bold">{{ props.title }}</span>

            <p class="mt-2 text-stone-600">
                {{ props.startDate }}

                <template v-if="props.startDate !== props.endDate">
                    -
                    {{ props.endDate }}
                </template>
            </p>
        </h2>

        <p class="p-4 border-t border-stone-200">{{ props.venue }} - {{ props.city }}</p>

        <NuxtLink :to="url" class="mt-auto">
            <Button class="w-full">
                <template v-if="isSoldout"> Sold Out </template>
                <template v-else> Buy Tickets from {{ price }}{{ currency }}</template>
            </Button>
        </NuxtLink>
    </div>
</template>
