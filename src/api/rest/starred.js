import { makeRequest } from '../requests'
// import { Octokit } from '@octokit/core'

// const octokit = new Octokit({ auth: localStorage.getItem('token') })

export const starRepo = ({ owner, repo }) => {
  console.log(owner, 'owner')
  console.log(repo, 'repo')

  return makeRequest({
    url: `/user/starred/${owner}/${repo}`,
    method: 'PUT',
    headers: {
      Authorization: `token ${localStorage.getItem('token')}`,
      accept: 'application/vnd.github.v3.html+json'
    }
  })
}

export const unStarRepo = ({ owner, repo }) => makeRequest({
  url: `/user/starred/${owner}/${repo}`,
  method: 'DELETE',
  headers: {
    Authorization: `token ${localStorage.getItem('token')}`
  }
})

// export const starRepo = async ({ owner, repo }) => {
//   await octokit.request('GET /user/starred/{owner}/{repo}', {
//     owner,
//     repo
//   })
// }
