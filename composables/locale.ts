export const useDefaultLocale = (fallback = 'de-DE') => {
    const locale = ref(fallback);

    if (import.meta.server) {
        const reqLocale = useRequestHeaders()['accept-language']?.split(',')[0];

        if (reqLocale) {
            locale.value = reqLocale;
        }
    } else if (import.meta.client) {
        const navLang = navigator.language;

        if (navLang) {
            locale.value = navLang;
        }
    }

    return locale;
};

export const useLocaleDate = (
    date: Ref<Date> | Date,
    options: Intl.DateTimeFormatOptions = {},
    locale = useDefaultLocale(),
) => {
    return computed(() => {
        return new Intl.DateTimeFormat(toValue(locale), { ...options }).format(unref(date));
    });
};

export const useLocale = () => useState<string>('locale', () => useDefaultLocale().value);
