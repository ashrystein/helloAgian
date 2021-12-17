import axios from 'axios'

import { BASEURL } from './config'

const getBounties = async (clintID) => {
  const endpointURL = `${BASEURL}clients/${clintID}/bounties/`
  const data = await axios.get(endpointURL)
  return data
}
export { getBounties }
