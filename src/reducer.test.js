import { updateUser } from './actions'
import { user as userReducer } from './reducer'

describe('User reducer', () => {
  describe('updateUser', () => {
    it('should set isLoading to false', () => {
      const userStub = {
        results: {
          name: {
            title: 'mr',
            first: 'joe',
            last: 'smith'
          }
        },
        info: {
          seed: 'ab69654e292957ee2d1a52de099a1660',
          results: 1,
          page: 1,
          version: '1.1'
        }
      }
      const reduced = userReducer({ isLoading: true }, updateUser(userStub))
      expect(reduced).toEqual({
        ...userStub.results,
        info: userStub.info,
        isLoading: false
      })
    })
  })
})
