import { app } from './app'
import { hmr } from './utils/hmr'
import './main.sass'

// Hot Module Replacement
hmr()

window.addEventListener('DOMContentLoaded', function () {
  app()
})
