const Navbar = () => {
  return (
<ul style={{
  width: '100%',
  height: '50px',
  border: '2px solid black',
  display: 'flex',
  justifyContent:'space-around',
  alignItems: 'center',
}}>
  <li style={{listStyleType: 'none', cursor: 'pointer'}}>Home</li>
  <li style={{listStyleType: 'none', cursor: 'pointer'}}>Mis Proyectos</li>
  <li style={{listStyleType: 'none', cursor: 'pointer'}}>Contacto</li>
</ul>
  );
};

export default Navbar;
