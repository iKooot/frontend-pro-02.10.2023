const linkedListSingle = {
    value: 'data',
    next: {
        value: 'data',
        next: {
            value: 'data',
            next: {
                value: 'data',
                next: {
                    value: 'data',
                    next: {
                        value: 'data',
                        next: null
                    }
                }
            }
        }
    }
}

const linkedListDoubly = {
    value: 'data',
    prev: null,
    next: {
        value: 'data',
        prev: linkedListDoubly,
        next: {
            value: 'data',
            prev: linkedListDoubly.next,
            next: {
                value: 'data',
                prev: linkedListDoubly.next.next,
                next: null
            }
        }
    }
}

const linkedListCirkular = {
    value: 'data',
    next: {
        value: 'data',
        next: {
            value: 'data',
            next: {
                value: 'data',
                next: {
                    value: 'data',
                    next: {
                        value: 'data',
                        next: linkedListCirkular
                    }
                }
            }
        }
    }
}