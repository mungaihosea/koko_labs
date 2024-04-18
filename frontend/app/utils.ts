

export function capitalizeEachWord(sentence: string) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}


export function getDatefromUTCString(dateString: any){
    let date = new Date(dateString)
    return date.toDateString()
}


export function formatCurrency(value: string) {
    return 'KES ' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}