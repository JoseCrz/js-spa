const resolveRoutes = route => {
  if (route.length <= 3) {
    const validRoute = route === '/' ? route : '/:id'
    return validRoute
  }

  return `/${route}`
}

export default resolveRoutes