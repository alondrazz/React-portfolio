const styles = {
    card: {
        margin: 20,
        background: '#596475',
    },
heading: {
    background: '#bc9ec1',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
},
};

function Navigation() {
    return (
        <div style={styles.card}>
            <div style={styles.heading}>Home</div>
        </div>
    );
}

export default Navigation;