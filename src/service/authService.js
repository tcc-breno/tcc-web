import { publicInstance } from './axios'

class AxiosAuthService {
    async register(body) {
        return publicInstance.post('/auth/signin', body)
    }

}

export const AuthService = new AxiosAuthService();