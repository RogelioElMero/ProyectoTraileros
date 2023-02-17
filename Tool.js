class Tool {
    /**
     * 
     * @param {String} parameter 
     * @param {Array} data 
     */
    static setDataToLocalStorage(parameter, data) {
        localStorage.setItem(parameter, JSON.stringify(data));
    }

    /**
         * 
         * @param {string} parameter 
         * @returns {Array}
         */
    static getDatFromLocalStorage(parameter) {
        return JSON.parse(localStorage.getItem(parameter));
    }

}