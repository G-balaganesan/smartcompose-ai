import ChatBox from '../components/ChatBox';

const Home = () => {
    return (
        <div className="home-container">
            <header className="app-header">
                <div className="header-logo">
                    <h1>AI Email Draft Assistant</h1>
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
