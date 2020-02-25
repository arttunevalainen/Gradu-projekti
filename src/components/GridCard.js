import React from 'react';
import './GridColumn.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import movielogo from './movielogo.jpg';

const GridCard = ({data}) => {
  const logoSRC = data.logo ? data.logo : movielogo;
    return (
        <Card className="card">
            <CardHeader
                className="card-header"
                title={data.name}
                subheader={data.date}
            />
            <CardMedia
                className="card-media-image"
                image={logoSRC}
                title="ossi"
            />
            <CardContent className="card-content">
                <p className="card-content-text">{data.intro}</p>
            </CardContent>
            <CardActions className="card-actions-row">
                <p className="card-rating">{data.rating} / 5</p>
            </CardActions>
        </Card>
    );
}

export default GridCard;
