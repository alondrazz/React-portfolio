// const linkStyles = {
//     card: {
//         margin: 20,
//         background: '#596475',
//     },
// heading: {
//     background: '#bc9ec1',
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: '1.2rem',
//     color: 'white',
//     padding: '0 20px',
// },
// };

// function Navigation() {
//     return (
//         <div style={styles.card}>
//             <div style={linkStyles.heading}>Home</div>
//         </div>
//     );
// }

// export default Navigation;
export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div style={linkStyle}>
            <a href="#">Home</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Login</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Register</a>
          </div>
          <div style={linkStyle}>
            <a href="#">About</a>
          </div>
          <div style={linkStyle}>
            <a href="#">Contact</a>
          </div>
        </section>
      </nav>
    );
  }
  