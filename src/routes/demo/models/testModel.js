import { connect, action, getter } from '../deliverer'
@connect('test')
class TestModel {
    name = 'lichun'

    @action
    setName (name) {
        this.name = name
    }

    @getter
    uname () {
        console.log(this)
        return this.name + ' hello'
    }

    fetchName = (name = 111233) => {
        console.log('before13:' + this.name)
        setTimeout(() => {
            this.setName(name)
        }, 1000)
    }
}
export default new TestModel()
