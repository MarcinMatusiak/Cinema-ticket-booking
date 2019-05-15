import React from 'react';
import Modal from './Modal/Modal.js';
import DrawGrid from './Modal/SeatMap.js';

class ModalOnScreen extends React.Component {
	state = { 
		show: false,
		seat: [
			'1.1', '1.2', '1.3',
			'1.4', '1.5', '1.6',
			'1.7', '2.1', '2.2',
			'2.3', '2.4', '2.5',
			'2,6', '2.7', '3.1',
			'3.2', '3.3', '3.4',
			'3.5', '3.6', '3.7'
		],
		seatAvailable: [
			'1.1', '1.2', '1.3',
			'1.4', '1.5', '1.6',
			'1.7', '2.1', '2.2',
			'2.3', '2.4', '2.5',
			'2,6', '2.7', '3.1',
			'3.2', '3.3', '3.4',
			'3.5', '3.6', '3.7'
		],
		seatReserved: [] 
	 };

	showModal = () => {
		this.setState({show: !this.state.show})
	}

	onClickData(seat) {
		if (this.state.seatReserved.indexOf(seat) > -1) {
			this.setState({
				seatAvailable: this.state.seatAvailable.concat(seat),
				seatReserved: this.state.seatReserved.filter(res => res !== seat)
			})
		} else {
			this.setState({
				seatReserved: this.state.seatReserved.concat(seat),
				seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
			})
		}
	}

	render() {
		return (
			<div className='main'>
				<div style={{ margin: 20 }}>
					<input type="button"
						onClick={this.showModal}
						value="Wybierz miejsce" />
				</div>


				<Modal
					onClose={this.showModal}
					show={this.state.show}>

					<h1>Zarezerwuj miejsce</h1>
					<DrawGrid
						seat={this.state.seat}
						available={this.state.seatAvailable}
						reserved={this.state.seatReserved}
						onClickData={this.onClickData.bind(this)}>
					</DrawGrid>
				</Modal>
      		</div>
		);
	}
}

export default ModalOnScreen;
