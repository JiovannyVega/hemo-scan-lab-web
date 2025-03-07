import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-primary text-white p-4">
            <nav className="container mx-auto flex justify-between">
                <Link to="/" className="text-lg font-bold">Hemo Scan</Link>
                <div>
                    <Link to="/" className="mr-4">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
