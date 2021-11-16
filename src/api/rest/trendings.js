import { makeRequest } from '../requests'

const addStaringZero = value => value < 10 ? `0${value}` : value

export const getTrendings = (lang = 'javascript') => {
  const params = new URLSearchParams()
  const weekMS = 7 * 24 * 60 * 60 * 1000
  const weekAgo = new Date(Date.now() - weekMS)

  const formattedDate = [
    weekAgo.getFullYear(),
    addStaringZero(weekAgo.getMonth() + 1),
    addStaringZero(weekAgo.getDate())
  ].join('-')

  params.append('order', 'desc')
  params.append('sort', 'stars')
  params.append('per_page', '10')
  params.append('q', `language:${lang} created:>${formattedDate}`)

  return makeRequest({
    url: `/search/repositories?${params}`
  })
}

// https://api.github.com/repos/bradtraversy/website-accessibility-tester/issues

export const getIssues = (url) => {
  return makeRequest({
    url: `${url}`
  })
}
