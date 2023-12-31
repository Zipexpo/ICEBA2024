import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Card from "@mui/material/Card";
import {CardContent, CardHeader, Stack, Typography} from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import IconButton from "@mui/material/IconButton/IconButton";

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      content,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const {title,authorName,orgName,abstract,bio,avatar,abstractFile,bioFile} = content??{}
    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>

              <div className="split-item reveal-from-top">
                <div className="split-item-content center-content-mobile stress" style={{textAlign: 'center'}}>
                  <h4 className="mt-0 mb-16">
                    {title}
                  </h4>
                  <h5 className="team-item-name mb-4">
                    {authorName ?? "Testing Name"}
                  </h5>
                  <p className={"m-0 text-sm"}>{orgName}</p>

                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-04 stress',
                    imageFill && 'split-item-image-fill'
                  )}>
                  <div className="tiles-item" style={{margin:'auto'}}>
                    <div className="tiles-item-inner">
                      <div className="team-item-header">
                        <div className="team-item-header tiles-item">
                          <div className={`team-item-image mb-24 illustration-element-06`}>
                            {avatar&&<Image
                                src={require(`./../../assets/images/${avatar}`)}
                                alt="Features split top 02"
                                width={212}
                                height={212}/>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"container-lg"} >
                <Stack spacing={2}>
                  <Card>
                    <CardContent>
                      <Typography sx={{marginBottom:2}} variant={'h5'}>Abstract
                        <IconButton
                          href={abstractFile}
                          target={'_blank'}
                          download>
                        <DownloadIcon/>
                      </IconButton>
                      </Typography>
                      <div style={{maxHeight:200, overflow:'auto'}}>{abstract}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent>
                      <Typography sx={{marginBottom:2}} variant={'h5'}>Biography
                        <IconButton
                            href={bioFile}
                            target={'_blank'}
                          download>
                        <DownloadIcon/>
                      </IconButton>
                      </Typography>
                      <div style={{maxHeight:200, overflow:'auto'}}>{bio}</div>
                    </CardContent>
                  </Card>
                </Stack>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

const img01Style = {
  position: 'absolute',
  width: '139.77%',
  maxWidth: '139.77%',
  top: '-13.89%',
  left: '-16.47%'
}

const img02Style = {
  position: 'absolute',
  width: '140.91%',
  maxWidth: '140.91%',
  top: '-13.88%',
  left: '-24.43%'
}

const img03Style = {
  position: 'absolute',
  width: '212px',
  maxWidth: '212px',
  height:'auto',
  top: '20px',
  left: '16.47%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
