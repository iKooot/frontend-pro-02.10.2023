import _ from 'lodash';

export const foo = (a, b) => {
    return a + b;
};

export const myFilter = (array) => {
    return _.uniq(array);
};
