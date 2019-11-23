import { connect, action } from '../deliverer'
@connect('test')
class TestModel {
    name = 'lichun'

    @action
    setName (name) {
        this.name = name
    }

    fetchName = (name) => {
        console.log('before234:' + this.name)
        setTimeout(() => {
            this.setName(name)
        })
    }
}
export default new TestModel()
