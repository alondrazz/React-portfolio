const styles = {
    card: {
        margin: 20,
        background: '#fde8e9',
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

function Project() {
    return (
        <div style={styles.card}>
            <div style={styles.heading}>Projects</div>
        </div>
    );
}

export default Project;