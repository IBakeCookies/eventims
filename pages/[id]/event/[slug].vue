<script lang="ts" setup>
import type { EventApi } from '@data/type/eventApi';

const { id, slug } = useRoute().params;
const { data } = await useFetch<EventApi>(
    `https://www.eventim-light.com/de/a/${id}/api/event/${slug}`,
);
</script>

<template>
    <section
        v-if="data"
        class="container mx-auto p-8"
    >
        <NuxtLink
            :to="`/${id}`"
            class="text-stone-600 hover:text-stone-900 font-bold text-lg"
        >
            <span class="text-2xl">&larr;</span> Back to all events
        </NuxtLink>

        <EventDetail
            class="mt-8"
            :url="`5da03c56503ca200015df6cb/event/${data.id}`"
            :title="data.title"
            :category="data.category"
            :start-date="
                toValue(
                    useLocaleDate(new Date(data.start), {
                        hour: 'numeric',
                        minute: 'numeric',
                    }),
                )
            "
            :end-date="toValue(useLocaleDate(new Date(data.end)))"
            :image="{
                src: `https://www.eventim-light.com/de/api/image/${data.image.id}/shop_cover_v3/webp`,
                alt: `${data.title} - ${data.venue.city}`,
            }"
            :city="data.venue.city"
            :venue="data.venue.name"
            :zip-code="data.venue.zipCode"
            :street="data.venue.street"
            :price="data.minPrice.value"
            :currency="data.minPrice.currency"
            :is-soldout="data.soldout"
        />
    </section>
</template>
