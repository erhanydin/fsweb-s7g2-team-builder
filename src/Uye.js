import React from "react";

function Uye(props) {

    const { kisi } = props;

    return (
        <div className="uye-kutusu">
            <h3 className="uye-isim">{kisi.name}</h3>
            <div className="uye-ozellik">
                <div className="uye-label">Position</div>
                <div>{kisi.position}</div>
            </div>
            <div className="uye-ozellik">
                <div className="uye-label">Per Point Game</div>
                <div>{kisi.ppg}</div>
            </div>
            <div className="uye-ozellik">
                <div className="uye-label">Nationality</div>
                <div>{kisi.nationality}</div>
            </div>
        </div>
    )
}

export default Uye;