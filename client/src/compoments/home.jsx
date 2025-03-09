import "../styles/home.css"
function Home(){

    return(
        <section className="home">
            <div className="img-container">
                <img src="/imgs/pizza.jpeg" alt="" className="header-pic" />
            </div>
            <div className="intro">
                <h1 className="quote">Cooking Inspirations, Family Recipes and Shared Joy</h1>
                <h2 className="title">Food as A Love Langauge</h2>
                <p>Hi ya! You've found a digital corner that keeps all of my receipes. Cooking is my love language and I belive to cook is to care. So, check around and feel free to contribute! </p>
            </div>
        </section>
    )
}

export default Home