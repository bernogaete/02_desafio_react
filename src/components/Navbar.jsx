

const Navbar = () => {
    const total = 25000;
    const token = false;
    
    return (
 <div className="barra">
            
<p>Pizzería Mamma Mía!</p>
<div className="d-inline-flex gap-2">

<button className="btn-nav">Home</button>
<button className="btn-nav">🔐Login</button>
<button className="btn-nav">🔐Register</button>




<div className="d-flex gap-2 d-md-flex justify-content-md-end">
        <a  href="#" className="btn btn-outline-primary" role="button" data-bs-toggle="button" aria-pressed="true" style={{ fontSize: 'small' }}>
        🛒 Total: ${total.toLocaleString()}
        </a>



</div>
</div>
</div>


    );
    };

    export default Navbar;