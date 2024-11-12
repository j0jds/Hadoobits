import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles.css'; 

const Layout = ({ children }) => {
    return (
        <>
            {/* Header */}
            <header>
                <h1>Hadoobits</h1>
            </header>

            {/* Main content */}
            <main id="dashboard-container">
                {children}
            </main>

            {/* Footer */}
            <footer>
                <div className="container-foot">
                    <div className="row-footer">
                        <div className="footer-col">
                            <h4>Maria Gabriella</h4>
                            <ul>
                                <li><a href="https://github.com/gabisanttos" target="_blank" rel="noopener noreferrer">Github </a></li>
                                <li><a href="https://www.linkedin.com/in/gabisanttos/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Ashen Gabriella</h4>
                            <ul>
                                <li><a href="https://github.com/ashcrysis" target="_blank" rel="noopener noreferrer">Github</a></li>
                                <li><a href="https://www.linkedin.com/in/asher-gabriela/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Lucas Jonas</h4>
                            <ul>
                                <li><a href="https://github.com/j0jds" target="_blank" rel="noopener noreferrer">Github</a></li>
                                <li><a href="https://www.linkedin.com/in/j0jds/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Edmauro Oliveira</h4>
                            <ul>
                                <li><a href="https://github.com/Eddie-lima" target="_blank" rel="noopener noreferrer">Github</a></li>
                                <li><a href="https://www.linkedin.com/in/edmauro-lima-0a5a9a232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="medias-sociais">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <div className="copyright">
                    <p>&copy; 2024 Hadoobits. Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;