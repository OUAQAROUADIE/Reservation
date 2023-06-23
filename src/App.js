import './App.css';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import { Navbar, Nav, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import Home from './Components/Home';

function App() {
  return (
    <div className='App '>
                <Navbar  variant="dark" expand="lg" fixed="top" style={{backgroundColor:"black"}}>
                  <Navbar.Brand href="#">
                    <img src="./Images/logo.png" alt="Avatar Logo" style={{ width: "40px" }} className="rounded-pill" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarCollapse" />
                  <Navbar.Collapse id="navbarCollapse">
                    <Nav className="ml-auto mr-5">
                      <Nav.Link className='mr-4' href="#footer" style={{ color: "white" }}><h5>Contactez-nous</h5></Nav.Link>
                      <Nav.Link className='mr-4' href="#" style={{ color: "white" }}><h5>A propos</h5></Nav.Link>
                      <Nav.Link className='mr-4' href="#" style={{ color: "white" }}><h5>Menu</h5></Nav.Link>
                    </Nav>
                    <Button  className='text-center' href='/login' variant="primary" style={{ backgroundColor: "#DE8603", borderRadius: "15px" }}><h6 className='mt-1'>Se connecter</h6></Button>
                  </Navbar.Collapse>
                </Navbar>
                <main>
              <div style={{ marginTop: "60px", overflowX: "hidden", width: "100%", height: "400px", backgroundImage: `url('./Images/back1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', backgroundAttachment: 'fixed' }}>
                <Row>
                  <Col sm={7}>
                    <div>
                      <h1 className='ml-3' style={{ fontSize: "75px", fontFamily: "cursive", marginTop: "180px" }}><span style={{ color: "#14EF44" }}>Bienvenue</span> <span style={{ color: "white" }}>dans votre espace de réservation</span></h1>
                    </div>
                    <Button href='#reservation'className='p-relative ml-5 mt-5'  variant='primary' style={{ backgroundColor: "#DE8603", width: "300px", height: "90px", margin:"auto", borderRadius: "20px", fontSize: "40px", fontFamily: "cursive", paddingBottom: "15px" }}>Reservation</Button>
                  </Col>
                </Row>
              </div>
              <div id='reservation' class="p-3 text-center flex-column d-flex justify-content-center align-items-center" style={{ backgroundColor: "black" }}>
                <div class="container-fluid text-center pt-3 text-white" style={{ width: "100%", height: "80px", backgroundColor: "#DE8603" }}><h1>Reservation</h1></div>
                <div>
                  <h2 class="mt-5 text-white">Reserver votre repas de
                    <select name="pets" id="pet-select" class="ml-5 bg-warning">
                      <option value="dog">Demain</option>
                      <option value="cat">Apres Demain</option>
                      <option value="hamster">Apres apres Demain</option>
                    </select>
                    :</h2>
                </div>
                <div class="mt-5" style={{ width: "100%",height:"1500px", maxWidth: "700px", backgroundColor: "#FAB041", borderRadius: "40px" }}>
                  <div class="bg-white text-center mt-5 ml-4 mb-5" style={{ width: "90%", height: "70px", borderRadius: "40px" }}><h1 class="pt-2">Petit Dejeuner :</h1></div>
                  <div className='p-relative' style={{ width: "90%", height: "340px", backgroundColor: "#DE8603", borderRadius: "20px", margin: "0 auto", marginTop: "-50px" }}>
              <div className="form-check d-flex justify-content-between align-items-center">
                <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                  <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Thé - Café
                </label>
                <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
              </div>
              <div className="form-check d-flex justify-content-between align-items-center">
                <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                  <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Petit-Pain
                </label>
                <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
              </div>
              <div className="form-check d-flex justify-content-between align-items-center">
                <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                  <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Oeufs
                </label>
                <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
              </div>
              <div className="form-check d-flex justify-content-between align-items-center">
                <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                  <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Msemen
                </label>
                <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
              </div>
            </div>
                        

                          <div class="bg-white text-center m-5" style={{width:"300px", height:"70px", borderRadius:"40px", marginTop:"50px"}}><h1 class="pt-2">Déjeuner :</h1></div>
                          <div className='p-relative' style={{ width: "90%", height: "260px", backgroundColor: "#DE8603", borderRadius: "20px", margin: "0 auto", marginTop: "-50px" }}>
                            <div className="form-check d-flex justify-content-between align-items-center">
                                <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                                  <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Salade
                                </label>
                                <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center">
                              <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                                <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Plat principal
                              </label>
                              <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center">
                              <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                                <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Dessert
                              </label>
                              <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
                            </div>
                          </div>


                          <div class="bg-white text-center m-5" style={{width:"300px", height:"70px", borderRadius:"40px", marginTop:"50px"}}><h1 class="pt-2">Dîner :</h1></div>
                          <div className='p-relative' style={{ width: "90%", height: "260px", backgroundColor: "#DE8603", borderRadius: "20px", margin: "0 auto", marginTop: "-50px" }}>
                            <div className="form-check d-flex justify-content-between align-items-center">
                              <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                                <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Salade
                              </label>
                              <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center">
                              <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                                <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Plat principal
                              </label>
                              <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
                            </div>
                            <div className="form-check d-flex justify-content-between align-items-center">
                              <label htmlFor="flexCheckDefault" className="mb-0" style={{ fontSize: "30px", fontFamily: "cursive" }}>
                                <span style={{ fontSize: "50px", marginRight: "10px" }}>•</span>Dessert
                              </label>
                              <input className='mr-5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{ transform: "scale(2)" }} />
                            </div>

                          </div>
                          <Button href='' className=" text-center text-white p-relative mt-5 " variant='primary' style={{backgroundColor:"#14EF44", width:"200px",height:"60px", margin:"auto", borderRadius:"20px", fontSize:"30px", fontFamily:"cursive"}}>Reserver</Button>

                    </div>
                </div>
                </main>
                <MDBFooter id='footer'  className='text-center text-lg-start  text-white ' style={{backgroundColor:"#DE8603"}} >
                  <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                    <div className='me-5 d-none d-lg-block'>
                      <span>Get connected with us on social networks:</span>
                    </div>

            <div >
              <a href='' className='me-4 text-reset'>
              <i class="bi bi-facebook mr-3" style={{fontSize:"40px", color:"white"}}></i>
              </a>
              <a href='' className='me-4 text-reset'>
              <i class="bi bi-twitter mr-3" style={{fontSize:"40px", color:"white"}}></i>
              </a>
              <a href='https://portfolioouadie.pages.dev/' className='me-4 text-reset'>
              <i class="bi bi-google mr-3"  style={{fontSize:"40px", color:"white"}}></i>
              </a>
              <a href='' className='me-4 text-reset'>
              <i class="bi bi-instagram mr-3" style={{fontSize:"40px", color:"white"}}></i>
              </a>
              <a href='https://www.linkedin.com/in/ouadie-ouaqar-677814224/' className='me-4 text-reset mr-2'>
              <i class="bi bi-linkedin mr-3" style={{fontSize:"40px", color:"white"}}></i>
              </a>
              <a href='https://github.com/OUAQAROUADIE' className='me-4 text-reset'>
              <i class="bi bi-github mr-4" style={{fontSize:"40px", color:"white"}}></i>
              </a>
            </div>
          </section>

        <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
              <MDBRow className='mt-3'>
                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Company name
                  </h6>
                  <p>
                  Newrest est une société de restauration industrielle spécialisée dans le domaine aérien, ainsi que dans le ferroviaire, le maritime, et les collectivités. Son siège social est basé à Toulouse en France.
                  </p>
                </MDBCol>

              

                <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                  <p>
                    <a href='#' className='text-reset'>
                      Home
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href='/Home' className='text-reset'>
                      Connexion
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    18, Rue Ibnou Kalikhane.              </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    ouaquarouadie@gmail.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> + 01 42 79 77 20
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> + 01 42 79 77 20
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
            © 2023  Copyright:
            <a className='text-reset fw-bold' href='https://portfolioouadie.pages.dev/'>
            OUADIE
            </a>
          </div>
        </MDBFooter>
  </div>
  );
}

export default App;
