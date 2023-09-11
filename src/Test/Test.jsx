import React from 'react';
import Records from '../data/records.json'
const Test = () => {
    const saveObjectToJsonFile = (myObject, fileName) => {
        const jsonString = JSON.stringify(myObject);

        const blob = new Blob([jsonString], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();

        URL.revokeObjectURL(url);
    };
    const myObject = {
        name: "John",
        age: 30,
        city: "New York"
    };

    const handleSaveToJsonFile = () => {
        saveObjectToJsonFile(myObject, "myObject.json");
    };

    return (
        <>
            <div>
                {/* Кнопка для сохранения объекта в JSON файл */}
                <button onClick={handleSaveToJsonFile}>Сохранить в JSON файл</button>
            </div>
        </>
    );
}

export default Test;
