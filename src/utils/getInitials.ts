export const getInitials = (name: string) => {
    let nameArr = name.split(' ');
    let initials: string = nameArr[0][0];
    if (nameArr[1]) initials = nameArr[1][0] + initials;
    return initials.toUpperCase();
}

export const getName = (name: string): string => {
    let viewName: string = (name.split(',')[1] + ' ' + name.split(',')[0])
    return viewName;
}