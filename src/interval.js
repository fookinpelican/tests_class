class Interval {
    constructor(start, end, ...args) {
        if (start === undefined || end === undefined) {
            throw 'ERROR: Please provide "start" and "end" arguments';
        } else if (args.length !== 0) {
            throw 'ERROR: Too many arguments';
        } else if (typeof start !== 'number' || typeof end !== 'number') {
            throw 'ERROR: The type of "start" or "end" is incorrect';
        }

        if (start > end) {
            const tmp = start;
            start = end;
            end = tmp;
        }
        this.start = start;
        this.end = end;
    }

    toString() {
        return "[ " + this.start + ", " + this.end + " ]";
    }

    /**
     * Exemple 1 :
     *      interval1 = new Interval(0, 4)
     *      interval2 = new Interval(2, 6)
     *      interval1.overlaps(interval2) => true
     *
     * Exemple 2 :
     *      interval1 = new Interval(2, 6)
     *      interval2 = new Interval(6, 10)
     *      interval1.overlaps(interval2) => false
     *
     * @param {Interval} interval
     * @returns {boolean}
     */
    overlaps(interval) {
        if (interval.constructor.name !== 'Interval') {
            throw 'ERROR: the parameter must be an Interval'
        }

        const allInInterval = this.start >= interval.start && this.end <= interval.end;
        const startInInterval = this.start >= interval.start && this.start < interval.end;
        const endInInterval = this.end > interval.start && this.end <= interval.end;

        return allInInterval || startInInterval || endInInterval;
    }

    /**
     * Retourne true si cet interval contient le paramètre interval
     *
     * Exemple 1 :
     *      interval1 = new Interval(0, 4)
     *      interval2 = new Interval(2, 4)
     *      interval1.includes(interval2) => true
     *
     * Exemple 2 :
     *      interval1 = new Interval(0, 4)
     *      interval2 = new Interval(2, 16)
     *      interval1.includes(interval2) => false
     *
     * @param {Interval} interval
     * @returns {boolean}
     */
    includes(interval) {
        if (interval.constructor.name !== 'Interval') {
            throw 'ERROR: the parameter must be an Interval'
        }

        return this.start <= interval.start && this.end >= interval.end;
    };

    /**
     * Retourne l'union de deux intervals
     *
     * Exemple 1 :
     *      interval1 = new Interval(0, 4)
     *      interval2 = new Interval(2, 4)
     *      interval1.union(interval2) => [new Interval(0, 4)]
     *
     * Exemple 2 :
     *      interval1 = new Interval(0, 4)
     *      interval2 = new Interval(6, 10)
     *      interval1.union(interval2) => [new Interval(0, 4), new Interval(6, 10)]
     *
     * @param {Interval} interval
     * @returns {Interval[]}
     */
    union(interval) {
        const array = new Array();

        if (interval.constructor.name !== 'Interval') {
            throw 'ERROR: the parameter must be an Interval'
        } else if (! this.overlaps(interval)) {
            if (this.start < interval.start) {
                array.push(new Interval(this.start, this.end));
                array.push(new Interval(interval.start, interval.end));
            } else {
                array.push(new Interval(interval.start, interval.end));
                array.push(new Interval(this.start, this.end));
            }

            if (array[0].end === array[1].start) {
                array[0].end = array[1].end;
                array.pop()
            }
        } else {
            const start = this.start <= interval.start ? this.start : interval.start;
            const end = this.end >= interval.end ? this.end : interval.end;
            array.push(new Interval(start, end));
        }

        return array;
    };

    /**
     * Retourne l'intersection de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.intersection(interval2) =>                     ▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.intersection(interval2) => <tableau vide>
     *
     * @param {Interval} interval
     * @returns {Interval|null}
     */
    intersection(interval) {

    };

    /**
     * Retourne l'exclusion de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒     ▒▒▒▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * @param {Interval} interval
     * @returns {Interval[]}
     */
    exclusion(interval) {

    };
}

module.exports = Interval;
