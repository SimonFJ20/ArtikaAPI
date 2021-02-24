

/**
 * Generates a random string.
 * @param {string} length - Length of the string
 */

export const generateRandomString = (length: number): string => {

    let id = '';

    // only strictly legal characters used
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {

        // picks random char
        id += characters.charAt(Math.floor(Math.random() * characters.length));

    }

    return id;

};


export const validateEmail = (email: string) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

