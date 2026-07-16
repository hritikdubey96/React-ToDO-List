import { useState } from "react";

export default function Form() {
    let [formData, setformData] =
        useState({
            formName: "",
            username: "",
        });

    let handleInputChange = (event) => {
        let fieldChange =
            event.target.name;

        let newValue =
            event.target.value;

        setformData((currVal) => {
            return {
                ...currVal,
                [fieldChange]: newValue,
            };
        });
    };

    let handelSubmit = (event) => {
        event.preventDefault();

        console.log(formData);

        setformData({
            formName: "",
            username: "",
        });
    };

    return (
        <form onSubmit={handelSubmit}>

            <label htmlFor="fullName">
                Full Name:
            </label>

            <input
                type="text"
                placeholder="Enter your name brohh"
                value={formData.formName}
                onChange={handleInputChange}
                id="fullName"
                name="formName"
            />

            <br />
            <br />

            <label htmlFor="username">
                Username:
            </label>

            <input
                type="text"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleInputChange}
                id="username"
                name="username"
            />

            <br />
            <br />

            <button>
                Click Me!
            </button>

        </form>
    );
}