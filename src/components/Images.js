const Images = (props) => {
    const {images} = props;
     return(
        <div className="card-images flex">
        {images.map((person)=> <img src={person} alt="card details" />)}     
        </div>
     );
     }
     
export default Images;