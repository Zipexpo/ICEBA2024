import React from "react";
import {CssBaseline} from "@mui/material";
import HeroFull from "../components/sections/HeroFull";
import Image from "../components/elements/Image";

class Upcoming extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <HeroFull content={{title:<a target="_blank" href="https://forms.gle/gRbujFsLi9fmRUe47">Upcoming!</a>,
                    inside:<>
                        <Image src={require(`./../assets/images/venue/inside1.jpg`)}
                               width={800}
                               height={400}/>
                    </>}}/>
            </React.Fragment>
        );
    }
}

export default Upcoming;