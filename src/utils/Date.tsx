// get today date in form of dd/mm/yy

export function GetCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear(); // Use full year
    return `${day}/${month}/${year}`;
}

// get yesterday date in form of dd/mm/yy

export function GetYesterday() {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    return formatDate(today);
}

function formatDate(date: any) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}


// get tommorrow date in form of dd/mm/yy

export function GetTomorrow() {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return formatDate(today);
}

// get weekly date in form of dd/mm/yy

export function GetOneWeekFromToday() {
    const today = new Date();
    today.setDate(today.getDate() - 6);
    return formatDate(today);
}

// get monthly date in form of dd/mm/yy

export function GetOneMonthFromToday() {
    const today = new Date();
    today.setMonth(today.getMonth() - 1);
    return formatDate(today);
}