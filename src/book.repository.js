class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        if (book) {
            this.db.get('books').push(book).write();
        }
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
        return this.db.get('books').size().value();
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
        return this.db.get('books').map('price').value().reduce((total, val) => total + val, 0);
    }


    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
        if (bookName) {
            return this.db.get('books').find({ name: bookName }).value();
        }
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMont(bookName) {

    }

}

module.exports = BookRepository;
