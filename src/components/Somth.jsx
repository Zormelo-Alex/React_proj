import "./Style.css";
import up from "../assets/images/1665629.png";
import down from "../assets/images/484662.png";
const somth = () => {
  return (
    <>
      <div className="main">
        <div className="stuff">
          <div className="flex">
            <div className="text">
              <h3>My to do list</h3>
            </div>
            <div className="ins">
              <form action="">
                <input type="text" placeholder="What am i doing today?" />
                <button><img src={up} alt="" /></button>
              </form>
            </div>
            <div className="field">
              <div className="ins two">
                <form action="">
                  <div className="textarea"></div>
                  <button><img src={down} alt="" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default somth