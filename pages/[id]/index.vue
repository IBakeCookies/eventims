<script lang="ts" setup>
import type { EventApi } from '@data/type/eventApi';

// move to data layer to /data/type/eventStatus
enum EventStatus {
    PUBLISHED = 'PUBLISHED',
}

const { id } = useRoute().params;
const { data, error } = await useFetch<EventApi[]>(
    `https://www.eventim-light.com/de/a/${id}/api/event`,
);

const publishedEvents: ComputedRef<EventApi[]> = computed(() => {
    if (!data.value) {
        return [];
    }

    return data.value.filter((item) => {
        return item.status === EventStatus.PUBLISHED;
    });
});
</script>

<template>
    <section class="container mx-auto p-8 bg-white">
        <template v-if="error">
            <p class="text-lg">Something went wrong.</p>
        </template>

        <template v-else>
            <h1 class="text-center text-2xl font-bold">
                {{ publishedEvents.length ? 'Current Events' : 'No events found' }}
            </h1>

            <div
                v-if="publishedEvents.length"
                class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                <template v-for="event in publishedEvents" :key="event.id">
                    <EventListItem
                        :url="`/${id}/event/${event.id}`"
                        :title="event.title"
                        :start-date="toValue(useLocaleDate(new Date(event.start)))"
                        :end-date="toValue(useLocaleDate(new Date(event.end)))"
                        :image="{
                            src: `https://www.eventim-light.com/de/api/image/${event.image.id}/shop_cover_v3/webp`,
                            alt: `${event.title} - ${event.venue.city}`,
                        }"
                        :city="event.venue.city"
                        :venue="event.venue.name"
                        :price="event.minPrice.value"
                        :currency="event.minPrice.currency"
                        :is-soldout="event.soldout"
                    />
                </template>
            </div>
        </template>
    </section>
</template>
