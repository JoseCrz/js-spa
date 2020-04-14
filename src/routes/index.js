import  header  from '../components/header'
import  home  from '../pages/home'
import  character  from '../pages/character'
import  error404  from '../pages/error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'


const routes = {
  '/': home,
  '/:id': character,
  '/contact': 'Contact'
}

const router = async () => {
  const $header = document.querySelector('#header') || null
  const $content = document.querySelector('#content') || null

  $header.innerHTML = await header()
  
  const hash = getHash()
  const route = await resolveRoutes(hash)
  const render = routes[route] ? routes[route] : error404

  $content.innerHTML = render()
}

export default router