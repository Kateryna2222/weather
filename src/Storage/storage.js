export const storage = {
    setItem: (name, item) => {
        localStorage.setItem(name, JSON.stringify(item))
    },
    getItem: (name) => {
        const item = localStorage.getItem(name);

        if(item){
            return JSON.parse(item)
        }
    },
    removeItem: (name) => {
        const item = localStorage.getItem(name);

        if(item){
            return localStorage.removeItem((name))
        }
    }
}