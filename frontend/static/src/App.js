import React, {Component} from 'react';
import './App.css';

import {Button, Icon} from 'react-materialize';

class App extends Component {
    render() {
        return (
            <div>
                <Button waves="light" style={{marginRight: '5px'}}>
                    button
                </Button>
                <Button waves="light" style={{marginRight: '5px'}}>
                    button
                    <Icon left>
                        cloud
                    </Icon>
                </Button>
                <Button waves="light">
                    button
                    <Icon right>
                        cloud
                    </Icon>
                </Button>
            </div>

        )
    }
}

export default App;
