import http from '@/utils/request.js'

export const loginApi = params => http.get('/api/v1/vbs/login', { params })