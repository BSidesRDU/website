const { DateTime } = require('luxon');

export default function (context, inject) {
    inject(
        'bDate',
        ({
            hero = false,
            year = false,
            month = false,
            dom = false,
            day = false,
            hour = false,
            format = '',
            ts = false,
        } = {}) => {
            const bsidesDate = new DateTime(context.$config.bsidesDate).setZone('America/New_York');

            if (ts) return bsidesDate;

            if (hero) format = 'DDDD';
            if (year) format = 'yyyy';
            if (month) format = 'LL';
            if (dom) format = 'dd';
            if (day) format = 'cccc';
            if (hour) format = 'hh';

            return bsidesDate.toFormat(format);
        }
    );
}
