import React from 'react';
import GenericSection from "../components/sections/GenericSection";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";
import Button from "../components/elements/Button";
import ButtonGroup from "../components/elements/ButtonGroup";
import ImportantDate from "../components/sections/ImportantDate";
import Carousel from "../components/elements/Carousel";
import CarouselItem from "../components/elements/CarouselItem";
import {Box, CardMedia, ImageList, ImageListItem, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import LocalAirportIcon from '@mui/icons-material/LocalAirport';

const hotels = [
    {
        name:"Sen Viet Hotel",
        address: '33 Cao Thang , Ward 2, District 3, Ho Chi Minh City, Vietnam, 700000',
        description:<>
            Staying at Sen Viet Hotel is a good choice when you are visiting Ward 2.
            The hotel has a very good location, also near the Tan Son Nhat International Airport (SGN), which is only 5.49 km away.
            This hotel is very easy to find since it is strategically positioned close to public facilities.
        </>,
        images:[
            {img: require(`./../assets/images/hotel/senviet.jpg`),rows:2,cols:2},
            {img: require(`./../assets/images/hotel/senviet2.webp`),rows:1,cols:1},
            {img: require(`./../assets/images/hotel/senviet3.webp`),rows:1,cols:1},
            {img: require(`./../assets/images/hotel/senviet1.webp`),rows:1,cols:1},
            {img: require(`./../assets/images/hotel/senviet4.webp`),rows:1,cols:1},
            // {img: require(`./../assets/images/hotel/senviet5.webp`),rows:1,cols:1},
        ],
        url:"https://www.traveloka.com/en-vn/hotel/vietnam/sen-viet-hotel-1000000346108"
    },
    {
        name:"Tan Hoang Long Hotel",
        address:'135 Đ. Nguyễn Văn Cừ, ward 2, District 5, Ho Chi Minh City, Vietnam, 70000',
        description:<>
            Tan Hoang Long Hotel is a hotel in a good neighborhood, which is located at ward 2.
            The hotel has a very good location, also near the Tan Son Nhat Airport, which is only 7.33 km away.
            The hotel is located only 3.05 km away from Ga tàu cao tốc Bạch Đằng.
            Not only well positioned, but Tan Hoang Long Hotel is also one of hotels near the following Thanh Le Waterpark within 25.87 km and Thien Hau Pagoda within 2.59 km.
        </>,
        images:[
            {img: require(`./../assets/images/hotel/tanhoanglong.jpg`),rows:2,cols:2},
            {img: require(`./../assets/images/hotel/tanhoanglong1.webp`),rows:1,cols:1},
            {img: require(`./../assets/images/hotel/tanhoanglong2.webp`),rows:1,cols:1},
            {img: require(`./../assets/images/hotel/tanhoanglong3.webp`),rows:1,cols:1},
            {img: require(`./../assets/images/hotel/tanhoanglong4.webp`),rows:1,cols:1},
        ],
        url:"https://www.traveloka.com/en-vn/hotel/vietnam/tan-hoang-long-hotel--1000000503517?spec=08-12-2023.09-12-2023.1.1.HOTEL.1000000503517.Tan%20Hoang%20Long%20Hotel%20.1"
    },
    {
        name:"EQUATORIAL Ho Chi Minh City",
        address: '242 Tran Binh Trong Street, Ward 4, District 5, Ho Chi Minh City, 700000, Vietnam',
        description:<>
            The 5-Star Ho Chi Minh City hotel is located where the borders of the city's four main district intersect - the heart and true centre of Ho Chi Minh City. The hotel is a just street from Chinatown - where you will find plenty of attractions. Located in District 5, one can discover a unique & authentic experience. Nearby attractions include Chinatown, Binh Tay Market, a deluxe shopping mall, and charming Chinese pagodas such as Nghia An Hoi Quan, Tam Son Hoi Quan, Thien Hau and Khanh Van Nam Vien. The hotel is a short 15 to 20 minutes drive from District 1, where you will find historical buildings, museums, the French quarter, Saigon River, shopping malls, quaint restaurants, and entertainment area. The hotel offers a complimentary scheduled shuttle service to the main attractions of District 1(advance reservations required).
        </>,
        images:[
            {img: require(`./../assets/images/hotel/Equatorial1.jpg`),rows:2,cols:2},
            {img: require(`./../assets/images/hotel/Equatorial.jpg`),rows:1,cols:1},
            {img: require(`./../assets/images/hotel/Equatorial2.webp`),rows:1,cols:1},
            {img: require(`./../assets/images/hotel/Equatorial3.jpg`),rows:1,cols:1},
            {img: require(`./../assets/images/hotel/Equatorial4.jpg`),rows:1,cols:1},
        ],
        url:"https://hochiminhcity.equatorial.com/?utm_source=local&utm_medium=organic&utm_campaign=Google%20My%20Business",
        book:"https://be.synxis.com/?adult=1&arrive=2023-12-08&chain=24320&child=0&currency=VND&depart=2023-12-09&hotel=6000&level=hotel&locale=en-US&rooms=1"
    }
]

class Keynote extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HeroFull content={{title: 'Venue',
                    inside:<><p>ICEBA2023 hosted at <strong>VNUHCM-University of Science</strong> 227 Nguyen Van Cu Str., Dist. 5, Ho Chi Minh city, Vietnam. </p>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Carousel autorotate={true} style={{display:'flex'}}>
                                    <CarouselItem>
                                        <Card sx={{ width: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                image={require(`./../assets/images/venue/outside1.jpg`)}
                                                style={{height:400}}
                                            />
                                        </Card>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <Card sx={{ width: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                image={require(`./../assets/images/venue/inside1.jpg`)}
                                                style={{height:400}}
                                            />
                                        </Card>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <Card sx={{ width: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                image={require(`./../assets/images/venue/inside2.jpg`)}
                                                style={{height:400}}
                                            />
                                        </Card>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <Card sx={{ width: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                image={require(`./../assets/images/venue/outside2.jpg`)}
                                                style={{height:400}}
                                            />
                                        </Card>
                                    </CarouselItem>
                                </Carousel>
                            </Grid>
                            <Grid item xs={12}>
                                <Card  raised >
                                    <Box sx={{ display: 'flex', flexDirection: 'column',justifyContent:"center" }}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">GETTING HERE</Typography>
                                            <Typography paragraph >
                                                VNUHCM-University of Science
                                            </Typography>
                                            <Typography paragraph variant="body2" color="text.secondary">
                                                227 Nguyen Van Cu Str., Dist. 5, Ho Chi Minh city, Vietnam
                                            </Typography>
                                            {/*<Typography paragraph variant="body2" color="text.secondary">*/}
                                            {/*    Tel: <a href="tel:+1%20360-993-8895%20">+1 360-993-8895</a>*/}
                                            {/*</Typography>*/}
                                            <Typography paragraph variant="body2" color="red">
                                                *You can use Google Maps or Apple Maps to get directions
                                            </Typography>
                                            {/*<Typography paragraph variant="body2" color="text.secondary">*/}
                                            {/*    We have some route options below for you to choose. On each map, you can click on the "More option" to get a full view/ to send the map to your phone.*/}
                                            {/*</Typography>*/}
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component={"iframe"}
                                        image="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6317797080865!2d106.6824824!3d10.762835599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sUniversity%20of%20Science%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1694077376483!5m2!1sen!2s"
                                        width="600" height="400" style={{border:0}} allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        alt={"googlemap"}
                                    />
                                </Card>
                            </Grid>
                        </Grid>
                    </>
                }}/>
                <HeroFull content={{title: 'Hotels',
                    inside:<><p>There are 3 recommended hotels near the conference. </p>
                        <Grid container spacing={2}>

                            {hotels.map((h,hi)=><Grid item xs={12} style={{zIndex: 2}} key={hi}>
                                <Paper elevation={24}>
                                    <div style={{padding: 20}}>
                                        <Typography variant={'h4'}>{h.name}</Typography>
                                        <Typography variant={'subtitle2'}>{h.address}</Typography>
                                        <ImageList
                                            sx={{width: '100%','& li.MuiImageListItem-root': {marginBottom:'unset'}}}
                                            variant="quilted"
                                            cols={4}
                                            rowHeight={121}
                                        >
                                            {h.images.map((item) => (
                                                <ImageListItem key={item.img} cols={item.cols || 1}
                                                               rows={item.rows || 1}
                                                >
                                                    <img
                                                        {...srcset(item.img, 121, item.rows, item.cols)}
                                                        alt={item.title}
                                                        loading="lazy"
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                        <Typography paragraph>
                                            {h.description}
                                        </Typography>
                                        <ButtonGroup>
                                            <Button color={"primary"}
                                                    tag={'a'}
                                                    href={h.url}
                                                    target={"_blank"}> More information </Button>
                                            {h.book&&<Button color={"primary"}
                                                     tag={'a'}
                                                     href={h.book}
                                                     target={"_blank"}>Book now</Button>}
                                        </ButtonGroup>
                                    </div>
                                </Paper>
                            </Grid>)}

                        </Grid>
                    </>
                }}/>
            </React.Fragment>
        );
    }
}

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default Keynote;
