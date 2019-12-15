exports.codeGenerator = function(str, len = 5) {
    `${str}-${Math.random().toString(36).substr(2, len)}`
};

exports.apiRequest = function(url, method, data = '') {
    try {
        return fetch(url, {
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.error(error);
    }

}