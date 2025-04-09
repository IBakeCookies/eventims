<script lang="ts" setup>
import type { EventApi } from '@data/type/eventApi';

const { id, slug } = useRoute().params;
const { data } = await useFetch<EventApi>(
    `https://www.eventim-light.com/de/a/${id}/api/event/${slug}`,
);
</script>

<template>
    <section v-if="data" class="container mx-auto p-8">
        <EventDetail
            :url="`5da03c56503ca200015df6cb/event/${data.id}`"
            :title="data.title"
            :category="data.category"
            :start-date="
                new Date(data.start).toLocaleDateString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                })
            "
            :end-date="
                new Date(data.end).toLocaleDateString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                })
            "
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
