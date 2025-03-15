const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '';

    const cleaned = ('' + phoneNumber).replace(/\D/g, ''); // Remove non-numeric characters
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/); // Capture groups

    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return phoneNumber; // Return as is if not a valid format
};

export default formatPhoneNumber;