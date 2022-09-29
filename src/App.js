import styled from "styled-components"

function App() {



	


	return (
		<div className="App">
			<Form>
				<label>sample frequency</label>
				<input min="0" type="number" />
				<label>max frequency</label>
				<input min="0" type="number" />
				<label>min frequency</label>
				<input min="0" type="number" />
				<label>bit depth</label>
				<input min="0" type="number" />
				<label>quantization levels</label>
				<input min="0" type="number" />
				<label>sample size</label>
				<input min="0" type="number" />
				<label>plain index</label>
				<input min="0" type="number" />
				<p>Quantized Value</p>
				<p>Quantization Value</p>

				<button>Submit</button>
			</Form>
		</div>
	)
}

export default App

const Form = styled.div`
	margin: 100px auto;
	width: 25%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	input {
		height: 25px;
		padding: 5px;
		margin-bottom: 10px;
		font-size: 24px;
	}

	label {
		font-size: 24px;
	}

	button {
		padding: 10px;
		font-size: 24px;
		cursor: pointer;
	}
`
