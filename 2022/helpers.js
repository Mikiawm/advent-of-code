module.exports = {
    chunkArray: function (array, chunkSize) {
        var returnArray = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            const chunk = array.slice(i, i + chunkSize);
            returnArray.push(chunk);
        }

        return returnArray;
    },
    splitOnHalf: function (str) {
        return [str.slice(0, str.length / 2).split(''), str.slice(str.length / 2, str.length).split('')];
    }
}