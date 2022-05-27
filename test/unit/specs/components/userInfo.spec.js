import {createLocalVue, mount} from '@vue/test-utils'
import Vuex from 'vuex'
import {actions} from '../../../../src/store/actions'
import {mutations} from '../../../../src/store/mutations'
import UserInfo from '../../../../src/components/userInfo'
import {getter} from '../../../../src/store/getter'

const localVue = createLocalVue()
localVue.use(Vuex)
describe('userInfo.vue', () => {
  let wrapper
  let store
  beforeEach(() => {
    store = {
      state: {
        currentUser: null
      },
      actions,
      mutations,
      getters: getter
    }
    wrapper = mount(UserInfo, {
      localVue, store
    })
  })
  it('should be mounted', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.exists()).toBe(true)
  })
  it('should change the show Value ', () => {
    expect(wrapper.vm.show).toEqual(false)
    wrapper.vm.showMore()
    expect(wrapper.vm.show).toEqual(true)
  })
})
