import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
		<div className="row">
			<div className="col-md-12">
				<h1>0</h1>
			</div>
		</div>
		<div className="row">
			<div className="col-md-3 f1">AC</div>
			<div className="col-md-3 f2">+/-</div>
			<div className="col-md-3 f3">%</div>
			<div className="col-md-3-orange f4">÷</div>
		</div>
		<div className="row">
			<div className="col-md-3 d1">7</div>
			<div className="col-md-3 d2">8</div>
			<div className="col-md-3 d3">9</div>
			<div className="col-md-3-orange d4">×</div>

		</div>
		<div className="row">
			<div className="col-md-3 g1">4</div>
			<div className="col-md-3 g2">5</div>
			<div className="col-md-3 g3">6</div>
			<div className="col-md-3-orange g4">-</div>
		</div>
		<div className="row">
			<div className="col-md-3 e1">1</div>
			<div className="col-md-3 e2">2</div>
			<div className="col-md-3 e3">3</div>
			<div className="col-md-3-orange e4">+</div>
		</div>
		<div className="row">
			<div className="col-md-6 j1">0</div>
			<div className="col-md-3 j2">.</div>
			<div className="col-md-3-orange j3">=</div>
		</div>
    </div>
  )
}

export default App;
