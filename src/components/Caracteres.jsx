import { useContext } from "react";
import { CaracteresContext } from "../context/CaracteresContext";
import { Pagination } from "./Pagination";

export const Caracteres = () => {
  const { characters } = useContext(CaracteresContext);

  return (
    <div className="row">
        <Pagination/>
        {
            characters.map((character)=>{
                return(
                    <div className="col-3" key={character.id}>
                    <div className="card mt-4">
                      <img src={character.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">
                            <b>Status: {character.status}</b>
                            <br />
                            <b>Species: {character.species}</b></p>
                      </div>
                    </div>
                  </div>
                )
            })
        }
    </div>
  );
};
