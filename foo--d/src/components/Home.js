import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    rtCard: {
        height: '100%',
    },
    rtCardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));


const cards = [
    {
        image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x375.jpg",
        heading: 'Heading1',
        content: 'content about this food item'
    },
    {
        image: "https://assets.limetray.com/assets/user_images/menus/compressed/1636789829_Tandoorichickennew.jpg",
        heading: 'Heading2',
        content: 'content about this food item'
    },
    {

        image: "https://assets.cntraveller.in/photos/62644db46511cf2003cee423/master/pass/kolkata-biryani-lead.jpg",
        heading: 'Heading3',
        content: 'content about this food item'
    },
    {
        image: "https://www.flourandspiceblog.com/wp-content/uploads/2021/10/IMG_5232-2.jpg",
        heading: 'Heading4',
        content: 'content about this food item'
    },
    {
        image: "https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg",
        heading: 'Heading5',
        content: 'content about this food item'
    },
    {
        image: "https://www.authenticroyal.com/wp-content/uploads/2021/06/LTFA-FY21_Biryani_Web_1280x1600_MyUniversalKitchen-1.jpg",
        heading: 'Heading6',
        content: 'content about this food item'
    },
]


const Home = () => {

    const classes = useStyles();

    return (

        <>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8vh' }}>

                <Container maxWidth="md">
                    <Grid container spacing={10}>
                        {cards.map((card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.index}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={ card.image }
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { card.heading }
                                        </Typography>
                                        <Typography>
                                            { card.content }
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Delete
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <Container>
                    <h1>New Taj Special Dum Biryani</h1>
                    <Card className={classes.rtCard}>
                        <CardMedia
                            className={classes.rtCardMedia}
                            image="https://image.shutterstock.com/image-photo/chicken-biryani-gravy-spices-600w-1815239114.jpg"
                            title="Image title"
                        />
                    </Card>
                    <Container>
                        <p>Biryani, North Indian, Chinese, South Indian</p>
                        <p>Ulsoor, Bangalore</p>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <p>
                                Rs: 499-/
                            </p>
                            <p>
                                Rating: 4.7
                            </p>
                        </div>
                    </Container>
                </Container>

            </div>
        </>

    );
}


export default Home;