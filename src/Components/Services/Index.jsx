import React from 'react'
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
  ServicesIcon,
} from './ServiceElements'
import Icon1 from '../../Images/1.svg'
import Icon2 from '../../Images/Vf.svg'
import Icon3 from '../../Images/Account.svg'

const Services = ({ id, title, lightBg, children }) => {
  const icons = { Icon1, Icon2, Icon3 }

  return (
    <>
      <ServicesContainer lightBg={lightBg} id={id}>
        <ServicesH1>{title}</ServicesH1>
        <ServicesWrapper>
          {children.map(obj => (
            <ServicesCard>
              <ServicesIcon src={icons[obj.icon]} />
              <ServicesH2>{obj.subtitle}</ServicesH2>
              <ServicesP>{obj.content}</ServicesP>
            </ServicesCard>
          ))}
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
