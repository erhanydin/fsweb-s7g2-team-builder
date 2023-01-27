import React, { useState } from "react";

function Form(props) {

    const [formData, setFormData] = useState({
        name: '',
        position: 'Guard',
        ppg: '',
        nationality: '',
    });

    const {formSubmitRun, existingPlayers} = props;

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form
            style={{
                backgroundColor: "black",
                margin: "0 auto",
                padding: "10px"
                }}
                method="POST"
                onSubmit={(e) => {
                    e.preventDefault();
                    formSubmitRun([...existingPlayers,formData]);
                }}
                >
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" id="name" placeholder="Enter name" value={formData.name} onChange={handleFormChange}/>
                </div>
                <div>
                    <label htmlFor="position">Position: </label>
                    <select name="position" id="position" value={formData.position} onChange={handleFormChange}>
                        <option value="Guard">Guard</option>
                        <option value="Forward">Forward</option>
                        <option value="Center">Center</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="ppg">Per Point Game:  </label>
                    <input type="text" name="ppg" id="ppg" placeholder="PPG" value={formData.ppg} onChange={handleFormChange}/>
                </div>
                <div>
                    <label>Nationality:
                        <input type="radio" id="radioAmerican" name="nationality" value={"American"} checked={formData.nationality === "American"} onchange={handleFormChange}/>
                        <label htmlFor="radioAmerican">American</label>
                        <input type="radio" id="radioEuropean" name="nationality" value={"European"} checked={formData.nationality === "European"} onchange={handleFormChange}/>
                        <label htmlFor="radioEuropean">European</label>
                    </label>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )

}

export default Form;