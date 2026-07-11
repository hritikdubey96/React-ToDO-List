import { useState } from 'react';

export default function LudoBoard() {
    // 1. Define the object state for our moves
    const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

    // 2. A single dynamic function to handle updates for any color
    const updateMove = (color) => {
        setMoves((prevMoves) => {
            return { 
                ...prevMoves, 
                [color]: prevMoves[color] + 1 // Updates just the clicked color dynamically
            };
        });
    };

    return (
        <div style={{ padding: '20px', background: '#2c3036', color: 'white', display: 'inline-block' }}>
            <h2>Ludo Board</h2>
            <p>Game Begins!</p>
            <hr />

            <div>
                <p>Blue moves: {moves.blue}</p>
                <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }} 
                        onClick={() => updateMove('blue')}>
                    +1
                </button>
            </div>

            <div>
                <p>Yellow moves: {moves.yellow}</p>
                <button style={{ backgroundColor: 'yellow', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px' }} 
                        onClick={() => updateMove('yellow')}>
                    +1
                </button>
            </div>
            <div>
                <p>Yellow moves: {moves.green}</p>
                <button style={{ backgroundColor: 'green', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px' }} 
                        onClick={() => updateMove('green')}>
                    +1
                </button>
            </div>
            <div>
                <p>Yellow moves: {moves.red}</p>
                <button style={{ backgroundColor: 'red', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '5px' }} 
                        onClick={() => updateMove('red')}>
                    +1
                </button>
            </div>

            
        </div>
    );
}