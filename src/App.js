import React, {useState, useEffect} from 'react';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { reduxTest } from './state/actions';

import GridColumn from './components/GridColumn';

const gridData = [
    {id: 1, name: "Fantasy movie", logo: null, date: "2020-02-03", tags: ["Fantasy"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
    {id: 2, name: "Romantic movie", logo: null, date: "2020-02-09", tags: ["Romance"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
    {id: 3, name: "Scifi movie", logo: null, date: "2020-02-12", tags: ["Scifi"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
    {id: 4, name: "Fantasy movie", logo: null, date: "2020-02-03", tags: ["Fantasy"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
    {id: 5, name: "Romantic movie", logo: null, date: "2020-02-09", tags: ["Romance"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
    {id: 6, name: "Scifi movie", logo: null, date: "2020-02-12", tags: ["Scifi"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
    {id: 7, name: "Fantasy movie", logo: null, date: "2020-02-03", tags: ["Fantasy"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
    {id: 8, name: "Romantic movie", logo: null, date: "2020-02-09", tags: ["Romance"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
    {id: 9, name: "Scifi movie", logo: null, date: "2020-02-12", tags: ["Scifi"], intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis in lacus sit amet rhoncus. Fusce ut tellus nec purus cursus bibendum id vel lorem. Vestibulum tempus congue pretium. Curabitur ut erat eu est sollicitudin commodo.", rating: 5},
];

const App = props => {
    const [loading, setLoading] = useState(true);

    // Fake loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    });

    if(loading) {
        return (
            <div className="App">
                <CircularProgress/>
            </div>
        );
    }

    props.reduxAction();
    return (
        <div className="App">
            <GridColumn
                gridData={gridData}
            />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    reduxAction: () => dispatch(reduxTest()),
});

export default connect(
    null,
    mapDispatchToProps
)(App);
