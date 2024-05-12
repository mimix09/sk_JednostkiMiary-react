import React, { useEffect, useState } from "react";
import "./styl.css";

function MainPage(){
    const [wartosc, setWartosc] = useState(0);
    const [miara, setMiara] = useState();
    const [wynik, setWynik] = useState();
    const tab = ["Metry na Stopy", "Kilogramy na Funty", "Celsjusze na Fahrenheity", "Litr na Galony", "Centymetry na Cale", "Metry na Mile"];
    const [lista, setLista] = useState([]);

    useEffect(() => {
        if(miara == 0){
            setWynik(wartosc *  3.28084);
        }else if(miara == 1){
            setWynik(wartosc * 2.20462);
        }else if(miara == 2){
            setWynik((wartosc * 2) + 30);
        }else if(miara == 3){
            setWynik(wartosc * 0.264172);
        }else if(miara == 4){
            setWynik(wartosc * 0.393701);
        }else if(miara == 5){
            setWynik(wartosc * 0.000621371);
        }
    }, [miara, wartosc])


    function zapisywanie(){
        const q = lista;
        q.push([wartosc, miara, wynik]);
        setLista(q);
    }


    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3"></div>

                <div className="col-6 bg-light rounded text-center">
                    <h1 className="mt-5">Kalkulator jednostek miar</h1>

                    <div className="row mb-3">
                        <div className="col-4"></div>

                        <div className="col-4 my-3">
                            <div className="mb-3">
                                <input className="form-control" type="number" placeholder="wartosc" value={wartosc} onChange={e => setWartosc(e.target.value)}/>
                            </div>

                            <select className="form-select" value={miara} onChange={e => setMiara(e.target.value)}>
                                <option value="">Wybierz</option>
                                {tab && tab.map((row, index) => {
                                    return <option value={index}>{row}</option>
                                })}
                            </select>
                        </div>

                        <div className="col-4"></div>
                    </div>

                    <div>
                        <button className="btn btn-info mb-5" onClick={() => zapisywanie()}>Zapisz</button>
                    </div>

                    {wynik && <h2>Wynik: {wynik.toFixed(2)}</h2>}
                    
                        
                    {lista.length > 0 && <h3 className="mt-5">Historia</h3>}
                    {lista && lista.map((row) => {
                        return <h4 className="my-3">{tab[row[1]]}: {row[0]} = {row[2]}</h4>
                    })}
                </div>

                <div className="col-3"></div>
            </div>

        </div>
    );
}

export default MainPage;