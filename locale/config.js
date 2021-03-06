function relativeTimeWithTense(number, withoutSuffix, key, isFuture) {
    const format = {
        s: ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
        m: ['ühe minuti', 'üks minut'],
        mm: ['%d minuti', '%d minutit'],
        h: ['ühe tunni', 'tund aega', 'üks tund'],
        hh: ['%d tunni', '%d tundi'],
        d: ['ühe päeva', 'üks päev'],
        M: ['kuu aja', 'kuu aega', 'üks kuu'],
        MM: ['%d kuu', '%d kuud'],
        y: ['ühe aasta', 'aasta', 'üks aasta'],
        yy: ['%d aasta', '%d aastat']
    }
    if (withoutSuffix) {
        return (format[key][2] ? format[key][2] : format[key][1]).replace('%d', number)
    }
    return (isFuture ? format[key][0] : format[key][1]).replace('%d', number)
}

dayjs.locale({
    name: 'et',
    weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
    months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    ordinal: n => `${n}.`,
    weekStart: 1,
    yearStart: 4,
    relativeTime: {
        future: '%s pärast',
        past: '%s tagasi',
        s: relativeTimeWithTense,
        m: relativeTimeWithTense,
        mm: relativeTimeWithTense,
        h: relativeTimeWithTense,
        hh: relativeTimeWithTense,
        d: relativeTimeWithTense,
        dd: '%d päeva',
        M: relativeTimeWithTense,
        MM: relativeTimeWithTense,
        y: relativeTimeWithTense,
        yy: relativeTimeWithTense
    },
    formats: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[täna] LT',
        nextDay: '[homme] LT',
        nextWeek: 'dddd LT',
        lastDay: '[eile] LT',
        lastWeek: '[eelmine] dddd LT',
        sameElse: 'L'
    },
}, null, false);
