import React from 'react'
import { agencies } from '@/data/Agencies'
import AgenciesSection from '../comman/AgenciesSection'

const Agencies = () => {
  return (
    <AgenciesSection
      agencies={agencies}
      title='Raising Funds'
      description='Lorem ipsum dolor sit amet consectetur. Venenatis pretium tellus quis imperdiet tristique faucibus nunc. Nisl malesuada sed duis lacus cras. Non lacinia et sed est semper tortor. Enim dictum nisi metus molestie commodo ac purus eu aliquam.'
    />
  )
}

export default Agencies