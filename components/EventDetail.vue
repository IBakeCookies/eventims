<script lang="ts" setup>
interface Props {
    url: string;
    title: string;
    category: string;
    startDate: string;
    endDate: string;
    venue: string;
    city: string;
    street: string;
    zipCode: string;
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
    <div class="grid grid-cols-12 gap-8">
        <img
            class="col-span-12 lg:col-span-4 object-contain max-w-full w-full"
            :src="props.image.src"
            :alt="props.image.alt"
        >

        <div class="col-span-12 lg:col-span-8 flex flex-col bg-white border border-stone-200">
            <h2 class="p-8">
                <span class="font-bold text-xl">{{ props.title }}</span>

                <span class="block text-stone-600 mt-2">
                    {{ props.category }}
                </span>
            </h2>

            <p class="p-8 border-t border-stone-200 text-stone-600">
                {{ props.startDate }}

                <template v-if="props.startDate !== props.endDate">
                    -
                    {{ props.endDate }}
                </template>
            </p>

            <p class="p-8 border-t border-stone-200">
                {{ props.venue }} - {{ props.city }}, {{ props.zipCode }}, {{ props.street }}
            </p>

            <form class="mt-auto p-8 border-t border-stone-200">
                <Button
                    class="w-full"
                    type="submit"
                >
                    <template v-if="isSoldout">
                        Sold Out
                    </template>
                    <template v-else>
                        Buy Tickets for {{ price }}{{ currency }}
                    </template>
                </Button>
            </form>
        </div>
    </div>
</template>
