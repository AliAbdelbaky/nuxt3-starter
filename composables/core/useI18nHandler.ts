import {useI18n} from "vue-i18n";

type Lang = 'ar' | 'en';
export default function () {
    const lang_cookie = useCookie<Lang>("lang");
    lang_cookie.value = lang_cookie.value || 'en'
    const {locale, setLocale} = useI18n({useScope: "global"});

    const html_attrs = computed(() => ({
        lang: lang_cookie.value,
        dir: lang_cookie.value === 'ar' ? 'rtl' : 'ltr'
    }))
    const set_lang = (lang: Lang) => {
        lang_cookie.value = lang
        setLocale(lang);
        useHead({
            htmlAttrs: {
                lang: lang,
                dir: lang === 'ar' ? 'rtl' : 'ltr'
            }
        })
        return html_attrs.value
    };

    return {set_lang, lang_cookie, html_attrs};

}