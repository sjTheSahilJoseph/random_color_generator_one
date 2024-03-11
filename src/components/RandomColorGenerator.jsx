import { useEffect, useState } from 'react';
import '../css/randomcolorgenerator.css';

function RandomColorGenerator() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";
        
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        
        setColor(hexColor);
    }

    function handleCreateRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=>{
        if (typeOfColor === 'rgb') handleCreateRgbColor();
        else handleCreateHexColor();
    }, [typeOfColor]);

    return (
        <>
            <div className="container" style={
                {
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: color
                }
            }>
                <button
                    onClick={
                        () => {
                            setTypeOfColor('hex')
                        }
                    }
                >Create HEX Color</button>
                <button
                    onClick={
                        () => {
                            setTypeOfColor('rgb')
                        }
                    }
                >Create RGB Color</button>
                <button
                    onClick={
                        typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRgbColor
                    }

                >Generate Random Color</button>
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '60px',
                marginTop: '40px',
                flexDirection: 'column',
                gap: '20px',
            }
        }>
        <h3>{typeOfColor === 'rgb' ? 'RGB' : 'HEX'}</h3>
            <h1>
        {color}
        </h1>
        </div>
            </div>
        </>
    );
}

export default RandomColorGenerator;
