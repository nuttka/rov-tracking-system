import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: '#2E3B55'
    },
    toolbar: {
        justifyContent: 'space-between'
    },
    typotitle: {
        paddingRight: "31.5%",
        paddingLeft: "0.5%"
    },
    typo: {
        paddingLeft: '2.5%'
    }
}));

export default useStyles;