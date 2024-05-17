import { ref, Ref, computed } from 'vue';
import { usePage } from "@inertiajs/vue3";
import { LanguageObject } from '@/Interfaces/language';

export function useTranslation() {

    const page = usePage();
    const local = computed(() => page.props.local);

    const language: Ref<LanguageObject> = ref({});

    const translate = (key: string): string => {

        if(local.value === 'en') return key;

        const translations = language.value[key]
            ? language.value[key]
            : key;

        return translations;
    }

    if(page.props.language && Object.keys(page.props.language).length > 0) {
        language.value = page.props.language as LanguageObject;
    }

    return {
        translate,
        local,
        language
    }
}
