import './header.css'
import Menu from '../menu/Menu.jsx'

export default function Header({userName}){
    // console.log(userName)
    return (
        <div className='test'>
            header, {userName}님 반갑습니다.
            <Menu/>
        </div>
    )
}