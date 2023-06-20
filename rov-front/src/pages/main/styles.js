import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 0, 3)
    },
    icon: {
        marginRight: '20px'
    },
    centerText: {
        textAlign: 'center',
    },
}));

export default useStyles;