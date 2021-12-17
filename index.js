import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import { AppNavigation } from './src/Navigation'

AppRegistry.registerComponent(appName, () => AppNavigation)
