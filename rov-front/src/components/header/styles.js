import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#2E3B55'
    },
    toolbar: {
        justifyContent: 'space-between'
    },
    about: {
        paddingLeft: '38%'
    },
    link: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginLeft: theme.spacing(2),
    },
}));

export default useStyles;