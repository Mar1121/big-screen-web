import http from '@/utils/request.js'

export const loginApi = data => http.post('/api/login', data)