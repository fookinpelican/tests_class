class Interval {
    constructor(start, end) {
        if (start === undefined || end === undefined) {
            throw 'ERROR: Please provide "start" and "end" arguments';
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
     *      interval1.union(interval2) => [Interval(0, 4)]
     *
     * Exemple 2 :
     *      interval1 = new Interval(0, 4)
     *      interval2 = new Interval(6, 10)
     *      interval1.union(interval2) => [Interval(0, 4), Interval(6, 10)]
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
                array.pop();
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
     *      interval1 = new Interval(0, 4)
     *      interval2 = Interval(2, 4)
     *      interval1.intersection(interval2) => Interval(2, 4)
     *
     * Exemple 2 :
     *      interval1 = new Interval(0, 4)
     *      interval2 = new Interval(6, 10)
     *      interval1.intersection(interval2) => null
     *
     * @param {Interval} interval
     * @returns {Interval|null}
     */
    intersection(interval) {
        if (interval.constructor.name !== 'Interval') {
            throw 'ERROR: the parameter must be an Interval'
        } else if (! this.overlaps(interval)) {
            return null;
        } else {
            const start = this.start > interval.start ? this.start : interval.start;
            const end = this.end < interval.end ? this.end : interval.end;

            return new Interval(start, end);
        }
    };

    /**
     * Retourne l'exclusion de deux intervals
     *
     * Exemple 1 :
     *      interval1 = new Interval(0, 4)
     *      interval2 = new Interval(2, 4)
     *      interval1.exclusion(interval2) => [Interval(0, 2)]
     *
     * Exemple 2 :
     *      interval1 = new Interval(0, 4)
     *      interval2 = new Interval(6, 10)
     *      interval1.exclusion(interval2) => [Interval(0, 4), Interval(6, 10)]
     *
     * @param {Interval} interval
     * @returns {Interval[]}
     */
    exclusion(interval) {
        if (interval.constructor.name !== 'Interval') {
            throw 'ERROR: the parameter must be an Interval'
        } else if (! this.overlaps(interval) && this.end < interval.start) {
            return [
                new Interval(this.start, this.end),
                new Interval(interval.start, interval.end),
            ];
        } else if (! this.overlaps(interval) && this.start > interval.end) {
            return [
                new Interval(interval.start, interval.end),
                new Interval(this.start, this.end),
            ];
        } else if (this.start === interval.start && this.end === interval.end) {
            return new Array();
        } else {
            const array = new Array();
            if (this.start < interval.start) {
                array.push(new Interval(this.start, interval.start));
            } else if (this.start > interval.start) {
                array.push(new Interval(interval.start, this.start));
            }

            if (this.end > interval.end) {
                array.push(new Interval(this.end, interval.end));
            } else if (this.end < interval.end) {
                array.push(new Interval(interval.end, this.end));
            }

            return array;
        }
    };
}

module.exports = Interval;
