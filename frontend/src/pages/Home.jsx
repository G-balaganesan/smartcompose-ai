import ChatBox from '../components/ChatBox';
import logo from '../assets/logo.png';

const Home = () => {
    return (
        <div className="home-container">
            <header className="app-header">
                <div className="header-logo">
                    <img src={logo} alt="SmartCompose AI Logo" className="logo-img" />
                    <h1>SmartCompose AI</h1>
                </div>
                <p className="header-subtitle">Your intelligent companion for professional communication</p>
            </header>

            <main className="main-content">
                <ChatBox />
            </main>

            <footer className="app-footer">
                <p>Powered by Groq AI</p>
            </footer>
        </div>
    );
};

export default Home;
