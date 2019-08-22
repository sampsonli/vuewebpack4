
import { observable, action } from 'mobx'
class ListStore {
    @observable name = 'lichun'

    @action
    changeName = () => {
        this.name = 'sampson'
    }
}
export default new ListStore()
