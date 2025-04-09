export interface EventApi {
    id: string;
    title: string;
    start: string;
    end: string;
    salesEnd: string;
    categoryId: string;
    category: string;
    subtitle: string;
    header: string;
    doorsOpen: string;
    doorsClose: string;
    image: {
        id: string;
        copyright: string;
    };
    minPrice: {
        value: number;
        currency: string;
        basePrice: number;
        ticketFee: number;
        outletFee: number;
    };
    maxPrice: {
        value: number;
        currency: string;
        basePrice: number;
        ticketFee: number;
        outletFee: number;
    };
    status: string;
    soldout: boolean;
    promotion: boolean;
    codeless: boolean;
    eventType: string;
    showContingent: boolean;
    venue: {
        id: string;
        name: string;
        street: string;
        zipCode: string;
        city: string;
        country: string;
        geo: {
            latitude: string;
            longitude: string;
        };
    };
    type: string;
    affiliate: {
        id: string;
        name: string;
    };
    venueCount: number;
    eventCount: number;
}
