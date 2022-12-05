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
    },
    range: function (start, end) {
        var list = [];
        for (var i = +start; i <= +end; i++) {
            list.push(i);
        }
        return list;
    },
    isLetter: function (str) {
        return str.length === 1 && str.match(/[a-z]/i);
    },
    groupBy: function (data, key, itemMap = (item) => item) {
        return data.reduce(function (storage, item) {
            var group = item[key];

            storage[group] = storage[group] || [];
            storage[group].push(itemMap(item));

            return storage;
        }, {});
    },
    isNumber2: function (char) {
        if (typeof char !== 'string') {
            return false;
        }

        if (char.trim() === '') {
            return false;
        }

        return !isNaN(char);
    }
}