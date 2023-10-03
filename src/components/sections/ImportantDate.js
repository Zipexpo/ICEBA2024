import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import {timeFormat} from 'd3'
import {isArray} from "lodash";
import {submissionLink} from "../../utils/ulti";
import {Link} from "react-router-dom";
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

// const _event = [
//     {key:'Paper Submissions Due',date: '8/22/2022'},
//     {key:'Notification of Acceptance',date: '10/10/2022'},
//     {key:'Camera ready papers due',date: '10/31/2022'},
//     // {key:'Early registration Deadline',date: '10/15/2022'},
//     // {key:'Conference',date: ['12/6/2021','12/9/2021']},
// ]
const _event = [
    {key:'Abstract submission and registration',date: '10/30/2023', href:submissionLink},
    {key:'Full paper submission for presentation',date: '11/15/2023', href:submissionLink},
    {key:'Conference payment fee',date: '11/15/2023',prefix:'before', href:'./registration'},
    {key:'Session schedule announcement',date: '11/20/2023', href:'./programme'},
    {key:'Conference day',date: ['12/8/2023','12/9/2023'], href:'./programme'},
    {key:'Full paper submission for publication',date: '12/30/2023', href:submissionLink},
    // {key:'Conference',date: ['12/6/2021','12/9/2021']},
]
class ImportantDate extends React.Component {

    render() {
        const {
            className,
            topOuterDivider,
            bottomOuterDivider,
            topDivider,
            bottomDivider,
            hasBgColor,
            invertColor,
            event,
            extra,
            compact,
            ...props
        } = this.props;

        const outerClasses = classNames(
            'clients section reveal-fade',
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color',
            className
        );

        const innerClasses = classNames(
            'clients-inner section-inner',
            topDivider && 'has-top-divider',
            bottomDivider && 'has-bottom-divider'
        );

        return (
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container">
                    <h2>Important Dates</h2>
                    <div
                        // className={innerClasses}
                    >
                        <ul className="list-reset">
                            {(event??_event).map(e=><li key={e.key} className="tiles-item reveal-from-top" data-reveal-delay="200" style={{maxWidth:'unset'}}>
                                <div className={"time-card tiles-item-inner has-shadow"}>
                                    <div className={"time"}>
                                        {e.prefix&&<h6 style={{margin:0}}>{e.prefix}</h6>}
                                        {
                                            isArray(e.date)?<>
                                                <h3>{e.date.map(d=>timeFormat('%d')(new Date(d))).join('-')}</h3>
                                                <strong>{timeFormat('%b')(new Date(e.date[0]))}</strong>
                                            </>:<>
                                                <h3>{e.date==='TBD'?"TBD":timeFormat('%d')(new Date(e.date))}</h3>
                                                <strong>{timeFormat('%b')(new Date(e.date))}</strong>
                                            </>
                                        }
                                    </div>
                                    {
                                        e.href?(e.href.match("http")?<a href={e.href} target="_blank">{e.key}</a>:
                                            <Link to={e.href} target="_blank">{e.key}</Link>):<span>{e.key}</span>
                                    }
                                </div>
                            </li>)}
                        </ul>
                        {extra}
                    </div>
                </div>
            </section>
        );
    }
}

ImportantDate.propTypes = propTypes;
ImportantDate.defaultProps = defaultProps;

export default ImportantDate;
