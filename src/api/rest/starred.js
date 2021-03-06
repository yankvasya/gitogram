import { makeRequest } from '../requests'

export const starRepo = ({ owner, repo }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'PUT',
  headers: {
    accept: 'application/vnd.github.v3.html+json'
  }
})

export const unStarRepo = ({ owner, repo }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'DELETE'
})
