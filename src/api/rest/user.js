import { makeRequest } from '../requests'

export const getUserData = () => makeRequest({
  url: '/user'
})

export const getUserRepos = (owner) => makeRequest({
  url: `/users/${owner}/repos`
})

export const getUserFollowing = (owner) => makeRequest({
  url: `users/${owner}/following`
})

export const getUserFollowers = (owner) => makeRequest({
  url: `/users/${owner}/followers`
})
