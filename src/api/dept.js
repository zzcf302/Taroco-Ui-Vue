import request from '@/plugin/axios'

export function listAll (query) {
  return request({
    url: '/admin/dept/list',
    method: 'get',
    params: query
  })
}

export function fetchTree (query) {
  return request({
    url: '/admin/dept/tree',
    method: 'get',
    params: query
  })
}

export function addObj (obj) {
  return request({
    url: '/admin/dept/',
    method: 'post',
    data: obj
  })
}

export function getObj (id) {
  return request({
    url: '/admin/dept/' + id,
    method: 'get'
  })
}

export function delObj (id) {
  return request({
    url: '/admin/dept/' + id,
    method: 'delete'
  })
}

export function putObj (obj) {
  return request({
    url: '/admin/dept/',
    method: 'put',
    data: obj
  })
}
