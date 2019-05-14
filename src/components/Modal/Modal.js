import React from 'react';

const backdropStyle = {
    position: 'fixed',
    top: 0,
    //bottom: 0,
    left: 0,
    //right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    //padding: 50,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
};

const modalStyle = {
    backgroundColor: '#ffff',
    borderRadius: 5,
    //maxWidth: 700,
    //minHeight: 500,
    margin: '0 auto',
    padding: '30',
    //position: 'relative',

    display: 'flex',
    minHeight: 600,
    minWidth: 800
};

const footerStyle = {
    position: 'absolute',
    top: 30
};

const button1Style = {
    backgroundColor: 'red',
    left: 20
}

const button2Style = {
    top: 5,
    right: 20
}



export default class Modal extends React.Component {
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }
    render(){
        if(!this.props.show) {
            return null;
        }
        return (
            <div style={backdropStyle}>
                <div style={modalStyle}>
                    {this.props.children}
                    <div style = {footerStyle}>
                        <button onClick={this.onClose} style={button1Style}>
                            X
                        </button>
                    </div>
                    <div><button style={button2Style}>Zatwierdź</button></div>
                </div>
            </div>
        )
    }
}