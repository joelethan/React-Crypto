import React, { useState } from 'react'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    ArrowForward,
    HeroContent,
    HeroP,
    HeroTitle,
    HeroBtnWrapper,
    ArrowRight
} from '../Hero/HeroElements'
import { Button } from '../../Utilities/ButtonElements'
import Video from '../../Videos/_video.mp4'
import './styles.css'

const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => setHover(!hover);
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    {/* Spiritual Leader */}
                    {/* <HeroTitle>Abd Al-Rahman Al-Jifri</HeroTitle> */}

                    {/* Legacy */}
                    {/* abdul qadir al jifri */}
                    <HeroTitle>Abdul Qadir Al-Jifri</HeroTitle> 
                    <HeroTitle>Foundation</HeroTitle>
                    <HeroP>
                        This Foundation is crafted to expand and enrich the Islamic culture within diverse communities. We draw inspiration from the profound legacy and works of our forefather <span style={{ fontWeight: 'bold' }}>Sharif Abdul Qadir Al-Jifri.</span>
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button
                            to="signup"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                        >
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
