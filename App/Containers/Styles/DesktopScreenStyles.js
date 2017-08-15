import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
export default StyleSheet.create({
    ...ApplicationStyles.screen,
    container: {
        // paddingBottom: Metrics.baseMargin
        backgroundColor: "#fff",
        height: 680,
        width: 420
    },
    map:{
        ...StyleSheet.absoluteFillObject,
    }
});