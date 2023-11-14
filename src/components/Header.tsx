// 2.Implement header from bootstrap

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
export default function Header() {
	return (
		<Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
			<Container>
				<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/login'>Login</Nav.Link>
						<Nav.Link href='/signup'>Signup</Nav.Link>
					</Nav>

					<Nav>
						<Nav.Link href='/recipes'>Recipes</Nav.Link>
						<Nav.Link eventKey={2} href='/add-recipe'>
							Add Recipe
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
