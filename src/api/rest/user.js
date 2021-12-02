import { makeRequest } from '../requests'

export const getUserData = () => makeRequest({
  url: '/user'
})

export const getUserRepos = (owner) => makeRequest({
  url: `/user/${owner}/repos`
})
