export default function Main() {
    return (

        <div className="main--container">
            
            <h3 className="main--h3 main--content">
                Business Card
            </h3>
            <h4 className="main--h4 main--content">
                Frontend Developer
            </h4>
            <span className="main--span main-content">
                Website URL
            </span>

            <div className="btn--class">
                <button className="main--btn btn--email"><img src="{emaillogo}" className="email"/>Email</button>
                <button className="main--btn btn--linkedin"><img src="{linkedinlogo}" className="linkedin"/>LinkedIn</button>
            </div>

            <div className="main--about-interest">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo soluta consequatur quia quis, laboriosam fuga molestias repellendus! Quaerat reiciendis ab, quidem libero, reprehenderit quo, impedit illum quia deleniti laudantium iusto.</p>
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis aliquam voluptatem quos, placeat iste suscipit quaerat aperiam maxime perferendis quibusdam necessitatibus voluptas nemo incidunt aspernatur odit itaque dolore officia expedita.</p> 
            </div>

        </div>
    )
}