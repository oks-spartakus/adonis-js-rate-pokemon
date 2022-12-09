import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import SigninUserValidator from 'App/Validators/SigninUserValidator'

export default class UsersController {
  public async signup({ auth, request, response }) {
    const payload = await request.validate(CreateUserValidator)
    const { email, password } = payload

    const user = await User.findBy('email', email)
    if (user) {
      return response.conflict({ error: 'this user is already in db' })
    }

    const data = await User.create({ email, password })
    await auth.use('web').attempt(email, password)

    return { message: 'user created and signed in', data }
  }

  public async signin({ auth, request }) {
    const payload = await request.validate(SigninUserValidator)
    const { email, password } = payload

    await auth.use('web').attempt(email, password)

    return { message: 'signed in' }
  }

  public async signout({ auth }) {
    await auth.use('web').logout()
    return { message: 'signed out' }
  }
}
