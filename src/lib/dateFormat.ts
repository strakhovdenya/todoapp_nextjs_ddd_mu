import moment from 'moment';

export function formattedDate(date: string | null = null): string {
    if(!date){
        return null;
    }
    return moment(date, "YYYY-MM-DD").format('DD.MM.YYYY');
}