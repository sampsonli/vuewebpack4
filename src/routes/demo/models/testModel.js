import { deliver, getter, mutate } from '~/common/deliverer'
@deliver('test')
class TestModel {
    name = 'lichun'

    @mutate
    setName (name) {
        this.name = name
    }

    @getter
    uname () {
        return this.name + ' hello'
    }

    fetchName = (name = 111233) => {
        setTimeout(() => {
            this.setName(name)
        }, 16)
    }
}
export default new TestModel()
