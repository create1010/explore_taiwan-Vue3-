<template>
    <div>
        <DestinationTitle />
        <DestinationPopularity />
        <DestinationTransportation />
        <DestinationFood />
        <DestinationRest />
        <DestinationServe />
    </div>
</template>

<script setup>
import DestinationTitle from '@/components/Destination/DestinationTitle.vue';
import DestinationPopularity from '@/components/Destination/DestinationPopularity.vue';
import DestinationTransportation from '@/components/Destination/DestinationTransportation.vue';
import DestinationFood from '@/components/Destination/DestinationFood.vue';
import DestinationRest from '@/components/Destination/DestinationRest.vue';
import DestinationServe from '@/components/Destination/DestinationServe.vue';
</script>