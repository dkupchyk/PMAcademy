export const PHONE_VALIDATION = (phone) => {
    const regex = /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/;
    return regex.test(phone);
}

export const EMAIL_VALIDATION = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
