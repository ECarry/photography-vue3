import request from '@/utils/request'

export function getPhotoList() {
  return request.get('/photo/')
}
