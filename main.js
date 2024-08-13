import './style.css'
import { printHeader } from '/src/Header/Header'
import { printFunction } from '/src/Function/Function'
import { printRegisterForm } from './src/Form/Form'

const init = async () => {
  printHeader()
  printFunction()
  printRegisterForm()
}
init()
