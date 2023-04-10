//@ts-check

export class Jwt {
  jwt = {}
  expiresIn = new Date()

  /**
   * @param {String} token - The jwt token
   */
  constructor (token) {
    const decodedJwt = this.#decodeJwt(token)
    this.jwt = decodedJwt
    this.expiresIn = this.#expiresDate()
  }

  /**
   * Decode a jwt token without checking signature then returns a json object
   * @param {String} token
   * @return {<JSON,parse>()=>JSON} JSON object
   */
  #decodeJwt(token) {
    const base64Url = token.split('.')[ 1 ]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(c => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )

    return JSON.parse(jsonPayload)
  }

  /**
   *
   * @returns {Date} Date object
   */
  #expiresDate() {
    const { exp } = this.jwt
    const expirationDate = new Date(exp * 1000)
    return expirationDate


  }

  isExpired() {
    const expiredToken = this.expiresIn <= new Date()
    return expiredToken
  }
}
