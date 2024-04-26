import React from "react";
import GenericSection from "../components/sections/GenericSection";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";
import Button from "../components/elements/Button";
import ButtonGroup from "../components/elements/ButtonGroup";
import ImportantDate from "../components/sections/ImportantDate";
import Carousel from "../components/elements/Carousel";
import CarouselItem from "../components/elements/CarouselItem";
import {
  Box,
  CardHeader,
  CardMedia,
  ImageList,
  ImageListItem,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import { a11yProps, TabPanel } from "../components/elements/TabPanel";
import SectionHeader from "../components/sections/partials/SectionHeader";

const hotels = [
  {
    name: "Sen Viet Hotel",
    address:
      "33 Cao Thang , Ward 2, District 3, Ho Chi Minh City, Vietnam, 700000",
    description: (
      <>
        Staying at Sen Viet Hotel is a good choice when you are visiting Ward 2.
        The hotel has a very good location, also near the Tan Son Nhat
        International Airport (SGN), which is only 5.49 km away. This hotel is
        very easy to find since it is strategically positioned close to public
        facilities.
      </>
    ),
    images: [
      {
        img: require(`./../assets/images/hotel/senviet.jpg`),
        rows: 2,
        cols: 2,
      },
      {
        img: require(`./../assets/images/hotel/senviet2.webp`),
        rows: 1,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/senviet3.webp`),
        rows: 1,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/senviet1.webp`),
        rows: 1,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/senviet4.webp`),
        rows: 1,
        cols: 1,
      },
      // {img: require(`./../assets/images/hotel/senviet5.webp`),rows:1,cols:1},
    ],
    url: "https://www.traveloka.com/en-vn/hotel/vietnam/sen-viet-hotel-1000000346108",
  },
  {
    name: "Tan Hoang Long Hotel",
    address:
      "135 Đ. Nguyễn Văn Cừ, ward 2, District 5, Ho Chi Minh City, Vietnam, 70000",
    description: (
      <>
        Tan Hoang Long Hotel is a hotel in a good neighborhood, which is located
        at ward 2. The hotel has a very good location, also near the Tan Son
        Nhat Airport, which is only 7.33 km away. The hotel is located only 3.05
        km away from Ga tàu cao tốc Bạch Đằng. Not only well positioned, but Tan
        Hoang Long Hotel is also one of hotels near the following Thanh Le
        Waterpark within 25.87 km and Thien Hau Pagoda within 2.59 km.
      </>
    ),
    images: [
      {
        img: require(`./../assets/images/hotel/tanhoanglong.jpg`),
        rows: 2,
        cols: 2,
      },
      {
        img: require(`./../assets/images/hotel/tanhoanglong1.webp`),
        rows: 1,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/tanhoanglong2.webp`),
        rows: 1,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/tanhoanglong3.webp`),
        rows: 1,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/tanhoanglong4.webp`),
        rows: 1,
        cols: 1,
      },
    ],
    url: "https://www.traveloka.com/en-vn/hotel/vietnam/tan-hoang-long-hotel--1000000503517?spec=08-12-2024.09-12-2024.1.1.HOTEL.1000000503517.Tan%20Hoang%20Long%20Hotel%20.1",
  },
  {
    name: "EQUATORIAL Ho Chi Minh City",
    address:
      "242 Tran Binh Trong Street, Ward 4, District 5, Ho Chi Minh City, 700000, Vietnam",
    description: (
      <>
        The 5-Star Ho Chi Minh City hotel is located where the borders of the
        city's four main district intersect - the heart and true centre of Ho
        Chi Minh City. The hotel is a just street from Chinatown - where you
        will find plenty of attractions. Located in District 5, one can discover
        a unique & authentic experience. Nearby attractions include Chinatown,
        Binh Tay Market, a deluxe shopping mall, and charming Chinese pagodas
        such as Nghia An Hoi Quan, Tam Son Hoi Quan, Thien Hau and Khanh Van Nam
        Vien. The hotel is a short 15 to 20 minutes drive from District 1, where
        you will find historical buildings, museums, the French quarter, Saigon
        River, shopping malls, quaint restaurants, and entertainment area. The
        hotel offers a complimentary scheduled shuttle service to the main
        attractions of District 1(advance reservations required).
      </>
    ),
    images: [
      {
        img: require(`./../assets/images/hotel/Equatorial1.jpg`),
        rows: 2,
        cols: 2,
      },
      {
        img: require(`./../assets/images/hotel/Equatorial.jpg`),
        rows: 1,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/Equatorial2.webp`),
        rows: 1,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/Equatorial3.jpg`),
        rows: 1,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/Equatorial4.jpg`),
        rows: 1,
        cols: 1,
      },
    ],
    url: "https://hochiminhcity.equatorial.com/?utm_source=local&utm_medium=organic&utm_campaign=Google%20My%20Business",
    book: "https://be.synxis.com/?adult=1&arrive=2024-12-08&chain=24320&child=0&currency=VND&depart=2024-12-09&hotel=6000&level=hotel&locale=en-US&rooms=1",
  },
];

const hotels2 = [
  {
    name: "Sai Gon - Vinh Long Hotel",
    address:
      "02 Trung Nu Vuong Street, Ward 1, Vinh Long City, Vinh Long Province",
    description: (
      <>
        Sai Gon - Vinh Long hotel is a member of Saigontourist Group. Located in
        the heart of Vinh Long city, a tourist city in the western region belong
        to Mekong Delta, Sai Gon - Vinh Long consists of 84 luxurious rooms with
        international standard. Being proud to offer visitors rest stop, premier
        dining, various kinds of entertainment and other services, Sai Gon -
        Vinh Long will make your stay in Vinh Long a very pleasant one to
        remember.
        <br />
        (0270) 387 9988 – (0270)387 9989
        <br />
        info@saigonvinhlonghotel.com
      </>
    ),
    images: [
      { img: require(`./../assets/images/hotel/sgvl2.jpg`), rows: 2, cols: 2 },
      { img: require(`./../assets/images/hotel/sgvl1.png`), rows: 1, cols: 1 },
      { img: require(`./../assets/images/hotel/sgvl3.jpg`), rows: 1, cols: 1 },
      { img: require(`./../assets/images/hotel/sgvl4.jpg`), rows: 1, cols: 1 },
      { img: require(`./../assets/images/hotel/sgvl5.jpg`), rows: 1, cols: 1 },
      // {img: require(`./../assets/images/hotel/senviet5.webp`),rows:1,cols:1},
    ],
    url: "https://www.saigonvinhlonghotel.com/location.php",
  },
  {
    name: "Phuoc Thanh IV",
    address: "116B-118-120 Nguyen Hue Street, Ward 2, Vinh Long City",
    description: <>Tel: +84 2703 868779</>,
    images: [
      { img: require(`./../assets/images/hotel/pt1.jpg`), rows: 2, cols: 2 },
      { img: require(`./../assets/images/hotel/pt2.jpg`), rows: 1, cols: 1 },
      { img: require(`./../assets/images/hotel/pt4.jpg`), rows: 2, cols: 1 },
      { img: require(`./../assets/images/hotel/pt3.jpg`), rows: 1, cols: 1 },
    ],
    url: "https://vinhlongtourist.vn/vi/ksphuocthanhiv",
  },
  {
    name: "Ngoc Hung Hotel",
    address: "71 Pho Co Dieu Street, Ward 3, Vinh Long City",
    description: (
      <>
        Set in Vinh Long, 400m from MTU, Ngoc Hung Hotel offers accommodation
        with a restaurant, free private parking, a bar and a shared lounge. This
        3-star hotel offers a 24-hour front desk and room service. The hotel
        features family rooms. At the hotel, every room includes a desk, a
        flat-screen TV, a private bathroom, bed linen and towels. Ngoc Hung
        Hotel provides certain units with lake views, and every room is fitted
        with a balcony. The units at the accommodation feature air conditioning
        and a wardrobe.
        <br />
        Tel: +84 2703856868
      </>
    ),
    images: [
      {
        img: require(`./../assets/images/hotel/ngochung1.jpg`),
        rows: 2,
        cols: 2,
      },
      {
        img: require(`./../assets/images/hotel/ngochung2.jpg`),
        rows: 2,
        cols: 1,
      },
      {
        img: require(`./../assets/images/hotel/ngochung3.jpg`),
        rows: 2,
        cols: 1,
      },
    ],
    // url:"https://hochiminhcity.equatorial.com/?utm_source=local&utm_medium=organic&utm_campaign=Google%20My%20Business",
    // book:"https://be.synxis.com/?adult=1&arrive=2024-12-08&chain=24320&child=0&currency=VND&depart=2024-12-09&hotel=6000&level=hotel&locale=en-US&rooms=1"
  },
];

class Keynote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: 0,
    };
  }
  render() {
    return (
      <React.Fragment>
        <HeroFull
          content={{
            title: "Venue",
            inside: (
              <>
                <Tabs
                  value={this.state.selectedPlace}
                  onChange={(event, newValue) =>
                    this.setState({ selectedPlace: newValue })
                  }
                  centered
                >
                  <Tab label={<>Nov 11 Ho Chi Minh city</>} {...a11yProps(0)} />
                  <Tab label={<>Nov 12-13 Vinh Long</>} {...a11yProps(1)} />
                </Tabs>
                <div className={"tabsPanel"}>
                  <TabPanel value={this.state.selectedPlace} index={0}>
                    <p>
                      In November 10, ICEBA2024 hosted at{" "}
                      <strong>VNUHCM-University of Science</strong> 227 Nguyen
                      Van Cu Str., Dist. 5, Ho Chi Minh city, Vietnam.{" "}
                    </p>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Carousel autorotate={true} style={{ display: "flex" }}>
                          <CarouselItem>
                            <Card sx={{ width: "100%" }}>
                              <CardMedia
                                component="img"
                                image={require(`./../assets/images/venue/outside1.jpg`)}
                                style={{ height: 400 }}
                              />
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card sx={{ width: "100%" }}>
                              <CardMedia
                                component="img"
                                image={require(`./../assets/images/venue/inside1.jpg`)}
                                style={{ height: 400 }}
                              />
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card sx={{ width: "100%" }}>
                              <CardMedia
                                component="img"
                                image={require(`./../assets/images/venue/inside2.jpg`)}
                                style={{ height: 400 }}
                              />
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card sx={{ width: "100%" }}>
                              <CardMedia
                                component="img"
                                image={require(`./../assets/images/venue/outside2.jpg`)}
                                style={{ height: 400 }}
                              />
                            </Card>
                          </CarouselItem>
                        </Carousel>
                      </Grid>
                      <Grid item xs={12}>
                        <Card raised>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                GETTING HERE
                              </Typography>
                              <Typography paragraph>
                                VNUHCM-University of Science
                              </Typography>
                              <Typography
                                paragraph
                                variant="body2"
                                color="text.secondary"
                              >
                                227 Nguyen Van Cu Str., Dist. 5, Ho Chi Minh
                                city, Vietnam
                              </Typography>
                              {/*<Typography paragraph variant="body2" color="text.secondary">*/}
                              {/*    Tel: <a href="tel:+1%20360-993-8895%20">+1 360-993-8895</a>*/}
                              {/*</Typography>*/}
                              <Typography paragraph variant="body2" color="red">
                                *You can use Google Maps or Apple Maps to get
                                directions
                              </Typography>
                              {/*<Typography paragraph variant="body2" color="text.secondary">*/}
                              {/*    We have some route options below for you to choose. On each map, you can click on the "More option" to get a full view/ to send the map to your phone.*/}
                              {/*</Typography>*/}
                            </CardContent>
                          </Box>
                          <CardMedia
                            component={"iframe"}
                            image="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6317797080865!2d106.6824824!3d10.762835599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2sUniversity%20of%20Science%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1694077376483!5m2!1sen!2s"
                            width="600"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            alt={"googlemap"}
                          />
                        </Card>
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={this.state.selectedPlace} index={1}>
                    <p>
                      In November 11-12, ICEBA2024 hosted at{" "}
                      <strong>MienTay Construction University</strong> 20B Pho
                      Co Dieu Str., Ward 3, Vinh Long city, Vietnam.{" "}
                    </p>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Carousel autorotate={true} style={{ display: "flex" }}>
                          <CarouselItem>
                            <Card sx={{ width: "100%" }}>
                              <CardMedia
                                component="img"
                                image={require(`./../assets/images/venue/MTU4.jpg`)}
                                style={{ height: 400 }}
                              />
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card sx={{ width: "100%" }}>
                              <CardMedia
                                component="img"
                                image={require(`./../assets/images/venue/MTU1.jpg`)}
                                style={{ height: 400 }}
                              />
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card sx={{ width: "100%" }}>
                              <CardMedia
                                component="img"
                                image={require(`./../assets/images/venue/MTU2.jpg`)}
                                style={{ height: 400 }}
                              />
                            </Card>
                          </CarouselItem>
                          <CarouselItem>
                            <Card sx={{ width: "100%" }}>
                              <CardMedia
                                component="img"
                                image={require(`./../assets/images/venue/MTU3.jpg`)}
                                style={{ height: 400 }}
                              />
                            </Card>
                          </CarouselItem>
                        </Carousel>
                      </Grid>
                      <Grid item xs={12}>
                        <Card raised>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            }}
                          >
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                GETTING HERE
                              </Typography>
                              <Typography paragraph>
                                MienTay Construction University
                              </Typography>
                              <Typography
                                paragraph
                                variant="body2"
                                color="text.secondary"
                              >
                                20B Pho Co Dieu Str., Ward 3, Vinh Long city,
                                Vietnam
                              </Typography>
                              {/*<Typography paragraph variant="body2" color="text.secondary">*/}
                              {/*    Tel: <a href="tel:+1%20360-993-8895%20">+1 360-993-8895</a>*/}
                              {/*</Typography>*/}
                              <Typography paragraph variant="body2" color="red">
                                *You can use Google Maps or Apple Maps to get
                                directions
                              </Typography>
                              {/*<Typography paragraph variant="body2" color="text.secondary">*/}
                              {/*    We have some route options below for you to choose. On each map, you can click on the "More option" to get a full view/ to send the map to your phone.*/}
                              {/*</Typography>*/}
                            </CardContent>
                          </Box>
                          <CardMedia
                            component={"iframe"}
                            image="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963.1586756623055!2d105.96147952124545!3d10.235968600176097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310a82b6b77d68f7%3A0xf7ecf8726bd161ed!2sMien%20Tay%20Construction%20University!5e0!3m2!1sen!2s!4v1706787205784!5m2!1sen!2s"
                            width="600"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            alt={"googlemap"}
                          />
                        </Card>
                      </Grid>
                    </Grid>
                  </TabPanel>
                </div>
              </>
            ),
          }}
        />
        <HeroFull
          content={{
            title: "Hotels",
            inside: (
              <>
                <div className={"tabsPanel"}>
                  <TabPanel value={this.state.selectedPlace} index={0}>
                    <p>There are 3 recommended hotels near the conference. </p>
                    <Grid container spacing={2}>
                      {hotels.map((h, hi) => (
                        <Grid item xs={12} style={{ zIndex: 2 }} key={hi}>
                          <Paper elevation={24}>
                            <div style={{ padding: 20 }}>
                              <Typography variant={"h4"}>{h.name}</Typography>
                              <Typography variant={"subtitle2"}>
                                {h.address}
                              </Typography>
                              <ImageList
                                sx={{
                                  width: "100%",
                                  "& li.MuiImageListItem-root": {
                                    marginBottom: "unset",
                                  },
                                }}
                                variant="quilted"
                                cols={4}
                                rowHeight={121}
                              >
                                {h.images.map((item) => (
                                  <ImageListItem
                                    key={item.img}
                                    cols={item.cols || 1}
                                    rows={item.rows || 1}
                                  >
                                    <img
                                      {...srcset(
                                        item.img,
                                        121,
                                        item.rows,
                                        item.cols
                                      )}
                                      alt={item.title}
                                      loading="lazy"
                                    />
                                  </ImageListItem>
                                ))}
                              </ImageList>
                              <Typography paragraph>{h.description}</Typography>
                              <ButtonGroup>
                                {h.url && (
                                  <Button
                                    color={"primary"}
                                    tag={"a"}
                                    href={h.url}
                                    target={"_blank"}
                                  >
                                    {" "}
                                    More information{" "}
                                  </Button>
                                )}
                                {h.book && (
                                  <Button
                                    color={"primary"}
                                    tag={"a"}
                                    href={h.book}
                                    target={"_blank"}
                                  >
                                    Book now
                                  </Button>
                                )}
                              </ButtonGroup>
                            </div>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </TabPanel>
                  <TabPanel value={this.state.selectedPlace} index={1}>
                    <p>There are 3 recommended hotels near the conference. </p>
                    <Grid container spacing={2}>
                      {hotels2.map((h, hi) => (
                        <Grid item xs={12} style={{ zIndex: 2 }} key={hi}>
                          <Paper elevation={24}>
                            <div style={{ padding: 20 }}>
                              <Typography variant={"h4"}>{h.name}</Typography>
                              <Typography variant={"subtitle2"}>
                                {h.address}
                              </Typography>
                              <ImageList
                                sx={{
                                  width: "100%",
                                  "& li.MuiImageListItem-root": {
                                    marginBottom: "unset",
                                  },
                                }}
                                variant="quilted"
                                cols={4}
                                rowHeight={121}
                              >
                                {h.images.map((item) => (
                                  <ImageListItem
                                    key={item.img}
                                    cols={item.cols || 1}
                                    rows={item.rows || 1}
                                  >
                                    <img
                                      {...srcset(
                                        item.img,
                                        121,
                                        item.rows,
                                        item.cols
                                      )}
                                      alt={item.title}
                                      loading="lazy"
                                    />
                                  </ImageListItem>
                                ))}
                              </ImageList>
                              <Typography paragraph>{h.description}</Typography>
                              <ButtonGroup>
                                {h.url && (
                                  <Button
                                    color={"primary"}
                                    tag={"a"}
                                    href={h.url}
                                    target={"_blank"}
                                  >
                                    {" "}
                                    More information{" "}
                                  </Button>
                                )}
                                {h.book && (
                                  <Button
                                    color={"primary"}
                                    tag={"a"}
                                    href={h.book}
                                    target={"_blank"}
                                  >
                                    Book now
                                  </Button>
                                )}
                              </ButtonGroup>
                            </div>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </TabPanel>
                </div>
              </>
            ),
          }}
        />
        <HeroFull
          content={{
            title: "Tourism",
            inside: (
              <>
                <div className={"tabsPanel"}>
                  <TabPanel value={this.state.selectedPlace} index={0}>
                    This year we don't provide tourism info in Ho Chi Minh city.
                    Please check Vinh Long tab.
                  </TabPanel>
                  <TabPanel value={this.state.selectedPlace} index={1}>
                    <p>
                      Coming to Vinh Long, visitors have chance to walk among
                      the trees, relax in hammocks, try all kinds of delicious
                      tropical fruits in the gardens of An Binh and Binh Hoa
                      Phuoc islands. Several popular places are{" "}
                      <strong>
                        Mr. Sau Giao's Flower Garden, Mr. Muoi Day's
                        Stilt-House, and Mr. Hai Hoang's Old House
                      </strong>
                      , CocoHome Vinh Long, especially is 'Kingdom of Brick
                      Kilns’, Mang Thít County.
                    </p>
                    <h5>Mang Thít, Vĩnh Long's 'Kingdom of Brick Kilns'</h5>
                    <Carousel autorotate={true} style={{ display: "flex" }}>
                      <CarouselItem>
                        <Card sx={{ width: "100%" }}>
                          <CardMedia
                            component="img"
                            image={require(`./../assets/images/other/mangthit.jpg`)}
                            style={{ height: 400 }}
                          />
                        </Card>
                      </CarouselItem>
                      <CarouselItem>
                        <Card sx={{ width: "100%" }}>
                          <CardMedia
                            component="img"
                            image={require(`./../assets/images/other/mangthit2.jpg`)}
                            style={{ height: 400 }}
                          />
                        </Card>
                      </CarouselItem>
                      <CarouselItem>
                        <Card sx={{ width: "100%" }}>
                          <CardMedia
                            component="img"
                            image={require(`./../assets/images/other/mangthit3.jpg`)}
                            style={{ height: 400 }}
                          />
                        </Card>
                      </CarouselItem>
                      <CarouselItem>
                        <Card sx={{ width: "100%" }}>
                          <CardMedia
                            component="img"
                            image={require(`./../assets/images/other/mangthit4.png`)}
                            style={{ height: 400 }}
                          />
                        </Card>
                      </CarouselItem>
                      <CarouselItem>
                        <Card sx={{ width: "100%" }}>
                          <CardMedia
                            component="img"
                            image={require(`./../assets/images/other/mangthit5.png`)}
                            style={{ height: 400 }}
                          />
                        </Card>
                      </CarouselItem>
                      <CarouselItem>
                        <Card sx={{ width: "100%" }}>
                          <CardMedia
                            component="img"
                            image={require(`./../assets/images/other/mangthit6.png`)}
                            style={{ height: 400 }}
                          />
                        </Card>
                      </CarouselItem>
                      <CarouselItem>
                        <Card sx={{ width: "100%" }}>
                          <CardMedia
                            component="img"
                            image={require(`./../assets/images/other/mangthit7.jpg`)}
                            style={{ height: 400 }}
                          />
                        </Card>
                      </CarouselItem>
                      <CarouselItem>
                        <Card sx={{ width: "100%" }}>
                          <CardMedia
                            component="img"
                            image={require(`./../assets/images/other/mangthit8.jpg`)}
                            style={{ height: 400 }}
                          />
                        </Card>
                      </CarouselItem>
                      <CarouselItem>
                        <Card sx={{ width: "100%" }}>
                          <CardMedia
                            component="img"
                            image={require(`./../assets/images/other/mangthit9.jpg`)}
                            style={{ height: 400 }}
                          />
                        </Card>
                      </CarouselItem>
                    </Carousel>
                    <p>
                      Besides, Vinh Long has many pagodas, communal houses such
                      as Van Thanh Temple, Long Thanh Communal House, Ngoc Vien
                      Vihara, Phuoc Hau, Tien Chau, Saghamangala pagodas...
                    </p>
                    <p>
                      Vinh Long also has many craft villages specializing in
                      producing coconut products, handicraft products from water
                      hyacinth leaves, candies, and many other handmade items.
                    </p>
                    <Card sx={{ width: "100%" }}>
                      <CardMedia
                        component="img"
                        image={require(`./../assets/images/other/vl.png`)}
                        // style={{height:400}}
                      />
                    </Card>
                    <GenericSection>
                      <SectionHeader
                        data={{ title: "Things to see and do in Vinh Long?" }}
                        className="center-content"
                      />
                      <div style={{ textAlign: "left" }}>
                        <h4>1. Tien Chau Pagoda</h4>
                        <p>
                          Tien Chau Pagoda is one of the beautiful destinations
                          on An Binh islet, recognized as a national
                          historical-cultural relic. To get here, from Vinh Long
                          city, you pass An Binh ferry, take a short boat ride
                          to Tien Chau pagoda. Entering the temple, you will
                          admire the temple’s interior hall, which is
                          beautifully decorated and elegant. In the middle of
                          the four pillars is the worshipping ceremony, inside
                          the giant Buddha statue of Amida. This will be the
                          destination for those who love spiritual travel and
                          discover nostalgic beauty.
                        </p>
                        <h4>2. Brickyard</h4>
                        <p>
                          The traditional village of making pottery and brick
                          burning stretching over 30km, nestled on the romantic
                          Co Chien stream of Vinh Long city, Long Ho district.
                          And Mang Thit is also a place not to be missed when
                          coming to this land. The Red Kingdom is the title
                          given by folk to Vinh Long land, a long-standing trade
                          village. It one of the largest localities with the
                          largest brick kilns and handicrafts in the Mekong
                          Delta. There are nearly 1000 brick production
                          facilities located closely, but over time, the brick
                          kingdom is no longer the same. But remains the
                          nostalgia, the moss, the remains of the ancient city
                          still have a strange attraction.
                        </p>
                        <h4>3. Temple Of Literature</h4>
                        <p>
                          Vinh Long not only has sweet fruits but also is a land
                          of great people. Besides the Western river garden
                          tourist style. Visitors will visit the relic Van Thanh
                          Temple, Vinh Long Temple. It’s located on the bank of
                          Long Ho River (in Ward 4- Vinh Long City). This is one
                          of the first three sacred shrines built in the South
                          with Van Thanh Temple of Bien Hoa (in Dong Nai
                          province) and Van Thanh Temple (present-day Saigon).
                          Here, visitors will enjoy the peace, cool, relax the
                          spirit, admire the ancient architecture. It’s one of
                          the best way to learn more about the culture and
                          history of the Vietnamese people and show their
                          sincerity grateful to the predecessors.{" "}
                        </p>
                        <h4>4. Hoang Hao Ecotourism Area</h4>
                        <p>
                          It is located on Highway 57, 2 km from Dinh Khao
                          ferry, in Thanh Duc commune, Long Ho district, Vinh
                          Long province. This is a brand new, super beautiful
                          eco-tourist area of Vinh Long province. This place not
                          only possesses the cool green scenery of the West with
                          extremely fresh air; But there are also mini houses
                          with thatched roofs, corrugated iron roofs, and a
                          strikingly colourful wall below.
                        </p>
                        <h4>5. Vinh Sang Eco-Tourism Area</h4>
                        <p>
                          If you ask a place for collective entertainment in
                          Vinh Long, probably many people will show you to Vinh
                          Sang eco-tourism area. Vinh Sang farm has a triangular
                          shape with a prime point of one side-lying on the
                          banks of the Co Chien River, opposite Vinh Long city.
                          Perhaps nowhere outside this tourist area allows you
                          to admire many rare animals. Such as bears, goats,
                          pelicans, python, mangrove, star deer, boar,
                          pink-cheeked gibbons, monkeys, peacocks, chickens.
                          Especially in Vinh Sang, the crocodile farming area of
                          about 200m2 will be a paradise for those who like
                          strong feelings. Possessing such unique points, the
                          resort still creates a feeling of closeness like a
                          real Southern garden. The spacious and open space is
                          extremely suitable for fun “wild”: grass slide, try
                          shooting skills, kick cock, throwing balls,
                          blindfolded ostrich feathers, winning fishing … If you
                          do not like noise, solo travellers can enjoy the
                          feeling of peace in the fishing huts.{" "}
                        </p>
                        <h4>6. Tra On Floating Market</h4>
                        <p>
                          If you want to learn about the cultural
                          characteristics of the people of Vinh Long, go to Tra
                          On floating market. About 250m from Tra On, the
                          floating market downstream of the Hau River. It’s
                          length of over 300m, often meeting according to the
                          country so the big country is crowded. Tra On Floating
                          Market is like a wholesale market that distributes
                          agricultural products to many other small markets in
                          the province. Therefore, even if you visit the market
                          at any time of the day, you will see a bustle of
                          boats.{" "}
                        </p>
                        <h4>7. My Thuan Bridge</h4>
                        <p>
                          This graceful architectural bridge is a collaboration
                          between experts, engineers and workers from Australia
                          and Vietnam. The bridge outside the “main duty” is to
                          connect Vinh Long and Ho Chi Minh City also represents
                          a very good symbolic mission for the hometown city.
                          Tourists who have the opportunity to visit the West or
                          Vinh Long tourism will stop to check-in at this bridge
                          as a commemoration of their trip. As for the young
                          people who love to travel in Vinh Long, the bridge has
                          many extreme “virtual living” niches, creating the
                          perfect background to mark the moments of youth who
                          are passionate about exploring.
                        </p>
                        <h4>8. Khmer Pu Ly Pagoda</h4>
                        <p>
                          Phu Ly Pagoda is located in Dong Thanh Commune, Binh
                          Minh District, Vinh Long Province. As an ancient
                          temple built by the Khmer people has a very unique
                          architecture, characteristic of Khmer culture.
                          Especially the combination of Indian, Thai and
                          Cambodian architecture. According to records, Phu Ly
                          pagoda was built by the Khmer in 1672. Up to now, the
                          pagoda is nearly 350 years old, but its ancient beauty
                          is still intact. The temple has a quite spacious
                          campus. In the palace, there are many Buddha pictures,
                          outside there is a giant stone Buddha statue is very
                          solemn and majestic. Phu Ly Pagoda is a sacred place
                          hiding many mysterious anecdotes. Ancient features of
                          the temple are adorned with ancient star trees and
                          palm trees in the temple garden.
                        </p>
                        <h4>9. Islet May</h4>
                        <p>
                          It is a large islet located on the Hau River in two
                          communes Phu Thanh, Luc Si Thanh, in Tra On district,
                          Vinh Long province. Cu Lao May has inherited the
                          freshwater and alluvium of the Hau Giang River. It’s
                          lush fruit gardens all year round, becoming an
                          extremely attractive garden tourist destination.
                          Coming to Cu Lao May, you will visit picking
                          specialities: rambutan, longan, grapefruit … enjoy
                          folk dishes. Such as Garden Chicken Porridge,
                          lemongrass chicken stew or pangasius hot pot cooked
                          with Bananas with available vegetables, grilled
                          snakehead fish … You also have the opportunity to
                          learn about the idyllic lives of the local people,
                          immerse yourself in the cool air.
                        </p>
                        <br />
                        <strong>
                          <p style={{ textDecoration: "underline" }}>
                            Some interesting things you should know when
                            traveling in Vinh Long
                          </p>
                          In Vinh Long gardens travel tour, one of the most
                          interesting things is that visitors can stand in boats
                          passing the islands when the winds strongly blow
                          around, contemplate the green of larger fruit islands
                          which is so fresh-viewed. They can put their souls
                          into a pure, peaceful air and enjoy a cold coconut.
                        </strong>
                        <br />
                        <p>
                          For a long time, Vinh Long has been famous about fruit
                          gardens having so many kinds of fruits, green leaves
                          all years and the fruits are very sweet.
                        </p>
                        <div style={{ width: "100%" }}>
                          <Card
                            sx={{
                              width: "100%",
                              maxWidth: 400,
                              margin: "auto",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={require(`./../assets/images/other/buoi.jpg`)}
                              style={{ height: 400 }}
                            />
                            <CardContent>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Nam Roi Binh Minh polemo
                              </Typography>
                            </CardContent>
                          </Card>
                        </div>
                        <p>
                          Vinh Long is the hometown of famous Nam Roi Binh Minh
                          polemo. Vinh Long polemo has less pips, equal
                          segments, and fresh sweet taste. The name Nam Roi has
                          its own story. Nam Roi polemo was formerly found by
                          Mr. Buoi Tran Van. People say that being afraid that
                          family children would take the grape fruits losing the
                          specious seed, Mr. Buoi threatened to punish the
                          person who took the fruits by five times beaten of rod
                          (means “nam roi”). Due to this, the polemo was named
                          “Nam Roi”.
                        </p>
                        <div style={{ width: "100%" }}>
                          <Card
                            sx={{
                              width: "100%",
                              maxWidth: 400,
                              margin: "auto",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={require(`./../assets/images/other/rambutan.jpg`)}
                              style={{ height: 400 }}
                            />
                            <CardContent>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Ripe bunches of rambutan
                              </Typography>
                            </CardContent>
                          </Card>
                        </div>
                        <p>
                          In Vinh Long, people can also find many types of Binh
                          Hoa Phuoc rambutan which is consider the tastiest
                          nation-wide. Everyone who has visited Vinh Long surely
                          can’t forget the image of brightly red ripe bunches of
                          rambutan. Troc (tróc) rambutan has oval fruits that
                          are deep red, have soft thorns, milky pulp and sweet
                          taste when being ripe. Java rambutan has circle fruit,
                          short thorns, good-smelting. Longan rambutan is
                          smaller, ripe fruits have dark -yellow-and-green
                          covers, milky pulp, and smell of ripe longan. The
                          gathering reason of rambutan is normally about from
                          May to July but now, Vinh Long gardeners have
                          successfully researched to grow new type of rambutan
                          trái mùa.
                        </p>
                        <div style={{ width: "100%" }}>
                          <Card
                            sx={{
                              width: "100%",
                              maxWidth: 400,
                              margin: "auto",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={require(`./../assets/images/other/longan.jpg`)}
                              style={{ height: 400 }}
                            />
                          </Card>
                        </div>
                        <p>
                          When the rambutan reason ends, it’s time to start
                          enjoying longan. Visiting Vinh Long, guests will have
                          chance to try xuong longan (nhãn xuồng), small longan
                          (nhãn tiêu) which have thick pulp, thin covers, is
                          yellow, juicy and very sweet. The luxuriant bunchs of
                          longan appear and disappear in the green leaves
                          attracting the visitors.
                        </p>
                        <div style={{ width: "100%" }}>
                          <Card
                            sx={{
                              width: "100%",
                              maxWidth: 400,
                              margin: "auto",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={require(`./../assets/images/other/vlf.jpg`)}
                              style={{ height: 400 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              Vinh Long fruits are various
                            </Typography>
                          </Card>
                        </div>
                        <p>
                          Moreover, this large garden area is well-known about
                          Tam Binh green-covered orange (cam sành) that is not
                          only big but also purely sweet. There are also many
                          other kinds of fruits here such as: durian (Ri6, Chin
                          Hoa), sugar mandarin, mango (Hoa Loc, Cat Chu)…
                        </p>
                        <p>
                          Travelling to Vinh Long, entering each fruit gardens,
                          picking the bunches of fresh and tasty fruits and
                          listening to don ca tai tu (đờn ca tài tử _ one kind
                          of folk singing) are the way joining in real Southern
                          garden cultural air.
                        </p>
                        <div style={{ width: "100%" }}>
                          <Card
                            sx={{
                              width: "100%",
                              maxWidth: 400,
                              margin: "auto",
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={require(`./../assets/images/other/snake.jpg`)}
                              style={{ height: 400 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                              Grilled snake-head
                            </Typography>
                          </Card>
                        </div>
                        <p>
                          Don’t forget to go to the ditch to bail fishes then
                          enjoy the grilled snake-head dish made by the fishes
                          caught yourself.
                        </p>
                      </div>
                    </GenericSection>
                  </TabPanel>
                </div>
              </>
            ),
          }}
        />
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
