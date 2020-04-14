import  header  from '../components/header';
import  home  from '../pages/home';
import  character  from '../pages/character';
import  error404  from '../pages/error404';

const routes = {
  '/': home,
  '/:id': character,
  '/contact': 'Contact'
}

const router = async () => {
  const $header = document.querySelector('#header') || null
  const $content = document.querySelector('#content') || null

  $header.innerHTML = await header()
}

export default router