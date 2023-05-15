
export function onlyAuth() {
  return async function (request, res, next) {
    try {
      if (!request.headers['x-access-token']) {
        throw new Exceptions.UnauthorizedException('Please provide valid jwt token')
      }
      const tokenIdentifier = await verifyJwtToken(request.headers['x-access-token']);
      if (!tokenIdentifier) {
        throw new Exceptions.ConflictException('Malformed Token');
      }
    } catch (error) {
      request.context = { error }
    }
    next()
  }
}

