import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import './homepage.css'

export default function Homepage({userName}){
    // console.log(userName)
    return (
        <div>
            <Header userName={userName} />
            <Main />
            <Footer />
        </div>
    )
}