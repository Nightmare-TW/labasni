import React from 'react';

import { Paper } from '@material-ui/core';


import clothes from '../../assets/clothes.png'; // Import using relative path


// const styles = {
//     paperContainer: {
//         backgroundImage: `url(${Image})`
//     }
// };

export default class Home extends React.Component{
    render(){
        return(
            <Paper src={clothes}>
                Some text to fill the Paper Component
            </Paper>
        )
    }
}