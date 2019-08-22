
import { observable, action } from 'mobx'
let instance
class ListStore {
    @observable name = 'lichun'

    @action
    changeName = () => {
        this.name = 'sampson'
    }

    static getInstance = () => {
        if (instance) {
            return instance
        }
        instance = new ListStore()
        return instance
    }
}
export default ListStore
