import axios from 'axios'
import {getTodosforUser, getUserInformation} from '../../../../src/services/servicesList'

jest.mock('axios')
describe('servicesList', () => {
  it('should return users info', async () => {
    const user = {
      'id': 1,
      'name': 'Leanne Graham',
      'username': 'Bret',
      'email': 'Sincere@april.biz',
      'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
          'lat': '-37.3159',
          'lng': '81.1496'
        }
      },
      'phone': '1-770-736-8031 x56442',
      'website': 'hildegard.org',
      'company': {
        'name': 'Romaguera-Crona',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets'
      }
    }
    axios.get.mockResolvedValueOnce(user)
    const result = await getUserInformation(1)

    expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/1`)
    expect(result).toEqual(user)
  })
  it('should return todos for user', async () => {
    const todos = []
    axios.get.mockResolvedValueOnce(todos)
    const result = await getTodosforUser(1)

    expect(axios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/users/1/todos`)
    expect(result).toEqual(todos)
  })
})
