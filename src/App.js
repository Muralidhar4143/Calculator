import React, { useState } from "react";
import "./App.css"


const App = () => {
	const [result, setResult] = useState("");
	const changeHandler = (e) => {
		setResult(result.concat(e.target.name));
	};
	const clear = () => {
		setResult("");
	};
	const backspace = () => {
		setResult(result.slice(0, result.length - 1));
	};
	const calculate = () => {
		try {
			setResult(eval(result).toString());
		} catch (err) {
			setResult("Error");
		}
	};

	return (
		<div className="container">
			<center>
				<h1>CALCULATOR</h1>
				<form>
					<input type="text" value={result} />
					<button className="imp_buttons" onClick={clear} id="clear">CLEAR</button>
				</form>
        <div className="Buttons">
        <button name="1" onClick={changeHandler}>
					1
				</button>
				<button name="2" onClick={changeHandler}>
					2
				</button>
				<button name="3" onClick={changeHandler}>
					3
				</button>
				<button className="imp_buttons" name="/" onClick={changeHandler}>
					&divide;
				</button>

				<button name="4" onClick={changeHandler}>
					4
				</button>
				<button name="5" onClick={changeHandler}>
					5
				</button>
				<button name="6" onClick={changeHandler}>
					6
				</button>
				<button className="imp_buttons" name="-" onClick={changeHandler}>
					&ndash;
				</button>


				<button name="7" onClick={changeHandler}>
					7
				</button>
				<button name="8" onClick={changeHandler}>
					8
				</button>
				<button name="9" onClick={changeHandler}>
					9
				</button>
				<button className="imp_buttons" name="+" onClick={changeHandler}>
					+
				</button>


				<button name="." onClick={changeHandler}>
					.
				</button>
				<button name="0" onClick={changeHandler}>
					0
				</button>
				<button onClick={calculate} id="answer">=</button>
				<button className="imp_buttons" name="*" onClick={changeHandler}>
					&times;
				</button>

				<button className="imp_buttons" onClick={backspace} id="backspace">BACKSPACE</button>
        </div>
				
			</center>
		</div>
	);
};

export default App;
